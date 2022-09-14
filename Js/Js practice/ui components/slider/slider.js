let count = 0;
let slider = document.getElementsByClassName('slider');

function countchanger(num){
    slider[count].style.display='none';
    count = count + num;
    console.log(count);
    if(count == 4){
        count = 0;
        displayslider(count);
    }
    else if(count == -1){
        count = 3;
        displayslider(count);
    }
    else{
        displayslider(count);
    }
}

function displayslider(count){
    slider[count].style.display = 'block';
}

displayslider(count);

