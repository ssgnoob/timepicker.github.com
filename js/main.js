$(function(){
    var wheeltime=0;
    var tsup=0;
    var tsdown=0;
    var wheeltime2=0;
    var tsup2=0;
    var tsdown2=0;
    var wheeltimeb=0;
    var tsupb=0;
    var tsdownb=0;
    var wheeltimeb2=0;
    var tsupb2=0;
    var tsdownb2=0;
    var sessiontime=0;
    var breaktime=0;
    var sessiontemp=0;
    var breaktemp=0;
   $(".settime .set2").on("mousewheel",function (event) {
       event.stopPropagation();
       event.preventDefault();
        var ts=event.timeStamp;
      if(event.deltaY==1) {
          if(ts-tsdown<200){
              $(this).css("transition","none");
          }
          else {
              $(this).css("transition"," transform 200ms linear");
          }
          tsdown=ts;
         if($(this).css("transform")=="matrix(1, 0, 0, 1, 0, 0)"){
             $(this).css("transform","translateY(-450px)");
             wheeltime=-9;
             $(".settime .set2 li:nth-child(11)").addClass("near");
             $(".settime .set2 li:nth-child(12)").addClass("show");
             $(".settime .set2 li:nth-child(13)").addClass("near");
             $(".settime .set2 li:nth-child(2)").removeClass("near");
             $(".settime .set2 li:nth-child(3)").removeClass("show");
             $(".settime .set2 li:nth-child(4)").removeClass("near");
         }
          else{
          wheeltime++;
          $(this).css("transform", "translateY("+50*wheeltime+"px)");
             $(".settime .set2 li:nth-child("+parseInt(3-wheeltime)+")").removeClass("near");
             $(".settime .set2 li:nth-child("+parseInt(4-wheeltime)+")").removeClass("show");
             $(".settime .set2 li:nth-child("+parseInt(2-wheeltime)+")").addClass("near");
             $(".settime .set2 li:nth-child("+parseInt(5-wheeltime)+")").removeClass("near");
             $(".settime .set2 li:nth-child("+parseInt(3-wheeltime)+")").addClass("show");
             $(".settime .set2 li:nth-child("+parseInt(4-wheeltime)+")").addClass("near");
          }
      }
      if(event.deltaY==-1){
          if(ts-tsup<200){
              $(this).css("transition","none");
          }
          else {
              $(this).css("transition"," transform 200ms linear");
          }
          tsup=ts;
          if( $(this).css("transform")=="matrix(1, 0, 0, 1, 0, -500)"){
              $(this).css("transition","none");
              $(this).css("transform","translateY(-50px)");
             /* $(".settime ul").css("transition","transform 200ms linear");
              $(".settime ul").css("transform","translateY(-50px)");*/
              wheeltime=-1;
              $(".settime .set2 li:nth-child(3)").addClass("near");
              $(".settime .set2 li:nth-child(4)").addClass("show");
              $(".settime .set2 li:nth-child(5)").addClass("near");
              $(".settime .set2 li:nth-child(12)").removeClass("near");
              $(".settime .set2 li:nth-child(13)").removeClass("show");
              $(".settime .set2 li:nth-child(14)").removeClass("near");
          }else {
              wheeltime--;
              $(this).css("transform", "translateY(" + 50 * wheeltime + "px)");
              $(".settime .set2 li:nth-child("+parseInt(1-wheeltime)+")").removeClass("near");
              $(".settime .set2 li:nth-child("+parseInt(2-wheeltime)+")").removeClass("show");
              $(".settime .set2 li:nth-child("+parseInt(2-wheeltime)+")").addClass("near");
              $(".settime .set2 li:nth-child("+parseInt(3-wheeltime)+")").removeClass("near");
              $(".settime .set2 li:nth-child("+parseInt(3-wheeltime)+")").addClass("show");
              $(".settime .set2 li:nth-child("+parseInt(4-wheeltime)+")").addClass("near");
          }

      }

   });
    $(".settime .set1").on("mousewheel",function (event) {
        event.stopPropagation();
        event.preventDefault();
        var ts2=event.timeStamp;
        if(event.deltaY==1) {
            if(ts2-tsdown2<200){
                $(this).css("transition","none");
            }
            else {
                $(this).css("transition"," transform 200ms linear");
            }
            tsdown2=ts2;
            if($(this).css("transform")=="matrix(1, 0, 0, 1, 0, 0)"){
                $(this).css("transform","translateY(-300px)");
                wheeltime2=-6;
                $(".settime .set1 li:nth-child(8)").addClass("near");
                $(".settime .set1 li:nth-child(9)").addClass("show");
                $(".settime .set1 li:nth-child(10)").addClass("near");
                $(".settime .set1 li:nth-child(2)").removeClass("near");
                $(".settime .set1 li:nth-child(3)").removeClass("show");
                $(".settime .set1 li:nth-child(4)").removeClass("near");
            }
            else{
                wheeltime2++;
                $(this).css("transform", "translateY("+50*wheeltime2+"px)");
                $(".settime .set1 li:nth-child("+parseInt(3-wheeltime2)+")").removeClass("near");
                $(".settime .set1 li:nth-child("+parseInt(4-wheeltime2)+")").removeClass("show");
                $(".settime .set1 li:nth-child("+parseInt(2-wheeltime2)+")").addClass("near");
                $(".settime .set1 li:nth-child("+parseInt(5-wheeltime2)+")").removeClass("near");
                $(".settime .set1 li:nth-child("+parseInt(3-wheeltime2)+")").addClass("show");
                $(".settime .set1 li:nth-child("+parseInt(4-wheeltime2)+")").addClass("near");
            }
        }
        if(event.deltaY==-1){
            if(ts2-tsup2<200){
                $(this).css("transition","none");
            }
            else {
                $(this).css("transition"," transform 200ms linear");
            }
            tsup2=ts2;
            if( $(this).css("transform")=="matrix(1, 0, 0, 1, 0, -300)"){
               /* $(this).css("transition","none");
                $(this).css("transform","translateY(0px)");
                 $(".settime ul").css("transition","transform 200ms linear");*/
                 $(this).css("transform","translateY(0px)");
                wheeltime2=0;
                $(".settime .set1 li:nth-child(2)").addClass("near");
                $(".settime .set1 li:nth-child(3)").addClass("show");
                $(".settime .set1 li:nth-child(4)").addClass("near");
                $(".settime .set1 li:nth-child(8)").removeClass("near");
                $(".settime .set1 li:nth-child(9)").removeClass("show");
                $(".settime .set1 li:nth-child(10)").removeClass("near");
            }else {
                wheeltime2--;
                $(this).css("transform", "translateY(" + 50 * wheeltime2 + "px)");
                $(".settime .set1 li:nth-child("+parseInt(1-wheeltime2)+")").removeClass("near");
                $(".settime .set1 li:nth-child("+parseInt(2-wheeltime2)+")").removeClass("show");
                $(".settime .set1 li:nth-child("+parseInt(2-wheeltime2)+")").addClass("near");
                $(".settime .set1 li:nth-child("+parseInt(3-wheeltime2)+")").removeClass("near");
                $(".settime .set1 li:nth-child("+parseInt(3-wheeltime2)+")").addClass("show");
                $(".settime .set1 li:nth-child("+parseInt(4-wheeltime2)+")").addClass("near");
            }

        }

    });
    $(".setbreak .setb2").on("mousewheel",function (event) {
        event.stopPropagation();
        event.preventDefault();
        var tsb2=event.timeStamp;
        if(event.deltaY==1) {
            if(tsb2-tsdownb2<200){
                $(this).css("transition","none");
            }
            else {
                $(this).css("transition"," transform 200ms linear");
            }
            tsdownb2=tsb2;
            if($(this).css("transform")=="matrix(1, 0, 0, 1, 0, 0)"){
                $(this).css("transform","translateY(-450px)");
                wheeltimeb2=-9;
                $(".setbreak .setb2 li:nth-child(11)").addClass("near");
                $(".setbreak .setb2 li:nth-child(12)").addClass("show");
                $(".setbreak .setb2 li:nth-child(13)").addClass("near");
                $(".setbreak .setb2 li:nth-child(2)").removeClass("near");
                $(".setbreak .setb2 li:nth-child(3)").removeClass("show");
                $(".setbreak .setb2 li:nth-child(4)").removeClass("near");
            }
            else{
                wheeltimeb2++;
                $(this).css("transform", "translateY("+50*wheeltimeb2+"px)");
                $(".setbreak .setb2 li:nth-child("+parseInt(3-wheeltimeb2)+")").removeClass("near");
                $(".setbreak .setb2 li:nth-child("+parseInt(4-wheeltimeb2)+")").removeClass("show");
                $(".setbreak .setb2 li:nth-child("+parseInt(2-wheeltimeb2)+")").addClass("near");
                $(".setbreak .setb2 li:nth-child("+parseInt(5-wheeltimeb2)+")").removeClass("near");
                $(".setbreak .setb2 li:nth-child("+parseInt(3-wheeltimeb2)+")").addClass("show");
                $(".setbreak .setb2 li:nth-child("+parseInt(4-wheeltimeb2)+")").addClass("near");
            }
        }
        if(event.deltaY==-1){
            if(tsb2-tsupb2<200){
                $(this).css("transition","none");
            }
            else {
                $(this).css("transition"," transform 200ms linear");
            }
            tsupb2=tsb2;
            if( $(this).css("transform")=="matrix(1, 0, 0, 1, 0, -500)"){
                $(this).css("transition","none");
                $(this).css("transform","translateY(-50px)");
                /* $(".settime ul").css("transition","transform 200ms linear");
                 $(".settime ul").css("transform","translateY(-50px)");*/
                wheeltimeb2=-1;
                $(".setbreak .setb2 li:nth-child(3)").addClass("near");
                $(".setbreak .setb2 li:nth-child(4)").addClass("show");
                $(".setbreak .setb2 li:nth-child(5)").addClass("near");
                $(".setbreak .setb2 li:nth-child(12)").removeClass("near");
                $(".setbreak .setb2 li:nth-child(13)").removeClass("show");
                $(".setbreak .setb2 li:nth-child(14)").removeClass("near");
            }else {
                wheeltimeb2--;
                $(this).css("transform", "translateY(" + 50 * wheeltimeb2 + "px)");
                $(".setbreak .setb2 li:nth-child("+parseInt(1-wheeltimeb2)+")").removeClass("near");
                $(".setbreak .setb2 li:nth-child("+parseInt(2-wheeltimeb2)+")").removeClass("show");
                $(".setbreak .setb2 li:nth-child("+parseInt(2-wheeltimeb2)+")").addClass("near");
                $(".setbreak .setb2 li:nth-child("+parseInt(3-wheeltimeb2)+")").removeClass("near");
                $(".setbreak .setb2 li:nth-child("+parseInt(3-wheeltimeb2)+")").addClass("show");
                $(".setbreak .setb2 li:nth-child("+parseInt(4-wheeltimeb2)+")").addClass("near");
            }

        }

    });
    $(".setbreak .setb1").on("mousewheel",function (event) {
        event.stopPropagation();
        event.preventDefault();
        var tsb=event.timeStamp;
        if(event.deltaY==1) {
            if(tsb-tsdownb<200){
                $(this).css("transition","none");
            }
            else {
                $(this).css("transition"," transform 200ms linear");
            }
            tsdownb=tsb;
            if($(this).css("transform")=="matrix(1, 0, 0, 1, 0, 0)"){
                $(this).css("transform","translateY(-300px)");
                wheeltimeb=-6;
                $(".setbreak .setb1 li:nth-child(8)").addClass("near");
                $(".setbreak .setb1 li:nth-child(9)").addClass("show");
                $(".setbreak .setb1 li:nth-child(10)").addClass("near");
                $(".setbreak .setb1 li:nth-child(2)").removeClass("near");
                $(".setbreak .setb1 li:nth-child(3)").removeClass("show");
                $(".setbreak .setb1 li:nth-child(4)").removeClass("near");
            }
            else{
                wheeltimeb++;
                $(this).css("transform", "translateY("+50*wheeltimeb+"px)");
                $(".setbreak .setb1 li:nth-child("+parseInt(3-wheeltimeb)+")").removeClass("near");
                $(".setbreak .setb1 li:nth-child("+parseInt(4-wheeltimeb)+")").removeClass("show");
                $(".setbreak .setb1 li:nth-child("+parseInt(2-wheeltimeb)+")").addClass("near");
                $(".setbreak .setb1 li:nth-child("+parseInt(5-wheeltimeb)+")").removeClass("near");
                $(".setbreak .setb1 li:nth-child("+parseInt(3-wheeltimeb)+")").addClass("show");
                $(".setbreak .setb1 li:nth-child("+parseInt(4-wheeltimeb)+")").addClass("near");
            }
        }
        if(event.deltaY==-1){
            if(tsb-tsupb<200){
                $(this).css("transition","none");
            }
            else {
                $(this).css("transition"," transform 200ms linear");
            }
            tsupb=tsb;
            if( $(this).css("transform")=="matrix(1, 0, 0, 1, 0, -300)"){
                /* $(this).css("transition","none");
                 $(this).css("transform","translateY(0px)");
                 $(".settime ul").css("transition","transform 200ms linear");*/
                $(this).css("transform","translateY(0px)");
                wheeltimeb=0;
                $(".setbreak .setb1 li:nth-child(2)").addClass("near");
                $(".setbreak .setb1 li:nth-child(3)").addClass("show");
                $(".setbreak .setb1 li:nth-child(4)").addClass("near");
                $(".setbreak .setb1 li:nth-child(8)").removeClass("near");
                $(".setbreak .setb1 li:nth-child(9)").removeClass("show");
                $(".setbreak .setb1 li:nth-child(10)").removeClass("near");
            }else {
                wheeltimeb--;
                $(this).css("transform", "translateY(" + 50 * wheeltimeb + "px)");
                $(".setbreak .setb1 li:nth-child("+parseInt(1-wheeltimeb)+")").removeClass("near");
                $(".setbreak .setb1 li:nth-child("+parseInt(2-wheeltimeb)+")").removeClass("show");
                $(".setbreak .setb1 li:nth-child("+parseInt(2-wheeltimeb)+")").addClass("near");
                $(".setbreak .setb1 li:nth-child("+parseInt(3-wheeltimeb)+")").removeClass("near");
                $(".setbreak .setb1 li:nth-child("+parseInt(3-wheeltimeb)+")").addClass("show");
                $(".setbreak .setb1 li:nth-child("+parseInt(4-wheeltimeb)+")").addClass("near");
            }
        }

    });
    $(".control").click(function () {
        if($(this).html()=="Go!"){
            var sessiontime2 = $(".set1 li[class='show']").html() + $(".set2 li[class='show']").html();
            var breaktime2 = $(".setb1 li[class='show']").html() + $(".setb2 li[class='show']").html();
            var min1=$(".min1").html();
            var min2=$(".min2").html();
            var sec1=$(".sec1").html();
            var sec2=$(".sec2").html();
            if(min1!=0 || min2!=0 || sec1!=0 || sec2!=0 || typeof sec!="undefined"){
                if(sessiontemp!=sessiontime2 || breaktemp!=breaktime2){
                    sessiontemp =sessiontime2;
                    breaktemp=breaktime2;
                    settime(sessiontime2,breaktime2);
                }else {
                    if (sec == "00") {
                        id = window.setInterval(setbreaktime2, 1000);
                        id2 = window.setTimeout(function () {
                            $(".sec2").html("0");
                            if ($(".sec2").parent("li").css("transform") == "matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)") {
                                $(".sec2").parent("li").css("transform", "rotateY(0deg)");
                            } else {
                                $(".sec2").parent("li").css("transform", "rotateY(360deg)");
                            }
                            clearInterval(id);
                            settime(sessiontime2, breaktime2);
                        }, breaksec * 60 * 1000)
                    }
                    else {
                        id = window.setInterval(settime2, 1000);
                        id2 = window.setTimeout(function () {
                            $(".sec2").html("0");
                            if ($(".sec2").parent("li").css("transform") == "matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)") {
                                $(".sec2").parent("li").css("transform", "rotateY(0deg)");
                            } else {
                                $(".sec2").parent("li").css("transform", "rotateY(360deg)");
                            }
                            clearInterval(id);
                            setbreaktime(sessiontime2, breaktime2);
                        }, sec * 1000);
                    }
                }
            }
            else {
                sessiontemp =sessiontime2;
                breaktemp=breaktime2;
                $(".min1").html(sessiontime2[0]);
                $(".min2").html(sessiontime2[1]);
                settime(sessiontime2,breaktime2);
            }
        $(this).html("Stop!");
        }
        else{
            clearInterval(id);
            clearTimeout(id2);
            $(this).html("Go!");
        }
    })
});

