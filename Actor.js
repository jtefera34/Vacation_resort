"use strict";


let academyMembers = [
  { memID: 101, 
    name: "Bob Brown", 
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"] },

  { memID: 142, 
    name: "Sallie Smith", 
    films: ["A Good Day", "A Better Day"] },

  { memID: 187, 
    name: "Fred Flanders", 
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"] }, 

  { memID: 203, 
   name: "Bobbie Boots", 
   films: ["Walking Boots", "Hiking Boots", "Cowboy ,Boots"] },];


  // Whi is the academy member whose ID is 187?

  for (let i = 0; i < academyMembers.length; i++)
    {
      if (academyMembers[i].memID == 187)
        {
          console.log(academyMembers[i].name)
        }

    }
console.log("--------------------------------")
    for (let i = 0; i < academyMembers.length; i++)
      {
        if (academyMembers[i].films.length >= 3)
          {
            console.log(academyMembers[i].name)
          }
  
      }
console.log("--------------------------------")

  // for (let i = 0; i < academyMembers.length; i++)
  //   {
  //     if (academyMembers[i].name.startsWith("Bob "))
  //       {
  //         console.log(academyMembers[i].name)
  //       }
    
  //       }
 console.log ("--------------------------------")
 
 for(let i = 0; i < academyMembers.length; i++) {
  let actorName = academyMembers[i].name;
  let actorNameIndex = actorName.indexOf(" ");
  let actorFirstName = actorName.substring(0, actorNameIndex);
  // console.log(actorFirstName);
  if( actorFirstName == "Bob"){
    console.log(`The actor name that starts with "Bob" is: ${actorName}`)
  }
 };

 console.log ("--------------------------------")



 for (let i = 0; i < academyMembers.length; i++)
    { let member = academyMembers[i];
      for( let j = 0; j < member.films.length; j++ ) {
        let film = member.films[j];
        let filmsNameFirstIndex = film.substring(0,1);
        if(filmsNameFirstIndex == "A"){
          console.log(`The films that start with "A" are the following: ${film} that are being done with ${member.name}`)
        }  
      }
        }