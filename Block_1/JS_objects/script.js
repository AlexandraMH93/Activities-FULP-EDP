// Your Solution goes here
function print(x){ //print easily
    console.log(x)
}

//Iteration 1
print('Iteration 1')
function fullName(person){
    return person.firstName + ' ' + person.lastName
}

print(fullName({firstName: 'Luis', lastName: 'Burón'}))

//Iteration 2
print('Iteration 2')
function whoIsOnline(users){
    let newObject = {online: [], offline: [], afk: []}

    for (let i=0; i < users.length; i++){
        if (users[i].status == 'online' && users[i].lastActivity <= 600) {
            newObject.online.push(users[i].username) 
        } else if (users[i].status == 'online'){
            newObject.afk.push(users[i].username)
        }else {
            newObject.offline.push(users[i].username)
        }  
    }
    if (newObject.online.length == 0) delete newObject.online
    if (newObject.offline.length == 0) delete newObject.offline
    if (newObject.afk.length == 0) delete newObject.afk

    return newObject
}
print(whoIsOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 601
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 2320
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 4320
}]))

//Iteration 3
print('Iteration 3')
var yourComputer = {
    cpu: 25,
    gpu: 45,
    motherBase: 15,
    dvdDriver: 25,
    rom: 5,
    ram: 10,
}
var maxTemperatures = {
    cpu: 33,
    gpu: 42,
    motherBase: 20,
    dvdDriver: 20,
    rom: 10,
    ram: 20,
}
function overHeating(computers, temperatures){
    let properties = ['cpu', 'gpu', 'motherBase', 'dvdDriver', 'rom', 'ram']
    let results = {}
    
    for (let i=0; i < properties.length; i++){
        if(computers[properties[i]] <= temperatures[properties[i]]) results[properties[i]] = true
        else results[properties[i]] = false
    }
    return results
}
print(overHeating(yourComputer, maxTemperatures))

//Bonus
print('Bonus')
//1
function strCount(objectToCount){
    let count = 0
    let values = Object.values(objectToCount) 
    print(values)//obtiene los valores del objeto asociados a cada clave
    for (let i=0; i < values.length; i++){
        if(typeof(values[i]) === 'string') count++
        if(Array.isArray(values[i])){
            for(let j=0; j< values[i].length; j++){
                if(typeof values[i][j] === 'string') count++
            }
        }
    }
    return count
}
print(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null
}))

//2
function fullNameFormatted(person){
    let values = Object.values(person)
    let valuesUppercase = []
    for (items of values){
        valuesUppercase.push(items.charAt(0).toUpperCase() + items.slice(1))
    }
    return valuesUppercase.join(' ')
}
print(fullNameFormatted({ firstName: 'Luis', lastName: 'burón' }))

//3
function fullNameFormattedv2(person){
    let values = Object.values(person)
    let values2 = values.join(' ').split(' ')
    let valuesUppercase = []
    for (items of values2) {
        valuesUppercase.push(items.charAt(0).toUpperCase() + items.slice(1))
    }
    return valuesUppercase.join(' ')

}
print(fullNameFormattedv2({ firstName: 'Luis Álvaro', lastName: 'burón mejías' }))