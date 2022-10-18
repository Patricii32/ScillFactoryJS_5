let x = "1";
switch(typeof x){
    case "number":
        console.log("Х - Число");
        break;
    case "string":
        console.log("Х - Строка");
        break;
    case "boolean":
        console.log("Х - Логический тип");
        break;
    default:
        console.log("Тип X не определён")
}