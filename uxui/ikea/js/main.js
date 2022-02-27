$(function(){
   //풀페이지
    new fullpage('#fullpage',{
            navigation:true,
            scrollingSpeed:1000,
            responsiveWidth:350,
            responsiveHthth:730,
            anchors:['page1', 'page2', 'page3','page4','page5','page6'], 
            parallax:true, 
           onLeave:function(origin){ 
                if(origin.index == 1){
                   $('#main1_txt h3').show();   
                       }else{
                        $('#main1_txt h3').hide();
                       }
            },
            afterLoad:function(origin, destination, direction){
                if(destination.index == 1){ 
                   $('.main2_txt h3').show();
                       }else{
                       $('.main2_txt h3').hide();
                       }
            },   
        
        });
        
    //스크롤버튼기능
    $(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
      
    //로고클릭기능
   $("#logo").click(function(){
       $("#modal").fadeIn(500)
       $("body").css("overflow","hidden")
   });
    
    //모달
   $("#modal").click(function(){
       $("#modal").fadeOut(500)
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
    
    
    /*a태그 비활성화 구문
    $("a").click(function(e){
	e.preventDefault();
});*/
    
    //비디오
    $(function(){
        $("video").mouseenter
(function(){
            if(this.paused){  
                this.play()   
            }
        })
    })
      
})