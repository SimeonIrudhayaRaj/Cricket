var score=0,run=0;
var batTop;
var batLeft;
var release,pitch,hit;
onmousemove = function(e)
{
    console.log("mouse location:", e.clientX, e.clientY)
   
    //   if(e.clientY>200&&e.clientY<340&&e.clientX>90&&e.clientX<500)
    {
    batLeft=e.clientX;
    batTop=e.clientY
    $("#bat").css("left",e.clientX);
    $("#bat").css("top",e.clientY);
    collide()
    $("#score").text(score);

    }

}   
bowl= setInterval(newBall,3000)
stumpHit= setInterval(stCollide,0.001)
batHit = setInterval(collide,0.001);

function stCollide()
{
    var ballPos= $("#ball").position();
    var ballTop=ballPos.top;
    var ballLeft=ballPos.left;
    var stPos= $("#stump").position();
    var stTop=stPos.top;
    var stLeft=stPos.left;
    if(ballLeft>=stLeft-40&&ballLeft<=stLeft+25&&ballTop>=stTop-20&&ballTop<=stTop+320)
    {
        alert("out\n Your score :"+score);
        score=0
        run=0;
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
    console.log("ball location:", ballLeft, ballTop)

    if(ballLeft>=batLeft+10&&ballLeft<=batLeft+60&&ballTop>=batTop&&ballTop<=batTop+290)
    {   
        
            $("#ball").stop(true,false);
        if(ballTop<=batTop+100)
        {
            $("#ball").animate({top: "600px", left:"80px"},800,"linear");
        }
        else if(ballTop<=batTop+110)
        {
            $("#ball").animate({top: "600px", left:"1600px"},800,"linear");
            run=1;

        }else if(ballTop<=batTop+150)
        {
            $("#ball").animate({top: "30px", left:"1600px"},800,"linear");
            run=6;

        } else if(ballTop<=batTop+230)
        {
            $("#ball").animate({top: "100px", left:"1600px"},800,"linear");
            run=4;

        }
        else if(ballTop<=batTop+260)
        {
            $("#ball").animate({top: "540px", left:"1600px"},800,"linear");
            run=2;

        }else if(ballTop<=batTop+290)
        {
            $("#ball").animate({top: "600px", left:"1600px"},800,"linear");
            run=1;

        }
        $("#score").text(score);
    }
}

function newBall()
{
    release=getRandomArbitrary(50,600);
    pitch=getRandomArbitrary(250,600);
    hit=getRandomArbitrary(200,520);
    score=score+run
    $("#score").text(score);
    $("#ball").animate({top: release+"px", left:"1400px"},0,"linear");
    
    $("#ball").animate({top: "600px", left:pitch+"px"},800,"linear");
    $("#ball").animate({top: hit+"px", left:"-50px"},500,"linear");
}
   
function getRandomArbitrary(min, max)
{
    return Math.random() * (max - min) + min;
}
