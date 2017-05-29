(function(){

document.getElementById('buttonNote').addEventListener('click',showNotesEditor);
document.getElementById("buttonNotebook").addEventListener("click",showMenuNotebooks);
document.getElementById("addNoteBook").addEventListener("click",addNoteBook);
document.getElementById("buttonTag").addEventListener("click",showMenuTag);
document.getElementById("addTag").addEventListener("click",addNote);

notesModal = document.getElementById("notesModal");
notebooks = document.getElementById("sectionFile");
inputNameNoteBook= document.getElementById("inputNoteBook");
tags = document.getElementById('tagFile');

var creatingNote=false;

function showNotesEditor() {
    tags.classList.remove('tagFile--show');
    notesModal.classList.add("notesModal--show");
    document.getElementById("nameNote").focus();
    document.getElementById("mainView").classList.add("mainViewOpaque");
    notebooks.classList.remove("sectionFile--show")
    creatingNote =true;
}
document.onkeydown = function myFunction(event) {
    switch(event.keyCode){
        case 27:
            notesModal.classList.remove('notesModal--show');
            notebooks.classList.remove('sectionFile--show');
            tags.classList.remove('tagFile--show');
            document.getElementById('mainView').classList.remove('mainViewOpaque');
            creatingNote=false;
            document.getElementById('nameNote').value=''
            document.getElementById('contentNote').value='';
            break;
        case 13:
            createNote();
            document.getElementById('nameNote').value=''
            document.getElementById('contentNote').value='';
    }
}
function createNote(){
    if(creatingNote){
        var title = document.getElementById('nameNote').value;
        var content =document.getElementById('contentNote').value;

        var h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(title));

        var p = document.createElement('p');
        p.setAttribute('class','p--shorter');
        p.appendChild(document.createTextNode(content));
        
        
        var button1 = document.createElement('button');
        var img1 =document.createElement('img');

        img1.setAttribute('class','note__image');
        img1.setAttribute('src','../iconos/send.svg');

        button1.setAttribute('class','note__button');
        
        var button2 = document.createElement('button');
        var img2 =document.createElement('img'); 
        
        img2.setAttribute('class','note__image');
        img2.setAttribute('src','../iconos/pencil.svg');

        button2.setAttribute('class','note__button');

        var button3 = document.createElement('button');
        var img3 =document.createElement('img');
        
        img3.setAttribute('class','note__image');
        img3.setAttribute('src','../iconos/delete.svg');

        button3.setAttribute('class','note__button');

        button1.appendChild(img1);
        button2.appendChild(img2);
        button3.appendChild(img3);

        //CAPTION
        var div1 =document.createElement('div');
        div1.setAttribute('class','caption');
        var div2=document.createElement('div');
        div2.setAttribute('class','thumbnail');
        var div3=document.createElement('div');
        div3.setAttribute('class', 'col-md-3');

        div1.appendChild(h3);
        div1.appendChild(p);

        //buttons
        div1.appendChild(button1);
        div1.appendChild(button2);
        div1.appendChild(button3);

        div2.appendChild(div1);
        div3.appendChild(div2);
        //thumbnails
        document.getElementById('thumbnails').appendChild(div3);
        console.log(title+'-'+content);

        notesModal.classList.remove('notesModal--show');
        document.getElementById('mainView').classList.remove('mainViewOpaque');
    }
}
function showMenuNotebooks(){
    tags.classList.remove('tagFile--show');
    notebooks.classList.add('sectionFile--show');
    notesModal.classList.remove('notesModal--show');
    tags.classList.remove('tagFile--show');
    document.getElementById('mainView').classList.add('mainViewOpaque');
}
function addNoteBook(){
    console.log('new book');

    //TITULO DEL NOTEBOOK
    var name =inputNameNoteBook.value;
    var h6 = document.createElement('h6');
    h6.setAttribute('contenteditable', 'true');
    
    var text = document.createTextNode(name);
    h6.appendChild(text);

    //ROW
    var div = document.createElement('div');
    div.setAttribute('class', 'row sectionFile__li');

    //COLUMN
    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-md-12');

    div.appendChild(divCol);
    divCol.appendChild(h6);

    //LISTA
    var node = document.createElement('li');
    node.setAttribute('class', 'sectionFile__list');

    node.appendChild(div);
    document.getElementById('notebooksList').appendChild(node);
    console.log('agregado');
}
// TAGS ---------------------------------------------------------------------
function showMenuTag(){
    console.log('hola');
    tags.classList.add('tagFile--show');
    notesModal.classList.remove('notesModal--show');
    notebooks.classList.remove('sectionFile--show');
    document.getElementById('mainView').classList.add('mainViewOpaque');
}

})();
