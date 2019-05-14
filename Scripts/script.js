function order() {
    var Row = document.getElementById("sushies");
    var Cells = Row.getElementsByTagName("td");
    alert(Cells[0].innerText + Cells[1].innerText);
}