// ITERATION 1
    console.log('Iteration 1')

// 1. Create a prompt that asks for the name of a driver and stores it into a variable driver.
    var driver = window.prompt("name of the driver")

// 2. Create a prompt that asks for the name of a pilot and stores it into a variable pilot.
    var pilot = window.prompt("name of the pilot")

// 3. Print The driver's name is XXXX
    console.log('The driver\'s name is ' + driver)

// 4. Print The pilot's name is YYYY
    console.log('The pilot\'s name is ' + pilot)

/* 5. Depending on which name is longer (where XX refers to the number of characters), print:
    - The Driver has the longest name, it has XX characters or
    - Yo, Pilot got the longest name, it has XX characters or
    - Wow, you both got equally long names, XX characters! */
    
    if (driver.length > pilot.length){
        console.log('The Driver has the longest, it has ' + driver.length + ' characters')
    } else if (driver.length < pilot.length){
        console.log('Yo, Pilot got the longest, it has ' + pilot.length + ' characters')
    } else{
        console.log('Wow, you both got equally long names, ' + driver.length + ' characters!')
    }





