import './thema.scss'
import '../../assets/zandloper.js'

window.addEventListener('load', function () {
    document.getElementById("game-container").innerHTML =
        `<iframe class="unity-container" src="https://jobkanis.github.io/lustrumgame/" allow="fullscreen" scrolling="no"></iframe>`
});

window.addEventListener('load', function () {
    document.getElementById("player").innerHTML =
        `<iframe src="https://www.youtube-nocookie.com/embed/9rXmPGNczdE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
});