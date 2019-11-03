//Sorting
let sInvoice = false;
let sDate = false;
let sCustId = false;
let sEmpId = false;
let sDesc = false;
let sCost = false;
let sPrice = false;

function setSFalse() {
    sInvoice = false;
    sDate = false;
    sCustId = false;
    sEmpId = false;
    sDesc = false;
    sCost = false;
    sPrice = false;
}

//Sorting Clicks
$(document).ready(function () {

    //Invoice
    $('#sInvoiceHead').click(function () {
        for (let i = 0; i < salesArr.length; i++) {
            salesArr[i].temp = salesArr[i].invoice;
        }
        if (sInvoice == false) {
            sortSAsc();
            setSFalse();
            sInvoice = true;
            toggleSClass('#sInvoiceIcon', 'down');
        } else {
            sortSDes();
            sInvoice = false;
            toggleSClass('#sInvoiceIcon', 'up');
        }
    });

    //Date
    $('#sDateHead').click(function () {
        for (let i = 0; i < salesArr.length; i++) {
            salesArr[i].temp = salesArr[i].date;
        }
        if (sDate == false) {
            sortSAsc();
            setSFalse();
            sDate = true;
            toggleSClass('#sDateIcon', 'down');
        } else {
            sortSDes();
            sDate = false;
            toggleSClass('#sDateIcon', 'up');
        }
    });

    //Customer ID
    $('#sCustIdHead').click(function () {
        for (let i = 0; i < salesArr.length; i++) {
            salesArr[i].temp = salesArr[i].custID;
        }
        if (sCustId == false) {
            sortSAsc();
            setSFalse();
            sCustId = true;
            toggleSClass('#sCustIdIcon', 'down');
        } else {
            sortSDes();
            sCustId = false;
            toggleSClass('#sCustIdIcon', 'up');
        }
    });

    //Employee ID
    $('#sEmpIdHead').click(function () {
        for (let i = 0; i < salesArr.length; i++) {
            salesArr[i].temp = salesArr[i].empID;
        }
        if (sEmpId == false) {
            sortSAsc();
            setSFalse();
            sEmpId = true;
            toggleSClass('#sEmpIdIcon', 'down');
        } else {
            sortSDes();
            sEmpId = false;
            toggleSClass('#sEmpIdIcon', 'up');
        }
    });

    //Description
    $('#sDescHead').click(function () {
        for (let i = 0; i < salesArr.length; i++) {
            salesArr[i].temp = salesArr[i].desc;
        }
        if (sDesc == false) {
            sortSAsc();
            setSFalse();
            sDesc = true;
            toggleSClass('#sDescIcon', 'down');
        } else {
            sortSDes();
            sDesc = false;
            toggleSClass('#sDescIcon', 'up');
        }
    });

    //Cost
    $('#sCostHead').click(function () {
        for (let i = 0; i < salesArr.length; i++) {
            salesArr[i].temp = salesArr[i].cost;
        }
        if (sCost == false) {
            sortSAsc();
            setSFalse();
            sCost = true;
            toggleSClass('#sCostIcon', 'down');
        } else {
            sortSDes();
            sCost = false;
            toggleSClass('#sCostIcon', 'up');
        }
    });

    //Price
    $('#sPriceHead').click(function () {
        for (let i = 0; i < salesArr.length; i++) {
            salesArr[i].temp = salesArr[i].price;
        }
        if (sPrice == false) {
            sortSAsc();
            setSFalse();
            sPrice = true;
            toggleSClass('#sPriceIcon', 'down');
        } else {
            sortSDes();
            sPrice = false;
            toggleSClass('#sPriceIcon', 'up');
        }
    });
});


//Toggle Icon Classes
function toggleSClass(icon, dir) {
    $('#sInvoiceIcon').removeClass();
    $('#sDateIcon').removeClass();
    $('#sCustIdIcon').removeClass();
    $('#sEmpIdIcon').removeClass();
    $('#sDescIcon').removeClass();
    $('#sCostIcon').removeClass();
    $('#sPriceIcon').removeClass();
    $(icon).addClass('fa fa-angle-' + dir);
}

