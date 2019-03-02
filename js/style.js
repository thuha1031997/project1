
$(document).ready(function () {

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navigation");
    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        }
    }

    //owl carousel listProductRelate
    //---------------------------------------------------------------------
    var owl = $('.list-product-relate');
    owl.owlCarousel({
        autoplay: false,
        autoplayTimeout: 4000,
        loop: true,
        items: 4,
        center: false,
        nav: true,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        navText: [
            "<i class='fas fa-arrow-left' aria-hidden='true'></i>",
            "<i class='fas fa-arrow-right' aria-hidden='true'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            },
            1025: {
                items:4,
            }

        }});
    //---------------------------------------------------------------------------

    ///owl carousel img detail list
    //----------------------------------------------------------------------------
    var slider = $('#slider');
    var thumbnailSlider = $('#thumbnailSlider');
    var duration = 500;

    slider.owlCarousel({
        loop: false,
        nav: false,
        items: 1
    }).on('changed.owl.carousel', function (e) {
        //On change of main item to trigger thumbnail item
        thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });

    // carousel function for thumbnail slider
    thumbnailSlider.owlCarousel({
        loop: false,
        center: true, //to display the thumbnail item in center
        nav: false,
       
    }).on('click', '.owl-item', function () {
        // On click of thumbnail items to trigger same main item
        slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    }).on('changed.owl.carousel', function (e) {
        // On change of thumbnail item to trigger main item
        slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });

    //These two are navigation for main items
    $('.slider-down').click(function () {
        slider.trigger('next.owl.carousel');
    });
    $('.slider-up').click(function () {
        slider.trigger('prev.owl.carousel');
    });
    //---------------------------------------------------------------------------

    //quanlity
    //--------------------------------------------------------------------------
    $('.input-number-increment').click(function () {
        var $input = $(this).parents('.input-number-group').find('.input-number');
        var val = parseInt($input.val(), 10);
        $input.val(val + 1);
    });

    $('.input-number-decrement').click(function () {
        var $input = $(this).parents('.input-number-group').find('.input-number');
        var val = parseInt($input.val(), 10);
        $input.val(val - 1);
    })
    //---------------------------------------------------------------------------

    // review-customer
    //---------------------------------------------------------------------------
    var owl = $('.review-customer-area');
    owl.owlCarousel({
        // navigation : true, 
        // slideSpeed : 300,
        // paginationSpeed : 400,
        // singleItem:true,

        autoplay: false,
        autoplayTimeout: 4000,
        loop: true,
        items: 1,
        center: false,
        nav: true,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
       });
});
