import { NextResponse } from "next/server";

export default function (req) {
  // make sure there is always a session cookie
  // this before every page loads

  // get the actual response for the page about to render
  const response = NextResponse.next();

  const sid = req.cookies.sid;
  if (!sid) {
    const new_sid = crypto.randomBytes(18).toString("base64");
    response.cookie("sid", new_sid, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}
