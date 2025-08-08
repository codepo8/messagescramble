const getkeys = key => {
    let keys = {};
    Array.from(key).forEach((k,i) => {
        if (keys[k]) {
            keys[k].push(i);
        } else {
            keys[k] = [i];
        }
    });
    return keys;
};
const encode = (clearText,key) => {
    let chunks = Array.from(clearText);
    let keys = getkeys(key);
    let missingChars = [];
    let encodedText = chunks.map((char) => {
        if (!keys[char]) {
            missingChars.push(char);
            return char; 
        }
        let k = keys[char].length > 1 ?
            keys[char][Math.random() * keys[char].length|0] :
            keys[char];
        let randChar = String.fromCharCode(Math.floor(25 * Math.random() + 97));
        return randChar + k;    
    }).join('');
    return {"message":encodedText, "missing":missingChars};    
}
const decode = (message, key) => {
    message = message.replace(/[a-z]/g,'±');
    message.split(/\D+/g).forEach((num) => {
        if (num.length === 0) return;
        message = message.replace(num,key[num]);
    });
    return {"message": message.replace(/±/g,'')};
};
export { encode, decode }

