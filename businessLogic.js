function showSearchBar()
{
	var className = $('.navigationPanel')[0].className;
	if(className == 'navigationPanel')
	{
		console.log($('.navigationPanel'));
		$('.navigationPanel').addClass('expandNavigationPanel');

		console.log($('#search'));
		$('#search')[0].style.display = 'block';
	}
	else
	{
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
		$('.newTile')[0].style.display = 'none';
	}

    return false;
}

function showAddTile()
{
	var className = $('.navigationPanel')[0].className;
	if(className == 'navigationPanel')
	{
		console.log($('.navigationPanel'));
		$('.navigationPanel').addClass('expandAddTilePanel');

		console.log($('#addTile'));
		$('.newTile')[0].style.display = 'block';
	} else if (className == 'navigationPanel expandAddTilePanel') {
		$('.navigationPanel').removeClass().addClass('navigationPanel');
		$('#search')[0].style.display = 'none';
		$('.newTile')[0].style.display = 'none';
	}
	else
	{
		$('#search')[0].style.display = 'none';
		$('.newTile')[0].style.display = 'block';
	}

    return false;
}

