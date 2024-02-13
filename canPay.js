// Define a function name "canPay()".The function will take two input:Array and Number.

function canPay(arr,num){
    // Check array is Empty or Not...
    if(arr.length===0){
        return "Array value is Empty..."
    }
    // Check the total sum of the elements inside the array is more than number..
    let sum=0;
    for(const val of arr){
        sum+=val;
    }

    let isBuy=(sum>=num)?true:false;
    return isBuy;

}

console.log(canPay([2,5,5],10))

