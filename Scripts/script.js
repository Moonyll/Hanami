//function cloneRow() {
//    var row = document.getElementById("rowToClone"); // find row to copy
//    var table = document.getElementById("tableToModify"); // find table to append to
//    var clone = row.cloneNode(true); // copy children too
//    clone.id = "newID"; // change id or other attributes/contents
//    table.appendChild(clone); // add new row to end of table
//}

//function createRow() {
//    var row = document.createElement('tr'); // create row node
//    var col = document.createElement('td'); // create column node
//    var col2 = document.createElement('td'); // create second column node
//    row.appendChild(col); // append first column to row
//    row.appendChild(col2); // append second column to row
//    col.innerHTML = "qwe"; // put data in first column
//    col2.innerHTML = "rty"; // put data in second column
//    var table = document.getElementById("tableToModify"); // find table to append to
//    table.appendChild(row); // append row to table
//}
function delRow(x) {
    var j = x.parentNode.parentNode.rowIndex; // get index of the row to delete
    //var row_del = document.getElementById("orders").rows[j]; // find row to copy
    //var x = document.getElementById("orders").tBodies[0]; //get the table
    document.getElementById("orders").deleteRow(j);
} 
//
function order(x) {
    //alert("Row index is: " + x.parentNode.parentNode.rowIndex);
    var i = x.parentNode.parentNode.rowIndex; // get index of the row to copy
    var row = document.getElementById("sushies").rows[i]; // find row to copy
    var table = document.getElementById("orders"); // find table to append to
    //var clone = row.cloneNode(true); // copy children too
    //table.appendChild(clone); // add new row to end of table
    var select_name = row.cells[1].innerHTML; // nom produit
    var select_ref = row.cells[6].innerHTML; // ref produit
    var select_price = row.cells[4].innerHTML; // prix produit
    //alert(select_price);
    // Creating the row
    var row_order = document.createElement('tr'); // create row node
    var col0 = document.createElement('td'); // create column node
    var col1 = document.createElement('td'); // create second column node
    var col2 = document.createElement('td'); // create third column node
    var col3 = document.createElement('td'); // create fourth column node
    var col4 = document.createElement('td'); // create fifth column node
    // Append column
    row_order.appendChild(col0); // append 1st column to row
    row_order.appendChild(col1); // append 2nd column to row
    row_order.appendChild(col2); // append 3rd column to row
    row_order.appendChild(col3); // append 4th column to row
    row_order.appendChild(col4); // append 5th column to row
    // Set Values
    col0.innerHTML = select_name;
    col1.innerHTML = select_ref;
    col2.innerHTML = '<input type="number" name="quantity"  min="1" max="50" value="5" />';
    col3.innerHTML = select_price;
    col4.innerHTML = '<button type="button" onclick="delRow(this)">retirer produit</button>';
    // Copy row created
    table.appendChild(row_order); // append row to table
}
function total() {
    var table_order = document.getElementById("orders"), total_orders=0;
    //var total_rows = table_order.rows.length;
    //for (var i = 2; i < total_rows; i++)
    //{
    //total_orders = total_orders + parseFloat((table_order.rows[i].cells[3].innerHTML).replace(",", "."));
    //}
    //alert(total_orders);
    alert(table_order.rows[3].cells[2].value);
} 
//function checkTextbox(qty) {
//    var order_quantity = qty.value;
//    alert(order_quantity);
//}