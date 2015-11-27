;(function(){
	var example_logo = '<a href="http://nextgis.ru" target="_blank"><div style="display:inline-block;float:left;"><img style="height:32px;padding: 5px 10px;margin:0;" src="http://nextgis.ru/wp-content/themes/nextgisNew/img/logo.jpg"></div></a>';
	var tbar_html = document.getElementById("topbar").innerHTML;
	document.getElementById("topbar").innerHTML = example_logo + tbar_html;
	})();
