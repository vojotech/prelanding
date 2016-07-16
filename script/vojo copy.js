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
    
    
    
    $("#copy0c").hide();
    $("#copy1c").hide();
    $("#copy2c").hide();
    $("#copy3c").hide();
    $("#copy4c").hide();
    $("#copy5c").hide();
    
    $("#loading0icon").hide();
    $("#loading1icon").hide();
    $("#loading2icon").hide();
    $("#loading3icon").hide();
    $("#loading4icon").hide();
    $("#loading5icon").hide();
    
    //prevent the hover of individual button
    var preventHover=0;
    //prevent the hover of selectAll button
    var preventHover2=0;
    //select all state
    var selectAll=0;
    //
    var preSizes = new Array(
        new Array(1, 1, 1, 1, 1, 1),
        new Array(1, 1, 1, 1, 1, 1),
        new Array(1, 1, 1, 1, 1, 1),
        new Array(1, 1, 1, 1, 1, 1),
        new Array(1, 1, 1, 1, 1, 1),
        new Array(1, 1, 1, 1, 1, 1)
    );
    
    //preSizes ID
    var preSizesId=0;
    var editorId=0;
    
    var topHeight = $("#top-header").height();
	var negHeight = topHeight + $("bottom-footer").height();
	
	$("#container").css("height",$(document).height() - negHeight);
	$("#container").css("margin-top", topHeight);
	
	$("#top-header").css("width",$(document).width());
	$("#navigation").css("width",$(document).width());
	$("#bottom-footer").css("width",$(document).width());
	$("title-bar").css("width",$(document).width());
    
    //initialize
    $(".adsIdeaButtonSelected").hide();
    $(".navSelectedAll").hide();
    

    
    //
    $("#actual-size").click(function(){
        
        $("#thumbnail").removeClass("active");
        $("#actual-size").addClass("active");
        $(".sizes-selection-area").css("height",29);
        sizes=3;
        select();
        
    })
    
    //select states
    var ideas=new Array();
    for (i=0;i<6;i++){
        ideas[i]=0;
    }
    
    function buttonChange(){
        
        for (i=0;i<6;i++){
            
            if(ideas[i]==1){
                $("#copy"+i+ " .adsIdeaButtonSelect").hide();
                $("#copy"+i+ " .adsIdeaButtonSelected").show();   
            }
            if(ideas[i]==0){
                $("#copy"+i+ " .adsIdeaButtonSelect").show();
                $("#copy"+i+ " .adsIdeaButtonSelected").hide();
            }

        }
    }
    
    //bottom save and preview button toggle
   
    function bottomButtons() {
        for (i=0;i<6;i++){
            if(ideas[i]==1){
                $(".saveAdsButton").removeClass("disabled");
                $(".previewAdsButton").removeClass("disabled");
                break;            
            }
            if(ideas[i]==0){
                $(".saveAdsButton").addClass("disabled");
                $(".previewAdsButton").addClass("disabled");
            }
                
        }
    }
    
    //select button
    $(".selectButton").click(function(){
        var id = $(this).parents(".idSelector").attr("id");
        ideas[id.substr(4,1)]=1;
        buttonChange();
        preventHover=1;
        bottomButtons();
        
    })
    
    

    
    
    $(".selectedButton").click(function(){
        var id = $(this).parents(".idSelector").attr("id");
        ideas[id.substr(4,1)]=0;
        buttonChange();
        $(".navSelectAll").show();
        $(".navSelectedAll").hide();
        bottomButtons();

    })
    
    $(".selectedButton").hover(function(){
        var id = $(this).parents(".idSelector").attr("id");
        if(preventHover==0){
        $("#"+id+ " .selectedButton").removeClass("featured");
        $("#"+id+ " .selectedButton").addClass("save");
        $("#"+id+ " .selectedButton").text("Deselect");
        }
    },function(){
        var id = $(this).parents(".idSelector").attr("id");
        $("#"+id+ " .selectedButton").addClass("featured");
        $("#"+id+ " .selectedButton").removeClass("save");
        $("#"+id+ " .selectedButton").text("Selected");
        preventHover=0;
    })
    
    //select all button

    
    $(".navSelectAll").click(function(){
        $(".navSelectAll").hide();
        $(".navSelectedAll").show();
        preventHover2=1;
        for (i=0;i<=6;i++){
        ideas[i]=1;
        }
        buttonChange();
        bottomButtons();
    })
    
    $(".navSelectedAll").click(function(){
        $(".navSelectAll").show();
        $(".navSelectedAll").hide();
        for (i=0;i<=6;i++){
        ideas[i]=0;
        }
        buttonChange();
        bottomButtons();
    })
    
    $(".navSelectedAll").hover(function(){
        
        if(preventHover2==0){
        $(".navSelectedAllButton").removeClass("featured");
        $(".navSelectedAllButton").addClass("save");
        $(".navSelectedAllButton").text("Deselect All");
        }
    },function(){
        
        $(".navSelectedAllButton").addClass("featured");
        $(".navSelectedAllButton").removeClass("save");
        $(".navSelectedAllButton").text("Selected all");
        preventHover2=0;
    })
    
    //close button
    $(".trashButton").click(function(){
        var id = $(this).parents(".idSelector").attr("id");
        if(id.length==5){
            $("#loading"+id.substr(4,1)).removeClass("closeLoading");
            $("#"+id).hide();
            $("#loading"+id.substr(4,1)+"icon").delay(300).fadeIn(300).delay(800).fadeOut(300);
            $("#loading"+id.substr(4,1)).addClass("closeLoading");
            $("#"+id+"c").delay(1800).fadeIn(500);
;
            
        }
        if(id.length==6){
            $("#loading"+id.substr(4,1)).removeClass("closeLoading");
            $("#"+id).hide();
            $("#loading"+id.substr(4,1)).addClass("closeLoading");
            $("#loading"+id.substr(4,1)+"icon").delay(300).fadeIn(300).delay(800).fadeOut(300);
            $("#"+id.substr(0,5)).delay(1800).fadeIn(500);
            
        }
    })
    
    $(".cover").hide();
    $("#popup-sizes").hide();
        
