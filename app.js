// JS Assignment 13

// Task 01

// var date = new Date()

// console.log(date);

// Task 02

// var date = new Date()

// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// alert("Month: " + month[date.getMonth()]);

// Task 03

// var date = new Date()

// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// alert("day: " + days[date.getDay()]);

// Task 04

// var date = new Date();

// var day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// var input = prompt("Enter your day").toLowerCase();

// if (input === "sunday" || input === "saturday") {
//     alert("It's a Fun day");
// } else if (input === "monday" || input === "tuesday" || input === "wednesday" || input === "thursday" || input === "friday") {
//     alert("It's okay! Work hard because it's " + input);
// } else {
//     alert("It's not a day from the week!");
// }



// Question 05

// var date = new Date().getDate();
// if (date <= 15) {
//     document.write("First fifteen days of the month");
// }else {
//     document.write("Last days of the month");
// }



// Question 06

// var currentDate = new Date();
// var elapsedMilliseconds = currentDate.getTime();
// var elapsedMinutes = elapsedMilliseconds / (1000 * 60);

// document.write("Current Date: " + currentDate + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + elapsedMinutes);




// Question 07

// var currentDate = new Date();
// var hours = currentDate.getHours();

// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }



// Question 08

// var laterDate = new Date ("Dec 31, 2020");
// document.write(laterDate);



// Question 09

// var ramadanStart = new Date('Mar 11, 2024');
// var currentDate = new Date();
// var elapsedDays = Math.floor((currentDate - ramadanStart) / (1000 * 60 * 60 * 24));

// alert(elapsedDays + " days have passed since 1st Ramadan, 2024");



// Question 10

// var startOf2015 = new Date('January 1, 2015 00:00:00');
// var referenceDate = new Date('December 5, 2015 22:50:16 GMT+0500');
// var elapsedSeconds = Math.floor((referenceDate - startOf2015) / 1000);

// document.write(elapsedSeconds + " seconds had passed since beginning of 2015");



// Question 11

// var currentDate = new Date();
// document.write("Current date: " + currentDate + "<br>");

// currentDate.setHours(currentDate.getHours() - 1);
// document.write("1 hour ago, it was: " + currentDate);



// Question 12

// var currentDate = new Date();
// document.write("Current date: " + currentDate + "<br>");
// var yearsBack = new Date("Oct 11, 1924");
// document.write("100 Years back: " + yearsBack);



// Question 13

// var age = prompt("Enter Your Age: ");
// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);



// Questoion 15 

// var date = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[date.getMonth()];

// var customerName = "<b>Zeeshan islam</b>";
// var numberOfUnits = 410;
// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;

// var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
// var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + currentMonth + "<br>");
// document.write("Number of units: " + numberOfUnits + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date):