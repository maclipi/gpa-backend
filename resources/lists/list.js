const SendOtp = require("sendotp");
module.exports = function listLists(req, res, next) {
  const sendOtp = new SendOtp("268583AdGud07n85c928832");
  var val = Math.floor(1000 + Math.random() * 9000);
  sendOtp.send(req.query.mobile, "PRIIND", val, function(error, data) {
    res.send({ number: req.query.mobile, otp: val });
    next();
  });
  console.log(req.query);
  //here we will name the function just for easier identifying problems in the logs
  //   res.send({ hey: req.query }); //restify gets the object and returns a http status code and json object
};
