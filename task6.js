let arr = [1, 1, 1, 1, 1];
let x = 0;
for (let i=0; i < arr.length - 1; i++){{
    if(arr[i] == arr[i+1]){
        x = x+1;
    }
}
}
if (x != arr.length - 1){
    console.log("Числа в массиве не одинаковы")
} else{
    console.log("Числа в массиве одинаковы")
}