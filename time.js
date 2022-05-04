Date.prototype.yyyymmdd = function() {
    var Mon = this.getMonth() + 1; // getMonth() is zero-based
    var da = this.getDate();
    var ho = this.getHours();
    var min = this.getMinutes();
    var sec = this.getSeconds();
    return [min,"-",
        da,"-",
        this.getFullYear()," ",
        ho, ":", Mon, ":", (sec>9 ? '' : '0') + sec
    ].join('');
};  
function display_c() {
    var refresh = 1000;
    mytime = setTimeout("display_ct()", refresh);
}
function display_ct() {
    let now = new Date();
    var x = now.yyyymmdd();
    document.getElementById("ct").innerHTML = x;
    display_c();
}