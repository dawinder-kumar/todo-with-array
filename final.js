'use strict';
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
    let todoList = document.createElement('li');
    todoList.id = i;
    for (; i < todosArray.length; i++) {
        if (todosArray[i].status == 0) {
            let taskValue = document.createTextNode(todosArray[i].text);
            todoList.append(taskValue);
            todosUL.append(todoList);
            deleteTask(todoList);
            startTask(todoList);
        }
        else if (todosArray.status == 1);
        {
            let todoList = document.createElement('li');
            todoList.setAttribute('id', todosArray[i].id);
        }
    }
    input.value = '';
}
function deleteTask(todoList) {
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    todoList.append(deleteButton);
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener('click', function () {
        confirm("Are you really want to remove task");
        if (counter > 0) {
            counter--;
            count.innerHTML = counter;
        }
        let idVar = todoList.getAttribute('id');
        let newArray = todosArray.filter(data => data.id != idVar)
        todoList.remove();
        console.log(newArray);
    });
}
function startTask(todoList) {
    let startButton = document.createElement('button');
    let startText = document.createTextNode('Start');
    startButton.append(startText);
    todoList.append(startButton);
    startButton.setAttribute('id', i);
    startButton.addEventListener('click', function () {
        if (counter > 0) {
            counter--;
            count.innerHTML = counter;
        }
        todoList.getAttribute('id');
        todosArray[todosArray.findIndex(data => data.id == todoList.getAttribute('id'))].status = 1;
        renderTodos();
        let inprogressUl = document.getElementById('box2-ul');
        inprogressUl.append(todoList);
        startButton.style.display = 'none';
        doneTask(todoList);
    });
}
function doneTask(todoList) {
    let doneButton = document.createElement('button');
    doneButton.innerText = 'Done';
    todoList.append(doneButton);
    doneButton.setAttribute('id', i);
    doneButton.addEventListener('click', function () {
        todoList.getAttribute('id');
        todosArray[todosArray.findIndex(data => data.id == todoList.getAttribute('id'))].status = 2;
        renderTodos();
        let completeUl = document.getElementById('box3-ul');
        completeUl.append(todoList);
        console.log(todosArray);
        doneButton.style.display = 'none';
    });
}
let addButton = document.getElementById('add-btn');
addButton.addEventListener('click', function () {
    const text = input.value.trim();
    if (text == '') {
        alert("write  something");
        todoList.style.display = 'none';
    }
    addTodos();
    renderTodos();
});