/*
function settime(t) {
    var id4=window.setInterval(setsec2,1000);
    var id3=window.setInterval(setsec1,10000);
    var id2=window.setInterval(setmin2,60000);
    var id1=window.setInterval(setmin1,600000);
    setmin2();
    setsec1();
    if(t[1]==0){
        setmin1();
    }
    var id5=window.setTimeout(function () {
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        clearInterval(id4);
    },t*60*1000);

}*/
function addpoint() {
    var length=$(".title").html().length;
    if($(".title").html()[0]=="s"){
        $(".title").html($(".title").html()+".");
        if(length==10){
            $(".title").html("session");
        }
    }
    else{
        $(".title").html($(".title").html()+".");
        if(length==8){
            $(".title").html("break");
        }
    }
}
function settime(t,t2){
    setmin(t);
     sec=t*60;
     breaksec=t2*60;
     id=window.setInterval(settime2,1000);
    $(".title").html("session");
    var id3=window.setInterval(addpoint,1000);
    id2=window.setTimeout(function () {
        $(".sec2").html("0");
        if($(".sec2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".sec2").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".sec2").parent("li").css("transform", "rotateY(360deg)");
        }
        clearInterval(id);
        setbreaktime(t,t2);
    },t*60*1000);
}
function settime2() {
    sec--;
    if(sec.toString()[sec.length-1]==undefined){
        sec="0"+sec;
    }
    var min=parseInt(sec/60);
    if(min[1]==undefined){
        min="0"+min;
    }
    var min1=$(".min1").html();
    var min2=$(".min2").html();
    var sec1=$(".sec1").html();
    var sec2=$(".sec2").html();
    if($(".sec2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
    {
        $(".sec2").parent("li").css("transform","rotateY(0deg)");
    }else {
        $(".sec2").parent("li").css("transform", "rotateY(360deg)");
    }
    $(".sec2").html(sec.toString()[sec.length-1]);
    if(min[0]!=min1){
        if($(".min1").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".min1").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".min1").parent("li").css("transform", "rotateY(360deg)");
        }
        $(".min1").html(min[0]);
    }
    if(min[1]!=min2){
        if($(".min2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".min2").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".min2").parent("li").css("transform", "rotateY(360deg)");
        }
        $(".min2").html(min[1]);
    }
    if((sec%60).toString()[1]==undefined){
        $(".sec1").html(0);
    }
    else if((sec%60).toString()[0]!=sec1){
        if($(".sec1").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".sec1").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".sec1").parent("li").css("transform", "rotateY(360deg)");
        }
        $(".sec1").html((sec%60).toString()[0]);
    }

}

