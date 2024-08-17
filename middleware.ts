import { authMiddleware } from "@clerk/nextjs";

export default authMiddle({});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
