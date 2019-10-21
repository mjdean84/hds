var type = false;
var brand = false;
var model = false;
var serial = false;
var desc = false;
var cost = false;
var price = false;

function setFalse() {
    type = false;
    brand = false;
    model = false;
    serial = false;
    desc = false;
    cost = false;
    price = false;
}

//Inventory Clicks
$(document).ready(function () {
    //Search Input
    $('#searchInput').on('keyup', function () {
        let value = $(this).val().toLowerCase();
        $('#invBody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        $('#clientsBody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        $('#salesBody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
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

    //Model
    $('#modelHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].model;
        }
        if (model == false) {
            sortAsc();
            setFalse();
            model = true;
            toggleClass('#modelIcon', 'down');
        } else {
            sortDes();
            model = false;
            toggleClass('#modelIcon', 'up');
        }
    });

    //Serial
    $('#serialHead').click(function () {
        for (let i = 0; i < invArr.length; i++) {
            invArr[i].temp = invArr[i].serial;
        }
        if (serial == false) {
            sortAsc();
            setFalse();
            serial = true;
            toggleClass('#serialIcon', 'down');
        } else {
            sortDes();
            serial = false;
            toggleClass('#serialIcon', 'up');
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
});

//Toggle Icon Classes
function toggleClass(icon, dir) {
    $('#typeIcon').removeClass();
    $('#brandIcon').removeClass();
    $('#modelIcon').removeClass();
    $('#serialIcon').removeClass();
    $('#descIcon').removeClass();
    $('#costIcon').removeClass();
    $('#priceIcon').removeClass();
    $(icon).addClass('fa fa-angle-' + dir);
}


//Convert to Currency
var invArr = [];
var convUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


//Inventory
class Product {
    constructor(type, brand, model, serial, description, cost, listPrice) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.serial = serial;
        this.description = description;
        this.cost = cost;
        this.listPrice = listPrice;
        this.temp;
    }
}

function createInv() {
    invArr.push(
        new Product('Microwave', 'GE', 'JVM136C', '10225688', 'Over-the-Range Microwave', 355, 499),
        new Product('Microwave', 'GE', 'JVM136B', '10255688', 'Over-the-Range Microwave', 325, 429),
        new Product('Microwave', 'GE', 'JVM136B', '10255687', 'Over-the-Range Microwave', 325, 429),
        new Product('Dishwasher', 'GE', 'GSD2600', '10899455', 'Dishwasher', 299, 375),
        new Product('Dishwasher', 'GE', 'GSD2600', '10899456', 'Dishwasher', 299, 375),
        new Product('Dishwasher', 'GE', 'GSD2600', '10899457', 'Dishwasher', 299, 375),
        new Product('Dishwasher', 'GE', 'GSD2600', '10899458', 'Dishwasher', 299, 375),
        new Product('Dishwasher', 'GE', 'GSD2600', '10899459', 'Dishwasher', 299, 375),
        new Product('Dishwasher', 'Bosch', 'SHY99A0x', '58344566', 'Dishwasher', 599, 899),
        new Product('Dishwasher', 'Bosch', 'SHY99A0x', '58344544', 'Dishwasher', 599, 899),
        new Product('Dishwasher', 'Bosch', 'SHY99A0x', '58344533', 'Dishwasher', 599, 899),
        new Product('Dishwasher', 'Bosch', 'SHU33A0X', '56799922', 'Dishwasher', 499, 739),
        new Product('Dishwasher', 'Bosch', 'SHU33A0X', '56799924', 'Dishwasher', 499, 739),
        new Product('Dishwasher', 'Bosch', 'SHU33A0X', '56799926', 'Dishwasher', 499, 739),
        new Product('Washer', 'Bosch', 'WFL 2060', '98752454', 'Laundry Washer', 579, 799),
        new Product('Washer', 'Bosch', 'WFL 2060', '98752459', 'Laundry Washer', 579, 799),
        new Product('Washer', 'Bosch', 'WFL 2060', '98752469', 'Laundry Washer', 579, 799),
        new Product('Dryer', 'Bosch', 'WTA 3510', '97522146', 'Laundry Dryer', 399, 579),
        new Product('Dryer', 'Bosch', 'WTA 3510', '97522149', 'Laundry Dryer', 399, 579),
        new Product('Dryer', 'Bosch', 'WTA 3510', '97522167', 'Laundry Dryer', 399, 579),
        new Product('Refrigerator', 'Sub-Zero', 'SZ632', '14825844', 'Built-in Refrigerator - 48"', 2799, 3850),
        new Product('Refrigerator', 'Sub-Zero', 'SZ632', '14825848', 'Built-in Refrigerator - 48"', 2799, 3850),
        new Product('Refrigerator', 'Sub-Zero', 'SZ680', '14556688', 'Built-in Refrigerator - 42"', 2499, 3450),
        new Product('Wine', 'Sub-Zero', 'SZ424/S', '25544886', 'Built-in Wine Cooler - under counter', 399, 599),
        new Product('Range', 'Viking', 'VGIC-24', '95778966', '24" Professional Gas Range SS', 3295, 3995),
        new Product('Range', 'Viking', 'VGIC-24', '95778998', '24" Professional Gas Range SS', 3295, 3995),
        new Product('Range', 'Viking', 'VGIC-24', '95778983', '24" Professional Gas Range SS', 3295, 3995),
        new Product('Coffee', 'Miele', 'CVA615', '10897781', 'Built-in Coffee System', 1499, 2059),
        new Product('Oven', 'Miele', 'H398BP2', '10755389', 'Double Wall Oven', 2399, 3750),
        new Product('Oven', 'Miele', 'H398BP2', '10755880', 'Double Wall Oven', 2399, 3750),
        new Product('Oven', 'Miele', 'H398BP2', '10757078', 'Double Wall Oven', 2399, 3750),
        new Product('Cooktop', 'Jenn-Air', 'JGD8348B', '34981101', '48" Prostyle Downdraft Cooktop', 1499, 2059),
        new Product('Cooktop', 'Jenn-Air', 'JGD8348B', '34981115', '48" Prostyle Downdraft Cooktop', 1499, 2059),
        new Product('Cooktop', 'Jenn-Air', 'JGD8348B', '34981137', '48" Prostyle Downdraft Cooktop', 1499, 2059),
        new Product('Cooktop', 'Jenn-Air', 'CVEX4270', '34987109', 'Double Electric Cooktop', 699, 959),
        new Product('Cooktop', 'Jenn-Air', 'CVEX4270', '34987131', 'Double Electric Cooktop', 699, 959),
        new Product('Cooktop', 'Jenn-Air', 'CVEX4270', '34987166', 'Double Electric Cooktop', 699, 959),
        new Product('Cooktop', 'Jenn-Air', 'CVEX4270', '34987189', 'Double Electric Cooktop', 699, 959),
        new Product('Cooktop', 'Jenn-Air', 'JGD8345A', '34986911', '45" Downdraft Cooktop', 899, 1489),
        new Product('Range', 'Thermador', 'RDFS30QB', '28946653', 'Black Free Stand Convection Range', 1799, 2479),
        new Product('Range', 'Thermador', 'RDFS30QB', '28946659', 'Black Free Stand Convection Range', 1799, 2479),
        new Product('Range', 'Thermador', 'RDFS30QB', '28946667', 'Stainless 30" Free Convection Range', 1719, 2359),
        new Product('Range', 'Thermador', 'RDFS30QB', '28946678', 'Stainless 30" Free Convection Range', 1719, 2359),
        new Product('Refrigerator', 'Amana', 'ARSE665B', '05897125', 'SS Side-by-Side Refrigerator', 1249, 1959),
        new Product('Refrigerator', 'Amana', 'ARSE665B', '05897134', 'SS Side-by-Side Refrigerator', 1249, 1959),
        new Product('Refrigerator', 'Amana', 'ARSE665B', '05897167', 'BL Side-by-Side Refrigerator', 1049, 1669),
        new Product('Refrigerator', 'Amana', 'ACD2238H', '05789661', 'SS Side-by-Side Refrigerator', 1495, 2219),
        new Product('Refrigerator', 'Amana', 'ACD2238H', '05789690', 'SS Side-by-Side Refrigerator', 1495, 2219),
        new Product('Disposal', 'Insinkerator', '777ss', '55124789', 'In-Sink Disposer', 129, 229),
        new Product('Disposal', 'Insinkerator', '777ss', '55124791', 'In-Sink Disposer', 129, 229),
        new Product('Disposal', 'Insinkerator', '777ss', '55124799', 'In-Sink Disposer', 129, 229),
        new Product('Disposal', 'Insinkerator', 'Badger5', '55247891', 'In-Sink Disposer', 49, 99.95),
        new Product('Disposal', 'Insinkerator', 'Badger5', '55247912', 'In-Sink Disposer', 49, 99.95),
        new Product('Disposal', 'Insinkerator', 'Septic120', '55347925', 'In-Sink Disposer for Septic System', 99, 199.95),
        new Product('Disposal', 'Insinkerator', 'Septic120', '55347937', 'In-Sink Disposer for Septic System', 99, 199.95),
        new Product('Wine', 'U-Line', '75wc', '67555211', 'Wine Captain 75 Bottle - SS', 699, 999),
        new Product('Wine', 'U-Line', '75wc', '67555237', 'Wine Captain 75 Bottle - Black', 599, 889),
        new Product('Icemaker', 'U-Line', 'B198', '67455891', 'Icemaker - Black', 499, 798),
        new Product('Microwave', 'GE', 'JE2160SF', '15784991', 'Microwave - SS', 179, 239),
        new Product('Range', 'Dacor', 'DOP36M94', '87599365', 'Range - 36" Pro Dual-Fuel', 4395, 6949),
        new Product('Range', 'Dacor', 'HGER30SNG', '87569821', 'Heritage 30" Stainless Range', 2589, 3999),
        new Product('Range', 'Dacor', 'RNRP36GS', '87589209', 'Renaissance 36" Stainless Range', 3899, 5498),
        new Product('Oven', 'Dacor', 'HWO127PS', '98562234', '27" Heritage Collection Wall Oven', 2950, 4019),
        new Product('Oven', 'Dacor', 'HWO230PS', '98561257', '30" Heritage Collection Pro Style Double Oven', 3985, 5399)
    );
    displayInv();
    createClients();
    createSales();
}

function displayInv() {
    $('#invBody').empty();
    for (let i = 0; i < invArr.length; i++) {
        $('#invBody').append('<tr><td>' + invArr[i].type + '</td><td>' + invArr[i].brand + '</td><td>' + invArr[i].model + '</td><td>' + invArr[i].serial + '</td><td>' + invArr[i].description + '</td><td>' + convUSD.format(invArr[i].cost) + '</td><td>' + convUSD.format(invArr[i].listPrice) + '</td></tr>');
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



//Clients

var clientsArr = [];

class Client {
    constructor(id, lName, fName, mInit, address, city, state, zip) {
        this.id = id;
        this.lName = lName;
        this.fName = fName;
        this.mInit = mInit;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

function createClients() {
    clientsArr.push(
        new Client(1, 'Abercrombie', 'Kim', 'B', '1226 Shoe St.', 'Scottsdale', 'AZ', 85256),
        new Client(2, 'Abolrous', 'Hazem', 'E', '1399 Firestone Drive', 'Yuma', 'AZ', 85364),
        new Client(3, 'Adams', 'Angel', 'C', '6872 Thornwood Dr.', 'Yuma', 'AZ', 85364),
        new Client(4, 'Adams', 'Edward', 'C', '10203 Acorn Avenue', 'Yuma', 'AZ', 85364),
        new Client(5, 'Adams', 'Gabriella', 'K', '1902 Santa Cruz', 'Yuma', 'AZ', 85364),
        new Client(6, 'Adams', 'Jason', 'C', '1285 Greenbrier Street', 'Yuma', 'AZ', 85364),
        new Client(7, 'Adams', 'Kaitlyn', 'A', '1356 Grove Way', 'Phoenix', 'AZ', 85004),
        new Client(8, 'Adams', 'Robert', 'Q', '1411 RaAZh Drive', 'Phoenix', 'AZ', 85004),
        new Client(9, 'Adams', 'Thomas', 'C', '1220 Bradford Way', 'Phoenix', 'AZ', 85004),
        new Client(10, 'Akers', 'Kim', 'C', '1619 Stillman Court', 'Phoenix', 'AZ', 85004)
    );
    displayClients();
}

function displayClients() {
    $('#clientsBody').empty();
    for (let i = 0; i < clientsArr.length; i++) {
        $('#clientsBody').append('<tr><td>' + clientsArr[i].id + '</td><td>' + clientsArr[i].lName + '</td><td>' + clientsArr[i].fName + '</td><td>' + clientsArr[i].mInit + '</td><td>' + clientsArr[i].address + '</td><td>' + clientsArr[i].city + '</td><td>' + clientsArr[i].state + '</td><td>' + clientsArr[i].zip + '</td></tr>');
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
