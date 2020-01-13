$(document).ready(function() {

    //Voltar Topo 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        console.log(position);

        if (position >= 580) //Position em pixels para o botão aparecer na tela.
        {
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

    //function captura email da landing page e disponibiliza na pagina de cadastro.
    $('#campo-email-home').blur(function() {

        //Atribuindo na var email o email digitado no home.
        var email = document.getElementById('campo-email-home').value

        //limpando campo de email no home com o valor anterior na var.
        document.getElementById('campo-email-home').value = ""

        //Campo email no modal de cadastro recebedo o email da var email.
        document.getElementById('campo_email').value = email

        //Zerando a variavel email (buscando forma melhor para realizar esta tarefa.)
        var email = ''
    });

})