
$(document).ready(function () {
    $('#kitchenBtn').click(function () {
        $('#heading').slideToggle();
        $('#kitchen').slideToggle();
    })
    $('#bathBtn').click(function () {
        $('#heading').slideToggle();
        $('#bath').slideToggle();
    })
    $('#topKitchen').click(function () {
        $('#kitchen').slideToggle();
        $('#heading').slideToggle();
    })
    $('#topBath').click(function () {
        $('#bath').slideToggle();
        $('#heading').slideToggle();
    })

    //Arrow Clicks
    //kSinks
    $('#kSinksLeft').click(function () {
        kitchenSinksIndex = kitchenSinksIndex - 6;
        if (kitchenSinksIndex < 0) {
            kitchenSinksIndex = kitchenSinks.length + kitchenSinksIndex;
        }
        if (kitchenSinksIndex == kitchenSinks.length) {
            kitchenSinksIndex = 0;
        }
        scrollLeft(kitchenSinks, kitchenSinksIndex, 'kSink');
        kitchenSinksIndex = kitchenSinksIndex + 3;
    })
    $('#kSinksRight').click(function () {
        if (kitchenSinksIndex == kitchenSinks.length) {
            kitchenSinksIndex = 0;
        }
        scrollRight(kitchenSinks, kitchenSinksIndex, 'kSink');
        kitchenSinksIndex = kitchenSinksIndex + 3;
    })

    //kFaucets
    $('#kFaucetsLeft').click(function () {
        kitchenFaucetsIndex = kitchenFaucetsIndex - 6;
        if (kitchenFaucetsIndex < 0) {
            kitchenFaucetsIndex = kitchenFaucets.length + kitchenFaucetsIndex;
        }
        if (kitchenFaucetsIndex == kitchenFaucets.length) {
            kitchenFaucetsIndex = 0;
        }
        scrollLeft(kitchenFaucets, kitchenFaucetsIndex, 'kFaucet');
        kitchenFaucetsIndex = kitchenFaucetsIndex + 3;
    })
    $('#kFaucetsRight').click(function () {
        if (kitchenFaucetsIndex == kitchenFaucets.length) {
            kitchenFaucetsIndex = 0;
        }
        scrollRight(kitchenFaucets, kitchenFaucetsIndex, 'kFaucet');
        kitchenFaucetsIndex = kitchenFaucetsIndex + 3;
    })

    //bSinks
    $('#bSinksLeft').click(function () {
        bathSinksIndex = bathSinksIndex - 6;
        if (bathSinksIndex < 0) {
            bathSinksIndex = bathSinks.length + bathSinksIndex;
        }
        if (bathSinksIndex == bathSinks.length) {
            bathSinksIndex = 0;
        }
        scrollLeft(bathSinks, bathSinksIndex, 'bSink');
        bathSinksIndex = bathSinksIndex + 3;
    })
    $('#bSinksRight').click(function () {
        if (bathSinksIndex == bathSinks.length) {
            bathSinksIndex = 0;
        }
        scrollRight(bathSinks, bathSinksIndex, 'bSink');
        bathSinksIndex = bathSinksIndex + 3;
    })

    //bFaucets
    $('#bFaucetsLeft').click(function () {
        bathFaucetsIndex = bathFaucetsIndex - 6;
        if (bathFaucetsIndex < 0) {
            bathFaucetsIndex = bathFaucets.length + bathFaucetsIndex;
        }
        if (bathFaucetsIndex == bathFaucets.length) {
            bathFaucetsIndex = 0;
        }
        scrollLeft(bathFaucets, bathFaucetsIndex, 'bFaucet');
        bathFaucetsIndex = bathFaucetsIndex + 3;
    })
    $('#bFaucetsRight').click(function () {
        if (bathFaucetsIndex == bathFaucets.length) {
            bathFaucetsIndex = 0;
        }
        scrollRight(bathFaucets, bathFaucetsIndex, 'bFaucet');
        bathFaucetsIndex = bathFaucetsIndex + 3;
    })
})

var kitchenSinks = [];
var kitchenFaucets = [];
var bathSinks = [];
var bathFaucets = [];

var kitchenSinksIndex = 3;
var kitchenFaucetsIndex = 3;
var bathSinksIndex = 3;
var bathFaucetsIndex = 3;

class Product {
    constructor(brand, type, desc, model, img, price) {
        this.brand = brand;
        this.type = type;
        this.desc = desc;
        this.model = model;
        this.img = img;
        this.price = price;
    }
}

