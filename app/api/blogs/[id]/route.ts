import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const params = req.url;
  const length = params.length;
  const id = params[length - 1];
  const data = await axios
    .get(`https://dummyjson.com/posts/${id}`)
    .then((res) => res.data);
  return NextResponse.json({
    message: `fecthed post ${id} successfully`,

    data,
  });
};
