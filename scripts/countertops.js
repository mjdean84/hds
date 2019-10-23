$(document).ready(function () {
    $('#quartzWhiteMarbled').click(function () {
        $('#quartzImg').attr('src', 'images/quartz_white_marbled.jpg');
        toggleActive('#quartzWhiteMarbled');
    });
    $('#quartzTaupe').click(function () {
        $('#quartzImg').attr('src', 'images/quartz_taupe.jpg');
        toggleActive('#quartzTaupe');
    });
})

function removeActive() {
    $('#quartzWhiteMarbled').removeClass('')
}

//Toggle Icon Classes
function toggleActive(id) {
    $('#quartzWhiteMarbled').removeClass('active text-white');
    $('#quartzTaupe').removeClass('active text-white');
    $('#modelIcon').removeClass();
    $('#serialIcon').removeClass();
    $('#descIcon').removeClass();
    $('#costIcon').removeClass();
    $('#priceIcon').removeClass();
    $(id).addClass('active text-white');
}