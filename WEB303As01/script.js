/*
	WEB 303 Assignment 1 - jQuery
	{Gurpreet Kaur}
*/
$(document).ready(function () {
	// I use "keyup" event handler to run the salary and percent fields  
    $("#yearly-salary, #percent").on("keyup", function () {
        // Input the values
        var salary = parseFloat($("#yearly-salary").val());
        var percent = parseFloat($("#percent").val());
            // Checking input value is valid or not
        if (!isNaN(salary) && !isNaN(percent)) {
            // Calculations
            var amount = (salary * percent) / 100;
            // Roundup the calculated amount with the help of toFixed method
            var roundedAmount = amount.toFixed(2);
            // Output updated
            $("#amount").text("$" + roundedAmount);
        } else {
            // Error message  
            $("#amount").text("Invalid input");
        }
    });
});