function createProducts() {
    kitchenSinks.push(
        new Product('Sinkster', 'Kitchen Sink', 'Sink with mini-divider', 'SNK110', 'images/plumbing/kitchen/sink_divider.jpg', 350),
        new Product('DrainMe', 'Kitchen Sink', 'Copper sink', 'DM889', 'images/plumbing/kitchen/sink_copper.jpg', 500),
        new Product('VRC', 'Kitchen Sink', 'Sink with drainer', 'VRC22', 'images/plumbing/kitchen/sink_drainer.jpg', 500),
        new Product('Ruvati', 'Kitchen Sink', '45" work sink', 'RVH8333', 'images/plumbing/kitchen/sink_inserts.jpg', 799),
        new Product('Sinkster', 'Kitchen Sink', 'Multi-level sink', 'SNK123', 'images/plumbing/kitchen/sink_levels.jpg', 499),
        new Product('Copper Head', 'Kitchen Sink', 'Copper with floral design', 'CH123', 'images/plumbing/kitchen/sink_copper_design.jpg', 750)
    );
    kitchenFaucets.push(
        new Product('Vetter', 'Kitchen Faucet', 'Victorian style faucet with secondary sprayer', 'VET789', 'images/plumbing/kitchen/faucet_victorian.jpg', 125),
        new Product('Copper Head', 'Kitchen Faucet', 'Victorian style lifted faucet', 'CH99', 'images/plumbing/kitchen/faucet_stilts.jpg', 80),
        new Product('Sprayer', 'Kitchen Faucet', 'Modern faucet with pull out sprayer', 'SPR555', 'images/plumbing/kitchen/faucet_pull_spray.jpg', 125),
        new Product('Hosers', 'Kitchen Faucet', 'Black faucet with pull out sprayer', 'HO987', 'images/plumbing/kitchen/faucet_black_pull.jpg', 125),
        new Product('Sprayer', 'Kitchen Faucet', 'Pull down faucet with swivel', 'SPR666', 'images/plumbing/kitchen/faucet_slinky.jpg', 225),
        new Product('GE', 'Kitchen Faucet', 'Square faucet with pull out', 'GE01X', 'images/plumbing/kitchen/faucet_square_pull.jpg', 130)
    );
    bathSinks.push(
        new Product('Water Crafters', 'Bathroom Sink', 'Double-wide black sink', 'WCDW1', 'images/plumbing/bath/sink_black_double.jpg', 350),
        new Product('Custom Flow', 'Bathroom Sink', 'Handcrafted brown sink', 'CF01', 'images/plumbing/bath/sink_brown.jpg', 225),
        new Product('Copper Head', 'Bathroom Sink', 'His and hers copper sinks', 'CH101', 'images/plumbing/bath/sink_copper.jpg', 575),
        new Product('Shiners', 'Bathroom Sink', 'Above ground glass sink', 'SH88', 'images/plumbing/bath/sink_glass.jpg', 221),
        new Product('Custom Flow', 'Bathroom Sink', 'Set in black sink', 'CF23M', 'images/plumbing/bath/sink_black_above.jpg', 185),
        new Product('Classico', 'Bathroom Sink', 'Classic rectangular sink', 'CLA22', 'images/plumbing/bath/sink_square.jpg', 145)
    )
    bathFaucets.push(
        new Product('Classico', 'Bathroom Sink', 'Black faucet with gold trim', 'CL32', 'images/plumbing/bath/faucet_black.jpg', 82),
        new Product('Flat Iron', 'Bathroom Sink', 'Chrome waterfall faucet', 'FI128', 'images/plumbing/bath/faucet_chrome_waterfall.jpg', 120),
        new Product('Twisted', 'Bathroom Sink', 'Spiral lever faucet', 'TW78', 'images/plumbing/bath/faucet_curved_levers.jpg', 140),
        new Product('Flat Iron', 'Bathroom Sink', 'Fountain flow faucet', 'FI129', 'images/plumbing/bath/faucet_fountain.jpg', 90),
        new Product('Wash Top', 'Bathroom Sink', 'Classic bronze faucet', 'WTXO', 'images/plumbing/bath/faucet_hook.jpg', 60),
        new Product('Flat Iron', 'Bathroom Sink', 'Square topped waterfall faucet', 'FI130', 'images/plumbing/bath/faucet_square.jpg', 120)
    )
}

