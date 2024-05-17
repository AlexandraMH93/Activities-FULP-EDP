// ITERATION 3
console.log('Iteration 3')

// 1) Write a loop that will print all the numbers from 1-20.
    console.log('Iteration 3.1')
    for (let i=1; i < 21; i++){
        console.log(i)
    }

//2) OWrite a loop that will print all ODD the numbers smaller than 128 that are divisible by 3, but not divisible by 5.
    console.log('Iteration 3.2')
    for (let i = 1; i < 128; i++) {
        if (i%3 == 0 && i%5!== 0){ //divisible by 3 but no by 5
            if (i % 2 !== 0){ //no divisible by 2, ODD (impar)
                console.log(i)
            }
        }
    }

//3) Write a loop that will write all the powers of 2 from 2^1 (2) to 2^10 (1024).
    console.log('Iteration 3.3')
    for (let i=1; i<11; i++){
        console.log(2**i)
    }