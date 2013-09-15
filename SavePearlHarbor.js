(function(){
	var LOG = 1;
	var PREFIX = 'SPH';
	if(window.parent == window ){	

		window.addEventListener("DOMContentLoaded", function(){
			if(LOG)console.log(PREFIX + ": Loaded. " + window.location.href);
			debugger
			var div = window.document.getElementById('reg-wrapper');
			if(div){
				if (div.getElementsByTagName('H1')[0].innerText == 'Доступ к публикации закрыт' ) 
				{
					var ps = div.getElementsByTagName('P');
					for(var i = 0; i < ps.length; i++) 
					{
						var txt = ps[i].innerText ;
						if (
							( txt.search('Автор переместил топик в черновики.') != -1 )
							||
							( txt.search('статья скрыта в черновики') != -1 )
							) 
						{
							var ids = /\/post\/(\d+)\//.exec(window.location.href);
							if (ids)
							{
								var id = ids[1];
								var href = 'http://savepearlharbor.com/?p=' + id;
								if (localStorage["autoRedirect"] === "true") {
									window.location.href = href;
								}
								else
								{
									var newP = window.document.createElement('P');
									newP.innerText = 'Возможно сайт SavePearlHarbor успел сделать копию по ';
									var a = window.document.createElement('A');
									a.href = href;
									a.innerText = 'адресу';
									newP.appendChild(a);
									div.appendChild(newP);
								} 
								break;
							}
						}
					}
				}
			}
		}, false);
	}
})();