$(document).ready(function() {

    //Voltar Topo 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        console.log(position);

        if (position >= 550) {
            $('#voltar-topo').addClass('scrollTop');
        } else {
            $('#voltar-topo').removeClass('scrollTop');
        }
    });

    //SUAVIZAÇÃO DO SCROLL PARA NAVEGAÇÃO 
    $('#voltar-topo').click(function(link) {
        link.preventDefault(); // usado para cancelar o comportamento padrão do link ( tentar abrir uma nova página);
        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 1000); // TAXA EM MILISEGUNDOS. 


    });

})