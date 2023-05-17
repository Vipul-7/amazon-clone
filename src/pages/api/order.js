import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const client = await MongoClient.connect(process.env.MONGODB_CONNECTION_STRING);

    const db = client.db();

    const ordersCollection = db.collection("orders");

    const result = await ordersCollection.insertOne(req.body);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Order inserted!" });
  }
};

export default handler;
