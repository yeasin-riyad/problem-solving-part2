// Define a function name findAddress() which will take an object as a input.
function findAddress(obj){
    // check the property is undefined or not..

    let street=(obj.street===undefined)?"__":obj.street;
    let house=(obj.house===undefined)?"__":obj.house;
    let society=(obj.society===undefined)?"__":obj.society;

    const address=`${street},${house},${society}`
    return address;
  
}

let obj={street:"10",house:"10A", society:"East-Bengal"}
console.log(findAddress(obj))