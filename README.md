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
 
  ## Exercise

### Starter code

We've given you the HTML/CSS needed to get going in the [starter-code](starter-code) folder. You already have all the CSS to solve the exercise but you need to pay attention to the HTML structure carefully!

The end result should be something similar to:

![](https://github.com/rebootacademy-labs/LAB-105-HTML-introduction/blob/main/lab-html_introduction_solution.png)

#### Head
- Add a page title: `Wikipedia - Web Developer`
- Add a link to the stylesheet `styles.css`

#### Header
- Add an image with source `https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2244px-Wikipedia-logo-v2.svg.png`
- Add a heading (h1) with the text `Web developer` and a link to `https://en.wikipedia.org/wiki/Web_developer`
- Add a div (with class `copy`) and the text: `From Wikipedia, the free encyclopedia`

#### Section / intro

- Add a parragraph with the content:
```
A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#) or Java in the server, and http for communications between client and server. A web content management system is often used to develop and maintain web applications.
```
#### Aside: Table of Contents

- Title (h3): `Contents`
- Ordered list with:
  - Link to `#section1` with the text: `Nature of employment`
  - Link to `#section2` with the text: `Type of work performed`
  - Link to `#section3` with the text: `Educational and licensure requiremeli>`
  - Link to `#section4` with the text: `See also`
  - Link to `#section5` with the text: `References`
  - Link to `#section6` with the text: `External links`

#### Section1
- Title (h2): `Nature of employment`
- Parragraph with the text:
```
Web developers are found working in various types of organizations, including large corporations and governments, small and medium-sized companies, or alone as freelancers. Some web developers work for one organization as a permanent full-time employee, while others may work as independent consultants, or as contractors for an agency or at home personal use. Web developers typically handle both server-side and front-end logic. This usually involves implementing all the visual elements that users see and use in the web applications or use, as well as all the web services that are necessary to power the usage of there developing work. Salaries vary depending on the type of development work, location, and level of seniority.
```

#### Section2
- Title (h2): `Type of work performed`

```
May specialize in one or more of these tiers - or may take a more interdisciplinary role. A web developer is usually classified as a Front-end web development or a Back-End Web Developer. For example, in a two-person team, one developer may focus on the technologies sent to the client such as HTML, JavaScript, CSS, ReactJs or AngularJS and on the server-side frameworks (such as Perl, Python, Ruby, PHP, Java, ASP, ASP.NET, Node.js) used to deliver content and scripts to the client. Meanwhile, the other developer might focus on the interaction between server-side frameworks, the webserver, and a database system. Further, depending on the size of their organization, the aforementioned developers might work closely with a content creator/copywriter, marketing adviser, user experience designer, web designer, web producer, project manager, software architect, or database administrator - or they may be responsible for such tasks as web design and project management themselves.
```

#### Section3
- Title (h2): `Educational and licensure requirements`
- Parragraph with the text:
```
There are no formal educational or licensure requirements to become a web developer. However, many colleges and trade schools offer coursework in web development. There are also many tutorials and articles, which teach web development, freely available on the web - for example Basic JavaScript
```
- Parragraph with the text:
```
Even though there are no formal educational requirements, dealing with web developing projects requires those who wish to be referred to as web developers to have advanced knowledge/skills in:
```
- Unordered list with:
  - `HTML/XHTML, CSS, JavaScript and jQuery.`
  - `Server/client side architecture like all or some of the above mentioned.`
  - `Programming/Coding/Scripting in one of the many server-side languages or frameworks (e.g., Perl, Python, Ruby, PHP, Go, CFML - ColdFusion, Java, ASP, ASP.NET, Node.js)`
  - `Ability to utilize a database`
  - `Creating single page application with use of front-end tools such as EmberJS,[1] ReactJS[2] or VueJS[3]`

#### Section4
- Title (h2): `See also`
- Unordered list with:
  - `Website design`
  - `Web development`
  - `Web engineering`
  - `Software developer`

#### Section5
- Title (h2): `References`
- Ordered list with citations:
  - Link to `https://emberjs.com/` with the text: `EmberJS website`, followed by the text `EmberJS` emphasized.
  - Link to `https://facebook.github.io/react/` with the text: `ReactJS website`, followed by the text `ReactJS` emphasized.
  - Link to `https://vuejs.org` with the text: `VueJS website`, followed by the text `VueJS` emphasized.

#### Section6
- Title (h2): `External links`
- Ordered list with citations:
  - The US Department of Labor's description of Web Developers
  - World Wide Web Consortium (W3C)


#### Footer
- Image with source `https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wikiversity-logo.svg/80px-Wikiversity-logo.svg.png`
- Parragraphs with:
```
This page was last edited on 28 August 2019, at 04:59 (UTC).
```
```
Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.
```
#### Bonus
- Using `id="IdName"` Add links to the last element of Section 3. ie: `EmberJS,[1]` to the correspondent citations in Section 5.

---
</details>

<details><summary>:blue_heart: CSS introduction</summary>
  
  ## Starter code

You will be working in the `apple-pie-starter-code` folder. The starter-code contains all the files, images, and text content needed to create the page. The text is in the `index.html`, and a css file is created in `main.css`.

## Deliverable

Please find a screenshot of the expected results below:
![Aple pie](Block_1/CSS_introduction/apple-pie/images/complete-apple-pie.jpg)
![Aple pie](Block_1/CSS_introduction/extra-french-soup/images/complete-french-onion-soup.jpg)


## Bonus

If you feel you need more practice, in the `starter-code` you will find `extra-french-soup` folder. There you will find `expected-result.md` file where you can see what is expected from you to build. This folder has the same structure as the the `apple-pie` one so follow the same steps.

---
</details>

<details><summary>:yellow_heart: JS arrays</summary>

  ## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 

You can easily open the HTML in Chrome, by typing in your terminal:
 
To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.


## **RULES**

 - All your functions have to be [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
 - No more than 10 lines per function


---
## Iteration 1

Create the following functions:

### 1.1/ **sumPositiveNumbers(array)**

You get an array of numbers, return the sum of all of the positives ones.

```js
  E.g. [1,-4,7,12] => 1 + 7 + 12 = 20
```


### 1.2/ **countThatSheep(array)** 

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the one-dimensional array (true means present).

For example,

```js
[true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false]
```
The correct answer would be 9.

**Note:** Not count truthy values, only `true` values :) 

### 1.3/ **countThatSheepV2(array)** 

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the **two-dimensional** array (true means present).

For example,

```js
[
  [true,  true,  true,  false, true],
  [true,  false,  true,  false, true],
  [true,  false,  true,  false, true],
]
```
The correct answer would be 10.

**Note:** Not count truthy values, only `true` values :) 

