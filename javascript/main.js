
function button_push(btn, value) {
    btn.addEventListener('click', (e) => {
        input.value += value;
    });
}
const input = document.querySelector('#calc');
input.value = "";
const buttons = document.querySelectorAll(".container-buttons .btn");
console.log(buttons.length);
for(var i=0;i<buttons.length;i++){
    button_push(buttons[i], buttons[i].innerText);
}


