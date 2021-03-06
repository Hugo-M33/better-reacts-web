const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccount.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
exports.handler = async function (event, context) {
  const db = admin.firestore();

  const imgCol = await db.collection("d-images").get();
  const vidCol = await db.collection("d-videos").get();
  const CPCol = await db.collection("d-copypasta").get();
  const audioCol = await db.collection("d-audio").get();
  
  let images = imgCol.docs;
  let videos = vidCol.docs;
  let copypastas = CPCol.docs;
  let audios = audioCol.docs;

  let all = [];

  images.map((doc) => all.push(doc.data()));
  videos.map((doc) => all.push(doc.data()));
  copypastas.map((doc) => all.push(doc.data()));
  audios.map((doc) => all.push(doc.data()));

  console.log(JSON.stringify(all));

  return {
    statusCode: 200,
    body: JSON.stringify(all),
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
  };
};
