import { json } from '@remix-run/node'

export async function loader(){

    return json({
        message: 'Hello from the server!'
    })
}

export async function action({request}){
    const method = request.method;

    switch (method){
        case "POST":
            return json({ message: "success", method: method });
        case "PATCH":
            return json({ message: "success", method: method });
        default:
            return new Response("Method not allowed", { status: 405 });

    }
}