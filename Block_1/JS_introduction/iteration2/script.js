// ITERATION 2 
    console.log('Iteration 2')
    var driver = window.prompt("name of the driver")



/* 1. Print all the characters of the driver's name, separated by a space.
"m i c h a e l" */
    let driverLetterByLetter = ''

    for (let i=0; i < driver.length - 1; i++){
        driverLetterByLetter += driver[i] + ' '
    }

    driverLetterByLetter += driver[driver.length-1] //para que me añada solo la última letra sin un espacio de sobra

    console.log(driverLetterByLetter)

/* 2. Print all the characters of the driver's name, separated by a dash and ending with an exclamation mark!
"m-i-c-h-a-e-l!" */
    let driverSeparatedByMark = ''

    for (let i = 0; i < driver.length - 1; i++) {
        driverSeparatedByMark += driver[i] + '-'
    }

    driverSeparatedByMark += driver[driver.length - 1]

    console.log(driverSeparatedByMark)  

/* 3. Print all the characters of the pilot's name, in reverse order and UpperCase
"L E A H C I M" */
    let reverseUpperCase = driver[0] //lo inicio con la primera letra porque si lo hago en el bucle me pone un espacio delante de la primera letra que luego queda la última

    for (let i = 1; i < driver.length; i++) {
        reverseUpperCase = driver[i] + ' ' + reverseUpperCase
    }

    console.log(reverseUpperCase.toUpperCase())



