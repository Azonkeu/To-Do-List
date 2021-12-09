import './style.css';

const todoArr = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'Manage all your lists in one place',
    completed: false,
    index: 2,
  },
];

const addTodoItem = () => {
  const list = document.querySelector('.ullist');
  list.innerHTML = '';
  for (let i = 0; i < todoArr.length; i += 1) {
    const { description } = todoArr[i];
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<input class="list-input" type="checkbox"><textarea name="textarea cols="30" class="item-details">${description}</textarea><i class="fas fa-ellipsis-v"></i>`;
    list.appendChild(listItem);
  }
};

window.addEventListener('load', addTodoItem());
