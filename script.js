
document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput  = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask () {
        let taskText = taskInput.value.trim();

        if(taskText === ""){
            alert("enter a task")
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
            })

            li.appendChild(btn);

            taskList.appendChild(li);

            taskInput.value = "";
        }
    }

    addButton.addEventListener('click', function () {
        addTask();
    })

    taskInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter'){
            addTask();
        }
    })

    addTask();

})