// // Strings  

// // let a = 'nosxi udhwdwdb whdiwdw d'
// // console.log(a.length);

// //Method

// // let a = ' => Because they dont know about me....'
// // let b = 'JHBBDW WJBIW IW DUIWG'
// // let c = 'Hey, are you there?'
// // let d = 'How are you don?'
// // let e = 'Hey, whats up!'
// // let f = 'How was your day?'
// // let g = 'Hey, are you good or not?'
// // let h = 'My name is unknown..'
// // let i = 'Is this the bst place for learning?'
// // let j = 'If you are a good then why did everyone say you bad?'
// // let k = 'How was your day?'
// // let m = ''

// // console.log(a.toUpperCase())
// // console.log(b.toLowerCase())
// // console.log(c.split(""))
// // console.log(d.trim())
// // console.log(e.trimStart())
// // console.log(f.trimEnd())
// // console.log(g.replace('good', 'bad'))
// // console.log(h.indexOf('is'))
// // console.log(h.indexOf('o'))
// // console.log(h.indexOf('n'))
// // console.log(h.lastIndexOf('n'))
// // console.log(i[0])
// // console.log(j.concat(" ", a))
// // console.log(k.slice(1, 11))
// // console.log(k.slice(5))
// // console.log(k.slice(-1))
// // console.log(k.includes('is'))
// // console.log(k.includes('was'))


// // Looping with Strings.........

// // let l = 'Hello Panda'
// // for(i = 0; i <l.length; i++){
// //     console.log(l[i])
// // }

// // for(i in l){
// //     console.log(c[i])
// // }

// // for(i of l){
// //     console.log(l[i])
// // }




// // DOM

// // let a = document.getElementById('hey')
// // // console.log(a)
// // // a.style.color = 'red'
// // console.log(a.innerText.toUpperCase())




// // function inputButton(button){
// //     let value = button.innerText
// //     let a = document.getElementById('display')
// //     a.value += value
// // }

// // function resultButton(){
// //     let a = document.getElementById('display')
// //     a.value = eval(a.value)
// // }

// // function clearButton(){
// //     let a = document.getElementById('display')
// //     a.value = ''
// // }

// // function backspace() {
// //     let text = display.innerText;
// //     display.innerText = text.length > 1 ? text.slice(0, -1) : '0';
// // }




let display = document.getElementById('display');
let currentInput = '';

function inputValue(value) {
    if (display.innerText === '' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '';
}

// function backspace() {
//     let text = display.innerText;
//     display.innerText = text.length > 1 ? text.slice(0, -1) : '0';
// }

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}