const singleQuotedStr = '\tBob say: "How are you?"\n\tTom asnwered: "I\'m fine!"\n\tBob: "Open https://www.google.com"\n\tTom: "Is it Microsoft\'s site?"\n\tBob: "No"';
const doubleQuotedStr = "\tBob say: \"How are you?\"\n\tTom asnwered: \"I'm fine!\"\n\tBob: \"Open https://www.google.com\"\n\tTom: \"Is it Microsoft's site?\"\n\tBob: \"No\"";
const templateStr = `\tBob say: "How are you?"
\tTom asnwered: "I'm fine!"
\tBob: "Open https://www.google.com"
\tTom: "Is it Microsoft's site?"
\tBob: "No"`;

console.log(singleQuotedStr === doubleQuotedStr && singleQuotedStr === templateStr);
