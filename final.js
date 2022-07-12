let todosArray = [];
let counter = 0;
let count = document.getElementById('count');
let i = 0;
let inprogressUl = document.getElementById('box2-ul');
function addTodos() {
    let input = document.getElementById('input');
    let todo =
    {
        text: input.value,
        id: i,
        status: 0,
    }
    todosArray.push(todo);
    counter++;
    count.innerHTML = counter;
}
function renderTodos() {
    let form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });
    let todosUL = document.getElementById('box1-ul');
    let todolist = document.createElement('li');
    todolist.id = i;
    for (; i < todosArray.length; i++) {
        if (todosArray[i].status == 0) {
            let taskValue = document.createTextNode(todosArray[i].text);
            todolist.append(taskValue);
            todosUL.append(todolist);
            deleteTask(todolist);
            startTask(todolist);
        }
        else if (todosArray.status == 1);
        {
            let todolist = document.createElement('li');
            todolist.setAttribute('id', todosArray[i].id);
        }
    }
    input.value = '';
}
function deleteTask(todolist) {
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    todolist.append(deleteButton);
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener('click', function () {
        confirm("Are you really want to remove task");
        if (counter > 0) {
            counter--;
            count.innerHTML = counter;
        }
        let idVar = todolist.getAttribute('id');
        let newArray = todosArray.filter(data => data.id != idVar)
        todolist.remove();
        console.log(newArray);
    });
}
function startTask(todolist) {
    let startButton = document.createElement('button');
    startText = document.createTextNode('Start');
    startButton.append(startText);
    todolist.append(startButton);
    startButton.setAttribute('id', i);
    startButton.addEventListener('click', function () {
        if (counter > 0) {
            counter--;
            count.innerHTML = counter;
        }
        todolist.getAttribute('id');
        todosArray[todosArray.findIndex(data => data.id == todolist.getAttribute('id'))].status = 1;
        renderTodos();
        let inprogressUl = document.getElementById('box2-ul');
        inprogressUl.append(todolist);
        startButton.style.display = 'none';
        doneTask(todolist);
    });
}
function doneTask(todolist) {
    let doneButton = document.createElement('button');
    doneButton.innerText = 'Done';
    todolist.append(doneButton);
    doneButton.setAttribute('id', i);
    doneButton.addEventListener('click', function () {
        todolist.getAttribute('id');
        todosArray[todosArray.findIndex(data => data.id == todolist.getAttribute('id'))].status = 2;
        renderTodos();
        let completeUl = document.getElementById('box3-ul');
        completeUl.append(todolist);
        console.log(todosArray);
        doneButton.style.display = 'none';
        startButton.style.display = 'none';
    })
}
let addButton = document.getElementById('add-btn');
addButton.addEventListener('click', function () {
    const text = input.value.trim();
    if (text == '') {
        alert("write  something");
        todolist.style.display = 'none';
    }
    addTodos();
    renderTodos();
});
