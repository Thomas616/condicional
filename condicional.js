function media(){
var val1 = document.getElementById('valor1').value;
var val2 = document.getElementById('valor2').value;
var result = (parseInt(val1) + parseInt (val2))/2;


if(result >= 6)
alert('aprovado')
else
alert('reprovado')



}
function comparacao(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    if(val1==val2)
    
    alert('os valores são iguais')
    
    if(val1>val2)
    alert('valor 1 é maior que o valor 2') 
    else
    alert('valor 2 é maior que valor 1')



}
