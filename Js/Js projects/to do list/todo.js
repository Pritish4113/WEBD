let addbtn = document.getElementById('addbtn');
let rembtn = document.getElementById('rembtn');
let editbtn = document.getElementById('editbtn');
let tasklist = document.getElementById('tasklist');

editbtn.style.backgroundColor = '#fbc800';
rembtn.style.backgroundColor = '#ff3a3a';

function addtask(curr_element){
    let taskname = curr_element.previousElementSibling.value;
    let newli = document.createElement('li');

    newli.innerHTML = `<span>${taskname}</span>
    <div class="buttons">
    <button onclick="edittask(this)" id="editbtn" style = "background-color :#fbc800"><img src="img/edit.png"></button>
    <button onclick="remtask(this)" id="rembtn" style = "background-color :#ff3a3a"><img src="img/delete2.png"></button>
    </div>`;

    if(!!document.getElementById('nothing')){
        document.getElementById('nothing').replaceWith(newli);
    }
    
    else{
        tasklist.append(newli);
    }

}

function remtask(curr_element){
    let parent = curr_element.parentElement.parentElement;
    parent.remove();
    
    if(tasklist.children.length == 0){
        tasklist.innerHTML = `<p id = "nothing" style = "font-size : 2rem;font-family: 'Roboto Slab', serif;margin 20px 0 0" >All tasks are completed...add more!</p>`
    }
}

function edittask(curr_element){
    
    if(curr_element.style.backgroundColor == 'rgb(251, 200, 0)'){
        curr_element.innerHTML = '<img src = "img/tick.jpg">';
        console.log(curr_element);
        curr_element.childNodes[0].style.height = '4.7vh';
        curr_element.style.backgroundColor = 'green';
        let currtaskname = curr_element.parentElement.previousElementSibling;
        let tasknew = document.createElement('input');
        tasknew.placeholder = 'Add Task';
        tasknew.type = 'text';
        tasknew.style.height = '4.7vh';
        tasknew.style.fontSize = '1.3rem';
        tasknew.style.padding = '0 0 0 10px';
        tasknew.style.width = '46vw';
        tasknew.style.margin = '0 0 0 -3px';
    
        currtaskname.replaceWith(tasknew); 
    }

    else{
        curr_element.innerHTML = '<img src = "img/edit.png">';
        curr_element.style.backgroundColor = '#fbc800';
        let editname = curr_element.parentElement.previousElementSibling;
        let newtask = document.createElement('span');
        newtask.textContent = editname.value;
        editname.replaceWith(newtask);  
    }
}


