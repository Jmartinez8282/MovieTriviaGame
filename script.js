
//-----------DECLARE OUR VARIABLES
let inject = document.getElementById('inject');
let tQuestions = [];

function loadJSON(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            tQuestions = JSON.parse(this.responseText).easyQ;
            
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

loadJSON('easyQ.json')
//---------Trying to Inject pages---------------//////

function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            console.log(url);
            if (url === 'gamePage.html') {
                loadGamePage(myArr, tQuestions);
            } else if (url === 'options.html') {
                loadOptionsPage(myArr);
            } else if (url === 'menu.html') {
                loadMenuPage(myArr);
            } else if (url === 'instruction.html') {
                loadInstrucionPage(myArr);
            } else if (url === 'title.html') {
                loadTitle(myArr);
            } else {
                alert("loadHTML if statement dude");
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function loadTitle(info) {
    inject.innerHTML = info;
    let playBtn = document.getElementById('playBtn');
    let optionBtn = document.getElementById('optBtn');

    playBtn.addEventListener('click', function (e) {
        loadHTML('gamePage.html');
    })

    optionBtn.addEventListener('click', function (e) {
        loadHTML('options.html');
    })
}

function loadGamePage(info, arr) {
    inject.innerHTML = info;
    let triviaQ = [];
    let totalQuestions = 20;
    let totalScore = 0;
    let Incorrect = 0;
    let timer = 5;
    let interval;
    let qNum = 0;
    let correct = document.getElementById('C');
    let counter = document.getElementById('counter');
    let questions = document.getElementById('questions');
    let a1 = document.getElementById('a1');
    let a2 = document.getElementById('a2');
    let a3 = document.getElementById('a3');
    let a4 = document.getElementById('a4');

    allQuestions(arr);


    loadQuestion();



    ///------add eventlisteners-----/////


    function loadQuestion() {

        a1.addEventListener('click', function (e) {

        });
        a2.addEventListener('click', function (e) {
           
        });


        a3.addEventListener('click', function (e) {

        })

        a4.addEventListener('click', function (e) {


        })
        questions.innerText = triviaQ[qNum].q;

        a1.innerText = triviaQ[qNum].a1;
        a2.innerText = triviaQ[qNum].a2;
        a3.innerText = triviaQ[qNum].a3;
        a4.innerText = triviaQ[qNum].a4;

        //for loop in buttons//
    }
    ///-----------------//////
    function checkAnswer(answer) {
        //Retrive the answer and see if its correct
        //increment your correct number

        if (answer === triviaQ[qNum].C) {
            totalScore++;
        }
        else {
            incorrect++;
        }
        C.innerText = '${totalScore}/${totalQuestions}';
        timer = 5;
        counter.innerText = timer;
        nextQuestion();
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

    //set our timer////
    function updateTime() {
        //Make sure time isn't over and its is shownng correc time
        timer--;
        if (timer == 0) {
            timer = 5;
            counter.innerText = timer;
            nextQuestion();
        }
        else {
            counter.innerText = timer;
        }
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
        counter.innertText = timer;
    }
}


function loadOptionsPage(info) {
    inject.innerHTML = info;
    let playBtn = document.getElementById('playBtn');
    let menuBtn = document.getElementById('menuBtn');
    let instBtn = document.getElementById('instBtn');


    playBtn.addEventListener('click', function (e) {
        loadHTML('gamePage.html');
    })
    menuBtn.addEventListener('click', function (e) {
        loadHTML('menu.html');
    })
    instBtn.addEventListener('click', function (e) {
        loadHTML('instruction.html');
    })

}
function loadMenuPage(info) {
    inject.innerHTML = info;
    let easyBtn = document.getElementById('easyBtn');
    let medBtn = document.getElementById('medBtn');
    let hardBtn = document.getElementById('hardBtn');
    easyBtn.addEventListener('click', function (e) {
        loadHTML('gamePage.html');
    })
    medBtn.addEventListener('click', function (e) {
        loadHTML('gamePage.html');
    })
    hardBtn.addEventListener('click', function (e) {
        loadHTML('gamePage.html');
    })
}
function loadInstrucionPage(info) {
    inject.innerHTML = info;
    let playBtn = document.getElementById('playBtn');
    let optBtn = document.getElementById('optBtn');

    playBtn.addEventListener('click', function (e) {
        loadHTML('gamePage.html');

    })

    optBtn.addEventListener('click', function (e) {
        loadHTML('options.html')
    })
}
//-----------------------------------------------------------------------------------------------------------////
/////GRAB ALL OUR ELMENTS FROM HTML PAGE//

//// get our buttons and add eventlisteners---------//
// //let a1 = document.getElementsById('a1')
// let buttons = document.getElementsByClassName('playBtnc');

//for (let i = 0; i < buttons.length; i++) {
//going to add our eventlisteners
//   buttons[i].addEventListener('click', function (e) {
//         //alert("you clickt a button");
//   console.log(e)
//   checkAnswer(e.toElement.innerText);
//});
// }
//creat our JSON DATEA LOAD//




loadHTML('title.html');