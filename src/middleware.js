// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export const middleware = async (request) => {
//   const cookieStore = cookies(request);

//   // Check for both development and production cookie names
//   const token =
//     cookieStore.get("__Secure-next-auth.session-token") ||
//     cookieStore.get("next-auth.session-token");

//   const pathname = request.nextUrl.pathname;

//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }

//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-booking/:path*", "/services/:path*"],
// };


import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const cookieStore = await cookies(); // Add await here
  
  // Check for both development and production cookie names
  const token = cookieStore.get("__Secure-next-auth.session-token") || 
                cookieStore.get("next-auth.session-token");
  
  const pathname = request.nextUrl.pathname;
  
  if (pathname.includes("api")) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
};

export const config = {
  matcher: ["/my-booking/:path*", "/services/:path*"],
};