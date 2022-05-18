// we have string (lines between tags (<>)):
//  <
//                  Bob say: "How are you?"
//                  Tom asnwered: "I'm fine!"
//                  Bob: "Open https://www.google.com"
//                  Tom: "Is it Microsoft's site?"
//                  Bob: "No"
//  >
// your task:
// 1. create three variables <singleQuotedStr, doubleQuotedStr, templateStr>
// and assign our string to each of these variables using <'', "", ``> quotes respectivly to string's names
// 2. compare all strings between each other (google in help) to be sure that they absolutely the same

const singleQuotedStr = '\tBob say: "How are you?"\n\tTom asnwered: "I\'m fine!"\n\tBob: "Open https://www.google.com"\n\tTom: "Is it Microsoft\'s site?"\n\tBob: "No"';
//console.log(singleQuotedStr);

const doubleQuotedStr = "\tBob say: \"How are you?\"\n\tTom asnwered: \"I'm fine!\"\n\tBob: \"Open https://www.google.com\"\n\tTom: \"Is it Microsoft's site?\"\n\tBob: \"No\"";
//console.log(doubleQuotedStr);

const templateStr = `\tBob say: "How are you?"
\tTom asnwered: "I'm fine!"
\tBob: "Open https://www.google.com"
\tTom: "Is it Microsoft's site?"
\tBob: "No"`;
//console.log(templateStr);

console.log(singleQuotedStr === doubleQuotedStr && singleQuotedStr === templateStr && doubleQuotedStr === templateStr);





