'use strict'

const fibonacci = () => {
    let arr = [0, 1];
    let limit = 350

    while(arr[arr.length - 1] <= limit){
      arr.push( arr[arr.length - 2] + arr[arr.length - 1])
    }
    return arr
}


const isFibonnaci = (num) => fibonacci().includes(num)
                  

module.exports = {
    fibonacci,
    isFibonnaci
}


