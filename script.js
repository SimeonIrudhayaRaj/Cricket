var score=0,run=0;
var batTop;
var batLeft;
var flag=true,sflag=true
var rot=0
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
// newBall()
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
    var ballPos= $("#ball").position();
    var ballTop=ballPos.top;
    var ballLeft=ballPos.left;
    var stPos= $("#stump").position();
    var stTop=stPos.top;
    var stLeft=stPos.left;
    if(ballLeft>=stLeft-40&&ballLeft<=stLeft+25&&ballTop>=stTop-20&&ballTop<=stTop+320&&sflag)
    {
        sflag=false
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
  if(rot==0)
  {
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
    }
  }else
  {
    if(ballLeft>=batLeft+10&&ballLeft<=batLeft+60&&ballTop>=batTop&&ballTop<=batTop+290&&flag)
    {   
        flag=false
        // $("#ball").stop(true,false);
        if(ballTop<=batTop+100)
        {
          $("#ball").stop(true,false);
          ballLeft=ballLeft-150;
          $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
          ballLeft=ballLeft-100;
          $("#ball").animate({top: "550px", left:ballLeft+"px"},200,"linear");
          ballLeft=ballLeft-20;
          $("#ball").animate({top: "550px", left:ballLeft+"px"},20,"linear");
          ballLeft=ballLeft-150;
          $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
          ballLeft=ballLeft-50;
          $("#ball").animate({top: "600px", left:ballLeft+"px"},250,"linear");

        }
        else if(ballTop<=batTop+110)
        {
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
        {
          $("#ball").stop(true,false);
          $("#ball").animate({top: "100px", left:"1600px"},800,"linear");
          run=4;

        } else if(ballTop<=batTop+230)
        {
          $("#ball").stop(true,false);
          $("#ball").animate({top: "30px", left:"1600px"},800,"linear");
          run=6;

        }
        else if(ballTop<=batTop+260)
        {
          ballLeft=ballLeft+300;
          $("#ball").stop(true,false);
          $("#ball").animate({top: "600px", left:ballLeft+"px"},200,"linear");
          $("#ball").animate({top: "500px", left:"1600px"},400,"linear");
          run=2;

        }else
        {
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
    }
  }
//   }
}

function newBall()
{
  var release,pitch,hit,speed;

  flag=true
  sflag=true
  stumpHit= setInterval(stCollide,1)
  batHit = setInterval(collide,1);        
  release=getRandomArbitrary(50,300);
  speed=getRandomArbitrary(250,600);
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
  
  $("#ball").animate({top: "600px", left:pitch+"px"},speed,"linear");
  $("#ball").animate({top: hit+"px", left:"-50px"},speed-150,"linear");
}
   
function getRandomArbitrary(min, max)
{
    return Math.random() * (max - min) + min;
}


function batRotate(){
    rot=1
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