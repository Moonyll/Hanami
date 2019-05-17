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
function order_sushies(x) {
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
    var col5 = document.createElement('td'); // create sixth column node
    var col6 = document.createElement('td'); // create sevth column node
    // Append column
    row_order.appendChild(col0); // append 1st column to row
    row_order.appendChild(col1); // append 2nd column to row
    row_order.appendChild(col2); // append 3rd column to row
    row_order.appendChild(col5);
    row_order.appendChild(col6);
    row_order.appendChild(col3); // append 4th column to row
    row_order.appendChild(col4); // append 5th column to row
    // Set Values
    col0.innerHTML = select_name;
    col1.innerHTML = select_ref;
    col2.innerHTML = '1';
    col5.innerHTML = '<button type="button" onclick="increase(this)">+</button>';
    col6.innerHTML = '<button type="button" onclick="decrease(this)">-</button>';
    col3.innerHTML = select_price;
    col4.innerHTML = '<button type="button" onclick="delRow(this)">retirer produit</button>';
    // Copy row created
    table.appendChild(row_order); // append row to table
}
function total() {
    var table_order = document.getElementById("orders"), total_orders=0;
    var total_rows = table_order.rows.length;
    for (var i = 2; i < total_rows; i++)
    {
    total_orders = total_orders + parseFloat((table_order.rows[i].cells[5].innerHTML).replace(",", "."))*parseInt(table_order.rows[i].cells[2].innerHTML);
    }
    var round_total = Math.round(total_orders * 100) / 100; // Arrondi à 2 chiffres !
    document.getElementById("invoice").innerText = "Merci pour votre commmande !" + "\n" + "Total Panier : " + round_total +" & euro;";
} 

function increase(x) {
    var k = x.parentNode.parentNode.rowIndex;
    var table_order = document.getElementById("orders");
    var inc = parseInt(table_order.rows[k].cells[2].innerHTML, 10);
    inc = isNaN(inc) ? 0 : inc;
    inc++;
    table_order.rows[k].cells[2].innerHTML = inc;
}

function decrease(x) {
    var k = x.parentNode.parentNode.rowIndex;
    var table_order = document.getElementById("orders");
    var dec = parseInt(table_order.rows[k].cells[2].innerHTML, 10);
    dec = isNaN(dec) ? 0 : dec;
    dec--;
    table_order.rows[k].cells[2].innerHTML = dec;
}

function order_makies(x) {
    //alert("Row index is: " + x.parentNode.parentNode.rowIndex);
    var i = x.parentNode.parentNode.rowIndex; // get index of the row to copy
    var row = document.getElementById("makies").rows[i]; // find row to copy
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
    var col5 = document.createElement('td'); // create sixth column node
    var col6 = document.createElement('td'); // create sevth column node
    // Append column
    row_order.appendChild(col0); // append 1st column to row
    row_order.appendChild(col1); // append 2nd column to row
    row_order.appendChild(col2); // append 3rd column to row
    row_order.appendChild(col5);
    row_order.appendChild(col6);
    row_order.appendChild(col3); // append 4th column to row
    row_order.appendChild(col4); // append 5th column to row
    // Set Values
    col0.innerHTML = select_name;
    col1.innerHTML = select_ref;
    col2.innerHTML = '1';
    col5.innerHTML = '<button type="button" onclick="increase(this)">+</button>';
    col6.innerHTML = '<button type="button" onclick="decrease(this)">-</button>';
    col3.innerHTML = select_price;
    col4.innerHTML = '<button type="button" onclick="delRow(this)">retirer produit</button>';
    // Copy row created
    table.appendChild(row_order); // append row to table
}

function order_sashimies(x) {
    //alert("Row index is: " + x.parentNode.parentNode.rowIndex);
    var i = x.parentNode.parentNode.rowIndex; // get index of the row to copy
    var row = document.getElementById("sashimies").rows[i]; // find row to copy
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
    var col5 = document.createElement('td'); // create sixth column node
    var col6 = document.createElement('td'); // create sevth column node
    // Append column
    row_order.appendChild(col0); // append 1st column to row
    row_order.appendChild(col1); // append 2nd column to row
    row_order.appendChild(col2); // append 3rd column to row
    row_order.appendChild(col5);
    row_order.appendChild(col6);
    row_order.appendChild(col3); // append 4th column to row
    row_order.appendChild(col4); // append 5th column to row
    // Set Values
    col0.innerHTML = select_name;
    col1.innerHTML = select_ref;
    col2.innerHTML = '1';
    col5.innerHTML = '<button type="button" onclick="increase(this)">+</button>';
    col6.innerHTML = '<button type="button" onclick="decrease(this)">-</button>';
    col3.innerHTML = select_price;
    col4.innerHTML = '<button type="button" onclick="delRow(this)">retirer produit</button>';
    // Copy row created
    table.appendChild(row_order); // append row to table
}

function order_brochettes(x) {
    //alert("Row index is: " + x.parentNode.parentNode.rowIndex);
    var i = x.parentNode.parentNode.rowIndex; // get index of the row to copy
    var row = document.getElementById("brokettes").rows[i]; // find row to copy
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
    var col5 = document.createElement('td'); // create sixth column node
    var col6 = document.createElement('td'); // create sevth column node
    // Append column
    row_order.appendChild(col0); // append 1st column to row
    row_order.appendChild(col1); // append 2nd column to row
    row_order.appendChild(col2); // append 3rd column to row
    row_order.appendChild(col5);
    row_order.appendChild(col6);
    row_order.appendChild(col3); // append 4th column to row
    row_order.appendChild(col4); // append 5th column to row
    // Set Values
    col0.innerHTML = select_name;
    col1.innerHTML = select_ref;
    col2.innerHTML = '1';
    col5.innerHTML = '<button type="button" onclick="increase(this)">+</button>';
    col6.innerHTML = '<button type="button" onclick="decrease(this)">-</button>';
    col3.innerHTML = select_price;
    col4.innerHTML = '<button type="button" onclick="delRow(this)">retirer produit</button>';
    // Copy row created
    table.appendChild(row_order); // append row to table
}