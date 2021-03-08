// js document

console.log('Hello World');


//5 myfunction
function myFunction5() {
    var a = 10;
    var b =10;

    if(a == b){
        var x=document.getElementById("here");
        return x.innerHTML = "TRUE",
        x.style.color = "red",
        x.style.transition= "all 3s ease-in",
        x.style.fontSize = "30px",
        x.style.fontStyle = "italic";
    }
}

//if statement q1
function myFunction6() {
    var x = 6;

    if(x%2 == 0) {
        var y = document.getElementById("ans");
        return y.innerHTML = "Even",
        y.style.color = "green" ;
    }
    else{
        var y = document.getElementById("ans");
        return y.innerHTML = "Odd",
        y.style.color = "red" ;
    }
}
function myFunction7() {
    var x = 7;

    if(x%2 == 0) {
        var y = document.getElementById("ans");
        return y.innerHTML = "Even",
        y.style.color = "green" ;
    }
    else{
        var y = document.getElementById("ans");
        return y.innerHTML = "Odd",
        y.style.color = "red" ;
    }
}

//q no.2
function myFunction8() {
    var x = 1 ;

    if(x > 0) {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Positive",
        y.style.color = "green" ;
    }
    else if (x < 0) {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Negative",
        y.style.color = "red" ;
    }
    else {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Neutral",
        y.style.color = "yellow" ;
    }
}
function myFunction9() {
    var x = -1 ;

    if(x > 0) {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Positive",
        y.style.color = "green" ;
    }
    else if (x < 0) {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Negative",
        y.style.color = "red" ;
    }
    else {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Neutral",
        y.style.color = "yellow" ;
    }
}
function myFunction10() {
    var x = 0 ;

    if(x > 0) {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Positive",
        y.style.color = "green" ;
    }
    else if (x < 0) {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Negative",
        y.style.color = "red" ;
    }
    else {
        var y = document.getElementById("ans1");
        return y.innerHTML = "Neutral",
        y.style.color = "yellow" ;
    }
}

// Q.no 3
function myFunction11() {

    var x = 6 ;
    if(x > 0 && x%2 == 0) {
        var y = document.getElementById("ans2");
        return y.innerHTML = "Positive",
        y.style.color = "green" ;
    }

    else {
        var y = document.getElementById("ans2");
        return y.innerHTML = "Negative",
        y.style.color = "red" ;
    } 
}
function myFunction12() {

    var x = -5 ;
    if(x > 0 && x%2 == 0) {
        var y = document.getElementById("ans2");
        return y.innerHTML = "Positive",
        y.style.color = "green" ;
    }

    else {
        var y = document.getElementById("ans2");
        return y.innerHTML = "Negative",
        y.style.color = "red" ;
    } 
}

