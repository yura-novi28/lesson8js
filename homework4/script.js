let userUrl = prompt('Введіть url');
if(userUrl.indexOf('https://') != -1){
    userUrl = userUrl.replace('https://', '')
    console.log(userUrl)
}
else if(userUrl.indexOf('http://') != -1){
    userUrl = userUrl.replace('http://', '')
    console.log(userUrl)
}
else{
    console.log('Неккоректний адрес')
}
