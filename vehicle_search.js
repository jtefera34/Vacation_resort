"use strict";


let vehicles = [
  {
  color: "Silver",
  type: "Minivan",
  registrationState: "CA",
  licenseNo: "ABC-101",
  registrationExpires: new Date("3-10-2022"),
  capacity: 7
  },
  {
  color: "Red",
  type: "Pickup Truck",
  registrationState: "TX",
  licenseNo: "A1D-2NC",
  registrationExpires: new Date("8-31-2024"),
  capacity: 3
  },
  {
  color: "White",
  type: "Pickup Truck",
  registrationState: "TX",
  licenseNo: "A22-X00",
  registrationExpires: new Date("9-31-2023"),
  capacity: 6
  },
  {
  color: "Red",
  type: "Car",
  registrationState: "CA",
  licenseNo: "ABC-222",
  registrationExpires: new Date("12-10-2022"),
  capacity: 5
  },
  {
  color: "Black",
  type: "SUV",
  registrationState: "CA",
  licenseNo: "EEE-222",
  registrationExpires: new Date("12-10-2021"),
  capacity: 7
  },
  {
  color: "Red",
  type: "SUV",
  registrationState: "TX",
  licenseNo: "ZZ2-101",
  registrationExpires: new Date("12-30-2022"),
  capacity: 5
  },
  {
  color: "White",
  type: "Pickup Truck",
  registrationState: "TX",
  licenseNo: "CAC-7YT",
  registrationExpires: new Date("1-31-2023"),
  capacity: 5
  },
  {
  color: "White",
  type: "Pickup Truck",
  registrationState: "CA",

  licenseNo: "123-ABC",
  registrationExpires: new Date("3-31-2023"),
  capacity: 5
  }
 ];
 // Which vehicles are RED?
 // Which vehicles have registrations that are expired?
 // Which vehicles that hold at least 6 people?
 // Which vehicles have license plates that end with "222"?


for (let i=0; i<vehicles.length; i++)
  { if (vehicles[i].color =="Red")
    {
      // console.log(vehicles[i].licenseNo)
    }
  
  }
  let d = new Date()
  for (let i=0; i<vehicles.length; i++)
    
    
    { if (vehicles[i].registrationExpires > d)
      {
        // console.log(vehicles[i].licenseNo)
      }
    
    }

    // for (let i=0; i<vehicles.length; i++)
    //   { if (vehicles[i].capacity >=6)
    //     {
    //       console.log(vehicles[i].licenseNo)
    //     }
    //   }

      for (let i=0; i<vehicles.length; i++)
        { 
          let lname = vehicles[i].licenseNo
          let lnameindex = lname.lastIndexOf("-")
          let lname22 = lname.substring(lnameindex+1)
          if (lname22 =="222"){
            console.log(lname)
          }
          
        }
        //   if (vehicles[i].licenseNo >=6)
        //   {
        //     console.log(vehicles[i].licenseNo)
        //   }
        // }