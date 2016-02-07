// ==UserScript==
// @name       NCS-NightcoreCommunityScript
// @author     NCS Contributers
// @website    https://github.com/bentenz5/NCS
// @namespace  https://github.com/bentenz5/NCS
// @version    1
// @match      http://*/*
// @match      https://*/*
// ==/UserScript==
function fn() {
  if(typeof API != "undefined" && typeof API.DATA == "object")
    $.getScript('https://rawgit.com/bentenz5/NCS/master/ncs.js');
}
(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement[scriptElement.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
    document.body.appendChild( scriptElement );
    scriptElement.parentNode.removeChild(scriptElement);
})();
