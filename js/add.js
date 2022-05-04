$(document).ready(function () {
    if (localStorage.getItem("ugur") == "ugurlu") {
        for (var i = 1; i <= localStorage.getItem("i"); i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2=document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            td1.innerText = i;
            td2.innerText=localStorage.getItem(`${i-1}-ad`)
            td3.innerText=localStorage.getItem(`${i-1}-link`)
            td4.innerText=localStorage.getItem(`${i-1}-qiymet`)
            td5.innerText=localStorage.getItem(`${i-1}-emeliyyat`)
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            document.querySelector("#table1 #a").appendChild(tr)


        }
    }
    // $(".link").keyup(function(){
    //     var a=$(".link").val();
    //     $("#sekil").src=a;
    // });
    var i;
    if (localStorage.getItem("i") == null) {
        i = 1;
        localStorage.setItem("i", i)
    }

    $("#save").click(function () {
        // $("#ad").isInvalid();
        isValid($("#qiymet"))
        isValid($("#ad"))
        isValid($("#tesvir"))
        isValid($("#link"))
        isValid($("#emeli"))
        isValid($("#merkezi"))
        isValid($("#daimi"));
        isValid($("#daimitip"));
        isValid($("#emeliyyat"));
        isValid($("#video"));
        isValid($("#yeni"));
        isValid($("#Category"))
        var a = localStorage.getItem("ugur")
        if (a == "ugurlu") {
            i = Number(localStorage.getItem("i"));
            localStorage.setItem(`${i}-kat`, $("#Category").val());
            localStorage.setItem(`${i}-ad`, $("#ad").val());
            localStorage.setItem(`${i}-qiymet`, $("#qiymet").val());
            localStorage.setItem(`${i}-tesvir`, $("#tesvir").val());
            localStorage.setItem(`${i}-yeni`, $("#yeni").val());
            localStorage.setItem(`${i}-link`, $("#link").val());
            localStorage.setItem(`${i}-emeli`, $("#emeli").val())
            localStorage.setItem(`${i}-merkezi`, $("#merkezi").val())
            localStorage.setItem(`${i}-daimi`, $("#daimi").val())
            localStorage.setItem(`${i}-daimi tip`, $("#daimitip").val())
            localStorage.setItem(`${i}-emeliyyat`, $("#emeliyyat").val())
            localStorage.setItem(`${i}-video`, $("#video").val())
            localStorage.setItem(`i`, i + 1);

        } else {
            alert("zehmet olmasa xanalari doldurun")
        }


    });

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
    // function isValidSelect(element){
    //     if{

    //     }
    // }
});