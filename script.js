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

function tQuestions(info){
    console.log(info);
}