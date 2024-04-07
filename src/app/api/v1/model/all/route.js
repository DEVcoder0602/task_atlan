import { NextResponse } from "next/server";

const models = require("../../../data/data");

export async function GET() {
  return NextResponse.json({ status: "success", data: models });
}
