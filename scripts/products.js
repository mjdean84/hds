//Sorting
let id = false;
let type = false;
let brand = false;
let desc = false;
let sold = false;
let onHand = false;
let cost = false;
let price = false;
let delivery = false;

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

//Sorting Clicks
$(document).ready(function () {
    //Search Input
    $('#searchInput').on('keyup', function () {
        let value = $(this).val().toLowerCase();
        $('#invBody tr').filter(function () {
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


//Convert to Currency
var invArr = [];
var convUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
