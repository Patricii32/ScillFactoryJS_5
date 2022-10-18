let a= prompt("Введите значение");
let b = +a;
if (typeof b =='number' && !isNaN(b)){
    if(b % 2 ==0){
        console.log("Четное число");
    } else {
        console.log("Нечетное число");
    }}else{
    console.log("Упс, кажется, вы ошиблись");
}