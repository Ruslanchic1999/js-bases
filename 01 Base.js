//1 Переменные
//variable(Explanation)
//camelCase: firstName(Explanation)
//const firstName ="Ruslan"//string
//const lastName = 'Kholov'//readOnly
//const age = 22//number
//const isProgrammer = true;//boolean



//const _private ="private"
//const $ ="some value"
//const if = "mkef"// error
//const withNum5 = "5 "
// const 5withNum= "5"//error

// 2 Мутирование

//console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age.toString()  )
//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age.toString()  )

//const lastName = prompt ("Введите фамилию")
//alert (firstName + " " + lastName)

//3 Операторы

// let currentYear = 2022
// const birthYear = 1999
//
// //const age = currentYear - birthYear
// console.log()
//
// const a = 5
// const b = 10
// console.log(a + b)
// console.log( a - b)
// console.log(a*b)
// console.log(a/b)
//
// let c = 32
//
// c += a
// c -= b
// c /= a
// c *= a
// console.log(c)
//
// console.log(currentYear--)
// console.log(currentYear)

// 4 Типы Данных
// let x
// const isProgrammer = true
// const name = 'Ruslan'
// const age = 22
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)//один из багов языка

// 5 Приоретет операторов

// const fullAge = 22
// const birthYear= 1999
// const currentYear = 2022
//
// const isFullAge = currentYear - birthYear >= fullAge // 23 >=22
// console.log(isFullAge)

// 6 Условные операторы
//
// const courseStatus = 'fail' // ready, fail, pending
//
// if   ( courseStatus === 'ready') {
//     console.log('Курс уже готов и его нужно проходить')}
//
//  else if (courseStatus === 'pending'){
//     console.log('Курс находится в процессе обработки , подождите ')}
//
//
//  else if (courseStatus === 'fail'){
//     console.log('Курс не может быть запущен ')

//const isReady = true
     // if (isReady ) {
     //     console.log( "Все готово!")
     // }
     //  else (
     //     console.log( "Все не готово!")
     // )
//isReady ? console.log("Все готово!") : console.log("Все не готово!")//тернарное вырвжение для простых условий


 //const num1 = 42// number
//const num2 = "42"//string

//console.log(num1 == num2)//При == он выдаст true , при === он выдаст false(потомучто тут сравнит не только по типу данных но и по значению)

// 7 Булевая логика
// посмотреть в источнике mdn about && || !true

// 8 Функции

function calculateAge (year) {
    return 2022 - year

}
//  console.log(calculateAge ( 19))
// console.log(calculateAge ( 18))
// console.log( calculateAge ( 17))
// console.log( calculateAge ( 19))
// console.log(calculateAge ( 15))
// console.log(calculateAge ( 4))


// function logInfoAbout (name, year) {
//     const age =  calculateAge (year)
//
//     if (age > 0) {
//         console.log(' Человек по имени ' + name + " сейчас имеет age " + age)
//     }
//     else{
//         console.log('Вообщето это уже будущее')
//     }
// }
//
// logInfoAbout ( "Руслан", 1999)
// logInfoAbout ( "Lena", 2021)

// 9 Массивы
// const cars = ['Mazda', 'Ford', 'Tayota']//так правильнее и проще
// //const cars = new Array ('Mazda', 'Ford', 'Tayota')//так не проще
// console.log(cars.length)
//
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
//
// cars[0] = 'Porshe'
// console.log(cars)
// cars[cars.length]= 'Mazda'
// console.log(cars)

// 10 Циклы
//const cars = ['Mazda', 'Ford', 'Tayota', 'Lada']

// for (let i = 0; i<cars.length; i++) {//итерировали наш массив
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {//способ более проще цикл for of
//     console.log(car)
// }

// 11 Объекты

// const person = {//так мы создаем новый обьект
//
// }

// const person = {
//     firstName:'Ruslan',
//     lastName: 'Kholov',
//     year: 1999,
//     languages: [ 'Ru', "En", "De"],
//     hasWife: false,
//     greet: function () {//в данном случае метод, функция определена в контексте обьекта
//         console.log('greet from person')
//     }
// }
// console.log(person.firstName)//по сути console это объект у кторого лог это метод
// console.log(person['lastName'])//Еще один способ обращения к элементу объкта
// const key = 'year'//динамический ключ
// console.log(person[key])
// person.hasWife = true//изменяем значение in person
// person.isProgrammer= true//добавление значения  in person
// console.log(person)
// person.greet()



