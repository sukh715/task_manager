document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const taskItem = document.createElement('li');
      const deleteButton = document.createElement('button');
      const checkbox = document.createElement('input');
  
      checkbox.type = 'checkbox';
      checkbox.classList.add('task-checkbox');
  
      taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${taskText}</span>
        <button class="delete">Delete</button>
      `;
  
      taskItem.querySelector('.delete').addEventListener('click', function () {
        taskItem.remove();
      });
  
      taskItem.querySelector('.task-checkbox').addEventListener('change', function () {
        taskItem.classList.toggle('completed', this.checked);
      });
  
      taskList.appendChild(taskItem);
    }
  
  });
  