//To get the first 25 fibonacci series number
let num = 25;
let a = 0;
let b = 1;
let fn = a + b;
document.write(a);
   
    do {
        document.write(" "+fn);
        fn = a + b;
        a = b;
        b = fn;
    }while (fn < num);
