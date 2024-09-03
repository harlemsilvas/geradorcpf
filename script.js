console.log('Hello World')
//257.754.025-04
function generateCPF() {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();    
    const number3 = generateRandomNumber();
    const checkDigit1 = calculateCheckDigit(number1, number2, number3);
    const checkDigit2 = calculateCheckDigit(number1, number2, number3,checkDigit1);
    let cpf;
    if (document.getElementById('dotAndDashesTrue').checked) {
        cpf = `${number1}.${number2}.${number3}-${checkDigit1}${checkDigit2}`;
    } else {
        cpf = `${number1}${number2}${number3}${checkDigit1}${checkDigit2}`;
    }
    document.getElementById('inputResult').value = cpf;
}
function generateRandomNumber() {
    const random = Math.floor(Math.random() * 999);
    const formatted = random.toString().padStart(3, '0');
    return formatted;
}
function calculateCheckDigit(number1, number2, number3, number4) {
    const numbers = `${number1}${number2}${number3}`.split('');
    if (number4 !== undefined) {
        numbers.push(number4);
    }
    let sum = 0;
    let index = 0;
    const initialNumber = number4 !== undefined ? 11 : 10;

    for(let i = 10; i>=2; i--){
        sum += parseInt(numbers[index]) * i;
        index++;        
    }
    const rest = sum % 11;
    if(rest < 2){
        return 0;
    } else {
        return 11 - rest;
    }
}
//generateCPF();
