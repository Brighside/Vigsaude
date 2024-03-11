import * as jose from "jose"

async function createSessionToken(payload: object) {
	const secret = jose.base64url.decode(process.env.SECRET)
	const jwt = await new jose.EncryptJWT({payload})
		.setProtectedHeader({alg: "dir", enc: "A128CBC-HS256"})
		.setExpirationTime("2h")
		.encrypt(secret)

	console.log(jwt)
	return jwt
}

const authService = {
	createSessionToken
}

export default authService