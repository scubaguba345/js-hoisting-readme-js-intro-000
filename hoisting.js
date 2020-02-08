function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}

function crazy(){
function thisIsCrazy() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")

    crazy()
  }
}
}
function sayMyName() {
//   // fix the code in here:
//   var name = "Cricky";
//
//   function sayMy() {
//     name = "Kristin"; // took out var before name here
//     console.log(name);
//   }
//   sayMy();
// }
// sayMyName()()

var sayMyName = function() {
  // fix the code in here:
  var name;
  name = "Cricky";

  function sayMy() {
    name = "Kristin"; // took out var before name here
    console.log(name);
    var name = "Kristin";
  }
  sayMy();
}
sayMyName()()
