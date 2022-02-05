// Объекты
const person = {
    name: 'Ruslan',
    age: 22,
    isProgrammer : true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex value',
    ['key_' + (1+3)] : 'computed key',//key_4
    greet () {//method, because it inside object person
        console.log('greet from person')
    },
    Info () {
        console.info('Information about person which called: ', this.name)
    }
}

// console.log(person.name)//right
// const ageKey = 'age'
// console.log(person[ageKey])//right
// console.log(person['complex key'])
// console.log(person['key_' + (1+3)])
// person.greet()
// console.log(person)
//
// person.age++//23
// person.languages.push('by')//fourth language
// //person['key_'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// const name = person.name//doubles code
// const age = person.age//doubles code
// const languages = person.languages//doubles code

//const { name, age: personAge = 10,  languages } = person//use destructurisation

//console.log(name, personAge, languages )

// for (let key in person) {
//     if (person.hasOwnProperty(key)){//определенная проверка , если у персон есть свое собственное свойство коттрое не находится в прототипе key , только тогда можно делать консоль логи..иначе цикл for in опасен тем что забирается еще и в прототипы обьекта а не только пробежится по ключам
//     console.log('key:', key)
//     console.log('value: ', person[key])}
// }

//Object.keys(person)//don't run on prototype,therefore we don't test with hasOwnProperty()

// Object.keys(person).forEach((key)=> {//object.keys return us massive
//     console.log('key:', key)
//    console.log('value: ', person[key])
// })
// console.log(person)

//Context

person.Info()

const logger = {
    keys() {
        console.log('Object keys: ',Object.keys(this))
    },
   keyAndValues () {
        // Object.keys(this).forEach(key => {
        //     console.log(`"${key}": ${this[key]}`)
        // })
       Object.keys(this).forEach( (key, index,array) =>{
           console.log(`"${key}": ${this[key]}`)
           }//function create self context(well, this[key] already not that this[key]), therefore knit this with bind)
   )},
}
logger.keyAndValues.call(person)

// let bound = logger.keys.bind(logger)//bind return new function and then we call her when we want it
// bound()

//logger.keys.call(person)//method call does same that doing bind , but except it itself calling without console.log

