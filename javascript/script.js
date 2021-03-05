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
