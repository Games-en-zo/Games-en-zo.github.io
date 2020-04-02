function IsMobile()
{
	window.alert(window.outerWidth);
		console.log(window.outerWidth);
				if(window.outerWidth > 760)
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
					var unityElement = document.getElementById('unity');
					if(unityElement != null)
					{
						unityElement.src = " ";
						//linkElement.parentNode.removeChild(element);
					}	
				}
			}

window.onload = Mobile;
