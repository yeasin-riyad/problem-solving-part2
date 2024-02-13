// first100-100
// 101-200-90
// above200-70

function discountPrice(quantity){
    let total=0;
    if(quantity<=100){
        total+=(quantity*100);
    }else if(quantity<=200){
        total+=(100*100)+( quantity-100)*90;
    }else{
        total+=(100*100)+(100*90)+(quantity-200)*70;
    }

    return total;

}

 console.log(discountPrice(201))

