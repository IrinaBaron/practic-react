export interface User {
    id: string;
    username?: string;
    email: string;
    password: string;
}

export function registerUser (username:string, email: string, password: string):Promise<void> {
    return fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, password})
    }).then(() => undefined)
}

async function validateResponse (response: Response): Promise<Response> {
    if(!response.ok) {
        throw new Error(await response.text())
    }

    return response;
}

export function login(email: string, password: string): Promise<void> {
    return fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    })
    .then(validateResponse)
    .then(() => undefined)
}