// global vars; if I make 'table_names' a global var, it does not become visible; why???
var names = [];

/**
 * Adds a row to the table.
 * 
 * Adds an index along with its respective name.
 * 
 * @param {Number} index The index of the name to be added to the table.
 * @param {Number} name If index = i, it denotes the ith name to be added to the row.
 *  */
function create_row(index, name) {
    var table_names = document.getElementById("table_names");
    var row = table_names.insertRow();
    var index_cell = row.insertCell(0);
    var name_cell = row.insertCell(1);
    index_cell.innerText = index;
    name_cell.innerText = name;
}

/**
 * Populates the table with all the names.
 * 
 * @see create_row()
 * @listens onclick
 * @param {String} name The name given by the user.
 */
function display_names(name) {
    // if the user has not typed anything, do nothing
    if (name.length === 0) return;
    var table_names = document.getElementById("table_names");
    // clear the table; stop at index 1 so as to not delete the column headers
    for (var i = table_names.rows.length - 1; table_names.rows.length > 1; i--) table_names.deleteRow(i);
    names.push(name);
    for (var i = 0; i < names.length; i++) create_row(i + 1, names.sort()[i]);
    table_names.style.visibility = "visible";
    document.getElementById("name").value = "";
}
