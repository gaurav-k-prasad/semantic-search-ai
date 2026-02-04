import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const { body } = req;
  console.log(body);
}
