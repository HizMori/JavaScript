var number1 = prompt('Загадайте число.');
var number2 = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
var i = 0;

for(var popitki = 3; popitki >= 0; popitki--){
    i++;
    if(popitki > 0 && number2 !== number1){
        number2 = prompt(`Угадайте число. У тебя ${popitki} попытки.`);
    }
    else if(number2 !== number1 && popitki >= 0){
        alert(`Ты не угадал... У тебя осталось ${popitki} попытки.`);
    }
    else if(number2 === number1 && popitki > 0){
        console.log(`Ты угадал с ${i} попытки! Молодец!`);
        break
    }
    else if(popitki == 0){
        console.log('Ты истратил все попытки. Игра окончина...');
        break
    }
};

function ugadai(){
    i++
    popitki -= 1;
    if(number2 === number1){
        console.log(`Ты угадал с ${i} попытки! Молодец!`);
    }
    else if(number2 !== number1){
        console.log(`Ты не угадал... У тебя осталось ${popitki} попытки. Не торопись, подумай хорошо!`);
    }
    else if(popitki < 0){
        console.log('Ты истратил все попытки. Игра окончина...');
    }
};