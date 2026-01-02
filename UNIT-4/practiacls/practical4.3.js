let taskCounter = 0;
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    if (taskCounter === 0) {
        taskList.innerHTML = '';
    }
    taskCounter++;
    const taskId = 'task-' + taskCounter;
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.id = taskId;
    taskDiv.innerHTML = `
        <span id="text-${taskId}">${taskText}</span>
        <button onclick="toggleComplete('${taskId}')">✓ Done</button>
        <button onclick="deleteTask('${taskId}')">🗑️ Delete</button>
    `;

    taskList.appendChild(taskDiv);
    input.value = '';
}
function toggleComplete(taskId) {
    const textSpan = document.getElementById('text-' + taskId);
    if (textSpan.className === 'completed') {
        textSpan.className = '';
    } else {
        textSpan.className = 'completed';
    }
}
function deleteTask(taskId) {
    const taskDiv = document.getElementById(taskId);
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskDiv);
    const remainingTasks = taskList.children.length;
    if (remainingTasks === 0) {
        taskList.innerHTML = '<p>No tasks yet. Add one above!</p>';
        taskCounter = 0;
    }
}
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});