$(document).ready(function () {
    let i = 0;
    $("#submit2").click(function (e) {
        e.preventDefault();
        var cavab = false;
        var tel = $("#nomer").val();
        var yer = tel.indexOf("-");
        var yer2 = tel.lastIndexOf("-")
        if (yer == 2 && yer2 == 6) {
            cavab = true;
        }
        
        isValid($("#username"))
        isValid($("#nomer"))
        isValid($("#mail"))
        isValid($("#password"))
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
        if (cavab == true) {
            i = Number(localStorage.getItem("say")) + 1;
            localStorage.setItem(`user${i}-name`, $("#username").val());
            localStorage.setItem(`user${i}-mail`, $("#mail").val());
            localStorage.setItem(`user${i}-pass`, $("#password").val());
            localStorage.setItem(`user${i}-nomer`, $("#nomer").val());
            localStorage.setItem("say", i);
            i++;
        }
    });
});