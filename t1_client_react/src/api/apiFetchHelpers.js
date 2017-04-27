export const httpVerbs = {
    GET: "GET",
    PUT: "PUT",
    POST: "POST",
    DELETE: "DELETE"
}

export function buildReqOptions(httpVerb, body) {
    let headers = null;
    
    if (typeof IN_TEST !== undefined) {
        headers = new Headers();
        headers.set("Content-Type", "application/json");
        headers.set("Cache-Control", "no-cache");
        headers.set("Pragma", "no-cache");
        headers.set("Expires", "0");
    }

    let requestOptions = {
        method: httpVerb,
        headers: headers,
        credentials: 'include',
        mode: 'cors',
        cache: 'reload',
        redirect: 'follow'
    };

    if (body) {
        requestOptions.body = JSON.stringify(body);
    }

    return requestOptions;
}