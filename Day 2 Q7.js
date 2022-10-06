const specifi={
    firstGear: function(){
        console.log("First Gear");
    },
    secondGear: function(){
        console.log("Second gear");
    },
    maxspeed : 145,
    changeGear : function() {
        return `1st gear:${this.firstGear()},2nd gear:${this.secondGear()}`
    }
    };

    vehicle = {
        vehicleid :"2094",
        brand : "KTM",
        model : "duke 390",
        variant : "ABCD",
        specifications : specifi

    }
    let vs = (object) => {
    console.log(vehicle.vehicleid);
    console.log(vehicle.brand);   
    console.log(vehicle.model);
    console.log(vehicle.variant);
    console.log(vehicle.specifications.maxspeed);
    }

    vs(vehicle);