//pop up preview sizes
    $(".previewButton").click(function(){
        $(".cover").show();
        $("#popup-sizes").show();
        var id = $(this).parents(".idSelector").attr("id");
        preSizesId=id.substr(4,1);
        $(".size336img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-336.jpg)");
        $(".size300img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-300.jpg)");
        $(".size120img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-120.jpg)");
        $(".size160img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-160.jpg)");
        $(".size468img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-468.jpg)");
        $(".size728img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-728.jpg)");

        for (i=0;i<6;i++){
            if(preSizes[preSizesId][i]==1){
                document.getElementById("checkBox"+i).checked=true;
            }
            else{
                document.getElementById("checkBox"+i).checked=false;
            }
        }
    })  
    
    $(".preSizesDoneButton").click(function(){
       
        var totalSizes=0;
        for (i=0;i<6;i++){
            var checkStatus=document.getElementById("checkBox"+i).checked;
            
            if(checkStatus){
                preSizes[preSizesId][i]=1;
                totalSizes++;
            }
            else{
                preSizes[preSizesId][i]=0;
            }
            
            
        }
        $("#copy"+preSizesId+" .adsIdeaSizesLink").text(totalSizes+" sizes");
        $(".cover").hide();
        $("#popup-sizes").hide();
        ideas[preSizesId]=1;
        buttonChange();
        bottomButtons();
    })
    
    
    $(".adsIdeaSizesLink").click(function(){
        $(".cover").show();
        $("#popup-sizes").show();
        var id = $(this).parents(".idSelector").attr("id");
        preSizesId=id.substr(4,1);
        $(".size336img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-336.jpg)");
        $(".size300img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-300.jpg)");
        $(".size120img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-120.jpg)");
        $(".size160img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-160.jpg)");
        $(".size468img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-468.jpg)");
        $(".size728img").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-728.jpg)");

        for (i=0;i<6;i++){
            if(preSizes[preSizesId][i]==1){
                document.getElementById("checkBox"+i).checked=true;
            }
            else{
                document.getElementById("checkBox"+i).checked=false;
            }
        }

    })
   
    $(".aaw-msg-dismiss-new").click(function(){
        $(".cover").hide();
        $("#popup-sizes").hide();
    })  
    
    $(".preSizesCancelButton").click(function(){
        $(".cover").hide();
        $("#popup-sizes").hide();
    })
    
    
