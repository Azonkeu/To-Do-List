import './style.css';

const todoArr = [];
/* eslint-disable no-use-before-define */
const addTodoItem = () => {
  const list = document.querySelector('.ullist');
  const storeLocal = JSON.parse(localStorage.getItem('storeLocal'));
  todoArr.splice(0, todoArr.length, ...storeLocal);
  list.innerHTML = '';
  for (let i = 0; i < todoArr.length; i += 1) {
    const { description } = storeLocal[i];
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<input class="list-input" type="checkbox"><textarea name="textarea cols="30" class="item-details">${description}</textarea><i class="fas fa-ellipsis-v"></i>`;
    list.appendChild(listItem);
  }
  const listInput = document.querySelectorAll('.list-input');
  interact(listInput);
  clearList(listInput);
  removeItem();
  updateValues();
};

const form = document.getElementById('form-id');
const showTasks = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = form.elements[0].value;

    const data = {
      description: task,
      completed: false,
      index: todoArr.length + 1,
    };
    form.reset();
    todoArr.push(data);
    localStorage.setItem('storeLocal', JSON.stringify(todoArr));
    addTodoItem();
  });
};

const removeItem = () => {
  const button = document.querySelectorAll('.fa-ellipsis-v');
  button.forEach((item) => {
    const parent = item.parentNode;
    const superParent = parent.parentNode;
    const index = Array.prototype.indexOf.call(superParent.children, parent);
    const listInput = parent.firstChild;
    item.addEventListener('click', () => {
      const storeLocal = JSON.parse(localStorage.getItem('storeLocal'));
      todoArr.splice(0, todoArr.length, ...storeLocal);
      if (listInput.hasAttribute('checked')) {
        parent.remove();
        todoArr.splice(index, 1);
      }
      for (let i = 0; i < todoArr.length; i += 1) {
        todoArr[i].index = i + 1;
      }
      localStorage.setItem('storeLocal', JSON.stringify(todoArr));
      addTodoItem();
    });
  });
};

const clearList = () => {
  const getClearElement = document.querySelector('.clear-task');
  getClearElement.addEventListener('click', () => {
    for (let i = 0; i < todoArr.length; i += 1) {
      if (todoArr[i].completed) {
        todoArr.splice(i, 1);
      }
    }
    for (let i = 0; i < todoArr.length; i += 1) {
      todoArr[i].index = i + 1;
    }
    localStorage.setItem('storeLocal', JSON.stringify(todoArr));
    addTodoItem();
  });
};

const updateValues = () => {
  const itemDetails = document.querySelectorAll('item-details');
  itemDetails.forEach((item) => {
    const parent = item.parentNode;
    const superParent = parent.parentNode;
    const index = Array.prototype.indexOf.call(superParent.children, parent);
    item.addEventListener('change', () => {
      todoArr[index].description = item.value;
      localStorage.setItem('storeLocal', JSON.stringify(todoArr));
    });
  });
};

const adJusttext = (listInput) => {
  listInput.forEach((item) => {
    if (item.hasAttribute('checked')) {
      item.nextSibling.style.textDecoration = 'line-through';
    } else {
      item.nextSibling.style.textDecoration = 'none';
    }
  });
};

const litstorage = () => {
  window.addEventListener('load', () => {
    addTodoItem();
    const listInput = document.querySelectorAll('.list-input');
    const storeLocal = JSON.parse(localStorage.getItem('storeLocal'));
    listInput.forEach((item) => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = storeLocal[index].completed;
      if (currentItem) {
        item.setAttribute('checked', '');
        parent.lastChild.style.display = 'block';
      }
    });
    adJusttext(listInput);
  });
};

const interact = (listInput) => {
  listInput.forEach((item) => {
    item.addEventListener('change', () => {
      const storeLocal = JSON.parse(localStorage.getItem('storeLocal'));
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = storeLocal[index].completed;
      if (currentItem) {
        item.removeAttribute('checked');
        parent.lastChild.style.display = 'none';
        storeLocal[index].completed = false;
      } else {
        item.setAttribute('checked', '');
        parent.lastChild.style.display = 'block';
        storeLocal[index].completed = true;
      }
      adJusttext(listInput);
      localStorage.setItem('storeLocal', JSON.stringify(storeLocal));
      todoArr.splice(0, todoArr.length, ...storeLocal);
    });
  });
};

showTasks();
/* eslint-disable no-unused-vars */
export default litstorage;
