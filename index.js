let start_quiz_btn= document.getElementById('start_quiz')
let quiz_question= document.getElementById('quiz_question')
let initial_division= document.getElementById('initial_division')
let quizTime= 25;
let timer_section= document.getElementById('timer_section')
let questionnumber= 1

let questions= [{
    name:"question 1",
    choises:["choise 1","choise 2", "choise 3"],
    answers: "choise 2"
},{
    name:"question 2",
    choises:["choise 1","choise 2", "choise 3"],
    answers: "choise 1"
},{
    name:"question 3",
    choises:["choise 1","choise 2", "choise 3"],
    answers: "choise 3"
}]

start_quiz_btn.addEventListener('click',function(event){
    event.preventDefault()

    initial_division.style.display= "none"
    startQuiz()
})

function startQuiz(){
    startTimer()
    populateQuestions()
}

function populateQuestions(){
    let curentQuestion = questionarray[questionnumber-1]
    let questionDiv = document.createElement("div")
    questionDiv.innerHTML = curentQuestion.name
}

function startTimer(){
    let timer= setInterval(function(){
        if(quizTime >=0){
            let timerText=`Time left : ${quizTime}`
            quizTime--
            timer_section.innerHTML=timerText
        }else{
            clearInterval(timer)
        }
    },1000)
}