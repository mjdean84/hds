
function checkPassword() {
    let password = document.getElementById('password').value;

    if (password == 'password') {
        $('#resources').slideToggle();
        $('#login').css('display', 'none');
        alert('The database will be demonstrated locally')
    } else {
        alert('The password is "password"');
    }
}

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

var clients = [];


