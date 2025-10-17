document.addEventListener('contextmenu', event => {
    event.preventDefault();
    showMessage("Menu kontekstowe jest zablokowane");
});
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        showMessage("Narzędzia deweloperskie są zablokowane");
        return false;
    }
    if (e.ctrlKey && e.keyCode == 67) {
        showMessage("Kopiowanie jest zablokowane");
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) {
        showMessage("Wyświetlanie źródła strony jest zablokowane");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        showMessage("Narzędzia deweloperskie są zablokowane!!!");
        return false;
    }
    if (e.ctrlKey && e.keyCode == 83) {
        showMessage("Zapis strony jest zablokowany");
        return false;
    }
};
function showMessage(msg) {
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '10px';
    message.style.right = '10px';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    message.style.color = 'white';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.zIndex = '9999';
    message.innerText = msg;
    document.body.appendChild(message);
    setTimeout(() => {
        message.remove();
    }, 3000);
}