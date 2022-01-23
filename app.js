// Объекты
const person = {
    name: 'Ruslan',
    age: undefined,
    isProgrammer : true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex value',
    ['key_' + (1+3)] : 'computed key',//key_4
    greet () {//method, because it inside object person
        console.log('greet from person')
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

for (let key in person) {
    if (person.hasOwnProperty(key))//определенная проверка , если у персон есть свое собственное свойство коттрое не находится в прототипе key , только тогда можно делать консоль логи..иначе цикл for in опасен тем что забирается еще и в прототипы обьекта а не только пробежится по ключам
    console.log('key:', key)
    console.log('value: ', person[key])
}

