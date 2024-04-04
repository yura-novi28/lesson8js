let userEmail = prompt('Введіть email');
userEmail = userEmail.trim()
if(userEmail.indexOf('@') != 0 && (userEmail.length - 1) != userEmail.indexOf('@') && userEmail.indexOf('@') != -1){
    console.log('Правильний email')
}
else{
    console.log('Некоректний email')
}