Mobile();

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
					var unityElement = document.getElementById('unityScript1');
					var unityElement2 = document.getElementById('unityScript2');
					var unityElement3 = document.getElementById('unityScript3');
					if(unityElement != null && unityElement2 != null && unityElement3 != null)
					{
						//unityElement.src = " ";
						//unityElement2.src = " ";
						//unityElement3.innerHTML = " ";
						//linkElement.parentNode.removeChild(element);
					}	
				}
			}
