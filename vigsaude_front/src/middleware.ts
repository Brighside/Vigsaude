import { NextRequest, NextResponse } from "next/server"
 
export const config = {
	matcher: "/((?!.*\\.|api\\/).*)" 
}

const publicRoutes = ["/login"]

export function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname
	if(publicRoutes.includes(pathname)) {
		return NextResponse.next()
	}

	return NextResponse.redirect(new URL("/login", req.url))
}