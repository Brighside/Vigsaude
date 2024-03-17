import * as jose from "jose"
import { JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers"

async function openSessionToken(jwt: string) {
	const secret = jose.base64url.decode(process.env.SECRET as string)
	const {payload} = await jose.jwtVerify(jwt, secret)

	return payload
}

async function createSessionToken(payload: JwtPayload) {
	const secret = jose.base64url.decode(process.env.SECRET as string)

	const expirationTime = await payload.keepLogged ? "7d" : "2h"
	const jwt = await new jose.SignJWT({ "username": payload.username})
		.setProtectedHeader({alg: "HS256"})
		.setIssuedAt()
		.setExpirationTime(expirationTime)
		.sign(secret)

	const { exp /*, role*/ } = await openSessionToken(jwt)

	cookies().set("session", jwt, {
		httpOnly: true,
		expires: (exp as number) * 1000,
		path: "/",
	})
}

async function validateSessionToken() {
	const jwt = cookies().get("session")?.value 
	if (jwt) {
		const {exp} = await openSessionToken(jwt)
		const currentTime = new Date().getTime()
		return (exp as number) <= currentTime
	}

	return false
}

const authService = {
	openSessionToken,
	createSessionToken,
	validateSessionToken
}

export default authService