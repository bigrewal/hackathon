$(document).ready(function() {
	$(".draggableTile").draggable({
		helper: 'clone',
		stack: '.draggableTile',
		cursor: 'pointer',
		cursorAt: {top: 0, left: 0},
		/**stop: function(event, ui) {
			var tileIcon;
			var tileTitle;
			var image;
			switch(ui.helper.attr('type')) {
				case "label":
					markerIcon = new DeviceIcon({iconUrl:'label.png'});
					markerTitle = 'Label';
					image = 'label.png';
					break;
				case "image":
					markerIcon = new DeviceIcon({iconUrl:'image.png'});
					markerTitle = 'Network Switch';
					image = 'image.png';
					break;
				case "description":
					markerIcon = new DeviceIcon({iconUrl:'description.png'});
					markerTitle = 'Server';
					image = 'description.png';
					break;
				case "poster":
					markerIcon = new DeviceIcon({iconUrl:'poster.png'});
					markerTitle = 'Computer';
					image = 'poster.png';
					break;
				case "signUpList":
					markerIcon = new DeviceIcon({iconUrl:'signupsheet.png'});
					markerTitle = 'Printer';
					image = 'signupsheet.png';
			}
		}*/
	});
	
	$(".canvas").droppable({
		accept: ".draggableTile",
      drop: function( event, ui ) {
		console.log(event);
		console.log(ui);
		var tileType = ui.helper.attr('type');
		console.log(tileType);
		if(tileType === 'label') {
			$(".canvas").append("<div class = 'labelTile form-group' style='position: fixed; left: "+ui.offset.left+"px; top: "+ui.offset.top+"px'><textarea class='form-control' rows='1'>Enter Label...</textarea></div>");
		} else if (tileType === 'image') {
			$(".canvas").append("<div class = 'labelTile' style='position: fixed; left: "+ui.offset.left+"px; top: "+ui.offset.top+"px'><img src='hackitsix.png' height='489' width='254'/></div>");
		} else if (tileType === 'description') {
			$(".canvas").append("<div class = 'labelTile form-group' style='position: fixed; left: "+ui.offset.left+"px; top: "+ui.offset.top+"px'><textarea class='form-control' rows='5'>Enter description...</textarea></div>");
		} else if (tileType === 'poster') {
			$(".canvas").append("<div class = 'labelTile' style='position: fixed; left: "+ui.offset.left+"px; top: "+ui.offset.top+"px'><img src='posterexample.png' height='355' width='440'/></div>");
		} else if (tileType === 'signuplist') {
			$(".canvas").append("<div class = 'labelTile' style='position: fixed; left: "+ui.offset.left+"px; top: "+ui.offset.top+"px'><textarea class='form-control' rows='8'>Sign up list:</textarea></div>");
		}
	}
    });
	
});