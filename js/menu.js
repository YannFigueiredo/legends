function Menu(config){
    this.menu = document.querySelector(config.menuHeader);
    this.btnMenu = document.querySelector(config.btnMenu);
    this.widthEnabled = config.widthEnabled;

    var _this = this;

    if(window.outerWidth < _this.widthEnabled)
        closeMenu();
    
    window.addEventListener('resize', function(){
        if(window.outerWidth >= 1037){
            openMenu();
        }else if(window.outerWidth < 1037){
            closeMenu();
        }
    }); 

    _this.btnMenu.addEventListener('click', function(){
        if(checkClosedMenu() == true){
            openMenu();
        }else{
            closeMenu();
        }
    });

    function closeMenu(){
        if(checkClosedMenu() == false)
            _this.menu.classList.add('menu-header-close');
    }

    function openMenu(){
        if(checkClosedMenu() == true)
            _this.menu.classList.remove('menu-header-close');
    }

    function checkClosedMenu(){
        if(_this.menu.classList.contains('menu-header-close')){
            return true;
        }else{
            return false;
        }
    }
}