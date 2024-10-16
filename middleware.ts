import { withAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
    return withAuth(req);
}

//Matcher allows you to filter Middleware to run on specific paths.
export const config = {
    matcher: ["/create-post"],
}