### 1.4/ **toReverse(string)**. 

You get a string with a representation of numbers and you have to return an array with the values in reversed order
Example:
``` 
348597 => [7,9,5,8,4,3]
```

---

## Iteration 2 - Count until i want


Create a function with two arguments `countBy(x, n)` that will return an array of length (n) with multiples of (x).

Check that the given number and the number of times to count are positive numbers greater than 0.

Return the results as an array.

Examples:
```js 
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
```

--- 

## Iteration 3 - Shorter first


Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array was passed as an argument:
```js
["Telescopes", "Glasses", "Eyes", "Monocles"]
```
Your function would return the following array:
```js
["Eyes", "Glasses", "Monocles", "Telescopes"]
```
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

--- 

## Bonus

**Extra exercise**

You have to implement the `difference function`, which compares two arrays and return the values not included in both arrays.

```js
array_diff([1,2],[1]) == [2]
```
If a value is present in b, all of its occurrences must not included in the result:
```js
array_diff([1,2,2,2,3],[2]) == [1,3]
```

**One more**

You have to implement the `snail function`, which receives a `n x n` array and returns the array elements arranged from outermost elements to the middle element, traveling clockwise.
```js
array = [[1,2,3], [4,5,6], [7,8,9]]
snail(array) == [1,2,3,6,9,8,7,4,5]
```

For better clarity, this is the path you need to follow: 
![](./snail.png)

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

</details>

<details><summary>:yellow_heart: JS objects</summary>
  
  ## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 


To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.



## **RULES**

 - All your functions must be [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
 - No more than 10 lines per function


---
## Iteration 1

Create the following functions:

### 1.1/ **fullName(person)**

This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them.

```js
E.g. { firstName : 'Luis' , lastName: 'Burón' }  =>   "Luis Burón"
```   
---

## Iteration 2 - Who is online?

You have a chat application and you want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in seconds), create a function to work out who is online, offline and afk.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered afk.

The input data has the following structure:
```js
[{
  username: 'David',
  status: 'online',
  lastActivity: 600
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 2320
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 4320
}]
```
The corresponding output should look as follows:
```js
{
  online: ['David'],
  offline: ['Lucy'],
  afk: ['Bob']
}
```
If for example, no users are online the output should look as follows:
```js
{
  offline: ['Lucy'],
  afk: ['Bob']
}
```

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {}


