module.exports.getDate = getDate;

//We Export this function , We dont use paranthesis here as we are exporting and not running it

function getDate(){

  let today = new Date();
    
  let options = {
      weekday : "long",
      day : "numeric",
      month : "long"
  };

  let day = today.toLocaleDateString("en-US",options);
  return day;
}

//we can use exports only
//We call it Directly
module.exports.getDay = function getDay(){

  let today = new Date();
    
  let options = {
      weekday : "long",
 
  };

  let day = today.toLocaleDateString("en-US",options);
  return day;
}


// console.log(module.exports);