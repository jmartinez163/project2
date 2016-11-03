function test1(){
var answer= document.getElementById("T1").value;
console.log(answer);
if(answer == 24515){
  document.getElementById("Correct").innerHTML="Well Done!";
  document.getElementById("Correct").classList.remove("hidden-message");
  document.getElementById("Correct").classList.add("shown-message");
  setCookie("prescore3", 1 , 100);
}
else if(answer < 24515){
document.getElementById("Correct").innerHTML = "Sorry, try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
else if(answer > 24515){
document.getElementById("Correct").innerHTML = "Sorry, try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
}

function test2(){
var answer2 = document.getElementById("T2").value;
console.log(answer2);
if (answer2 == 16){
document.getElementById("Correct2").innerHTML="Well Done!";
document.getElementById("Correct2").classList.remove("hidden-message");
document.getElementById("Correct2").classList.add("show-message");
setCookie("prescore2", 1 , 100);
}

else if( answer2 < 16){
  document.getElementById("Correct2").innerHTML="Sorry, try again...";
  document.getElementById("Correct2").classList.remove("hidden-message");
  document.getElementById("Correct2").classList.add("show-message");
}

else if(answer2 > 16){
  document.getElementById("Correct2").innerHTML="sorry, try again...";
  document.getElementById("Correct2").classList.remove("hidden-message");
  document.getElementById("Correct2").classList.add("show-message");
}
}

function test3(){
var answer3= document.getElementById("T3").value;
console.log(answer3);
if(answer3 == 26){
  document.getElementById("Correct3").innerHTML="Well Done!";
  document.getElementById("Correct3").classList.remove("hidden-message");
  document.getElementById("Correct3").classList.add("show-message");
  setCookie("prescore1", 1 , 100);
}

else if( answer3 <26){
  document.getElementById("Correct3").innerHTML="Sorry, try again...";
  document.getElementById("Correct3").classList.remove("hidden-message");
  document.getElementById("Correct3").classList.add("show-message");
}

else if (answer3 >26){
  document.getElementById("Correct3").innerHTML="Sorry, try again...";
  document.getElementById("Correct3").classList.remove("hidden-message");
  document.getElementById("Correct3").classList.add("show-message");
}
}

function calculatescore()
{
var score1 = Number(getCookie("prescore1"));
var score2 = Number(getCookie("prescore2"));
var score3 = Number(getCookie("prescore3"));
var results = score1 + score2 + score3;
document.getElementById("Fsc").innerHTML= asPercentage(results);
}


function asPercentage(val)
{
return "%" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
