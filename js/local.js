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