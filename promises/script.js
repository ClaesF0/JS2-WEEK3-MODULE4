/*

const myPromise = new Promise((resolve, reject) => {
    // We are hardcoding a value for this example
    const shouldResolve = true;
    if (shouldResolve) {
      // If the code inside of the promise was able to do what
      // it needed to do, then it will call this 'resolve' callback
      resolve('Promise resolved since intentionally hardcoded to success.');
    } else {
      // If the code inside of the promise failed to do what
      // it needed to do then it will call this 'reject' callback
      reject('Promise has failed');
    }
  });
  
  myPromise.then((result) => {
    // Logs either the 'resolve' or 'reject' returns based on
    // whether the promise succeeded or failed
    console.log(result);
  });



  const loverDegDabb = new Promise((resolve, reject) => {
    // We are hardcoding a value for this example
    const børDabbes = false;
    if (børDabbes) {
      // If the code inside of the promise was able to do what
      // it needed to do, then it will call this 'resolve' callback
      resolve('Dabb resolved successfully.');
    } else {
      // If the code inside of the promise failed to do what
      // it needed to do then it will call this 'reject' callback
      reject('Dabb has failed since intentionally hardcoded to fail');
    }
  });
  
  loverDegDabb.then((result) => {
    // Logs either the 'resolve' or 'reject' returns based on
    // whether the promise succeeded or failed
    console.log(result);
  });



  */
/*
.finally()

This is the last method of Promises we will be looking at it.

It gets added to the end of the Promise chain. It will always run regardless 
of whether there was an error or not. We make use of it to handle any kind of 
“tear down” i.e. things that should happen after our asynchronous code is done.
A common use case of this is dealing with a Loading Spinner. We first show a 
Loading Spinner when our asynchronous code starts, and then at the end we hide 
the Loading Spinner. This Loading Spinner needs to be hidden at the end regardless
 of whether or not we have an error. The .finally() method makes this trivial to deal with.
Let’s look at a basic example of how you use a .finally() method:
*/
/*
doSomething()
.then()
.catch()
.finally
// Handle tear down here
();
*/
/*
Let’s look at a more practical example. In this example we have a isLoading variable 
which we set to true before we start the asynchronous call. This variable would be used
to show a Loading Spinner or similar. When the asynchronous call is finally finished we
set isLoading to false which in theory would hide the Loading Spinner:
*/

let statusMessageWrapper = document.getElementById("status-message");
console.log(statusMessageWrapper);

//let isLoading = true;

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    statusMessageWrapper.innerHTML = 'loaded thank you success'
    }
  )
  .catch((error) => {
    console.log(error)
    statusMessageWrapper.innerHTML = 'sorry something wrong happened :('
  })
  .finally(() => {
    console.log("loaded..");
  })

