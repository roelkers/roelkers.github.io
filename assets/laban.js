var main = function () {
  //your code here
$( "#accordion" ).accordion();
$( "#radio" ).buttonset();
$( "#radioW" ).buttonset();
$( "#radioT" ).buttonset();

	//$(".radioButton").click(function(){

	//var space = $('input[name=radioDirect]:checked', '#space').val();
	//var weight = $('input[name=radioLight]:checked', '#weight').val();
	//var time = $('input[name=radioSudden]:checked', '#time').val();

	//window.alert(weight);"input[name='radioDirect']"

	//});

	$(".radioButton").click(function() {
	var space = $("input[name='radioSpace']:checked","#radio").val();
	var weight = $("input[name='radioWeight']:checked","#radioW").val();
	var time = $("input[name='radioTime']:checked","#radioT").val();

	//window.alert(time);

	var quality;

	if (space == "Direct") {
		if(weight == "Strong"){
			if(time== "Slow"){
				quality = "Press";
			}
			else{
				quality = "Punch";
			}
		}
		else{
			if(time=="Slow"){
				quality = "Glide";
			}
			else{
				quality = "Dab";
			}
		}
	}
	else {
		if(weight == "Strong"){
			if(time== "Slow"){
				quality = "Wring";
			}
			else{
				quality = "Slash";
			}
		}
		else{
			if(time== "Slow"){
				quality = "Float";
			}
			else{
				quality = "Flick";
			}
		}
	}

	//window.alert(quality);
	$("#EffortResult").text(quality);

	});

}

$(document).ready(main);
