function Menu(config){
    this.menu = document.querySelector(config.menuHeader);
    this.btnMenu = document.querySelector(config.btnMenu);
    this.widthEnabled = config.widthEnabled;

    var _this = this;

    if(window.outerWidth < _this.widthEnabled)
        closeMenu();
    
    window.addEventListener('resize', function(){
        if(window.innerWidth >= _this.widthEnabled){
            _this.menu.removeAttribute('style');
        }else if(window.innerWidth < _this.widthEnabled){
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
        _this.menu.style.maxHeight = '0px';
        _this.menu.style.overflow = 'hidden';
    }

    function openMenu(){
        _this.menu.style.maxHeight = 'calc(100vh - '+ _this.menu.getBoundingClientRect().top +'px)';
        _this.menu.style.overflow = 'auto';
    }

    function checkClosedMenu(){
        if(_this.menu.style.maxHeight == '0px'){
            return true;
        }else{
            return false;
        }
    }
}