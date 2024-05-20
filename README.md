# Activities-FULP-EDP
This repository contains all the exercises of the FULP employability campus.

:yellow_heart: Javascript :orange_heart: HTML :blue_heart: CSS



## BLOCK 1 - FRONTEND
<details><summary>:yellow_heart: JS introduction</summary>

  ## Exercises
You have 3 iterations to do. Each iteration is within a folder `iterations` that contains two files: `index.html` and `script.js`.

The HTML file simply loads the JavaScript file where you will code your solution code.
```html
<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

Your `script.js` Javascript file contains a sample code that you will have to modify. It showcases the use of the [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method, that allows you to read a value from a window.
```js
// Your Solution code goes here

var test = window.prompt("type something here")
console.log(test)
```

To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

And then open your [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) to see the `console.log` output.

Try it out and when you have checked that it works, you can delete the provided code in `script.js`

--- 


#### Iteration 1: Basic Input/Output & Conditionals

1. Create a prompt that asks for the name of a driver and stores it into a variable `driver`.
1. Create a prompt that asks for the name of a pilot and stores it into a variable `pilot`.
1. Print `The driver's name is XXXX`
1. Print `The pilot's name is YYYY`
1. Depending on which name is longer (where `XX` refers to the number of characters), print:
  - `The Driver has the longest name, it has XX characters` or
  - `Yo, Pilot got the longest name, it has XX characters` or
  - `Wow, you both got equally long names, XX characters!`

--- 

#### Iteration 2: String Loops
1. Print all the characters of the driver's name, separated by a space.
```
"m i c h a e l"
```

2. Print all the characters of the driver's name, separated by a dash and ending with an exclamation mark!
```
"m-i-c-h-a-e-l!"
```

3. Print all the characters of the pilot's name, in reverse order and [UpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
```
"L E A H C I M"
```

--- 

#### Iteration 3: Number Conditionals & Loops

1. Write a loop that will print all the numbers from 1-20
1. Write a loop that will print all ODD the numbers smaller than 128 that are divisible by 3, but not divisible by 5.
1. Write a loop that will write all the [powers of 2](https://www.varsitytutors.com/hotmath/hotmath_help/topics/exponent-tables-and-patterns) from 2^1 (2) to 2^10 (1024)
```
2 ^ 1 = 2
2 ^ 2 = 4
...
2 ^ 10 = 1024
```

--- 

#### Iteration 4: Bonus Time!
Go to [lorem ipsum generator](https://loremipsum.io) and:

1. Generate 3 paragraphs. Store the text in a `lorem` variable
1. Make your program count the number of words in the `lorem`
1. Make your program count the number of times the Latin word `et` appears in `lorem`

--- 
</details>



<details><summary>:yellow_heart: JS strings & functions</summary>

  ### Starter code
  
You have to solve the different problems in the starter-code/index.js file. This Javascript file is included in the starter-code/index.html.
To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:
After you open it, you can open the Chrome Developer Tools and see the console.log of your exercises.

### RULES
All your functions have to be pure

--- 

### Iteration 1

Create the following functions:

#### 1.1 **removeFirstAndLastChar(string)**

This function has to remove the first and last characters of a string. 

You're given one parameter, the original string. 

In case your parameter has less than two characters return empty string.

#### 1.2 **moreNerdy(string)** 

This function has to make your strings more nerdy: Replace all:
  - `'a'` or `'A'` with `4`
  - `'e'` or `'E'` with `3`.
  - `'l'` with `1`. 
  
```js
e.g. "Fundamentals" --> "Fund4m3nt41s"
``` 

#### 1.3/ **noVowels(string)**. 

This function has to remove all the lowercase and uppercase vowels in a given string.

```js
e.g. shortcut("reboot") // --> rbt
e.g. shortcut("HELLO") // --> HLL
``` 

---

### Iteration 2 - Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

```js
nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
```

If the 3rd letter is a vowel, return the first 4 letters.

```js
nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
```

If the string is less than 4 characters, return `"Error: Name too short"`.

--- 

### Iteration 3 - High and low

In this little assignment you are given a string of space separated numbers (including negative numbers), and have to return the highest and lowest number.

Example:
```js
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

Notes:
Output string must be two numbers separated by a single space, and highest number is first.

--- 

### Iteration 4 - Reverse it

You need to write a function that reverses the words in a given string.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

```js
reverse('Hello World') == 'World Hello'
reverse('Hi    There.') == 'There. Hi'
```

--- 

### Bonus

If you have functions with more than 3 lines, rewrite the code so that your functions will be maximum 3 lines.

Divide the problem into smaller problems by using functions and conquer the world :) 

--- 
</details>

<details><summary>:orange_heart: HTML introduction</summary>
  dsjhfkjah
</details>

<details><summary>:blue_heart: CSS introduction</summary>
  dsjhfkjah
</details>

<details><summary>:yellow_heart: JS arrays</summary>
  dsjhfkjah
</details>

<details><summary>:yellow_heart: JS objects</summary>
  dsjhfkjah
</details>

<details><summary>:yellow_heart: JS functional arrays</summary>
  dsjhfkjah
</details>

<details><summary>:orange_heart: HTML tables & forms</summary>
  dsjhfkjah
</details>

<details><summary>:yellow_heart: JS under the hood</summary>
  dsjhfkjah
</details>

<details><summary>:blue_heart: CSS make it pretty</summary>
  dsjhfkjah
</details>

<details><summary>:yellow_heart: JS prototypes</summary>
  dsjhfkjah
</details>

<details><summary>:yellow_heart::orange_heart: Web API DOM</summary>
  dsjhfkjah
</details>

<details><summary>:yellow_heart: JS prototypes</summary>
  dsjhfkjah
</details>

<details><summary>:blue_heart: CSS animations</summary>
  dsjhfkjah
</details>

<details><summary>:blue_heart: CSS responsive - flexbox</summary>
  dsjhfkjah
</details>

## BLOCK 2 - BACKEND
## BLOCK 3 - FULLSTACK
## BUSINESS
## UX / UI
