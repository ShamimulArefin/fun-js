// electricity bill


var netBill = 1928;
var netUnit = 180;
var billPerUnit = netBill / netUnit;

var previousUnitA = 4218;
var presentUnitA = 4329;
var netUnitThisMonthA = presentUnitA - previousUnitA;
var netBillthisMonthA = billPerUnit * netUnitThisMonthA;

var netBillthisMonthB = netBill - netBillthisMonthA;


var check = netBillthisMonthA + netBillthisMonthB;


console.log("Shilpi : ", netBillthisMonthA);
console.log("Mojammel : ", netBillthisMonthB);
console.log("net : ", check);

