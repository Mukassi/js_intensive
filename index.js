const notation = () => { 
    let number1 = +prompt('Введите первое число:');
    let number2 = +prompt('Введите второе число:');
    let isNumber = typeof number1 === 'number' && typeof number2 === 'number';
    if(isNumber && number1 && number2){
        console.log(`Ответ: ${number1 + number2}, ${number1 / number2}.`);
        return;
    }
    else{
        console.log('Некорректный ввод!');
        return;
    }
}
notation();
