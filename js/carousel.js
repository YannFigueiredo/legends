function Carousel(config){
    this.items = document.querySelectorAll(config.items);
    this.btnPrev = document.querySelector(config.btnPrev);
    this.btnNext = document.querySelector(config.btnNext);

    var _this = this;
    var currentItem = 0;
 
    formatCarousel();

    _this.btnPrev.addEventListener('click', function(){
        currentItem -= 1;
        if(currentItem < 0)
            currentItem = _this.items.length - 1;

        showSlide();
    });

    _this.btnNext.addEventListener('click', function(){
        currentItem += 1;
        if(currentItem > _this.items.length - 1)
            currentItem = 0;

        showSlide();
    });

    function formatCarousel(){
        _this.items[0].classList.add('show');
    }

    function showSlide(){
        _this.items[currentItem].classList.add('show');

        for(var i = 0; i < _this.items.length; i++){
            if(i != currentItem && _this.items[i].classList.contains('show')){
                _this.items[i].classList.remove('show');
            }

            /*if(i == currentItem){
                _this.items[i].style.removeProperty('display');
            }else{
                _this.items[i].style.display = 'none';
            }*/
        }
    }
}