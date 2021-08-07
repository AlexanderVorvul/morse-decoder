const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    const letterLength = 10
        , bynarySymbolLength = 2
        , dot = '.'
        , dash = '-'
        , space = '**********';

    result = '';

    for(let i = 0; i < expr.length; i += letterLength){
        
        let bynaryLetter = expr.substring(i, i + letterLength);
        
        if (space == bynaryLetter) {
            result += " ";
            continue;
        } else {

            let morseCode = '';

            for(let j = 0; j < bynaryLetter.length; j += bynarySymbolLength){

                let bynarySymbol = bynaryLetter.substring(j, j + bynarySymbolLength);

                if (bynarySymbol[0] == '1') {
                    if (bynarySymbol[1] == '0') morseCode += dot;
                    else morseCode += dash;                
                }
            }
            result += MORSE_TABLE[morseCode];
        }
    }
    return result;
}

module.exports = {
    decode
}