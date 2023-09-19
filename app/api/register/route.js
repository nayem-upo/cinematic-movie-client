import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../lib/mongodb";
import User from "../../../models/user";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const hashPassword = await bcrypt.hash(password, 10)
        await connectMongoDb();
        await User.create({ name, email, password: hashPassword });

        return NextResponse.json({ message: "User Registered.", status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}