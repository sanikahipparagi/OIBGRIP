let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = ' ';
for(item of buttons)
{
    item.addEventListener('click',(f)=>
    {
        buttonText = f.target.innerText;
        console.log('Button Text is ', buttonText);
        if(buttonText=='X')
        {
            buttonText = '*';
            displayValue += buttonText;
            display.value = displayValue;
        }
        else if (buttonText == 'C')
        {
            displayValue = " ";
            display.value = displayValue; 
        }
        else if(buttonText == '=')
        {
            display.value = eval(displayValue);
        }
        else 
        {
            displayValue += buttonText;
            display.value = displayValue;
        }
    })
    
}