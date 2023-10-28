//O document ready verifica se a página já carregou antes de executar o código
$(document).ready(function (){

    $(".icon").on("click",function (){
        
        //Se o menu estiver fechado abrir o menu caso contrario fechar
        if( $(".topnav").css("display") == "none" ){
            $(".topnav").css("display","block");
            $(".icon i").removeClass("fa-bars");
            $(".icon i").addClass("fa-times");
        }else{
            $(".topnav").css("display","none");
            $(".icon i").removeClass("fa-times");
            $(".icon i").addClass("fa-bars");
        }
    });


});
