$(document).ready(function() {
    
    
    
    
    var magnetColor=1;
    var magnetType=0;
    
    var magnetStatus=1;
    
    
    var basicColor=5;
    var basicType=0;
    
    var basicStatus=1;
    
    var magnetURL=new Array(
    "http://www.amazon.com/gp/product/B006JMUDQO",
    "http://www.amazon.com/gp/product/B009CN1DBG",
    "http://www.amazon.com/gp/product/B009CMMO4C",
    "http://www.amazon.com/gp/product/B009CNCYWS",
    "http://www.amazon.com/gp/product/B009CN4OGM",
    "http://www.amazon.com/gp/product/B009CYQI5Q",
    "http://www.amazon.com/gp/product/B009CYOB0A",
    "http://www.amazon.com/gp/product/B009CYVKTA",
    "http://www.amazon.com/gp/product/B009CV0SQE",
    "http://www.amazon.com/gp/product/B009CW226W");
    
    var basicURL=new Array(
    "http://www.amazon.com/gp/product/B009NPR1NM",
    "http://www.amazon.com/gp/product/B009NQBNUI",
    "http://www.amazon.com/gp/product/B009NRD2QA",
    "http://www.amazon.com/gp/product/B009NRGMBW",
    "http://www.amazon.com/gp/product/B009NR5C7C",
    "http://www.amazon.com/gp/product/B009NRTAES",
    "http://www.amazon.com/gp/product/B009NRQOVK",
    "http://www.amazon.com/gp/product/B009NRNQCK",
    "http://www.amazon.com/gp/product/B009NRXQLQ",
    "http://www.amazon.com/gp/product/B009NRVSTI");
    
    magnetChange();
    
    basicChange();
    
    $("#introCell1 .typeImg1").click(function(){
        magnetType=0;
        magnetChange();
    })
    
    $("#introCell1 .typeImg2").click(function(){
        magnetType=1;
        magnetChange();
    })
    
    $("#introCell1 .Pink").click(function(){
        magnetColor=1;
        magnetChange();
    })
    
    $("#introCell1 .Green").click(function(){
        magnetColor=2;
        magnetChange();
    })
    
    $("#introCell1 .Grey").click(function(){
        magnetColor=3;
        magnetChange();
    })
    
    $("#introCell1 .Orange").click(function(){
        magnetColor=4;
        magnetChange();
    })
    
    $("#introCell1 .Blue").click(function(){
        magnetColor=5;
        magnetChange();
    })
    
    
    
    //basic
    
    $("#introCell2 .typeImg1").click(function(){
        basicType=0;
        basicChange();
    })
    
    $("#introCell2 .typeImg2").click(function(){
        basicType=1;
        basicChange();
    })
    
    $("#introCell2 .Pink").click(function(){
        basicColor=1;
        basicChange();
    })
    
    $("#introCell2 .Green").click(function(){
        basicColor=2;
        basicChange();
    })
    
    $("#introCell2 .Grey").click(function(){
        basicColor=3;
        basicChange();
    })
    
    $("#introCell2 .Orange").click(function(){
        basicColor=4;
        basicChange();
    })
    
    $("#introCell2 .Blue").click(function(){
        basicColor=5;
        basicChange();
    })
    
    function magnetChange(){
        if(magnetType==0) {
            $("#introCell1 .introBoxPrice").text("$8.99");
            $("#introCell1 .typeImg1").addClass("borderBlue");
            $("#introCell1 .typeImg2").removeClass("borderBlue");
        }
        if(magnetType==1) {
            $("#introCell1 .introBoxPrice").text("$9.99");
            $("#introCell1 .typeImg2").addClass("borderBlue");
            $("#introCell1 .typeImg1").removeClass("borderBlue");
        }
        
        if(magnetColor==1) {
            
            $("#introCell1 .colorBoxCell").removeClass("borderBlue");
            $("#introCell1 .Pink").addClass("borderBlue");
        }
        if(magnetColor==2) {
            
            $("#introCell1 .colorBoxCell").removeClass("borderBlue");
            $("#introCell1 .Green").addClass("borderBlue");
        }
        if(magnetColor==3) {
            
            $("#introCell1 .colorBoxCell").removeClass("borderBlue");
            $("#introCell1 .Grey").addClass("borderBlue");
        }
        if(magnetColor==4) {
            
            $("#introCell1 .colorBoxCell").removeClass("borderBlue");
            $("#introCell1 .Orange").addClass("borderBlue");
        }
        if(magnetColor==5) {
            
            $("#introCell1 .colorBoxCell").removeClass("borderBlue");
            $("#introCell1 .Blue").addClass("borderBlue");
        }
        magnetStatus=magnetType*5+magnetColor;
        $("#introCell1 .introBoxImg").css("background-image","url(image/buy/buy_magnet"+magnetStatus+".png)");
       
        
    }
    
    //basic
    function basicChange(){
        if(basicType==0) {
            $("#introCell2 .introBoxPrice").text("$5.99");
            $("#introCell2 .typeImg1").addClass("borderBlue");
            $("#introCell2 .typeImg2").removeClass("borderBlue");
        }
        if(basicType==1) {
            $("#introCell2 .introBoxPrice").text("$6.99");
            $("#introCell2 .typeImg2").addClass("borderBlue");
            $("#introCell2 .typeImg1").removeClass("borderBlue");
        }
        
        if(basicColor==1) {
            
            $("#introCell2 .colorBoxCell").removeClass("borderBlue");
            $("#introCell2 .Pink").addClass("borderBlue");
        }
        if(basicColor==2) {
            
            $("#introCell2 .colorBoxCell").removeClass("borderBlue");
            $("#introCell2 .Green").addClass("borderBlue");
        }
        if(basicColor==3) {
            
            $("#introCell2 .colorBoxCell").removeClass("borderBlue");
            $("#introCell2 .Grey").addClass("borderBlue");
        }
        if(basicColor==4) {
            
            $("#introCell2 .colorBoxCell").removeClass("borderBlue");
            $("#introCell2 .Orange").addClass("borderBlue");
        }
        if(basicColor==5) {
            
            $("#introCell2 .colorBoxCell").removeClass("borderBlue");
            $("#introCell2 .Blue").addClass("borderBlue");
        }
        basicStatus=basicType*5+basicColor;
        $("#introCell2 .introBoxImg").css("background-image","url(image/buy/buy_basic"+basicStatus+".png)");
       
        
    }
    
    $("#introCell1 .learnMore").click(function() {
      window.location = "magnet.html"
    })
    
    $("#introCell2 .learnMore").click(function() {
      window.location = "basic.html"
    })
    
    $("#introCell3 .learnMore").click(function() {
      window.location = "infinite.html"
    })
    
    $("#introCell1 .buyButton2").click(function() {
      magnetStatus=magnetType*5+magnetColor;
      
      window.open(magnetURL[magnetStatus-1],"blank");
    })
    
    $("#introCell2 .buyButton2").click(function() {
      basicStatus=basicType*5+basicColor;
      
      window.open(basicURL[basicStatus-1],"blank");
    })
    
    $("#introCell1 .amazonImg").click(function() {
      magnetStatus=magnetType*5+magnetColor;
      
      window.open(magnetURL[magnetStatus-1],"blank");
    })
    
    $("#introCell2 .amazonImg").click(function() {
      basicStatus=basicType*5+basicColor;
      
      window.open(basicURL[basicStatus-1],"blank");
    })
    
    //no use
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
    
    
    
    
  
})
   
    






















