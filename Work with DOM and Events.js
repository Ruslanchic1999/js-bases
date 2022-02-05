//Work with DOM
//window.alert('1')
//window.prompt('What is your name?')

const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0]//relatively old and slow method. Don't use it
//const heading2 = document.getElementsByClassName('h2-class')[0]//also receive HTMLCollection
const heading2 = document.querySelector('#sub-hello')//querySelector always return one element, причем первый попавшийся
console.dir(heading2)
// const heading3 = heading2.nextElementSibling
// console.log(heading3)

const h2list = document.querySelectorAll('h2')
console.log(h2list)
// const heading3 =h2list[1]
// console.log(heading3)
const heading3 =h2list[h2list.length-1]//index always on 1 less
console.log(heading3)


setTimeout (()=> {
    addStyleTo(heading, 'Sergey Kracken')
}, 2500)
setTimeout (()=> {
    addStyleTo(heading2, 'You are very cool guy', "black", 'yellow','2rem')
}, 4500)
const link = heading3.querySelector('a')
link.addEventListener("click", (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))//event.target = link//
    const url = event.target.getAttribute('href')
    window.location = url
})
setTimeout (()=> {
    addStyleTo(link, 'You are fucking millitary man', "black", 'blue', '2rem')
}, 6500)

function addStyleTo (node, text, color = 'red', backgroundColor = 'black', fontSize = '3rem'){//node так называют теги в body//function which dinamic change any parameters
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = backgroundColor
    node.style.padding = '4rem'
    node.style.display = 'block'
    node.style.width = '100%'


   // falsy: '', null, undefined, 0, false//on default fontSize equal undefined, but if fontSize will equal one of all meanings  then in block 'if' we're not enter
    if (fontSize){
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red'){
        heading.style.color = 'blue'
        heading.style.backgroundColor = 'green'
    }else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick', () =>{
    if (heading2.style.color === 'black'){
        heading2.style.color = 'white'
        heading2.style.backgroundColor = 'brown'
    }else {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'yellow'
    }
} )



