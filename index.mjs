import { infixToPostfix } from './infixToPostifx.mjs';
import { RPNProcess } from './RPN.mjs';

console.log('Введите выражение:');

process.stdin.on('data', function (chunk) {
    let exp = chunk.toString();
    exp = preprocess(exp);
    infixToPostfix(exp)
        .then((res) => {
            RPNProcess(res)
                .then((res) => console.log(res))
                .catch((e) => console.error(e));
        })
        .catch((e) => console.error(e))
        .finally(() => {
            console.log('Введите выражение:');
        });
});

function preprocess(rawString) {
    let processedList = [];
    let rawList = rawString.trim().split('');
    let numHolder = '';
    rawList.forEach((e) => {
        if (
            e === '+' ||
            e === '-' ||
            e === '*' ||
            e === '/' ||
            e === '^' ||
            e === '(' ||
            e === ')'
        ) {
            if (numHolder.length > 0) {
                processedList.push(numHolder);
                numHolder = '';
                processedList.push(e);
            } else {
                processedList.push(e);
            }
        } else if (typeof parseInt(e) === 'number' || e === '.') {
            numHolder += e;
        }
    });

    if (numHolder.length > 0) {
        processedList.push(numHolder);
    }

    return processedList.join(' ');
}
