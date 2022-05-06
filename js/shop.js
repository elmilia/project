$(document).ready(function () {
    var massiv1 = [{
            a: "Acer",
            b: "992",
            c: "cox yaxsidir",
            d: "yeni",
            e: "images/acer.jpg",
            f: "12",
            u: "i7",
            z: "250",
            x: "hdd",
            xs: "w11",
            l: "16"
        },
        {
            a: "Acer",
            b: "980",
            c: "cox yaxsidir",
            d: "xeyr",
            e: "images/acer.jpg",
            f: "12",
            u: "i9",
            z: "250",
            x: "hdd",
            xs: "w11",
            l: "16"
        },
        {
            a: "Acer",
            b: "992",
            c: "cox yaxsidir",
            d: "yeni",
            e: "images/acer.jpg",
            f: "12",
            u: "i5",
            z: "300",
            x: "hdd",
            xs: "w11",
            l: "16"
        },
        {
            a: "Acer",
            b: "2567",
            c: "cox yaxsidir",
            d: "yeni",
            e: "images/acer.jpg",
            f: "12",
            u: "i7",
            z: "300",
            x: "hdd",
            xs: "w11",
            l: "16"
        },
        {
            a: "Acer",
            b: "1992",
            c: "cox yaxsidir",
            d: "yeni",
            e: "images/acer.jpg",
            f: "12",
            u: "i7",
            z: "300",
            x: "hdd",
            xs: "w11",
            l: "16"
        },
        {
            a: "Acer",
            b: "992",
            c: "cox yaxsidir",
            d: "xeyr",
            e: "images/acer.jpg",
            f: "12",
            u: "i5",
            z: "300",
            x: "hdd",
            xs: "w11",
            l: "16"
        },
        {
            a: "Acer",
            b: "232",
            c: "cox yaxsidir",
            d: "xeyr",
            e: "images/acer.jpg",
            f: "6",
            u: "i2",
            z: "250",
            x: "hdd",
            xs: "w7",
            l: "8"
        },
        {
            a: "Acer",
            b: "992",
            c: "cox yaxsidir",
            d: "yeni",
            e: "images/acer.jpg",
            f: "12",
            u: "i5",
            z: "300",
            x: "hdd",
            xs: "w8",
            l: "16"
        },
        {
            a: "Acer",
            b: "1012",
            c: "cox yaxsidir",
            d: "xeyr",
            e: "images/acer.jpg",
            f: "16",
            u: "i7",
            z: "300",
            x: "hdd",
            xs: "w7",
            l: "24"
        },
        {
            a: "Acer",
            b: "750",
            c: "cox yaxsidir",
            d: "xeyr",
            e: "images/acer.jpg",
            f: "12",
            u: "i5",
            z: "275",
            x: "hdd",
            xs: "w10",
            l: "16"
        }

    ]
    $("#a").click(function () {
        var aa = massiv1.length
        for (var i = 0; i < aa; i++) {
            var a = document.createElement("h4");
            var a1 = document.createElement("h4");
            var a2 = document.createElement("h4");
            var a3 = document.createElement("h4");
            var a4 = document.createElement("h4");
            var a5 = document.createElement("h4");
            var a6 = document.createElement("h4");
            var a7 = document.createElement("h4");
            var a8 = document.createElement("h4");
            var a9 = document.createElement("h4");
            var a10 = document.createElement("h4");
            a.innerText = massiv1[i].a;
            a1.innerText = massiv1[i].b
            a2.innerText = massiv1[i].c
            a3.innerText = massiv1[i].d
            a4.innerText = massiv1[i].e
            a5.innerText = massiv1[i].f
            a6.innerText = massiv1[i].u
            a7.innerText = massiv1[i].z
            a8.innerText = massiv1[i].x
            a9.innerText = massiv1[i].xs
            a10.innerText = massiv1[i].l
            var main = document.createElement("div");
            main.innerHTML = `<div  data-toggle="modal" data-target="#myModal"><img src="${massiv1[i].e}" alt=""><p>Ad-${massiv1[i].a}</p><p>qiymet-${massiv1[i].b}</p><p>Yeni-${massiv1[i].d}</p></div>`;
            bb.innerHTML = `<div class="modal fade" id="myModal" role="dialog">
                                    <div class="modal-dialog
                                     <!-- Modal content-->
                                     <div class="modal-content">
                                       <div class="modal-header">
                                         <button type="button" class="close" data-dismiss="modal">&times;</button>
                                         <h4 class="modal-title">Acer</h4>
                                       </div>
                                       <div class="modal-body">
                                       <img src="${massiv1[i].e}" alt="">
                                         <p>Ad-${massiv1[i].a}</p>
                                         <p>Qiymet-${massiv1[i].b}</p>
                                         <p>tesvir-${massiv1[i].c}</p>
                                         <p>Yeni-${massiv1[i].d}</p>   
                                         <p>Sekil src-${massiv1[i].e}</p>
                                         <p>Emeli yaddas-${massiv1[i].f}</p>
                                         <p>Merkezi prosessor-${massiv1[i].u}</p>
                                         <p>Daimi yaddas-${massiv1[i].z}</p>
                                         <p>Daimi yaddas tipi-${massiv1[i].x}</p>
                                         <p>Emeliyyat sistemi-${massiv1[i].xs}</p>
                                         <p>Video kart-${massiv1[i].l}</
                                       </div>
                                       <div class="modal-footer">
                                         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                       </div>
                                     </div>`;

            var bb = document.querySelector("#second")
            bb.appendChild(main)
        }
    })
    // pickup($("#a"))
    // function pickup(element) {
    //     if (element=="Acer") {
    //         var a=document.createElement("h4");
    //         var a1=document.createElement("h4");
    //         var a2=document.createElement("h4");
    //         var a3=document.createElement("h4");
    //         var a4=document.createElement("h4");
    //         var a5=document.createElement("h4");
    //         var a6=document.createElement("h4");
    //         var a7=document.createElement("h4");
    //         var a8=document.createElement("h4");
    //         var a9=document.createElement("h4");
    //         var a10=document.createElement("h4");
    //         for(var i=0;i<massiv1.length;i++){
    //             a.innerText(massiv1[i].a);
    //             a1.innerText(massiv1[i].b)
    //             a2.innerText(massiv1[i].c)
    //             a3.innerText(massiv1[i].d)
    //             a4.innerText(massiv1[i].e)
    //             a5.innerText(massiv1[i].f)
    //             a6.innerText(massiv1[i].u)
    //             a7.innerText(massiv1[i].z)
    //             a8.innerText(massiv1[i].x)
    //             a9.innerText(massiv1[i].xs)
    //             a10.innerText(massiv1[i].l)
    //         }
    //     }
    //}
})