/*
// Example function that will get passed as a callback
function exampleFunction() {
    console.log('Example function called');
  }
  
  // Our main function that will run the callback function
  // being passed to it
  function doSomethingWithCallback(callbackFunction) {
    // Calling the function that is being passed
    callbackFunction();
  }
  
  // Pass "exampleFunction" function into our main
  // "doSomethingWithCallback" function
  doSomethingWithCallback(exampleFunction);
*/

  //create a function that will take a function as a argument
// this callbackfunction is whoIsEatingIceCream();
// showName() // console.log // "name is eating icecream"


function whoIsEatingIceCream(callbackFunction){
    callbackFunction();
};

function showName(){
    console.log(`hi i am eating ice cream`);
}

whoIsEatingIceCream(showName);

const values = [5,10,15,20];
const newValues = values.filter((value)=>{
    if(value > 10) {
        return true;
    }
});

console.log(newValues);

//we can move all this ^ stuff down in a new function

function isBiggerThanTen(value){
    if(value > 10) {
        return true;
    }
    //[15, 20]
}

console.log(newValues);
