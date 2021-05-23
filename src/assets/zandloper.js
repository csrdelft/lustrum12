window.onscroll = function(){
    var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    var vertical_position = pageYOffset || document.documentElement.scrollTop;
    var percentile = (vertical_position / scrollMaxY)

    var zandloper = document.getElementById("zandloper");
    var heel = document.getElementById("zandloper_heel");
    var kapot = document.getElementById("zandloper_kapot");

    zandloper.style.top = percentile * 100 + '%';
    zandloper.style.marginTop = -50 - (20 * percentile) + "px";

    if (percentile < 0.99) {
        heel.style.display = "";
        kapot.style.display = "none";
    } else {
        heel.style.display = "none";
        kapot.style.display = "";
    }
};