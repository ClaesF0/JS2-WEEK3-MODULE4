console.log("topic: async and await");

function testTryCatch() {
  console.log(
    "man try for å gjøre og catch (error) for å se hva som evt gikk galt"
  );
}

try {
  testTryCatch();
} catch (error) {
  console.log("det er en error og det er følgende;", error);
} finally {
  console.log("koden blir kjørt etter uansett");
}

//first when you do async await create a function with async in front

async function getUsers() {
  try {
    const data = await fetch(
      "https://noroffcors.herokuapp.com/https://reqres.in/api/users"
    );
    //const data = await fetch("https://reqres.in/api/users");
    const jsonData = await data.json(); //now we convert a respons in json
    console.log(jsonData);
  } catch (error) {
    console.log("is an error and it is:", error);
  } finally {
    console.log("linje 30 code runs after anyway and API CALL IS DONE");
  }
}

getUsers();

//doing multiple calls

// https://jsonplaceholder.typicode.com/todos/1
// https://jsonplaceholder.typicode.com/todos/2
// https://jsonplaceholder.typicode.com/todos/3

async function doFetch(url) {
  try {
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const data = await Promise.all([
    doFetch("https://jsonplaceholder.typicode.com/todos/1"),

    doFetch("https://jsonplaceholder.typicode.com/todos/2"),

    doFetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);

  console.log("dette er data fra multiple calls uten IFFE linje 61",data);
}

main();

// OR make it call itself


(async () => {

    const data = await Promise.all([

        doFetch("https://jsonplaceholder.typicode.com/todos/1"),

        doFetch("https://jsonplaceholder.typicode.com/todos/2"),

        doFetch("https://jsonplaceholder.typicode.com/todos/3"),

    ]);

    console.log("dette er data fra multiple calls IFFE linje 81",data);

})();
/*
Async/Await
Introduction

Async/Await is the next step to learning about asynchronous code in JavaScript. 
It was added to the ECMAScript 2017 release and is considered to be a substantial
 improvement to the way we deal with asynchronous code in JavaScript.

We are used to writing our code in a sequential format and asynchronous 
code changed that as our code no longer ran in sequential format.

Async/Await addresses by allowing us to write our code in a sequential 
way while still handling asynchronous code.
How It Works

Async/Await gives us two new key words:

async: This keyword must be added to the start of a function 
declaration so that it becomes an “async” function. 
Note: We have to include this to make use of the await keyword.

await: This keyword must be added at the start of any function
 call that needs to be dealt with asynchronously.
*/

// The "async" keyword is added at the front of the function
// turning it into an asynchronous function.
async function myAsyncFunction() {
  // The "await" keyword is added before the function call of "getFetch()"
  const result = await doFetch();
}
/*
Let’s look at a basic implementation. 
In this example you will see that we have added async to 
the start of the function. We have also added await to the
 front of our fetch function.
*/
async function doFetch() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
}
/*
Example

Let’s take a look at a practical example of async await. 
In this example we will get data from an API, parse it as
JSON and then return the data.
*/
async function doFetch(url) {
  const data = await fetch(url);
  const json = await data.JSON();
  return json;
}
/*
This function will return a promise so we will need to async await to get our data.

The example below looks at how we could make use of above doFetch() function:
*/
// Fetches data from the URL passed in
async function doFetch(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

// Our main function that will call the data
// using await. If we don't use await then we will
// instead get a promise
async function main() {
  const articles = await doFetch(
    'https://jsonplaceholder.typicode.com/todos/1',
  );
  console.log("articles fra linje 155",articles);
  // Returns:
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
}

// Execute our code
main();
/*
Try/catch blocks

When we deal with APIs there is a chance that something will go wrong, 
such as the server being down or our own internet not working.

We therefore need to deal with handling errors.

When we use async await we generally want 
to have our code wrapped in a try catch code blocks.

Try/catch/finally syntax

The try/catch/finally blocks break down into the following:

try: This is our main code that we attempt to run, 
such as fetching data from an API.

catch: This block of code will only execute if there 
was a problem with the code in the try block, 
such as an error being thrown.

finally: This is an optional block of code which will run 
regardless of whether the try block was successful or if 
an error was thrown and the catch block was executed.
*/
try {
  // This is the code that will run
} catch (error) {
  // This is where we can handle errors
} finally {
  // This code will execute at the end regardless of
  // whether we had an error or not
}

/*
Try/catch/finally example
Let’s extend our API call example to include a try/catch block:
*/

async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('dette er console log fra linje 209 API call is done');
  }
}
/*
Multiple parallel requests

We can use the Promise.all() helper function to get data from multiple API end points.

It takes multiple promises and then returns a single array containing all of the results as different items in the array.

If we were to use async await then we would have to wait for each request to finish sequentially which may not be efficient.

The syntax looks as follows:
*/
const promise1 = Promise.resolve('Promise 1 result');
const promise2 = Promise.resolve('Promise 2 result');
const promise3 = Promise.resolve('Promise 3 result');

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log("dette er values fra linje 228",values);
});
// Logs:
// ["Promise 1 result", "Promise 2 result", "Promise 3 result"];
/*
Practical example of Promise.all()

Let’s take a look at a more practical example that uses the previous doFetch function we created.
*/

async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const data = await Promise.all([
    doFetch('https://jsonplaceholder.typicode.com/todos/1'),
    doFetch('https://jsonplaceholder.typicode.com/todos/2'),
    doFetch('https://jsonplaceholder.typicode.com/todos/3'),
  ]);
}

main();


console.log("console log i enden av dokument")