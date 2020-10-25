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
    '**********': ' '
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.split('').slice(i, i+10));
    }

    arr.forEach(item => {
        for (let i = 0; i < item.length; i += 2) {
            if(item[i] === '1' && item[i+1] === '1') {
                item.fill('-', i, i+1);
                item.fill('', i+1, i+2);
            } else if (item[i] === '1' && item[i+1] === '0') {
                item.fill('.', i, i+1);
                item.fill('', i+1, i+2);
            } else if(item[i] === '*') {
                continue;
            } else {
                item.fill('', i, i+1);
                item.fill('', i+1, i+2);
            }
        }
    });

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].join('');
    }

    for(let i = 0; i < arr.length; i++) {
        arr[i] = MORSE_TABLE[arr[i]];
    }

    return arr.join('');

}



module.exports = {
    decode
}