# Activities-FULP-EDP
This repository contains all the exercises of the FULP employability campus.
```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
$${\color{red}Red}$$

$${\color{red}Welcome \space \color{lightblue}To \space \color{orange}Stackoverflow}$$

## BLOCK 1 - FRONTEND
<details><summary>
- ###  JS introduction
> #### Exercises: You have 3 iterations to do. Each iteration is within a folder `iterations` that contains two files: `index.html` and `script.js`.

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

#### Iteration 1: Basic Input/Output & Conditionals

1. Create a prompt that asks for the name of a driver and stores it into a variable `driver`.
1. Create a prompt that asks for the name of a pilot and stores it into a variable `pilot`.
1. Print `The driver's name is XXXX`
1. Print `The pilot's name is YYYY`
1. Depending on which name is longer (where `XX` refers to the number of characters), print:
  - `The Driver has the longest name, it has XX characters` or
  - `Yo, Pilot got the longest name, it has XX characters` or
  - `Wow, you both got equally long names, XX characters!`

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

#### Iteration 4: Bonus Time!
Go to [lorem ipsum generator](https://loremipsum.io) and:

1. Generate 3 paragraphs. Store the text in a `lorem` variable
1. Make your program count the number of words in the `lorem`
1. Make your program count the number of times the Latin word `et` appears in `lorem`
</summary></details>

- ### JS strings & functions
- ### HTML introduction
- ### CSS introduction
- ### JS arrays
- ### JS objects
- ### JS functional arrays
- ### HTML tables & forms
- ### JS under the hood
- ### CSS make it pretty
- ### JS prototypes
- ### Web API DOM
- ### CSS animations 
- ### CSS responsive - flexbox
- ### Git branches

## BLOCK 2 - BACKEND
## BLOCK 3 - FULLSTACK
## BUSINESS
## UX / UI
