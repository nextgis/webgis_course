(function(){
    
    var gh_url = (function() {
        var url_parts = window.location.href.split('/');
        var page = url_parts.pop();
        var section = url_parts.pop();
        var gh_base = "https://github.com/nextgis/webgis_course/edit/gh-pages/";
        if (isNaN(section)) {
            return gh_base + page;
        } else {
            return gh_base + section + '/' + page;
        }
    })();

    var license = '<div style="position:fixed; float:right; bottom:0;right:10px;">\
    <a href="' + gh_url +'" title="Редактировать на GitHub" target="_blank"><img style="width: 1.5em; height: 1.5em; color: currentColor; padding-right: 1em;" src="/webgis_course/img/pencil.svg"></a>\
    <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/" title="Creative Commons Attribution-NoDerivs 4.0 International license" target="_blank">\
    <img src="https://licensebuttons.net/l/by-nd/4.0/88x31.png" alt="Лицензия"></a>\
    </div>';
    var content_html = document.getElementById("content").innerHTML;
    document.getElementById("content").innerHTML = content_html + license;
    })();
