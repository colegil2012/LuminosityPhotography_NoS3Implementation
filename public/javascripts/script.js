$('#gallery1Cover').hover(function () {
    $('#gallery1Overlay').slideDown("slow");
    $('#gallery1Cover img').animate({
        opacity: 0.6
    });
    }, function() {
    $('#gallery1Overlay').slideUp('slow');
    $('#gallery1Cover img').animate({
        opacity: 1
    });
});

$('#gallery2Cover').hover(function () {
    $('#gallery2Overlay').slideDown("slow");
    $('#gallery2Cover img').animate({
        opacity: 0.6
    });
}, function() {
    $('#gallery2Overlay').slideUp('slow');
    $('#gallery2Cover img').animate({
        opacity: 1
    });
});

$('#gallery3Cover').hover(function () {
    $('#gallery3Overlay').slideDown("slow");
    $('#gallery3Cover img').animate({
        opacity: 0.6
    });
}, function() {
    $('#gallery3Overlay').slideUp('slow');
    $('#gallery3Cover img').animate({
        opacity: 1
    });
});

$('#gallery4Cover').hover(function () {
    $('#gallery4Overlay').slideDown("slow");
    $('#gallery4Cover img').animate({
        opacity: 0.6
    });
}, function() {
    $('#gallery4Overlay').slideUp('slow');
    $('#gallery4Cover img').animate({
        opacity: 1
    });
});

