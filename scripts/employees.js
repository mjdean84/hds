//Sorting
/*
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
*/
//Employees---------------------------------------------------------------------------------
var employeesArr = [];

class Employee {
    constructor(id, lName, fName, mInit, branchID, position, salary, address, city, state, zip, phone, email) {
        this.id = id;
        this.lName = lName;
        this.fName = fName;
        this.mInit = mInit;
        this.branchID = branchID;
        this.position = position;
        this.salary = salary;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

function createEmployees() {
    employeesArr.push(
        new Employee(111111, 'Herold', 'Joe', 'J', 1, 'President and CEO', 1000000, '123 Broad St', 'Phoenix', 'AZ',
            85001, '123-456-7890', 'jherold@hds.com'),
        new Employee(111112, 'Herold', 'Emily', 'E', 1, 'Vice President and CFO', 2000000, '123 Broad St', 'Phoenix',
            'AZ', 85001, '123-456-7890', 'eherold@hds.com'),
        new Employee(123456, 'Doe', 'John', 'Q', 2, 'Sales Rep', 65000, '789 South St', 'Scottsdale', 'AZ', 85250,
            '123-456-7890', 'jdoe@hds.com'),
        new Employee(123457, 'Jane', 'Doe', 'F', 3, 'Branch Manager', 85000, '111 Orange Ave', 'Tucson', 'AZ', 85756,
            '123-456-7890', 'jfdoe@hds.com'),
        new Employee(225544, 'Dangerously', 'Johnny', 'B', 4, 'Sales Rep', 500000, '55 Green Blvd', 'Las Vegas', 'NV',
            89102, '123-456-7890', 'jdangerously.hds.com'),
        new Employee(234567, 'Smith', 'Michael', 'M', 3, 'Assistant Branch Manager', 50000, '798 One Way Dr', 'Tucson',
            'AZ', 85756, '123-456-7890', 'msmith@hds.com'),
        new Employee(654321, 'Feltson', 'Eddie', 'F', 5, 'HR Manager', 35000, '8546 Harmony Way', 'Albuquerque', 'NM',
            87105, '123-456-7890', 'efeltson@hds.com'),
        new Employee(666555, 'Krelborn', 'Seymour', 'A', 4, 'Assistant Branch Manager', 50000, '9955 Elm St', 'Las Vegas',
            'NV', 89102, '123-456-7890', 'skrelborn@hds.com'),
        new Employee(778899, 'Vega', 'Vincent', 'L', 5, 'Accountant', 75000, '654 Seminole Circle', 'Albuquerque', 'NM',
            87105, '123-456-7890', 'vvega@hds.com'),
        new Employee(789456, 'Kimble', 'Rod', 'R', 1, 'Branch Manager', 85000, '621 Riverside Rd', 'Phoenix', 'AZ', 85003,
            '123-456-7890', 'rkimble@hds.com')
    )
    displayEmployees(employeesArr);
}

function displayEmployees(arr) {
    $('#employeesBody').empty();
    for (let i = 0; i < arr.length; i++) {
        $('#employeesBody').append('<tr><td>' + arr[i].id + '</td><td>' + arr[i].lName + '</td><td>' + arr[i].fName + '</td><td>' + arr[i].mInit + '</td><td>' + arr[i].branchID + '</td><td>' + arr[i].position + '</td><td>' + convUSD.format(arr[i].salary) + '</td><td>' + arr[i].address + '</td><td>' + arr[i].city + '</td><td>' + arr[i].state + '</td><td>' + arr[i].zip + '</td><td>' + arr[i].phone + '</td><td>' + arr[i].email + '</td></tr>');
    }
}