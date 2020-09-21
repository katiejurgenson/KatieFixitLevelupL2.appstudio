// First get user name and use string function to make sure the first letter is capitalized.

let sName = prompt("What is your name?");
let sNameCap = sName.charAt(0).toUpperCase() + sName.slice(1);


// Get the user state and use string function to make sure both letters are capitalized.

let sUserState = prompt("What is your state? (In two letter format)", "NE or FL");
let sUserStateCap = sUserState.toUpperCase();


// Get the temperature. Make the temperature string a number. 

let sTemp = prompt("What is the temperature in degrees Fahrenheit?");
let sTempNumber = Number(sTemp);


// All messages that will be used in the output are in an array.

let sOutputMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear a less heavy coat.", "wear a light jacket and smile!"]


// Use user inputs to generate output -- switch

switch (true) {
  case (sUserStateCap == "NE" && sTempNumber < 32):
    NSB.MsgBox(`${sNameCap}, ${sOutputMessages[0]}`, NSB. vbOKOnly, " ");
    break;
  case (sUserStateCap == "NE" && sTempNumber >= 32 && sTempNumber <= 50):
    NSB.MsgBox(`${sNameCap}, ${sOutputMessages[1]}`, NSB. vbOKOnly, " ");
    break;
  case (sUserStateCap == "FL" && sTempNumber >= 32 && sTempNumber <= 50):
    NSB.MsgBox(`${sNameCap}, ${sOutputMessages[2]}`, NSB. vbOKOnly, " ");
    break;
  case (sUserStateCap == "FL" && sTempNumber >= 50 && sTempNumber <=70):
    NSB.MsgBox(`${sNameCap}, ${sOutputMessages[3]}`, NSB. vbOKOnly, " ");
    break;
  default:
    NSB.MsgBox(`Sorry ${sNameCap}, I'm not sure what you should wear!`, NSB. vbOKOnly, " ");
    break;
}


// Only one NSB.MsgBox can appear