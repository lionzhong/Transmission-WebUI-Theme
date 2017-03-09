!function(e,n){"use strict";function t(){function e(e,n){if(e)return s(e)?e.indexOf(n)>=0:e.hasOwnProperty(n)}return["$animate",function(n){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(t,r,i,a,c){var o,u=r[0],g=i.ngMessage||i.when,d=i.ngMessageExp||i.whenExp,l=function(e){o=e?s(e)?e:e.split(/[\s,]+/):null,a.reRender()};d?(l(t.$eval(d)),t.$watchCollection(d,l)):l(g);var f,h;a.register(u,h={test:function(n){return e(o,n)},attach:function(){f||c(function(e,t){n.enter(e,null,r),f=e;var s=f.$$attachId=a.getAttachId();f.on("$destroy",function(){f&&f.$$attachId===s&&(a.deregister(u),h.detach()),t.$destroy()})})},detach:function(){if(f){var e=f;f=null,n.leave(e)}}})}}}]}var r,s,i,a;n.module("ngMessages",[],function(){r=n.forEach,s=n.isArray,i=n.isString,a=n.element}).directive("ngMessages",["$animate",function(e){function n(e,n){return i(n)&&0===n.length||t(e.$eval(n))}function t(e){return i(e)?e.length:!!e}var s="ng-active",a="ng-inactive";return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(i,c,o){function u(e,n){for(var t=n,r=[];t&&t!==e;){var s=t.$$ngMessageNode;if(s&&s.length)return m[s];t.childNodes.length&&r.indexOf(t)===-1?(r.push(t),t=t.childNodes[t.childNodes.length-1]):t.previousSibling?t=t.previousSibling:(t=t.parentNode,r.push(t))}}function g(e,n,t){var r=m[t];if(l.head){var s=u(e,n);s?(r.next=s.next,s.next=r):(r.next=l.head,l.head=r)}else l.head=r}function d(e,n,t){var r=m[t],s=u(e,n);s?s.next=r.next:l.head=r.next}var l=this,f=0,h=0;this.getAttachId=function(){return h++};var $,v,m=this.messages={};this.render=function(u){u=u||{},$=!1,v=u;for(var g=n(c,o.ngMessagesMultiple)||n(c,o.multiple),d=[],f={},h=l.head,m=!1,M=0;null!=h;){M++;var p=h.message,x=!1;m||r(u,function(e,n){if(!x&&t(e)&&p.test(n)){if(f[n])return;f[n]=!0,x=!0,p.attach()}}),x?m=!g:d.push(p),h=h.next}r(d,function(e){e.detach()}),d.length!==M?e.setClass(i,s,a):e.setClass(i,a,s)},c.$watchCollection(o.ngMessages||o.for,l.render),i.on("$destroy",function(){r(m,function(e){e.message.detach()})}),this.reRender=function(){$||($=!0,c.$evalAsync(function(){$&&v&&l.render(v)}))},this.register=function(e,n){var t=f.toString();m[t]={message:n},g(i[0],e,t),e.$$ngMessageNode=t,f++,l.reRender()},this.deregister=function(e){var n=e.$$ngMessageNode;delete e.$$ngMessageNode,d(i[0],e,n),delete m[n],l.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(e,n,t){function r(e,r){var s=t.$$createComment?t.$$createComment("ngMessagesInclude",r):n[0].createComment(" ngMessagesInclude: "+r+" "),i=a(s);e.after(i),e.remove()}return{restrict:"AE",require:"^^ngMessages",link:function(n,s,a){var c=a.ngMessagesInclude||a.src;e(c).then(function(e){n.$$destroyed||(i(e)&&!e.trim()?r(s,c):t(e)(n,function(e){s.after(e),r(s,c)}))})}}}]).directive("ngMessage",t()).directive("ngMessageExp",t())}(window,window.angular);
//# sourceMappingURL=../maps/angular/angular-messages.js.map
