
$(() => {
    let loader = $(".loader");
    let todos = $(".todos");
    let todoItems = $('.todosItems');

    let todoList = [];

    var Xhttp = new XMLHttpRequest();

    Xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loader.addClass("d-none");
            var response = JSON.parse(this.responseText);

            for (i = 0; i <= response.length; i++) {
                let todo = response[i];
                if (todo) {
                    let className = todo.completed === true ? "completed" : "";
                    let checkedStatus = todo.completed === true ? "checked" : "";
                    
                    let temp = `<li class="${className}" data-id="${todo.id}">
                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" ${checkedStatus} name="todo_item" data-id="${todo.id}"> ${todo.title} <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                </li>`;
                    todoList.push(temp);
                }
            }

            todos.removeClass("d-none");
            todoItems.append(todoList);

            $(".todosItems li").change(function () {
                $(this).addClass("new_added");
                let status = $(this).find("[type=checkbox]").prop("checked");
                if (status === true) {
                    $(this).addClass("new_added");
                } else {
                    $(this).removeClass("new_added");
                }

                let checkedLength = $(".new_added").length
                validateNumber(checkedLength)
                    .then(res => {
                        console.log(res, '=====resss')
                        if (res === true){
                            alert("Successfully completed 5 tasks")
                        }
                    })
                    .catch(err => console.log(err, "error"))
            });
        }
    }
    Xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    Xhttp.send();
});

// currying
function validateNumber(n) {
    return promiseANumber1 = new Promise((resolve, reject) => {
        if(n == 5) resolve(true)
        else reject(false)
    });     
}
