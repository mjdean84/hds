$(document).ready(function () {
    $('select').change(function () {
        displayProducts();
    })
    $('#type-filter-head').click(function () {
        if ($('#type-filter-head').html() == 'Product Types +')
            $('#type-filter-head').html('Product Types -');
        else $('#type-filter-head').html('Product Types +')
        $('#type-filter').slideToggle('slow');
    })
    $('#brand-filter-head').click(function () {
        if ($('#brand-filter-head').html() == 'Brand Names +')
            $('#brand-filter-head').html('Brand Names -');
        else $('#brand-filter-head').html('Brand Names +')
        $('#brand-filter').slideToggle('slow');
    })
    $('#all-types').click(function () {
        $('.type').prop('checked', false);
    })
    $('.type').click(function () {
        $('#all-types').prop('checked', false);
    })
    $('#all-brands').click(function () {
        $('.brand').prop('checked', false);
    })
    $('.brand').click(function () {
        $('#all-brands').prop('checked', false);
    })
})


var productArr = [];
var tempArr = [];

class Product{
    constructor(type, brand, model, description, cost, listPrice, image) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.description = description;
        this.cost = cost;
        this.listPrice = listPrice;
        this.image = image;
        this.temp;
    }
}

function createProducts() {
    productArr.length = 0;
    productArr.push(
        new Product('Microwave', 'GE', 'JVM136C', 'Over-the-Range Microwave', 355, 499, 'images/appliances/ge_jvm136c.jpg'),
        new Product('Microwave', 'GE', 'JVM136B', 'Over-the-Range Microwave', 325, 429, 'images/appliances/ge_jvm136b.jpg'),
        new Product('Dishwasher', 'GE', 'GSD2600', 'Dishwasher', 299, 375, 'images/appliances/ge_gsd2600.jpg'),
        new Product('Dishwasher', 'Bosch', 'SHY99A0X', 'Dishwasher', 599, 899, 'images/appliances/bosch_shy99a0x.jpg'),
        new Product('Dishwasher', 'Bosch', 'SHU33A0X', 'Dishwasher', 499, 739, 'images/appliances/bosch_shu33a0x.jpg'),
        new Product('Washer', 'Bosch', 'WFL 2060', 'Laundry Washer', 579, 799, 'images/appliances/bosch_wfl2060.jpg'),
        new Product('Dryer', 'Bosch', 'WTA 3510', 'Laundry Dryer', 399, 579, 'images/appliances/bosch_dryer.jpg'),
        new Product('Refrigerator', 'Sub-Zero', 'SZ632', 'Built-in Refrigerator - 48"', 2799, 3850, 'images/appliances/subzero_sz632.png'),
        new Product('Refrigerator', 'Sub-Zero', 'SZ680', 'Built-in Refrigerator - 42"', 2499, 3450, 'images/appliances/subzero_sz680.png'),
        new Product('Wine', 'Sub-Zero', 'SZ424/S', 'Built-in Wine Cooler - under counter', 399, 599, 'images/appliances/subzero_sz424s.png'),
        new Product('Range', 'Viking', 'VGIC-24', '24" Professional Gas Range SS', 3295, 3995, 'images/appliances/viking_vgic24.jpg'),
        new Product('Coffee', 'Miele', 'CVA615', 'Built-in Coffee System', 1499, 2059, 'images/appliances/coffeeMaker.jpg'),
        new Product('Oven', 'Miele', 'H398BP2', 'Double Wall Oven', 2399, 3750, 'images/appliances/miele_double_wall_oven.png'),
        new Product('Cooktop', 'Jenn-Air', 'JGD8348B', '48" Prostyle Downdraft Cooktop', 1499, 2059, 'images/appliances/jennair_jgd8345b.png'),
        new Product('Cooktop', 'Jenn-Air', 'CVEX4270', 'Double Electric Cooktop', 699, 959, 'images/appliances/jennair_cvex4270.png'),
        new Product('Cooktop', 'Jenn-Air', 'JGD8345A', '45" Downdraft Cooktop', 899, 1489, 'images/appliances/jennair_jgd8345a.png'),
        new Product('Range', 'Thermador', 'RDFS30QB', 'Black Free Stand Convection Range', 1799, 2479, 'images/appliances/range.jpg'),
        new Product('Range', 'Thermador', 'RDFS30QB', 'Stainless 30" Free Convection Range', 1719, 2359, 'images/appliances/thermador_rdfs30qb.jpg'),
        new Product('Refrigerator', 'Amana', 'ARSE665B', 'SS Side-by-Side Refrigerator', 1249, 1959, 'images/appliances/amana_arse665b.png'),
        new Product('Refrigerator', 'Amana', 'ARSE665B', 'BL Side-by-Side Refrigerator', 1049, 1669, 'images/appliances/amana_arse665b_blk.jpg'),
        new Product('Refrigerator', 'Amana', 'ACD2238H', 'SS Side-by-Side Refrigerator', 1495, 2219, 'images/appliances/amana_acd2238h.jpg'),
        new Product('Disposal', 'Insinkerator', '777ss', 'In-Sink Disposer', 129, 229, 'images/appliances/insinkerator_777ss.jpg'),
        new Product('Disposal', 'Insinkerator', 'Badger5', 'In-Sink Disposer', 49, 99.95, 'images/appliances/insinkerator_badger5.jpg'),
        new Product('Disposal', 'Insinkerator', 'Septic120', 'In-Sink Disposer for Septic System', 99, 199.95, 'images/appliances/insinkerator_septic120.jpg'),
        new Product('Wine', 'U-Line', '75wc', 'Wine Captain 75 Bottle - SS', 699, 999, 'images/appliances/uline_75wc.png'),
        new Product('Wine', 'U-Line', '75wc', 'Wine Captain 75 Bottle - Black', 599, 889, 'images/appliances/uline_75wc_blk.jpg'),
        new Product('Icemaker', 'U-Line', 'B198', 'Icemaker - Black', 499, 798, 'images/appliances/uline_b198.png'),
        new Product('Microwave', 'GE', 'JE2160SF', 'Microwave - SS', 179, 239, 'images/appliances/ge_ss_microwave.jpg'),
        new Product('Range', 'Dacor', 'DOP36M94', 'Range - 36" Pro Dual-Fuel', 4395, 6949, 'images/appliances/dacor_dop36m94.png'),
        new Product('Range', 'Dacor', 'HGER30SNG', 'Heritage 30" Stainless Range', 2589, 3999, 'images/appliances/dacor_hger30sng.png'),
        new Product('Range', 'Dacor', 'RNRP36GS', 'Renaissance 36" Stainless Range', 3899, 5498.50, 'images/appliances/dacor_rnrp36gs.png'),
        new Product('Oven', 'Dacor', 'HWO127PS', '27" Heritage Collection Wall Oven', 2950, 4019, 'images/appliances/dacor_hwo127ps.png'),
        new Product('Oven', 'Dacor', 'HWO230PS', '30" Heritage Collection Pro Style Double Oven', 3985, 5399, 'images/appliances/dacor_hwo230ps.png')
    );
    for (let i = 0; i < productArr.length; i++) {
        productArr[i].popularity = i + 1;
    }
    displayProducts();
}

