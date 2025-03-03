import User from "@/models/user.models";
import { dbConfig } from "@/utils/DbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password)
      return new Response("Missing Fields", { status: 400 });
    await dbConfig();
    const user = await User.findOne({ $or: [{ email }, { password }] });
    if (user) return new Response("User already exists", { status: 400 });
    const newUser = await User.create({ email, password });
    const resUser = {
      _id: newUser._id,
      email: newUser.email,
    }
  return NextResponse.json(
      { message: "User created successfully", user: resUser },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error", error.message);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
