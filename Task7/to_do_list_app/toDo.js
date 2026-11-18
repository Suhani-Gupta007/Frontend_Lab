var input = document.getElementById("input");
var list = document.getElementById("list");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var task = input.value.trim();
    if(task === ""){
        alert("Please enter new task");
        return;
    }
    var todo = document.createElement("li");
    todo.textContent = task;
    list.appendChild(todo);

    var del = document.createElement("button");
    del.className = "del";
    del.textContent = "Delete";
    todo.appendChild(del);
    

    del.addEventListener("click", function(){
    todo.remove();
    })

})



