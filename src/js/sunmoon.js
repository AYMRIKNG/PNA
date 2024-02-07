

let mainColor = localStorage.getItem('mainColor');
let secondeColor = localStorage.getItem('secondeColor');
let clearValue = localStorage.getItem('clearValue');
let clear2Value = localStorage.getItem('clear2Value');
let blindValue = localStorage.getItem('blindValue');
let blind2Value = localStorage.getItem('blind2Value');

if (mainColor && secondeColor && clearValue && clear2Value && blindValue && blind2Value) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--seconde', secondeColor);
    document.documentElement.style.setProperty('--clear', clearValue);
    document.documentElement.style.setProperty('--clear2', clear2Value);
    document.documentElement.style.setProperty('--blind', blindValue);
    document.documentElement.style.setProperty('--blind2', blind2Value);
}

function swapColors() {
    let rootStyle = getComputedStyle(document.body);
    
    let mainColor = rootStyle.getPropertyValue('--main-color');
    let secondeColor = rootStyle.getPropertyValue('--seconde');
    let clearValue = rootStyle.getPropertyValue('--clear');
    let clear2Value = rootStyle.getPropertyValue('--clear2');
    let blindValue = rootStyle.getPropertyValue('--blind');
    let blind2Value = rootStyle.getPropertyValue('--blind2');

    document.documentElement.style.setProperty('--main-color', secondeColor);
    document.documentElement.style.setProperty('--seconde', mainColor);
    document.documentElement.style.setProperty('--clear', blindValue);
    document.documentElement.style.setProperty('--clear2', blind2Value);
    document.documentElement.style.setProperty('--blind', clearValue);
    document.documentElement.style.setProperty('--blind2', clear2Value);

    var iframe = document.getElementById('hor');
    iframe.src = iframe.src;

    var i = document.getElementById('sun');

    if(i.classList.contains("fa-sun")) {
        i.classList.replace("fa-sun","fa-moon");
    } else if(i.classList.contains("fa-moon")) {
        i.classList.replace("fa-moon","fa-sun");
    }

    localStorage.setItem('mainColor', secondeColor);
    localStorage.setItem('secondeColor', mainColor);
    localStorage.setItem('clearValue', blindValue);
    localStorage.setItem('clear2Value', blind2Value);
    localStorage.setItem('blindValue', clearValue);
    localStorage.setItem('blind2Value', clear2Value);
}
