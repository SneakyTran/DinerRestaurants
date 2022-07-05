/**
 * Author: Sneaky
 * Date Created: 28/06/2022
 * Count up number
 */
$(".counter").countUp({
    time: 2000,
    delay: 10,
});

/**
 * Author: Sneaky
 * Date Created: 29/06/2022
 * Mafnific popup video
 */
$(".open--video--popup").magnificPopup({
    type: "inline",
    midClick: true,

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: "auto",

    closeBtnInside: true,
    preloader: false,

    removalDelay: 300,
});

/**
 * Author: Sneaky
 * Date Created: 05/07/2022
 * open overlay menu
 */
function openMenu(){
    document.getElementById("menu").classList.add("open");
}
document.getElementById("btnPopup").onclick = openMenu;

/**
 * Author: Sneaky
 * Date Created: 05/07/2022
 * close overlay menu
 */
function closeMenu(){
    document.getElementById("menu").classList.remove("open");
}
document.getElementById("btnCloseMenu").onclick = closeMenu;