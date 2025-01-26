
document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput  = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    function addTask(taskText, save = true) {
         taskText = taskInput.value.trim();

        if(taskText === ""){
            // alert("enter a task")
        }else{
            const li = document.createElement("li");
            li.textContent = taskText;

            // creating the delete button
            const btn = document.createElement('button');

            // adding the text content
            btn.textContent = "Remove";

            // add classname of remove-btn
            btn.classList.add("remove-btn");


            btn.addEventListener('click', function(){
                btn.parentElement.remove();

                let newString = btn.parentElement.textContent.replace("Remove", "");

                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

                storedTasks.forEach(taskText => () => {

                    if(taskText === newString){
                        console.log(` yes this is ${newString}`)
                    }

                }
                ); // 'false' indicates not to save again to Local Storage
            })

            li.appendChild(btn);

            taskList.appendChild(li);

            taskInput.value = "";
        }

        if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    addButton.addEventListener('click', function () {
        addTask();
    })

    taskInput.addEventListener('keypress', function(event) {
        if(event.key === 'Enter'){
            addTask();
        }
    })

    addTask();

    loadTasks();

})