$(()=> {
    $("[type=submit]").click((e)=> {
        e.preventDefault();
        let username = $("[name=username]").val().trim();
        let password = $("[name=password]").val().trim();

        if(username != "admin" && password != "12345"){
            alert("Username / password Error");
        } else {
            window.location.href = "todo.html"
        }
    })
});