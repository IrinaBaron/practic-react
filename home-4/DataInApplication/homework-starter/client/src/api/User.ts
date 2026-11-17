import z from "zod";

export const UserSchema = z.object({
    id: z.string(),
    username: z.string().optional(),
    email: z.string(),
    password: z.string().optional(),
})

export type User = z.infer<typeof UserSchema>;

export function fetchUser(id:string): Promise<User> {
    console.log(id)
    return fetch(`/api/users/me/`, {
        credentials: 'include',
    }).then((response) => response.json()).then(data => UserSchema.parse(data));
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