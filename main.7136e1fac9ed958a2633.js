(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,o,t){},QfWi:function(n,o,t){"use strict";t.r(o);t("L1EO"),t("JBxO"),t("FdtR");var a=function(n){var o,t;n.delay=(o=200,t=500,Math.floor(Math.random()*(t-o+1)+o));var a=Math.random()>.3;return new Promise((function(o,t){setTimeout((function(){a?o(n):t(n)}),n.delay)}))};function i(n){var o=n.id,t=n.delay;console.log("Transaction "+o+" processed in "+t+"ms")}function e(n){var o=n.id;console.warn("Error processing transaction "+o+". Please try again later.")}a({id:70,amount:150}).then(i,e),a({id:71,amount:230}).then(i,e),a({id:72,amount:75}).then(i,e),a({id:73,amount:100}).then(i,e)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7136e1fac9ed958a2633.js.map