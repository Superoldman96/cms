!function(){var e={796:function(){},745:function(e,t,n){var r=n(796);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(673).Z)("2dc210c6",r,!0,{})},673:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},s=0;s<t.length;s++){var i=t[s],a=i[0],o={id:e+":"+s,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(o):n.push(r[a]={id:a,parts:[o]})}return n}n.d(t,{Z:function(){return p}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=s&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,u=function(){},c=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,s){d=n,c=s||{};var a=r(e,t);return v(a),function(t){for(var n=[],s=0;s<a.length;s++){var o=a[s];(l=i[o.id]).refs--,n.push(l)}for(t?v(a=r(e,t)):a=[],s=0;s<n.length;s++){var l;if(0===(l=n[s]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete i[l.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(m(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(m(n.parts[s]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+h+'~="'+e.id+'"]');if(r){if(d)return u;r.parentNode.removeChild(r)}if(f){var s=l++;r=o||(o=g()),t=S.bind(null,r,s,!1),n=S.bind(null,r,s,!0)}else r=g(),t=C.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var $,b=($=[],function(e,t){return $[e]=t,$.filter(Boolean).join("\n")});function S(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,s);else{var i=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function C(e,t){var n=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),c.ssrId&&e.setAttribute(h,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e;n(745),e=jQuery,Craft.Installer=Garnish.Base.extend({$bg:null,$screens:null,$dots:null,$currentScreen:null,$currentDot:null,$dbDriverInput:null,$dbPortInput:null,modal:null,currentScreen:null,loading:!1,init:function(){this.$bg=e("#bg"),this.$screens=e("#screens").children(),this.$dbDriverInput=e("#db-driver"),this.$dbPortInput=e("#db-port"),this.updateDbPortInput(),this.addListener(this.$screens.find("form"),"submit","handleScreenSubmit"),this.addListener(this.$screens.find(".btn.submit"),"activate","handleScreenSubmit"),this.addListener(e("#beginbtn"),"activate","showModal"),this.addListener(this.$dbDriverInput,"change","updateDbPortInput"),new Craft.PasswordInput("#account-password")},showModal:function(){this.modal?this.modal.show():(this.modal=new Garnish.Modal(e("#install-modal").removeClass("hidden"),{hideOnEsc:!1,shadeClass:""}),this.gotoScreen(1))},updateDbPortInput:function(){var e=this.$dbDriverInput.val(),t=this.$dbPortInput.val(),n=Craft.Installer.defaultDbPorts[e];this.$dbPortInput.attr("placeholder",n),t==n&&this.$dbPortInput.val("")},handleScreenSubmit:function(e){e.preventDefault();var t=this.getScreenInputNames(this.$currentScreen);t?this.validate(this.$currentScreen.attr("id"),t):this.gotoNextScreen()},getScreenInputNames:function(e){var t=e.attr("data-inputs");return t?t.split(","):null},getInputData:function(t,n,r){for(var s={},i=0;i<n.length;i++){var a=n[i],o=e("#"+t+"-"+a);s[(r?t+"-":"")+a]=Garnish.getInputPostVal(o)}return s},showInstallScreen:function(){for(var t,n,r=this,s={},i=1;i<this.$screens.length-1;i++)t=this.$screens.eq(i),n=this.getScreenInputNames(t),e.extend(s,this.getInputData(t.attr("id"),n,!0));Craft.sendActionRequest("POST","install/install",{data:s}).then((function(e){return r.allDone(e)})).catch((function(e){return r.allDone(e)}))},allDone:function(t){e("#spinner").remove();var n=this.$currentScreen.find("h1:first");if(200===t.status)n.text(Craft.t("app","Craft is installed! 🎉")),setTimeout((function(){window.location.href=Craft.getUrl(postCpLoginRedirect)}),1e3);else{var r,s;n.text("Install failed 😞");var i,a,o,l=null==t||null===(r=t.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.messageHtml;l?e("<div/>",{class:"pane",html:l}).insertAfter(n):e("<p/>",{text:null!==(i=null==t||null===(a=t.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.message)&&void 0!==i?i:"Please check your logs for more info."}).insertAfter(n)}},gotoNextScreen:function(){this.gotoScreen(this.currentScreen+1)},gotoScreen:function(t){if(1===t)this.$dots&&this.$dots.hide();else if(this.$dots)this.$dots.show();else{this.$dots=e();for(var n=0;n<this.$screens.length;n++)this.$dots=this.$dots.add(e("<div/>").appendTo(e("#dots")))}this.$currentScreen&&(this.$currentScreen.addClass("hidden"),this.$currentDot&&this.$currentDot.removeClass("sel")),this.currentScreen=t,this.$currentScreen=this.$screens.eq(t-1).removeClass("hidden"),this.$dots&&(this.$currentDot=this.$dots.eq(t-1).addClass("sel")),t===this.$screens.length?this.showInstallScreen():1!==t&&this.$currentScreen.find("input[type=text]:first").trigger("focus")},validate:function(t,n){var r=this;if(!this.loading){this.loading=!0,this.$currentScreen.find(".input").removeClass("errors"),this.$currentScreen.find("ul.errors").remove();var s=this.$currentScreen.find(".btn.submit");s.addClass("loading");var i="install/validate-"+t,a=this.getInputData(t,n,!1);Craft.sendActionRequest("POST",i,{data:a}).then((function(){r.gotoNextScreen()})).catch((function(n){var s=n.response;if(400===s.status){var i=e("<ul/>",{class:"errors"}).insertBefore(e("#"+t).find(".buttons"));for(var a in s.data.errors)if(s.data.errors.hasOwnProperty(a)){for(var o=0;o<s.data.errors[a].length;o++)e("<li>"+s.data.errors[a][o]+"</li>").appendTo(i);var l=e("#"+t+"-"+a+"-field").children(".input");l.addClass("errors"),function(e){var t=e.find("select,input");r.addListener(t,"focus,blur,textchange,change",(function(){e.removeClass("errors"),this.removeListener(t,"focus,blur,textchange,change")}))}(l)}Garnish.shake(r.modal.$container)}else console.warn("Unexpected response:",s)})).finally((function(){r.loading=!1,s.removeClass("loading")}))}}},{defaultDbPorts:{mysql:3306,pgsql:5432}}),Garnish.$win.on("load",(function(){Craft.installer=new Craft.Installer}))}()}();
//# sourceMappingURL=install.js.map