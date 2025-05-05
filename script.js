let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let operators = ['+', '-', '*', '/'];

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (value == 'AC') {
            string = "";
            input.value = string;
        } else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            let lastChar = string.slice(-1);
            if (operators.includes(lastChar) && operators.includes(value)) {
                return; // Don't allow two operators in a row
            }
            string += value;
            input.value = string;
        }

        
    })
})