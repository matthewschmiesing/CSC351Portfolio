//A bunch of sorting functions below

function tableSortPrice() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("productTable");
    switching = true;//Says that switching needs to happen

    while(switching){
        switching = false;//Makes this loop not run infinitely
        rows = table.rows;//Makes the table's rows accessible
        for(i = 1; i < (rows.length - 2); i++){//Loops through the rows ignoring the first and last row
            shouldSwitch = false;

            x = parseFloat(rows[i].cells[1].innerText.substring(1));//Gets price of current row
            y = parseFloat(rows[i+1].cells[1].innerText.substring(1));//Gets price of next row

            if(x > y){//Compares the prices
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){//Switches the row if appropriate
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);//Moves the next row in the table to be above the current row
            switching = true;//Makes the loop run again
        }
    }
    localStorage.setItem("sort", "price");//Saves whether this was the last sort that was done
}

//The other sorts work pretty much the same way, I will highlight the differences
function tableSortModel() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("productTable");
    switching = true;

    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1; i < (rows.length - 2); i++){
            shouldSwitch = false;

            x = parseFloat(rows[i].cells[0].innerText.substring(7));//Gets the model number of current row
            y = parseFloat(rows[i+1].cells[0].innerText.substring(7));//Gets model number of next row

            if(x < y){
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        }
    }
    localStorage.setItem("sort", "model");//Saves the sort type
}

function tableSortStock() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("productTable");
    switching = true;

    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1; i < (rows.length - 2); i++){
            shouldSwitch = false;
            
            x = parseFloat(rows[i].cells[2].innerText.substring(0,2));//Gets stock of current row
            y = parseFloat(rows[i+1].cells[2].innerText.substring(0,2));//Gets stock of next row

            if(x < y){
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        }
    }
    localStorage.setItem("sort", "stock");//Saves the sort type
}

//Retrieve the sort type that is saved, if any
document.addEventListener("DOMContentLoaded", () => {
    let sortType = localStorage.getItem("sort");//Gets what sort type is saved

    //Loads the table according to the sort type
    if(sortType == "model"){
        tableSortModel();
    }
    else if (sortType == "price"){
        tableSortPrice();
    }
    else if (sortType == "stock"){
        tableSortStock();
    }
})


//Adds highlighting to each row
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#productTable tbody tr").forEach(row =>{//Accesses all rows of the table
        row.addEventListener("mouseenter", () =>{//When the mouse enters the row
            row.querySelectorAll("td").forEach(cell =>{//Accesses all columns of the row
                cell.style.backgroundColor = "#212529";//Changes background color to the same as the table header
                cell.style.color = "#ececec";//Changes text color to be readable
            })
        })

        row.addEventListener("mouseleave", () =>{//When the mouse leaves the row
            row.querySelectorAll("td").forEach(cell =>{
                cell.style.backgroundColor = "";//Removes the background change
                cell.style.color = ""//Removes the text change
            })
        })
    })
})


//Adds a row to the table
function addTable(){
    //Gets some random numbers  for the model, stock, and price
    let modelNum = Math.floor(Math.random() * 20 + 17);
    let stockNum = Math.floor(Math.random() * 50);
    let priceNum = Math.floor(Math.random() * 10 + 1);
    //Gets the table from HTML
    var table = document.querySelector("#productTable tbody");

    //Creates a new row at the bottom
    var row = table.insertRow(-1);
    //Inserts cells into new row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    //Fills content of each cell
    cell1.textContent = `iPhone ${modelNum}`;
    cell2.textContent = `$${priceNum}`;
    cell3.textContent = `${stockNum} in stock`;
    cell4.innerHTML = `<button class="btn btn-primary">View</button>`;

    //Adds the same highlighting that the base rows have
    row.addEventListener("mouseenter", () =>{
        row.querySelectorAll("td").forEach(cell =>{
            cell.style.backgroundColor = "#272727";
            cell.style.color = "#ececec";
        })
    })

    row.addEventListener("mouseleave", () =>{
        row.querySelectorAll("td").forEach(cell =>{
            cell.style.backgroundColor = "";
            cell.style.color = ""
        })
    })

    //Updates the stock number at the bottom of the table
    updateStock();
}


//Adds up stock values of each row and updates the footer
function updateStock() {
    //Some variable to access the table and rows
    const table = document.getElementById("productTable");
    const rows = table.rows;
    //Sets variable to be updates with total stock
    let totalStock = 0;


    //Loop through the rows, ignoring the first and last ones, and adds up stock numbers
    for (let i = 1; i < rows.length - 1; i++) {
        totalStock += parseFloat(rows[i].cells[2].innerText.substring(0, 2));
    }

    console.log(totalStock);

    //Update the stock in the last row
    rows[rows.length - 1].cells[2].innerHTML = `${totalStock} items in stock`;
}


//Adds some interactivity to the table
document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("#productTable");

    //Applies some events for each row in the table found in HTML
    document.querySelectorAll("#productTable tbody tr").forEach((row) => {
        let rowBelow = null; //Track the added row element

        row.addEventListener("mouseenter", () =>{
            document.body.style.cursor = "pointer";//Changes cursor when the mouse is over a row
        })
    
        row.addEventListener("mouseleave", () =>{
            document.body.style.cursor = "";//Deletes the cursor type when mouse leaves the row
        })

        //On every click of a row
        row.addEventListener("click", () => {
            if (!rowBelow) {
                //Create a new row
                const newRow = table.insertRow(row.rowIndex + 1);
                const cell1 = newRow.insertCell(0);
                cell1.colSpan = 4;
                cell1.textContent = "This is a great product that you should buy!";
                rowBelow = newRow;// Store reference to the new row
            } else {
                //Remove the row
                table.deleteRow(rowBelow.rowIndex);
                rowBelow = null; //Reset to indicate no row exists below
            }
        });
    });
});