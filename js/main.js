(function(){
    var menu = new Menu({
        menuHeader: '.menu-header',
        btnMenu: '.btn-menu',
        widthEnabled: 1025
    });

    var slides = new Carousel({
        items: '.photos-slides figure',
        btnPrev: '.slides .prev',
        btnNext: '.slides .next'
    })

    var comments = new Carousel({
        items: '.comments .comments-area figure',
        btnPrev: '.comments .prev',
        btnNext: '.comments .next'
    })
})();