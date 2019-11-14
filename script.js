
//-----------DECLARE OUR VARIABLES
let diff = "easy";  //Can be medium or hard
let triviaQ = [];
let totalQuestions = 20;
let totalScore = 0;
let Incorrect = 0;
let timer = 5;
let interval;
let tQuestions = [];
let diff1='easyQ.json';
let qNum = 0;

/////Randmomize 150 questions and selectt 20 questions///---------------------------------///


//---------Trying to Inject pages---------------//////
let inject = document.getElementById('inject');
let playBtn = document.getElementById('playBtn');
let optionBtn = document.getElementById('optBtn');
let menuBtn = document.getElementById('menuBtn');
let instBtn = document.getElementById('instBtn');

playBtn.addEventListener('click',function (){
    loadHTML('gamePage.html');
})
optionBtn = addEventListener('click',function (){
    loadHTML ('options.html');
})

menuBtn = document.addEventListener('click',function(){
    loadHTML('menu.html');
})

instBtn = document.addEventListener('cleck',function(){
    loadHTML('instruction.html');
})







function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            //console.log(myArr);
            //inject.innerHTML = myArr;
            //Add our conditinal Statements
            if (url === 'gamePage.html') {
                loadGamePage(myArr);
            } else if (url === 'options.html'){
                loadOptionsPage(myArr);
            } else if (url === 'menu.html'){
                loadMenuPage(myArr);
            } else if (url === 'instruction.html'){
                loadInstrucionPage(myArr);
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function loadGamePage(info){
    inject.innerHTML = info;

}


function loadOptionsPage(info){
    inject.innerHTML = info;
    
}
function loadMenuPage(info){
    inject.innerHTML = info;
}
function loadInstrucionPage(info){
    inject.innerHTML = info;
}


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
//let a1 = document.getElementsById('a1')
let buttons = document.getElementsByClassName('playBtnc');

for (let i = 0; i<buttons.length; i++) {
    //going to add our eventlisteners
    buttons[i].addEventListener('click', function (e) {
        //alert("you clickt a button");
        console.log(e)
        checkAnswer(e.toElement.innerText);

    });
}

//creat our JSON DATEA LOAD//
function loadJSON(url) {


    let xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            tQuestions = JSON.parse(this.responseText).easyQ;
            ///------------radnomizes questions------------////
            function loadQuestion() {
                let xmlhttp = new XMLHttpRequest();
                let url = "easyQ.json";
            
                if (diff == "easy") {
                    url = "easyQ.json";
                }
                if (diff == "") {
            
                }
            
                xmlhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        let myArr = JSON.parse(this.responseText);
                        allQuestions(myArr);
                    }
                }
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            }
            function allQuestions(q) {
                console.log(q.ezQ[49]);
                let qNum = 0;
                for (let i = 0; i < totalQuestions; i++) {
                    //  We are going to shuffle
                    qNum = Math.floor(Math.random() * q.ezQ.length);
                    console.log(qNum);
                    triviaQ.push(q.ezQ[qNum]);
                    q.ezQ.splice(qNum, 1);
                }
                console.log(tQuestions);
                loadQuestion();
            }
            
//////////////////////randomizes questions///////////////////

          

         
            

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
///----------------------------------------------------///

function loadQuestion()

///Load the next quuestion//
{

    questions.innerText = tQuestions[qNum].q;

    a1.innerText = tQuestions[qNum].a1;
    a2.innerText = tQuestions[qNum].a2;
    a3.innerText = tQuestions[qNum].a3;
    a4.innerText = tQuestions[qNum].a4;

    //for loop in buttons//


}
///-----------------//////
function checkAnswer(answer){
    //Retrive the answer and see if its correct
    //increment your correct number

    if(answer === tQuestions[qNum].C) {
        totalScore++;
    }
    else {
        incorrect++;
    }
    C.innerText = '${totalScore}/${totalQuestions}';
    timer = 5;
    nextQuestions();

    /////////------------Go to next Questions ////

}

///next question//

function nextQuestions()
{
    //prep  to go to the next question
    //loadQuestion

    if (qNum < totalQuesitons)
    {

        ///will runutil you hit toal questions = 20;
        qNum++;
        loadQuestion();


    }
    else
    {
        //
        clearInterval(interval);
        //Load up Ending screen
        alert("you finsihed the game. Congrats. I have Spoken");
    }

}

//--------------------//------------------------------////
//set our timer////
function updateTime() {
    //Make sure time isn't over and its is shownng correc time

    timer--;
    if (timer == 0) {
        timer = 5;
        counter.innerText = timer;
        nextQuestions();
    }
    else {

        counter.innerText = timer;
    }


}
loadJSON(diff1)
///----------------------//------------------------------///


///---------------------//-------------------------------///

////----------------------------------------------------------------------------------------------------------------------------///////

//Retrive html elements









