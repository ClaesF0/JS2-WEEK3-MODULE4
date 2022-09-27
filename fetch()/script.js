/*

console.log("halla");

// fetch("",{});

console.log(fetch("https://reqres.in/api/users"));

fetch("https://reqres.in/api/users")
//.then(res => console.log(res))

//.then(res => res.json())
//.then(data => console.log(data))
.then(res => {
    if(res.ok){
        console.log("success");
        return res.json();
    } else {
        console.log("unsuccessful")
    }
})
// IF YOU WANT DATA.DATA .then(data => console.log(data.data))
.then(jsonResponse => console.log(jsonResponse.data))
//.catch()//takes an error as a argument
.catch(err=>console.log("det er en error", err))

*/
//POST REQUESTS
console.log("hello")
// fetch("",{})

const emilOptions = {method:"POST", //type request must, be capitalized
headers: {
    "Content-Type": "application/json" //im gonna send api application data, important capitalization like this
},
body:JSON.stringify({name: "Kevin"})
}

console.log(fetch("https://noroffcors.herokuapp.com/https://reqres.in/api/users",{
    method:"POST", //type request must, be capitalized
    headers: {
        "Content-Type": "application/json" //im gonna send api application data, important capitalization like this
    },
    body:JSON.stringify({name: "Kevin"})
}));
fetch("https://noroffcors.herokuapp.com/https://reqres.in/api/users", emilOptions)
    // .then(res => console.log(res))
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS");
            return res.json();
        } else {
            console.log("NOT SUCCESSFUL");
        }
    })
    // .then(res => res.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(err => console.log(err))

  /* 
  Using a Separate Options Object:

We can use our own options object and 
pass this into the fetch() function. 
This can make our code more concise and neater to work with.
  */

// An object that contains our options
const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  
  // Using the `fetchOptions` object we created aboves
  fetch('https://noroffcors.herokuapp.com/https://jsonplaceholder.typicode.com/posts', fetchOptions)
    .then((response) => response.json())
    .then((json) => console.log(json));
  