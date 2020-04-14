let myGrade = function(marks,totalMarks){
    let percent = (marks/totalMarks)*100

    if (percent>=90){
        console.log(`Your percentage is ${percent} with grade A `)
    }else if (percent>=80){
        console.log(`Your percentage is ${percent} with grade B `)
    }else if (percent>=70){
        console.log(`Your percentage is ${percent} with grade c `)
    }else if (percent>=60){
        console.log(`Your percentage is ${percent} with grade D `)
    }else{
        console.log(`Your percentage is ${percent} with grade F `)
    }
}

myGrade(92,100)
