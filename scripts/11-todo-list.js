const todoList = [{
  name: 'Make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'Wash dishes',
  dueDate: '2022-12-23'
}];

renderTodoList();
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html =`
      <p>
        ${name}
      </p>
      <p>
        ${dueDate}
      </p>
      <p>
        <button class="delete-button" onclick="
          todoList.splice(${i}, 1)
          renderTodoList()
        ">Delete</button>
      </p>
    `;
    todoListHTML += html; 
  }

  const divElement = document.querySelector('.todo-grid');
  divElement.innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-todo');
  const inputDuedate = document.querySelector('.js-duedate');

  const name = inputElement.value;
  const dueDate = inputDuedate.value;
  
  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}
