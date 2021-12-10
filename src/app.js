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

// add to local storage

export function storeList() {
  localStorage.setItem('todoArr', JSON.stringify(todoArr));
}

const list = document.querySelector('.ullist');
// add items to dom
export function addList(array, element) {
  array.forEach((item) => {
    const listItems = document.createElement('li');
    listItems.classList.add('list-item');
    element.appendChild(listItems);
    listItems.innerHTML = `
      <input class="list-input" type="checkbox" id="${item.index} ">
      <label for="${item.index}">${item.description}
      <i class="fas fa-ellipsis-v"></i>
       `;
  });
}
addList(todoArr, list);

// function
export function checked() {
  const checkbox = document.querySelectorAll('.list-input');
  checkbox.forEach((item) => {
    item.addEventListener('change', () => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const parentItem = todoArr[index].completed;
      if (parentItem) {
        todoArr[index].completed = false;
        parent.classList.remove('checked');
        localStorage.setItem('todoArr', JSON.stringify(todoArr));
      } else {
        todoArr[index].completed = true;
        parent.classList.add('checked');
        localStorage.setItem('todoArr', JSON.stringify(todoArr));
      }
      storeList();
    });
  });
}
checked();

export function showStorage() {
  window.addEventListener('load', () => {
    const localData = JSON.parse(localStorage.getItem('todoArr'));
    todoArr.splice(0, todoArr.length, ...localData);
    const box = document.querySelectorAll('.list-input');

    box.forEach((item) => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const parentItem = todoArr[index].completed;

      if (parentItem === true) {
        item.setAttribute('checked', '');
      }
    });
  });
}
showStorage();
