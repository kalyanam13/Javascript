const prompt = require('readline-sync');

let fruit = prompt.question('Enter a fruit:');

switch (fruit) {
    case 'papaya':
        console.log('Papaya is good for making juice.');
        break;
    case 'apple':
        console.log('Apple is good for making juice.');
        break;
    default:
        console.log("Sorry, we don't have that fruit.");
}




