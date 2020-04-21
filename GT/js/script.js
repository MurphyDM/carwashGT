window.onload = function() {

    var btn_sale = document.getElementById("btnS");
    var btn_close_sale = document.getElementById("btn_close_sale");
    var btn_reserve = document.getElementById("btn_reserve");
    var btn_close_reservation = document.getElementById("btn_close_reservation");
    var prevScrollpos = window.pageYOffset;


    var showHiddenMenu = (name, button_close) => {
        var item = document.getElementById(name);
        if (item.className == name + "_hidden") {
            item.className = name + "_active";
            btn_reserve.hidden = true;
            btn_sale.hidden = true;
            button_close.hidden = false;
        } else {
            item.className = name + "_hidden";
            btn_reserve.hidden = false;
            btn_sale.hidden = false;
            //button_close.hidden = true;
        }
    }

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }


    if (btn_sale) btn_sale.addEventListener("click", () => {
        showHiddenMenu('sale', btn_close_sale);
    });

    if (btn_reserve) btn_reserve.addEventListener("click", () => {
        showHiddenMenu('reservation', btn_close_reservation)
    });
    if (btn_close_sale) btn_close_sale.addEventListener("click", () => {
        showHiddenMenu('sale', btn_close_sale);
    });

    if (btn_close_reservation) btn_close_reservation.addEventListener("click", () => {
        showHiddenMenu('reservation', btn_close_reservation)
    });


}