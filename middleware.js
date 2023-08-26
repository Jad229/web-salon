import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // console.log(req.nextUrl.pathname);
    // console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
);
//applies next-auth only to matching routes
export const config = { matcher: ["/admin", "/admin/:path*"] };
