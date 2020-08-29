
  let testNumbers = [0, 1 ,2, 3, 4, 5, 6, 7, 8, 9]


  function isEven()
   {
   let mid = (testNumbers[0] + (testNumbers.length)) / 2;   
   }
   
   function getMiddle(list) 
   {
       let mid = (testNumbers[0] + (testNumbers.length)) / 2;
       if (mid % 2 == 0)
           {
           let evenMid = isEven();
           return evenMid;
           }
       else 
           {
           return mid;
           }
        }

    console.log(getMiddle(testNumbers));