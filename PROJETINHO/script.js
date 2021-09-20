const inputTitle = document.querySelector('#inputTitulo');
const inputDes = document.querySelector('#inputDescription');

let cards = []

function mandar() {
    let id = gerarid();
    let title = inputTitle.value;
    let desc = inputDes.value;

    if (title == '' || title == null || title == undefined) {
        alert('Digite um titulo para a tarefa!')
    }
    else if (desc == '' || desc == null || desc == undefined) {
        alert('Digite uma descrição para a tarefa!')
    }
    else {
        cards.push({ id: id, title: title, description: desc });

        inputTitle.value = '';
        inputDes.value = '';
        
        
    }

    updateScreen();
    
}

function updateScreen() {

    let cardsContent = "";

    if(cards == null){cards =[]}
    cards.forEach(item => {
        let cardContent = ` 
        <div class="card mt-4" id="${item.id}">
        <div id= "cardTitle" class="card-header">${item.title} <img class="imgDelete" onclick="cardDelete(this)" src= "./img/delete.png"> </div>
        <div id="cardDescription" class="card-body">${item.description}</div>
        </div>`

        cardsContent += cardContent;
    });

    document.querySelector('#list').innerHTML = cardsContent;
    storage();
}

function cardDelete(a) {
    let b = a.parentElement;
    let c = b.parentElement;

    cards = cards.filter(item =>
        item.id != c.id)
    /* c.remove(); */
    updateScreen();
}


function deletall() {
    cards = [];
    updateScreen();
    localStorage.clear();
}

onload = function(){
    let nome = localStorage.getItem("excards");
    let final = JSON.parse(nome);
    cards = final;
    updateScreen();
}

function storage(){
    localStorage.setItem("excards", JSON.stringify(cards))
}


function gerarid() {
    return Math.floor(Math.random() * 100000) + 1;
}