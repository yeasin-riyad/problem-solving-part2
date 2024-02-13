// define a function name "sortMaker()"  with array parameter and array parameter will contain two values from user..

function sortMaker(arr){
    // destructure the arr parameter.
    const [a,b]=arr;
    // if any element of the array is negative the return "invalid Input."
    if(a<0 || b<0){
        return "Invalid Input."
    }else if(a===b){
        return "Equal."
    }else if(a<b){
        return [b,a]
    }else{
        return [a,b]
    }
}

// console.log(sortMaker([0,7]))

let obj={name:"riyad",age:21}
obj.house="__"
console.log( obj.house)