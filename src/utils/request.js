const header = new Headers({
    "Accept": "application/json",
    "Content-type": "application/json",
});


function get(url) {
    return fetch(url, {
        method: "GET",
        headers: header
    }).then((response) => {
        handleResponse(response, url)
    }).catch((err) => {
        console.error(`Request failed. Url = ${url}. Message=${err}`);
        return Promise.reject({
            error: {
                message: "Request failed"
            }
        })
    })
}

function post(url, data) {
    return fetch(url, {
        method: "GET",
        headers: header,
        body: data
    }).then((response) => {
        handleResponse(response, url)
    }).catch((err) => {
        console.error(`Request failed. Url = ${url}. Message=${err}`);
        return Promise.reject({
            error: {
                message: "Request failed"
            }
        })
    })
}

function handleResponse(response, url) {
    if (response.status === 200) {
        return response.json();
    } else {
        console.error(`Request failed. Url = ${url}`);
        return Promise.reject({
            error: {
                message: "Request failed"
            }
        })
    }
}

export {
    get,
    post
}