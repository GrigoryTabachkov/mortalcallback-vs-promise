


// function cbCounter() {
//     function logCallBacks(callBackNumber) {
//         console.log(`CallBack № ${callBackNumber}`);
//     }

//     function countCallBacks(callBack) {
//         setTimeout(() => {
//             let cb = 1;
//             callBack(cb);
//             cb++;
//             setTimeout(() => {
//                 callBack(cb);
//                 cb++;
//                 setTimeout(() => {
//                     callBack(cb);
//                     cb++;
//                     setTimeout(() => {
//                         callBack(cb);
//                         cb++;
//                         setTimeout(() => {
//                             callBack(cb);
//                             cb++;
//                             // ... hell is just grownig down
//                         }, 500);
//                     }, 800);
//                 }, 1000);
//             }, 800);
//         }, 500);
//         console.log('Колбэки поехали:');
//     }
//     countCallBacks(logCallBacks);
// }
// cbCounter();

let count = 0;
function counter() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 100);
    })
    .then(setTimeout(() => {
            count++
            console.log(`Count: ${count}`)
    },500))
    .then(setTimeout(() => {
            count++
            console.log(`Count: ${count}`)
    },800))
    .then(setTimeout(() => {
            count++
            console.log(`Count: ${count}`)
    },1000))
    .then(setTimeout(() => {
            count++
            console.log(`Count: ${count}`)
    },800))
    .then(setTimeout(() => {
            count++
            console.log(`Count: ${count}`)
    },500))
}
counter();