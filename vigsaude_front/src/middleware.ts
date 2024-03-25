import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import authService from "@/services/auth-service"
 
export const config = {
	matcher: "/((?!.*\\.|api\\/).*)" 
}

const publicRoutes = ["/login", "/teste", "/cadastro"]

export async function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname
	if(publicRoutes.includes(pathname)) {
		return NextResponse.next()
	}

	const sessionCookie = cookies().get("session")
	if(sessionCookie && await authService.validateSessionToken()){
		return NextResponse.next()
	}

	return NextResponse.redirect(new URL("/login", req.url))
}