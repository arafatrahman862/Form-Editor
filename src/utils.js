export let ENDPOINT = {
    dist: "https://job-task-server-dy1ytfbla-arafatrahman862.vercel.app"
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