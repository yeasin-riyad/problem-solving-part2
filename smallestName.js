// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed','ku','rotonTaTa'];

function smallestName(nameArray){
    let smallest=nameArray[0];
    for(const name of nameArray){
        smallest=name.length<smallest.length?name:smallest;
    }
    return smallest;
}

console.log(smallestName(heights2))