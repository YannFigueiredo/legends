function Slide(config){
    this.imagem = document.querySelectorAll(config.imagem);
    this.btnPrev = document.querySelector(config.btnPrev);
    this.btnNext = document.querySelector(config.btnNext);

    var _this = this;
    var imgAtual = 0;

    console.log(_this.imagem);

    _this.btnPrev.addEventListener('click', function(){
        imgAtual -= 1;
        if(imgAtual < 0)
            imgAtual = _this.imagem.length - 1;

        alterarImg(imgAtual);
    });

    _this.btnNext.addEventListener('click', function(){
        imgAtual += 1;
        if(imgAtual > _this.imagem.length - 1)
            imgAtual = 0;
        alterarImg(imgAtual);
    });

    function alterarImg(imgNova){
        _this.imagem[imgNova].classList.remove('no-show');
        _this.imagem[imgNova].classList.add('show');

        for(var i = 0; i < _this.imagem.length; i++){
            if(i != imgNova && _this.imagem[i].classList.contains('show')){
                _this.imagem[i].classList.remove('show');
                _this.imagem[i].classList.add('no-show');
            }
        }
    }
}