import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { "Authorization": "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}


export function getArticleCollection(){
  return fetch(`${BASE_URL}popusercollection`, 
  {
    headers: { "Authorization": "Bearer " + tokenService.getToken() },
  },
   {mode: 'cors'})
  .then(res=>
    res.json()
  )
}

export function removeArticleFromCollection(id){
  return fetch(`${BASE_URL}/removearticle/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(id)
}, {mode: "cors"})
.then(res => res.json());
}


export function updateUserProfile(formData){
  console.log('this is teh services update function')
  console.log(formData)
  return fetch(`${BASE_URL}/update`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(formData)
}, {mode: "cors"})
.then(res => res.json());
}