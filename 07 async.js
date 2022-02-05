// Ассинхронность
//Event Loop

// const timeOut = setTimeout ( () =>{
//     console.log('after time')
// }, 2000)
//clearTimeout(timeOut)
// const interval = setInterval ( () =>{
//     console.log('after time')
// }, 1000)
//clearInterval(interval)

 // const delay = (callback, wait= 1000) => {
 //    setTimeout(callback, wait)
 // }
 // delay(() => {
 //     console.log('after two second')
 // }, 2000)//uncomfortable

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {// Promise intend for убрать большой уровень вложенности
        setTimeout (() => {
            //resolve()
            reject('Something going wrong, please trying attempt')
        }, wait)
    })
    return promise
}
//
// delay(2500)
//     .then(() =>{//возвращаем другой промис и при этом не переходить на более глубинный уровень
//         console.log('after 2 seconds')
//     })
//     .catch(err => console.error( 'Error', err))// let catch errors
//     .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))// взяли ассинхронный код и обернули in Promise

//getData.then(data => console.log(data) )

async function asyncExample() {
    try{
    await delay(2000)
    const data = await getData()
    console.log('Data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }

}
asyncExample()