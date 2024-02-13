// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137,20];

function lowest(array){
    let low=array[0];
    for(const val of array){
        low=val<low?val:low;
    }

    return low;
}

console.log(lowest(heights2))