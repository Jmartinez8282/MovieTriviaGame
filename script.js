
//-----------DECLARE OUR VARIABLES
let diff = "easy";
let triviaQ = [];
let totalQuestions = 20;
let totalScore = 0;
let Incorrect = 0;

let tQuestions = [];
let diff1='easyQ.json';
let qNum = 0;

/////Randmomize 150 questions and selectt 20 questions///---------------------------------///

function loadQuestions(){
    let xmlhttp = new XMLHttpRequest();
    let url = "";

    if(diff== "easy"){
        url="easyQ.json";
    }
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            allQuestions(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function allQuestions(q){
    console.log(q.ezQ[49]);
    let qNum = 0;
    for (let i = 0; i < totalQuestions; i++)
    {
      //  We are going to shuffle
        qNum = Math.floor(Math.random() * q.ezQ.length);
        console.log(qNum);
        triviaQ.push(q.ezQ[qNum]);
        q.ezQ.splice(qNum,1);
        

    }
    console.log(triviaQ);
}

loadQuestions();    




//-----------------------------------------------------------------------------------------------------------////
/////GRAB ALL OUR ELMENTS FROM HTML PAGE//
//CORRECT, COUNTER, QUESTIONS, BUTTONS-USING A CLASS

let correct = document.getElementById('correct');
let counter = document.getElementById('counter');
let questions = document.getElementById('questions');

let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');

//// get our buttons and add eventlisteners---------//
//let a1 = document.getElementsByClassName('a1')


for (let i = 0; i<triviaQ.length; i++){
    //going to add our eventlisteners
    triviaQ[i].addEventListener('click',function(e){
       // alert("you clickt a button");

       checkAnswer(e.toElement.innerText);

    });
}

//creat our JSON DATEA LOAD//
function loadJSON(url){

   
let xmlhttp = new XMLHttpRequest();


xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        triviaQ=JSON.parse(this.responseText).easyQ;
       console.log(triviaQ);
       
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function loadQuestion(triviaQ){

    triviaQ.innerText=triviaQ[qNum].q;

    a1.innerText = triviaQ[qNum].a1;
    a2.innerText = triviaQ[qNum].a2;
    a3.innerText = triviaQ[qNum].a3;
    a4.innerText = triviaQ[qNum].a4;

    //for loop in buttons//


}


///-----------------//////
function checkAnswer(answer){
    //Retrive teh answer and see if its correct 
    //increment your correct number

    if 
    ( answer === triviaQ[qNum].correct){
        totalScore++;
    } 
    else{
        incorrect++;
    }
     correct.innerText='${totalScore}/${totalQuestions}';
}

///----------------------//------------------------------///


///---------------------//-------------------------------///
loadJSON(diff1)
////----------------------------------------------------------------------------------------------------------------------------///////



