
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
