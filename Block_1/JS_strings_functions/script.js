// ITERATION 1
// Iteration 1.1
  function removeFirstAndLastChar(string) {
    return string.slice(1, -1)
  }
  console.log(removeFirstAndLastChar('123456789'))
  
// Iteration 1.2
  function moreNerdy(string) {
    return string.replace(/[aAeEl]/g, (char) => (char === 'a' || char === 'A') ? '4' : (char === 'e' || char === 'E') ? '3' : (char === 'l') ? '1' : char )
  }
  console.log(moreNerdy('Fundamentals'))
  
// Iteration 1.3
  function noVowels(string) {
    return string.replace(/[aeiouAEIOU]/g, '');
  }
  console.log(noVowels('reboot'))
  console.log(noVowels('HELLO')) 
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Iteration 2
  function nicknameGenerator(name) {
    return name.length < 4 ? 'Error: Name too short' : /[aeiou]/i.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3)
  }

  console.log(nicknameGenerator('Robert'))
  console.log(nicknameGenerator('Jeannie'))
  console.log(nicknameGenerator('Ale'))
  
  //Iteration 3
  
  function highAndLow(string) {
    let arrayOfNumbers = string.split(' ')
    let highest = Math.max(...arrayOfNumbers)
    let lowest = Math.min(...arrayOfNumbers)
    return highest + ' ' + lowest
  }

  console.log(highAndLow("1 2 3 4 5"))
  console.log(highAndLow("1 2 -3 4 5"))
  
  //Iteration 4
  
  /*function reverse(longString){
    let arrayOfWords = longString.split(' ')
    let newArr = []
    for (let i = 0; i < arrayOfWords.length; i++) {
      if (arrayOfWords[i] !== ' ' && arrayOfWords[i] !== '\n' && arrayOfWords[i] !== '\t' && arrayOfWords[i] !== '') {
        newArr.unshift(arrayOfWords[i])
      }
    }
    return newArr.join(' ')
  }
  const result10 = reverse("Hello      World")
  const result11 = reverse('Hi    There.')
  console.log(result10)
  console.log(result11)
  
  //Bonus
  
  //Iteration 1
  
  //Iteration 1.1
  function rmvFirstAndLastChar(string) {
    return string.slice(1,-1)
  }
  
  //Iteration 2
  function nickn(name){
    if (name.length < 4) return 'Error: Name too short'
    if (name[2] === 'a' || name[2] === 'e' || name[2] === 'i' || name[2] === 'o' || name[2] === 'u' ) return name.slice(0, 4) //coge desde la primera letra hasta la cuarta pero sin coger la última
    else return name.slice(0,3)
  }
  
  //Iteration 3
  
  function maxAndMin(string) {
    let max = Math.max(...string.split(' '))
    let min = Math.min(...string.split(' '))
    return max + ' ' + min
  }
  const result12 = maxAndMin("1 9 3 4 -5")
  console.log(result12) */