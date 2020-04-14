let myTodo = {
    day:"monday",
    meetings:0,
    meetingsDone:0,
    addMeeting: function(meet){
        this.meetings = this.meetings + meet
        return this.meetings
    },
    subMeeting: function(meet){
        this.meetingsDone = this.meetingsDone + meet
        return this.meetingsDone
    },
    getSummary: function(){
        totalMeetings = this.meetings - this.meetingsDone
        return `Total number of meetings are ${totalMeetings}`        
    },
    dayReset: function(){
        this.meetings = 0
        this.meetingsDone = 0
        return(`${this.meetings} ${this.meetingsDone}`)
    } 
}

console.log(myTodo.addMeeting(4))
console.log(myTodo.subMeeting(2))
console.log(myTodo.addMeeting(5))
console.log(myTodo.subMeeting(2))
console.log(myTodo.getSummary())
console.log(myTodo.dayReset())
console.log(myTodo.getSummary())






