function theChan() {
    var chan = document.createElement("div");
    chan.style.backgroundColor = "red";
    chan.style.width = "50%";
    chan.style.height = "30px";
    chan.innerHTML = "Div chẵn";
    chan.style.color = "white";
    document.getElementById("showDivs").appendChild(chan);
}
function theLe() {
    var le = document.createElement("div");
    le.style.backgroundColor = "blue";
    le.style.width = "50%";
    le.style.height = "30px";
    le.innerHTML = "Div lẻ";
    le.style.color = "white";
    document.getElementById("showDivs").appendChild(le);
}

function showDiv(){
    for(var i=1; i<=10; i++){
        if (i%2==0){
            theChan();
        }
        else theLe();
    }
}

document.getElementById("showDiv").onclick = function () {
    showDiv();
}