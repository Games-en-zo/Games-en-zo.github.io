function IsMobile()
{
	window.alert(window.outerWidth);
		console.log(window.outerWidth);
				if(window.outerWidth < 760)
				{	
					return true;
				}
				else
				{
					return false;
				}	
			}
				
			function Mobile()
			{
				if(IsMobile())
				{
					var linkElement = document.getElementById('unityContainer');
					if(linkElement != null)
					{
						linkElement.parentNode.removeChild(element);
					}	
				}
			}

window.onload = Mobile;
