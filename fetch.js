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
// let findTodo = function(anyTodo,title){
//     let index = anyTodo.findIndex(function(todo,i){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return anyTodo[index];
// }

// console.log(findTodo(newTodos,"go to gym"))

//  Method two to find object in list of onjects//

let findTodo = function(anyTodo){
    let index = anyTodo.find(function(todo,index){
        for (let index = 0;index<=anyTodo.length;index++){
        return todo.isDone === true 
    }
    })
}

console.log(findTodo(newTodos))
