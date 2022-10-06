const vehicleDetails={
    vehicleid:2094,
    brand:"KTM",
    model:"Duke390",
    variant:'ABCD',

      firstgear: function(){
        return " this is first gear";
      },
      
      secondgear: function(){
        return " this is second gear";
      },

      maxSpeed : "145kmph",

      changegear: function(){
        console.log(this.firstgear());
        console.log(this.secondgear());
      }

    }
    console.log(vehicleDetails.vehicleid);
    console.log(vehicleDetails.brand);   
    console.log(vehicleDetails.model);
    console.log(vehicleDetails.variant);

     let gearTypes = vehicleDetails.changegear();

     console.log(vehicleDetails.maxSpeed);












