
//-----------DECLARE OUR VARIABLES
let diff = "easy";  //Can be medium or hard
let triviaQ = [];
let totalQuestions = 20;
let totalScore = 0;
let Incorrect = 0;
let timer = 5;
let interval;
let tQuestions = [];
//let diff='easyQ.json';
let qNum = 0;

/////Randmomize 150 questions and selectt 20 questions///---------------------------------///

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
    console.log(triviaQ);
}
loadQuestion();


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

for (let i = 0; i < triviaQ.length; i++) {
    //going to add our eventlisteners
    triviaQ[i].addEventListener('click', function (e) {
        // alert("you clickt a button");

        checkAnswer(e.toElement.innerText);

    });
}

//creat our JSON DATEA LOAD//
function loadJSON() {


    let xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            triviaQ = JSON.parse(this.responseText).easyQ;
            console.log(triviaQ);

            interval = setInterval
            loadQuestion();

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function loadQuestion() {

    questions.innerText = triviaQ[qNum].q;

    a1.innerText = triviaQ[qNum].a1;
    a2.innerText = triviaQ[qNum].a2;
    a3.innerText = triviaQ[qNum].a3;
    a4.innerText = triviaQ[qNum].a4;

    //for loop in buttons//


}


///-----------------//////
function checkAnswer(answer) {
    //Retrive teh answer and see if its correct 
    //increment your correct number

    if
        (answer === triviaQ[qNum].correct) {
        totalScore++;
    }
    else {
        incorrect++;
    }
    correct.innerText = '{totalScore}/${totalQuestions}';
    timer = 5;
    nextQuestions();

    /////////------------Go to next Questions ////

}

///next question//

function nextQuestions() {
    //prep  to go to the next question
    //loadQuestion

    if (qNum < totalQuesitons) {

        ///will runutil you hit toal questions = 20;
        qNum++;
        loadQuestion();


    }
    else {
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
///----------------------//------------------------------///


///---------------------//-------------------------------///
loadJSON(diff)
////----------------------------------------------------------------------------------------------------------------------------///////

//Retrive html elements

let inject = document.getElementById('inject');
let injectBtn = document.getElementById('injectBtn');

injectBtn.addEventListener('click', function (e) {
    //Call loadJSON to inject HTML
    loadJSON("gamePage.html");

});
function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();
    //let url = "gamePage.html";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;//JSON.parse(this.responseText);
            console.log(myArr);
            // inject.innerHTML=myArr;
            //Add our conditinal Statements
            if (url == "gamePage.html") {
                gamePageLoad(myArr);
            } else if ( url == 'options.html'){
                gamePageLoad(myArr);
            }

           
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

function optionsLoad(info) {

    //Going to load page 1 HTML Elements and click event
    inject.innerHTML = info;
    let injectBtn = document.getElementById('injectBtn');

    injectBtn.addEventListener('click', function (e) {

        alert("you clicked me");
        //Attached to buttoon that exists in page 1
        let pg2Btn = document.getElementById('pg2Btn');
        pg2Btn.addEventListener('click', function (e) {
            loadJSON("options.html")
        });

    });

}
function optonsLoad(info) {
    inject.innerHTML = info;

}

