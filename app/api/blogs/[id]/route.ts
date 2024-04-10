import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const params = req.url;
  const length = params.length;
  let id = "";
  for (let i = length; i--; i > 0) {
    console.log("running");
    if (params[i] == "/") {
      break;
    }
    id = params[i] + id;
  }

  //   const url = req.nextUrl.pathname;

  const data = await axios
    .get(`https://dummyjson.com/posts/${id}`)
    .then((res) => res.data);
  return NextResponse.json({
    message: `fecthed post ${id} successfully`,
    data,
  });
};
