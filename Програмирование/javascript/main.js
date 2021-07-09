var div = document.getElementById('theDiv');
var p = document.getElementById('elem');
var div2 = document.getElementById('theDiv2')
var div3 = document.getElementById('theDiv3')

let MyButton = document.getElementById('btn');

MyButton.addEventListener('click', eventFunction);

function eventFunction() {
    div.style.background = 'gray';
    // h1.style.color = 'blue';
    div2.style.background = 'blue';
    div3.style.background = 'red';
};

// var h1 = document.querySelector('.h');