import { cookies } from "next/headers";

export function CheckIfIDPWExist() {
  console.log("1212421414214");
  console.log(cookies().get("theme"));
}
