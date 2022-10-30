function tinhTong() {
    var coSo = Number(document.querySelector("#soX").value);
    var soMu = Number(document.querySelector("#soN").value);
    var tong = 0;
    for (var i=1; i<=soMu; i++){
        var temp = Math.pow(coSo, i);
        tong+= temp;
    }
    console.log(tong);
    document.querySelector("#tongTimDuoc").innerHTML = "Tổng là: " + tong;
}
document.getElementById("tinhTong").onclick = function () {
    tinhTong();
}