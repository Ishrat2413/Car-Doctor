import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resolvedParams = await params; 
    const myBookings = await bookingsCollection
      .find({ email: resolvedParams.email })
      .toArray();
    return NextResponse.json({ myBookings });
  } catch (error) {
    console.log(error);
  }
};
