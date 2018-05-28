volume = 10; //declares a global variable called volume and sets it to 10
 
function returnEleven() {
  var volume = 11;  //declares a local variable called volume and sets it to 11
  return volume;
}

returnEleven();
console.log(volume)
  
