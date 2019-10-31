var id = false;
var type = false;
var brand = false;
var desc = false;
var sold = false;
var onHand = false;
var cost = false;
var price = false;
var delivery = false;

function setFalse() {
    id = false;
    type = false;
    brand = false;
    desc = false;
    sold = false;
    onHand = false;
    cost = false;
    price = false;
    delivery = false;
}

//Inventory Clicks
$(document).ready(function () {
    //Search Input
    $('#searchInput').on('keyup', function () {
        let value = $(this).val().toLowerCase();
        $('#prodBody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        $('#custBody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        $('#salesBody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        $('#employeesBody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //ID
    $('#idHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].id;
        }
        if (id == false) {
            sortAsc();
            setFalse();
            id = true;
            toggleClass('#idIcon', 'down');
        } else {
            sortDes();
            id = false;
            toggleClass('#idIcon', 'up');
        }
    });

    //Type
    $('#typeHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].type;
        }
        if (type == false) {
            sortAsc();
            setFalse();
            type = true;
            toggleClass('#typeIcon', 'down');
        } else {
            sortDes();
            type = false;
            toggleClass('#typeIcon', 'up');
        }
    });

    //Brand
    $('#brandHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].brand;
        }
        if (brand == false) {
            sortAsc();
            setFalse();
            brand = true;
            toggleClass('#brandIcon', 'down');
        } else {
            sortDes();
            brand = false;
            toggleClass('#brandIcon', 'up');
        }
    });

    //Description
    $('#descHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].description;
        }
        if (desc == false) {
            sortAsc();
            setFalse();
            desc = true;
            toggleClass('#descIcon', 'down');
        } else {
            sortDes();
            desc = false;
            toggleClass('#descIcon', 'up');
        }
    });

    //Sold
    $('#soldHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].sold;
        }
        if (sold == false) {
            sortAsc();
            setFalse();
            sold = true;
            toggleClass('#soldIcon', 'down');
        } else {
            sortDes();
            sold = false;
            toggleClass('#soldIcon', 'up');
        }
    });

    //On-Hand
    $('#onHandHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].onHand;
        }
        if (onHand == false) {
            sortAsc();
            setFalse();
            onHand = true;
            toggleClass('#onHandIcon', 'down');
        } else {
            sortDes();
            onHand = false;
            toggleClass('#onHandIcon', 'up');
        }
    });

    //Cost
    $('#costHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].cost;
        }
        if (cost == false) {
            sortAsc();
            setFalse();
            cost = true;
            toggleClass('#costIcon', 'down');
        } else {
            sortDes();
            cost = false;
            toggleClass('#costIcon', 'up');
        }
    });

    //Price
    $('#priceHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].listPrice;
        }
        if (price == false) {
            sortAsc();
            setFalse();
            price = true;
            toggleClass('#priceIcon', 'down');
        }
        else if (price == true) {
            sortDes();
            price = false;
            toggleClass('#priceIcon', 'up');
        }
    });

    //Delivery
    $('#deliveryHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].delivery;
        }
        if (delivery == false) {
            sortAsc();
            setFalse();
            delivery = true;
            toggleClass('#deliveryIcon', 'down');
        }
        else if (delivery == true) {
            sortDes();
            delivery = false;
            toggleClass('#deliveryIcon', 'up');
        }
    });
});

//Toggle Icon Classes
function toggleClass(icon, dir) {
    $('#idIcon').removeClass();
    $('#typeIcon').removeClass();
    $('#brandIcon').removeClass();
    $('#serialIcon').removeClass();
    $('#descIcon').removeClass();
    $('#soldIcon').removeClass();
    $('#onHandIcon').removeClass();
    $('#costIcon').removeClass();
    $('#priceIcon').removeClass();
    $('#deliveryIcon').removeClass();
    $(icon).addClass('fa fa-angle-' + dir);
}


//Convert to Currency
var invArr = [];
var convUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


