
include('https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js');
include('https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js');

(function() {
    if ($.browser.name === msie  &&  $.browser.versionNumber === 7) {
        window.alert("Hello World"); 
    }
})();


// rešitev z uporabo zunanjih knjižnic mi deluje za IE11 (IE7 ni kompatibilen z mojim računlnikom in ga ne morem naložiti in preizkusiti)