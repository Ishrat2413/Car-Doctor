import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    // fixed typo: findOne instead of fineOne
    const existed = await userCollection.findOne({ email: newUser.email });

    if (existed) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 304 }
      );
    }
    const hashPass = bcrypt.hashSync(newUser.password, 14);
    await userCollection.insertOne({ ...newUser, password: hashPass });

    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Something went wrong.", error: error.message },
      { status: 500 }
    );
  }
};
