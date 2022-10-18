let max = 101; /* Так как Math.flor округляет до целых в меньшую сторону, то учитывая что Math.random - может дать свободное значение от 0 до 1 - исключая 1, то значение max = 101 - позволит получить нам значения от 0 до 100(включая 100)*/
function getRandom(max){
    return Math.floor(Math.random() * max);
}
console.log(getRandom(max));