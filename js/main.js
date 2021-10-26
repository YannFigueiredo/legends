(function(){
    var menu = new Menu({
        menuHeader: '.menu-header',
        btnMenu: '.btn-menu',
        widthEnabled: 1025
    });

    var slides = new Slide({
        imagem: '.photos-slides figure',
        btnPrev: '.slides .prev',
        btnNext: '.slides .next'
    })

    var comments = new Slide({
        imagem: '.comments figure',
        btnPrev: '.comments .prev',
        btnNext: '.comments .next'
    })
})();