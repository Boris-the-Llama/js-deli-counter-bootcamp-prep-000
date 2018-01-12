var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  var position = parseInt(array.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ` + position + ' in line.';
}

function nowServing(array) {
  do {
    console.log("Currently serving " + array[0] + ".");
    array.shift();
  } while (array.length > 0);
  }
 