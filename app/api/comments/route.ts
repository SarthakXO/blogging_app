import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const response = await axios
    .post("https://dummyjson.com/comments/add", body)
    .then((res) => res.data);
  return NextResponse.json({
    success: true,
    message: "Comment posted Successfully",
    response,
  });
};
