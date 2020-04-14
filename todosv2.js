let myTodo = {
    day:"monday",
    meetings:0,
    meetingsDone:0,
}

let addMeeting = function(todo,meet){
    todo.meetings = todo.meetings + meet
    return todo.meetings 
}

let subMeeting = function(todo,meet){
    todo.meetingsDone = todo.meetingsDone + meet
    return todo.meetingsDone
}

let resetDay = function(todo){
    todo.meetingsDone = 1
    todo.meetings = 100
    return (todo.meetingsDone,todo.meetings)
}

let getSummary = function(todo){
    let totalMeetings = todo.meetings - todo.meetingsDone
    return `Total number of meetings left are ${totalMeetings}`
}

console.log(addMeeting(myTodo,3))
console.log(addMeeting(myTodo,4))
console.log(subMeeting(myTodo,5))
console.log(getSummary(myTodo))
console.log(resetDay(myTodo))
