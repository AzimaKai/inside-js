// #todo

'use strict';

/* Prompt: Something or Nothing

  the most basic validation you will need to make:

    did the user input something?

  you can do this by checking for empty strings and null

*/

const userInput = prompt('please enter your date of birth');
console.log(typeof userInput);

if (userInput === null || userInput === '') {
  alert('nothing!  why !!! ??? !!!');
} else {
  alert('your age is: ' + userInput);
}
