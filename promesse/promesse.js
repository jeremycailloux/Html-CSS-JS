function askNumber() {
    return new Promise((resolve, reject) => {
        let number = prompt('input number');

        if (!isNaN(number)) {
            resolve(number);
        } else {
            reject(number);
        }
    })
}

function doSqrt(value) {
    return new Promise((resolve, reject) => {
        resolve(Math.sqrt(value));
    })
}

askNumber()
    .then((value) => { return doSqrt(value) })
    .then(console.log)
    .catch(console.error);