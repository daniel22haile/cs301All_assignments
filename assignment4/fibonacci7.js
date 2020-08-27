//To get the first 25 fibonacci series number
// let num = 25;
// let a = 0;
// let b = 1;
// let fn = a + b;
// console.log(a);
   
//     do {
//         console.log(" "+fn);
//         fn = a + b;
//         a = b;
//         b = fn;
//     }while (fn < num);

let i = 0;
let j = 1;

let count = 1; 
let output = "";
output+=i + " ," +j+","
console.log(1);
while (count <= 23){
    let next = i + j;
    output = output + next + ","
    i = j;
    j = next;
    count++;
}
console.log(output);