function sinksRight() {
    let index;
    let image;
    let brand;
    let desc;
    let model;

    for (let i = 0; i < 3; i++) {
        if (sinkIndex == kitchenSinks.length) {
            sinkIndex = 0;
        }
        index = i + 1;
        image = '.sinkImg' + index;
        brand = '.sinkBrand' + index;
        desc = '.sinkDesc' + index;
        model = '.sinkModel' + index;

        $(image).attr('src', kitchenSinks[sinkIndex].img);
        $(brand).html(kitchenSinks[sinkIndex].brand);
        $(desc).html(kitchenSinks[sinkIndex].desc);
        $(model).html(kitchenSinks[sinkIndex].model);
        sinkIndex++;
    }
}

function sinksLeft() {
    let index;
    let image;
    let brand;
    let desc;
    let model;

    sinkIndex = sinkIndex - 6;
    if (sinkIndex < 0) {
        sinkIndex = kitchenSinks.length + sinkIndex;
    }

    for (let i = 0; i < 3; i++) {
        if (sinkIndex == kitchenSinks.length) {
            sinkIndex = 0;
        }
        index = i + 1;
        image = '.sinkImg' + index;
        brand = '.sinkBrand' + index;
        desc = '.sinkDesc' + index;
        model = '.sinkModel' + index;

        $(image).attr('src', kitchenSinks[sinkIndex].img);
        $(brand).html(kitchenSinks[sinkIndex].brand);
        $(desc).html(kitchenSinks[sinkIndex].desc);
        $(model).html(kitchenSinks[sinkIndex].model);
        sinkIndex++;
    }
}

function faucetsRight() {
    let index;
    let image;
    let brand;
    let desc;
    let model;

    for (let i = 0; i < 3; i++) {
        if (faucetIndex == kitchenFaucets.length) {
            faucetIndex = 0;
        }
        index = i + 1;
        image = '.faucetImg' + index;
        brand = '.faucetBrand' + index;
        desc = '.faucetDesc' + index;
        model = '.faucetModel' + index;

        $(image).attr('src', kitchenFaucets[faucetIndex].img);
        $(brand).html(kitchenFaucets[faucetIndex].brand);
        $(desc).html(kitchenFaucets[faucetIndex].desc);
        $(model).html(kitchenFaucets[faucetIndex].model);
        faucetIndex++;
    }
}

function faucetsLeft() {
    let index;
    let image;
    let brand;
    let desc;
    let model;

    faucetIndex = faucetIndex - 6;
    if (faucetIndex < 0) {
        faucetIndex = kitchenFaucets.length + faucetIndex;
    }

    for (let i = 0; i < 3; i++) {
        if (faucetIndex == kitchenFaucets.length) {
            faucetIndex = 0;
        }
        index = i + 1;
        image = '.faucetImg' + index;
        brand = '.faucetBrand' + index;
        desc = '.faucetDesc' + index;
        model = '.faucetModel' + index;

        $(image).attr('src', kitchenFaucets[faucetIndex].img);
        $(brand).html(kitchenFaucets[faucetIndex].brand);
        $(desc).html(kitchenFaucets[faucetIndex].desc);
        $(model).html(kitchenFaucets[faucetIndex].model);
        faucetIndex++;
    }
}

function scrollLeft(arr, arrIndex, type) {
    let index;
    let image;
    let brand;
    let desc;
    let model;

    for (let i = 0; i < 3; i++) {
        if (arrIndex == arr.length) {
            arrIndex = 0;
        }
        index = i + 1;
        image = '.' + type + 'Img' + index;
        brand = '.' + type + 'Brand' + index;
        desc = '.' + type + 'Desc' + index;
        model = '.' + type + 'Model' + index;

        $(image).attr('src', arr[arrIndex].img);
        $(brand).html(arr[arrIndex].brand);
        $(desc).html(arr[arrIndex].desc);
        $(model).html(arr[arrIndex].model);
        arrIndex++;
    }
}

function scrollRight(arr, arrIndex, type) {
    let index;
    let image;
    let brand;
    let desc;
    let model;

    for (let i = 0; i < 3; i++) {
        if (arrIndex == arr.length) {
            arrIndex = 0;
        }
        index = i + 1;
        image = '.' + type + 'Img' + index;
        brand = '.' + type + 'Brand' + index;
        desc = '.' + type + 'Desc' + index;
        model = '.' + type + 'Model' + index;

        $(image).attr('src', arr[arrIndex].img);
        $(brand).html(arr[arrIndex].brand);
        $(desc).html(arr[arrIndex].desc);
        $(model).html(arr[arrIndex].model);
        arrIndex++;
    }
} 
