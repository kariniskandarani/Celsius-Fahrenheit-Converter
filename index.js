function toCelsius(){
    var fahrenheit= document.getElementById('input1').value;
    var f= parseFloat(fahrenheit);
    var celsius= (f-32)*5/9;
    document.getElementById('input2').value=celsius;
}

function toFahrenheit(){
    var celsius= document.getElementById('input2').value;
    var c= parseFloat(celsius);
    var fahrenheit= (c*9/5)+32;
    document.getElementById('input1').value=fahrenheit;
}