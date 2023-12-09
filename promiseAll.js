


// function coffee(callBack, callBack2) {
//     console.log('Хочу кофе');
//     callBack();
//     callBack2();
// }

// function withMilk() {
//     console.log('С молоком, пожалуйста');
// }

// function errorHandler() {
//     let error = 0;
//     if (!error) setTimeout(() => console.log('Ваш кофе готов!'), 2000);
//     else console.log('Молоко закончилось =(');
// }

// coffee(withMilk, errorHandler);

const coffee = new Promise((resolve, reject) => {
    resolve('Хочу кофе');
});

const withMilk = new Promise((resolve, reject) => {
    resolve('С молоком, пожалуйста');
});

const errorHandler = new Promise((resolve, reject) => {
    let error = 1;
    if (error) {
        setTimeout(() => reject('Кофейня закрыта =('), 1000);
    }
    else setTimeout(() => resolve('Ваш кофе готов!'), 2000);
});


Promise.all([coffee, withMilk, errorHandler])
    //.then((result) => console.log(result))
    .then((result) => console.log(result.join('\n').toUpperCase()))
    .catch((error) => console.log(`Эхх, ${error}`))
