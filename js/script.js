$(document).ready(function () {
    $.getJSON("js/data.json", function (result) {
        $.each(result, function (index, obj) {
            $("ul.gallery li:first").append("<img src = images/square/" + obj.path + " alt = '" + obj.title + "'>");
        });

        $("ul.gallery li:first").on("mouseenter", "img", function (e) {
            $(this).addClass("gray");

            var imageName = $(this).attr('src').slice(14);
            var largerImage = "";

            $.each(result, function (index, obj) {
                if (obj.path == imageName) {
                    largerImage = "<div id = 'preview'><img src = images/medium/" + imageName + " alt = '" + obj.title + "'><p>" + obj.title + "</p><p>" + obj.city + ", " + obj.country + " (" + obj.taken + ")</p></div>";
                }
            });

            $("#preview").css({ top: e.pageY - 300, left: e.pageX + 20 });
            $("body").append(largerImage);
            $("#preview").fadeIn(1000);
        });

        $("ul.gallery li:first").on("mouseleave", "img", function () {
            $(this).removeClass("gray");
            $("#preview").remove();
        });

        $("ul.gallery li:first").on("mousemove", "img", function (e) {
            $("#preview").css({ top: e.pageY - 300, left: e.pageX + 20 });
        });
    });
});