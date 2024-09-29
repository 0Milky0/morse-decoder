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
    let symbol = []
    let text = ''
    for(let i = 10; i < expr.length+10; i += 10) {
        let str = expr.split('')
        symbol.push(String(parseInt(str.slice(i-10, i).join(""))))
    }
    for(let j = 0; j<symbol.length; j++) {
        symbol[j] = symbol[j].replace(/10/g, '.')
		symbol[j] = symbol[j].replace(/11/g, '-')
        let temp = symbol[j]
        if(symbol[j] != 'NaN') {
            text += MORSE_TABLE[temp]
        }
        else {
            text += " "
        }
    }
    // console.log(symbol)
    // console.log(text)
    return text
}
module.exports = decode;
