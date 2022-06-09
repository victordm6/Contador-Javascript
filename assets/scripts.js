var currentNumber = 0;
var currentNumberwrapper = document.getElementById("currentNumber");

subtrair.addEventListener('click', function (){
    currentNumber = currentNumber -1;
    currentNumberwrapper.innerHTML = currentNumber;
})

adicionar.addEventListener('click', function (){
    currentNumber = currentNumber +1;
    currentNumberwrapper.innerHTML = currentNumber;
})