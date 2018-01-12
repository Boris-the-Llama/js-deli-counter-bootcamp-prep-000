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
 
 function currentLine(array) {
   if (array.length === 0) {
     return "The line is currently empty.";
   }
   var str = "The line is currently:";
   var name = array[i];
   var position = parseInt(array.indexOf(name) + 1);
   for (var i = array.length; i > 0; i--) {
     str = str + position + array[i];
 } return str;
   }
 