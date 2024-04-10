import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const params = req.url;
  const length = params.length;
  let id = "";
  for (let i = length; i--; i > 0) {
    if (params[i] == "/") {
      break;
    }
    id = params[i] + id;
  }

  const data = await axios
    .get(`https://dummyjson.com/comments/post/${id}`)
    .then((res) => res.data);

  return NextResponse.json({
    message: `Fecthed comments for post ${id} successfully`,
    data,
  });
};
