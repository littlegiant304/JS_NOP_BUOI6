function tinhGiaiThua() {
    var giaithua = 1;
    var x = Number(document.querySelector("#soTinhGiaiThua").value);
    for(var i=1;i<=x;i++){
        giaithua = giaithua*i;
    }
    document.querySelector("#giaiThuaTimDuoc").innerHTML = x + "! = " + giaithua;
}
document.querySelector("#giaiThua").onclick = function () {
    tinhGiaiThua();
}