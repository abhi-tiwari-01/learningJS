// for (let index = 1; index <= 10; index++) {
//     const num = 2;
//     console.log(`${num} * ${index} = ${num*index}`);
// }

// IF STATEMENT INSIDE FOR LOOP
// for (let index = 1; index <= 10; index++) {
//     const num = 2;
//     console.log(`${num} * ${index} = ${num*index}`);
//     if((num*index)==10){
//         console.log("Half of the table is completed");
//     }
// }

// NESTED FOR LOOP

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("\n");
// }

// BREAK AND CONTINUE

// for (let index = 0; index < 20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of index : ${index}`)
// }
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of index : ${index}`)
}