
function button_push(btn, value) {
    btn.addEventListener('click', (e) => {
        input.value += value;
    });
}

const input = document.querySelector('#calc');
const submit = document.querySelector('.submit')
input.value = "";
const buttons = document.querySelectorAll(".container-buttons .btn");
console.log(buttons.length);
for (var btn of buttons) {
    button_push(btn, btn.innerText);
}
submit.addEventListener('click', (e) => {
    input.value=eval(input.value);
});



