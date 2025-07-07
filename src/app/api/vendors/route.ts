import { NextResponse } from "next/server";
import Vendor from "@/models/Vendor";
import connectDB from "@/lib/mongodb";

// get /api/vendors
export async function GET() {
  await connectDB();

  try {
    const vendors = await Vendor.find();
    return NextResponse.json(vendors);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch vendors" }, { status: 500 });
  }
}

// post /api/vendors
export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const vendor = await Vendor.create(body);
    return NextResponse.json(vendor, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create vendor" }, { status: 500 });
  }
}
