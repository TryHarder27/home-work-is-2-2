const calculate = () => { 
    const inputapple = parseInt(document.querySelector('#apple').value);
    const inputapple1 = parseInt(document.querySelector('#apple1').value);
    const inputegg = parseInt(document.querySelector('#egg').value);
    const inputegg1 = parseInt(document.querySelector('#egg1').value);
    const inputmilk = parseInt(document.querySelector('#milk').value);
    const inputmilk1 = parseInt(document.querySelector('#milk1').value);
    const inputpotato = parseInt(document.querySelector('#potato').value);
    const inputpotato1 = parseInt(document.querySelector('#potato1').value);
    const inputfruit = parseInt(document.querySelector('#fruit').value);
    const inputfruit1 = parseInt(document.querySelector('#fruit1').value);

    if( isNaN(inputapple) ||  isNaN(inputapple1) || isNaN(inputegg) || isNaN(inputegg1) || isNaN(inputmilk) || isNaN(inputmilk1) || isNaN(inputpotato) || isNaN(inputpotato1) || isNaN(inputfruit) || isNaN(inputfruit1) ) {

        alert("Заполните все поля!");
        return;
    }

    let productSum = (inputapple * inputapple1) + (inputegg * inputegg1) + (inputmilk * inputmilk1) + (inputpotato * inputpotato1) + (inputfruit * inputfruit1);


    const resultDiv = document.querySelector('#recult');
    resultDiv.innerHTML = 
    `
     <p> Стоимость: ${productSum}</p>
    `
}