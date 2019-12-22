$(document).ready(function() {
    $.scrollify({
        section : ".container-section",
        before:function() {
            var currSection = $.scrollify.current();
            currSection.addClass('section-in');
        }
    });

    var currSection = $.scrollify.current();
    currSection.addClass('section-in');
});
