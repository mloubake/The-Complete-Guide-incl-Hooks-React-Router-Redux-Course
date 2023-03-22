// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(request: Request, response: Response) {
  if (request.method === "POST") {
    const data = request.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mloubake:vfkJaLRM7wHCniZA@cluster0.lqj3xzz.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const database = client.db();

    const meetupsCollection = database.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    response.status(201).json();
  }
}

export default handler;
