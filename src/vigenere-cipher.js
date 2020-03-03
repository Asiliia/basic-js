class VigenereCipheringMachine {
    constructor(isRev) {
        this.isRev= isRev;
    }

    encrypt(text, key) {
        if(!text || !key) {
            throw new Error();
        }
        text = text.toUpperCase();
        key = key.toUpperCase();

        let iKey = 0;
        let result = '';
        
        for (let i = 0; i < text.length; i++) {
            if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
                if (iKey >= key.length) 
                    iKey = 0;
                    
                result += String.fromCharCode((text.charCodeAt(i) + key.charCodeAt(iKey++)) % 26 + 65);
               
            }
            else {       
                result += text[i];
            }
        }

        if (this.isRev === false) {
            return result.split('').reverse().join('');
        }

        return result;
    }

    decrypt(cipher, key) {
        if(!cipher || !key) {
            throw new Error();
        }
        cipher = cipher.toUpperCase();
        key = key.toUpperCase();

        let result = '';
        let iKey = 0;

        for (let i = 0; i < cipher.length; i++) {
            if (cipher.charCodeAt(i) > 64 && cipher.charCodeAt(i) < 91) {   
                if (iKey >= key.length) 
                    iKey = 0;
                 
                result += String.fromCharCode(((cipher.charCodeAt(i) + 26 - key.charCodeAt(iKey++)) % 26) + 65);              
            }
            else {
                result += cipher[i];
            }   
        }

        if (this.isRev === false) {
            return result.split('').reverse().join('');
        }

        return result;
    }
}

module.exports = VigenereCipheringMachine;