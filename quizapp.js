const quizDB=[
    {
        question:"Q1: what is the full for of html?",
        a:"hello to my land",
        b:"Hey text Markup Language",
        c:"hype  text markup language",
        d:"hyper text markup language",
        ans:"ans4"
    },
    {
        question:"Q2: what is the full for of css?",
        a:"hello to my land",
        b:"Hey text Markup Language",
        c:"hype  text markup language",
        d:"cascading stylesheet",
        ans:"ans4"
    },
    {
        question:"Q3: what is the full for of js?",
        a:"hello to my land",
        b:"Hey text Markup Language",
        c:"hype  text markup language",
        d:"javascript",
        ans:"ans4"
    },
    {
        question:"Q4: what is the full for of ES6?",
        a:"hello to my land",
        b:"Hey text Markup Language",
        c:"hype  text markup language",
        d:"Ecma Script",
        ans:"ans4"
    }
];

const question=document.querySelector('.question');

const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showScore=document.querySelector('#showScore');



let quesCount=0;
let score=0;

const loadques=()=>{

    const questionList=  quizDB[quesCount];

    question.innerText= questionList.question;

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;
}
loadques();


const getCheckAnswer=()=>{
     let answer;
     answers.forEach((curAnsElem)=>{
         if(curAnsElem.checked){
             answer = curAnsElem.id;
         }
     });
     return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


    if(checkedAnswer === quizDB[quesCount].ans){
        score++;
    }

    quesCount++;

    deselectAll();
    if(quesCount < quizDB.length){
        loadques();
    }
    else{

        showScore.innerHTML = `

        <h3> Your score ${score}/${quizDB.length} </h3>

        <button class="btn" onclick="location.reload()">Retry</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});

