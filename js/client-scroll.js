(function ($) {
    "use strict";

    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
        }
    });

})(jQuery);

