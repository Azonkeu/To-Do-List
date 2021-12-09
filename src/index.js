import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');


    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());




  const addArr = [
    {description: 'clean apartment'},
    {completed: true},
    {index: 0}
  ];

  document.getElementById('save').addEventListener('click', () => {
    let  ordering = document.getElementById('order');
    let data = document.getElementById('textInput').value;
    addArr.push(data);
    let item = document.createElement(data);
    let newItem = document.createElement('li');
    ordering.appendChild(newItem);
    newItem.appendChild(item); 
  });
  console.log(addArr);

  

  

