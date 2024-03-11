"use server"

export async function login(formdata: FormData) {
	const userInfo = {
		user: formdata.get("user"),
		password: formdata.get("password"),
		keepLogged: formdata.get("keepLogged")
	}

	const req = await fetch("http://localhost:8036/login", {
		method: "POST",
		body: JSON.stringify(userInfo)
	})

	const data = await req.json()
    
	console.log(data)
	return data
}
