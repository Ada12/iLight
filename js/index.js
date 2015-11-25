var CurrentLight;

function changeAllColor(){
	var color = document.getElementById('color').value;
	var test = $("#displayColor");
	test.css("background-color", color);
}

function applyToAll(){
	//$("#row").find("img").css("background-color", document.getElementById('color').value);
	var color = document.getElementById('color').value;
	var hsl = toGradient(color);
	var hM = hsl[0];
	var sM = hsl[1];
	var lM = hsl[2];
	$("#row").find("img").css({"background-color": "#FFFFFF"});
	$("#row").find("img").css({"background-image": "-webkit-radial-gradient(hsla("+ hM +","+ sM +","+ lM +",1),hsla("+ hM +","+ sM +","+ lM +",.8),hsla("+ hM +","+ sM +","+ lM +",.6),hsla("+ hM +","+ sM +","+ lM +",.4),hsla("+ hM +","+ sM +","+ lM +",.2))"});
}

function toGradient(color){
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
	return [hM, sM, lM];
}

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

function geneCurrentLight(ob){
	var id = $(ob).attr("id");
	CurrentLight = "light" + id.substr(1, id.length - 1);
}

function applyToOne(){
	var color = document.getElementById('colorForEach').value;
	var hsl = toGradient(color);
	var hM = hsl[0];
	var sM = hsl[1];
	var lM = hsl[2];
	$("#"+CurrentLight).css({"background-color": "#FFFFFF"});
	$("#"+CurrentLight).css({"background-image": "-webkit-radial-gradient(hsla("+ hM +","+ sM +","+ lM +",1),hsla("+ hM +","+ sM +","+ lM +",.8),hsla("+ hM +","+ sM +","+ lM +",.6),hsla("+ hM +","+ sM +","+ lM +",.4),hsla("+ hM +","+ sM +","+ lM +",.2))"});
	$("#"+CurrentLight).attr("src","img/lantern.png");
}

function addLightA(ob){
	var id=$(ob).attr("id");
	var idSequence = id + "S";
	if($("#"+id).is(':checked') == true){
		var $new = $('<li id='+ idSequence +' class="list-group-item leftColor">\
                 	 &nbsp;&nbsp;'+ ob.value +'\
                 	 <div class="updownPos">\
                 	    <a href="#" class="up">[上移]</a>\
                     	<a href="#" class="down">[下移]</a>\
                     	<a href="#" class="delete">[删除]</a>\
                 	 </div>\
                  	<input type="text" class="myInput" placeholder="分钟"/>\
          	 </li>');
	$new.appendTo( $("#lightSequenceA") );
	}else{
		$("#" + idSequence).remove();
	}
	$(function(){
       $("a.up").click(function(){
         $(this).parents("li").prev().before($(this).parents("li")); 
       })
      });

    $(function(){
       $("a.down").click(function(){
         $(this).parents("li").next().after($(this).parents("li")); 
       })
      });

    $(function(){
       $("a.delete").click(function(){
        $(this).parents("li").remove();
       })
      });
}

function addLightP(ob){
	var id=$(ob).attr("id");
	var idSequence = id + "S";
	if($("#"+id).is(':checked') == true){
		var $new = $('<li id='+ idSequence +' class="list-group-item leftColor">\
                 	 &nbsp;&nbsp;'+ ob.value +'\
                 	 <div class="updownPos">\
                 	    <a href="#" class="up">[上移]</a>\
                     	<a href="#" class="down">[下移]</a>\
                     	<a href="#" class="delete">[删除]</a>\
                 	 </div>\
                  	<input type="text" class="myInput" placeholder="分钟"/>\
          	 </li>');
	$new.appendTo( $("#lightSequenceP") );
	}else{
		$("#" + idSequence).remove();
	}
	$(function(){
       $("a.up").click(function(){
         $(this).parents("li").prev().before($(this).parents("li")); 
       })
      });

    $(function(){
       $("a.down").click(function(){
         $(this).parents("li").next().after($(this).parents("li")); 
       })
      });

    $(function(){
       $("a.delete").click(function(){
        $(this).parents("li").remove();
       })
      });
}


