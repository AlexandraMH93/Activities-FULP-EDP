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
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Iteration 3
  
  function highAndLow(string) {
    let max = Math.max(...string.split(' '))
    let min = Math.min(...string.split(' '))
    return max + ' ' + min
  }

  console.log(highAndLow("1 2 3 4 5"))
  console.log(highAndLow("1 2 -3 4 5"))
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Iteration 4

  function reverse(longString) {
    return longString.split(/\s+/).filter(Boolean).reverse().join(' ') //el split te separa por todo tipo de espacios y el filter te quita los elementos vacíos
  }
  
  console.log(reverse('  hello   world  '));
  console.log(reverse("Hello      World"))
  console.log(reverse('Hi    There.'))
  
  //Bonus done
