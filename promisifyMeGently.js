


function coffee(callBack) {
    console.log('Хочу кофе');
    callBack();
}
function withMilk() {
    let error = 1;
    console.log('С молоком, пожалуйста \n');
    if (!error)
        setTimeout(() => console.log('Ваш кофе готов!'), 2000);
    else throw new Error('молоко закончилось =(');
}

function promisify(func) {
    return function () {
        return new Promise((resolve, reject) => {
            func((error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    };
}

const coffeePromise = promisify(coffee);
const milkPromise = promisify(withMilk);

coffeePromise()
    .then(milkPromise)
    .catch((error) => console.log(`${error}`))
    .finally(setTimeout(() => console.log('Хорошего дня! \n'), 2500));
