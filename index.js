var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  var position = parseInt(array.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ` + position + ' in line.';
}

function nowServing(array){
  if (array.length > 0) {
      return `Currently serving ${array.shift()}.`;
        } else {
    return `There is nobody waiting to be served!`;
  }
  }
 
 function currentLine() {
   
 }