//Inventory---------------------------------------------------------------------------------------
class Product {
    constructor(type, brand, id, description, sold, onHand, cost, listPrice, delivery) {
        this.type = type;
        this.brand = brand;
        this.id = id;
        this.description = description;
        this.sold = sold;
        this.onHand = onHand;
        this.cost = cost;
        this.listPrice = listPrice;
        this.delivery = delivery;
        this.temp;
    }
}

function createInv() {
    invArr.push(
        new Product('Microwave', 'GE', 'MW001', 'Over-the-Range Microwave', 15, 1, 355, 499, 25),
        new Product('Microwave', 'GE', 'MW002', 'Over-the-Range Microwave', 22, 2, 325, 429, 25),
        new Product('Dishwasher', 'GE', 'DW001', 'Dishwasher', 37, 5, 299, 375, 25),
        new Product('Dishwasher', 'Bosch', 'DW002', 'Dishwasher', 9, 3, 599, 899, 25),
        new Product('Dishwasher', 'Bosch', 'DW003', 'Dishwasher', 21, 3, 499, 739, 25),
        new Product('Washer', 'Bosch', 'LW001', 'Laundry Washer', 16, 3, 579, 799, 25),
        new Product('Dryer', 'Bosch', 'LD001', 'Laundry Dryer', 18, 3, 399, 579, 25),
        new Product('Refrigerator', 'Sub-ZerO', 'REF001', 'Built-in Refrigerator - 48"', 13, 2, 2799, 3850, 125),
        new Product('Refrigerator', 'Sub-Zero', 'REF002', 'Built-in Refrigerator - 42"', 15, 1, 2499, 3450, 125),
        new Product('Wine', 'Sub-Zero', 'WC001', 'Built-in Wine Cooler - under counter', 13, 1, 399, 599, 25),
        new Product('Range', 'Viking', 'GR001', '24" Professional Gas Range SS', 15, 3, 3295, 3995, 125),
        new Product('Coffee', 'Miele', 'CS001', 'Built-in Coffee System', 7, 1, 1499, 2059, 25),
        new Product('Oven', 'Miele', 'OV001', 'Double Wall Oven', 16, 3, 2399, 3750, 125),
        new Product('Cooktop', 'Jenn-Air', 'CT001', '48" Prostyle Downdraft Cooktop', 32, 3, 1499, 2059, 125),
        new Product('Cooktop', 'Jenn-Air', 'CT002', 'Double Electric Cooktop', 33, 4, 699, 959, 25),
        new Product('Cooktop', 'Jenn-Air', 'CT003', '45" Downdraft Cooktop', 12, 1, 899, 1489, 25),
        new Product('Range', 'Thermador', 'CR001', 'Black Free Stand Convection Range', 17, 2, 1799, 2479, 125),
        new Product('Range', 'Thermador', 'CR002', 'Stainless 30" Free Convection Range', 19, 2, 1719, 2359, 125),
        new Product('Refrigerator', 'Amana', 'REF003', 'SS Side-by-Side Refrigerator', 22, 2, 1249, 1959, 125),
        new Product('Refrigerator', 'Amana', 'REF004', 'BL Side-by-Side Refrigerator', 19, 1, 1049, 1669, 125),
        new Product('Refrigerator', 'Amana', 'REF005', 'SS Side-by-Side Refrigerator', 12, 2, 1495, 2219, 125),
        new Product('Disposal', 'Insinkerator', 'DIS001', 'In-Sink Disposer', 57, 3, 129, 229, 25),
        new Product('Disposal', 'Insinkerator', 'DIS002', 'In-Sink Disposer', 38, 2, 49, 99.95, 25),
        new Product('Disposal', 'Insinkerator', 'DIS003', 'In-Sink Disposer for Septic System', 62, 2, 99, 199.95, 25),
        new Product('Wine', 'U-Line', 'WC002', 'Wine Captain 75 Bottle - SS', 7, 1, 699, 999, 25),
        new Product('Wine', 'U-Line', 'WC003', 'Wine Captain 75 Bottle - Black', 13, 1, 599, 889, 25),
        new Product('Icemaker', 'U-Line', 'ICE001', 'Icemaker - Black', 9, 1, 499, 798, 25),
        new Product('Microwave', 'GE', 'MW003', 'Microwave - SS', 22, 1, 179, 239, 25),
        new Product('Range', 'Dacor', 'FR001', 'Range - 36" Pro Dual-Fuel', 14, 1, 4395, 6949, 125),
        new Product('Range', 'Dacor', 'SR001', 'Heritage 30" Stainless Range', 10, 1, 2589, 3999, 125),
        new Product('Range', 'Dacor', 'SR002', 'Renaissance 36" Stainless Range', 11, 1, 3899, 5498, 125),
        new Product('Oven', 'Dacor', 'OV002', '27" Heritage Collection Wall Oven', 31, 1, 2950, 4019, 125),
        new Product('Oven', 'Dacor', 'OV003', '30" Heritage Collection Pro Style Double Oven', 42, 1, 3985, 5399, 125)
    );
    displayInv();
    createCustomers();
    createSales();
}

