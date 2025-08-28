const button1 = document.getElementById('botao1');
const button2 = document.getElementById('botao2');
const button3 = document.getElementById('botao3');
const form = document.getElementById('formulario');
const In = document.getElementById('gohere');



button1.onclick = () => {
    console.log("click");
}
button1.ondblclick = () => {
    console.log("double click");
}

button2.onmouseover = () => {
    console.log("registro");
    button2.style.color = 'red';
}
button2.onmouseout = () => {
    button2.style.color = '';
}

form.onkeydown = (event) => {
    if (event.key == "Enter") {

        In.innerHTML = form.value;
        form.value = '';
    }
}

button3.onclick = (event) => {
    In.innerHTML = "";
}

