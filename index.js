
var img = document.getElementById("img-body");
var audio = document.getElementById("audio-body");

$('document').ready(function(){

	
	load_mp3();
		
	$('#city').click(function(){
		img.src = "image/city.gif";
		audio.src  = "audio/city.mp3";
		load_mp3();


	});
	$('#rain').click(function(){
		img.src = "image/rain.gif";
		audio.src  = "audio/rain.mp3";
		load_mp3();
	});
	$('#beach').click(function(){
		img.src = "image/beach.gif";
		audio.src  = "audio/beach.mp3";
		load_mp3();
		
	});
	$('#forest').click(function(){
		img.src = "image/forest.gif";
		audio.src  = "audio/forest.mp3";
		load_mp3();
	});
})

function load_mp3(){
	audio.loop = true;
	audio.load();
	audio.play();
}
