document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    
    if (todoText === '') return; 

    const li = document.createElement('li');
    li.textContent = todoText;
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-button';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    document.getElementById('todoList').appendChild(li);

    input.value = ''; 
});
