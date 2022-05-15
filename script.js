let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let ten = document.getElementById('ten')
let eleven = document.getElementById('eleven');
let twelve = document.getElementById('twelve');

let a, b;

for(a = 1; a <= 12; a++){
    for(b = 1; b <= 12; b++){
        if(a === 1){
            one.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 2){
            two.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 3){
            three.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 4){
            four.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 5){
            five.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 6){
            six.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 7){
            seven.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 8){
            eight.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 9){
            nine.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 10){
            ten.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 11){
            eleven.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
        if(a === 12){
            twelve.innerHTML += (a + " x " + b + " = " + a * b + "<br>");
        }
    }
}