--- 

## Iteration 3 - Overheating

All the components of a computer have a defined maximum temperature at which it can continue to function properly.

But we know you, and sometimes when you play Fortnite, some of your components overheat.

Your function will receive two parameters. `yourComputer` is an object that represents your computer with the current temperatures of its components in real time. `maxTemperatures` is the maximum temperature of all the components of a computer.

Your function has to return another new object with the same components your computer has but returning `true` if the temperature  of the component is okay or `false` if the component is overheating-

```js 
var yourComputer = { 
  cpu : 25,
  gpu : 45,
  motherBase : 15,
  dvdDriver : 25,
  rom : 5,
  ram : 10,
}
var maxTemperatures = { 
  cpu : 33,
  gpu : 42,
  motherBase : 20,
  dvdDriver : 20,
  rom : 10,
  ram : 20,
}

var results = yourFunction(yourComputer, maxTemperatures);

console.log(results); 
/* { 
    cpu : true,
    gpu : false,
    motherBase : true,
    dvdDriver : false,
    rom : true,
    ram : true
  } 
*/
```


--- 

## Bonus

**Extra exercises**

### 1/ **strCount()**

Create a function `strCount` (takes an object as argument) that will count all string values inside an object. 

For example:

```js
strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
})
// returns 3
```

### 2/ **fullNameFormatted(person)**

This bonus excersise is an update from the first one. This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them. Also it has to transform the first letter of both values to upperCase if necessary. 

```js
E.g. { firstName : 'Luis' , lastName: 'burón' }  =>   "Luis Burón"
```

### 3/ **fullNameFormattedv2(person)**

This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them. Also it has to transform the first letter of every word of both values to upperCase if it is necessary. In this case, you can receive as `lastName` or `firstName` value a compound name. 

```js
E.g. { firstName : 'Luis Álvaro' , lastName: 'burón mejías' }  =>   "Luis Álvaro Burón Mejías"
```

---
</details>

<details><summary>:yellow_heart: JS functional arrays</summary>

  ## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 

You can easily open the HTML in Chrome, by clicking the Live Server button located in the bottom-right corner of VSCode.

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.



## **RULES**

 - All your functions must be [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
 - No more than 10 lines per function


---
## Iteration 1

Create the following functions:

### 1.1/ **whoIsOlderThan(people, age)**

This function have to return a new array with people older than `age` argument.

```js
var people = [
  {name : "Luis", age : 20},
  {name : "Luigi", age : 14},
  {name : "Mario", age : 25},
]
e.g. whoIsOlderThan(people, 20)  =>   [ { name : "Mario", age : 25 } ] 
```

### 1.2/ **getEmailsOfOlderThanAnAge(people, age)**

This function have to return a new array with the emails of people older than `age` argument.

```js
var people = [
  {name : "Luis", age : 20, email : "luis@gmail.com"},
  {name : "Luigi", age : 14, email : "luigi@gmail.com"},
  {name : "Mario", age : 25, email : "mario@gmail.com"},
]
e.g. getEmailsOfOlderThanAnAge(people, 15)  =>   [ "luis@gmail.com", "mario@gmail.com" ];
```

### 1.3/ **getTheSumOfAges(people)**

This function have to return the sum of all the `age` attributes of people.

```js
var people = [
  {name : "Luis", age : 20, email : "luis@gmail.com"},
  {name : "Luigi", age : 14, email : "luigi@gmail.com"},
  {name : "Mario", age : 25, email : "mario@gmail.com"},
]
e.g. getTheSumOfAges(people)  =>  59
```

---

## Iteration 2 - Who is online or offline?

You have a chat application and you want to show your users which one of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in seconds), create a function that receive another argument `status` to only return the names of these people.

To use this function, you must follow the example below to call it 
```js
whoIsInThisStatus([
  {
    username: 'David',
    status: 'online',
    lastActivity: 600
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 2320
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 4320
  }
], "online")
```
The corresponding output should look as follows:
```js
[ "David", "Bob" ]
```

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty array too []


--- 


## Bonus

**Extra exercise**

Create a function `getBestStudents`  that takes an array of students. The function must return an array with the emails and the average of the students. These students must have a average value of 9 or more in their subjects. The output have to be orderer by average mark.


For example:

