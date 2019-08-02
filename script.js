var score=0,run=0;
var batTop;
var batLeft;
var release,pitch,hit;
var flag=true
onmousemove = function(e)
{
    // console.log("mouse location:", e.clientX, e.clientY)
   
    //   if(e.clientY>200&&e.clientY<340&&e.clientX>90&&e.clientX<500)
    {
    batLeft=e.clientX;
    batTop=e.clientY
    $("#bat").css("left",e.clientX);
    $("#bat").css("top",e.clientY);
    $("#score").text(score);

    }

}   

bowl= setInterval(newBall,3000)
stumpHit= setInterval(stCollide,1)
batHit = setInterval(collide,1);
$('#bat').animate(
    { deg: 45},
    {
      duration: 150,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
function stCollide()
{
    var rot=0
    var ballPos= $("#ball").position();
    var ballTop=ballPos.top;
    var ballLeft=ballPos.left;
    var stPos= $("#stump").position();
    var stTop=stPos.top;
    var stLeft=stPos.left;
    if(ballLeft>=stLeft-40&&ballLeft<=stLeft+25&&ballTop>=stTop-20&&ballTop<=stTop+320&&flag)
    {
        flag=true
        clearInterval(stumpHit)

        alert("out\n Your score :"+score);
        score=0
        run=0
        $("#score").text(score);
        $("#bat").css("left",100);
        $("#bat").css("top",300);
    }
}
function collide()
{
    var ballPos= $("#ball").position();
    var ballTop=ballPos.top;
    var ballLeft=ballPos.left;

    // if(rot==0&&flag)
    // {
    //   if(ballLeft>=batLeft+10&&ballLeft<=batLeft+60&&ballTop>=batTop&&ballTop<=batTop+290)
    //   { 

    //     if(batTop-ballTop>250&&batLeft-ballLeft<50)
    //     {
    //       flag=false      
    //       $("#ball").stop(true,false);
    //       ballLeft=ballLeft+200;
    //       $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
    //       ballLeft=ballLeft+100;
    //       $("#ball").animate({top: "550px", left:ballLeft+"px"},200,"linear");
    //       ballLeft=ballLeft+30;
    //       $("#ball").animate({top: "550px", left:ballLeft+"px"},50,"linear");
    //       ballLeft=ballLeft+100;
    //       $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
    //       ballLeft=ballLeft+200;
    //       $("#ball").animate({top: "600px", left:ballLeft+"px"},400,"linear");
    //     }
    //     clearInterval(batHit)

    //   }
    // }

    // console.log("ball location:", ballLeft, ballTop)
// if(flag)
// {
    if(ballLeft>=batLeft-100&&ballLeft<=batLeft+60&&ballTop>=batTop&&ballTop<=batTop+290&&flag)
    {  
        // console.log("ball location:", rot)

        if((ballTop<=batTop+130&&ballLeft<batLeft+130))
        {           

          flag=false 
          console.log("bottom1");
          $("#ball").stop(true,false);
          ballLeft=ballLeft+200;
          $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
          ballLeft=ballLeft+100;
          $("#ball").animate({top: "550px", left:ballLeft+"px"},200,"linear");
          ballLeft=ballLeft+30;
          $("#ball").animate({top: "550px", left:ballLeft+"px"},50,"linear");
          ballLeft=ballLeft+100;
          $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
          ballLeft=ballLeft+200;
          $("#ball").animate({top: "600px", left:ballLeft+"px"},400,"linear");
          run=0
          if(ballLeft>1480)
              run=1
        }else if(ballTop<=batTop+150)
        {        flag=false 
          console.log("bottom3");
          $("#ball").stop(true,false);
          if(ballTop>400)
          {
            ballLeft=ballLeft+200;
            $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
            ballLeft=ballLeft+100;
            $("#ball").animate({top: "550px", left:ballLeft+"px"},200,"linear");
            ballLeft=ballLeft+30;
            $("#ball").animate({top: "550px", left:ballLeft+"px"},50,"linear");
            ballLeft=ballLeft+100;
            $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
            ballLeft=ballLeft+200;
            $("#ball").animate({top: "600px", left:ballLeft+"px"},400,"linear");
            run=0
            if(ballLeft>1480)
              run=1
          }else
          {
            ballLeft=(ballLeft+750)/2;
            $("#ball").animate({top: "600px", left:ballLeft+"px"},300,"linear");
            ballLeft=(ballLeft+1250)/2;
            $("#ball").animate({top: "500px", left:ballLeft+"px"},300,"linear");
            ballLeft=ballLeft+30;
            $("#ball").animate({top: "500px", left:ballLeft+"px"},50,"linear");
            ballLeft=ballLeft+100;
            $("#ball").animate({top: "600px", left:"1250px"},500,"linear");
            ballLeft=ballLeft+200;
            $("#ball").animate({top: "600px", left:"1500px"},600,"linear");
            run=1
          }

        }
        else if((ballTop<=batTop+260&&ballLeft<batLeft-30)||(ballTop<=batTop+230&&ballLeft<batLeft-15)||(ballTop<=batTop+200&&ballLeft<batLeft+5)||(ballTop<=batTop+180&&ballLeft<batLeft+30)||(ballTop<=batTop+155&&ballLeft<batLeft+45))
        {        flag=false 
          console.log("bottom5");
          $("#ball").stop(true,false);
                ballLeft=ballLeft+200;
                $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
                ballLeft=ballLeft+100;
                $("#ball").animate({top: "550px", left:ballLeft+"px"},200,"linear");
                ballLeft=ballLeft+30;
                $("#ball").animate({top: "550px", left:ballLeft+"px"},50,"linear");
                ballLeft=ballLeft+100;
                $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
                ballLeft=ballLeft+200;
                $("#ball").animate({top: "600px", left:ballLeft+"px"},400,"linear");
                run=0
                if(ballLeft>1480)
                  run=1

        }
        $("#score").text(score);
        clearInterval(batHit)

    }
//   }
}

function newBall()
{ 
    flag=true
    stumpHit= setInterval(stCollide,1)
    batHit = setInterval(collide,1);        
    release=getRandomArbitrary(50,300);
    pitch=getRandomArbitrary(110,600);
    if(pitch>500)
    {
      hit=getRandomArbitrary(150,320);
    }else if(pitch>400)
    {
      hit=getRandomArbitrary(350,420);
    }else if(pitch>300)
    {
      hit=getRandomArbitrary(450,500);
    }else if(pitch>200)
    {
      hit=getRandomArbitrary(500,580);
    }else{
      hit=getRandomArbitrary(550,600);

    }
    score=score+run
    $("#score").text(score);
    $("#ball").animate({top: release+"px", left:"1400px"},0,"linear");
    
    $("#ball").animate({top: "600px", left:pitch+"px"},500,"linear");
    $("#ball").animate({top: hit+"px", left:"-50px"},300,"linear");
}
   
function getRandomArbitrary(min, max)
{
    return Math.random() * (max - min) + min;
}


function batRotate(){
    rot=0
    $('#bat').animate(
        { deg: 0 },
        {
          duration: 50,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          },
          complete: function(){
            rot=1

          }
        }
      );
      $('#bat').animate(
        { deg: -45},
        {
          duration: 50,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          },
          complete: function(){
            rot=2

          }
        }
      );
      $('#bat').animate(
        { deg: 0},
        {
          duration: 50,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          },
          complete: function(){
            rot=1

          }
        }
      );
      $('#bat').animate(
        { deg: 45},
        {
          duration: 50,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
          ,
          complete: function(){
            rot=0

          } 
        }
      );
        
}