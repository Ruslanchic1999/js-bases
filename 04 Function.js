// 1 Функции
//Function Declaration//Могу вызывать её когда захочу даже до обьявления значения greet , защитимся от ошибок не читаемости
//   function greet(name) {
//     console.log("Hello ,",  name)
//   }
// Function Expression//создаем функцию и складываем ее в переменую greet2, есть преимущество связанное с синтаксисом, см ниже
//   const greet2 = function greet2(name) {
//     console.log("Hellooooo ,",  name)
//   }
  //greet ('Lena')
//greet2 ('Lena')

//console.log(typeof greet)//function, но на самом деле это не функция (такого типа нет),просто поможет понять имеем ли мы дело с функцией
//console.dir(greet)//функции в js это объекты..Object

// 2 Анонимные функции
// let counter =0
// let interval = setInterval(function() {// setTimeout есть ещё но он задает задержку , лучше в нашем случае интервал
//   if (counter === 56) {
//     clearInterval(interval)
//   } else{
//     console.log(++counter)
//   }
// }, 100)

// 3 Стрелочные функции// появился ECMA S6


// function greet(name) {
//   console.log("Hello ,",  name)
// }
//
// const arrow = (name) => {
//   console.log("Hello ,",  name)
// }
//
// const arrow2 = (name) => console.log("Hello ,",  name)//we can't write {} if we have one propertie (parametr)
//
// arrow ('Ruslan')
// arrow2 ('Ruslan')
//
// const pow3 = (num) => num ** 3//(Math.pow3 = **)//pow - возведение в степень
// console.log(pow3(4))

// 4 Параметры по умолчанию //ECMA S6

// const sum = (a, b=1) => a + b//b = 1 on default стирается, когда параметр b задан
// console.log(sum(13,23))//46
// console.log(sum(11,23))//NaN
//
// function sumAll (...all){
//   let  result = 0
//   for (let num of all){
//     result += num
//   }
//   return result
// }
//
// const r = sumAll (1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1)
// console.log(r)

// 5 Замыкание //явление когда мы из одной функции возвращаем другую функцию
//самая большая польза от замыкания создание приватных переменных, function (lastName) никак не оперирует с параметром name, позволяет защитить данные
// function createMember (name) {
//
//   return function (lastName){
//     console.log((name + lastName))//name + lastName
//   }
// }
//
// const logWithLastName = createMember('Ruslan')//result work function createMember will another function which locate in const (logWithLastName)
// console.log(logWithLastName)// equal string (name + lastName)
