function timSoN() {
    var tong =0;
    var i = 0;
    while (tong < 10000) {
        i++;
        tong+=i;
        
    }
    document.querySelector("#soTimDuoc").value = "Số nguyên dương nhỏ nhất: "+i;
    
}
timSoN();