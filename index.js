var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  var position = parseInt(array.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ` + position + ' in line.';
}

function nowServing(array) {
  for (var i = array.length; i > 0; i--) {
    console.log("Currently serving " + array[0] + ".");
   // array.shift();
  } 
  if (array.length === 0) {
  return "There is nobody waiting to be served!";
  } 
}