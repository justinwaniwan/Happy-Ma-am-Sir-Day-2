// ========================================
// GET ELEMENTS
// ========================================

const envelope =
    document.getElementById("envelope");

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const question =
    document.getElementById("question");

const closeButton =
    document.getElementById("closeButton");

const musicPlayer =
    document.getElementById("musicPlayer");


// ========================================
// OPEN ENVELOPE
// ========================================

yesButton.addEventListener("click", () => {

    envelopeWrapper.classList.add("open");

    envelope.classList.add("open");

    question.style.opacity = "0";

    question.style.pointerEvents =
        "none";

    noButton.style.transform =
        "translate(0, 0)";


    // ========================================
    // PLAY MUSIC AUTOMATICALLY
    // ========================================

    if (musicPlayer) {

        musicPlayer.currentTime = 0;

        musicPlayer.play().catch((error) => {

            console.log(
                "Music could not play:",
                error
            );

        });

    }


    setTimeout(() => {

        question.style.display =
            "none";

        closeButton.style.display =
            "block";

    }, 1000);

});


// ========================================
// NO BUTTON
// ========================================

function moveNoButton() {

    const x =
        Math.random() * 180 - 90;

    const y =
        Math.random() * 80 - 40;


    noButton.style.transform =
        `translate(${x}px, ${y}px`;

}


// ========================================
// DESKTOP
// ========================================

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


// ========================================
// MOBILE
// ========================================

noButton.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();

    },
    {
        passive: false
    }
);


// ========================================
// CLOSE LETTER
// ========================================

closeButton.addEventListener(
    "click",
    () => {

        envelope.classList.remove("open");

        envelopeWrapper.classList.remove("open");


        // ========================================
        // STOP AND RESET MUSIC
        // ========================================

        if (musicPlayer) {

            musicPlayer.pause();

            musicPlayer.currentTime = 0;

        }


        closeButton.style.display =
            "none";


        noButton.style.transform =
            "translate(0, 0)";


        setTimeout(() => {

            question.style.display =
                "block";


            setTimeout(() => {

                question.style.opacity =
                    "1";

                question.style.pointerEvents =
                    "auto";

            }, 50);

        }, 900);

    }
);