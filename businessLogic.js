function showSearchBar(){
	var className = $('#search')[0].style.display;
	if(className == 'none')
	{
		//console.log($('.navigationPanel'));
		$('.navigationPanel').addClass('expandNavigationPanel');

		//console.log($('#search'));
		$('#search')[0].style.display = 'block';
		$('.notificationsTable')[0].style.display = 'none';
		$('.settingsPage')[0].style.display = 'none';
		$('div.hub')[0].style.display = 'none';
	}
	else{
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
		$('.notificationsTable')[0].style.display = 'none';
		$('.settingsPage')[0].style.display = 'none';
		$('div.hub')[0].style.display = 'none';
	}
    return false;
}
 
function theHub(){
	var className = $('div.hub')[0].style.display;
	if(className == 'none')
	{
		$('.navigationPanel').addClass('expandNavigationPanel');
		//console.log($('.hub'));
		$('.settingsPage')[0].style.display = 'none';
		$('#search')[0].style.display = 'none';
		$('.notificationsTable')[0].style.display = 'none';
		$('div.hub')[0].style.display = 'block';
	}
		else{
			$('.navigationPanel').removeClass().addClass('navigationPanel');
			$('#search')[0].style.display = 'none';
			$('div.hub')[0].style.display = 'none';
			$('.settingsPage')[0].style.display = 'none';
			$('.notificationsTable')[0].style.display = 'none';
		}
	return false;
} 

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
		$('.settingsPage')[0].style.display = 'none';
		$('div.hub')[0].style.display = 'none';
	}
	else
	{
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
		$('.notificationsTable')[0].style.display = 'none';
		$('.settingsPage')[0].style.display = 'none';
		$('div.hub')[0].style.display = 'none';
	}

}

function settings()
{
	var className = $('.settingsPage')[0].style.display;
	if(className == 'none')
	{
		$('#search')[0].style.display = 'none';
		$('.navigationPanel').addClass('expandNavigationPanel');
		$('.notificationsTable')[0].style.display = 'none';
		$('.settingsPage')[0].style.display = 'block';
		$('div.hub')[0].style.display = 'none';
	}
	else
	{
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
		$('.notificationsTable')[0].style.display = 'none';
		$('.settingsPage')[0].style.display = 'none';
		$('div.hub')[0].style.display = 'none';
	}
}
