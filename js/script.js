$(document).ready(function() {
    $(".main__menu").css({ boxShadow: "none" });
    $(".nav__icon").click(function() {
        $(".main__menu").animate({ right: 0 }, "fast");
        $(".main__menu").css({ boxShadow: "0px 0px 41px 0px #a886b3" });
        $("body").append("<div class='cover'></div>")
        $(".cover").click(function() {
            $(".main__menu").animate({ right: "-230px" }, "fast");
            $(".main__menu").css({ boxShadow: "none" });

            $(this).remove();
        })
    })
    $(".about").click(function() {
        $(".alert").animate({ top: "55px", opacity: 1 });
        $(".alert").css({ "display": "block" })
        $("body").append("<div class='cover-bg'></div>");
        $(".cover-bg").animate({ opacity: 1 }, "fast");
    })
    $(".alert-btn").click(function() {
        $(".alert").animate({ top: "-20px", opacity: 0 }, "fast", function() {
            $(".alert").css({ "display": "none" });
        })
        $(".cover-bg").remove();
    })
    $(".btn-buy").click(function() {
        $(".alert").css({ "position": "fixed" })
        $(".alert").animate({ top: "55px", opacity: 1 });
        $(".alert").css({ "display": "block" })
        $("body").append("<div class='cover-bg'></div>");
        $(".cover-bg").animate({ opacity: 1 }, "fast");
        $(".alert .alert-text").text(" ابتدا باید وارد پنل شده و 1000 هدیه فالور خود را دریافت کنید تا گزینه خرید برایتان فعال شود ")
    })
})