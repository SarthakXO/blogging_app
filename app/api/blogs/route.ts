import axios from "axios";
import { NextResponse } from "next/server";
export const GET = async () => {
  const data = await axios
    .get("https://dummyjson.com/posts")
    .then((res) => res.data);
  return NextResponse.json({ message: "Successfully fetched", data });
};
