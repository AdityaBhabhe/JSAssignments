const newTodos = [
    {
        title: "Buy bread",
        isDone: true
    },
    {
        title: "Complete making website",
        isDone: false
    },
    {
        title: "Go to gym",
        isDone: true
    },

]

//  Method one to find object in list of onjects//
let findTodo = function(anyTodo,title){
    let index = anyTodo.findIndex(function(todo,i){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return anyTodo[index];
}

console.log(findTodo(newTodos,"go to gym"))

//  Method two to find object in list of onjects//

let findTodo = function(anyTodo,title){
    let index = anyTodo.find(function(todo,index){
        return todo.title===title 
    })
    return index;
}

console.log(findTodo(newTodos,"Complete making website"))
