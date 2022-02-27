$(function(){
        //로고 클릭기능
       $("#logo").click(function(){
            $("#modal").fadeIn(500)
            $("body").css("overflow","hidden")
       });
        
        //모달
        $("#modal").click(function(){
            $("#modal").fadeOut(500)
            $("body").css("overflow","auto")
        });
    
        //메뉴 애드,리무브클래스
       var nav= $("nav li")   
       nav.mouseover(function(){
           nav.removeClass("on")
           $(this).addClass("on")
       });
       nav.eq(0).click(function(){
          nav.removeClass("on")
          $(this).addClass("on")
       });

       nav.eq(1).click(function(){
          nav.removeClass("on")
          $(this).addClass("on")
       });

        nav.eq(2).click(function(){
          nav.removeClass("on")
          $(this).addClass("on")
       });

        nav.eq(3).click(function(){
          nav.removeClass("on")
          $(this).addClass("on")
       });

        nav.eq(4).click(function(){
          nav.removeClass("on")
          $(this).addClass("on")
       });
                
    })