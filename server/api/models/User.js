/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}
function generatePassword(length=8) {
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200
    },
    password: {
      type: 'string',
      required: true,
    },
    full_name: {
      type: 'string',
      maxLength: 240
    },
      role: {
      type: 'string',
      maxLength: 20
    },
    token: {
      type: 'string',
      maxLength: 32
    },
    properties: {
      collection: 'property',
      via: 'user'
    },
    announces: {
      collection: 'announce',
      via: 'user'
    },
    offers: {
      collection: 'offer',
      via: 'user'
    },
    providers: {
        collection: 'provider',
        via: 'user'
    }
  },

  validPassword: function(password, user) {
    return bcrypt.compareSync(password, user.password);
  },

  beforeUpdate: async function (values, next) {
    if (values.password) {
      values.password = await hashPassword(values.password);
    }
    next();
  },
  beforeCreate: async function (values, next) {
    if (values.password) {
      values.password = await hashPassword(values.password);
    }
    next();
  },
  findOrCreateBySocial: async function(data) {
      let foundUser;
      let provider = await Provider.findOne({'provider_type': data.type, 'social_id': data.id});
      if (provider) { //user found by provider
          foundUser = await User.findOne({id: provider.user});
          return foundUser;
      }else{
          foundUser = await User.findOne({email: data.email});
          if(!foundUser) {
              // registration new user
              let pass = generatePassword();
              foundUser = await User.create({
                  full_name: data.full_name,
                  email: data.email,
                  password: pass
              }).fetch().catch((err) => {
                  //console.log(err);
                  return false;
              });
              provider=await Provider.create({
                  user: foundUser.id,
                  provider_type: data.type,
                  social_id: data.id
              }).fetch().catch((err) => {
                  //console.log(err);
                  return false;
              });
              return foundUser;
          }else{
              // association with existing user
              provider = await Provider.create({
                  user: foundUser.id,
                  provider_type: data.type,
                  social_id: data.id
              }).fetch().catch((err) => {
                  //console.log(err);
                  return false;
              });
              return foundUser;
          }
      }
  }
};
