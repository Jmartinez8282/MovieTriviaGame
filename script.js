let xmlhttp = new XMLHttpRequest();
let url = "data.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        tQuestions(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//create and array
let hQ = [];
let hQObj = [];




function tQuestions(info){
    console.log(info);

    for (let i = 0; i< info.hQ.length; i++){
        //Create and Oject for esch loop in array
         let nFO = {
             "q":info.hQ[i].q,
             "aA":info.hQ[i].aA
         };



        //console.log(info.hQ[i].q);
        //console.log(info.hQ[i].aA);
        hQ.push(info.hQ[i].q);
        hQ.push(info.hQ[i].aA);

        console.log("Format Arr"+ hQ);

        hQObj.push(nFO);
        console.log("Trivia Question and First answer OBJECT ARRAY"+ hQObj[i].hQ);





        //this is using the Object
        nFO.q = info.hQ[i].q;   


    }
}