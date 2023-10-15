import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();

  cookies().set("formData", body, { path: "/" });

  return Response.json({ result: "success" });
}
