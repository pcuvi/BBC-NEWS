// var d = new Date(2018, 11, 24);
var today = new Date();
var date = (today.getMonth()+1)+' / '+today.getDate()+' / '+today.getFullYear();
document.getElementById("todays-date").innerHTML = date;
