import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Your authentication configuration here
});

export const config = {
    matcher: [
        '/(api|trpc)(.*)',
        '/dashboard',
    ],
    public: [
        '/',
    ],
};
