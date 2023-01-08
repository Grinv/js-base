function crypto(password) {
    let passwordArray = password.split('');
    const passwordArrayLength = passwordArray.length;

    if (passwordArrayLength < 4) {
        return passwordArray.reverse().join(passwordArrayLength);
    }

    let encryptedPassword = passwordArray.slice(2, -1).reverse();
    encryptedPassword.unshift(passwordArrayLength)

    if (passwordArray.length > 5) {
        const addPrefix = passwordArray.slice(3, -2).reverse();
        addPrefix.push(encryptedPassword.length);
        encryptedPassword = addPrefix.concat(encryptedPassword);
    }

    return encryptedPassword.join(passwordArrayLength - 1);
};

function check(encryptedPassword, decryptedPassword) {
    return encryptedPassword === crypto(decryptedPassword);
};

console.log(crypto('password'));
console.log(check('o7w7s76787r7o7w7s7s', 'password'));
