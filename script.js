
function loadJSON(){
    // load our JSON Data
//XML HTTP-REQUEST


let xmlhttp = new XMLHttpRequest();
let url = "data.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        loadQuestions(myArr);
    }
};
// Opening the Connection
xmlhttp.open("GET", url, true);
//Sedning the request
xmlhttp.send();



//Function is called insdei HTTP Request.




}
let questions = [];
function loadQuestions(info){
    console.log(info.questions);
    //Setup our Objects for the game


   // for (let i = 0; i< info.hQ.length; i++){
        //Create and Oject for esch loop in array
     //   let nFO = {
       //      "q":info.hQ[i].q,
    //         "aA":info.hQ[i].aA
//         };



        //console.log(info.hQ[i].q);
        //console.log(info.hQ[i].aA);
     //   hQ.push(info.hQ[i].q);
     //   hQ.push(info.hQ[i].aA);

      //  console.log("Format Arr"+ hQ);

     //   hQObj.push(nFO);
     //  console.log("Trivia Question and First answer OBJECT ARRAY"+ hQObj[i].hQ);





        //this is using the Object
      //  nFO.q = info.hQ[i].q;   


   // }
}

//This runs our JSON data
loadJSON();

// This is wehre we make our buttons
//let playBtn = document.getElementById('plBtn');
//let optionsBtn = document.getElementById('optBtn');

// Get access to our H1 Tag

//let  h1question = document.getElementById('question') 

//Now Make our event listeners

//playBtn.addEventListener('click',function(e){
//h1question.innerText = "Who is Rocy?"
//});
//optionsBtn.addEventListener('click',function(e){

//});




