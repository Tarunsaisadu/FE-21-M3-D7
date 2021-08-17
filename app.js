

let data =[];
let list=[];

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
        searchResults.innerHTML += list.map(x=>`<p>${x.name}</p>`)
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
row.innerHTML =row.innerHTML=shoppingcart.map(fibook => `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="card" buybook>
                <img src="${fibook.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${fibook.title}</h5>
                <p class="card-text">${fibook.price}</p>
                <button id="cartbtn" value=${fibook.asin} onclick="cartlist(value)"> Add to cart</button>
                </div>
            </div>
        </div>
    `).join("")