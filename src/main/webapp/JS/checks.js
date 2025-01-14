function validAmount(){
	var amount=document.getElementById("LoanAmount");
	var salary=document.getElementById("MonthSalary");
	if(amount.value>50*salary.value)
	{
		var isConfirm=confirm("The loan amount you enter is not elligible for approval.\nMaximum allowed loan "+ (50*salary.value) + ".\nWould you like to continue?");
		if(isConfirm){
			amount.value=50*salary.value;
			return true;
		}
		return false;
	}
	return true;
}

function exportData(){
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("loanTable");
 
    /* Declaring array variable */
    var rows =[];
 
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
        column4 = row.cells[3].innerText;
        column5 = row.cells[4].innerText;
 
    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3,
                column4,
                column5
            ]
        );
 
        }
        csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
 
        /* create a hidden <a> DOM node and set its download attribute */
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Loan_Repayment_Schedule.csv");
        document.body.appendChild(link);
         /* download the data file named "Stock_Price_Report.csv" */
        link.click();
}