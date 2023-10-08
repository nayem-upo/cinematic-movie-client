import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Your authentication configuration here
});

export const config = {
    matcher: [
        '/dashboard',
        '/(api|trpc)(.*)',
        // '/details/1',
        // '/details/2',
        // '/details/3',
        // '/details/4',
        // '/details/5',
        // '/details/6',
        // '/details/7',
        // '/details/8',
        // '/details/9',
        // '/details/10',
        // '/details/11',
        // '/details/12',
        // '/details/13',
        // '/details/14',
    ],
    public: [
        '/',
    ],
};
