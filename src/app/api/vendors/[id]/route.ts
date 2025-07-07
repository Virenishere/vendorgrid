import { NextRequest, NextResponse } from "next/server";
import Vendor from "@/models/Vendor";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

type SegmentParams = { id: string };
type RouteContext = { params: Promise<SegmentParams> };

// GET - Fetch vendor
export async function GET(
  req: NextRequest,
  context: RouteContext
) {
  try {
    await connectDB();

    const { id } = await context.params; 
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid vendor ID" }, { status: 400 });
    }

    const vendor = await Vendor.findById(id);
    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    return NextResponse.json(vendor);
  } catch (error) {
    console.error("GET vendor error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT - Update vendor
export async function PUT(
  req: NextRequest,
  context: RouteContext
) {
  try {
    await connectDB();

    const { id } = await context.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid vendor ID" }, { status: 400 });
    }

    const body = await req.json();
    const updatedVendor = await Vendor.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedVendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    return NextResponse.json(updatedVendor);
  } catch (error) {
    console.error("PUT vendor error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE - Delete vendor
export async function DELETE(
  req: NextRequest,
  context: RouteContext
) {
  try {
    await connectDB();

    const { id } = await context.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid vendor ID" }, { status: 400 });
    }

    const deleted = await Vendor.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Vendor deleted successfully" });
  } catch (error) {
    console.error("DELETE vendor error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


