//$(".course-toggle").hide();
$(document).ready(function () {
    $(".course-btn").click(function () {
        $(this).next().toggle(1000);
    });
});