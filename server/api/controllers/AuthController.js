/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const rp = require('request-promise');
const {OAuth2Client} = require('google-auth-library');
const config = require('../../config/config');

const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');

function getJwtToken(user) {
  let userObj = {
    role: user.role!==''?user.role:'user',
    uid: user.id,
    email: user.email
  };
  return jwt.sign(userObj, process.env.APP_SECRET_KEY, {expiresIn: "24h"});
}

module.exports = {

  signup: async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
      return res.status(401).json({error: 'Please fill in all the fields'});
    } else {
      if (await User.find({email: email}) != false) {
        return res.status(401).json({error: 'User already exists'});
      }
    }

    User.create({email: email, password: password}).fetch()
        .then((user) => {

          let token = getJwtToken(user);

          return res.status(200).json({
                success: true,
                message: "User Registered successfully",
                token: token,
                email: user.email
              }
          );
        })
        .catch((err) => {
          return res.status(500).json(err);
        });
  },

  login: async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
      return res.status(401).json({err: 'username and password required'});
    }

    let foundUser = await User.findOne({email: email});

    if (!foundUser) {
      return res.status(401).json({err: 'Invalid email. User does not exist'});
    }

    if(config.adminEmails.indexOf(foundUser.email)!==-1){ // admin verify
        foundUser.role='admin';
    }else{
        foundUser.role='user';
    }
    let token = getJwtToken(foundUser);

    if (User.validPassword(password, foundUser)) {
      return res.json({
        success: true,
        token: token,
        user: foundUser.email
      });
    } else {
      return res.status(401).json({err: 'invalid username or password'});
    }
  },

  passwordRecoveryRequest: async function (req, res) {
    let email = req.body.email;

    if (!email) {
      return res.status(503).json({err: 'Email required'});
    }

    let user = await User.findOne({email: email});

    if (!user) {
      return res.status(401).json({error: 'User does not exist'});
    }

    let token = randomstring.generate(32);

    await User.update({id: user.id}, {token: token});

    await sails.helpers.mail('email_verification', 'Verification', user.email, {token: token});

    return res.status(200).json({success: true, message: `Email sent to ${user.email}`});
  },

  passwordRecoveryToken: async function (req, res) {
    let token = req.body.token;
    let password = req.body.new_password;

    if (!token || !password) {
      return res.status(401).json({err: 'Token and password must be provided'});
    }

    let user = await User.findOne({token: token});
    if (!user) {
      return res.status(401).json({error: 'Token is wrong'});
    }
    await User.update({id: user.id}, {password: password, token: ""});

    let jwtToken = getJwtToken(user);

    return res.status(200).json({
      success: true,
      message: 'Password changed',
      token: jwtToken,
      email: user.email
    });
  },
  facebook: async function(req, res) {
      let data = req.allParams();
      let options = {
          uri: 'https://graph.facebook.com/debug_token',
          qs: {
              input_token: data.accessToken,
              access_token: config.facebookAuth.clientID+'|'+config.facebookAuth.clientSecret,
          },
          headers: {
              'User-Agent': 'Request-Promise'
          },
          json: true // Automatically parses the JSON string in the response
      };
       rp(options)
          .then(async function (repos) {
              //console.log(repos);
              if(repos.data.is_valid===true){
                  let result=await User.findOrCreateBySocial(data);
                  //console.log('result',result);
                  if(result){
                      let token = getJwtToken(result);
                      return res.json({
                          success: true,
                          token: token,
                          user: result.email
                      });
                  }else{
                      return res.status(401).json({err: 'invalid auth data'});
                  }
              }else{
                  return res.status(401).json({error: 'Facebook token is not valid'});
              }

          })
          .catch(function (err) {
              //console.log('err',err);
              return res.status(401).json({error: err.data.error.message});
          });



  },

  google: async function(req, res) {
    let data = req.allParams();

    const client = new OAuth2Client(config.googleAuth.clientID);
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: data.accessToken,
            audience: config.googleAuth.clientID,
        });
        const payload = ticket.getPayload();
        return payload['sub'];
    }
     let userid = await verify().catch(console.error);

    if(userid&&userid===data.id){
        let result=await User.findOrCreateBySocial(data);
        //console.log('result',result);
        if(result){
            let token = getJwtToken(result);
            return res.json({
                success: true,
                token: token,
                user: result.email
            });
        }else{
            return res.status(401).json({err: 'invalid auth data'});
        }
    }else {
        return res.status(401).json({err: 'invalid auth data'});
    }
  },
};