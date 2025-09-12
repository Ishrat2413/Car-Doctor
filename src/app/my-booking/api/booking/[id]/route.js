import { ObjectId } from "mongodb";
import { connectDB } from "../../../../../lib/connectDB";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({ message: "Deleted Booking", response: resp });
  } catch (error) {
    return Response.json({ message: "Something went Wrong." });
  }
};
export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const updatedDoc = await request.json();
  try {
    const resp = await bookingsCollection.updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: {
          ...updatedDoc,
        },
      },
      { upsert: true }
    );
    return Response.json({ message: "Updated the Booking", response: resp });
  } catch (error) {
    return Response.json({ message: "Something went Wrong." });
  }
};
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({ message: "Booking Found", response: resp });
  } catch (error) {
    return Response.json({ message: "Something went Wrong." });
  }
};
