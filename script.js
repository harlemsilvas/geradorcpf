console.log('Hello World')
//257.754.025-04
function generateCPF() {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();    
    const number3 = generateRandomNumber();
    const checkDigit = calculateCheckDigit(number1, number2, number3);
}
function generateRandomNumber() {

}
function calculateCheckDigit(number1, number2, number3){
    const numbers = `${number1}${number2}${number3}`.split('');

    let sum = 0;
    let index = 0;

    for(let i = 10; i>=2; i--){
        sum += parseInt()
    }
}

generateCPF()