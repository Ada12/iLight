function changeColor(){
	var color = document.getElementById('color').value;
	var test = $("#displayColor");
	test.css("background-color", color);
}

function applyToAll(){
	$("#row").find("img").css("background-color", document.getElementById('color').value);
}

function  toGradient(){
	var color = document.getElementById('color').value;
	var r = parseInt(color.substr(1, 2), 16);
	var g = parseInt(color.substr(3, 2), 16);
	var b = parseInt(color.substr(5, 2), 16);
	var hsl = rgbToHsl(r, g, b);
	var hh = hsl[0];
	var hM;
	if(parseInt(hh) == hh){
		hM =hh;
	}else{
		hM = hh.toString().split('.')[0];
	}
	var ss = hsl[1];
	var sM;
	if(ss >= 1){
		sM = "100%";
	}else if(ss == 0){
		sM = "0";
	}else{
		sM = ss.toString().substr(0, 4)*100 + "%";
	}
	var ll = hsl[2];
	var lM;
	if(ll >= 1){
		lM = "100%";
	}else if(ll == 0){
		lM = "0";
	}else{
		lM = ll.toString().substr(0, 4)*100 + "%";
	}
	$("#row").find("img").css({"background-color": "#FFFFFF"});
	$("#row").find("img").css({"background-image": "-webkit-radial-gradient(hsla("+ hM +","+ sM +","+ lM +",1),hsla("+ hM +","+ sM +","+ lM +",.8),hsla("+ hM +","+ sM +","+ lM +",.6),hsla("+ hM +","+ sM +","+ lM +",.4),hsla("+ hM +","+ sM +","+ lM +",.2))"});
}

// function rgbToHsl(r, g, b){
//     r /= 255, g /= 255, b /= 255;
//     var max = Math.max(r, g, b), min = Math.min(r, g, b);
//     var h, s, l = (max + min) / 2;

//     if(max == min){
//         h = s = 0; // achromatic
//     }else{
//         var d = max - min;
//         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//         switch(max){
//             case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//             case g: h = (b - r) / d + 2; break;
//             case b: h = (r - g) / d + 4; break;
//         }
//         h /= 6;
//     }

//     return [h, s, l];
// }

function rgbToHsl(r, g, b){
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;
	if(max == min){
		h = s = 0;
	}
	if((max == r)&&(g >= b)){
		h = 60*(g - b) / (max - min) + 0;
	}
	if((max == r)&&(g < b)){
		h = 60*(g - b) / (max - min) + 360;
	}
	if(max == g){
		h = 60*(b - r) / (max - min) + 120;
	}
	if(max == b){
		h = 60*(r - g) / (max - min) + 240;
	}
	if(l <= 0.5){
		s = (max-min) / (2*l);
	}
	if(l > 0.5){
		s = (max-min) / (2 - 2*l);
	}
	return [h, s, l];
}