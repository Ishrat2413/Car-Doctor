import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/connectDB";

export const POST = async (request) => {
  const newBooking = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const res = await bookingsCollection.insertOne(newBooking);
    return NextResponse.json({ message: "Booked Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};