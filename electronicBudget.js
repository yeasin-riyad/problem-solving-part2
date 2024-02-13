// Your task is to calculate the total budget required to buy electronics:

//   laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk

function calculateElectronicsBudget(laptop,tablet,mobile){
    let perLaptop = 35000;
    let perTablet = 15000;
    let perMobile = 20000;
    let totalLaptopPrice=perLaptop*laptop;
    let totalTabletPrice=perTablet*tablet;
    let totalMobilePrice=perMobile*mobile;
    let totalPrice=totalLaptopPrice+totalMobilePrice+totalTabletPrice;
    let total=`${laptop} Pis laptop price is ${totalLaptopPrice} taka,${tablet} pis tablet price is ${totalTabletPrice} taka,${mobile} pis mobile price is ${totalMobilePrice} taka.So Total price is ${totalPrice}`
    return total;


    


}

console.log(calculateElectronicsBudget(2,1,1))