function setbreaktime(t,t2) {
    setmin(t2);
    id=window.setInterval(setbreaktime2,1000);
    $(".title").html("break");
    var id3=window.setInterval(addpoint,1000);
    id2=window.setTimeout(function () {
        $(".sec2").html("0");
        if($(".sec2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".sec2").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".sec2").parent("li").css("transform", "rotateY(360deg)");
        }
        clearInterval(id);
        settime(t,t2);
    },t2*60*1000)
}
function setbreaktime2() {
    breaksec--;
    if(breaksec.toString()[breaksec.length-1]==undefined){
        breaksec="0"+breaksec;
    }
    var min=parseInt(breaksec/60);
    if(min[1]==undefined){
        min="0"+min;
    }
    var min1=$(".min1").html();
    var min2=$(".min2").html();
    var sec1=$(".sec1").html();
    var sec2=$(".sec2").html();
    if($(".sec2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
    {
        $(".sec2").parent("li").css("transform","rotateY(0deg)");
    }else {
        $(".sec2").parent("li").css("transform", "rotateY(360deg)");
    }
    $(".sec2").html(breaksec.toString()[breaksec.length-1]);
    if(min[0]!=min1){
        if($(".min1").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".min1").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".min1").parent("li").css("transform", "rotateY(360deg)");
        }
        $(".min1").html(min[0]);
    }
    if(min[1]!=min2){
        if($(".min2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".min2").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".min2").parent("li").css("transform", "rotateY(360deg)");
        }
        $(".min2").html(min[1]);
    }
    if((breaksec%60).toString()[1]==undefined){
        $(".sec1").html(0);
    }
    else if((breaksec%60).toString()[0]!=sec1){
        if($(".sec1").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
        {
            $(".sec1").parent("li").css("transform","rotateY(0deg)");
        }else {
            $(".sec1").parent("li").css("transform", "rotateY(360deg)");
        }
        $(".sec1").html((breaksec%60).toString()[0]);
    }

}
function setmin(t){
    if($(".min1").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
    {
        $(".min1").parent("li").css("transform","rotateY(0deg)");
    }else {
        $(".min1").parent("li").css("transform", "rotateY(360deg)");
    }
    $(".min1").html(t[0]);
    if($(".min2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
    {
        $(".min2").parent("li").css("transform","rotateY(0deg)");
    }else {
        $(".min2").parent("li").css("transform", "rotateY(360deg)");
    }
    $(".min2").html(t[1]);
    if($(".sec1").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
    {
        $(".sec1").parent("li").css("transform","rotateY(0deg)");
    }else {
        $(".sec1").parent("li").css("transform", "rotateY(360deg)");
    }
    $(".sec1").html(0);
    if($(".sec2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
    {
        $(".sec2").parent("li").css("transform","rotateY(0deg)");
    }else {
        $(".sec2").parent("li").css("transform", "rotateY(360deg)");
    }
    $(".sec2").html(0);
}
function setmin1() {
    $(".min1").parent("li").css("transform","rotateY(360deg)");
    var val=$(".min1").html();
    $(".min1").html(val-1);
}
function setmin2() {
    $(".min2").parent("li").css("transform","rotateY(360deg)");
    var val=$(".min2").html();
    if(val==0){
        $(".min2").html(9);
    }
    else {
        $(".min2").html(val - 1);
    }
}
function setsec1() {
    $(".sec1").parent("li").css("transform","rotateY(360deg)");
    var val=$(".sec1").html();
    if(val==0){
        $(".sec1").html(5);
    }
    else {
        $(".sec1").html(val-1);
    }
}
function setsec2() {
    if($(".sec2").parent("li").css("transform")=="matrix3d(1, 0, 2.44929e-16, 0, 0, 1, 0, 0, -2.44929e-16, 0, 1, 0, 0, 0, 0, 1)")
    {
        $(".sec2").parent("li").css("transform","rotateY(0deg)");
    }else {
        $(".sec2").parent("li").css("transform", "rotateY(360deg)");
    }
    var val=$(".sec2").html();
    if(val==0){
        $(".sec2").html(9);
    }
    else {
        $(".sec2").html(val - 1);
    }
}