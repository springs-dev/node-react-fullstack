
const jwt = require('jsonwebtoken');

module.exports = async function (req, res, proceed) {

  let token = req.headers.jwt;

  let decoded;

  try{
    decoded = jwt.verify(token, process.env.APP_SECRET_KEY);
  }catch(e){
    req.session.uid = '';
    return res.status(401).json({error: "Access Denied"});
    //return res.forbidden();
  }

  req.session.uid = decoded.uid;
  req.session.role = decoded.role;

  let user = {
    role: decoded.role,
    uid: decoded.uid,
    email: decoded.email
  };

  let newToken = jwt.sign(user, process.env.APP_SECRET_KEY, {expiresIn: "24h"});

  res.set('jwt', newToken);

  return proceed();
};