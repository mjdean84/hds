var img;
var width, height;
var fridge, microwave, oven, dish;
var fc3, fc4, mc1, mc3, mc4, oc1, oc2, oc3, oc4, dc1, dc2, dc3, dc4;

$(document).ready(function () {
    img = document.getElementById('kitchenImg');
    width = img.clientWidth;
    height = img.clientHeight;

    //Fridge Coordinates
    fc3 = width * 0.26;
    fc4 = height;
    fridge = '0, 0, ' + fc3 + "," + fc4 + "'";
    $('#fridgeArea').prop('coords', fridge);

    //Microwave Coords
    mc1 = width * 0.35;
    mc3 = width * 0.475;
    mc4 = height * 0.23;
    microwave = mc1 + ', 0, ' + mc3 + ', ' + mc4;
    $('#microwaveArea').prop('coords', microwave);

    //Oven Coords
    oc1 = width * 0.32;
    oc2 = height * 0.27;
    oc3 = width * 0.52;
    oc4 = height * 0.82;
    oven = oc1 + ', ' + oc2 + ', ' + oc3 + ', ' + oc4;
    $('#ovenArea').prop('coords', oven);

    //Dishwasher Coords
    dc1 = width * 0.675;
    dc2 = height * 0.36;
    dc3 = width * 0.78;
    dc4 = height * 0.72;
    dish = dc1 + ', ' + dc2 + ', ' + dc3 + ', ' + dc4;
    $('#dishArea').prop('coords', dish);
})


$(window).resize(function () {
    console.log('resize');
    width = img.clientWidth;
    height = img.clientHeight;

    //Fridge Coordinates
    fc3 = width * 0.26;
    fc4 = height;
    fridge = '0, 0, ' + fc3 + "," + fc4 + "'";
    $('#fridgeArea').prop('coords', fridge);

    //Microwave Coords
    mc1 = width * 0.35;
    mc3 = width * 0.475;
    mc4 = height * 0.23;
    microwave = mc1 + ', 0, ' + mc3 + ', ' + mc4;
    $('#microwaveArea').prop('coords', microwave);

    //Oven Coords
    oc1 = width * 0.32;
    oc2 = height * 0.27;
    oc3 = width * 0.52;
    oc4 = height * 0.82;
    oven = oc1 + ', ' + oc2 + ', ' + oc3 + ', ' + oc4;
    $('#ovenArea').prop('coords', oven);

    //Dishwasher Coords
    dc1 = width * 0.675;
    dc2 = height * 0.36;
    dc3 = width * 0.78;
    dc4 = height * 0.72;
    dish = dc1 + ', ' + dc2 + ', ' + dc3 + ', ' + dc4;
    $('#dishArea').prop('coords', dish);
})