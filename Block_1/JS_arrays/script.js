//Print easily
function print(x){
    console.log(x)
}

//Iteration 1
print('Iteration 1')
//Iteration 1.1
function sumPositiveNumbers(array){
    let suma = 0
    for (let i=0; i < array.length; i++){
        if (array[i] > 0) suma += array[i] 
    }
    return 'La suma es: ' + suma
}
print(sumPositiveNumbers([1, -4, 7, 12]))

//Iteration 1.2
function countThatSheep(array){
    let contador = 0
    for (let i=0; i < array.length; i++){
        if(array[i] === true) contador++
    }
    return contador
}
print(countThatSheep([true, true, true, false, true, true, true, true, true, false, true, false]))

//Iteration 1.3
function countThatSheepV2(array){
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        for (let j=0; j < array[i].length; j++){
            if (array[i][j] === true) contador++
        }
    }
    return contador
}
print(countThatSheepV2([[true, true, true, false, true],
                        [true, false, true, false, true],
                        [true, false, true, false, true]]))

//Iteration 1.4
function toReverse(string){
    let array = []
    for (let i = 0; i < string.length; i++){
        array.unshift(parseInt(string[i]))
    }
    return array
}
print(toReverse('348597'))

//Iteration 2
print('Iteration 2')
function countBy(x, n){
    let contador = 1
    let arr = []
    while (contador <= n){
        arr.push(x * contador)
        contador++
    }
    return 'Los primeros ' + n + ' múltiplos de ' + x + ' son ' + arr
}
print(countBy(1, 10))
print(countBy(2, 5))

//Iteration 3
print('Iteration 3')
function shorterFirst(array){
    return array.sort(function (a, b) { return a.length - b.length });
}
print(shorterFirst(["Telescopes", "Glasses", "Eyes", "Monocles"]))

// //Bonus
print('Bonus')
// //1
function array_diff(arr1, arr2) {
    let newArr = []
    let smaller = [...arr2]
    let longer = [...arr1]
    if (arr1.length < arr2.length) { //para definir quién recorro primero
        smaller = [...arr1]
        longer = [...arr2]
    }
    for (let i = 0; i < smaller.length; i++) { //comprobando que los elementos del array más corto no estén en el largo
        if (longer.includes(smaller[i]) === false) newArr.push(smaller[i])  //añade a un nuevo array los elementos del array corto que no están en el largo
    }
    for (let i = 0; i < longer.length; i++) {
        if (smaller.includes(longer[i]) === false) newArr.push(longer[i]) //añade los elementos del grande que no están en el array pequeño
    }
    return newArr
}
print(array_diff([4, 2], [1, 2, 2, 2, 3, 5]))

//2
function snail(array) {
    let result = []
    while (array.length) { //mientras la matriz siga teniendo elementos
        // first row (1ªF)
        result = result.concat(array.shift()) //le quito el primer elemento al array (1ºF)
        // last column (nªC)
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].pop()) //le quito a cada elemento del array (a cada fila) el ultimo elemento (nªC ) 
        }
        // last row in reverse (nªF)
        if (array.length) result = result.concat(array.pop().reverse()) //le quito el último elemento al array (la última fila entera) y la invierto
        // first column in reverse (1ªC)
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length) result.push(array[i].shift()) //cogemos el primer elemento de cada fila y recorremos las filas al revés (de la última a la primera)
        }
    }
    return result
}

const array = [ //3x3
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const array2 = [ //4x4
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(snail(array)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(array) // Output: []
console.log(snail(array2)); // Output: [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]
console.log(array2) // Output: []