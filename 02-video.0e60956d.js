function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(t,e,n){var o,i,r,u,a,c,f=0,l=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,r=i;return o=i=void 0,f=e,u=t.apply(r,n)}function h(t){return f=t,a=setTimeout(w,e),l?b(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-f>=r}function w(){var t=m();if(j(t))return T(t);a=setTimeout(w,function(t){var n=e-(t-c);return d?p(n,r-(t-f)):n}(t))}function T(t){return a=void 0,v&&o?b(t):(o=i=void 0,u)}function O(){var t=m(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return h(c);if(d)return a=setTimeout(w,e),b(c)}return void 0===a&&(a=setTimeout(w,e)),u}return e=g(e)||0,y(n)&&(l=!!n.leading,r=(d="maxWait"in n)?s(g(n.maxWait)||0,e):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},O.flush=function(){return void 0===a?u:T(m())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(t,e,{leading:o,maxWait:e,trailing:i})},document.addEventListener("DOMContentLoaded",(()=>{!function(t){const e=document.createElement("script");e.src="https://player.vimeo.com/api/player.js",e.onload=t,document.head.appendChild(e)}((()=>{const n=document.getElementById("vimeo-player"),o=new Vimeo.Player(n);o.on("timeupdate",(t=>{const e=t.seconds;u(e)}));const i=(()=>{const t=localStorage.getItem("videoplayer-current-time");return null!==t?parseFloat(t):0})();var r;r=i,o.setCurrentTime(r).then((function(t){})).catch((function(t){t.name}));const u=t(e)((t=>{localStorage.setItem("videoplayer-current-time",t)}),1e3)}))}));
//# sourceMappingURL=02-video.0e60956d.js.map