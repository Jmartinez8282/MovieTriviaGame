let diff = "easy";
let triviaQ = [];


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
    console.log(q)
}
//
loadQuestions();    


