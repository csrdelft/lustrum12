import './assets/style.scss'

window.addEventListener('load', function () {
    document.getElementById("game-container").innerHTML =
        `<iframe class="unity-container" src="https://jobkanis.github.io/lustrumgame/" allow="fullscreen" scrolling="no"></iframe>`
});