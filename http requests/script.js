console.log("CRUD http requests");

//CREATING A DYNAMIC URL 
// THE URL IS SEPARATED INTO KEYS AND VALUES,LIKE userId=1 SEPARATED BY A &, like  ?userId=1&Id=2

//see index.html for markup

//first i need to append a child div to the container
//therefore first step is selecting the container
const container = document.getElementById("container");

//now i will create two variables firstName and lastName
// values of my query string
    // 
    // const firstName = "Mats";
    // const lastName = "Norwegian";
    // 
    // console.log(firstName);
    // console.log(lastName);
    // 
/*
const newLink = document.createElement("a") //create an A tag;
//always consolelog to see what youve got
console.log(newLink);

newLink.href = `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`
console.log(newLink);

//now add innertext to the anchor weve created
newLink.textContent = "new Submit";
console.log(newLink);

// now we want to add/append the new link to the container
container.appendChild(newLink);
//one may also do this 
*/
//container.innerHTML += `<a href="https://www.example.com/?firstName=${firstName}&lastName=${lastName}">Submit<a>`;
// IMPORTANT REMEMBER TO USE PLUSEQUAL+=, THAT WILL ADD - OR LESS IT WILL REPLACE EVERYTHING

//how to retrieve something FROM url to use it 
//https://www.example.com/?firstName=hesham&lastName=emil
//go to console
// location
//

console.log(window);
console.log(window.location);
//put he query sgtriifg
console.log(window.location.search);

const parameterString = window.location.search;
console.log(parameterString);
//const params = new URLSearchParams(parameterString);

for (const param of parameterString){
    console.log(param)
}

console.log(params.get("firstName"));
console.log(params.get("lastName"));

/*
const params = new URLSearchParams(parameterString);
const searchParams = new URLSearchParams(parameterString);
console.log()
*/

let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search);