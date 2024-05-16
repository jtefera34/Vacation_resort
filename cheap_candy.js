"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Gummy", price: 8.79 },
  { product: "M&Ms", price: 9.89 },
  { product: "Dount M&Ms", price: 7.89 },
  { product: "English Fish", price: 1.79 },
  { product: "Black M&Ms", price: 17.89 },
  { product: "Habesha Fish", price: 10.79 }
];




for (let i = 0; i < products.length; i++) {
  if (products[i].price < 4.00) {
    // console.log(products[i].product)
  }
}

console.log("--------------------------");

let productsWithMandM = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].product == "M&M") {
    productsWithMandM.push(products[i].product)
  }
};
if(productsWithMandM == ""){
  console.log(`There is no candy with its name being M&M`)
} else {
  console.log(`The candys that has M&M in their name are ${productsWithMandM}`)
};

console.log("--------------------------");


let doWeCarrySwedishFish = []; 
 // Swedish Fish Vs Swedish fish

for (let i = 0; i < products.length; i++) {
  if (products[i].product == "Swedish Fish") {
    doWeCarrySwedishFish.push(products[i].price)
  }
};
if(doWeCarrySwedishFish == ""){
  console.log(`We are sorry but we don't carry Swedish Fish for now, Please check later`)
} else {
  console.log(`Yes we do carry swedish fish with a price of ${doWeCarrySwedishFish}`)
};