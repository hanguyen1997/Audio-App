/*-------*/
var img = document.getElementById("img-body");
var audio = document.getElementById("audio-body");
var volume = document.getElementById("volume");


$('document').ready(function(){

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

	/*điều chỉnh thanh chỉnh âm lượng*/
	volume.oninput = function() {
		var volume_number = (this.value)/100;
		audio.volume  =  volume_number;
	}

})


function change_volume(){
	/*kiểm tra chuổi kí tự cuối cùng của src image bằng hàm endsWith*/
	if(document.getElementById("change-volume").src.endsWith('image/mute.png'))
	{
		audio.volume  = 0;
		document.getElementById("volume").value = 0;
		document.getElementById("change-volume").src = "image/volume.png";
	}
	else{
		audio.volume  = 0.5;
		document.getElementById("volume").value = 50;
		document.getElementById('change-volume').src='image/mute.png'
	}
}

function load_mp3(){
	audio.loop = true;
	audio.load();
	audio.play();
}
