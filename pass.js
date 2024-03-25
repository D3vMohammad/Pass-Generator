const crypto = require('crypto');

function generatePassword(length, complexity) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!#$%^&*()-_+=<>';

    let allowedChars = '';
    let password = '';

    if (complexity.includes('lowercase')) {
        allowedChars += lowerCaseChars;
    }
    if (complexity.includes('uppercase')) {
        allowedChars += upperCaseChars;
    }
    if (complexity.includes('numeric')) {
        allowedChars += numericChars;
    }
    if (complexity.includes('special')) {
        allowedChars += specialChars;
    }

    if (!allowedChars) {
        throw new Error('Please specify at least one complexity level.');
    }

    for (let i = 0; i < length; i++) {
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }

    return password;
}

const length = 16;
const complexity = ['lowercase', 'uppercase', 'numeric', 'special'];

try {
    const password = generatePassword(length, complexity);
    console.log('Generated Password:', password);
} catch (error) {
    console.error(error.message);
}"
