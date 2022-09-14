let counter = document.getElementById('counter');
let char = document.getElementById('char');
let words= document.getElementById('words')

function count(e){
    let text = counter.value;
    char.innerHTML = text.length;

    text = text.trim(); //this trims blackspaces from beginning and the end of the text

    let wordslist = text.split(' '); //this splits our text and stores the every element in an array

    //here below removed all the empty elements from the wordslist array
    function nospace(element){
        if(element != ""){
            return element;
        }
    }
    let newlist = wordslist.filter(nospace); //search for the filter function from the internet

    words.innerHTML = newlist.length;
}

counter.addEventListener('input',count);