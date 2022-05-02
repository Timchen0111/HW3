Date.prototype.yyyymmdd = function() {
    var MM = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    var hh = this.getHours();
    var mm = this.getMinutes();
    var ss = this.getSeconds();
    return [MM,"-",
        dd,"-",
        this.getFullYear()," ",
        hh, ":", mm, ":", (ss>9 ? '' : '0') + ss
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