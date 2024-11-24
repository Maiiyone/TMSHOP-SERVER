const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AR5Ij4ZQvj4PwR-G25-_SrU3AeYEeIEG6OrtJpULalcm2cBx7cI3QI7UJDuVqy98EqAxcnf1M6rlYmXf",
  client_secret: "EDvEkk2gQids9Qyp_AhSjOk8mM_aERMgcoi0m9RbNBwrin9i_4s7E-MGWl0onrF9k7suB5JivhhOqjDf",
});

module.exports = paypal;
