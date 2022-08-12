class Calculator {
    constructor() {
        this.display = document.querySelector('.display');

        this.eventButton = () => {
            document.addEventListener('click', event => {
                const element = event.target;
                if (element.classList.contains('button-number')) this.displayValues(element);
                if (element.classList.contains('button-clear')) this.clearDisplay();
                if (element.classList.contains('button-delete')) this.deleteNumber();
                if (element.classList.contains('button-equal')) this.createCount();
            });
        };

        this.displayValues = value => this.display.value += value.innerText;

        this.clearDisplay = () => this.display.value = '';

        this.deleteNumber = () => this.display.value = this.display.value.slice(0, -1);

        this.createCount = () => {
            try {
                let count = this.display.value;
                count = eval(count);

                if (!count) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = count;
            } catch (error) {
                alert('Conta inválida');
                this.clearDisplay();
            }
        };

        this.startCalculator = () => this.eventButton();
    }
} 

const calculator = new Calculator();
calculator.startCalculator();
