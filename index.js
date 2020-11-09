let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    
    let todoList = document.getElementById('todo-list');

  
    let todoTitle = "";

    for (i=0; i < arrayOfTodos.length; i++) {
        todoTitle = document.createTextNode(arrayOfTodos[i].title);

      
        let todoItem = document.createElement("LI");
        if (arrayOfTodos[i].completed) {
           
            todoItem.classList.add("istrue");
        } else {
            todoItem.classList.add("isfalse");
        }

       
        todoItem.appendChild(todoTitle);

     
        todoList.appendChild(todoItem);
    }

  
    console.log(arrayOfTodos[0].title)

}
