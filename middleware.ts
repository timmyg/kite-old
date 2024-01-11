// export const config = {
//   runtime: 'nodejs',
// };

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
// import type { Database } from "@/libs/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  // const supabase = createMiddlewareClient<Database>({ req, res });

  // // Refresh session if expired - required for Server Components
  // await supabase.auth.getSession();
  const supabase = createMiddlewareClient({ req, res });
  // console.log("!!MIDDLEWARE");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return res;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  runtime: "nodejs",
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
