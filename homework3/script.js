let userText = prompt('write text');
let count = 0;
let start = 0;
while(true){
    if(userText.indexOf('html', start) != -1){
        start = userText.indexOf('html', start) + 1
        count++
    }
    else{
        break
    }
}
console.log(count)