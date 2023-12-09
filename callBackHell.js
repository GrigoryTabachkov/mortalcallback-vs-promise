
// console.log('Здравствуйте');

// function coffee(callBack, callBack2, callBack3) {
//     console.log('Хочу кофе');
//     callBack();
//     callBack2();
//     callBack3();
// }

// function withMilk() {
//     console.log('С молоком, пожалуйста');
// }

// function barista() {
//     console.log('Отлично, начинаю готовить!')
//     setTimeout(() => console.log('Ваш кофе готов!'), 4000);
// }

// function burger() {
//     console.log('И бургер, пожалуйста');
// }
// coffee(withMilk, barista, burger);



















// function hugeOrder() {
//     const error = 0;
//     const errorText = 'Пожар! Всем бесплатный кофе как потушим!';
//     const americano = 'americano';
//     const espresso = 'espresso';
//     const cappuccino = 'cappuccino';
//     const latte = 'latte';
//     const raf = 'raf';
//     const macchiato = 'macchiato';
//     const hotMilk = 'hotMilk';
//     const coldBrew = 'coldBrew';
//     let message;

//     function orderSomeCoffee(coffee, callBack) {
//         setTimeout(() => {
//             if (error) return console.log(errorText);

//             console.log(`Хочу ${coffee}`);
//             message = `- Заказ на ${coffee} принят! \n`;

//             callBack(coffee);
//         }, 1000);
//     }

//     orderSomeCoffee(americano, (coffee) => {
//         console.log(message);

//         orderSomeCoffee(espresso, (coffee) => {
//             console.log(message);

//             orderSomeCoffee(cappuccino, (coffee) => {
//                 console.log(message);

//                 orderSomeCoffee(latte, (coffee) => {
//                     console.log(message);

//                     orderSomeCoffee(raf, (coffee) => {
//                         console.log(message);

//                         orderSomeCoffee(macchiato, (coffee) => {
//                             console.log(message);

//                             orderSomeCoffee(hotMilk, (coffee) => {
//                                 console.log(message);

//                                 orderSomeCoffee(coldBrew, (coffee) => {
//                                     console.log(message);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// }
// hugeOrder();

function cbCounter() {
    function logCallBacks(callBackNumber) {
        console.log(`CallBack № ${callBackNumber}`);
    }

    function countCallBacks(callBack) {
        setTimeout(() => {
            let cb = 1;
            callBack(cb);
            cb++;
            setTimeout(() => {
                callBack(cb);
                cb++;
                setTimeout(() => {
                    callBack(cb);
                    cb++;
                    setTimeout(() => {
                        callBack(cb);
                        cb++;
                        setTimeout(() => {
                            callBack(cb);
                            cb++;
                            // ... hell is just grownig down
                        }, 500);
                    }, 800);
                }, 1000);
            }, 800);
        }, 500);
        console.log('Колбэки поехали:');
    }
    countCallBacks(logCallBacks);
}
cbCounter();
