const btnSaludo = document.querySelector('.btnSaludo');
const divSaludo = document.querySelector('.saludoDiv');

btnSaludo.onclick = function () {
    alert('Hola!');
};

divSaludo.addEventListener('click', function () {
    alert('Hola! Soy el div');
});