```js
getBestStudents([
  {name : "Luis", age : 20, email : "luis@gmail.com", subjectsMarks : [9, 8, 10, 5 , 10]},
  {name : "Luigi", age : 14, email : "luigi@gmail.com", subjectsMarks : [9, 8, 10, 9 , 10]},
  {name : "Mario", age : 25, email : "mario@gmail.com", subjectsMarks : [9, 10, 10, 9, 10]},
])
// returns [
//  {email : "mario@gmail.com", average : 9.6 }, 
//  {email : "luis@gmail.com", average : 9.2 }
// ]
```
---

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
  
  ## Starter code

This exercise has an `index.js` with the basic structure to get you started!

```js
// Soldier
function Soldier() {}

// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
```
![](https://i.imgur.com/5TPElt8.jpg)

## Iteration 1 - Soldier

Modify the `Soldier` constructor function and add 2 methods to its prototype: `attack()`, and `receiveDamage()`.

#### constructor function
- should receive **2 arguments** (health & strength)
- should receive the **`health` property** as its **1st argument**
- should receive the **`strength` property** as its **2nd argument**

#### `attack()` method
- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Soldier`**

#### `receiveDamage()` method
- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **shouldn't return** anything

---
## Iteration 2 - Viking

A `Viking` is a `Soldier` with an additional property, their `name`. They also have a different `receiveDamage()` method and new method, `battleCry()`.

Modify the `Viking` constructor function, have it inherit from `Soldier`, reimplement the `receiveDamage()` method for `Viking`, and add a new `battleCry()` method.

#### inheritance
- `Viking` should inherit from `Soldier`

#### constructor function
- should receive **3 arguments** (name, health & strength)
- should receive the **`name` property** as its **1st argument**
- should receive the **`health` property** as its **2nd argument**
- should receive the **`strength` property** as its **3rd argument**

#### `attack()` method

(This method should be **inherited** from `Soldier`, no need to reimplement it.)

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Viking`**

#### `receiveDamage()` method

(This method needs to be **reimplemented** for `Viking` because the `Viking` version needs to have different return values.)

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **if the `Viking` is still alive**, it should return **"NAME has received DAMAGE points of damage"**
- **if the `Viking` dies**, it should return **"NAME has died in act of combat"**

#### `battleCry()` method

[Learn more about battle cries](http://www.artofmanliness.com/2015/06/08/battle-cries/).

- should be a function
- should receive **0 arguments**
- should return **"Odin Owns You All!"**

---
## Iteration 3 - Saxon

A `Saxon` is a weaker kind of `Soldier`. Unlike a `Viking`, a `Saxon` has no name. Their `receiveDamage()` method will also be different than the original `Soldier` version.

Modify the `Saxon`, constructor function, have it inherit from `Soldier` and reimplement the `receiveDamage()` method for `Saxon`.

#### inheritance
- `Saxon` should inherit from `Soldier`

#### constructor function
- should receive **2 arguments** (health & strength)
- should receive the **`health` property** as its **1st argument**
- should receive the **`strength` property** as its **2nd argument**

#### `attack()` method

(This method should be **inherited** from `Soldier`, no need to reimplement it.)

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Saxon`**

#### `receiveDamage()` method

(This method needs to be **reimplemented** for `Saxon` because the `Saxon` version needs to have different return values.)

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **if the Saxon is still alive**, it should return _**"A Saxon has received DAMAGE points of damage"**_
- **if the Saxon dies**, it should return _**"A Saxon has died in combat"**_

---

## Bonus - War

Now we get to the good stuff: WAR! Our `War` constructor function will allow us to have a `Viking` army and a `Saxon` army that battle each other.

Modify the `War` constructor and add 5 methods to its prototype:
- `addViking()`
- `addSaxon()`
- `vikingAttack()`
- `saxonAttack()`
- `showStatus()`

#### constructor function

When we first create a `War`, the armies should be empty. We will add soldiers to the armies later.

- should receive **0 arguments**
- should assign an empty array to the **`vikingArmy` property**
- should assign an empty array to the **`saxonArmy` property**

#### `addViking()` method

Adds 1 `Viking` to the `vikingArmy`. If you want a 10 `Viking` army, you need to call this 10 times.

- should be a function
- should receive **1 argument** (a `Viking` object)
- should add the received `Viking` to the army
- **shouldn't return** anything

#### `addSaxon()` method

The `Saxon` version of `addViking()`.

- should be a function
- should receive **1 argument** (a `Saxon` object)
- should add the received `Saxon` to the army
- **shouldn't return** anything

#### `vikingAttack()` method

A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back.

- should be a function
- should receive **0 arguments**
- should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
- should remove dead saxons from the army
- should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`

#### `saxonAttack()` method

The `Saxon` version of `vikingAttack()`. A `Viking` receives the damage equal to the `strength` of a `Saxon`.

- should be a function
- should receive **0 arguments**
- should make a `Viking` `receiveDamage()` equal to the `strength` of a `Saxon`
- should remove dead vikings from the army
- should return **result of calling `receiveDamage()` of a `Viking`** with the `strength` of a `Saxon`

#### `showStatus()` method

Returns the current status of the `War` based on the size of the armies.

- should be a function
- should receive **0 arguments**
- **if the `Saxon` array is empty**, should return _**"Vikings have won the war of the century!"**_
- **if the `Viking` array is empty**, should return _**"Saxons have fought for their lives and survive another day..."**_
- **if there are at least 1 `Viking` and 1 `Saxon`**, should return _**"Vikings and Saxons are still in the thick of battle."**_

</details>

<details><summary>:yellow_heart::orange_heart: Web API DOM</summary>
  ## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 

You can easily open the HTML in Chrome, by clicking the Live Server button located in the bottom-right corner of VSCode.

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.



## **RULES**

- Use at least 3 `onclick` events
- Use at least one `getElementById`
- Use at least one `getElementsByTagName`
- Use at least one `getElementsByClassName`


---
## Iteration 1: Creating one product

We will start by creating the HTML for one of your products. It should look like this:

![](https://i.imgur.com/G3h1MqF.png)

Every product will have:

- A wrapper div that contains all the HTML for that product.
- A div with a span, showing the product name.
- A div with a span, showing the cost of one unit.
- A div with one label and one input, where the user will indicate how many units they will buy.
- A div with a span, showing the total price for this product. This number should be the result of multiplying the amount of units multiplied by the price of one unit of that product. The default total price should be 0.
- A div with a delete button, to remove the product from the list.

#### Calculating the total price for the product

Once you have the HTML and CSS ready, use JavaScript and functions of the `document` object to retrieve the data you need to calculate the total price for that product. Change the value of the element in the DOM that displays the total price:

- Create a click event for the `Calculate Prices` button
- This event will execute a function that:
	* Retrieves the unit price of the product
	* Retrieves the quantity of items desired
	* Calculates the total price based on this data
	* Updates the total price in the DOM

### Iteration 2: Add another product

Add a second product.

![](https://imgur.com/KYnZBEe.png)

When you click on the `Calculate Prices` button, the total prices for both products should update their values based on each quantity specified.

### Iteration 3: Calculating the total price of all products

Now that you have each product's total price, you need to calculate the total price of the entire shopping cart. Once you have that number, you need to display the result in the DOM.

![](https://imgur.com/qjdfHIX.png)

Create a new `div` below the `Calculate Prices` button. This `div` should have an `h2` element like this one:

`<h2>Total Price: <span>$0</span></h2>`

Now, as part of your "Calculate Prices" function:

- Select the elements that contain the each product's total price.
- Loop through the elements selected in the previous step, retrieve each of their total prices and add them together to get the total price of the entire shopping cart.
- Show the total price in the DOM.

### Iteration 4: Deleting a product

Associate the "Delete" buttons to click events so that when you click one, it deletes that product from the list. Steps to follow:

- Select all the "Delete" buttons
- For each button, assign a click event that will:
	- Select the wrapper div that contains all the HTML for the product that should be deleted
	- Select the parent that contains all of the product wrapper divs
	- Use the function `removeChild` we saw in [DOM Manipulators](https://docs.google.com/presentation/d/1um6JwqNtqKI52nd8DawzAlVh2Gq_OIfv1_VDMdcu9MM/edit#slide=id.g61c00a827e_2_25)

:bulb: Use `e.currentTarget` to access the "Delete" button that was just clicked and select the parent node of an HTML element with `parentNode`.

### Iteration 5: Creating new products

For the last iteration, allow the user to create new products for the shop. You'll add inputs that look like this:

![](https://imgur.com/8q6el9B.png)

Those two inputs represent the name and the unit price of the new product. Then there's the "Create" button that the user needs to click to actually add the new product to the list.

- Add two inputs to let the user enter the new product data.
- Add a "Create" button. Assign it a click event that will:
	- Get the data from the inputs.
	- Create a new product row with the data from the inputs. The structure of the new product should be the same as in Iteration #1.

:warning: Make sure that the new product you added has the same behavior than the other products:
- You should be able to calculate the product's total price
- That product's price should be included in the total price of the entire Shopping Cart
- You should be able to delete the product

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
