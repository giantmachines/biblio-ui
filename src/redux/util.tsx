import * as cache from "localforage";

async function $fetch(url:string, request?:any){
    const token = await cache.getItem('biblio-token');
    request = request || {method:'GET'};
    request.headers = request.headers || {};
    if (token){
        request.headers.Authorization = token;
    }
    return await fetch(url, request);
}

export {$fetch};
