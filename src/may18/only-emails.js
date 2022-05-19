const { faker } = require('@faker-js/faker');
const userInputs = Array(1000)
    .fill(null)
    .map((input, i) => i % 20 === 0
        ? faker.internet.email()
        : faker.datatype.string()
    );

/**
 * You recieve array of inputs from user, stored in <userInputs> variable
 * You should filter this array to get only valid email-strings
 * Store result in <emails> variable
 * Log result into terminal
 * 
 * P.S.
 * Don't forget run <npm install> before running file (only first time)
 * Variable <userInputs> is already defined
 */

// PUT YOUR CODE UNDER THIS COMMENT
// TODO

const emails = userInputs
    .filter((el) => el.includes('@') && el.includes('.'));
    // TODO
    // .filter((el))

console.log(emails);
