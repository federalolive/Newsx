import tokenService from './tokenService'
const BASE_URL = '/api/articles/'

export function articleSearch(formData){
    return fetch(`${BASE_URL}search/${formData.query}`, {
        method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
            body: JSON.stringify(formData)
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function create(formData){
    console.log('this is the api create function')
    console.log(formData)
    return fetch (BASE_URL, {
        method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
            body: JSON.stringify(formData)
    }, {mode: 'cors'})
    .then(res => res.json())
}


// api related calls and database calls will pass through here, hite routes, with api calls and db fetches happening in the controllers. 

// search api call

// create function call to teh backend