function sortSAsc() {
    for (let i = 0; i < salesArr.length; i++) {
        for (let j = 0; j < salesArr.length; j++) {
            if (i == j) continue;
            if (salesArr[i].temp < salesArr[j].temp) {
                let temp = salesArr[i];
                salesArr[i] = salesArr[j];
                salesArr[j] = temp;
            }
        }
    }
    displaySales(salesArr);
}

function sortSDes() {
    for (let i = 0; i < salesArr.length; i++) {
        for (let j = 0; j < salesArr.length; j++) {
            if (salesArr[i].temp > salesArr[j].temp) {
                let temp = salesArr[i];
                salesArr[i] = salesArr[j];
                salesArr[j] = temp;
            }
        }
    }
    displaySales(salesArr);
}

//Sales---------------------------------------------------------------------------------
var salesArr = [];
var datesArr = [];

class Sale {
    constructor(invoice, date, custID, empID, desc, cost, price) {
        this.invoice = invoice;
        this.date = date;
        this.custID = custID;
        this.empID = empID;
        this.desc = desc;
        this.cost = cost;
        this.price = price;
        this.temp;
    }
}

function createSales() {
    salesArr.push(
        new Sale(1, new Date('11/25/2018'), 120, 123456, 'Kitchen remodel', 7000, 12000),
        new Sale(2, new Date('1/1/2019'), 658, 112244, 'Kitchen Retile', 3000, 5000),
        new Sale(3, new Date('2/15/2019'), 23, 654987, 'New sinks kitchen and bath', 3500, 7500),
        new Sale(4, new Date('4/7/2019'), 999, 998877, 'Bath remodel', 4500, 8000),
        new Sale(5, new Date('4/28/2019'), 840, 888555, 'kitchen countertops', 3000, 5500),
        new Sale(6, new Date('5/3/2019'), 1000, 111222, 'hardwood full house', 30000, 50000),
        new Sale(7, new Date('5/7/2019'), 410, 444555, 'remodel full house', 100000, 1000000),
        new Sale(8, new Date('5/9/2019'), 120, 123456, 'platinum/diamond microwave', 5000000, 100000000),
        new Sale(9, new Date('5/10/2019'), 500, 456123, 'Bath remodel', 4500, 7500),
        new Sale(10, new Date('7/12/2019'), 750, 654321, 'Kitchen and bath remodel', 22000, 30000)
    );
    displaySales(salesArr);
}

function findDates() {
    datesArr.length = 0;
    let date1 = $('#startDate').val();
    let startDate = new Date(date1.replace(/-/g, '\/'));
    let date2 = $('#endDate').val();
    let endDate = new Date(date2.replace(/-/g, '\/'));

    if (startDate == 'Invalid Date') {
        $('#errorMessage').html('*Invalid start-date');
    }
    else if (endDate == 'Invalid Date') {
        $('#errorMessage').html('*Invalid end-date');
    }
    else if (startDate > endDate) {
        $('#errorMessage').html('*Start-date must be before end-date');
    }
    else {
        $('#errorMessage').html('');
    }

    for (let i = 0; i < salesArr.length; i++) {
        if (startDate <= salesArr[i].date && salesArr[i].date <= endDate) {
            datesArr.push(salesArr[i]);
        }
    }
    displaySales(datesArr);
}

function displaySales(arr) {
    $('#salesBody').empty();
    if (arr.length == 0) {
        $('#errorMessage').html('*No records found');
    }

    let dateObj;
    let month;
    let day;
    let year;
    let date;

    for (let i = 0; i < arr.length; i++) {
        dateObj = arr[i].date;
        month = dateObj.getUTCMonth();
        month++;

        day = dateObj.getUTCDate();
        year = dateObj.getUTCFullYear();

        date = month + "/" + day + "/" + year;

        $('#salesBody').append('<tr><td>' + arr[i].invoice + '</td><td>' + date + '</td><td>' + arr[i].custID + '</td><td>' + arr[i].empID + '</td><td class="text-capitalize">' + arr[i].desc + '</td><td>' + convUSD.format(arr[i].cost) + '</td><td>' + convUSD.format(arr[i].price) + '</td></tr>');
    }
}


function resetDates() {
    displaySales(salesArr);
    $('#startDate').val('');
    $('#endDate').val('');
    $('#errorMessage').html('');
}