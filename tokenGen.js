function generateUniqueToken(length, existingTokens) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let token;

    do {
        token = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
    } while (existingTokens.includes(token));
    existingTokens.push(token);
    return token;
}

module.exports = { generateUniqueToken };