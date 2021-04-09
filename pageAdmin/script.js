console.log('elo')

const pass = document.getElementById("pass")
const loginPage = document.getElementById("login")
const blurf = document.getElementById("blur")
function runScript(e) {
    if (e.keyCode == 13 && pass.value == '051276') {
        loginPage.classList.add('hide');
        blurf.classList.add('blurNo');
    }
}

