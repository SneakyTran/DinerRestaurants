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