//pop up option
    $("#options").hide();
    
    $(".navOption").click(function(){
        $(".cover").show();
        $("#options").show();
    })    
    
    $(".optionCancelButton").click(function(){
        $(".cover").hide();
        $("#options").hide();
    }) 
    
    $(".optionSaveButton").click(function() {
        window.location.href = window.location.href;
        
    });
    
    //pop up editor
    $("#editor").hide();
    
     
    $(".editorButton").click(function(){
        var id = $(this).parents(".idSelector").attr("id");
        editorId=id.substr(4,1);
        $(".cover").show();
        $("#editor").show();
        $(".image-prev").css("background-image","url(images/examples/ads"+id.substr(4,1)+"-300.jpg)");
      
    })     
    
    $(".editorCancelButton").click(function(){
        $(".cover").hide();
        $("#editor").hide();
    }) 
    
    $(".editorDoneButton").click(function(){
        $(".cover").hide();
        $("#editor").hide();
        ideas[editorId]=1;
        buttonChange();
        bottomButtons();
    }) 
 
 //preview all pop up
    
    $("#previewAllBox").hide();
    $(".backAdsButton").hide();
    
    $("#previewAllToggleTitle1").hide();
    
    var adsShowing=0;
    
    var arrowPos=0;
    
    var position=new Array();
    for (i=0;i<6;i++){
        position[i]=-1;
    }
    
    for (i=0;i<6;i++){
        $("#previewAllBox"+i).hide();
    }
    
    $(".previewAdsButton").click(function(){
        
        for (i=0;i<6;i++){
           $("#previewAllBox"+i).hide();
                
        }
        
        
        $(".coverMainArea").show();
        $("#previewAllBox").show();
        $(".backAdsButton").show();
        $(".previewAdsButton").hide();
        $(".cancelAdsButton").hide();
        
        $("#previewAllToggleTitle0").hide();
        $("#previewAllToggleTitle1").show();
        
        
        $(".navUpdateIdeasButton").hide();
        $(".navSelectAllButton").hide();
        
        
        var j=0;
        for (i=0;i<6;i++){
            if(ideas[i]==1){
                $("#previewAllBox"+i).show();
                position[j]=i;
                j++;
            }
        }
        adsShowing=position[0];
        adsShow();
        
        for (i=0;i<6;i++){
            $("#previewAllBox"+i).removeClass("previewAllOpacity");
            $("#previewAllBox"+i+" .previewAllThumb").removeClass("previewAllBorder");
            $("#previewAllBox"+i+" .previewAllTitleBox").removeClass("previewAllBoldText");
        }
        $("#previewAllBox"+position[0]).addClass("previewAllOpacity");
        $("#previewAllBox"+position[0]+" .previewAllThumb").addClass("previewAllBorder");
        $("#previewAllBox"+position[0]+" .previewAllTitleBox").addClass("previewAllBoldText");
        
        arrowPos=0;
        arrowRePos();
    })
    
    $(".backAdsButton").click(function(){
        $(".coverMainArea").hide();
        $("#previewAllBox").hide();
        $(".backAdsButton").hide();
        $(".previewAdsButton").show();
        $(".cancelAdsButton").show();
        
        $("#previewAllToggleTitle0").show();
        $("#previewAllToggleTitle1").hide();
        
        $(".navUpdateIdeasButton").show();
        $(".navSelectAllButton").show();
    })
    
    function arrowRePos(){
        switch(arrowPos)
        {
            case 0:
              $("#arrowBlue").css("left","37px");
              break;
            case 1:
              $("#arrowBlue").css("left","169px");
              break;
            case 2:
              $("#arrowBlue").css("left","308px");
              break;
            case 3:
              $("#arrowBlue").css("left","440px");
              break;
            case 4:
              $("#arrowBlue").css("left","573px");
              break;
            case 5:
              $("#arrowBlue").css("left","706px");
              break;      
        }
    }
    
    
    
    function adsShow(){
        $("#size336All .size336img").css("background-image","url(images/examples/ads"+adsShowing+"-336.jpg)");
        $("#size300All .size300img").css("background-image","url(images/examples/ads"+adsShowing+"-300.jpg)");
        $("#size120All .size120img").css("background-image","url(images/examples/ads"+adsShowing+"-120.jpg)");
        $("#size160All .size160img").css("background-image","url(images/examples/ads"+adsShowing+"-160.jpg)");
        $("#size468All .size468img").css("background-image","url(images/examples/ads"+adsShowing+"-468.jpg)");
        $("#size728All .size728img").css("background-image","url(images/examples/ads"+adsShowing+"-728.jpg)");
        
        for (i=0;i<6;i++){
            if(preSizes[adsShowing][i]==1){
                $(".sizeAll"+i).show();
            }
            else{
                $(".sizeAll"+i).hide();
            }
        }
    }
    
    
    $("#previewAllBox0").click(function(){
        for (i=0;i<6;i++){
            $("#previewAllBox"+i).removeClass("previewAllOpacity");
            $("#previewAllBox"+i+" .previewAllThumb").removeClass("previewAllBorder");
            $("#previewAllBox"+i+" .previewAllTitleBox").removeClass("previewAllBoldText");
        }
        
        for (i=0;i<6;i++){
            if(position[i]==0){
                arrowPos=i;
                arrowRePos();
            }
        }
        adsShowing=0;
        adsShow();
        $("#previewAllBox0").addClass("previewAllOpacity");
        $("#previewAllBox0 .previewAllThumb").addClass("previewAllBorder");
        $("#previewAllBox0 .previewAllTitleBox").addClass("previewAllBoldText");
    })
    
    $("#previewAllBox1").click(function(){
        for (i=0;i<6;i++){
            $("#previewAllBox"+i).removeClass("previewAllOpacity");
            $("#previewAllBox"+i+" .previewAllThumb").removeClass("previewAllBorder");
            $("#previewAllBox"+i+" .previewAllTitleBox").removeClass("previewAllBoldText");
        }
        for (i=0;i<6;i++){
            if(position[i]==1){
                arrowPos=i;
                arrowRePos();
            }
        }
        adsShowing=1;
        adsShow();
        $("#previewAllBox1").addClass("previewAllOpacity");
        $("#previewAllBox1 .previewAllThumb").addClass("previewAllBorder");
        $("#previewAllBox1 .previewAllTitleBox").addClass("previewAllBoldText");
    })
    
    $("#previewAllBox2").click(function(){
        for (i=0;i<6;i++){
            $("#previewAllBox"+i).removeClass("previewAllOpacity");
            $("#previewAllBox"+i+" .previewAllThumb").removeClass("previewAllBorder");
            $("#previewAllBox"+i+" .previewAllTitleBox").removeClass("previewAllBoldText");
        }
        for (i=0;i<6;i++){
            if(position[i]==2){
                arrowPos=i;
                arrowRePos();
            }
        }
        adsShowing=2;
        adsShow();
        $("#previewAllBox2").addClass("previewAllOpacity");
        $("#previewAllBox2 .previewAllThumb").addClass("previewAllBorder");
        $("#previewAllBox2 .previewAllTitleBox").addClass("previewAllBoldText");
    })
    
    $("#previewAllBox3").click(function(){
        for (i=0;i<6;i++){
            $("#previewAllBox"+i).removeClass("previewAllOpacity");
            $("#previewAllBox"+i+" .previewAllThumb").removeClass("previewAllBorder");
            $("#previewAllBox"+i+" .previewAllTitleBox").removeClass("previewAllBoldText");
        }
        for (i=0;i<6;i++){
            if(position[i]==3){
                arrowPos=i;
                arrowRePos();
            }
        }
        adsShowing=3;
        adsShow();
        $("#previewAllBox3").addClass("previewAllOpacity");
        $("#previewAllBox3 .previewAllThumb").addClass("previewAllBorder");
        $("#previewAllBox3 .previewAllTitleBox").addClass("previewAllBoldText");
    })
    
    $("#previewAllBox4").click(function(){
        for (i=0;i<6;i++){
            $("#previewAllBox"+i).removeClass("previewAllOpacity");
            $("#previewAllBox"+i+" .previewAllThumb").removeClass("previewAllBorder");
            $("#previewAllBox"+i+" .previewAllTitleBox").removeClass("previewAllBoldText");
        }
        for (i=0;i<6;i++){
            if(position[i]==4){
                arrowPos=i;
                arrowRePos();
            }
        }
        adsShowing=4;
        adsShow();
        $("#previewAllBox4").addClass("previewAllOpacity");
        $("#previewAllBox4 .previewAllThumb").addClass("previewAllBorder");
        $("#previewAllBox4 .previewAllTitleBox").addClass("previewAllBoldText");
    })
    
    $("#previewAllBox5").click(function(){
        for (i=0;i<6;i++){
            $("#previewAllBox"+i).removeClass("previewAllOpacity");
            $("#previewAllBox"+i+" .previewAllThumb").removeClass("previewAllBorder");
            $("#previewAllBox"+i+" .previewAllTitleBox").removeClass("previewAllBoldText");
        }
        for (i=0;i<6;i++){
            if(position[i]==5){
                arrowPos=i;
                arrowRePos();
            }
        }
        adsShowing=5;
        adsShow();
        $("#previewAllBox5").addClass("previewAllOpacity");
        $("#previewAllBox5 .previewAllThumb").addClass("previewAllBorder");
        $("#previewAllBox5 .previewAllTitleBox").addClass("previewAllBoldText");
    })
   
    $(".previewAllCancelButton").click(function(){
        $(".cover").hide();
        $("#previewAllBox").hide();
    })
    
    
    
    
    
    
    
    
    /*AD TYPES TOGGLE*/
