export let ENDPOINT = {
    dist: "http://localhost:5000"
}

export async function send(uri, data) {
    let res = await fetch(ENDPOINT.dist + uri, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res.json()
}