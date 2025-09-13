import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/connectDB";
// import { services } from "../../../../services/getServices";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    await servicesCollection.deleteMany();
    const resp = await servicesCollection.insertMany(services);
    return NextResponse.json({"message": "Seeded Successfully"})
  } catch (error) {
    console.log(error);
  }
};
