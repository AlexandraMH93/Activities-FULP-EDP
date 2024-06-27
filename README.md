# Activities-FULP-EDP
This repository contains all the exercises of the FULP employability campus. There are three blocks that are divided by front-end, back-end and full-stack.

## TECH
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-33AFFF?&style=for-the-badge&logo=css3&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) 
![Node.js](https://img.shields.io/badge/Node.js-8CC84B?style=for-the-badge&logo=node.js&logoColor=white) 
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) 
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) 
![Postman](https://img.shields.io/static/v1?style=for-the-badge&message=Postman&color=FF6C37&logo=Postman&logoColor=FFFFFF&label=) 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)


## BLOCK 1 - FRONTEND
 Tasks in Block 1:
 
1 - Linux intro

2 - JS objects

3 - JS prototypes

4 - Web API DOM

5 - CSS responsive - flexbox

Scroll down activities to see them and scroll down each activity to see the statements.
<details><summary>
		
 ### ACTIVITIES
 </summary>

<details>
<summary>

 ### 1 - Linux intro
</summary>

## Exercise

### 0. Initial Setup

- Create a `~/code` folder (inside your home folder)
- Inside that folder, create a `labs` folder  (ie. `~/code/labs`)
- Now go inside and create a new directory named `welcome-to-tech`
- Then enter the directory: `cd welcome-to-tech`
- Create a `my-favorite-things` folder inside with `mkdir my-favorite-things`
- Finally, enter the new directory: `cd my-favorite-things`

### Requirements

#### 1. Organize your favorite books
- in the `my-favorite-things` folder, create a folder called `books`
- create a folder in `books` named after your favorite author (e.g. `mark-twain`, or `john-grisham`, but avoid spaces!)
- create 2 `txt` files named after some of the author's books in the author's folder
- open the books folder in VSCode
- edit each file to add a brief description of each book


#### 2. Organize your favorite movies

- in the `my-favorite-things` folder, create a folder called `movies`
- create a folder in movies named after your favorite actor
- create a folder in the actor folder named after the actor's breakthrough movie
- create a text file named after the actor's character in the breakthrough movie in the top level `movies` directory
- move the text file to the breakthrough movie's folder
- look back at VSCode and edit that text file with a description of the character's role in the movie


#### 3. Organize your favorite music

- in the `my-favorite-things` folder, create a folder called `music`
- move into the `music folder`
- create a folder called `disco`
- create a text file in `disco` called `ymca`
- delete the `disco` folder
- create a folder called `creed`
- delete the `creed` folder
- create folders called `one-direction`, `the-strokes`, and `rihanna`
- create a text file in `one-direction` called `what-makes-you-beautiful.txt`
- make two copies `what-makes-you-beautiful.txt` - one into `the-strokes` and one into `rihanna` and rename those files with songs by those artists

Now your folders should look something similar to this:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/d5c2689e-4960-4748-b35b-0554d56244f2)


#### 4. Reorganize _everything_

- in the `my-favorite-things` folder, create a folder called `media`
- move `books`, `movies`, and `music` into the `media` folder

#### 5. Organize the top music, movies, and books of 2020

- move to the `my-favorite-things` folder and copy inside the `media` folder, then, rename it `2020-media`
- in the `2020-media` folder, rename each folder to have `2020-` before the title
- delete the contents of `2020-music`, `2020-movies`, and `2020-books`
- create a file called `top-ten-movies.html` in `2020-movies`
- create a file called `top-ten-songs.html` in `2020-music`
- create a file called `top-ten-books.html` in `2020-books`

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/5348de11-a600-48b7-896c-dec02bd4a761)


#### **Bonus**

Look through the additional resources and do the following

- Look at the top/bottom 10 lines of each file
- Figure out how to search through a file from the command line, without opening the file, for a string of text

--- 

</details>

<details>
	<summary>
		
 ### 2 - JS objects
  </summary>
  
  ## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 


To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.

