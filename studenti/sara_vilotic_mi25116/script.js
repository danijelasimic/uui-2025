 // NAVIGACIJA NA KLIK
    const navToggle = document.getElementById("navToggle");
    const navDropdown = navToggle.querySelector(".nav-dropdown");

    navToggle.addEventListener("click", () => {
        navDropdown.classList.toggle("active");
        navToggle.classList.toggle("active");
    });

    // AUDIO DUGME
    const audioButton = document.getElementById("audioButton");
    const audio = document.getElementById("myAudio");

    audioButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            audioButton.classList.add("active");
        } else {
            audio.pause();
            audioButton.classList.remove("active");
        }
    });

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
