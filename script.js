let myAge = 15
console.log(myAge)

let myName = 'Roman'
console.log(myName)

let isStudent = 'Student'
if(isStudent === 'Student'){
    console.log("true")
}
else{
    console.log("false")
}

let myString = 'Нема на світі України, Немає другого Дніпра.'
console.log(myString)

let myNumber = 20
let myNumbersecond = 10
let numberResult = myNumber + myNumbersecond
console.log(numberResult)

let myNull = 'null'
console.log(myNull)

let yourName = prompt('Твоє ім`я?')
console.log('Вітаємо вас ' + yourName)

let yourChoose = confirm("Підтвердіть вашу дію:")
if (yourChoose){
    alert("Дякую за підтвердження!")
}
else{
    alert("Дію відмінено!")
}



alert("Увага! Небезпечноі.");

yourConfirm=confirm("Підтвердіть вашу дію:");

if (yourConfirm) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}