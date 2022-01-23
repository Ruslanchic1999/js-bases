// Массивы
const cars = ['Mazda', 'Reno', 'Porshe', 'BMW']
const fib = [1, 1, 2, 3 , 5, 8, 13, 21]

// const people = [
//     {name: "Ruslan" , budget: 0},
//     {name: "Timophey" , budget: 57494},
//     {name: "Kristina" , budget: 4545}
// ]

//Function
//function addItemToEnd(){}

//Method
// cars.push('Kia')//add in end massive
// cars.unshift('Tesla')//ad in begin massive
// //cars.shift()//delete first item in massive
// //cars.pop()//delete last item in massive
// const firstCar = cars.shift()//удален 1ый элемент из массива но с ним можно работать
// const lastCar = cars.pop()//удален последний элемент массива но с ним можно работать
// console.log(cars)
// console.log(firstCar)
// console.log(lastCar)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('BMW')//indexOf возвращает индекс того элемента который ищем
// cars[index]= 'Lada'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//    if ( person.budget === 4545 ){
//        findedPerson = person
//    }
// }
// console.log(findedPerson)//worse way

// const person = people.find(function (person){
//     return person.name === 'Ruslan'
// })
// console.log(person)//better way//transfer callback function

//const person = people.find (person => person.budget === 0 )// advanced code, этот подход называется лямда функции
//console.log(person)//этот подход ещё лучше

//console.log(cars.includes('Mazda'));//true

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
//
//const pow3 = num => num ** 3
// const sqrt = num => Math.sqrt(num)
//
//  const pow3Fib = fib.map(pow3)
//  const filteredNumber = pow3Fib.filter(num => num > 10)
// console.log(pow3Fib)
//  console.log(filteredNumber);

// console.log(upperCaseCars)//always return us new massive
// console.log(cars)


//task 1
// const text = 'hello, we learning massive'
// const reverseText = text.split('').reverse().join(' ')//join method massive соединяющий массив с строчку через какой то символ, split method which разделяет строчку по буквам
// console.log(reverseText )

// const people = [
//     {name: "Ruslan" , budget: 0},
//     {name: "Timophey" , budget: 57494},
//     {name: "Kristina" , budget: 4545}
// ]
//
// const allBudget = people
//     .filter(person => person.budget > 5000)
//     .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)
//
// console.log( allBudget)


