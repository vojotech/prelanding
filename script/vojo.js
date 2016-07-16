$(document).ready(function() {
    
    var controllerStatus=1;
    

                
    
    function homeController(){
        
      
            if(controllerStatus==1){
                $("#panel1").css("z-index", 200);
                $("#panel2").css("z-index", 0);
                $("#panel3").css("z-index", 0);
                $(".controlPanelArrow").css("left", 0);
                
                $("#mainMagnet").css("opacity", 1);
                $("#mainInfinite").css("opacity", 0);
                $("#mainBasic").css("opacity", 0);
                
                $("#mainMagnet").css("z-index", 200);
                $("#mainInfinite").css("z-index", 0);
                $("#mainBasic").css("z-index", 0);
                
            }
            if(controllerStatus==2){
                $("#panel1").css("z-index", 0);
                $("#panel2").css("z-index", 200);
                $("#panel3").css("z-index", 0);
                $(".controlPanelArrow").css("left", 341);
                
                $("#mainMagnet").css("opacity", 0);
                $("#mainInfinite").css("opacity", 1);
                $("#mainBasic").css("opacity", 0);
                
                $("#mainMagnet").css("z-index", 0);
                $("#mainInfinite").css("z-index", 200);
                $("#mainBasic").css("z-index", 0);
            }
            if(controllerStatus==3){
                $("#panel1").css("z-index", 0);
                $("#panel2").css("z-index", 0);
                $("#panel3").css("z-index", 200);
                $(".controlPanelArrow").css("left", 681);
                
                $("#mainMagnet").css("opacity", 0);
                $("#mainInfinite").css("opacity", 0);
                $("#mainBasic").css("opacity", 1);
                
                $("#mainMagnet").css("z-index", 0);
                $("#mainInfinite").css("z-index", 0);
                $("#mainBasic").css("z-index", 200);
            }

        
    }
    
    
    
    $("#panel1").click(function(){
        controllerStatus=1;
        homeController();
    })
    
    $("#panel2").click(function(){
        controllerStatus=2;
        homeController();
    })
    
    $("#panel3").click(function(){
        controllerStatus=3;
        homeController();
    })
    
    $("#navCell1").click(function() {
      window.location = "magnet.html"
    })
    
    $("#navCell2").click(function() {
      window.location = "infinite.html"
    })
    
    $("#navCell3").click(function() {
      window.location = "basic.html"
    })
    
    $("#navCell4").click(function() {
      window.location = "aboutus.html"
    })
    
    $("#navCell5").click(function() {
      window.location = "buy.html"
    })
    
    $(".logo").click(function() {
      window.location = "index.html"
    })
    
    $(".bottomLogo").click(function() {
      window.location = "index.html"
    })
    
    $(".buyButton2").click(function() {
      window.location = "buy.html"
    })
    
    $(".learnMore").click(function() {
      window.location = "magnet.html"
    })
  
    $("#pressCell1").click(function() {
      window.open("http://mashable.com/2011/06/25/switch-plug/","blank");
    })
    
    $("#pressCell2").click(function() {
      window.open("http://www.engadget.com/2010/03/22/infinite-usb-plug-is-a-big-idea-for-small-conveniences/","blank");
    })
    
    $("#pressCell3").click(function() {
      window.open("http://exhibition.ifdesign.de/entrydetails_en?beitrag_id=59287","blank");
    })
    
    $("#pressCell4").click(function() {
      window.open("http://www.yankodesign.com/2010/03/22/running-out-of-usb-ports/","blank");
    })
    
    $("#pressCell5").click(function() {
      window.open("http://www.zdnet.com/blog/gadgetreviews/infinite-usb-multi-plug-concept-could-prove-to-be-useful/13443","blank");
    })
  
  
  
})
   
    






















