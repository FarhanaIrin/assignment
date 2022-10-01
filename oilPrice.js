function oilPrice(diesel,petrol,octane){
    
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    let totalPrice = (diesel*dieselPrice) + (petrol*petrolPrice) + (octane*octanePrice);
    return totalPrice;

}

oilPrice(5,2,3);
//console.log(oilPrice(5,2,3));