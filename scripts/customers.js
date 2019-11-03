//Sorting
let custId = false;
let custLast = false;
let custFirst = false;
let custMi = false;
let custAddress = false;
let custCity = false;
let custState = false;
let custZip = false;
let custPurchases = false;

function setCFalse() {
    custId = false;
    custLast = false;
    custFirst = false;
    custMi = false;
    custAddress = false;
    custCity = false;
    custState = false;
    custZip = false;
    custPurchases = false;
}

//Sorting Clicks
$(document).ready(function () {

    //ID
    $('#cIdHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].id;
        }
        if (custId == false) {
            sortCAsc();
            setCFalse();
            custId = true;
            toggleCClass('#cIdIcon', 'down');
        } else {
            sortCDes();
            custId = false;
            toggleCClass('#cIdIcon', 'up');
        }
    });

    //Last
    $('#cLastHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].lName;
        }
        if (custLast == false) {
            sortCAsc();
            setCFalse();
            custLast = true;
            toggleCClass('#cLastIcon', 'down');
        } else {
            sortCDes();
            custLast = false;
            toggleCClass('#cLastIcon', 'up');
        }
    });

    //First
    $('#cFirstHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].fName;
        }
        if (custFirst == false) {
            sortCAsc();
            setCFalse();
            custFirst = true;
            toggleCClass('#cFirstIcon', 'down');
        } else {
            sortCDes();
            custFirst = false;
            toggleCClass('#cFirstIcon', 'up');
        }
    });

    //Middle
    $('#cMiHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].mInit;
        }
        if (custMi == false) {
            sortCAsc();
            setCFalse();
            custMi = true;
            toggleCClass('#cMiIcon', 'down');
        } else {
            sortCDes();
            custMi = false;
            toggleCClass('#cMiIcon', 'up');
        }
    });

    //Address
    $('#cAddressHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].address;
        }
        if (custAddress == false) {
            sortCAsc();
            setCFalse();
            custAddress = true;
            toggleCClass('#cAddressIcon', 'down');
        } else {
            sortCDes();
            custAddress = false;
            toggleCClass('#cAddressIcon', 'up');
        }
    });

    //City
    $('#cCityHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].city;
        }
        if (custCity == false) {
            sortCAsc();
            setCFalse();
            custCity = true;
            toggleCClass('#cCityIcon', 'down');
        } else {
            sortCDes();
            custCity = false;
            toggleCClass('#cCityIcon', 'up');
        }
    });

    //State
    $('#cStateHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].state;
        }
        if (custState == false) {
            sortCAsc();
            setCFalse();
            custState = true;
            toggleCClass('#cStateIcon', 'down');
        } else {
            sortCDes();
            custState = false;
            toggleCClass('#cStateIcon', 'up');
        }
    });

    //Zip
    $('#cZipHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].zip;
        }
        if (custZip == false) {
            sortCAsc();
            setCFalse();
            custZip = true;
            toggleCClass('#cZipIcon', 'down');
        } else {
            sortCDes();
            custZip = false;
            toggleCClass('#cZipIcon', 'up');
        }
    });

    //Purchases
    $('#cPurchasesHead').click(function () {
        for (let i = 0; i < customersArr.length; i++) {
            customersArr[i].temp = customersArr[i].purchases;
        }
        if (custPurchases == false) {
            sortCAsc();
            setCFalse();
            custPurchases = true;
            toggleCClass('#cPurchasesIcon', 'down');
        } else {
            sortCDes();
            custPurchases = false;
            toggleCClass('#cPurchasesIcon', 'up');
        }
    });
});


//Toggle Icon Classes
function toggleCClass(icon, dir) {
    $('#cIdIcon').removeClass();
    $('#cLastIcon').removeClass();
    $('#cFirstIcon').removeClass();
    $('#cMiIcon').removeClass();
    $('#cAddressIcon').removeClass();
    $('#cCityIcon').removeClass();
    $('#cStateIcon').removeClass();
    $('#cZipIcon').removeClass();
    $('#purchasesIcon').removeClass();
    $('#deliveryIcon').removeClass();
    $(icon).addClass('fa fa-angle-' + dir);
}

