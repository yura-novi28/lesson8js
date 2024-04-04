let text = prompt('Введіть текст')
let count = 0;
let start = 0;
while(true){
    if(text.indexOf(' ', start) != -1){
        start = text.indexOf(' ', start) + 1
        count++
    }
    else{
        break
    }
}

console.log(count)