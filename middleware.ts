import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Your authentication configuration here
});

export const config = {
    matcher: [
        // '/dashboard',
        '/(api|trpc)(.*)',
    ],
    public: [
        '/',
    ],
};
