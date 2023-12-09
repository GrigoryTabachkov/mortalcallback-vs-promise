const p1 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10) + 1
    setTimeout(resolve, random, 'p1');
  });
  
  const p2 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10) + 1
    setTimeout(resolve, random, 'p2');
  });
  
  const p3 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10) + 1
    setTimeout(resolve, random, 'p3');
  });
  
  const p4 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10) + 1
    setTimeout(resolve, random, 'p4');
  });
  
  const p5 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10) + 1
    setTimeout(resolve, random, 'p5');
  });
  
  
  Promise.race([p1, p2, p3, p4, p5])
    .then((result) => console.log(result));