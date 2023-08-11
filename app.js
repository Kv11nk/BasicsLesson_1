const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitButton = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

let sum, action

minus.onclick = () => action = '-'
plus.onclick = () => action = '+'
submitButton.onclick = () => prinResult(computerNumbersWithActions(input1, input2, action))

function prinResult(numRes) {
    numRes < 0 ? resultElement.style.color = 'red' : resultElement.style.color = 'green'
    resultElement.textContent = numRes
}

function computerNumbersWithActions(inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value) 
    const num2 = Number(inp2.value)

    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}