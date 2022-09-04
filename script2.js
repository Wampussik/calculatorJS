let display = document.querySelector("display");
let historyDisplay = document.querySelector("historyValue");
let sqrtFinder = /√/g;
let powFinder = /\^/g;
let history = [];


const fixFloatingPoint = val => Number.parseFloat(val.toFixed(15))


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.id)
    })
})


function calc(value) {
    console.log("click", value);
    if (value.match(/=|Enter/)) {
        try {
            display.textContent = display.textContent.replace(sqrtFinder, "Math.sqrt");
            display.textContent = display.textContent.replace(powFinder, "**");
            console.log(display.textContent);
            history.push(display.textContent);
            display.textContent = fixFloatingPoint(eval(display.textContent));
            history[history.length - 1] += "=" + display.textContent;
        } catch {
            display.textContent = 'Error';
            history.splice(length - 1, 1);
            setTimeout(() => {
                display.textContent = "";
            }, 2000)
        }
        console.log(history);
        historyDisplay.innerHTML = `${history.slice(-7).join(' <p></p> ')}`;
    } else if (value === 'deleteAll') {
        display.textContent = ''
    } else if (value.match(/←|Backspace/)) {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1)
    } else {
        display.textContent += value
    }

}

