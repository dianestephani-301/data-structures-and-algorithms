'use strict';

const Stack = require('./stack');
let string = '[](){}'
let stack = new Stack();


function multiBracketValidation(string){
  let array = string.split('');
  const result = array.forEach(subString => {
    if (subString == '[' || '(' || '{'){
      stack.push();
    }

    if (subString == ']' || ')' || '}'){
      let pop = array.pop();
      return pop;
    }

    if (pop != '[' || '(' || '{'){
      return false;
    }
  })

  if(!stack.peek()){
    return true;
  }
  else if(stack.peek() !=  '[' || '(' || '{' || ']' || ')' || '}'){
    return true;
  }

  console.log(result);
}

console.log(multiBracketValidation(string));