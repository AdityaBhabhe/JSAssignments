const myTodos = [
    {
        title:"number 1",
        isDone:true
    },
    {
        title:"number 2",
        isDone:true
    },
    {
        title:"number 3",
        isDone:true
    },
    {
        title:"number 4",
        isDone:false
    },
    {
        title:"number 5",
        isDone: false
    },
    {
        title:"number 6",
        isDone:false
    }
]


const abc = myTodos.filter((todo) => {
    return todo.isDone === true
})

console.log(abc[1].title)


const abc = function(anyTodo,index){
    const a = anyTodo.filter((todo)=>{
        return todo.isDone === true
    })
    
} 

