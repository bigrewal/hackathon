function showSearchBar(){
	var className = $('.navigationPanel')[0].className;
	if(className == 'navigationPanel'){
		//console.log($('.navigationPanel'));
		$('.navigationPanel').addClass('expandNavigationPanel');

		console.log($('#search'));
		$('#search')[0].style.display = 'block';
	}
	else{
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
	}
    return false;
}

function theHub(){
	var className = $('.navigationPanel')[0].className;
	//console.log(className);
	if(className == 'navigationPanel'){
		$('.navigationPanel').addClass('expandNavigationPanel');
		//console.log($('.hub'));
		$('div.hub')[0].style.display = 'block';
	}
		else{
			$('.navigationPanel').removeClass().addClass('navigationPanel');
			$('#search')[0].style.display = 'none';
			$('.hub')[0].style.display = 'none';
		}
	return false;
} 

