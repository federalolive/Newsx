import tokenService from './tokenService'
const BASE_URL = 'http://localhost:3000/'

export function articleSearch(formData){
    return fetch(`${BASE_URL}/articles/search/${formData.query}`, {
        method: "GET",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(formData)
    }, {mode: 'cors'})
    .then(res => res.json())
}

// export function searchArticles(){
//     return fetch(`${BASE_URL}/articles`)
//     .then(res => res.json())
// }

// api related calls and database calls will pass through here, hite routes, with api calls and db fetches happening in the controllers. 

// search api call

// create function call to teh backend