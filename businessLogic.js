function showSearchBar(){
	var className = $('.navigationPanel')[0].className;
<<<<<<< HEAD
	if(className == 'navigationPanel'){
=======
	if(className == 'navigationPanel')
	{
>>>>>>> 035f7002de03df550660f0aefe51c73671706c33
		//console.log($('.navigationPanel'));
		$('.navigationPanel').addClass('expandNavigationPanel');

		//console.log($('#search'));
		$('#search')[0].style.display = 'block';
		$('.notificationsTable')[0].style.display = 'none';
	}
	else{
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
		$('.notificationsTable')[0].style.display = 'none';
	}
    return false;
}

<<<<<<< HEAD
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

=======
function showEvents()
{
	var value = $('#search')[0].value;
	if(value != "" && value[0] == 'h')
	{
		$('.searchResults')[0].style.display = 'block';
	}
	else if(value != "" && value[0] == 'd')
	{
		$('.searchResultsSecond')[0].style.display = 'block';
	}
	else
	{
		$('.searchResults')[0].style.display = 'none';
		$('.searchResultsSecond')[0].style.display = 'none';
	}
}

function subscribe ()
{
	$('#subscribeIcon').removeClass().addClass('glyphicon glyphicon-ok');
	$('.nameAreaTwo')[0].style.display = 'block';
	$('.nameArea')[0].style.display = 'none';

}

function rightArrowClick ()
{
	$('.nameAreaTwo')[0].style.display = 'block';
	$('.nameArea')[0].style.display = 'none';
}
function leftArrowClick ()
{
	$('.nameAreaTwo')[0].style.display = 'none';
	$('.nameArea')[0].style.display = 'block';
}

function showNotifications()
{
	var className = $('.notificationsTable')[0].style.display;
	if(className == 'none')
	{
		$('#search')[0].style.display = 'none';
		$('.navigationPanel').addClass('expandNavigationPanel');
		console.log($('.notificationsTable'));
		$('.notificationsTable')[0].style.display = 'block';
	}
	else
	{
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
		$('.notificationsTable')[0].style.display = 'none';
	}

}
>>>>>>> 035f7002de03df550660f0aefe51c73671706c33
