let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 }
];


let subtotal = 0;
for (let i = 0; 
         i < lunch.length; 
         i++) {
         subtotal += lunch[i].price;
}


let tax = subtotal * 0.08;


let tip = subtotal * 0.18;


let totalDue = subtotal + tax + tip;


console.log(subtotal.toFixed(2));
console.log(tax.toFixed(2));
console.log(tip.toFixed(2));
console.log(totalDue.toFixed(2));