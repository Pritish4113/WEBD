let addbtn = document.getElementById('addbtn');
let rembtn = document.getElementById('rembtn');
let editbtn = document.getElementById('editbtn');
let chaptername = document.getElementById('chaptername');
let chapterlist = document.getElementById('chapterlist');

addbtn.addEventListener('click',addchapter);


//we created this function using eventlistener
function addchapter(e){
    let newli = document.createElement('li'); //creating an element li
    newli.classList.add('chapterno');
    newli.innerHTML = `<span>${chaptername.value}</span>
    <button id = 'editbtn' onclick = "editchapter(this)">Edit</button>
    <button id = 'rembtn' onclick = "remchapter(this)">Remove</button>`
    //here above copied the content in search to the created list element

    //adding the element we created to the list of chapters
    chapterlist.append(newli);
}


//we created this function by 'onclick' attribute
function remchapter(curr_element){
    curr_element.parentElement.remove();

    //alert when no child is present in the parent
    if(chapterlist.children.length == 0){
        alert('chapter list is empty please add a chapter');
    }
}


//we created this function by 'onclick' attribute
function editchapter(curr_element){
    if(curr_element.textContent == 'Done'){
        curr_element.textContent = 'Edit';
        let currchaptername = curr_element.previousElementSibling.value;
        let currheading = document.createElement('span');
        currheading.textContent = currchaptername;

        curr_element.previousElementSibling.replaceWith(currheading); 
    }
    else{//for "Edit"

        curr_element.textContent = 'Done';
        let currname = curr_element.previousElementSibling; //selecting the text of chapter name beside the edit button i.e. its previuos element sibling
        let currinput = document.createElement('input');
        currinput.type = 'text';
        currinput.placeholder = 'Chapter Name';
        currinput.style.width = '10vw';
    
        //we have to replace our input element with the original element in our DOM
        currname.replaceWith(currinput); 
    }
}

