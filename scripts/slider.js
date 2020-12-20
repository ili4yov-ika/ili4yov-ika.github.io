function dot_click1 () {
    document.querySelector('.d1').style.backgroundColor = 'red';
    document.querySelector('.d2').style.backgroundColor = 'black';
    document.querySelector('.d3').style.backgroundColor = 'black';

    document.querySelector('.item-1').style.marginLeft = '0';
    document.querySelector('.item-1').style.marginRight = '0';
    document.querySelector('.item-2').style.marginLeft = '-100%';
    document.querySelector('.item-2').style.marginRight = '-200%';
    document.querySelector('.item-3').style.marginLeft = '-200%';
    document.querySelector('.item-3').style.marginRight = '-300%';

    setTimeout(dot_click2, 5000);
}

function dot_click2 () {
    document.querySelector('.d1').style.backgroundColor = 'black';
    document.querySelector('.d2').style.backgroundColor = 'red';
    document.querySelector('.d3').style.backgroundColor = 'black';

    document.querySelector('.item-1').style.marginLeft = '-200%';
    document.querySelector('.item-1').style.marginRight = '-100%';
    document.querySelector('.item-2').style.marginLeft = '0';
    document.querySelector('.item-2').style.marginRight = '0';
    document.querySelector('.item-3').style.marginLeft = '-100%';
    document.querySelector('.item-3').style.marginRight = '-200%';

    setTimeout(dot_click3, 5000);
}

function dot_click3 () {
    document.querySelector('.d1').style.backgroundColor = 'black';
    document.querySelector('.d2').style.backgroundColor = 'black';
    document.querySelector('.d3').style.backgroundColor = 'red';

    document.querySelector('.item-1').style.marginLeft = '-300%';
    document.querySelector('.item-1').style.marginRight = '-200%';
    document.querySelector('.item-2').style.marginLeft = '-200%';
    document.querySelector('.item-2').style.marginRight = '-100%';
    document.querySelector('.item-3').style.marginLeft = '0';
    document.querySelector('.item-3').style.marginRight = '0';

    setTimeout(dot_click1, 5000);
}

setTimeout(dot_click1, 5000);