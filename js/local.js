$(document).ready(function () {
    let i = 0;
    $("#submit2").click(function (e) {
        e.preventDefault();
        var cavab = false;
        var tel = $("#nomer").val();
        var yer = tel.indexOf("-");
        var yer2 = tel.lastIndexOf("-")
        var telo = $("#nomer");
        if (yer == 2 && yer2 == 6) {
            cavab = true;
            $("#nam1").addClass("d-none")
            $("#nam2").removeClass("d-none")
            telo.removeClass("is-invalid");
            telo.addClass("is-valid");
        }
        var cavab2 = false;
        var ad = $("#mail").val();
        var ado = $("#mail");
        if (ad.length > 2 && ad.length < 30) {
            cavab2 = true;
            $("#idd").addClass("d-none");
            $("#add").removeClass("d-none");

            ado.removeClass("is-invalid");
            ado.addClass("is-valid");
        }
        var cavab3 = false;
        var adi = $("#username").val();
        var adi2 = $("#username");

        if (adi.length > 2 && adi.length < 30) {
            cavab3 = true;
            $("#ad3").addClass("d-none");
            $("#ad2").removeClass("d-none");
            adi2.removeClass("is-invalid");
            adi2.addClass("is-valid");
        }

        var cavab4 = false;
        var pas = $("#password");
        var pas2 = pas.val();
        if (pas2.length > 2 && pas2.length < 30) {
            cavab4 = true;
            $("#paslan").addClass("d-none");
            $("#paslan2").removeClass("d-none");
            pas.removeClass("is-invalid");
            pas.addClass("is-valid");
        }
        if (cavab == true && cavab2 == true && cavab3 == true && cavab4 == true) {
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