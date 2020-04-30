$(document).ready(function(){
//alert('working');
const sound1 = new Audio('music/rain.mp3');
const sound2 = new Audio('music/beach.mp3');
var time;
var testtime = 0;
var sound;
var interval;
var width = 1;
var timeflag;
timeflag = -1;
var bartime = 0;
var i;
	i=0;
$('#twomin').on('click',function(){time=119;testtime=time;bartime=1200;timeset();});
$('#fivemin').on('click',function(){time=299;testtime=time;bartime=3000;timeset();});
$('#tenmin').on('click',function(){time=599;testtime=time;bartime=6000;timeset();});
function timeset()
{
	minute=Math.floor(time/60);
	second=Math.floor(time%60);
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;
	document.getElementById("minutes").innerText=minute;
	document.getElementById("seconds").innerText=second;
	 document.getElementById('minutes').setAttribute('style','font-size:12vw');
}
function timeleft()
{
if(timeflag == -1 && time >= 0){
	timeflag	= setInterval(function(){
	minute=Math.floor(time/60);
	second=Math.floor(time%60);
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;
	if(time > -1){
	time= time-1;
	document.getElementById("minutes").innerText=minute;
	document.getElementById("seconds").innerText=second;
	 document.getElementById('minutes').setAttribute('style','font-size:12vw');
 }
 else{
	 clearInterval(timeflag);
	 doneFunction(); }
 //console.log(time);
},1000);

}
};
function timepause(){
clearInterval(timeflag);
timeflag=-1;
}
function doneFunction(){
  console.log("Done!");
}

////////////music playing////////////////////////////////////////////////
$('#rain').on('click',function() {
		sound= sound1;
		playrain();
});
$('#beach').on('click',function() {
	sound= sound2;
	  playbeach();
});
function playrain() {
	sound2.pause();
}
function playbeach()
{
	sound1.pause();
}
function playmusic()
{
			sound.play();
		timeleft();
		move();
};
function pausemusic()
{
		sound.pause();
};


function move() {
  var elem = document.getElementById("mybar");
  clearInterval(interval);
  interval = setInterval(frame, bartime);
  function frame() {
    if (width >= 100) {
      width = 1;
      clearInterval(interval);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}



function barpause() {
  clearInterval(interval);
}
$('#play').on('click',function() {
if(sound == null){ alert("Please select a tune first.");}
else{	playmusic();}
});
$('#pause').on('click',function(){
	pausemusic();
  timepause();
	barpause();
});
$('#replay').on('click',function () {
if(testtime == 0)
{alert('Please play a session first!');}
else{
	if(time > 0){
		alert('Please wait while the current session is playing.');
	}
	else{
		time=testtime;
		timeflag=-1;
		timeset();
		playmusic();
	}
}
});
/*//////////////////////////////////////////////////////////////////////////////////
function move()
{
	if(testtime == 119){
	$('#mybar').removeClass().addClass('twoclass');
  }
	else if(testtime == 299){
	$('#mybar').removeClass().addClass('threeclass');
  }
	else if(testtime == 599){
	$('#mybar').removeClass().addClass('fiveclass');
  }

}*/



});
