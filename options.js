window.addEventListener('DOMContentLoaded', function () {
	
	var lbAutoRedirect = document.getElementById("autoRedirectLbl");
	if(lbAutoRedirect) {
		lbAutoRedirect.innerText = chrome.i18n.getMessage("autoRedirect");
	}

	var cbAutoRedirect = document.getElementById("autoRedirect");
	var autoRedirect = localStorage["autoRedirect"];
	if (autoRedirect === "true")
	{
		cbAutoRedirect.checked = true;
	} else {
		cbAutoRedirect.checked = false;
	}

	cbAutoRedirect.addEventListener("change", function(e)
	{
		debugger
		if (cbAutoRedirect.checked) {
			localStorage["autoRedirect"] = "true";
		} else {
			localStorage["autoRedirect"] = "false";
		}
	}, true);


}, false );