/*! pym-loader.js - v1.0.1 - 2016-09-14 */
!function(a,b){var c=function(a){return!!a&&(a.autoInit(),!0)},d=function(b){if("undefined"!=typeof a){b=b.split(".js")[0];var d="context_"+b.split("/").slice(-1)[0],e=a.config({context:d,paths:{pym:b},shim:{pym:{exports:"pym"}}});return e(["require","pym"],function(a,b){c(b)}),!0}return!1},e=function(a){return"undefined"!=typeof b&&"function"==typeof b.getScript&&(b.getScript(a).done(function(){c(window.pym)}),!0)},f=function(a){var b=document.getElementsByTagName("head")[0],d=document.createElement("script");d.type="text/javascript",d.src=a,d.onload=function(){b&&d.parentNode&&b.removeChild(d),c(window.pym)},b.appendChild(d)},g="//pym.nprapps.org/pym.v1.min.js";0===g.lastIndexOf("@@",0)&&(g="//pym.nprapps.org/pym.v1.min.js"),d(g)||e(g)||f(g);var h=function(){return document.removeEventListener("DOMContentLoaded",h),window.removeEventListener("load",h),c(window.pym)};window.document.addEventListener("DOMContentLoaded",h),window.addEventListener("load",h)}(window.requirejs,window.jQuery);