/*
$("#adtype-text").click(function(){
	window.location = "text-ad.html";
})

$("#adtype-image").click(function(){
	$(this).find(".aw-popupmenu").show();
	$(this).find("#adtype-ideas").click(function(){
		window.location = "https://www.corp.google.com/~gonglue/DAB/Prototype/gallerypage.html";
	})
	$(this).find("#adtype-scratch").click(function(){
		window.location = "https://www.corp.google.com/~ecreal/burdock/prototype-tabbed/ad.html";
        })
        
})
 */

   $(".saveAdsButton").click(function(){
	window.location = "index.html";
})

$(".cancelAdsButton").click(function(){
	window.location = "index.html";
})

$(document).mouseup(function (e)
{
    var container = $(".aw-popupmenu");

    if (container.has(e.target).length === 0)
    {
        container.hide();
    }
});
  

$(".scrollBar").scroll(function(){
    var scrollWay=$(".scrollBar").scrollTop();
    var scrollHeight=$(".scrollBar").height();
    $(".shadowBottom").css("bottom",-scrollWay);
    $(".shadowTop2").css("top",scrollWay);
    var scrollBottom=846-scrollHeight-scrollWay;
    //alert(scrollBottom);
    $(".shadowTop2").css("opacity",scrollWay*0.2);
    $(".shadowBottom").css("opacity",scrollBottom*0.2);
    
    
}
)

