import { NextResponse } from "next/server";
import { CheckIfIDPWExist } from "./app/function";

export function middleware(request) {
  let cookie = request.cookies.has("nextjs");
  console.log(cookie);
  //   CheckIfIDPWExist();
  return NextResponse.next();
}

export const config = {
  matcher: ["/recommendinsurance/:path*", "/settripplan/:path*"],
};
