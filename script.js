let range = parseInt(prompt());
let c =1;
console.log("Enter the Range: ", range);
for (i = 0; i < range; i++)
{
   b = (range - i); 
   c = c * b;
}
console.log("Factorial: ",c);
