import { encode, decode } from './messagescramble.js';
document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let msg = '⚠️ The following characters were not found in the key:';
        document.querySelector('output').innerText = '';
        const message = document.querySelector('#clearText').value;
        const key = document.querySelector('#key').value;
        const decodedText = event.submitter.id === 'decodeButton' ? 
                decode(message, key): 
                encode(message, key);
        if (decodedText.missing && decodedText.missing.length > 0) {
            let chars = new Set(decodedText.missing);
            document.querySelector('output').innerText = msg + ` ${[...chars].join(', ')}`;
        }
        document.getElementById('encryptedText').value = decodedText.message;
    });

let dec = encode("Hello World", "abscdefghijklmnopqrstuvwxyz");
console.log(dec);
console.log(decode(dec.message, "abscdefghijklmnopqrstuvwxyz"));
