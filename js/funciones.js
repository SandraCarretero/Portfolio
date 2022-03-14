$(function(){
    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        // console.log("scroll"+scroll);
        
        var distancia_elemento = $(".about").offset().top;
        // console.log("distancia elemento"+distancia_elemento);

        var max = $(window).width();

        var move = distancia_elemento - scroll;

        if(scroll >= distancia_elemento && scroll < distancia_elemento + 2*max ){
            console.log("Estoy aquí")
            $(".line").css({
                "transform": "translateX("+move+"px)"
            });
        }

        else{
            $(".line").css({
                "transform": "translateX(0px)"
            });
        }
    });

    $(".work").click( function(){
        $(".porfolio").toggleClass("description")
    })
});
