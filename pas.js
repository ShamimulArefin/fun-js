function colorChange(newColor){
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}


let input = document.querySelector('input');
let log = document.getElementById('log');

input.oninput = handleInput;

function handleInput(e) {
  log.textContent = `The field's value is
    ${e.target.value.length} character(s) long.`;
}



