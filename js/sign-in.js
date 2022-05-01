$(document).ready(function (){
    $("#submit").click(function (a) {
        a.preventDefault();
        var email = $("#email").val();
        var pass = $("#password2").val();
        var cvb = false;
        if(cvb==false){
            for(var i=1;i<=Number(localStorage.getItem("say"));i++){
                if (email == localStorage.getItem(`user${i}-name`)) {
                    cvb=true;
                    if (pass == localStorage.getItem(`user${i}-pass`)){
                        localStorage.setItem("status","ugurlu login");
                        window.location.assign("index.html");
                    }
                }else{
                    localStorage.setItem("status","ugursuz")
                }
            }
        }
    });
});