function displayInv() {
    $('#invBody').empty();
    for (let i = 0; i < invArr.length; i++) {
        $('#invBody').append('<tr><td>' + invArr[i].id + '</td><td>' + invArr[i].type + '</td><td>' + invArr[i].brand + '</td><td>' + invArr[i].description + '</td><td>' + invArr[i].sold + '</td><td>' + invArr[i].onHand + '</td><td>' + convUSD.format(invArr[i].cost) + '</td><td>' + convUSD.format(invArr[i].listPrice) + '</td><td>' + convUSD.format(invArr[i].delivery) + '</td></tr>');
    }
}

function sortAsc() {
    for (let i = 0; i < invArr.length; i++) {
        for (let j = 0; j < invArr.length; j++) {
            if (i == j) continue;
            if (invArr[i].temp < invArr[j].temp) {
                let temp = invArr[i];
                invArr[i] = invArr[j];
                invArr[j] = temp;
            }
        }
    }
    displayInv();
}

function sortDes() {
    for (let i = 0; i < invArr.length; i++) {
        for (let j = 0; j < invArr.length; j++) {
            if (invArr[i].temp > invArr[j].temp) {
                let temp = invArr[i];
                invArr[i] = invArr[j];
                invArr[j] = temp;
            }
        }
    }
    displayInv();
}



//Customers--------------------------------------------------------------------------------------

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
    }
}

function createCustomers() {
    customersArr.push(
        new Customer(1, 'Abercrombie', 'Kim', 'B', '1226 Shoe St.', 'Scottsdale', 'AZ', 85256, 'Full Kitchen Remodel'),
        new Customer(2, 'Abolrous', 'Hazem', 'E', '1399 Firestone Drive', 'Yuma', 'AZ', 85364, 'Bath Retile'),
        new Customer(3, 'Adams', 'Angel', 'C', '6872 Thornwood Dr.', 'Yuma', 'AZ', 85364, 'Refrigerator SZ680 <br />Range VGIC-24'),
        new Customer(4, 'Adams', 'Edward', 'C', '10203 Acorn Avenue', 'Yuma', 'AZ', 85364, 'Kitchen and Bath Granite Countertops'),
        new Customer(5, 'Adams', 'Gabriella', 'K', '1902 Santa Cruz', 'Yuma', 'AZ', 85364, 'Microwave JVM136C<br />Washer WFL 2060<br />Dryer WTA 3510'),
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



//Sales
var salesArr = [];
var datesArr = [];

class Sale {
    constructor(invoice, date, custID, emplID, desc, cost, price) {
        this.invoice = invoice;
        this.date = date;
        this.custID = custID;
        this.emplID = emplID;
        this.desc = desc;
        this.cost = cost;
        this.price = price;
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

        $('#salesBody').append('<tr><td>' + arr[i].invoice + '</td><td>' + date + '</td><td>' + arr[i].custID + '</td><td>' + arr[i].emplID + '</td><td class="text-capitalize">' + arr[i].desc + '</td><td>' + convUSD.format(arr[i].cost) + '</td><td>' + convUSD.format(arr[i].price) + '</td></tr>');
    }
}

function resetDates() {
    displaySales(salesArr);
    $('#startDate').val('');
    $('#endDate').val('');
    $('#errorMessage').html('');
}