//Filters------------------------------------------------------------------

var typeArr = [];
var brandArr = [];


function typeFilter(type) {
    if (type == 'All Types')
        typeArr.length = 0;
    else if (typeArr.includes(type))
        for (let i = 0; i < typeArr.length; i++) {
            if (typeArr[i] == type)
                typeArr.splice(i, 1);
        }
    else
        typeArr.push(type);
    displayProducts();
}

function brandFilter(brand) {
    if (brand == 'All Brands')
        brandArr.length = 0;
    else if (brandArr.includes(brand))
        for (let i = 0; i < brandArr.length; i++) {
            if (brandArr[i] == brand)
                brandArr.splice(i, 1);
        }
    else
        brandArr.push(brand);
    displayProducts();
}

//------------------------------------------------------------------------------

//Convert to Currency
var invArr = [];
var convUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

function displayProducts() {
    $('#productList').empty();
    tempArr.length = 0;

    if (typeArr.length > 0) {
        for (let i = 0; i < productArr.length; i++) {
            if (typeArr.includes(productArr[i].type))
                tempArr.push(productArr[i]);
        }
    } else {
        for (let i = 0; i < productArr.length; i++) {
            tempArr.push(productArr[i]);
        }
        //Not working?
        $('#all-types').prop('checked', true);
    }

    if (brandArr.length > 0) {
        console.log(brandArr);
        for (let i = 0; i < tempArr.length; i++) {
            if (!brandArr.includes(tempArr[i].brand)) {
                tempArr.splice(i, 1);
                i--;
            }
        }
    } else {
        //Not working?
        $('#all-brands').prop('checked', true);
    }

    let sortBy = document.getElementById('sortSel').value;
    sortAppl(sortBy);

    let j = 1;
    let x = 1;
    for (let i = 0; i < tempArr.length; i++) {
        if (i > 0 && i % 4 == 0) j++;
        let row = '#row' + j;
        if (i % 4 == 0) {
            $('#productList').append('<div class="row mb-3" id="row' + j + '">');
        }

        let a = tempArr[i];
        let image = a.image;
        let listPrice = convUSD.format(a.listPrice);
        let brand = a.brand;
        let model = a.model;
        let desc = a.description;

        let id = 'prod' + x;
        let prodId = '#' + id;

        $(row).append('<div class="col-sm-6 col-lg-3 product shadow" id="' + id + '" data-toggle="modal" data-target="#modal' + x + '"></div>');
        $(prodId).append('<img class= "img-fluid d-block mx-auto my-auto" src = "' + image + '" /><br /> <strong>' + brand + '</strong> <br />');
        $(prodId).append(desc + ' <br /> <i>' + model + '</i> <br /> <strong>' + listPrice + '</strong>');

        //Modal
        let modalId = '#modal' + x;
        $(row).append('<div class="modal fade" id="modal' + x + '" role="dialog"></div>');

        let dialogId = '#dialog' + x;
        $(modalId).append('<div class="modal-dialog" id="dialog' + x + '"></div>');

        let contentId = '#content' + x;
        $(dialogId).append('<div class="modal-content" id="content' + x + '"></div>');

        let headerId = '#header' + x;
        $(contentId).append('<div class="modal-header" id="header' + x + '"></div');
        $(headerId).append('<h3 class="modal-title">' + brand + '</h3><button type="button" class="close" data-dismiss="modal">&times;</button>');

        let bodyId = '#body' + x;
        $(contentId).append('<div class="modal-body" id="body' + x + '"></div>');
        $(bodyId).append('<img class="img-fluid mx-auto d-block" src="' + image + '" /><hr /><h4>' + desc + '</h4>Long Description<br /><i>' + model + '</i><br /><strong>' + listPrice + '</strong');

        x++;
    }
}


