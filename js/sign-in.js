$(document).ready(function () {
    function isValid(element) {
        if (element.val() == "") {
            element.addClass("is-invalid");
            localStorage.setItem("ugur", "ugursuz")
            element.removeClass("is-valid");
        } else {
            element.removeClass("is-invalid");
            localStorage.setItem("ugur", "ugurlu")
            element.addClass("is-valid");
        }
    }
    $("#submit").click(function (a) {
        a.preventDefault();
        var email = $("#email").val();
        var pass = $("#password2").val();
        isValid($("#email"));
        isValid($("#password2"));
        //var a=localStorage.getItem("ugur2");
        var cvb = false;
        if (cvb == false) {
            for (var i = 1; i <= Number(localStorage.getItem("say")); i++) {
                if (email == localStorage.getItem(`user${i}-name`)) {
                    cvb = true;
                    if (pass == localStorage.getItem(`user${i}-pass`)) {
                        localStorage.setItem("status", "ugurlu login");
                        window.location.assign("index.html");
                    }
                } else {
                    localStorage.setItem("status", "ugursuz")
                }
            }
        }
    });
});