## **RULES**

 - All your functions must be [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
 - No more than 10 lines per function

## Iteration 1

Create the following functions:

### 1.1/ **fullName(person)**

This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them.

```js
E.g. { firstName : 'Luis' , lastName: 'Burón' }  =>   "Luis Burón"
```   

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

<details><summary>
	
 ### 3 - JS prototypes
 </summary>
  
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

---

</details>

<details><summary>
	
 ### 4 - Web API DOM
</summary>
 
 ## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 

You can easily open the HTML in Chrome, by clicking the Live Server button located in the bottom-right corner of VSCode.

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.

## **RULES**

- Use at least 3 `onclick` events
- Use at least one `getElementById`
- Use at least one `getElementsByTagName`
- Use at least one `getElementsByClassName`
- 

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

---

</details>

<details><summary>
	
 ### 5 - CSS responsive - flexbox
 </summary>
  	
 ## Iteration 0 - **Warm up**
First of all, we are going to practice the flexbox basics that we have seen today in class to internalize them. And what better way to do it than with a game? We are going to access the [Flexbox Froggy](https://flexboxfroggy.com) page and we are going to complete all the levels of the game. Once the challenge is overcome, we will send a screenshot to our teacher and we will continue with the next iteration.

## SOLUTION

![iteration0](https://github.com/AlexandraMH93/LAB-CSS-responsive-flexbox/assets/145113052/f5e1b6a8-97b0-451b-9a18-ee63c4c4ec3e)


## Iteration 1 - **Analizing the structure**

As you can see, there are a `main.css` and a `student.css` files in the `starter-code` folder. Don't worry about the first one, you will write your CSS code in the `student.css` file. There's also an `index.html` file, so let's open it in our browser and...
DON'T PANIC! I know it looks quite awful, but don't worry because we will gradually shape it.

First of all, let's analyse our `index.html` file and identify the different elements in our web page. It should represent something like this:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/e5f4dbf8-2ebf-42ba-a36c-dad6a7601a7b)

As we can see, there are two large sections in our body, each one with its class: `navbar` and `content`.

1. Open the `web-view.png` stored in the `images` folder with your favourite image editor and mark each section as follows:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/e6500056-0b69-4215-9ded-834840335739)

Besides, if we focus on the `navbar` section, we find another 3 elements: an `image`, a `div` and another `div` with the `other-links` class.

2. Mark also those new elements in your image:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/36de518a-707b-4536-8560-4cfdd1e8718b)

If we dig a little deeper, we can see that in the first div, there are an `input` and a `button`, while in the second there are 4 `h3` tags.

3. Mark them in our image:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/27cdeced-145c-4d1a-b423-dcd9f6f268ec)

4. Now it's your turn! Analyze the rest of the `HTML` like we just did with the `navbar` section.

## SOLUTION

![iteration1](https://github.com/AlexandraMH93/LAB-CSS-responsive-flexbox/assets/145113052/fd12cf5e-c9b5-4bf0-8e28-8776c35546a4)


## Iteration 2 - **Mobile View**

Now that we have everything well structured, let's shape our web page. You will focus on the mobile view first, so you reach something like this:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/dcf912e9-f622-45c8-833b-dbab768c77c7)

Since `navbar` section contains the three elements we want to distribute, it will be the one that contains the `flex` attributes.

1. Access to `student.css` file and add the following code:

```
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

However, we don't want to display the `other-links` element in our movile view (this time we will assign the mobile view to a `width` equal to or less than `850px`).

2. To hide this element, assign `display: none` attribute to the `other-links` class using `media queries`>.

```
@media (max-width: 850px) {
  .other-links {
    display: none;
  }
}
```

3. Your turn! Try to shape the rest of the mobile view just like we did with the `navbar` section. Good luck!


## Iteration 3 - **Tablet View**

Now let's shape the tablet view exactly as we did with mobile view.

In the tablet view (`width` less than or equal to `1300px`), we don't want to display the `sidebar` section , so...

1. Use `media query` to hide `sidebar` section using `media queries`.

2. Use `flex` properties to display something like this:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/bcd6afa3-eafc-4e61-92a9-98949cff0059)


## Iteration 4 - **Web View**

Finally, we want to shape the web view. 

1. Assign `flex` properties to the last section (`sidebar`) to display something like this:

![image](https://github.com/AlexandraMH93/Activities-FULP-EDP/assets/145113052/ae513f75-8822-4edf-a12d-455228c60c86)

## Bonus - **Make it interactive!**

Now the web page is complete, but it seems a little bit... dead. Add some `animations` and CSS `effects` to bring it to life!

---

</details>

</details>
	
## BLOCK 2 - BACKEND
Tasks in Block 2:

## BLOCK 3 - FULLSTACK
## BUSINESS
## UX / UI
