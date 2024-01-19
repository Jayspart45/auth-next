import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDatafromToken";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);
    const user = await User.findOne({ _id: userID }).select("-password");
    return NextResponse.json({ admin: user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
