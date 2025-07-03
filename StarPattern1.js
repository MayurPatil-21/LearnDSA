/*  Q1]This type Pattern
   **** 
   ****
   ****
   **** 
*/ 
//let n = 4;

//for(let i = 0; i < n; i++){
 //   let row = "";
 //   for(let j = 0; j < n; j++){
 //      row = row + "*";
 //   }
 //   console.log(row);
//}


/* Q2]
     *
     **
     ***
     ****
*/

//let n = 4;

//for(let i = 0;i < n; i++){
//    let row = "";
//    for(let j = 0;j < i+1; j++){
//        row = row + "*";
//    }
//    console.log(row);
//}

/* Q3]
     1
     12
     123
     1234
     12345
*/ 

// let n = 5;

// for (let i = 0;i < n;i++){
//     let row = "";
//     for (let j = 0;j <i+1 ;j++){
//         row = row + (j+1);
//     }
//     console.log(row);
// }


/*Q4]
    1
    22
    333
    4444
    55555
*/ 

// let n = 5;

// for (let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 0;j<i+1;j++){
//         row = row + (i+1);
//     }
//     console.log(row);
// }

/* Q5]
    12345
    1234
    123
    12
    1
*/ 

let n = 5;

for(let i = 0;i < n;i++){
    let row = "";
    for(let j = 0;j<n-i;j++){
        row = row + (j+1);
    }
    console.log(row);
}