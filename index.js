let start_quiz_btn= document.getElementById('start_quiz')
let quiz_question= document.getElementById('quiz_question')
let initial_division= document.getElementById('initial_division')
let quizTime= 25;
let timer_section= document.getElementById('timer_section')
let globalindex= 1

let questions= [{
    name:"question 1",
    choices:["choice 1","choice 2", "choice 3"],
    answers: "choice 2"
},{
    name:"question 2",
    choices:["choice 1","choice 2", "choice 3"],
    answers: "choice 1"
},{
    name:"question 3",
    choices:["choice 1","choice 2", "choice 3"],
    answers: "choice 3"
}]

start_quiz_btn.addEventListener('click',function(event){
    event.preventDefault()

    initial_division.style.display= "none"
    startQuiz()
})

function startQuiz(){
    startTimer()
    populateQuestions(globalindex)
}

function populateQuestions(questionnumber){
    quiz_question.innerHTML= ""
    let curentQuestion = questions[questionnumber-1]
    let primaryDiv = document.createElement("div")
    let questionDiv = document.createElement("div")
    questionDiv.innerHTML = curentQuestion.name
    primaryDiv.append(questionDiv)
    let choices = curentQuestion.choices
    let answers = questions[questionnumber-1].answers
    for(let i= 0;i<choices.length;i++){
        let optionbutton = document.createElement("button")
        optionbutton.innerHTML = choices[i]
        primaryDiv.append(optionbutton)
      optionbutton.addEventListener("click",function(){
        console.log(optionbutton.innerHTML)
     verifieanswers(optionbutton,answers)

      })

    }
    quiz_question.append(primaryDiv)
    
}
function verifieanswers(optionbutton,answers){
    if(optionbutton.innerHTML===answers){
        console.log("Correct!!!")
        let namestatus= document.createElement("h1")
        namestatus.textContent="Correct!!!"
        quiz_question.appendChild(namestatus)
       globalindex++;
       populateQuestions(globalindex) 
    }
    else{
        console.log("Wrong!!!")
        globalindex++;
        populateQuestions(globalindex)
    }
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