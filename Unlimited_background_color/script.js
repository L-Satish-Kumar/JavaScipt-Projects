let intervalID;

const randomColor = function() {
    const hex = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let startColorChange = function() {
    if (!intervalID) {
        intervalID = setInterval(changeBGColor, 1000);
    }

    function changeBGColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

let stopColorChange = function() {
    clearInterval(intervalID);
    intervalID = null;
}

document.getElementById('start').addEventListener('click', startColorChange);
document.getElementById('stop').addEventListener('click', stopColorChange);

