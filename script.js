let diff = "easy";
let triviaQ = [];
let totalQuestions = 20;


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
    console.log(q.ezQ[26]);
    let qNum = 0;
    for (let i = 0; i < totalQuestions; i++)
    {
        //We are going to shuffle
        qNum = Math.floor(Math.random() * q.ezQ.length);
        //console.log(qNum);
        triviaQ.push(q.ezQ[qNum]);
        q.ezQ.splice(qNum,1);
        

    }
    console.log(triviaQ);
}
//
loadQuestions();    