$("#previewAllBody").scroll(function(){
    var scrollWay=$("#previewAllBody").scrollTop();
    var scrollHeight=$("#previewAllBody").height();
    $(".shadowBottom").css("bottom",-scrollWay);
    $(".shadowTop").css("top",scrollWay);
    var scrollBottom=846-scrollHeight-scrollWay;
    //alert(scrollBottom);
    $(".shadowTop").css("opacity",scrollWay*0.2);
    $(".shadowBottom").css("opacity",scrollBottom*0.2);
    

    
    
}
)

$(".adsIdeaArea").scroll(function(){
    var scrollWay=$(".adsIdeaArea").scrollTop();
    var scrollHeight=$(".adsIdeaArea").height();
    $(".shadowBottom").css("bottom",-scrollWay);
    $(".shadowTop").css("top",scrollWay);
    var scrollBottom=846-scrollHeight-scrollWay;
    //alert(scrollBottom);
    $(".shadowTop").css("opacity",scrollWay*0.2);
    $(".shadowBottom").css("opacity",scrollBottom*0.2);
    

    
    
}
)


	$(".navInstruction").hide();


        
        $("#title-bar").hide();


/*TOOLTIP
$(".adsIdeaButtonPreview button").mouseover(function(){
	$(this).parent.find(".bur-tooltip").css({"left": $(this).position().left - 7});
	$(this).parent.find(".bur-tooltip").css({"opacity":"1"});
}).mouseout(function(){
	$(this).parent.find(".bur-tooltip").css({"opacity":"0"});
})
*/
  
})
   
    






















