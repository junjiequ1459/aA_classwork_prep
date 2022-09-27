function caesarCipher(text, key) {
    let cipher = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i].charCodeAt(0) + key > 122) {
            cipher[i] = String.fromCharCode(text[i].charCodeAt(0) + key - 26);
        }
        else {
            cipher[i] = String.fromCharCode(text[i].charCodeAt(0) + key);
        }
    }
    console.log(cipher);
    console.log("it worked");
}

caesarCipher("abc", 1);