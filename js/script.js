(function () {

    setUpPage();

    function setUpPage() {
        addLinkSlider();
        addNavEventListeners();
        addModalEventListeners();
        addArticleEventListeners();
        addWindowEventListeners();
        addSlideShow();
    };

    //Smooth scrolling between sections using nav
    function addLinkSlider() {
        const navLinks = document.querySelectorAll('.navText');

        for (link of navLinks) {
            const sectionSelector = link.getAttribute('href');
            link.setAttribute('href', '');
            const section = document.querySelector(sectionSelector);
            link.onclick = function (event) {
                event.preventDefault();
                const navbarHeight = document.getElementById('navBar').offsetHeight;
                window.scrollTo({
                    top: section.offsetTop - (0.66 * navbarHeight),
                    behavior: 'smooth',
                });
            };
        };
    };

    //Nav open and close
    function addNavEventListeners() {

        const navRight = document.querySelector('#navRight');

        const navClickHandler = function () {
            this.classList.toggle('open');
            event.stopPropagation();
        };

        navRight.addEventListener('click', navClickHandler);

        const bodyClickHandler = function () {
            navRight.classList.remove('open');
        };

        document.body.addEventListener('click', bodyClickHandler);
    };

    // Modal can be opened
    function addModalEventListeners() {

        const modalTriggerElement = document.querySelector('#modal-trigger');

        const modalTriggerClickHandler = function () {
            document.body.classList.add('modal-open');
        };

        modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

        // Modal can be closed
        const modalCloseButton = document.querySelector('#modal a');

        const modalCloseButtonClickHandler = function () {
            document.body.classList.remove('modal-open');
        };

        modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
    };

    // Project details can be expanded
    function addArticleEventListeners() {

        const projTexts = document.querySelectorAll('.projText');

        for (let projText of projTexts) {
            let button = projText.querySelector('.showDetails');

            button.addEventListener('click', function () {
                projText.classList.toggle('expanded');
                button.innerHTML = projText.classList.contains('expanded') ?
                    'Hide Details' : 'Show Details';
            });
        };
    };

    // Resizing the window resets open/closed product details
    // Resizing the window resets nav visibility
    function addWindowEventListeners() {

        const windowResizeHandler = function () {

            const navRight = document.querySelector('#navRight');
            navRight.classList.remove('open');

            const projTexts = document.querySelectorAll('.projText');

            for (let projText of projTexts) {
                let button = projText.querySelector('.showDetails');
                projText.classList.remove('expanded');
                button.innerHTML = projText.classList.contains('expanded') ?
                    'Hide Details' : 'Show Details';
            };
        };

        window.addEventListener('resize', windowResizeHandler);
    };

    //Image Carousel
    function addSlideShow() {

        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        prev.addEventListener('click', function () {
            showSlides(slideIndex -= 1);
        });
        next.addEventListener('click', function () {
            showSlides(slideIndex += 1);
        });

        // Dot controls
        const dots = document.getElementsByClassName("dot");
        for (let dot of dots) {
            let dotNum = dot.id.slice(- 1);
            dot.addEventListener('click', function () {
                showSlides(slideIndex = dotNum);
            });
        }

        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        };

    };

})();

