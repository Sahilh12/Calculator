let input = document.querySelector('input')
const buttons = document.querySelectorAll('button')
const equalBtn = document.querySelector('.equal')

let result = ''
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            result = eval(result)
            input.value = result
        }
        else if (e.target.innerHTML == 'AC') {
            result = ''
            input.value = result
        } else if (e.target.innerHTML == 'DEL') {
            result = result.substring(0, result.length - 1)
            input.value = result
        } else {
            result += e.target.innerHTML
            input.value = result
        }

    })
})