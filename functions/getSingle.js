const admin = require("firebase-admin");
const querystring = require("querystring");

const serviceAccount = require("../serviceAccount.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

const getCollection = async (type) => {
    switch (type) {
        case "Video":
            return  db.collection("d-videos");
        case "Audio":
            return  db.collection("d-audio");
        case "Image":
            return  db.collection("d-images");
        case "Copypasta":
            return  db.collection("d-copypasta");
        case "Ratio":
            return db.collection("d-ratio");
            
    }
}
exports.handler = async function (event, context) {
    // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const collection = await getCollection(JSON.parse(event.body).type)
  const doc = await collection.doc(JSON.parse(event.body).key).get();
        if (!doc.exists) {
            return {
                statusCode: 400,
                body: JSON.stringify({key: "inexistant", link:"https://images-na.ssl-images-amazon.com/images/I/71po77VsbvL._AC_SY679_.jpg", defaultMessage: "", type: JSON.parse(event.body).type}),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "POST, OPTION",
                  },
              };
        }


    return {
        statusCode: 200,
        body: JSON.stringify(doc.data()),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "POST, OPTION",
          },
      };
    };