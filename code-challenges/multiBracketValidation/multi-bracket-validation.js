'use strict';

let string = '[](){}';
const openingBracket = ['[', '(', '{'];
let closingBracket = [']', ')', '}'];
//create a finalResult variable instead of closing bracket, will contain the full '{}' pair.


//use subString somewhere
function multiBracketValidation(string){
  let array = string.split('');
  array.forEach(subString => {
    if (openingBracket){
      stack.push();
    }

    if (closingBracket){
      let pop = array.pop();
      return pop;
    }

    if (pop != openingBracket){
      return false;
      break;
    }
  });

  if (!stack){
    return true;
  }
}