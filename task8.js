let guitars = new Map();
guitars.set("ESP", "Horizon");
guitars.set("Gibson", "LesPaul");
guitars.set("Fender", "Stratocaster");
for (let item of guitars){
    console.log(`Ключ - ${item[0]}, Значение - ${item[1]}`);
}