function sortAppl(sortBy) {
    if (sortBy.includes('price')) {
        for (let i = 0; i < tempArr.length; i++) {
            tempArr[i].temp = tempArr[i].listPrice;
        }
    }
    if (sortBy == 'priceLH') {
        sortAsc();
    }
    else if (sortBy == 'priceHL') {
        sortDes();
    }
    else if (sortBy == 'popular') {
        for (let i = 0; i < tempArr.length; i++) {
            tempArr[i].temp = tempArr[i].popularity;
        }
        sortAsc();
    }
    else if (sortBy == 'brand') {
        for (let i = 0; i < tempArr.length; i++) {
            tempArr[i].temp = tempArr[i].brand;
        }
        sortAsc();
    }
    else if (sortBy == 'type') {
        for (let i = 0; i < tempArr.length; i++) {
            tempArr[i].temp = tempArr[i].type;
        }
        sortAsc();
    }
}

function sortAsc() {
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr.length; j++) {
            if (i == j) continue;
            if (tempArr[i].temp < tempArr[j].temp) {
                let temp = tempArr[i];
                tempArr[i] = tempArr[j];
                tempArr[j] = temp;
            }
        }
    }
}

function sortDes() {
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr.length; j++) {
            if (tempArr[i].temp > tempArr[j].temp) {
                let temp = tempArr[i];
                tempArr[i] = tempArr[j];
                tempArr[j] = temp;
            }
        }
    }
}