const admin = require("firebase-admin");
const querystring = require("querystring");

const serviceAccount = require("../serviceAccount.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
exports.handler = async function (event, context) {
    // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

    return {
        statusCode: 200,
        body: event.body,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "POST, OPTION",
          },
      };
    };