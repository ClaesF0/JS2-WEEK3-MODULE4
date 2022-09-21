/* 
.then() and chaining

We will often have to have multiple events happen after each other. When we looked at asynchronous callbacks we saw how this led to “callback hell” or the “pyramid of doom”.

In Promises we use a .then() method. The code in this then() block will run only after the previous code had finished running.

In the following example we are chaining .then() methods one after each other:

getData.then().then().then();

*/

// We fetch the data from the URL
fetch('https://jsonplaceholder.typicode.com/todos/1')
  // We have to asynchronously parse the data into JSON
  //   so we can make use of it
  .then((response) => response.json())
  // Data is now available as
  .then((json) => console.log(json))
  .catch(error => {
    console.log(error)
    }
  );


  //at this time we can use .catch()

  /* 
  What if something goes wrong during our asynchronous call? The server might have problems or our internet might be down.

We have a .catch method to handle this.

Any errors that get thrown will be caught by this .catch method.

The .catch method includes the error as the first parameter.
*/
