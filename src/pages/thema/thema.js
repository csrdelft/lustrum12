import './thema.scss'

window.addEventListener('load', function () {
    document.getElementById("game-container").innerHTML =
        `<iframe class="unity-container" src="https://jobkanis.github.io/lustrumgame/" allow="fullscreen" scrolling="no"></iframe>`
});

window.addEventListener('load', function () {
    document.getElementById("player").innerHTML =
        `<iframe src="https://www.youtube-nocookie.com/embed/9rXmPGNczdE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
});

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