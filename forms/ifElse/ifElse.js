// First get user name and use string function to make sure the first letter is capitalized.

let name = prompt("What is your name?");
let nameCap = name.charAt(0).toUpperCase() + name.slice(1);


// Get the user state and use string function to make sure both letters are capitalized.

let userState = prompt("What is your state? (In two letter format)", "NE or FL");
let userStateCap = userState.toUpperCase();


// Get the temperature. Make the temperature string a number. 

let temp = prompt("What is the temperature in degrees Fahrenheit?");
let tempNumber = Number(temp);


// All messages that will be used in the output are in an array.

let outputMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear a less heavy coat.", "wear a light jacket and smile!"]


// Use user inputs to generate output -- if / else; NSB.MsgBox

if (userStateCap == "NE" && tempNumber < 32) {
  NSB.MsgBox(`${nameCap}, ${outputMessages[0]}`, NSB. vbOKOnly, " ");
} else if (userStateCap == "NE" && tempNumber >= 32 && tempNumber <= 50) {
  NSB.MsgBox(`${nameCap}, ${outputMessages[1]}`, NSB. vbOKOnly, " ");
} else if (userStateCap == "FL" && tempNumber >= 32 && tempNumber <= 50) {
  NSB.MsgBox(`${nameCap}, ${outputMessages[2]}`, NSB. vbOKOnly, " ");
} else if (userStateCap == "FL" && tempNumber >= 50 && tempNumber <=70) {
  NSB.MsgBox(`${nameCap}, ${outputMessages[3]}`, NSB. vbOKOnly, " ");
} else { 
  NSB.MsgBox(`Sorry ${nameCap}, I'm not sure what you should wear!`, NSB. vbOKOnly, " ");
} 