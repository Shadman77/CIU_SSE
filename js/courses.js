$(document).ready(function () {
    $(".course-btn").click(function () {
        if (!$(this).next().is(':visible')) {
            $('.course-toggle').hide(1000);
            $(this).next().toggle(1000);
        } else {
            $('.course-toggle').hide(1000);
        }
    });
});