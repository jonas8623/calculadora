// Factory function

function crateCalculator() {
    return {
        
        display: document.querySelector('.display'),

        init: function() {
            this.clickButton();
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteNumber() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        createCount() {
            let count = this.display.value;
            
            try {
                count = eval(count);

                if (!count) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = count;
            } catch(error) {
                alert('Conta inválida');
            }
        },

        clickButton() {
            document.addEventListener('click', function(event) {
                const element = event.target;

                if (element.classList.contains('button-number')) {
                    this.displayValues(element.innerText);
                }

                if (element.classList.contains('button-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('button-delete')) {
                    this.deleteNumber();
                }

                if (element.classList.contains('button-equal')) {
                    this.createCount();
                }
            }.bind(this));
        },

        displayValues: function(value) {
            this.display.value += value; 
        }

    };
}

const calculator1 = crateCalculator();
calculator1.init();