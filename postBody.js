
const body = {
    "regID": "did:key:z6MkfaeF275KQ5iDEM9GHAueLPYuvZcLeSfQfKMc6rd6yWP2",
    "to": "did:1",
    "from": "did:2",
    "state": "confirmed",
    "sig": "qwerty"
}

await fetch('http://localhost:4004/event', {method: 'POST', body: JSON.stringify(body), headers: {'Content-Type': 'application/json'}})
