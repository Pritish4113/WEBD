let navbar = document.getElementById('navbar');

function bgchange(color){
    document.body.style.backgroundColor = color;

    if(color == '#000000'){
        document.body.style.color = 'white';
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
    }
    else{
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white';
        document.body.style.color = 'black';
    }
}