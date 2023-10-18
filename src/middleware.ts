import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./components/middlewares/withAuth";

export function middleWare(req: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(middleWare, ["/profile"]);
