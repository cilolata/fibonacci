'use strict'

const fibonacci = () => {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for(let i = 2 ;; i++){
        arr[i] = arr[i - 2] + arr[i - 1];
        if(arr[i] <= 350){
            arr.push(arr);   
        }else{
            break;
        }
    }

    return arr
}

const isFibonnaci = (num) => fibonacci().includes(num)
                  

module.exports = {
    fibonacci,
    isFibonnaci
}