function sortCAsc() {
    for (let i = 0; i < customersArr.length; i++) {
        for (let j = 0; j < customersArr.length; j++) {
            if (i == j) continue;
            if (customersArr[i].temp < customersArr[j].temp) {
                let temp = customersArr[i];
                customersArr[i] = customersArr[j];
                customersArr[j] = temp;
            }
        }
    }
    displayCustomers();
}

function sortCDes() {
    for (let i = 0; i < customersArr.length; i++) {
        for (let j = 0; j < customersArr.length; j++) {
            if (customersArr[i].temp > customersArr[j].temp) {
                let temp = customersArr[i];
                customersArr[i] = customersArr[j];
                customersArr[j] = temp;
            }
        }
    }
    displayCustomers();
}


//Customers-------------------------------------------------------------------------------------
var customersArr = [];


class Customer {
    constructor(id, lName, fName, mInit, address, city, state, zip, purchases) {
        this.id = id;
        this.lName = lName;
        this.fName = fName;
        this.mInit = mInit;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.purchases = purchases;
        this.temp;
    }
}

function createCustomers() {
    customersArr.push(
        new Customer(1, 'Abercrombie', 'Kim', 'B', '1226 Shoe St.', 'Scottsdale', 'AZ', 85256, 'Full Kitchen Remodel'),
        new Customer(2, 'Abolrous', 'Hazem', 'E', '1399 Firestone Drive', 'Yuma', 'AZ', 85364, 'Bath Retile'),
        new Customer(3, 'Adams', 'Angel', 'C', '6872 Thornwood Dr.', 'Yuma', 'AZ', 85364, 'Refrigerator SZ680 <br>Range VGIC-24'),
        new Customer(4, 'Adams', 'Edward', 'C', '10203 Acorn Avenue', 'Yuma', 'AZ', 85364, 'Kitchen and Bath Granite Countertops'),
        new Customer(5, 'Adams', 'Gabriella', 'K', '1902 Santa Cruz', 'Yuma', 'AZ', 85364, 'Microwave JVM136C<br>Washer WFL 2060<br>Dryer WTA 3510'),
        new Customer(6, 'Adams', 'Jason', 'C', '1285 Greenbrier Street', 'Yuma', 'AZ', 85364, 'Full Bath Remodel'),
        new Customer(7, 'Adams', 'Kaitlyn', 'A', '1356 Grove Way', 'Phoenix', 'AZ', 85004, 'Bath Sinks and Tub'),
        new Customer(8, 'Adams', 'Robert', 'Q', '1411 RaAZh Drive', 'Phoenix', 'AZ', 85004, 'Hardwood Floor Kitchen'),
        new Customer(9, 'Adams', 'Thomas', 'C', '1220 Bradford Way', 'Phoenix', 'AZ', 85004, 'Bath Onyx Countertop with Backlighting'),
        new Customer(10, 'Akers', 'Kim', 'C', '1619 Stillman Court', 'Phoenix', 'AZ', 85004, 'Kitchen Cabinets Maple')
    );
    displayCustomers();
}

function displayCustomers() {
    $('#custBody').empty();
    for (let i = 0; i < customersArr.length; i++) {
        $('#custBody').append('<tr><td>' + customersArr[i].id + '</td><td>' + customersArr[i].lName + '</td><td>' + customersArr[i].fName + '</td><td>' + customersArr[i].mInit + '</td><td>' + customersArr[i].address + '</td><td>' + customersArr[i].city + '</td><td>' + customersArr[i].state + '</td><td>' + customersArr[i].zip + '</td><td>' + customersArr[i].purchases + '</td></tr>');
    }
}