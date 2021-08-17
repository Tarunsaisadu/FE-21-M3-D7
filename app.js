

let data =[];
let result=[];

function getinfo() {

    fetch ("https://jsonplaceholder.typicode.com/users ")
    
    .then((response)=>{
        console.log(response)
        return response.json()
        
        
    })
    .then((data)=>{
        console.log(data)
        return displySearch(data);
    })

    
}
const displySearch = function(result){
       
    let searchResults = document.querySelector(".row")
    for(list of result)
    {
        searchResults.innerHTML += `<p>${result[0]}</p>`
    }
}
  
function fetchnames(){
    let getSearchValueHere = document.querySelector(".dropdown-item").value;
    console.log(getSearchValueHere);
    fetch ("https://jsonplaceholder.typicode.com/users/search?q=", {
        "method": "GET",
      })
    .then((resp)=>{
        console.log(resp)
        return resp.json();
    })
    .then((user)=>{
        console.log(user["name"])
        return user;

    })
    

}
