let btn = document.getElementById('btn');
let bulb = document.getElementById('bulb');

btn.addEventListener('click',togglebulb);

function togglebulb(e){
    if(btn.textContent.includes('ON')){
        bulb.src = "img/bulbon.png";
        btn.textContent='Turn OFF';
        btn.style.backgroundColor ='red';
    }
    else{
        btn.textContent='Turn ON';
        bulb.src = "img/bulboff.png";
        btn.style.backgroundColor ='green';
    }
}

alert('hello');