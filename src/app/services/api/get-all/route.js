import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const services = await servicesCollection.find().toArray();
    return NextResponse.json({services});
  } catch (error) {
    console.log(error);
  }
};
