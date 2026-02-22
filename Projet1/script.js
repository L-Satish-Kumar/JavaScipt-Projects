let buttons = document.querySelectorAll('.button')
let result_box = document.querySelector('#show_color')

buttons.forEach(function (element) {
    element.addEventListener('click', function (e) {
        result_box.style.backgroundColor = e.target.id    
    })
});