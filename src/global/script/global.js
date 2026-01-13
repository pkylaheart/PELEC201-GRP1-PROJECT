document.addEventListener("DOMContentLoaded", function() {

    // ===== Navigation buttons =====
    const navButtons = [
        { selector: ".about_us-button", path: "/about.html" },
        { selector: ".view_menu-button", path: "/menu.html" },
        { selector: ".button", path: "/menu.html" },
        { selector: ".contact-btn", path: "/contact.html" }
    ];

    navButtons.forEach(btn => {
        const element = document.querySelector(btn.selector);
        if (element) {
            element.addEventListener("click", function() {
                let path = btn.path;

                // Detect if current page is inside Pages
                const isInWebpages = window.location.pathname.includes("/src");

                if (isInWebpages) {
                    // Pages inside _ASSETS/webpages: path relative to current folder
                    path = "../pages" + btn.path;
                } else {
                    // Pages outside _ASSETS (like index.html): path relative to root
                    path = "src/pages/" + btn.path;
                }

                window.location.href = path;
            });
        }
    });

    // ===== Dropdown links =====
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.querySelector('.dropdown-text').textContent.trim();
            let hash = '';
            if (text === 'Special Dish') hash = 'special-dish';
            else if (text === 'Sushi and Maki Rolls') hash = 'sushi-maki-rolls';
            else if (text === 'Rice bowl and Bento') hash = 'rice-bowl-bento';
            else if (text === 'Sides and Snacks') hash = 'sides-snacks';
            else if (text === 'Noodles and Grills') hash = 'noodles-grills';
            else if (text === 'Drinks') hash = 'drinks';

            let path = '/menu.html';
            const isInWebpages = window.location.pathname.includes("/src");
            if (isInWebpages) {
                path = "../pages/" + path;
            } else {
                path = "src/pages/" + path;
            }
            window.location.href = path + (hash ? '#' + hash : '');
        });
    });

    // ===== Dropdown toggle =====
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement.querySelector('.dropdown');
            if (dropdown) {
                if (dropdown.style.display === 'flex') {
                    dropdown.style.display = 'none';
                    dropdown.style.opacity = '0';
                    dropdown.style.pointerEvents = 'none';
                } else {
                    dropdown.style.display = 'flex';
                    dropdown.style.opacity = '1';
                    dropdown.style.pointerEvents = 'auto';
                }
            }
        });
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

    // ===== Handle hash on menu page =====
    if (window.location.pathname.includes('menu.html') && window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

});
