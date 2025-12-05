document.addEventListener("DOMContentLoaded", function() {

    // ===== Navigation buttons =====
    const navButtons = [
        { selector: ".about_us-button", path: "about/about.html" },
        { selector: ".view_menu-button", path: "menu/menu.html" },
        { selector: ".button", path: "menu/menu.html" },
        { selector: ".contact-btn", path: "contact/contact.html" }
    ];

    navButtons.forEach(btn => {
        const element = document.querySelector(btn.selector);
        if (element) {
            element.addEventListener("click", function() {
                let path = btn.path;

                // Detect if current page is inside _ASSETS/webpages
                const isInWebpages = window.location.pathname.includes("_ASSETS/webpages");

                if (isInWebpages) {
                    // Pages inside _ASSETS/webpages: path relative to current folder
                    path = "../" + btn.path;
                } else {
                    // Pages outside _ASSETS (like index.html): path relative to root
                    path = "_ASSETS/webpages/" + btn.path;
                }

                window.location.href = path;
            });
        }
    });

    // ===== Scroll-to-order button =====
    const menuOrderBtn = document.getElementById("menu-order-btn");
    const landingSection = document.getElementById("landing-section");

    menuOrderBtn?.addEventListener("click", () => {
        landingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // ===== Scroll-to-special button =====
    const specialBtn = document.querySelector(".special-button");
    const specialTarget = document.querySelector(".card-title.active-title");

    if (specialBtn && specialTarget) {
        specialBtn.addEventListener("click", function() {
            specialTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

});
