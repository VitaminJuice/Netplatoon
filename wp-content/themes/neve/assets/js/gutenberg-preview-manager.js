!function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n,r,o,i,a="object",c=function(e){return e&&e.Math==Math&&e},l=c(typeof globalThis==a&&globalThis)||c(typeof window==a&&window)||c(typeof self==a&&self)||c(typeof e==a&&e)||Function("return this")(),u=function(e){try{return!!e()}catch(e){return!0}},s=!u(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),f=function(e){return"object"==typeof e?null!==e:"function"==typeof e},d=l.document,p=f(d)&&f(d.createElement),v=function(e){return p?d.createElement(e):{}},h=!s&&!u(function(){return 7!=Object.defineProperty(v("div"),"a",{get:function(){return 7}}).a}),g=function(e){if(!f(e))throw TypeError(String(e)+" is not an object");return e},y=function(e,t){if(!f(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!f(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!f(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!f(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m=Object.defineProperty,b={f:s?m:function(e,t,n){if(g(e),t=y(t,!0),g(n),h)try{return m(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},w=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},S=s?function(e,t,n){return b.f(e,t,w(1,n))}:function(e,t,n){return e[t]=n,e},L=function(t,n){try{S(l,t,n)}catch(e){l[t]=n}return n},_=t(function(e){var t="__core-js_shared__",n=l[t]||L(t,{});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),E={}.hasOwnProperty,T=function(e,t){return E.call(e,t)},j=_("native-function-to-string",Function.toString),M=l.WeakMap,O="function"==typeof M&&/native code/.test(j.call(M)),x=0,k=Math.random(),P=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++x+k).toString(36)},q=_("keys"),H={},C=l.WeakMap;if(O){var A=new C,G=A.get,N=A.has,I=A.set;n=function(e,t){return I.call(A,e,t),t},r=function(e){return G.call(A,e)||{}},o=function(e){return N.call(A,e)}}else{var D=q[i="state"]||(q[i]=P(i));H[D]=!0,n=function(e,t){return S(e,D,t),t},r=function(e){return T(e,D)?e[D]:{}},o=function(e){return T(e,D)}}var F={set:n,get:r,has:o,enforce:function(e){return o(e)?r(e):n(e,{})},getterFor:function(n){return function(e){var t;if(!f(e)||(t=r(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},R=t(function(e){var t=F.get,c=F.enforce,u=String(j).split("toString");_("inspectSource",function(e){return j.call(e)}),(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||T(n,"name")||S(n,"name",t),c(n).source=u.join("string"==typeof t?t:"")),e!==l?(o?!a&&e[t]&&(i=!0):delete e[t],i?e[t]=n:S(e,t,n)):i?e[t]=n:L(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||j.call(this)})}),B={}.toString,V=function(e){return B.call(e).slice(8,-1)},z=!!Object.getOwnPropertySymbols&&!u(function(){return!String(Symbol())}),W=l.Symbol,U=_("wks"),K=function(e){return U[e]||(U[e]=z&&W[e]||(z?W:P)("Symbol."+e))},X=K("toStringTag"),J="Arguments"==V(function(){return arguments}()),Y=function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),X))?n:J?V(t):"Object"==(r=V(t))&&"function"==typeof t.callee?"Arguments":r},Q={};Q[K("toStringTag")]="z";var Z="[object z]"!==String(Q)?function(){return"[object "+Y(this)+"]"}:Q.toString,$=Object.prototype;Z!==$.toString&&R($,"toString",Z,{unsafe:!0});var ee={}.propertyIsEnumerable,te=Object.getOwnPropertyDescriptor,ne={f:te&&!ee.call({1:2},1)?function(e){var t=te(this,e);return!!t&&t.enumerable}:ee},re="".split,oe=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==V(e)?re.call(e,""):Object(e)}:Object,ie=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},ae=function(e){return oe(ie(e))},ce=Object.getOwnPropertyDescriptor,ue={f:s?ce:function(e,t){if(e=ae(e),t=y(t,!0),h)try{return ce(e,t)}catch(e){}if(T(e,t))return w(!ne.f.call(e,t),e[t])}},se=l,le=function(e){return"function"==typeof e?e:void 0},fe=function(e,t){return arguments.length<2?le(se[e])||le(l[e]):se[e]&&se[e][t]||l[e]&&l[e][t]},de=Math.ceil,pe=Math.floor,ve=function(e){return isNaN(e=+e)?0:(0<e?pe:de)(e)},he=Math.min,ge=function(e){return 0<e?he(ve(e),9007199254740991):0},ye=Math.max,me=Math.min,be=function(s){return function(e,t,n){var r,o,i,a=ae(e),c=ge(a.length),u=(r=c,(o=ve(n))<0?ye(o+r,0):me(o,r));if(s&&t!=t){for(;u<c;)if((i=a[u++])!=i)return!0}else for(;u<c;u++)if((s||u in a)&&a[u]===t)return s||u||0;return!s&&-1}},we={includes:be(!0),indexOf:be(!1)}.indexOf,Se=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),Le={f:Object.getOwnPropertyNames||function(e){return function(e,t){var n,r=ae(e),o=0,i=[];for(n in r)!T(H,n)&&T(r,n)&&i.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~we(i,n)||i.push(n));return i}(e,Se)}},_e={f:Object.getOwnPropertySymbols},Ee=fe("Reflect","ownKeys")||function(e){var t=Le.f(g(e)),n=_e.f;return n?t.concat(n(e)):t},Te=function(e,t){for(var n=Ee(t),r=b.f,o=ue.f,i=0;i<n.length;i++){var a=n[i];T(e,a)||r(e,a,o(t,a))}},je=/#|\.prototype\./,Me=function(e,t){var n=xe[Oe(e)];return n==Pe||n!=ke&&("function"==typeof t?u(t):!!t)},Oe=Me.normalize=function(e){return String(e).replace(je,".").toLowerCase()},xe=Me.data={},ke=Me.NATIVE="N",Pe=Me.POLYFILL="P",qe=Me,He=ue.f,Ce=function(e,t){var n,r,o,i,a,c=e.target,u=e.global,s=e.stat;if(n=u?l:s?l[c]||L(c,{}):(l[c]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(a=He(n,r))&&a.value:n[r],!qe(u?r:c+(s?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Te(i,o)}(e.sham||o&&o.sham)&&S(i,"sham",!0),R(n,r,i,e)}},Ae=b.f,Ge=K("toStringTag"),Ne=K("species"),Ie=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},De={},Fe=K("iterator"),Re=Array.prototype,Be=function(r,o,e){if(Ie(r),void 0===o)return r;switch(e){case 0:return function(){return r.call(o)};case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}},Ve=K("iterator"),ze=function(t,e,n,r){try{return r?e(g(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&g(o.call(t)),e}},We=t(function(e){var p=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,n,r,o){var i,a,c,u,s,l,f,d=Be(t,n,r?2:1);if(o)i=e;else{if("function"!=typeof(a=function(e){if(null!=e)return e[Ve]||e["@@iterator"]||De[Y(e)]}(e)))throw TypeError("Target is not iterable");if(void 0!==(f=a)&&(De.Array===f||Re[Fe]===f)){for(c=0,u=ge(e.length);c<u;c++)if((s=r?d(g(l=e[c])[0],l[1]):d(e[c]))&&s instanceof p)return s;return new p(!1)}i=a.call(e)}for(;!(l=i.next()).done;)if((s=ze(i,d,l.value,r))&&s instanceof p)return s;return new p(!1)}).stop=function(e){return new p(!0,e)}}),Ue=K("iterator"),Ke=!1;try{var Xe=0,Je={next:function(){return{done:!!Xe++}},return:function(){Ke=!0}};Je[Ue]=function(){return this},Array.from(Je,function(){throw 2})}catch(e){}var Ye,Qe,Ze,$e=K("species"),et=fe("document","documentElement"),tt=l.location,nt=l.setImmediate,rt=l.clearImmediate,ot=l.process,it=l.MessageChannel,at=l.Dispatch,ct=0,ut={},st="onreadystatechange",lt=function(e){if(ut.hasOwnProperty(e)){var t=ut[e];delete ut[e],t()}},ft=function(e){return function(){lt(e)}},dt=function(e){lt(e.data)},pt=function(e){l.postMessage(e+"",tt.protocol+"//"+tt.host)};nt&&rt||(nt=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return ut[++ct]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},Ye(ct),ct},rt=function(e){delete ut[e]},"process"==V(ot)?Ye=function(e){ot.nextTick(ft(e))}:at&&at.now?Ye=function(e){at.now(ft(e))}:it?(Ze=(Qe=new it).port2,Qe.port1.onmessage=dt,Ye=Be(Ze.postMessage,Ze,1)):!l.addEventListener||"function"!=typeof postMessage||l.importScripts||u(pt)?Ye=st in v("script")?function(e){et.appendChild(v("script"))[st]=function(){et.removeChild(this),lt(e)}}:function(e){setTimeout(ft(e),0)}:(Ye=pt,l.addEventListener("message",dt,!1)));var vt,ht,gt,yt,mt,bt,wt,St={set:nt,clear:rt},Lt=fe("navigator","userAgent")||"",_t=ue.f,Et=St.set,Tt=l.MutationObserver||l.WebKitMutationObserver,jt=l.process,Mt=l.Promise,Ot="process"==V(jt),xt=_t(l,"queueMicrotask"),kt=xt&&xt.value;kt||(vt=function(){var e,t;for(Ot&&(e=jt.domain)&&e.exit();ht;){t=ht.fn,ht=ht.next;try{t()}catch(e){throw ht?yt():gt=void 0,e}}gt=void 0,e&&e.enter()},yt=Ot?function(){jt.nextTick(vt)}:Tt&&!/(iphone|ipod|ipad).*applewebkit/i.test(Lt)?(mt=!0,bt=document.createTextNode(""),new Tt(vt).observe(bt,{characterData:!0}),function(){bt.data=mt=!mt}):Mt&&Mt.resolve?(wt=Mt.resolve(void 0),function(){wt.then(vt)}):function(){Et.call(l,vt)});var Pt,qt,Ht,Ct,At,Gt,Nt,It,Dt=kt||function(e){var t={fn:e,next:void 0};gt&&(gt.next=t),ht||(ht=t,yt()),gt=t},Ft=function(e){var n,r;this.promise=new e(function(e,t){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=e,r=t}),this.resolve=Ie(n),this.reject=Ie(r)},Rt={f:function(e){return new Ft(e)}},Bt=function(e,t){if(g(e),f(t)&&t.constructor===e)return t;var n=Rt.f(e);return(0,n.resolve)(t),n.promise},Vt=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},zt=St.set,Wt=K("species"),Ut="Promise",Kt=F.get,Xt=F.set,Jt=F.getterFor(Ut),Yt=l[Ut],Qt=l.TypeError,Zt=l.document,$t=l.process,en=l.fetch,tn=$t&&$t.versions,nn=tn&&tn.v8||"",rn=Rt.f,on=rn,an="process"==V($t),cn=!!(Zt&&Zt.createEvent&&l.dispatchEvent),un="unhandledrejection",sn=qe(Ut,function(){var e=Yt.resolve(1),t=function(){},n=(e.constructor={})[Wt]=function(e){e(t,t)};return!((an||"function"==typeof PromiseRejectionEvent)&&e.then(t)instanceof n&&0!==nn.indexOf("6.6")&&-1===Lt.indexOf("Chrome/66"))}),ln=sn||!function(e,t){if(!t&&!Ke)return!1;var n=!1;try{var r={};r[Ue]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}(function(e){Yt.all(e).catch(function(){})}),fn=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},dn=function(f,d,p){if(!d.notified){d.notified=!0;var v=d.reactions;Dt(function(){for(var e=d.value,t=1==d.state,n=0;v.length>n;){var r,o,i,a=v[n++],c=t?a.ok:a.fail,u=a.resolve,s=a.reject,l=a.domain;try{c?(t||(2===d.rejection&&gn(f,d),d.rejection=1),!0===c?r=e:(l&&l.enter(),r=c(e),l&&(l.exit(),i=!0)),r===a.promise?s(Qt("Promise-chain cycle")):(o=fn(r))?o.call(r,u,s):u(r)):s(e)}catch(e){l&&!i&&l.exit(),s(e)}}d.reactions=[],d.notified=!1,p&&!d.rejection&&vn(f,d)})}},pn=function(e,t,n){var r,o;cn?((r=Zt.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},(o=l["on"+e])?o(r):e===un&&function(e,t){var n=l.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)},vn=function(n,r){zt.call(l,function(){var e,t=r.value;if(hn(r)&&(e=Vt(function(){an?$t.emit("unhandledRejection",t,n):pn(un,n,t)}),r.rejection=an||hn(r)?2:1,e.error))throw e.value})},hn=function(e){return 1!==e.rejection&&!e.parent},gn=function(e,t){zt.call(l,function(){an?$t.emit("rejectionHandled",e):pn("rejectionhandled",e,t.value)})},yn=function(t,n,r,o){return function(e){t(n,r,e,o)}},mn=function(e,t,n,r){t.done||(t.done=!0,r&&(t=r),t.value=n,t.state=2,dn(e,t,!0))},bn=function(n,r,e,t){if(!r.done){r.done=!0,t&&(r=t);try{if(n===e)throw Qt("Promise can't be resolved itself");var o=fn(e);o?Dt(function(){var t={done:!1};try{o.call(e,yn(bn,n,t,r),yn(mn,n,t,r))}catch(e){mn(n,t,e,r)}}):(r.value=e,r.state=1,dn(n,r,!1))}catch(e){mn(n,{done:!1},e,r)}}};sn&&(Yt=function(e){!function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,Yt,Ut),Ie(e),Pt.call(this);var t=Kt(this);try{e(yn(bn,this,t),yn(mn,this,t))}catch(e){mn(this,t,e)}},(Pt=function(e){Xt(this,{type:Ut,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(e,t,n){for(var r in t)R(e,r,t[r],n);return e}(Yt.prototype,{then:function(e,t){var n,r,o,i=Jt(this),a=rn((n=Yt,void 0===(o=g(this).constructor)||null==(r=g(o)[$e])?n:Ie(r)));return a.ok="function"!=typeof e||e,a.fail="function"==typeof t&&t,a.domain=an?$t.domain:void 0,i.parent=!0,i.reactions.push(a),0!=i.state&&dn(this,i,!1),a.promise},catch:function(e){return this.then(void 0,e)}}),qt=function(){var e=new Pt,t=Kt(e);this.promise=e,this.resolve=yn(bn,e,t),this.reject=yn(mn,e,t)},Rt.f=rn=function(e){return e===Yt||e===Ht?new qt(e):on(e)},"function"==typeof en&&Ce({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Bt(Yt,en.apply(l,arguments))}})),Ce({global:!0,wrap:!0,forced:sn},{Promise:Yt}),Gt=!(At=Ut),(Ct=Yt)&&!T(Ct=Gt?Ct:Ct.prototype,Ge)&&Ae(Ct,Ge,{configurable:!0,value:At}),Nt=fe(Ut),It=b.f,s&&Nt&&!Nt[Ne]&&It(Nt,Ne,{configurable:!0,get:function(){return this}}),Ht=se[Ut],Ce({target:Ut,stat:!0,forced:sn},{reject:function(e){var t=rn(this);return t.reject.call(void 0,e),t.promise}}),Ce({target:Ut,stat:!0,forced:sn},{resolve:function(e){return Bt(this,e)}}),Ce({target:Ut,stat:!0,forced:ln},{all:function(e){var c=this,t=rn(c),u=t.resolve,s=t.reject,n=Vt(function(){var r=Ie(c.resolve),o=[],i=0,a=1;We(e,function(e){var t=i++,n=!1;o.push(void 0),a++,r.call(c,e).then(function(e){n||(n=!0,o[t]=e,--a||u(o))},s)}),--a||u(o)});return n.error&&s(n.value),t.promise},race:function(e){var n=this,r=rn(n),o=r.reject,t=Vt(function(){var t=Ie(n.resolve);We(e,function(e){t.call(n,e).then(r.resolve,o)})});return t.error&&o(t.value),r.promise}});var wn,Sn,Ln,_n,En,Tn={state:{integrationStatus:neveGutenbergHelper.integrationStatus,titleMeta:neveGutenbergHelper.neve_meta_disable_title,postMeta:neveGutenbergHelper.metaStatus,sidebarPosition:neveGutenbergHelper.neve_meta_sidebar||neveGutenbergHelper.sidebarSetup,containerSetup:neveGutenbergHelper.neve_meta_container||neveGutenbergHelper.containerSetup},setState:function(e,t){this.state[e]=t},getState:function(e){return this.state[e]||null},toggleState:function(e){this.state[e]="enabled"===this.state[e]?"disabled":"enabled"}},jn=function(){if(document.getElementsByClassName("edit-post-more-menu__content").length<=0)return!1;wn=Tn.getState("integrationStatus");var e=document.querySelector(".components-menu-group:first-of-type div:not(.components-menu-group__label) button:last-child");(Sn=document.createElement("button")).classList.add("components-button","components-icon-button","components-menu-item__button"),Sn.innerHTML='<svg style="display: none;" aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-yes" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M14.83 4.89l1.34.94-5.81 8.38H9.02L5.78 9.67l1.34-1.25 2.57 2.4z"></path></svg><span class="components-menu-item__info-wrapper">'+neveGutenbergHelper.strings.menuItemTitle+"</span>","enabled"===wn&&(Sn.classList.add("has-icon"),Sn.querySelector("svg").style.display="block"),Sn.addEventListener("click",function(e){Tn.toggleState("integrationStatus"),new Promise(function(e,t){var n=neveGutenbergHelper.integrationEndpoint,r=new XMLHttpRequest;r.open("POST",n,!0),r.setRequestHeader("X-WP-Nonce",neveGutenbergHelper.nonce),r.setRequestHeader("Content-Type","application/json; charset=UTF-8"),r.onload=function(){200===r.status&&4===r.readyState?e(r.responseText):t({status:this.status,statusText:this.statusText})},r.send(JSON.stringify({neve_gutenberg_integration:Tn.state.integrationStatus}))}).then(function(){var e=Sn.querySelector("svg");if("none"===e.style.display?e.style.display="block":e.style.display="none",Sn.classList.toggle("has-icon"),""!==wp.data.select("core/editor").getEditedPostAttribute("template"))return!1;On()})}),e.parentNode.insertBefore(Sn,e.nextSibling)},Mn=function(){if(null===(Ln=document.querySelector(".editor-page-attributes__template select")))return!1;Ln.addEventListener("change",function(e){if(""===e.target.value)return"disabled"===Tn.getState("integrationStatus")||On(!0),!1;On(!1)})},On=function(e){null===e&&(e="toggle");var t=document.querySelector(".editor-styles-wrapper");return!1===e?(t.classList.remove("neve-gtb"),!1):!0===e?(t.classList.add("neve-gtb"),!1):void t.classList.toggle("neve-gtb")},xn=Array.isArray||function(e){return"Array"==V(e)},kn=K("species"),Pn=function(e,t){var n;return xn(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!xn(n.prototype)?f(n)&&null===(n=n[kn])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},qn=[].push,Hn=function(p){var v=1==p,h=2==p,g=3==p,y=4==p,m=6==p,b=5==p||m;return function(e,t,n,r){for(var o,i,a=Object(ie(e)),c=oe(a),u=Be(t,n,3),s=ge(c.length),l=0,f=r||Pn,d=v?f(e,s):h?f(e,0):void 0;l<s;l++)if((b||l in c)&&(i=u(o=c[l],l,a),p))if(v)d[l]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return l;case 2:qn.call(d,o)}else if(y)return!1;return m?-1:g||y?y:d}},Cn={forEach:Hn(0),map:Hn(1),filter:Hn(2),some:Hn(3),every:Hn(4),find:Hn(5),findIndex:Hn(6)}.forEach,An=(En=[]["forEach"])&&u(function(){En.call(null,_n||function(){throw 1},1)})?[].forEach:function(e){return Cn(this,e,1<arguments.length?arguments[1]:void 0)};for(var Gn in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Nn=l[Gn],In=Nn&&Nn.prototype;if(In&&In.forEach!==An)try{S(In,"forEach",An)}catch(e){In.forEach=An}}var Dn=function(){var e=document.createElement("style");e.classList.add("neve-live-css"),document.body.appendChild(e)},Fn=function(){var e=document.querySelector(".editor-styles-wrapper"),t=document.querySelector(".editor-writing-flow > div:not(.wp-block)"),n=document.querySelector(".editor-writing-flow > div > div"),r=Tn.getState("titleMeta"),o=Tn.getState("postMeta");"enabled"===Tn.getState("integrationStatus")&&""===wp.data.select("core/editor").getEditedPostAttribute("template")&&e.classList.add("neve-gtb"),t.classList.add("neve-content-wrap"),n.classList.add("neve-blocks-wrap"),"enabled"===o&&e.classList.add("neve-has-meta"),"on"===r&&(document.getElementsByClassName("editor-post-title")[0].style.display="none")},Rn=function(){var e=Tn.getState("sidebarPosition");Bn(e)},Bn=function(e){var t=document.querySelector(".editor-writing-flow > div:not(.wp-block)"),n=document.querySelector(".editor-styles-wrapper"),r=Vn(e);switch(n.classList.remove("has-sidebar-left","has-sidebar-right","has-sidebar-full-width"),n.classList.add("has-sidebar-"+e),e){case"right":t.appendChild(r);break;case"left":t.insertBefore(r,t.firstChild)}return!1},Vn=function(e){var t=document.createElement("div");return t.classList.add("neve-gtb-sidebar",e),t.innerHTML="<p>"+neveGutenbergHelper.strings.sidebar+"</p>",t},zn=function(){var e=Tn.getState("containerSetup");Wn(e)},Wn=function(e){var t=document.querySelector(".editor-styles-wrapper");switch(e){default:case"contained":t.classList.remove("container-fluid"),t.classList.add("container");break;case"full-width":t.classList.remove("container"),t.classList.add("container-fluid")}return!1},Un=function(){var t=document.querySelector(".editor-styles-wrapper"),e=document.querySelector("#neve-page-settings  #neve_meta_disable_title");null!==e&&e.addEventListener("change",function(){var e=t.querySelector(".editor-post-title");return"none"===e.style.display?!(e.style.display="block"):!(e.style.display="none")}),document.querySelectorAll("#neve-page-settings input[name=neve_meta_sidebar]").forEach(function(e){e.addEventListener("change",function(e){var t=e.target.value;"default"===t&&(t=neveGutenbergHelper.sidebarSetup);var n=document.querySelectorAll(".neve-gtb-sidebar");return Array.prototype.forEach.call(n,function(e){e.parentNode.removeChild(e)}),Bn(t),!1})}),document.querySelectorAll("#neve-page-settings input[name=neve_meta_container]").forEach(function(e){e.addEventListener("change",function(e){var t=e.target.value;return"default"===t&&(t=neveGutenbergHelper.containerSetup),Wn(t),!1})}),document.querySelector("#neve-page-settings input[name=neve_meta_enable_content_width]").addEventListener("change",function(e){if(!0===e.target.checked)return Xn(),!1;document.querySelector(".neve-live-css").innerHTML=""}),document.querySelector("#neve-page-settings #neve_meta_content_width").addEventListener("input",function(e){var t=e.target.value;return Xn(t),!1}),document.querySelector("#neve-page-settings #neve_meta_content_width-range").addEventListener("input",function(e){var t=e.target.value;return Xn(t),!1})},Kn=function(){return"on"!==neveGutenbergHelper.neve_meta_enable_content_width||Xn(),!1},Xn=function(e){var t,n,r,o,i;return e||(e=document.querySelector("#neve-page-settings input[name=neve_meta_content_width]").value),document.querySelector(".neve-live-css").innerHTML="@media(min-width: 960px) { .neve-gtb.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout > .wp-block:not([data-align=full]):not([data-align=wide]) > *,.neve-gtb.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block > div,.neve-gtb.has-sidebar-left .neve-blocks-wrap,.neve-gtb.has-sidebar-right .neve-blocks-wrap { max-width: "+e+"% !important; } "+(t=e,n=window.getComputedStyle(document.querySelector(".neve-content-wrap")).width,r=t/100*window.getComputedStyle(document.querySelector(".wp-block.editor-post-title__block")).width,o=(n-r)/5,0!==(i=Math.floor(r+2*o))?".wp-block[data-align=wide] { max-width:"+i+"px;}":"")+"}",!1},Jn=function(){!function(){Mn();var e=new MutationObserver(function(e){!function(e,t){for(var n=0;n<e.length;n++)t(e[n])}(e,function(e){"edit-post-more-menu"===e.target.className&&jn(),(e.target.classList.contains("components-panel__body")||e.target.classList.contains("edit-post-meta-boxes-area__container"))&&Mn()})}),t=document.getElementsByClassName("edit-post-layout");e.observe(t[0],{childList:!0,subtree:!0})}(),Dn(),Fn(),Rn(),zn(),Un(),Kn()};window.addEventListener("DOMContentLoaded",function(){Jn()})}();