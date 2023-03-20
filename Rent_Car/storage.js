function Storage() {
    Storage.prototype.addCarStorage = function(newCar) {
       let cars=this.getCarsFromStorage();
       cars.push(newCar);

       localStorage.setItem("cars",JSON.stringify(cars));
    }
}

Storage.prototype.getCarsFromStorage = function() {
    let cars;

    if(localStorage.getItem("cars")===null) {
        cars =[];
    }
    else {
        cars=JSON.parse(localStorage.getItem("cars"));
        // Sadece string aldıgı için böyle yaptık
    }
    return cars;
}