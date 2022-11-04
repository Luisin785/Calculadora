(function () {
    let tela = document.querySelector('#tela');
    let btns = document.querySelectorAll('.btn');
    let igual = document.querySelector('#btn-igual');
    let limpar = document.querySelector('#btn-limpar');
    let del = document.querySelector('#btn-del');

    btns.forEach(function(button) {
        button.addEventListener('click',function(e) {
            let value = e.target.dataset.num;
            tela.value += value;
        })
    });
    igual.addEventListener('click',function(e){
        if(tela.value === ''){
            tela.value = "";
        }else{
            let resultado = eval(tela.value);
            tela.value = resultado;
        }
    })
    limpar.addEventListener('click',function(e){
        tela.value = "";
    })
    del.addEventListener('click',function(e){
        let string = tela.value;
        string = string.slice(0,string.length-1);
        tela.value = string;
        
    })
})();