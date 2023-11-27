function addTask(){

    let taskInput = document.querySelector('input')
    let taskList = document.querySelector('button')
    let div = document.querySelector('div')
    console.log(taskInput.value)
    if (taskInput.value.trim() != ""){
        let li = document.createElement("li")
        li.innerHTML = taskInput.value
        div.appendChild(li)
        taskInput.value = ""
    }
}