// 1 Number
// const num = 42//integer
// const float = 42.54//float
// const pow = 10e3// степень extent
//
// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER)//=2^53
// console.log('Math.pow 53', Math.pow(2, 53) -1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)//e в степени
// console.log('MIN_VALUE', Number.MIN_VALUE)//e в степени
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log("1/0", 1/0)//infinity
// console.log(Number.NaN) //Not a Number
// console.log(typeof NaN)//Number
//
// const wierd = 4/undefined//NaN
// console.log(isNaN(wierd))//true
// console.log(Number.isNaN(43))//false
// console.log(Number.isFinite(Infinity))//false проверка конечно ли число
// console.log(Number.isFinite(34))//true
//
// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(parseInt( stringInt ))// parse синтаксический разбор , анализ...превращаем строку "42" в число not work
// console.log(Number( stringInt + 2))//not work
// console.log( +stringInt + 2)// works, answer= 44
// console.log(parseFloat( stringFloat ))//42.42
// console.log( +stringFloat + 2.42)
//
// console.log(0.4+0.2)//0.60000000001
// console.log(+(0.4+0.2).toFixed(1))//0.6
// console.log(parseFloat((0.4+0.3).toFixed(1)))//0.7

// 2 BigInt//Числа которые больше/меньше чем MAX SAVE Integer

//console.log( 94583854835883095031342n - 94583854835883095n)
//console.log( -94583854835883095031342n)
//console.log( 94583854835883095031342.89493n)//error

// console.log(10n+4)//error
// console.log(parseInt(10n)+2)//not work of me
//console.log(10n + BigInt(4))//not work of me
// console.log(5n/2n)//2n

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))//5
// console.log(Math.pow(5, 3))//125
// console.log(Math.abs(-25))//module ,answer 25
// console.log(Math.max(42, 12 , 244, 324))//324
// console.log(Math.min(42, 12 , 244, 324))//12
// console.log(Math.floor(6.9))//Округление в меньшую сторону , ответ 6
//
// console.log(Math.ceil(6.1))//7
// console.log(Math.round(6.4))// к Ближайшему целому округляет//6
// console.log(Math.round(6.7))//7
// console.log(Math.trunc(6.1))//Просто убирает все после запятой//6
 //console.log(Math.random())
// console.log(Math.asin(1))

// 4 Example

// function getRandomBetween (min, max) {
//     let rand = min + Math.random()*(max + 1 - min)
//     return Math.floor(rand)
// }
//
// console.log(getRandomBetween(10,23));