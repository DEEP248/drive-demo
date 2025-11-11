const Firebase = require("firebase-admin");
const serviceAccount = require("../drive-d3004-firebase-adminsdk-fbsvc-579f260dea.json");

const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: "drive-d3004.appspot.com",
});

module.exports = Firebase;
