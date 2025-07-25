// Author: Mariam Amro Ahmed Fathi Seifeldin
// Updated Date: 25/04/2025

document.addEventListener('DOMContentLoaded', () => {
    const knob = document.querySelector('.slider-knob');
    const zones = document.querySelectorAll('.click-zone');
    const positions = [0, 30, 60];
    
    zones.forEach((zone) => {
        zone.addEventListener('click', () => {
            //Changing toggle position
            const index = parseInt(zone.dataset.index);
            knob.style.transform = `translateY(-50%) translateX(${positions[index]}px)`;

            //Changing theme
            let root = document.documentElement;
            let reset = document.querySelector('.reset');
            let equal = document.querySelector('.equal');
            let del = document.querySelector('.del');
            let buttonsHover = document.getElementsByClassName('.calc-button:hover')
            // console.log(reset);
            switch (index){
                case 0:
                    root.style.setProperty('--body-background', 'hsl(222, 26%, 31%)');
                    root.style.setProperty('--keypad-background', 'hsl(223, 31%, 20%)');
                    root.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
                    root.style.setProperty('--key-background', 'hsl(30, 25%, 89%)');
                    root.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
                    root.style.setProperty('--key-background2', 'hsl(225, 21%, 49%)');
                    root.style.setProperty('--key-shadow2', 'hsl(224, 28%, 35%)');
                    root.style.setProperty('--key-background3', 'hsl(6, 63%, 50%)');
                    root.style.setProperty('--key-shadow3', 'hsl(6, 70%, 34%)');
                    root.style.setProperty('--display-text', 'hsl(0, 0%, 100%)');
                    root.style.setProperty('--button-text', 'hsl(221, 14%, 31%)');
                    
                    reset.style.setProperty('color','var(--display-text)');
                    equal.style.setProperty('color','var(--display-text)');
                    del.style.setProperty('color','var(--display-text)');
                    break;
                case 1:
                    root.style.setProperty('--body-background', 'hsl(0, 0%, 90%)');
                    root.style.setProperty('--keypad-background', 'hsl(0, 5%, 81%)');
                    root.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
                    root.style.setProperty('--key-background', 'hsl(45, 7%, 89%)');
                    root.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
                    root.style.setProperty('--key-background2', 'hsl(185, 42%, 37%)');
                    root.style.setProperty('--key-shadow2', 'hsl(185, 58%, 25%)');
                    root.style.setProperty('--key-background3', 'hsl(25, 98%, 40%)');
                    root.style.setProperty('--key-shadow3', 'hsl(25, 99%, 27%)');
                    root.style.setProperty('--display-text', 'hsl(60, 10%, 19%)');
                    root.style.setProperty('--button-text', 'hsl(60, 10%, 19%)');

                    reset.style.setProperty('color','hsl(0, 0%, 100%)');
                    equal.style.setProperty('color','hsl(0, 0%, 100%)');
                    del.style.setProperty('color','hsl(0, 0%, 100%)');

                    break;
                case 2:
                    root.style.setProperty('--body-background', 'hsl(268, 75%, 9%)');
                    root.style.setProperty('--keypad-background', 'hsl(268, 71%, 12%)');
                    root.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
                    root.style.setProperty('--key-background2', 'hsl(281, 89%, 26%)');
                    root.style.setProperty('--key-shadow2', 'hsl(285, 91%, 52%)');
                    root.style.setProperty('--key-background', 'hsl(268, 47%, 21%)');
                    root.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
                    root.style.setProperty('--key-background3', 'hsl(176, 100%, 44%)');
                    root.style.setProperty('--key-shadow3', 'hsl(177, 92%, 70%)');
                    root.style.setProperty('--display-text', 'hsl(52, 100%, 62%)');
                    root.style.setProperty('--button-text', 'hsl(52, 100%, 62%)');

                    reset.style.setProperty('color','hsl(0, 0%, 100%)');
                    equal.style.setProperty('color','hsl(198, 20%, 13%)');
                    del.style.setProperty('color','hsl(0, 0%, 100%)');

                    break;
            }
        });
    });
    
});

function formatDisplayWithCommas(displayText) {
    return displayText
        .split(' ')
        .map(token => {
            let cleaned = token.replace(/,/g, '');

            // Handle empty strings and operators
            if (token === '' || isNaN(cleaned)) return token;

            // Handle trailing dot (e.g. "1000.")
            if (/^\d+\.$/.test(cleaned)) return token;

            // Handle leading dot (e.g. ".5")
            if (/^\.\d+$/.test(cleaned)) return token;

            // Handle incomplete decimal (e.g. "0.")
            if (/^\d+\.\d*$/.test(cleaned)) return token;

            // Otherwise, format number with commas
            return Number(cleaned).toLocaleString();
        })
        .join(' ');
}


// function to put button values on screen and calculate
let display = document.querySelector('.calc-display');
let buttons = document.querySelectorAll('.calc-button');
let clickSound = new Audio('button-click-289742.mp3');
// let clickSound = new Audio('mixkit-cool-interface-click-tone-2568.wav');
// let clickSound = new Audio('mixkit-negative-tone-interface-tap-2569.wav');
clickSound.volume = 0.1;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clickSound.currentTime = 0; // rewind to start
        clickSound.play();
        let buttonContent = button.textContent.trim();
        console.log(buttonContent);
        if (buttonContent == '+' || buttonContent == '-' || buttonContent == "x" || buttonContent == "/"){
            buttonContent = " " + buttonContent + " ";
            console.log("operation")
        }

        if (buttonContent === 'DEL'){
            if(display.textContent.charAt(display.textContent.length - 1) === ' ') {
                display.textContent = display.textContent.slice(0, -3);
            } else if (display.textContent.charAt(display.textContent.length - 2) === ','){
                display.textContent = display.textContent.slice(0, -2);
            } else{
                display.textContent = display.textContent.slice(0, -1);
            }
            console.log("del funtion button")
        }else if (buttonContent == 'RESET'){
            console.log("reset funtion button")
            display.textContent = "";
        }else if (buttonContent === '='){
            console.log("calc funtion button")
            //call funtion to calculate
            try {
                let result = eval(display.textContent.replace(/x/g, '*').replace(/,/g, ''));
                display.textContent = formatDisplayWithCommas(result.toString());
            } catch (e) {
                currentInput = "Error";
            }
        }else{
            display.textContent += buttonContent;
            display.textContent = formatDisplayWithCommas(display.textContent);
        }

    })
})



