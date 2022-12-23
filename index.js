const notation = () => { 
    let number1 = +prompt('Введите первое число:');
    let number2 = +prompt('Введите второе число:');
    let isNumber = typeof number1 === 'number' && typeof number2 === 'number';
    let validNumber =number2 >= 2 && number2 <= 36;
    if(isNumber && number1 && number2 && validNumber){
        console.log(number1.toString(number2));
        return;
    }
    else{
        console.log('Некорректный ввод!');
        return;
    }
}
notation();
