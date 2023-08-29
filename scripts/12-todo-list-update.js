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

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html =`
      <p>
        ${name}
      </p>
      <p>
        ${dueDate}
      </p>
      <p>
        <button class="delete-button js-delete-button">
          Delete
        </button>
      </p>
    `;
    todoListHTML += html; 
  });

  const divElement = document.querySelector('.todo-grid');
  divElement.innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

  localStorage.setItem('todoList', divElement);
}

document.querySelector('.js-add-button') 
  .addEventListener('click', () => {
    addTodo();
});



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
