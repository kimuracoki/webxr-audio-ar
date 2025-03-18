(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Mf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function iS(){if(Sg)return vo;Sg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return vo.Fragment=e,vo.jsx=i,vo.jsxs=i,vo}var xg;function aS(){return xg||(xg=1,Mf.exports=iS()),Mf.exports}var Ki=aS(),yf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function rS(){if(Mg)return se;Mg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function M(L,nt,Et){this.props=L,this.context=nt,this.refs=w,this.updater=Et||y}M.prototype.isReactComponent={},M.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=M.prototype;function P(L,nt,Et){this.props=L,this.context=nt,this.refs=w,this.updater=Et||y}var O=P.prototype=new g;O.constructor=P,R(O,M.prototype),O.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function B(L,nt,Et,At,q,dt){return Et=dt.ref,{$$typeof:o,type:L,key:nt,ref:Et!==void 0?Et:null,props:dt}}function K(L,nt){return B(L.type,nt,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function A(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Et){return nt[Et]})}var F=/\/+/g;function ut(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):nt.toString(36)}function it(){}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(it,it):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,nt,Et,At,q){var dt=typeof L;(dt==="undefined"||dt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case o:case e:St=!0;break;case _:return St=L._init,ht(St(L._payload),nt,Et,At,q)}}if(St)return q=q(L),St=At===""?"."+ut(L,0):At,U(q)?(Et="",St!=null&&(Et=St.replace(F,"$&/")+"/"),ht(q,nt,Et,"",function(Kt){return Kt})):q!=null&&(C(q)&&(q=K(q,Et+(q.key==null||L&&L.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+St)),nt.push(q)),1;St=0;var Tt=At===""?".":At+":";if(U(L))for(var Rt=0;Rt<L.length;Rt++)At=L[Rt],dt=Tt+ut(At,Rt),St+=ht(At,nt,Et,dt,q);else if(Rt=x(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!(At=L.next()).done;)At=At.value,dt=Tt+ut(At,Rt++),St+=ht(At,nt,Et,dt,q);else if(dt==="object"){if(typeof L.then=="function")return ht(mt(L),nt,Et,At,q);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function W(L,nt,Et){if(L==null)return L;var At=[],q=0;return ht(L,At,"","",function(dt){return nt.call(Et,dt,q++)}),At}function at(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(Et){(L._status===0||L._status===-1)&&(L._status=1,L._result=Et)},function(Et){(L._status===0||L._status===-1)&&(L._status=2,L._result=Et)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var Z=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return se.Children={map:W,forEach:function(L,nt,Et){W(L,function(){nt.apply(this,arguments)},Et)},count:function(L){var nt=0;return W(L,function(){nt++}),nt},toArray:function(L){return W(L,function(nt){return nt})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=r,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,se.act=function(){throw Error("act(...) is not supported in production builds of React.")},se.cache=function(L){return function(){return L.apply(null,arguments)}},se.cloneElement=function(L,nt,Et){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=R({},L.props),q=L.key,dt=void 0;if(nt!=null)for(St in nt.ref!==void 0&&(dt=void 0),nt.key!==void 0&&(q=""+nt.key),nt)!H.call(nt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&nt.ref===void 0||(At[St]=nt[St]);var St=arguments.length-2;if(St===1)At.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];At.children=Tt}return B(L.type,q,void 0,void 0,dt,At)},se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},se.createElement=function(L,nt,Et){var At,q={},dt=null;if(nt!=null)for(At in nt.key!==void 0&&(dt=""+nt.key),nt)H.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(q[At]=nt[At]);var St=arguments.length-2;if(St===1)q.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];q.children=Tt}if(L&&L.defaultProps)for(At in St=L.defaultProps,St)q[At]===void 0&&(q[At]=St[At]);return B(L,dt,void 0,void 0,null,q)},se.createRef=function(){return{current:null}},se.forwardRef=function(L){return{$$typeof:d,render:L}},se.isValidElement=C,se.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:at}},se.memo=function(L,nt){return{$$typeof:m,type:L,compare:nt===void 0?null:nt}},se.startTransition=function(L){var nt=G.T,Et={};G.T=Et;try{var At=L(),q=G.S;q!==null&&q(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(xt,Z)}catch(dt){Z(dt)}finally{G.T=nt}},se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},se.use=function(L){return G.H.use(L)},se.useActionState=function(L,nt,Et){return G.H.useActionState(L,nt,Et)},se.useCallback=function(L,nt){return G.H.useCallback(L,nt)},se.useContext=function(L){return G.H.useContext(L)},se.useDebugValue=function(){},se.useDeferredValue=function(L,nt){return G.H.useDeferredValue(L,nt)},se.useEffect=function(L,nt){return G.H.useEffect(L,nt)},se.useId=function(){return G.H.useId()},se.useImperativeHandle=function(L,nt,Et){return G.H.useImperativeHandle(L,nt,Et)},se.useInsertionEffect=function(L,nt){return G.H.useInsertionEffect(L,nt)},se.useLayoutEffect=function(L,nt){return G.H.useLayoutEffect(L,nt)},se.useMemo=function(L,nt){return G.H.useMemo(L,nt)},se.useOptimistic=function(L,nt){return G.H.useOptimistic(L,nt)},se.useReducer=function(L,nt,Et){return G.H.useReducer(L,nt,Et)},se.useRef=function(L){return G.H.useRef(L)},se.useState=function(L){return G.H.useState(L)},se.useSyncExternalStore=function(L,nt,Et){return G.H.useSyncExternalStore(L,nt,Et)},se.useTransition=function(){return G.H.useTransition()},se.version="19.0.0",se}var yg;function Xh(){return yg||(yg=1,yf.exports=rS()),yf.exports}var sS=Xh(),Ef={exports:{}},So={},Tf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function oS(){return Eg||(Eg=1,function(o){function e(W,at){var Z=W.length;W.push(at);t:for(;0<Z;){var xt=Z-1>>>1,L=W[xt];if(0<l(L,at))W[xt]=at,W[Z]=L,Z=xt;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var at=W[0],Z=W.pop();if(Z!==at){W[0]=Z;t:for(var xt=0,L=W.length,nt=L>>>1;xt<nt;){var Et=2*(xt+1)-1,At=W[Et],q=Et+1,dt=W[q];if(0>l(At,Z))q<L&&0>l(dt,At)?(W[xt]=dt,W[q]=Z,xt=q):(W[xt]=At,W[Et]=Z,xt=Et);else if(q<L&&0>l(dt,Z))W[xt]=dt,W[q]=Z,xt=q;else break t}}return at}function l(W,at){var Z=W.sortIndex-at.sortIndex;return Z!==0?Z:W.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,S=null,x=3,y=!1,R=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(W){for(var at=i(m);at!==null;){if(at.callback===null)r(m);else if(at.startTime<=W)r(m),at.sortIndex=at.expirationTime,e(p,at);else break;at=i(m)}}function U(W){if(w=!1,O(W),!R)if(i(p)!==null)R=!0,mt();else{var at=i(m);at!==null&&ht(U,at.startTime-W)}}var G=!1,H=-1,B=5,K=-1;function C(){return!(o.unstable_now()-K<B)}function A(){if(G){var W=o.unstable_now();K=W;var at=!0;try{t:{R=!1,w&&(w=!1,g(H),H=-1),y=!0;var Z=x;try{e:{for(O(W),S=i(p);S!==null&&!(S.expirationTime>W&&C());){var xt=S.callback;if(typeof xt=="function"){S.callback=null,x=S.priorityLevel;var L=xt(S.expirationTime<=W);if(W=o.unstable_now(),typeof L=="function"){S.callback=L,O(W),at=!0;break e}S===i(p)&&r(p),O(W)}else r(p);S=i(p)}if(S!==null)at=!0;else{var nt=i(m);nt!==null&&ht(U,nt.startTime-W),at=!1}}break t}finally{S=null,x=Z,y=!1}at=void 0}}finally{at?F():G=!1}}}var F;if(typeof P=="function")F=function(){P(A)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,it=ut.port2;ut.port1.onmessage=A,F=function(){it.postMessage(null)}}else F=function(){M(A,0)};function mt(){G||(G=!0,F())}function ht(W,at){H=M(function(){W(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_continueExecution=function(){R||y||(R=!0,mt())},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(W){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var Z=x;x=at;try{return W()}finally{x=Z}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(W,at){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=x;x=W;try{return at()}finally{x=Z}},o.unstable_scheduleCallback=function(W,at,Z){var xt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,W){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,W={id:_++,callback:at,priorityLevel:W,startTime:Z,expirationTime:L,sortIndex:-1},Z>xt?(W.sortIndex=Z,e(m,W),i(p)===null&&W===i(m)&&(w?(g(H),H=-1):w=!0,ht(U,Z-xt))):(W.sortIndex=L,e(p,W),R||y||(R=!0,mt())),W},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(W){var at=x;return function(){var Z=x;x=at;try{return W.apply(this,arguments)}finally{x=Z}}}}(bf)),bf}var Tg;function lS(){return Tg||(Tg=1,Tf.exports=oS()),Tf.exports}var Af={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function uS(){if(bg)return xn;bg=1;var o=Xh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:p,containerInfo:m,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,xn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,_)},xn.flushSync=function(p){var m=h.T,_=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=_,r.d.f()}},xn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},xn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},xn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,S=d(_,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(p,{crossOrigin:S,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},xn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},xn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,S=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},xn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},xn.requestFormReset=function(p){r.d.r(p)},xn.unstable_batchedUpdates=function(p,m){return p(m)},xn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},xn.useFormStatus=function(){return h.H.useHostTransitionStatus()},xn.version="19.0.0",xn}var Ag;function cS(){if(Ag)return Af.exports;Ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Af.exports=uS(),Af.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function fS(){if(Rg)return So;Rg=1;var o=lS(),e=Xh(),i=cS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var c=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),y=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),U=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var B=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===B?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case g:return n=t.displayName||null,n!==null?n:K(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return K(t(n))}catch{}}return null}var C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,F,ut;function it(t){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+t+ut}var mt=!1;function ht(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var et=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){et=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){et=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var N=v.split(`
`),V=T.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===V.length)for(s=N.length-1,u=V.length-1;1<=s&&0<=u&&N[s]!==V[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==V[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==V[u]){var lt=`
`+N[s].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=s&&0<=u);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?it(a):""}function W(t){switch(t.tag){case 26:case 27:case 5:return it(t.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return t=ht(t.type,!1),t;case 11:return t=ht(t.type.render,!1),t;case 1:return t=ht(t.type,!0),t;default:return""}}function at(t){try{var n="";do n+=W(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Z(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function xt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function L(t){if(Z(t)!==t)throw Error(r(188))}function nt(t){var n=t.alternate;if(!n){if(n=Z(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return L(u),t;if(f===s)return L(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function Et(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=Et(t),n!==null)return n;t=t.sibling}return null}var At=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function Rt(t){return{current:t}}function Kt(t){0>Tt||(t.current=St[Tt],St[Tt]=null,Tt--)}function Pt(t,n){Tt++,St[Tt]=t.current,t.current=n}var xe=Rt(null),Re=Rt(null),ie=Rt(null),z=Rt(null);function dn(t,n){switch(Pt(ie,n),Pt(Re,t),Pt(xe,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Zm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Zm(t),n=jm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(xe),Pt(xe,n)}function re(){Kt(xe),Kt(Re),Kt(ie)}function ce(t){t.memoizedState!==null&&Pt(z,t);var n=xe.current,a=jm(n,t.type);n!==a&&(Pt(Re,t),Pt(xe,a))}function kt(t){Re.current===t&&(Kt(xe),Kt(Re)),z.current===t&&(Kt(z),ho._currentValue=dt)}var Ce=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,D=o.unstable_cancelCallback,E=o.unstable_shouldYield,tt=o.unstable_requestPaint,ct=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,de=o.unstable_IdlePriority,yt=o.log,Bt=o.unstable_setDisableYieldValue,jt=null,Gt=null;function Ft(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(jt,t,void 0,(t.current.flags&128)===128)}catch{}}function ae(t){if(typeof yt=="function"&&Bt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(jt,t)}catch{}}var Yt=Math.clz32?Math.clz32:Lt,we=Math.log,k=Math.LN2;function Lt(t){return t>>>=0,t===0?32:31-(we(t)/k|0)|0}var st=128,gt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,u=t.suspendedLanes,f=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~u,a!==0?s=Ct(a):(f&=T,f!==0?s=Ct(f):t||(v=T&~v,v!==0&&(s=Ct(v))))):(T=a&~u,T!==0?s=Ct(T):f!==0?s=Ct(f):t||(v=a&~v,v!==0&&(s=Ct(v)))),s===0?0:n!==0&&n!==s&&(n&u)===0&&(u=s&-s,v=n&-n,u>=v||u===32&&(v&4194176)!==0)?n:s}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var t=st;return st<<=1,(st&4194176)===0&&(st=128),t}function Me(){var t=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),t}function En(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Tn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Uo(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,V=t.hiddenUpdates;for(a=v&~a;0<a;){var lt=31-Yt(a),_t=1<<lt;T[lt]=0,N[lt]=-1;var et=V[lt];if(et!==null)for(V[lt]=null,lt=0;lt<et.length;lt++){var ot=et[lt];ot!==null&&(ot.lane&=-536870913)}a&=~_t}s!==0&&Es(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Es(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Yt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function gi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Yt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function _r(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ts(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:dg(t.type))}function Lo(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var Fn=Math.random().toString(36).slice(2),tn="__reactFiber$"+Fn,en="__reactProps$"+Fn,Ai="__reactContainer$"+Fn,vr="__reactEvents$"+Fn,vu="__reactListeners$"+Fn,Su="__reactHandles$"+Fn,No="__reactResources$"+Fn,Oa="__reactMarker$"+Fn;function bs(t){delete t[tn],delete t[en],delete t[vr],delete t[vu],delete t[Su]}function Ri(t){var n=t[tn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ai]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Jm(t);t!==null;){if(a=t[tn])return a;t=Jm(t)}return n}t=a,a=t.parentNode}return null}function b(t){if(t=t[tn]||t[Ai]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $(t){var n=t[No];return n||(n=t[No]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(t){t[Oa]=!0}var Y=new Set,Mt={};function bt(t,n){Ot(t,n),Ot(t+"Capture",n)}function Ot(t,n){for(Mt[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},qt={};function pe(t){return Ce.call(qt,t)?!0:Ce.call(te,t)?!1:$t.test(t)?qt[t]=!0:(te[t]=!0,!1)}function me(t,n,a){if(pe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Fe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ye(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nn(t){var n=Zt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){s=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ge(t){t._valueTracker||(t._valueTracker=nn(t))}function Un(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Zt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ri(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var bn=/[\n"\\]/g;function ln(t){return t.replace(bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function De(t,n,a,s,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ee(n)):t.value!==""+ee(n)&&(t.value=""+ee(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?vn(t,v,ee(n)):a!=null?vn(t,v,ee(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ee(T):t.removeAttribute("name")}function An(t,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function vn(t,n,a){n==="number"&&ri(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ve(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+ee(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ee(a):""}function Sr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ee(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var tv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||tv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function id(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&nd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&nd(t,f,n[f])}function xu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oo(t){return nv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Mu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Mr=null;function ad(t){var n=b(t);if(n&&(t=n.stateNode)){var a=t[en]||null;t:switch(t=n.stateNode,n.type){case"input":if(De(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ln(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[en]||null;if(!u)throw Error(r(90));De(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Un(s)}break t;case"textarea":pn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ve(t,!!a.multiple,n,!1)}}}var Eu=!1;function rd(t,n,a){if(Eu)return t(n,a);Eu=!0;try{var s=t(n);return s}finally{if(Eu=!1,(xr!==null||Mr!==null)&&(_l(),xr&&(n=xr,t=Mr,Mr=xr=null,ad(n),t)))for(n=0;n<t.length;n++)ad(t[n])}}function As(t,n){var a=t.stateNode;if(a===null)return null;var s=a[en]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Tu=!1;if(Nt)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Tu=!1}var na=null,bu=null,Po=null;function sd(){if(Po)return Po;var t,n=bu,a=n.length,s,u="value"in na?na.value:na.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return Po=u.slice(t,1<s?1-s:void 0)}function zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function od(){return!1}function Nn(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bo:od,this.isPropagationStopped=od,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Nn(Pa),Cs=A({},Pa,{view:0,detail:0}),iv=Nn(Cs),Au,Ru,ws,Io=A({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(Au=t.screenX-ws.screenX,Ru=t.screenY-ws.screenY):Ru=Au=0,ws=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),ld=Nn(Io),av=A({},Io,{dataTransfer:0}),rv=Nn(av),sv=A({},Cs,{relatedTarget:0}),Cu=Nn(sv),ov=A({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=Nn(ov),uv=A({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=Nn(uv),fv=A({},Pa,{data:0}),ud=Nn(fv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=pv[t])?!!n[t]:!1}function wu(){return mv}var gv=A({},Cs,{key:function(t){if(t.key){var n=hv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_v=Nn(gv),vv=A({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=Nn(vv),Sv=A({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),xv=Nn(Sv),Mv=A({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Nn(Mv),Ev=A({},Io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=Nn(Ev),bv=A({},Pa,{newState:0,oldState:0}),Av=Nn(bv),Rv=[9,13,27,32],Du=Nt&&"CompositionEvent"in window,Ds=null;Nt&&"documentMode"in document&&(Ds=document.documentMode);var Cv=Nt&&"TextEvent"in window&&!Ds,fd=Nt&&(!Du||Ds&&8<Ds&&11>=Ds),hd=" ",dd=!1;function pd(t,n){switch(t){case"keyup":return Rv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function wv(t,n){switch(t){case"compositionend":return md(n);case"keypress":return n.which!==32?null:(dd=!0,hd);case"textInput":return t=n.data,t===hd&&dd?null:t;default:return null}}function Dv(t,n){if(yr)return t==="compositionend"||!Du&&pd(t,n)?(t=sd(),Po=bu=na=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fd&&n.locale!=="ko"?null:n.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Uv[t.type]:n==="textarea"}function _d(t,n,a,s){xr?Mr?Mr.push(s):Mr=[s]:xr=s,n=yl(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Us=null,Ls=null;function Lv(t){km(t,0)}function Ho(t){var n=X(t);if(Un(n))return t}function vd(t,n){if(t==="change")return n}var Sd=!1;if(Nt){var Uu;if(Nt){var Lu="oninput"in document;if(!Lu){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Lu=typeof xd.oninput=="function"}Uu=Lu}else Uu=!1;Sd=Uu&&(!document.documentMode||9<document.documentMode)}function Md(){Us&&(Us.detachEvent("onpropertychange",yd),Ls=Us=null)}function yd(t){if(t.propertyName==="value"&&Ho(Ls)){var n=[];_d(n,Ls,t,yu(t)),rd(Lv,n)}}function Nv(t,n,a){t==="focusin"?(Md(),Us=n,Ls=a,Us.attachEvent("onpropertychange",yd)):t==="focusout"&&Md()}function Ov(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ho(Ls)}function Pv(t,n){if(t==="click")return Ho(n)}function zv(t,n){if(t==="input"||t==="change")return Ho(n)}function Bv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:Bv;function Ns(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ce.call(n,u)||!In(t[u],n[u]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,n){var a=Ed(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ed(a)}}function bd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ri(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ri(t.document)}return n}function Nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Fv(t,n){var a=Ad(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&bd(n.ownerDocument.documentElement,n)){if(s!==null&&Nu(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,f=Math.min(s.start,u);s=s.end===void 0?f:Math.min(s.end,u),!a.extend&&f>s&&(u=s,s=f,f=u),u=Td(n,f);var v=Td(n,s);u&&v&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Iv=Nt&&"documentMode"in document&&11>=document.documentMode,Er=null,Ou=null,Os=null,Pu=!1;function Rd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||Er==null||Er!==ri(s)||(s=Er,"selectionStart"in s&&Nu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Os&&Ns(Os,s)||(Os=s,s=yl(Ou,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function za(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},zu={},Cd={};Nt&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ba(t){if(zu[t])return zu[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cd)return zu[t]=n[a];return t}var wd=Ba("animationend"),Dd=Ba("animationiteration"),Ud=Ba("animationstart"),Hv=Ba("transitionrun"),Gv=Ba("transitionstart"),Vv=Ba("transitioncancel"),Ld=Ba("transitionend"),Nd=new Map,Od="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function si(t,n){Nd.set(t,n),bt(n,[t])}var qn=[],br=0,Bu=0;function Go(){for(var t=br,n=Bu=br=0;n<t;){var a=qn[n];qn[n++]=null;var s=qn[n];qn[n++]=null;var u=qn[n];qn[n++]=null;var f=qn[n];if(qn[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Pd(a,u,f)}}function Vo(t,n,a,s){qn[br++]=t,qn[br++]=n,qn[br++]=a,qn[br++]=s,Bu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Fu(t,n,a,s){return Vo(t,n,a,s),ko(t)}function ia(t,n){return Vo(t,null,null,n),ko(t)}function Pd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;u&&n!==null&&t.tag===3&&(f=t.stateNode,u=31-Yt(a),f=f.hiddenUpdates,t=f[u],t===null?f[u]=[n]:t.push(n),n.lane=a|536870912)}function ko(t){if(50<ro)throw ro=0,Xc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ar={},zd=new WeakMap;function Yn(t,n){if(typeof t=="object"&&t!==null){var a=zd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:at(n)},zd.set(t,n),n)}return{value:t,source:n,stack:at(n)}}var Rr=[],Cr=0,Xo=null,Wo=0,Zn=[],jn=0,Fa=null,Ci=1,wi="";function Ia(t,n){Rr[Cr++]=Wo,Rr[Cr++]=Xo,Xo=t,Wo=n}function Bd(t,n,a){Zn[jn++]=Ci,Zn[jn++]=wi,Zn[jn++]=Fa,Fa=t;var s=Ci;t=wi;var u=32-Yt(s)-1;s&=~(1<<u),a+=1;var f=32-Yt(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Ci=1<<32-Yt(n)+u|a<<u|s,wi=f+t}else Ci=1<<f|a<<u|s,wi=t}function Iu(t){t.return!==null&&(Ia(t,1),Bd(t,1,0))}function Hu(t){for(;t===Xo;)Xo=Rr[--Cr],Rr[Cr]=null,Wo=Rr[--Cr],Rr[Cr]=null;for(;t===Fa;)Fa=Zn[--jn],Zn[jn]=null,wi=Zn[--jn],Zn[jn]=null,Ci=Zn[--jn],Zn[jn]=null}var Rn=null,mn=null,Ee=!1,oi=null,_i=!1,Gu=Error(r(519));function Ha(t){var n=Error(r(418,""));throw Bs(Yn(n,t)),Gu}function Fd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[tn]=t,n[en]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)_e(oo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),An(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ge(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Sr(n,s.value,s.defaultValue,s.children),ge(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ym(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=El),n=!0):n=!1,n||Ha(t)}function Id(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 3:case 27:_i=!0;return;case 5:case 13:_i=!1;return;default:Rn=Rn.return}}function Ps(t){if(t!==Rn)return!1;if(!Ee)return Id(t),Ee=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||lf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&mn&&Ha(t),Id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){mn=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}mn=null}}else mn=Rn?ui(t.stateNode.nextSibling):null;return!0}function zs(){mn=Rn=null,Ee=!1}function Bs(t){oi===null?oi=[t]:oi.push(t)}var Fs=Error(r(460)),Hd=Error(r(474)),Vu={then:function(){}};function Gd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qo(){}function Vd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qo,qo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Fs?Error(r(483)):t;default:if(typeof n.status=="string")n.then(qo,qo);else{if(t=ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Fs?Error(r(483)):t}throw Is=n,Fs}}var Is=null;function kd(){if(Is===null)throw Error(r(459));var t=Is;return Is=null,t}var wr=null,Hs=0;function Yo(t){var n=Hs;return Hs+=1,wr===null&&(wr=[]),Vd(wr,t,n)}function Gs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Zo(t,n){throw n.$$typeof===c?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xd(t){var n=t._init;return n(t._payload)}function Wd(t){function n(j,I){if(t){var J=j.deletions;J===null?(j.deletions=[I],j.flags|=16):J.push(I)}}function a(j,I){if(!t)return null;for(;I!==null;)n(j,I),I=I.sibling;return null}function s(j){for(var I=new Map;j!==null;)j.key!==null?I.set(j.key,j):I.set(j.index,j),j=j.sibling;return I}function u(j,I){return j=ma(j,I),j.index=0,j.sibling=null,j}function f(j,I,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<I?(j.flags|=33554434,I):J):(j.flags|=33554434,I)):(j.flags|=1048576,I)}function v(j){return t&&j.alternate===null&&(j.flags|=33554434),j}function T(j,I,J,pt){return I===null||I.tag!==6?(I=zc(J,j.mode,pt),I.return=j,I):(I=u(I,J),I.return=j,I)}function N(j,I,J,pt){var It=J.type;return It===p?lt(j,I,J.props.children,pt,J.key):I!==null&&(I.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&Xd(It)===I.type)?(I=u(I,J.props),Gs(I,J),I.return=j,I):(I=hl(J.type,J.key,J.props,null,j.mode,pt),Gs(I,J),I.return=j,I)}function V(j,I,J,pt){return I===null||I.tag!==4||I.stateNode.containerInfo!==J.containerInfo||I.stateNode.implementation!==J.implementation?(I=Bc(J,j.mode,pt),I.return=j,I):(I=u(I,J.children||[]),I.return=j,I)}function lt(j,I,J,pt,It){return I===null||I.tag!==7?(I=Ka(J,j.mode,pt,It),I.return=j,I):(I=u(I,J),I.return=j,I)}function _t(j,I,J){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=zc(""+I,j.mode,J),I.return=j,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case h:return J=hl(I.type,I.key,I.props,null,j.mode,J),Gs(J,I),J.return=j,J;case d:return I=Bc(I,j.mode,J),I.return=j,I;case P:var pt=I._init;return I=pt(I._payload),_t(j,I,J)}if(At(I)||H(I))return I=Ka(I,j.mode,J,null),I.return=j,I;if(typeof I.then=="function")return _t(j,Yo(I),J);if(I.$$typeof===y)return _t(j,ul(j,I),J);Zo(j,I)}return null}function et(j,I,J,pt){var It=I!==null?I.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:T(j,I,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===It?N(j,I,J,pt):null;case d:return J.key===It?V(j,I,J,pt):null;case P:return It=J._init,J=It(J._payload),et(j,I,J,pt)}if(At(J)||H(J))return It!==null?null:lt(j,I,J,pt,null);if(typeof J.then=="function")return et(j,I,Yo(J),pt);if(J.$$typeof===y)return et(j,I,ul(j,J),pt);Zo(j,J)}return null}function ot(j,I,J,pt,It){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,T(I,j,""+pt,It);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case h:return j=j.get(pt.key===null?J:pt.key)||null,N(I,j,pt,It);case d:return j=j.get(pt.key===null?J:pt.key)||null,V(I,j,pt,It);case P:var fe=pt._init;return pt=fe(pt._payload),ot(j,I,J,pt,It)}if(At(pt)||H(pt))return j=j.get(J)||null,lt(I,j,pt,It,null);if(typeof pt.then=="function")return ot(j,I,J,Yo(pt),It);if(pt.$$typeof===y)return ot(j,I,J,ul(I,pt),It);Zo(I,pt)}return null}function Vt(j,I,J,pt){for(var It=null,fe=null,Wt=I,Qt=I=0,fn=null;Wt!==null&&Qt<J.length;Qt++){Wt.index>Qt?(fn=Wt,Wt=null):fn=Wt.sibling;var Te=et(j,Wt,J[Qt],pt);if(Te===null){Wt===null&&(Wt=fn);break}t&&Wt&&Te.alternate===null&&n(j,Wt),I=f(Te,I,Qt),fe===null?It=Te:fe.sibling=Te,fe=Te,Wt=fn}if(Qt===J.length)return a(j,Wt),Ee&&Ia(j,Qt),It;if(Wt===null){for(;Qt<J.length;Qt++)Wt=_t(j,J[Qt],pt),Wt!==null&&(I=f(Wt,I,Qt),fe===null?It=Wt:fe.sibling=Wt,fe=Wt);return Ee&&Ia(j,Qt),It}for(Wt=s(Wt);Qt<J.length;Qt++)fn=ot(Wt,j,Qt,J[Qt],pt),fn!==null&&(t&&fn.alternate!==null&&Wt.delete(fn.key===null?Qt:fn.key),I=f(fn,I,Qt),fe===null?It=fn:fe.sibling=fn,fe=fn);return t&&Wt.forEach(function(ya){return n(j,ya)}),Ee&&Ia(j,Qt),It}function ne(j,I,J,pt){if(J==null)throw Error(r(151));for(var It=null,fe=null,Wt=I,Qt=I=0,fn=null,Te=J.next();Wt!==null&&!Te.done;Qt++,Te=J.next()){Wt.index>Qt?(fn=Wt,Wt=null):fn=Wt.sibling;var ya=et(j,Wt,Te.value,pt);if(ya===null){Wt===null&&(Wt=fn);break}t&&Wt&&ya.alternate===null&&n(j,Wt),I=f(ya,I,Qt),fe===null?It=ya:fe.sibling=ya,fe=ya,Wt=fn}if(Te.done)return a(j,Wt),Ee&&Ia(j,Qt),It;if(Wt===null){for(;!Te.done;Qt++,Te=J.next())Te=_t(j,Te.value,pt),Te!==null&&(I=f(Te,I,Qt),fe===null?It=Te:fe.sibling=Te,fe=Te);return Ee&&Ia(j,Qt),It}for(Wt=s(Wt);!Te.done;Qt++,Te=J.next())Te=ot(Wt,j,Qt,Te.value,pt),Te!==null&&(t&&Te.alternate!==null&&Wt.delete(Te.key===null?Qt:Te.key),I=f(Te,I,Qt),fe===null?It=Te:fe.sibling=Te,fe=Te);return t&&Wt.forEach(function(nS){return n(j,nS)}),Ee&&Ia(j,Qt),It}function We(j,I,J,pt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var It=J.key;I!==null;){if(I.key===It){if(It=J.type,It===p){if(I.tag===7){a(j,I.sibling),pt=u(I,J.props.children),pt.return=j,j=pt;break t}}else if(I.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&Xd(It)===I.type){a(j,I.sibling),pt=u(I,J.props),Gs(pt,J),pt.return=j,j=pt;break t}a(j,I);break}else n(j,I);I=I.sibling}J.type===p?(pt=Ka(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=hl(J.type,J.key,J.props,null,j.mode,pt),Gs(pt,J),pt.return=j,j=pt)}return v(j);case d:t:{for(It=J.key;I!==null;){if(I.key===It)if(I.tag===4&&I.stateNode.containerInfo===J.containerInfo&&I.stateNode.implementation===J.implementation){a(j,I.sibling),pt=u(I,J.children||[]),pt.return=j,j=pt;break t}else{a(j,I);break}else n(j,I);I=I.sibling}pt=Bc(J,j.mode,pt),pt.return=j,j=pt}return v(j);case P:return It=J._init,J=It(J._payload),We(j,I,J,pt)}if(At(J))return Vt(j,I,J,pt);if(H(J)){if(It=H(J),typeof It!="function")throw Error(r(150));return J=It.call(J),ne(j,I,J,pt)}if(typeof J.then=="function")return We(j,I,Yo(J),pt);if(J.$$typeof===y)return We(j,I,ul(j,J),pt);Zo(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,I!==null&&I.tag===6?(a(j,I.sibling),pt=u(I,J),pt.return=j,j=pt):(a(j,I),pt=zc(J,j.mode,pt),pt.return=j,j=pt),v(j)):a(j,I)}return function(j,I,J,pt){try{Hs=0;var It=We(j,I,J,pt);return wr=null,It}catch(Wt){if(Wt===Fs)throw Wt;var fe=$n(29,Wt,null,j.mode);return fe.lanes=pt,fe.return=j,fe}finally{}}}var Ga=Wd(!0),qd=Wd(!1),Dr=Rt(null),jo=Rt(0);function Yd(t,n){t=Hi,Pt(jo,t),Pt(Dr,n),Hi=t|n.baseLanes}function ku(){Pt(jo,Hi),Pt(Dr,Dr.current)}function Xu(){Hi=jo.current,Kt(Dr),Kt(jo)}var Kn=Rt(null),vi=null;function aa(t){var n=t.alternate;Pt(an,an.current&1),Pt(Kn,t),vi===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(vi=t)}function Zd(t){if(t.tag===22){if(Pt(an,an.current),Pt(Kn,t),vi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(vi=t)}}else ra()}function ra(){Pt(an,an.current),Pt(Kn,Kn.current)}function Di(t){Kt(Kn),vi===t&&(vi=null),Kt(an)}var an=Rt(0);function Ko(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var kv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Xv=o.unstable_scheduleCallback,Wv=o.unstable_NormalPriority,rn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new kv,data:new Map,refCount:0}}function Vs(t){t.refCount--,t.refCount===0&&Xv(Wv,function(){t.controller.abort()})}var ks=null,qu=0,Ur=0,Lr=null;function qv(t,n){if(ks===null){var a=ks=[];qu=0,Ur=Jc(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return qu++,n.then(jd,jd),n}function jd(){if(--qu===0&&ks!==null){Lr!==null&&(Lr.status="fulfilled");var t=ks;ks=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Yv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Kd=C.S;C.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&qv(t,n),Kd!==null&&Kd(t,n)};var Va=Rt(null);function Yu(){var t=Va.current;return t!==null?t:ze.pooledCache}function Qo(t,n){n===null?Pt(Va,Va.current):Pt(Va,n.pool)}function Qd(){var t=Yu();return t===null?null:{parent:rn._currentValue,pool:t}}var sa=0,ue=null,Ue=null,Ze=null,Jo=!1,Nr=!1,ka=!1,$o=0,Xs=0,Or=null,Zv=0;function qe(){throw Error(r(321))}function Zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function ju(t,n,a,s,u,f){return sa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?Xa:oa,ka=!1,f=a(s,u),ka=!1,Nr&&(f=$d(n,a,s,u)),Jd(t),f}function Jd(t){C.H=Si;var n=Ue!==null&&Ue.next!==null;if(sa=0,Ze=Ue=ue=null,Jo=!1,Xs=0,Or=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&ll(t)&&(un=!0))}function $d(t,n,a,s){ue=t;var u=0;do{if(Nr&&(Or=null),Xs=0,Nr=!1,25<=u)throw Error(r(301));if(u+=1,Ze=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=Wa,f=n(a,s)}while(Nr);return f}function jv(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?Ws(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(ue.flags|=1024),n}function Ku(){var t=$o!==0;return $o=0,t}function Qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ju(t){if(Jo){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Jo=!1}sa=0,Ze=Ue=ue=null,Nr=!1,Xs=$o=0,Or=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ue.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function je(){if(Ue===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=Ze===null?ue.memoizedState:Ze.next;if(n!==null)Ze=n,Ue=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ze===null?ue.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}var tl;tl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ws(t){var n=Xs;return Xs+=1,Or===null&&(Or=[]),t=Vd(Or,t,n),n=ue,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Xa:oa),t}function el(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ws(t);if(t.$$typeof===y)return Sn(t)}throw Error(r(438,String(t)))}function $u(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=U;return n.index++,a}function Ui(t,n){return typeof n=="function"?n(t):n}function nl(t){var n=je();return tc(n,Ue,t)}function tc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,N=null,V=n,lt=!1;do{var _t=V.lane&-536870913;if(_t!==V.lane?(Se&_t)===_t:(sa&_t)===_t){var et=V.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),_t===Ur&&(lt=!0);else if((sa&et)===et){V=V.next,et===Ur&&(lt=!0);continue}else _t={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=_t,v=f):N=N.next=_t,ue.lanes|=et,ga|=et;_t=V.action,ka&&a(f,_t),f=V.hasEagerState?V.eagerState:a(f,_t)}else et={lane:_t,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=et,v=f):N=N.next=et,ue.lanes|=_t,ga|=_t;V=V.next}while(V!==null&&V!==n);if(N===null?v=f:N.next=T,!In(f,t.memoizedState)&&(un=!0,lt&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function ec(t){var n=je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);In(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function tp(t,n,a){var s=ue,u=je(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!In((Ue||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,ac(ip.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,Pr(9,np.bind(null,s,u,a,n),{destroy:void 0},null),ze===null)throw Error(r(349));f||(sa&60)!==0||ep(s,n,a)}return a}function ep(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=tl(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function np(t,n,a,s){n.value=a,n.getSnapshot=s,ap(n)&&rp(t)}function ip(t,n,a){return a(function(){ap(n)&&rp(t)})}function ap(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function rp(t){var n=ia(t,2);n!==null&&Cn(n,t,2)}function nc(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),ka){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},n}function sp(t,n,a,s){return t.baseState=a,tc(t,Ue,typeof s=="function"?s:Ui)}function Kv(t,n,a,s,u){if(rl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};C.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function op(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=C.T,v={};C.T=v;try{var T=a(u,s),N=C.S;N!==null&&N(v,T),lp(t,n,T)}catch(V){ic(t,n,V)}finally{C.T=f}}else try{f=a(u,s),lp(t,n,f)}catch(V){ic(t,n,V)}}function lp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){up(t,n,s)},function(s){return ic(t,n,s)}):up(t,n,a)}function up(t,n,a){n.status="fulfilled",n.value=a,cp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,op(t,a)))}function ic(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,cp(n),n=n.next;while(n!==s)}t.action=null}function cp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function fp(t,n){return n}function hp(t,n){if(Ee){var a=ze.formState;if(a!==null){t:{var s=ue;if(Ee){if(mn){e:{for(var u=mn,f=_i;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){mn=ui(u.nextSibling),s=u.data==="F!";break t}}Ha(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fp,lastRenderedState:n},a.queue=s,a=Dp.bind(null,ue,s),s.dispatch=a,s=nc(!1),f=uc.bind(null,ue,!1,s.queue),s=On(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Kv.bind(null,ue,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function dp(t){var n=je();return pp(n,Ue,t)}function pp(t,n,a){n=tc(t,n,fp)[0],t=nl(Ui)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ws(n):n;var s=je(),u=s.queue,f=u.dispatch;return a!==s.memoizedState&&(ue.flags|=2048,Pr(9,Qv.bind(null,u,a),{destroy:void 0},null)),[n,f,t]}function Qv(t,n){t.action=n}function mp(t){var n=je(),a=Ue;if(a!==null)return pp(n,a,t);je(),n=n.memoizedState,a=je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=ue.updateQueue,n===null&&(n=tl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function gp(){return je().memoizedState}function il(t,n,a,s){var u=On();ue.flags|=t,u.memoizedState=Pr(1|n,a,{destroy:void 0},s===void 0?null:s)}function al(t,n,a,s){var u=je();s=s===void 0?null:s;var f=u.memoizedState.inst;Ue!==null&&s!==null&&Zu(s,Ue.memoizedState.deps)?u.memoizedState=Pr(n,a,f,s):(ue.flags|=t,u.memoizedState=Pr(1|n,a,f,s))}function _p(t,n){il(8390656,8,t,n)}function ac(t,n){al(2048,8,t,n)}function vp(t,n){return al(4,2,t,n)}function Sp(t,n){return al(4,4,t,n)}function xp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Mp(t,n,a){a=a!=null?a.concat([t]):null,al(4,4,xp.bind(null,n,t),a)}function rc(){}function yp(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Zu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Ep(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Zu(n,s[1]))return s[0];if(s=t(),ka){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[s,n],s}function sc(t,n,a){return a===void 0||(sa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=bm(),ue.lanes|=t,ga|=t,a)}function Tp(t,n,a,s){return In(a,n)?a:Dr.current!==null?(t=sc(t,a,s),In(t,n)||(un=!0),t):(sa&42)===0?(un=!0,t.memoizedState=a):(t=bm(),ue.lanes|=t,ga|=t,n)}function bp(t,n,a,s,u){var f=q.p;q.p=f!==0&&8>f?f:8;var v=C.T,T={};C.T=T,uc(t,!1,n,a);try{var N=u(),V=C.S;if(V!==null&&V(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var lt=Yv(N,s);qs(t,n,lt,kn(t))}else qs(t,n,s,kn(t))}catch(_t){qs(t,n,{then:function(){},status:"rejected",reason:_t},kn())}finally{q.p=f,C.T=v}}function Jv(){}function oc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Ap(t).queue;bp(t,u,n,dt,a===null?Jv:function(){return Rp(t),a(s)})}function Ap(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rp(t){var n=Ap(t).next.queue;qs(t,n,{},kn())}function lc(){return Sn(ho)}function Cp(){return je().memoizedState}function wp(){return je().memoizedState}function $v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();t=ca(a);var s=fa(n,t,a);s!==null&&(Cn(s,n,a),js(s,n,a)),n={cache:Wu()},t.payload=n;return}n=n.return}}function t0(t,n,a){var s=kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},rl(t)?Up(n,a):(a=Fu(t,n,a,s),a!==null&&(Cn(a,t,s),Lp(a,n,s)))}function Dp(t,n,a){var s=kn();qs(t,n,a,s)}function qs(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(rl(t))Up(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,In(T,v))return Vo(t,n,u,0),ze===null&&Go(),!1}catch{}finally{}if(a=Fu(t,n,u,s),a!==null)return Cn(a,t,s),Lp(a,n,s),!0}return!1}function uc(t,n,a,s){if(s={lane:2,revertLane:Jc(),action:s,hasEagerState:!1,eagerState:null,next:null},rl(t)){if(n)throw Error(r(479))}else n=Fu(t,a,s,2),n!==null&&Cn(n,t,2)}function rl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Up(t,n){Nr=Jo=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Lp(t,n,a){if((a&4194176)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,gi(t,a)}}var Si={readContext:Sn,use:el,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe};Si.useCacheRefresh=qe,Si.useMemoCache=qe,Si.useHostTransitionStatus=qe,Si.useFormState=qe,Si.useActionState=qe,Si.useOptimistic=qe;var Xa={readContext:Sn,use:el,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:_p,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,il(4194308,4,xp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return il(4194308,4,t,n)},useInsertionEffect:function(t,n){il(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(ka){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var u=a(n);if(ka){ae(!0);try{a(n)}finally{ae(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=t0.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=nc(t);var n=t.queue,a=Dp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rc,useDeferredValue:function(t,n){var a=On();return sc(a,t,n)},useTransition:function(){var t=nc(!1);return t=bp.bind(null,ue,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,u=On();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));(Se&60)!==0||ep(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_p(ip.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,np.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=On(),n=ze.identifierPrefix;if(Ee){var a=wi,s=Ci;a=(s&~(1<<32-Yt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=$o++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Zv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return On().memoizedState=$v.bind(null,ue)}};Xa.useMemoCache=$u,Xa.useHostTransitionStatus=lc,Xa.useFormState=hp,Xa.useActionState=hp,Xa.useOptimistic=function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uc.bind(null,ue,!0,a),a.dispatch=n,[t,n]};var oa={readContext:Sn,use:el,useCallback:yp,useContext:Sn,useEffect:ac,useImperativeHandle:Mp,useInsertionEffect:vp,useLayoutEffect:Sp,useMemo:Ep,useReducer:nl,useRef:gp,useState:function(){return nl(Ui)},useDebugValue:rc,useDeferredValue:function(t,n){var a=je();return Tp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=nl(Ui)[0],n=je().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:tp,useId:Cp};oa.useCacheRefresh=wp,oa.useMemoCache=$u,oa.useHostTransitionStatus=lc,oa.useFormState=dp,oa.useActionState=dp,oa.useOptimistic=function(t,n){var a=je();return sp(a,Ue,t,n)};var Wa={readContext:Sn,use:el,useCallback:yp,useContext:Sn,useEffect:ac,useImperativeHandle:Mp,useInsertionEffect:vp,useLayoutEffect:Sp,useMemo:Ep,useReducer:ec,useRef:gp,useState:function(){return ec(Ui)},useDebugValue:rc,useDeferredValue:function(t,n){var a=je();return Ue===null?sc(a,t,n):Tp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=ec(Ui)[0],n=je().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:tp,useId:Cp};Wa.useCacheRefresh=wp,Wa.useMemoCache=$u,Wa.useHostTransitionStatus=lc,Wa.useFormState=mp,Wa.useActionState=mp,Wa.useOptimistic=function(t,n){var a=je();return Ue!==null?sp(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])};function cc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:A({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fc={isMounted:function(t){return(t=t._reactInternals)?Z(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=kn(),u=ca(s);u.payload=n,a!=null&&(u.callback=a),n=fa(t,u,s),n!==null&&(Cn(n,t,s),js(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=kn(),u=ca(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=fa(t,u,s),n!==null&&(Cn(n,t,s),js(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kn(),s=ca(a);s.tag=2,n!=null&&(s.callback=n),n=fa(t,s,a),n!==null&&(Cn(n,t,a),js(n,t,a))}};function Np(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Ns(a,s)||!Ns(u,f):!0}function Op(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&fc.enqueueReplaceState(n,n.state,null)}function qa(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=A({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Pp(t){sl(t)}function zp(t){console.error(t)}function Bp(t){sl(t)}function ol(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Fp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hc(t,n,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){ol(t,n)},a}function Ip(t){return t=ca(t),t.tag=3,t}function Hp(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Fp(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Fp(n,a,s),typeof u!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function e0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 13:return vi===null?Yc():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),jc(t,s,u)),!1;case 22:return a.flags|=65536,s===Vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),jc(t,s,u)),!1}throw Error(r(435,a.tag))}return jc(t,s,u),Yc(),!1}if(Ee)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Gu&&(t=Error(r(422),{cause:s}),Bs(Yn(t,a)))):(s!==Gu&&(n=Error(r(423),{cause:s}),Bs(Yn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Yn(s,a),u=hc(t.stateNode,s,u),Rc(t,u),Xe!==4&&(Xe=2)),!1;var f=Error(r(520),{cause:s});if(f=Yn(f,a),io===null?io=[f]:io.push(f),Xe!==4&&(Xe=2),n===null)return!0;s=Yn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hc(a.stateNode,s,t),Rc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ip(u),Hp(u,t,a,s),Rc(a,u),!1}a=a.return}while(a!==null);return!1}var Gp=Error(r(461)),un=!1;function gn(t,n,a,s){n.child=t===null?qd(n,null,a,s):Ga(n,t.child,a,s)}function Vp(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return Za(n),s=ju(t,n,a,v,f,u),T=Ku(),t!==null&&!un?(Qu(t,n,u),Li(t,n,u)):(Ee&&T&&Iu(n),n.flags|=1,gn(t,n,s,u),n.child)}function kp(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Pc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xp(t,n,f,s,u)):(t=hl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Mc(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ns,a(v,s)&&t.ref===n.ref)return Li(t,n,u)}return n.flags|=1,t=ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Xp(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Ns(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,Mc(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Li(t,n,u)}return dc(t,n,a,s,u)}function Wp(t,n,a){var s=n.pendingProps,u=s.children,f=(n.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(Ys(t,n),s.mode==="hidden"||f){if((n.flags&128)!==0){if(s=v!==null?v.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return qp(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qo(n,v!==null?v.cachePool:null),v!==null?Yd(n,v):ku(),Zd(n);else return n.lanes=n.childLanes=536870912,qp(t,n,v!==null?v.baseLanes|a:a,a)}else v!==null?(Qo(n,v.cachePool),Yd(n,v),ra(),n.memoizedState=null):(t!==null&&Qo(n,null),ku(),ra());return gn(t,n,u,a),n.child}function qp(t,n,a,s){var u=Yu();return u=u===null?null:{parent:rn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Qo(n,null),ku(),Zd(n),t!==null&&Zs(t,n,s,!0),null}function Ys(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function dc(t,n,a,s,u){return Za(n),a=ju(t,n,a,s,void 0,u),s=Ku(),t!==null&&!un?(Qu(t,n,u),Li(t,n,u)):(Ee&&s&&Iu(n),n.flags|=1,gn(t,n,a,u),n.child)}function Yp(t,n,a,s,u,f){return Za(n),n.updateQueue=null,a=$d(n,s,a,u),Jd(t),s=Ku(),t!==null&&!un?(Qu(t,n,f),Li(t,n,f)):(Ee&&s&&Iu(n),n.flags|=1,gn(t,n,a,f),n.child)}function Zp(t,n,a,s,u){if(Za(n),n.stateNode===null){var f=Ar,v=a.contextType;typeof v=="object"&&v!==null&&(f=Sn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=fc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},bc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Sn(v):Ar,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(cc(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&fc.enqueueReplaceState(f,f.state,null),Qs(n,s,f,u),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,N=qa(a,T);f.props=N;var V=f.context,lt=a.contextType;v=Ar,typeof lt=="object"&&lt!==null&&(v=Sn(lt));var _t=a.getDerivedStateFromProps;lt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||V!==v)&&Op(n,f,s,v),ua=!1;var et=n.memoizedState;f.state=et,Qs(n,s,f,u),Ks(),V=n.memoizedState,T||et!==V||ua?(typeof _t=="function"&&(cc(n,a,_t,s),V=n.memoizedState),(N=ua||Np(n,a,N,s,et,V,v))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=V),f.props=s,f.state=V,f.context=v,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Ac(t,n),v=n.memoizedProps,lt=qa(a,v),f.props=lt,_t=n.pendingProps,et=f.context,V=a.contextType,N=Ar,typeof V=="object"&&V!==null&&(N=Sn(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||et!==N)&&Op(n,f,s,N),ua=!1,et=n.memoizedState,f.state=et,Qs(n,s,f,u),Ks();var ot=n.memoizedState;v!==_t||et!==ot||ua||t!==null&&t.dependencies!==null&&ll(t.dependencies)?(typeof T=="function"&&(cc(n,a,T,s),ot=n.memoizedState),(lt=ua||Np(n,a,lt,s,et,ot,N)||t!==null&&t.dependencies!==null&&ll(t.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=N,s=lt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ys(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ga(n,t.child,null,u),n.child=Ga(n,null,a,u)):gn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Li(t,n,u),t}function jp(t,n,a,s){return zs(),n.flags|=256,gn(t,n,a,s),n.child}var pc={dehydrated:null,treeContext:null,retryLane:0};function mc(t){return{baseLanes:t,cachePool:Qd()}}function gc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function Kp(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(u?aa(n):ra(),Ee){var T=mn,N;if(N=T){t:{for(N=T,T=_i;N.nodeType!==8;){if(!T){T=null;break t}if(N=ui(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Fa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912},N=$n(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Rn=n,mn=null,N=!0):N=!1}N||Ha(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Di(n)}return T=s.children,s=s.fallback,u?(ra(),u=n.mode,T=vc({mode:"hidden",children:T},u),s=Ka(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=mc(a),u.childLanes=gc(t,v,a),n.memoizedState=pc,s):(aa(n),_c(n,T))}if(N=t.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(aa(n),n.flags&=-257,n=Sc(t,n,a)):n.memoizedState!==null?(ra(),n.child=t.child,n.flags|=128,n=null):(ra(),u=s.fallback,T=n.mode,s=vc({mode:"visible",children:s.children},T),u=Ka(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Ga(n,t.child,null,a),s=n.child,s.memoizedState=mc(a),s.childLanes=gc(t,v,a),n.memoizedState=pc,n=u);else if(aa(n),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var V=v.dgst;v=V,s=Error(r(419)),s.stack="",s.digest=v,Bs({value:s,source:null,stack:null}),n=Sc(t,n,a)}else if(un||Zs(t,n,a,!1),v=(a&t.childLanes)!==0,un||v){if(v=ze,v!==null){if(s=a&-a,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(v.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane)throw N.retryLane=s,ia(t,s),Cn(v,t,s),Gp}T.data==="$?"||Yc(),n=Sc(t,n,a)}else T.data==="$?"?(n.flags|=128,n.child=t.child,n=g0.bind(null,t),T._reactRetry=n,n=null):(t=N.treeContext,mn=ui(T.nextSibling),Rn=n,Ee=!0,oi=null,_i=!1,t!==null&&(Zn[jn++]=Ci,Zn[jn++]=wi,Zn[jn++]=Fa,Ci=t.id,wi=t.overflow,Fa=n),n=_c(n,s.children),n.flags|=4096);return n}return u?(ra(),u=s.fallback,T=n.mode,N=t.child,V=N.sibling,s=ma(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&31457280,V!==null?u=ma(V,u):(u=Ka(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=t.child.memoizedState,T===null?T=mc(a):(N=T.cachePool,N!==null?(V=rn._currentValue,N=N.parent!==V?{parent:V,pool:V}:N):N=Qd(),T={baseLanes:T.baseLanes|a,cachePool:N}),u.memoizedState=T,u.childLanes=gc(t,v,a),n.memoizedState=pc,s):(aa(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function _c(t,n){return n=vc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vc(t,n){return ym(t,n,0,null)}function Sc(t,n,a){return Ga(n,t.child,null,a),t=_c(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ec(t.return,n,a)}function xc(t,n,a,s,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function Jp(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(gn(t,n,s.children,a),s=an.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qp(t,a,n);else if(t.tag===19)Qp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Pt(an,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ko(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ko(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xc(n,!0,a,null,f);break;case"together":xc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Li(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Mc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ll(t)))}function n0(t,n,a){switch(n.tag){case 3:dn(n,n.stateNode.containerInfo),la(n,rn,t.memoizedState.cache),zs();break;case 27:case 5:ce(n);break;case 4:dn(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Kp(t,n,a):(aa(n),t=Li(t,n,a),t!==null?t.sibling:null);aa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Jp(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pt(an,an.current),s)break;return null;case 22:case 23:return n.lanes=0,Wp(t,n,a);case 24:la(n,rn,t.memoizedState.cache)}return Li(t,n,a)}function $p(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Mc(t,a)&&(n.flags&128)===0)return un=!1,n0(t,n,a);un=(t.flags&131072)!==0}else un=!1,Ee&&(n.flags&1048576)!==0&&Bd(n,Wo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Pc(s)?(t=qa(s,t),n.tag=1,n=Zp(null,n,s,t,a)):(n.tag=0,n=dc(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===R){n.tag=11,n=Vp(null,n,s,t,a);break t}else if(u===g){n.tag=14,n=kp(null,n,s,t,a);break t}}throw n=K(s)||s,Error(r(306,n,""))}}return n;case 0:return dc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=qa(s,n.pendingProps),Zp(t,n,s,u,a);case 3:t:{if(dn(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;u=n.memoizedState,s=u.element,Ac(t,n),Qs(n,f,null,a);var v=n.memoizedState;if(f=v.cache,la(n,rn,f),f!==u.cache&&Tc(n,[rn],a,!0),Ks(),f=v.element,u.isDehydrated)if(u={element:f,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=jp(t,n,f,a);break t}else if(f!==s){s=Yn(Error(r(424)),n),Bs(s),n=jp(t,n,f,a);break t}else for(mn=ui(n.stateNode.containerInfo.firstChild),Rn=n,Ee=!0,oi=null,_i=!0,a=qd(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),f===s){n=Li(t,n,a);break t}gn(t,n,f,a)}n=n.child}return n;case 26:return Ys(t,n),t===null?(a=ng(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,s=Tl(ie.current).createElement(a),s[tn]=n,s[en]=t,_n(s,a,t),Q(s),n.stateNode=s):n.memoizedState=ng(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ce(n),t===null&&Ee&&(s=n.stateNode=$m(n.type,n.pendingProps,ie.current),Rn=n,_i=!0,mn=ui(s.firstChild)),s=n.pendingProps.children,t!==null||Ee?gn(t,n,s,a):n.child=Ga(n,null,s,a),Ys(t,n),n.child;case 5:return t===null&&Ee&&((u=s=mn)&&(s=L0(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,Rn=n,mn=ui(s.firstChild),_i=!1,u=!0):u=!1),u||Ha(n)),ce(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,lf(u,f)?s=null:v!==null&&lf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(t,n,jv,null,null,a),ho._currentValue=u),Ys(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=mn)&&(a=N0(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Rn=n,mn=null,t=!0):t=!1),t||Ha(n)),null;case 13:return Kp(t,n,a);case 4:return dn(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ga(n,null,s,a):gn(t,n,s,a),n.child;case 11:return Vp(t,n,n.type,n.pendingProps,a);case 7:return gn(t,n,n.pendingProps,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,la(n,n.type,s.value),gn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Za(n),u=Sn(u),s=s(u),n.flags|=1,gn(t,n,s,a),n.child;case 14:return kp(t,n,n.type,n.pendingProps,a);case 15:return Xp(t,n,n.type,n.pendingProps,a);case 19:return Jp(t,n,a);case 22:return Wp(t,n,a);case 24:return Za(n),s=Sn(rn),t===null?(u=Yu(),u===null&&(u=ze,f=Wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},bc(n),la(n,rn,u)):((t.lanes&a)!==0&&(Ac(t,n),Qs(n,null,null,a),Ks()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),la(n,rn,s)):(s=f.cache,la(n,rn,s),s!==u.cache&&Tc(n,[rn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var yc=Rt(null),Ya=null,Ni=null;function la(t,n,a){Pt(yc,n._currentValue),n._currentValue=a}function Oi(t){t._currentValue=yc.current,Kt(yc)}function Ec(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Tc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ec(f.return,a,t),s||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ec(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Zs(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;In(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===z.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ho):t=[ho])}u=u.return}t!==null&&Tc(n,t,a,s),n.flags|=262144}function ll(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Za(t){Ya=t,Ni=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return tm(Ya,t)}function ul(t,n){return Ya===null&&Za(t),tm(t,n)}function tm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ni===null){if(t===null)throw Error(r(308));Ni=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ni=Ni.next=n;return a}var ua=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ge&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ko(t),Pd(t,null,a),n}return Vo(t,s,n,a),ko(t)}function js(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,gi(t,a)}}function Rc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cc=!1;function Ks(){if(Cc){var t=Lr;if(t!==null)throw t}}function Qs(t,n,a,s){Cc=!1;var u=t.updateQueue;ua=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var N=T,V=N.next;N.next=null,v===null?f=V:v.next=V,v=N;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==v&&(T===null?lt.firstBaseUpdate=V:T.next=V,lt.lastBaseUpdate=N))}if(f!==null){var _t=u.baseState;v=0,lt=V=N=null,T=f;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(Se&et)===et:(s&et)===et){et!==0&&et===Ur&&(Cc=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,ne=T;et=n;var We=a;switch(ne.tag){case 1:if(Vt=ne.payload,typeof Vt=="function"){_t=Vt.call(We,_t,et);break t}_t=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ne.payload,et=typeof Vt=="function"?Vt.call(We,_t,et):Vt,et==null)break t;_t=A({},_t,et);break t;case 2:ua=!0}}et=T.callback,et!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(V=lt=ot,N=_t):lt=lt.next=ot,v|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);lt===null&&(N=_t),u.baseState=N,u.firstBaseUpdate=V,u.lastBaseUpdate=lt,f===null&&(u.shared.lanes=0),ga|=v,t.lanes=v,t.memoizedState=_t}}function em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function nm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)em(a[t],n)}function Js(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){Oe(n,n.return,T)}}function ha(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var N=a;try{T()}catch(V){Oe(u,N,V)}}}s=s.next}while(s!==f)}}catch(V){Oe(n,n.return,V)}}function im(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{nm(n,a)}catch(s){Oe(t,t.return,s)}}}function am(t,n,a){a.props=qa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Oe(t,n,s)}}function ja(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var u=s;break;default:u=s}typeof a=="function"?t.refCleanup=a(u):a.current=u}}catch(f){Oe(t,n,f)}}function Hn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Oe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(t,n,u)}else a.current=null}function rm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Oe(t,t.return,u)}}function sm(t,n,a){try{var s=t.stateNode;R0(s,t.type,a,n),s[en]=n}catch(u){Oe(t,t.return,u)}}function om(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function wc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||om(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=El));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Dc(t,n,a),t=t.sibling;t!==null;)Dc(t,n,a),t=t.sibling}function cl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(cl(t,n,a),t=t.sibling;t!==null;)cl(t,n,a),t=t.sibling}var Pi=!1,ke=!1,Uc=!1,lm=typeof WeakSet=="function"?WeakSet:Set,cn=null,um=!1;function i0(t,n){if(t=t.containerInfo,sf=Dl,t=Ad(t),Nu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,N=-1,V=0,lt=0,_t=t,et=null;e:for(;;){for(var ot;_t!==a||u!==0&&_t.nodeType!==3||(T=v+u),_t!==f||s!==0&&_t.nodeType!==3||(N=v+s),_t.nodeType===3&&(v+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)et=_t,_t=ot;for(;;){if(_t===t)break e;if(et===a&&++V===u&&(T=v),et===f&&++lt===s&&(N=v),(ot=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=ot}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(of={focusedElem:t,selectionRange:a},Dl=!1,cn=n;cn!==null;)if(n=cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,cn=t;else for(;cn!==null;){switch(n=cn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=qa(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ne){Oe(a,a.return,ne)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,cn=t;break}cn=n.return}return Vt=um,um=!1,Vt}function cm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Bi(t,a),s&4&&Js(5,a);break;case 1:if(Bi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(T){Oe(a,a.return,T)}else{var u=qa(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Oe(a,a.return,T)}}s&64&&im(a),s&512&&ja(a,a.return);break;case 3:if(Bi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{nm(s,t)}catch(T){Oe(a,a.return,T)}}break;case 26:Bi(t,a),s&512&&ja(a,a.return);break;case 27:case 5:Bi(t,a),n===null&&s&4&&rm(a),s&512&&ja(a,a.return);break;case 12:Bi(t,a);break;case 13:Bi(t,a),s&4&&dm(t,a);break;case 22:if(u=a.memoizedState!==null||Pi,!u){n=n!==null&&n.memoizedState!==null||ke;var f=Pi,v=ke;Pi=u,(ke=n)&&!v?da(t,a,(a.subtreeFlags&8772)!==0):Bi(t,a),Pi=f,ke=v}s&512&&(a.memoizedProps.mode==="manual"?ja(a,a.return):Hn(a,a.return));break;default:Bi(t,a)}}function fm(t){var n=t.alternate;n!==null&&(t.alternate=null,fm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&bs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,Gn=!1;function zi(t,n,a){for(a=a.child;a!==null;)hm(t,n,a),a=a.sibling}function hm(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:ke||Hn(a,n),zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Hn(a,n);var s=Ke,u=Gn;for(Ke=a.stateNode,zi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);bs(a),Ke=s,Gn=u;break;case 5:ke||Hn(a,n);case 6:u=Ke;var f=Gn;if(Ke=null,zi(t,n,a),Ke=u,Gn=f,Ke!==null)if(Gn)try{t=Ke,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(v){Oe(a,n,v)}else try{Ke.removeChild(a.stateNode)}catch(v){Oe(a,n,v)}break;case 18:Ke!==null&&(Gn?(n=Ke,a=a.stateNode,n.nodeType===8?cf(n.parentNode,a):n.nodeType===1&&cf(n,a),_o(n)):cf(Ke,a.stateNode));break;case 4:s=Ke,u=Gn,Ke=a.stateNode.containerInfo,Gn=!0,zi(t,n,a),Ke=s,Gn=u;break;case 0:case 11:case 14:case 15:ke||ha(2,a,n),ke||ha(4,a,n),zi(t,n,a);break;case 1:ke||(Hn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&am(a,n,s)),zi(t,n,a);break;case 21:zi(t,n,a);break;case 22:ke||Hn(a,n),ke=(s=ke)||a.memoizedState!==null,zi(t,n,a),ke=s;break;default:zi(t,n,a)}}function dm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_o(t)}catch(a){Oe(n,n.return,a)}}function a0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new lm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new lm),n;default:throw Error(r(435,t.tag))}}function Lc(t,n){var a=a0(t);n.forEach(function(s){var u=_0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Qn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:case 5:Ke=T.stateNode,Gn=!1;break t;case 3:Ke=T.stateNode.containerInfo,Gn=!0;break t;case 4:Ke=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(Ke===null)throw Error(r(160));hm(f,v,u),Ke=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)pm(n,t),n=n.sibling}var li=null;function pm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),s&4&&(ha(3,t,t.return),Js(3,t),ha(5,t,t.return));break;case 1:Qn(n,t),Jn(t),s&512&&(ke||a===null||Hn(a,a.return)),s&64&&Pi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=li;if(Qn(n,t),Jn(t),s&512&&(ke||a===null||Hn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Oa]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),_n(f,s,a),f[tn]=t,Q(f),s=f;break t;case"link":var v=rg("link","href",u).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(s),_n(f,s,a),u.head.appendChild(f);break;case"meta":if(v=rg("meta","content",u).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(s),_n(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[tn]=t,Q(f),s=f}t.stateNode=s}else sg(u,t.type,t.stateNode);else t.stateNode=ag(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?sg(u,t.type,t.stateNode):ag(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&sm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){u=t.stateNode,f=t.memoizedProps;try{for(var N=u.firstChild;N;){var V=N.nextSibling,lt=N.nodeName;N[Oa]||lt==="HEAD"||lt==="BODY"||lt==="SCRIPT"||lt==="STYLE"||lt==="LINK"&&N.rel.toLowerCase()==="stylesheet"||u.removeChild(N),N=V}for(var _t=t.type,et=u.attributes;et.length;)u.removeAttributeNode(et[0]);_n(u,_t,f),u[tn]=t,u[en]=f}catch(Vt){Oe(t,t.return,Vt)}}case 5:if(Qn(n,t),Jn(t),s&512&&(ke||a===null||Hn(a,a.return)),t.flags&32){u=t.stateNode;try{Ln(u,"")}catch(Vt){Oe(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,sm(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Uc=!0);break;case 6:if(Qn(n,t),Jn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Oe(t,t.return,Vt)}}break;case 3:if(Rl=null,u=li,li=bl(n.containerInfo),Qn(n,t),li=u,Jn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch(Vt){Oe(t,t.return,Vt)}Uc&&(Uc=!1,mm(t));break;case 4:s=li,li=bl(t.stateNode.containerInfo),Qn(n,t),Jn(t),li=s;break;case 12:Qn(n,t),Jn(t);break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gc=ct()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Lc(t,s)));break;case 22:if(s&512&&(ke||a===null||Hn(a,a.return)),N=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,lt=Pi,_t=ke,Pi=lt||N,ke=_t||V,Qn(n,t),ke=_t,Pi=lt,Jn(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Pi||ke,a===null||V||n||zr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(u=V.stateNode,N)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=V.stateNode,T=V.memoizedProps.style;var ot=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Vt){Oe(V,V.return,Vt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=N?"":V.memoizedProps}catch(Vt){Oe(V,V.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Lc(t,a))));break;case 19:Qn(n,t),Jn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Lc(t,s)));break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(om(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var u=s.stateNode,f=wc(t);cl(t,f,u);break;case 5:var v=s.stateNode;s.flags&32&&(Ln(v,""),s.flags&=-33);var T=wc(t);cl(t,T,v);break;case 3:case 4:var N=s.stateNode.containerInfo,V=wc(t);Dc(t,V,N);break;default:throw Error(r(161))}}}catch(lt){Oe(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Bi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cm(t,n.alternate,n),n=n.sibling}function zr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ha(4,n,n.return),zr(n);break;case 1:Hn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&am(n,n.return,a),zr(n);break;case 26:case 27:case 5:Hn(n,n.return),zr(n);break;case 22:Hn(n,n.return),n.memoizedState===null&&zr(n);break;default:zr(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),Js(4,f);break;case 1:if(da(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(V){Oe(s,s.return,V)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)em(N[u],T)}catch(V){Oe(s,s.return,V)}}a&&v&64&&im(f),ja(f,f.return);break;case 26:case 27:case 5:da(u,f,a),a&&s===null&&v&4&&rm(f),ja(f,f.return);break;case 12:da(u,f,a);break;case 13:da(u,f,a),a&&v&4&&dm(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),ja(f,f.return);break;default:da(u,f,a)}n=n.sibling}}function Nc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Vs(a))}function Oc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t))}function pa(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gm(t,n,a,s),n=n.sibling}function gm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:pa(t,n,a,s),u&2048&&Js(9,n);break;case 3:pa(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t)));break;case 12:if(u&2048){pa(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Oe(n,n.return,N)}}else pa(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?pa(t,n,a,s):$s(t,n):f._visibility&4?pa(t,n,a,s):(f._visibility|=4,Br(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Nc(n.alternate,n);break;case 24:pa(t,n,a,s),u&2048&&Oc(n.alternate,n);break;default:pa(t,n,a,s)}}function Br(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,v=n,T=a,N=s,V=v.flags;switch(v.tag){case 0:case 11:case 15:Br(f,v,T,N,u),Js(8,v);break;case 23:break;case 22:var lt=v.stateNode;v.memoizedState!==null?lt._visibility&4?Br(f,v,T,N,u):$s(f,v):(lt._visibility|=4,Br(f,v,T,N,u)),u&&V&2048&&Nc(v.alternate,v);break;case 24:Br(f,v,T,N,u),u&&V&2048&&Oc(v.alternate,v);break;default:Br(f,v,T,N,u)}n=n.sibling}}function $s(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:$s(a,s),u&2048&&Nc(s.alternate,s);break;case 24:$s(a,s),u&2048&&Oc(s.alternate,s);break;default:$s(a,s)}n=n.sibling}}var to=8192;function Fr(t){if(t.subtreeFlags&to)for(t=t.child;t!==null;)_m(t),t=t.sibling}function _m(t){switch(t.tag){case 26:Fr(t),t.flags&to&&t.memoizedState!==null&&q0(li,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=li;li=bl(t.stateNode.containerInfo),Fr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=to,to=16777216,Fr(t),to=n):Fr(t));break;default:Fr(t)}}function vm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,xm(s,t)}vm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sm(t),t=t.sibling}function Sm(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&ha(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,fl(t)):eo(t);break;default:eo(t)}}function fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,xm(s,t)}vm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ha(8,n,n.return),fl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,fl(n));break;default:fl(n)}t=t.sibling}}function xm(t,n){for(;cn!==null;){var a=cn;switch(a.tag){case 0:case 11:case 15:ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Vs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,cn=s;else t:for(a=t;cn!==null;){s=cn;var u=s.sibling,f=s.return;if(fm(s),s===a){cn=null;break t}if(u!==null){u.return=f,cn=u;break t}cn=f}}}function r0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,s){return new r0(t,n,a,s)}function Pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Mm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,s,u,f){var v=0;if(s=t,typeof t=="function")Pc(t)&&(v=1);else if(typeof t=="string")v=X0(t,a,xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return Ka(a.children,u,f,n);case m:v=8,u|=24;break;case _:return t=$n(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case w:return t=$n(13,a,n,u),t.elementType=w,t.lanes=f,t;case M:return t=$n(19,a,n,u),t.elementType=M,t.lanes=f,t;case O:return ym(a,u,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S:case y:v=10;break t;case x:v=9;break t;case R:v=11;break t;case g:v=14;break t;case P:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=$n(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Ka(t,n,a,s){return t=$n(7,t,s,n),t.lanes=a,t}function ym(t,n,a,s){t=$n(22,t,s,n),t.elementType=O,t.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=u._current;if(f===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var v=ia(f,2);v!==null&&(u._pendingVisibility|=2,Cn(v,f,2))}},attach:function(){var f=u._current;if(f===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var v=ia(f,2);v!==null&&(u._pendingVisibility&=-3,Cn(v,f,2))}}};return t.stateNode=u,t}function zc(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function Bc(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Fi(t){t.flags|=4}function Em(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!og(n)){if(n=Kn.current,n!==null&&((Se&4194176)===Se?vi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==vi))throw Is=Vu,Hd;t.flags|=8192}}function dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,Hr|=n)}function no(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function He(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&31457280,s|=u.flags&31457280,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function s0(t,n,a){var s=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return He(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oi(rn),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?Fi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,oi!==null&&(Wc(oi),oi=null))),He(n),null;case 26:return a=n.memoizedState,t===null?(Fi(n),a!==null?(He(n),Em(n,a)):(He(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Fi(n),He(n),Em(n,a)):(He(n),n.flags&=-16777217):(t.memoizedProps!==s&&Fi(n),He(n),n.flags&=-16777217),null;case 27:kt(n),a=ie.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return He(n),null}t=xe.current,Ps(n)?Fd(n):(t=$m(u,s,a),n.stateNode=t,Fi(n))}return He(n),null;case 5:if(kt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return He(n),null}if(t=xe.current,Ps(n))Fd(n);else{switch(u=Tl(ie.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[tn]=n,t[en]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(_n(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Fi(n)}}return He(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[tn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ym(t.nodeValue,a)),t||Ha(n)}else t=Tl(t).createTextNode(s),t[tn]=n,n.stateNode=t}return He(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ps(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[tn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),u=!1}else oi!==null&&(Wc(oi),oi=null),u=!0;if(!u)return n.flags&256?(Di(n),n):(Di(n),null)}if(Di(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),dl(n,n.updateQueue),He(n),null;case 4:return re(),t===null&&nf(n.stateNode.containerInfo),He(n),null;case 10:return Oi(n.type),He(n),null;case 19:if(Kt(an),u=n.memoizedState,u===null)return He(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)no(u,!1);else{if(Xe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ko(t),f!==null){for(n.flags|=128,no(u,!1),t=f.updateQueue,n.updateQueue=t,dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Mm(a,t),a=a.sibling;return Pt(an,an.current&1|2),n.child}t=t.sibling}u.tail!==null&&ct()>pl&&(n.flags|=128,s=!0,no(u,!1),n.lanes=4194304)}else{if(!s)if(t=Ko(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,dl(n,t),no(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ee)return He(n),null}else 2*ct()-u.renderingStartTime>pl&&a!==536870912&&(n.flags|=128,s=!0,no(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ct(),n.sibling=null,t=an.current,Pt(an,s?t&1|2:t&1),n):(He(n),null);case 22:case 23:return Di(n),Xu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),a=n.updateQueue,a!==null&&dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Kt(Va),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oi(rn),He(n),null;case 25:return null}throw Error(r(156,n.tag))}function o0(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oi(rn),re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Kt(an),null;case 4:return re(),null;case 10:return Oi(n.type),null;case 22:case 23:return Di(n),Xu(),t!==null&&Kt(Va),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oi(rn),null;case 25:return null;default:return null}}function Tm(t,n){switch(Hu(n),n.tag){case 3:Oi(rn),re();break;case 26:case 27:case 5:kt(n);break;case 4:re();break;case 13:Di(n);break;case 19:Kt(an);break;case 10:Oi(n.type);break;case 22:case 23:Di(n),Xu(),t!==null&&Kt(Va);break;case 24:Oi(rn)}}var l0={getCacheForType:function(t){var n=Sn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},u0=typeof WeakMap=="function"?WeakMap:Map,Ge=0,ze=null,he=null,Se=0,Be=0,Vn=null,Ii=!1,Ir=!1,Fc=!1,Hi=0,Xe=0,ga=0,Qa=0,Ic=0,ti=0,Hr=0,io=null,xi=null,Hc=!1,Gc=0,pl=1/0,ml=null,_a=null,gl=!1,Ja=null,ao=0,Vc=0,kc=null,ro=0,Xc=null;function kn(){if((Ge&2)!==0&&Se!==0)return Se&-Se;if(C.T!==null){var t=Ur;return t!==0?t:Jc()}return Ts()}function bm(){ti===0&&(ti=(Se&536870912)===0||Ee?$e():536870912);var t=Kn.current;return t!==null&&(t.flags|=32),ti}function Cn(t,n,a){(t===ze&&Be===2||t.cancelPendingCommit!==null)&&(Gr(t,0),Gi(t,Se,ti,!1)),Tn(t,a),((Ge&2)===0||t!==ze)&&(t===ze&&((Ge&2)===0&&(Qa|=a),Xe===4&&Gi(t,Se,ti,!1)),Mi(t))}function Am(t,n,a){if((Ge&6)!==0)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||Jt(t,n),u=s?h0(t,n):Zc(t,n,!0),f=s;do{if(u===0){Ir&&!s&&Gi(t,n,0,!1);break}else if(u===6)Gi(t,n,0,!Ii);else{if(a=t.current.alternate,f&&!c0(a)){u=Zc(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;u=io;var N=T.current.memoizedState.isDehydrated;if(N&&(Gr(T,v).flags|=256),v=Zc(T,v,!1),v!==2){if(Fc&&!N){T.errorRecoveryDisabledLanes|=f,Qa|=f,u=4;break t}f=xi,xi=u,f!==null&&Wc(f)}u=v}if(f=!1,u!==2)continue}}if(u===1){Gr(t,0),Gi(t,n,0,!0);break}t:{switch(s=t,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Gi(s,n,ti,!Ii);break t}break;case 2:xi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Gc+300-ct(),10<f)){if(Gi(s,n,ti,!Ii),Dt(s,0)!==0)break t;s.timeoutHandle=Km(Rm.bind(null,s,a,xi,ml,Hc,n,ti,Qa,Hr,Ii,2,-0,0),f);break t}Rm(s,a,xi,ml,Hc,n,ti,Qa,Hr,Ii,0,-0,0)}}break}while(!0);Mi(t)}function Wc(t){xi===null?xi=t:xi.push.apply(xi,t)}function Rm(t,n,a,s,u,f,v,T,N,V,lt,_t,et){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(fo={stylesheets:null,count:0,unsuspend:W0},_m(n),n=Y0(),n!==null)){t.cancelPendingCommit=n(Om.bind(null,t,a,s,u,v,T,N,1,_t,et)),Gi(t,f,v,!V);return}Om(t,a,s,u,v,T,N,lt,_t,et)}function c0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!In(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Gi(t,n,a,s){n&=~Ic,n&=~Qa,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Yt(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&Es(t,a,n)}function _l(){return(Ge&6)===0?(so(0),!1):!0}function qc(){if(he!==null){if(Be===0)var t=he.return;else t=he,Ni=Ya=null,Ju(t),wr=null,Hs=0,t=he;for(;t!==null;)Tm(t.alternate,t),t=t.return;he=null}}function Gr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,w0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qc(),ze=t,he=a=ma(t.current,null),Se=n,Be=0,Vn=null,Ii=!1,Ir=Jt(t,n),Fc=!1,Hr=ti=Ic=Qa=ga=Xe=0,xi=io=null,Hc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Yt(s),f=1<<u;n|=t[u],s&=~f}return Hi=n,Go(),a}function Cm(t,n){ue=null,C.H=Si,n===Fs?(n=kd(),Be=3):n===Hd?(n=kd(),Be=4):Be=n===Gp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,he===null&&(Xe=1,ol(t,Yn(n,t.current)))}function wm(){var t=C.H;return C.H=Si,t===null?Si:t}function Dm(){var t=C.A;return C.A=l0,t}function Yc(){Xe=4,Ii||(Se&4194176)!==Se&&Kn.current!==null||(Ir=!0),(ga&134217727)===0&&(Qa&134217727)===0||ze===null||Gi(ze,Se,ti,!1)}function Zc(t,n,a){var s=Ge;Ge|=2;var u=wm(),f=Dm();(ze!==t||Se!==n)&&(ml=null,Gr(t,n)),n=!1;var v=Xe;t:do try{if(Be!==0&&he!==null){var T=he,N=Vn;switch(Be){case 8:qc(),v=6;break t;case 3:case 2:case 6:Kn.current===null&&(n=!0);var V=Be;if(Be=0,Vn=null,Vr(t,T,N,V),a&&Ir){v=0;break t}break;default:V=Be,Be=0,Vn=null,Vr(t,T,N,V)}}f0(),v=Xe;break}catch(lt){Cm(t,lt)}while(!0);return n&&t.shellSuspendCounter++,Ni=Ya=null,Ge=s,C.H=u,C.A=f,he===null&&(ze=null,Se=0,Go()),v}function f0(){for(;he!==null;)Um(he)}function h0(t,n){var a=Ge;Ge|=2;var s=wm(),u=Dm();ze!==t||Se!==n?(ml=null,pl=ct()+500,Gr(t,n)):Ir=Jt(t,n);t:do try{if(Be!==0&&he!==null){n=he;var f=Vn;e:switch(Be){case 1:Be=0,Vn=null,Vr(t,n,f,1);break;case 2:if(Gd(f)){Be=0,Vn=null,Lm(n);break}n=function(){Be===2&&ze===t&&(Be=7),Mi(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Gd(f)?(Be=0,Vn=null,Lm(n)):(Be=0,Vn=null,Vr(t,n,f,7));break;case 5:var v=null;switch(he.tag){case 26:v=he.memoizedState;case 5:case 27:var T=he;if(!v||og(v)){Be=0,Vn=null;var N=T.sibling;if(N!==null)he=N;else{var V=T.return;V!==null?(he=V,vl(V)):he=null}break e}}Be=0,Vn=null,Vr(t,n,f,5);break;case 6:Be=0,Vn=null,Vr(t,n,f,6);break;case 8:qc(),Xe=6;break t;default:throw Error(r(462))}}d0();break}catch(lt){Cm(t,lt)}while(!0);return Ni=Ya=null,C.H=s,C.A=u,Ge=a,he!==null?0:(ze=null,Se=0,Go(),Xe)}function d0(){for(;he!==null&&!E();)Um(he)}function Um(t){var n=$p(t.alternate,t,Hi);t.memoizedProps=t.pendingProps,n===null?vl(t):he=n}function Lm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Yp(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Yp(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Ju(n);default:Tm(a,n),n=he=Mm(n,Hi),n=$p(a,n,Hi)}t.memoizedProps=t.pendingProps,n===null?vl(t):he=n}function Vr(t,n,a,s){Ni=Ya=null,Ju(n),wr=null,Hs=0;var u=n.return;try{if(e0(t,u,n,a,Se)){Xe=1,ol(t,Yn(a,t.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;Xe=1,ol(t,Yn(a,t.current)),he=null;return}n.flags&32768?(Ee||s===1?t=!0:Ir||(Se&536870912)!==0?t=!1:(Ii=t=!0,(s===2||s===3||s===6)&&(s=Kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Nm(n,t)):vl(n)}function vl(t){var n=t;do{if((n.flags&32768)!==0){Nm(n,Ii);return}t=n.return;var a=s0(n.alternate,n,Hi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Xe===0&&(Xe=5)}function Nm(t,n){do{var a=o0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Xe=6,he=null}function Om(t,n,a,s,u,f,v,T,N,V){var lt=C.T,_t=q.p;try{q.p=2,C.T=null,p0(t,n,a,s,_t,u,f,v,T,N,V)}finally{C.T=lt,q.p=_t}}function p0(t,n,a,s,u,f,v,T){do kr();while(Ja!==null);if((Ge&6)!==0)throw Error(r(327));var N=t.finishedWork;if(s=t.finishedLanes,N===null)return null;if(t.finishedWork=null,t.finishedLanes=0,N===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=N.lanes|N.childLanes;if(V|=Bu,Uo(t,s,V,f,v,T),t===ze&&(he=ze=null,Se=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||gl||(gl=!0,Vc=V,kc=a,v0(wt,function(){return kr(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,f=q.p,q.p=2,v=Ge,Ge|=4,i0(t,N),pm(N,t),Fv(of,t.containerInfo),Dl=!!sf,of=sf=null,t.current=N,cm(t,N.alternate,N),tt(),Ge=v,q.p=f,C.T=a):t.current=N,gl?(gl=!1,Ja=t,ao=s):Pm(t,V),V=t.pendingLanes,V===0&&(_a=null),Ft(N.stateNode),Mi(t),n!==null)for(u=t.onRecoverableError,N=0;N<n.length;N++)V=n[N],u(V.value,{componentStack:V.stack});return(ao&3)!==0&&kr(),V=t.pendingLanes,(s&4194218)!==0&&(V&42)!==0?t===Xc?ro++:(ro=0,Xc=t):ro=0,so(0),null}function Pm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Vs(n)))}function kr(){if(Ja!==null){var t=Ja,n=Vc;Vc=0;var a=_r(ao),s=C.T,u=q.p;try{if(q.p=32>a?32:a,C.T=null,Ja===null)var f=!1;else{a=kc,kc=null;var v=Ja,T=ao;if(Ja=null,ao=0,(Ge&6)!==0)throw Error(r(331));var N=Ge;if(Ge|=4,Sm(v.current),gm(v,v.current,T,a),Ge=N,so(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(jt,v)}catch{}f=!0}return f}finally{q.p=u,C.T=s,Pm(t,n)}}return!1}function zm(t,n,a){n=Yn(a,n),n=hc(t.stateNode,n,2),t=fa(t,n,2),t!==null&&(Tn(t,2),Mi(t))}function Oe(t,n,a){if(t.tag===3)zm(t,t,a);else for(;n!==null;){if(n.tag===3){zm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_a===null||!_a.has(s))){t=Yn(a,t),a=Ip(2),s=fa(n,a,2),s!==null&&(Hp(a,s,n,t),Tn(s,2),Mi(s));break}}n=n.return}}function jc(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new u0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Fc=!0,u.add(a),t=m0.bind(null,t,n,a),n.then(t,t))}function m0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ze===t&&(Se&a)===a&&(Xe===4||Xe===3&&(Se&62914560)===Se&&300>ct()-Gc?(Ge&2)===0&&Gr(t,0):Ic|=a,Hr===Se&&(Hr=0)),Mi(t)}function Bm(t,n){n===0&&(n=Me()),t=ia(t,n),t!==null&&(Tn(t,n),Mi(t))}function g0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Bm(t,a)}function _0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Bm(t,a)}function v0(t,n){return Xt(t,n)}var Sl=null,Xr=null,Kc=!1,xl=!1,Qc=!1,$a=0;function Mi(t){t!==Xr&&t.next===null&&(Xr===null?Sl=Xr=t:Xr=Xr.next=t),xl=!0,Kc||(Kc=!0,x0(S0))}function so(t,n){if(!Qc&&xl){Qc=!0;do for(var a=!1,s=Sl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Yt(42|t)+1)-1,f&=u&~(v&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Hm(s,f))}else f=Se,f=Dt(s,s===ze?f:0),(f&3)===0||Jt(s,f)||(a=!0,Hm(s,f));s=s.next}while(a);Qc=!1}}function S0(){xl=Kc=!1;var t=0;$a!==0&&(C0()&&(t=$a),$a=0);for(var n=ct(),a=null,s=Sl;s!==null;){var u=s.next,f=Fm(s,n);f===0?(s.next=null,a===null?Sl=u:a.next=u,u===null&&(Xr=a)):(a=s,(t!==0||(f&3)!==0)&&(xl=!0)),s=u}so(t)}function Fm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Yt(f),T=1<<v,N=u[v];N===-1?((T&a)===0||(T&s)!==0)&&(u[v]=Ie(T,n)):N<=n&&(t.expiredLanes|=T),f&=~T}if(n=ze,a=Se,a=Dt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Be===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&D(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&D(s),_r(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=de;break;default:a=wt}return s=Im.bind(null,t),a=Xt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&D(s),t.callbackPriority=2,t.callbackNode=null,2}function Im(t,n){var a=t.callbackNode;if(kr()&&t.callbackNode!==a)return null;var s=Se;return s=Dt(t,t===ze?s:0),s===0?null:(Am(t,s,n),Fm(t,ct()),t.callbackNode!=null&&t.callbackNode===a?Im.bind(null,t):null)}function Hm(t,n){if(kr())return null;Am(t,n,!0)}function x0(t){D0(function(){(Ge&6)!==0?Xt(ft,t):t()})}function Jc(){return $a===0&&($a=$e()),$a}function Gm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Oo(""+t)}function Vm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function M0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Gm((u[en]||null).action),v=s.submitter;v&&(n=(n=v[en]||null)?Gm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Fo("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if($a!==0){var N=v?Vm(u,v):new FormData(u);oc(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=v?Vm(u,v):new FormData(u),oc(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var $c=0;$c<Od.length;$c++){var tf=Od[$c],y0=tf.toLowerCase(),E0=tf[0].toUpperCase()+tf.slice(1);si(y0,"on"+E0)}si(wd,"onAnimationEnd"),si(Dd,"onAnimationIteration"),si(Ud,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(Hv,"onTransitionRun"),si(Gv,"onTransitionStart"),si(Vv,"onTransitionCancel"),si(Ld,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function km(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],N=T.instance,V=T.currentTarget;if(T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=V;try{f(u)}catch(lt){sl(lt)}u.currentTarget=null,f=N}else for(v=0;v<s.length;v++){if(T=s[v],N=T.instance,V=T.currentTarget,T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=V;try{f(u)}catch(lt){sl(lt)}u.currentTarget=null,f=N}}}}function _e(t,n){var a=n[vr];a===void 0&&(a=n[vr]=new Set);var s=t+"__bubble";a.has(s)||(Xm(n,t,2,!1),a.add(s))}function ef(t,n,a){var s=0;n&&(s|=4),Xm(a,t,s,n)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function nf(t){if(!t[Ml]){t[Ml]=!0,Y.forEach(function(a){a!=="selectionchange"&&(T0.has(a)||ef(a,!1,t),ef(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ml]||(n[Ml]=!0,ef("selectionchange",!1,n))}}function Xm(t,n,a,s){switch(dg(n)){case 2:var u=K0;break;case 8:u=Q0;break;default:u=gf}a=u.bind(null,n,a,t),u=void 0,!Tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function af(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u||T.nodeType===8&&T.parentNode===u)break;if(v===4)for(v=s.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===u||N.nodeType===8&&N.parentNode===u))return;v=v.return}for(;T!==null;){if(v=Ri(T),v===null)return;if(N=v.tag,N===5||N===6||N===26||N===27){s=f=v;continue t}T=T.parentNode}}s=s.return}rd(function(){var V=f,lt=yu(a),_t=[];t:{var et=Nd.get(t);if(et!==void 0){var ot=Fo,Vt=t;switch(t){case"keypress":if(zo(a)===0)break t;case"keydown":case"keyup":ot=_v;break;case"focusin":Vt="focus",ot=Cu;break;case"focusout":Vt="blur",ot=Cu;break;case"beforeblur":case"afterblur":ot=Cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=xv;break;case wd:case Dd:case Ud:ot=lv;break;case Ld:ot=yv;break;case"scroll":case"scrollend":ot=iv;break;case"wheel":ot=Tv;break;case"copy":case"cut":case"paste":ot=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=cd;break;case"toggle":case"beforetoggle":ot=Av}var ne=(n&4)!==0,We=!ne&&(t==="scroll"||t==="scrollend"),j=ne?et!==null?et+"Capture":null:et;ne=[];for(var I=V,J;I!==null;){var pt=I;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=As(I,j),pt!=null&&ne.push(lo(I,pt,J))),We)break;I=I.return}0<ne.length&&(et=new ot(et,Vt,null,a,lt),_t.push({event:et,listeners:ne}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",et&&a!==Mu&&(Vt=a.relatedTarget||a.fromElement)&&(Ri(Vt)||Vt[Ai]))break t;if((ot||et)&&(et=lt.window===lt?lt:(et=lt.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=V,Vt=Vt?Ri(Vt):null,Vt!==null&&(We=Z(Vt),ne=Vt.tag,Vt!==We||ne!==5&&ne!==27&&ne!==6)&&(Vt=null)):(ot=null,Vt=V),ot!==Vt)){if(ne=ld,pt="onMouseLeave",j="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(ne=cd,pt="onPointerLeave",j="onPointerEnter",I="pointer"),We=ot==null?et:X(ot),J=Vt==null?et:X(Vt),et=new ne(pt,I+"leave",ot,a,lt),et.target=We,et.relatedTarget=J,pt=null,Ri(lt)===V&&(ne=new ne(j,I+"enter",Vt,a,lt),ne.target=J,ne.relatedTarget=We,pt=ne),We=pt,ot&&Vt)e:{for(ne=ot,j=Vt,I=0,J=ne;J;J=Wr(J))I++;for(J=0,pt=j;pt;pt=Wr(pt))J++;for(;0<I-J;)ne=Wr(ne),I--;for(;0<J-I;)j=Wr(j),J--;for(;I--;){if(ne===j||j!==null&&ne===j.alternate)break e;ne=Wr(ne),j=Wr(j)}ne=null}else ne=null;ot!==null&&Wm(_t,et,ot,ne,!1),Vt!==null&&We!==null&&Wm(_t,We,Vt,ne,!0)}}t:{if(et=V?X(V):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var It=vd;else if(gd(et))if(Sd)It=zv;else{It=Ov;var fe=Nv}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?V&&xu(V.elementType)&&(It=vd):It=Pv;if(It&&(It=It(t,V))){_d(_t,It,a,lt);break t}fe&&fe(t,et,V),t==="focusout"&&V&&et.type==="number"&&V.memoizedProps.value!=null&&vn(et,"number",et.value)}switch(fe=V?X(V):window,t){case"focusin":(gd(fe)||fe.contentEditable==="true")&&(Er=fe,Ou=V,Os=null);break;case"focusout":Os=Ou=Er=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Rd(_t,a,lt);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Rd(_t,a,lt)}var Wt;if(Du)t:{switch(t){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else yr?pd(t,a)&&(Qt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(fd&&a.locale!=="ko"&&(yr||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&yr&&(Wt=sd()):(na=lt,bu="value"in na?na.value:na.textContent,yr=!0)),fe=yl(V,Qt),0<fe.length&&(Qt=new ud(Qt,t,null,a,lt),_t.push({event:Qt,listeners:fe}),Wt?Qt.data=Wt:(Wt=md(a),Wt!==null&&(Qt.data=Wt)))),(Wt=Cv?wv(t,a):Dv(t,a))&&(Qt=yl(V,"onBeforeInput"),0<Qt.length&&(fe=new ud("onBeforeInput","beforeinput",null,a,lt),_t.push({event:fe,listeners:Qt}),fe.data=Wt)),M0(_t,t,V,a,lt)}km(_t,n)})}function lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function yl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=As(t,a),u!=null&&s.unshift(lo(t,u,f)),u=As(t,n),u!=null&&s.push(lo(t,u,f))),t=t.return}return s}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wm(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,N=T.alternate,V=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||V===null||(N=V,u?(V=As(a,f),V!=null&&v.unshift(lo(a,V,N))):u||(V=As(a,f),V!=null&&v.push(lo(a,V,N)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var b0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(b0,`
`).replace(A0,"")}function Ym(t,n){return n=qm(n),qm(t)===n}function El(){}function Le(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":Fe(t,"class",s);break;case"tabIndex":Fe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(t,a,s);break;case"style":id(t,s,f);break;case"data":if(n!=="object"){Fe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Oo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",u.name,u,null),Le(t,n,"formEncType",u.formEncType,u,null),Le(t,n,"formMethod",u.formMethod,u,null),Le(t,n,"formTarget",u.formTarget,u,null)):(Le(t,n,"encType",u.encType,u,null),Le(t,n,"method",u.method,u,null),Le(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Oo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=El);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Oo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),me(t,"popover",s);break;case"xlinkActuate":ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ye(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ye(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ye(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ye(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":me(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ev.get(a)||a,me(t,a,s))}}function rf(t,n,a,s,u,f){switch(a){case"style":id(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=El);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[en]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):me(t,a,s)}}}function _n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,v,a,null)}}u&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=v=u=null,N=null,V=null;for(s in a)if(a.hasOwnProperty(s)){var lt=a[s];if(lt!=null)switch(s){case"name":u=lt;break;case"type":v=lt;break;case"checked":N=lt;break;case"defaultChecked":V=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Le(t,n,s,lt,a,null)}}An(t,f,T,N,V,v,u,!1),ge(t);return;case"select":_e("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Le(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?Ve(t,!!s,n,!1):a!=null&&Ve(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Le(t,n,v,T,a,null)}Sr(t,s,u,f),ge(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,N,s,a,null)}return;case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<oo.length;s++)_e(oo[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,V,s,a,null)}return;default:if(xu(n)){for(lt in a)a.hasOwnProperty(lt)&&(s=a[lt],s!==void 0&&rf(t,n,lt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Le(t,n,T,s,a,null))}function R0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,N=null,V=null,lt=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":N=_t;default:s.hasOwnProperty(ot)||Le(t,n,ot,null,s,_t)}}for(var et in s){var ot=s[et];if(_t=a[et],s.hasOwnProperty(et)&&(ot!=null||_t!=null))switch(et){case"type":f=ot;break;case"name":u=ot;break;case"checked":V=ot;break;case"defaultChecked":lt=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==_t&&Le(t,n,et,ot,s,_t)}}De(t,v,T,N,V,lt,f,u);return;case"select":ot=v=T=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ot=N;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==N&&Le(t,n,u,f,s,N)}n=T,a=v,s=ot,et!=null?Ve(t,!!a,et,!1):!!s!=!!a&&(n!=null?Ve(t,!!a,n,!0):Ve(t,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Le(t,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":et=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Le(t,n,v,u,s,f)}pn(t,et,ot);return;case"option":for(var Vt in a)if(et=a[Vt],a.hasOwnProperty(Vt)&&et!=null&&!s.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Le(t,n,Vt,null,s,et)}for(N in s)if(et=s[N],ot=a[N],s.hasOwnProperty(N)&&et!==ot&&(et!=null||ot!=null))switch(N){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Le(t,n,N,et,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!s.hasOwnProperty(ne)&&Le(t,n,ne,null,s,et);for(V in s)if(et=s[V],ot=a[V],s.hasOwnProperty(V)&&et!==ot&&(et!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Le(t,n,V,et,s,ot)}return;default:if(xu(n)){for(var We in a)et=a[We],a.hasOwnProperty(We)&&et!==void 0&&!s.hasOwnProperty(We)&&rf(t,n,We,void 0,s,et);for(lt in s)et=s[lt],ot=a[lt],!s.hasOwnProperty(lt)||et===ot||et===void 0&&ot===void 0||rf(t,n,lt,et,s,ot);return}}for(var j in a)et=a[j],a.hasOwnProperty(j)&&et!=null&&!s.hasOwnProperty(j)&&Le(t,n,j,null,s,et);for(_t in s)et=s[_t],ot=a[_t],!s.hasOwnProperty(_t)||et===ot||et==null&&ot==null||Le(t,n,_t,et,s,ot)}var sf=null,of=null;function Tl(t){return t.nodeType===9?t:t.ownerDocument}function Zm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uf=null;function C0(){var t=window.event;return t&&t.type==="popstate"?t===uf?!1:(uf=t,!0):(uf=null,!1)}var Km=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(t){return Qm.resolve(null).then(t).catch(U0)}:Km;function U0(t){setTimeout(function(){throw t})}function cf(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(s===0){t.removeChild(u),_o(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=u}while(a);_o(n)}function ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ff(a),bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function L0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Oa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function N0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Jm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function $m(t,n,a){switch(n=Tl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ei=new Map,tg=new Set;function bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Vi=q.d;q.d={f:O0,r:P0,D:z0,C:B0,L:F0,m:I0,X:G0,S:H0,M:V0};function O0(){var t=Vi.f(),n=_l();return t||n}function P0(t){var n=b(t);n!==null&&n.tag===5&&n.type==="form"?Rp(n):Vi.r(t)}var qr=typeof document>"u"?null:document;function eg(t,n,a){var s=qr;if(s&&typeof n=="string"&&n){var u=ln(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),tg.has(u)||(tg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),_n(n,"link",t),Q(n),s.head.appendChild(n)))}}function z0(t){Vi.D(t),eg("dns-prefetch",t,null)}function B0(t,n){Vi.C(t,n),eg("preconnect",t,n)}function F0(t,n,a){Vi.L(t,n,a);var s=qr;if(s&&t&&n){var u='link[rel="preload"][as="'+ln(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ln(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ln(a.imageSizes)+'"]')):u+='[href="'+ln(t)+'"]';var f=u;switch(n){case"style":f=Yr(t);break;case"script":f=Zr(t)}ei.has(f)||(t=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),_n(n,"link",t),Q(n),s.head.appendChild(n)))}}function I0(t,n){Vi.m(t,n);var a=qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ln(s)+'"][href="'+ln(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(t)}if(!ei.has(f)&&(t=A({rel:"modulepreload",href:t},n),ei.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),_n(s,"link",t),Q(s),a.head.appendChild(s)}}}function H0(t,n,a){Vi.S(t,n,a);var s=qr;if(s&&t){var u=$(s).hoistableStyles,f=Yr(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(uo(f)))T.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(f))&&hf(t,a);var N=v=s.createElement("link");Q(N),_n(N,"link",t),N._p=new Promise(function(V,lt){N.onload=V,N.onerror=lt}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Al(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function G0(t,n){Vi.X(t,n);var a=qr;if(a&&t){var s=$(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(co(u)),f||(t=A({src:t,async:!0},n),(n=ei.get(u))&&df(t,n),f=a.createElement("script"),Q(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function V0(t,n){Vi.M(t,n);var a=qr;if(a&&t){var s=$(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(co(u)),f||(t=A({src:t,async:!0,type:"module"},n),(n=ei.get(u))&&df(t,n),f=a.createElement("script"),Q(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function ng(t,n,a,s){var u=(u=ie.current)?bl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yr(a.href),a=$(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Yr(a.href);var f=$(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(uo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),f||k0(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=$(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+ln(t)+'"'}function uo(t){return'link[rel="stylesheet"]['+t+"]"}function ig(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function k0(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",a),Q(n),t.head.appendChild(n))}function Zr(t){return'[src="'+ln(t)+'"]'}function co(t){return"script[async]"+t}function ag(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ln(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var u=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Q(s),_n(s,"style",u),Al(s,a.precedence,t),n.instance=s;case"stylesheet":u=Yr(a.href);var f=t.querySelector(uo(u));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=ig(a),(u=ei.get(u))&&hf(s,u),f=(t.ownerDocument||t).createElement("link"),Q(f);var v=f;return v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),_n(f,"link",s),n.state.loading|=4,Al(f,a.precedence,t),n.instance=f;case"script":return f=Zr(a.src),(u=t.querySelector(co(f)))?(n.instance=u,Q(u),u):(s=a,(u=ei.get(f))&&(s=A({},a),df(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Q(u),_n(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Al(s,a.precedence,t));return n.instance}function Al(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Rl=null;function rg(t,n,a){if(Rl===null){var s=new Map,u=Rl=new Map;u.set(a,s)}else u=Rl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Oa]||f[tn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function sg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function X0(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function og(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var fo=null;function W0(){}function q0(t,n,a){if(fo===null)throw Error(r(475));var s=fo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Yr(a.href),f=t.querySelector(uo(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Cl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=t.ownerDocument||t,a=ig(a),(u=ei.get(u))&&hf(a,u),f=f.createElement("link"),Q(f);var v=f;v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),_n(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Cl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Y0(){if(fo===null)throw Error(r(475));var t=fo;return t.stylesheets&&t.count===0&&pf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&pf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Cl(){if(this.count--,this.count===0){if(this.stylesheets)pf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wl=null;function pf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wl=new Map,n.forEach(Z0,t),wl=null,Cl.call(t))}function Z0(t,n){if(!(n.state.loading&4)){var a=wl.get(t);if(a)var s=a.get(null);else{a=new Map,wl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=Cl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ho={$$typeof:y,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function j0(t,n,a,s,u,f,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=En(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.hiddenUpdates=En(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function lg(t,n,a,s,u,f,v,T,N,V,lt,_t){return t=new j0(t,n,a,v,T,N,V,_t),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=Wu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},bc(f),t}function ug(t){return t?(t=Ar,t):Ar}function cg(t,n,a,s,u,f){u=ug(u),s.context===null?s.context=u:s.pendingContext=u,s=ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=fa(t,s,n),a!==null&&(Cn(a,t,n),js(a,t,n))}function fg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function mf(t,n){fg(t,n),(t=t.alternate)&&fg(t,n)}function hg(t){if(t.tag===13){var n=ia(t,67108864);n!==null&&Cn(n,t,67108864),mf(t,67108864)}}var Dl=!0;function K0(t,n,a,s){var u=C.T;C.T=null;var f=q.p;try{q.p=2,gf(t,n,a,s)}finally{q.p=f,C.T=u}}function Q0(t,n,a,s){var u=C.T;C.T=null;var f=q.p;try{q.p=8,gf(t,n,a,s)}finally{q.p=f,C.T=u}}function gf(t,n,a,s){if(Dl){var u=_f(s);if(u===null)af(t,n,s,Ul,a),pg(t,s);else if($0(u,t,n,a,s))s.stopPropagation();else if(pg(t,s),n&4&&-1<J0.indexOf(t)){for(;u!==null;){var f=b(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ct(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var N=1<<31-Yt(v);T.entanglements[1]|=N,v&=~N}Mi(f),(Ge&6)===0&&(pl=ct()+500,so(0))}}break;case 13:T=ia(f,2),T!==null&&Cn(T,f,2),_l(),mf(f,2)}if(f=_f(s),f===null&&af(t,n,s,Ul,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else af(t,n,s,null,a)}}function _f(t){return t=yu(t),vf(t)}var Ul=null;function vf(t){if(Ul=null,t=Ri(t),t!==null){var n=Z(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=xt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ul=t,null}function dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case ft:return 2;case Ht:return 8;case wt:case zt:return 32;case de:return 268435456;default:return 32}default:return 32}}var Sf=!1,va=null,Sa=null,xa=null,po=new Map,mo=new Map,Ma=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(t,n){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function go(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=b(n),n!==null&&hg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $0(t,n,a,s,u){switch(n){case"focusin":return va=go(va,t,n,a,s,u),!0;case"dragenter":return Sa=go(Sa,t,n,a,s,u),!0;case"mouseover":return xa=go(xa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return po.set(f,go(po.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,mo.set(f,go(mo.get(f)||null,t,n,a,s,u)),!0}return!1}function mg(t){var n=Ri(t.target);if(n!==null){var a=Z(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){t.blockedOn=n,Lo(t.priority,function(){if(a.tag===13){var s=kn(),u=ia(a,s);u!==null&&Cn(u,a,s),mf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_f(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Mu=s,a.target.dispatchEvent(s),Mu=null}else return n=b(a),n!==null&&hg(n),t.blockedOn=a,!1;n.shift()}return!0}function gg(t,n,a){Ll(t)&&a.delete(n)}function tS(){Sf=!1,va!==null&&Ll(va)&&(va=null),Sa!==null&&Ll(Sa)&&(Sa=null),xa!==null&&Ll(xa)&&(xa=null),po.forEach(gg),mo.forEach(gg)}function Nl(t,n){t.blockedOn===n&&(t.blockedOn=null,Sf||(Sf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tS)))}var Ol=null;function _g(t){Ol!==t&&(Ol=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ol===t&&(Ol=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(vf(s||a)===null)continue;break}var f=b(a);f!==null&&(t.splice(n,3),n-=3,oc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function _o(t){function n(N){return Nl(N,t)}va!==null&&Nl(va,t),Sa!==null&&Nl(Sa,t),xa!==null&&Nl(xa,t),po.forEach(n),mo.forEach(n);for(var a=0;a<Ma.length;a++){var s=Ma[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)mg(a),a.blockedOn===null&&Ma.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[en]||null;if(typeof f=="function")v||_g(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[en]||null)T=v.formAction;else if(vf(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),_g(a)}}}function xf(t){this._internalRoot=t}Pl.prototype.render=xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=kn();cg(a,s,t,n,null,null)},Pl.prototype.unmount=xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&kr(),cg(t.current,2,null,t,null,null),_l(),n[Ai]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ts();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ma.length&&n!==0&&n<Ma[a].priority;a++);Ma.splice(a,0,t),a===0&&mg(t)}};var vg=e.version;if(vg!=="19.0.0")throw Error(r(527,vg,"19.0.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=nt(n),t=t!==null?Et(t):null,t=t===null?null:t.stateNode,t};var eS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Ri,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{jt=zl.inject(eS),Gt=zl}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Pp,f=zp,v=Bp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=lg(t,1,!1,null,null,a,s,u,f,v,T,null),t[Ai]=n.current,nf(t.nodeType===8?t.parentNode:t),new xf(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Pp,v=zp,T=Bp,N=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=lg(t,1,!0,n,a??null,s,u,f,v,T,N,V),n.context=ug(null),a=n.current,s=kn(),u=ca(s),u.callback=null,fa(a,u,s),n.current.lanes=s,Tn(n,s),Mi(n),t[Ai]=n.current,nf(t),new Pl(n)},So.version="19.0.0",So}var Cg;function hS(){if(Cg)return Ef.exports;Cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ef.exports=fS(),Ef.exports}var dS=hS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="174",pS=0,wg=1,mS=2,T_=1,gS=2,Zi=3,La=0,zn=1,ji=2,Da=0,cs=1,Dg=2,Ug=3,Lg=4,_S=5,ur=100,vS=101,SS=102,xS=103,MS=104,yS=200,ES=201,TS=202,bS=203,ih=204,ah=205,AS=206,RS=207,CS=208,wS=209,DS=210,US=211,LS=212,NS=213,OS=214,rh=0,sh=1,oh=2,ds=3,lh=4,uh=5,ch=6,fh=7,b_=0,PS=1,zS=2,Ua=0,BS=1,FS=2,IS=3,HS=4,GS=5,VS=6,kS=7,A_=300,ps=301,ms=302,hh=303,dh=304,pu=306,ph=1e3,fr=1001,mh=1002,mi=1003,XS=1004,Bl=1005,Ei=1006,Rf=1007,hr=1008,ta=1009,R_=1010,C_=1011,Ao=1012,qh=1013,pr=1014,Qi=1015,Ro=1016,Yh=1017,Zh=1018,gs=1020,w_=35902,D_=1021,U_=1022,pi=1023,L_=1024,N_=1025,fs=1026,_s=1027,O_=1028,jh=1029,P_=1030,Kh=1031,Qh=1033,ru=33776,su=33777,ou=33778,lu=33779,gh=35840,_h=35841,vh=35842,Sh=35843,xh=36196,Mh=37492,yh=37496,Eh=37808,Th=37809,bh=37810,Ah=37811,Rh=37812,Ch=37813,wh=37814,Dh=37815,Uh=37816,Lh=37817,Nh=37818,Oh=37819,Ph=37820,zh=37821,uu=36492,Bh=36494,Fh=36495,z_=36283,Ih=36284,Hh=36285,Gh=36286,WS=3200,qS=3201,YS=0,ZS=1,wa="",ii="srgb",vs="srgb-linear",fu="linear",Ne="srgb",jr=7680,Ng=519,jS=512,KS=513,QS=514,B_=515,JS=516,$S=517,tx=518,ex=519,Og=35044,Pg="300 es",Ji=2e3,hu=2001;class xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cf=Math.PI/180,Vh=180/Math.PI;function Co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mn[o&255]+Mn[o>>8&255]+Mn[o>>16&255]+Mn[o>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[i&63|128]+Mn[i>>8&255]+"-"+Mn[i>>16&255]+Mn[i>>24&255]+Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function nx(o,e){return(o%e+e)%e}function wf(o,e,i){return(1-i)*o+i*e}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,i=0){Pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,r,l,c,h,d,p,m){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=r,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],_=r[4],S=r[7],x=r[2],y=r[5],R=r[8],w=l[0],M=l[3],g=l[6],P=l[1],O=l[4],U=l[7],G=l[2],H=l[5],B=l[8];return c[0]=h*w+d*P+p*G,c[3]=h*M+d*O+p*H,c[6]=h*g+d*U+p*B,c[1]=m*w+_*P+S*G,c[4]=m*M+_*O+S*H,c[7]=m*g+_*U+S*B,c[2]=x*w+y*P+R*G,c[5]=x*M+y*O+R*H,c[8]=x*g+y*U+R*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return i*h*_-i*d*m-r*c*_+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=_*h-d*m,x=d*p-_*c,y=m*c-h*p,R=i*S+r*x+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=S*w,e[1]=(l*m-_*r)*w,e[2]=(d*r-l*h)*w,e[3]=x*w,e[4]=(_*i-l*p)*w,e[5]=(l*c-d*i)*w,e[6]=y*w,e[7]=(r*p-m*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Df.makeScale(e,i)),this}rotate(e){return this.premultiply(Df.makeRotation(-e)),this}translate(e,i){return this.premultiply(Df.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Df=new oe;function F_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function du(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ix(){const o=du("canvas");return o.style.display="block",o}const zg={};function sr(o){o in zg||(zg[o]=!0,console.warn(o))}function ax(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function rx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bg=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fg=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ox(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ne&&(l.r=$i(l.r),l.g=$i(l.g),l.b=$i(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ne&&(l.r=hs(l.r),l.g=hs(l.g),l.b=hs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===wa?fu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:e,whitePoint:r,transfer:fu,toXYZ:Bg,fromXYZ:Fg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:Ne,toXYZ:Bg,fromXYZ:Fg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const be=ox();function $i(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function hs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class lx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kr===void 0&&(Kr=du("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kr}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=du("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=$i(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($i(i[r]/255)*255):i[r]=$i(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Uf(l[h].image)):c.push(Uf(l[h]))}else c=Uf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Uf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cx=0;class Bn extends xs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=fr,l=fr,c=Ei,h=hr,d=pi,p=ta,m=Bn.DEFAULT_ANISOTROPY,_=wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Co(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=A_;Bn.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,i=0,r=0,l=1){Ye.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],_=p[4],S=p[8],x=p[1],y=p[5],R=p[9],w=p[2],M=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(S-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(S+w)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,U=(y+1)/2,G=(g+1)/2,H=(_+x)/4,B=(S+w)/4,K=(R+M)/4;return O>U&&O>G?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=H/r,c=B/r):U>G?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=H/l,c=K/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=B/c,l=K/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-R)*(M-R)+(S-w)*(S-w)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(S-w)/P,this.z=(x-_)/P,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fx extends xs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ye(0,0,e,i),this.scissorTest=!1,this.viewport=new Ye(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Bn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Jh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends fx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class I_ extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],_=r[l+2],S=r[l+3];const x=c[h+0],y=c[h+1],R=c[h+2],w=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=S;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=R,e[i+3]=w;return}if(S!==w||p!==x||m!==y||_!==R){let M=1-d;const g=p*x+m*y+_*R+S*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const G=Math.sqrt(O),H=Math.atan2(G,g*P);M=Math.sin(M*H)/G,d=Math.sin(d*H)/G}const U=d*P;if(p=p*M+x*U,m=m*M+y*U,_=_*M+R*U,S=S*M+w*U,M===1-d){const G=1/Math.sqrt(p*p+m*m+_*_+S*S);p*=G,m*=G,_*=G,S*=G}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],S=c[h],x=c[h+1],y=c[h+2],R=c[h+3];return e[i]=d*R+_*S+p*y-m*x,e[i+1]=p*R+_*x+m*S-d*y,e[i+2]=m*R+_*y+d*x-p*S,e[i+3]=_*R-d*S-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),S=d(c/2),x=p(r/2),y=p(l/2),R=p(c/2);switch(h){case"XYZ":this._x=x*_*S+m*y*R,this._y=m*y*S-x*_*R,this._z=m*_*R+x*y*S,this._w=m*_*S-x*y*R;break;case"YXZ":this._x=x*_*S+m*y*R,this._y=m*y*S-x*_*R,this._z=m*_*R-x*y*S,this._w=m*_*S+x*y*R;break;case"ZXY":this._x=x*_*S-m*y*R,this._y=m*y*S+x*_*R,this._z=m*_*R+x*y*S,this._w=m*_*S-x*y*R;break;case"ZYX":this._x=x*_*S-m*y*R,this._y=m*y*S+x*_*R,this._z=m*_*R-x*y*S,this._w=m*_*S+x*y*R;break;case"YZX":this._x=x*_*S+m*y*R,this._y=m*y*S+x*_*R,this._z=m*_*R-x*y*S,this._w=m*_*S-x*y*R;break;case"XZY":this._x=x*_*S-m*y*R,this._y=m*y*S-x*_*R,this._z=m*_*R+x*y*S,this._w=m*_*S+x*y*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],S=i[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(_-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-r*m,this._z=c*_+h*m+r*p-l*d,this._w=h*_-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),S=Math.sin((1-i)*_)/m,x=Math.sin(i*_)/m;return this._w=h*S+this._w*x,this._x=r*S+this._x*x,this._y=l*S+this._y*x,this._z=c*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ig.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ig.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),_=2*(d*i-c*l),S=2*(c*r-h*i);return this.x=i+p*m+h*S-d*_,this.y=r+p*_+d*m-c*S,this.z=l+p*S+c*_-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lf=new rt,Ig=new wo;class Do{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ci):ci.fromBufferAttribute(c,h),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Il.subVectors(this.max,Mo),Qr.subVectors(e.a,Mo),Jr.subVectors(e.b,Mo),$r.subVectors(e.c,Mo),Ea.subVectors(Jr,Qr),Ta.subVectors($r,Jr),tr.subVectors(Qr,$r);let i=[0,-Ea.z,Ea.y,0,-Ta.z,Ta.y,0,-tr.z,tr.y,Ea.z,0,-Ea.x,Ta.z,0,-Ta.x,tr.z,0,-tr.x,-Ea.y,Ea.x,0,-Ta.y,Ta.x,0,-tr.y,tr.x,0];return!Nf(i,Qr,Jr,$r,Il)||(i=[1,0,0,0,1,0,0,0,1],!Nf(i,Qr,Jr,$r,Il))?!1:(Hl.crossVectors(Ea,Ta),i=[Hl.x,Hl.y,Hl.z],Nf(i,Qr,Jr,$r,Il))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],ci=new rt,Fl=new Do,Qr=new rt,Jr=new rt,$r=new rt,Ea=new rt,Ta=new rt,tr=new rt,Mo=new rt,Il=new rt,Hl=new rt,er=new rt;function Nf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){er.fromArray(o,c);const d=l.x*Math.abs(er.x)+l.y*Math.abs(er.y)+l.z*Math.abs(er.z),p=e.dot(er),m=i.dot(er),_=r.dot(er);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const dx=new Do,yo=new rt,Of=new rt;class $h{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Of)),this.expandByPoint(yo.copy(e.center).sub(Of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new rt,Pf=new rt,Gl=new rt,ba=new rt,zf=new rt,Vl=new rt,Bf=new rt;class px{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,i),Xi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Pf.copy(e).add(i).multiplyScalar(.5),Gl.copy(i).sub(e).normalize(),ba.copy(this.origin).sub(Pf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Gl),d=ba.dot(this.direction),p=-ba.dot(Gl),m=ba.lengthSq(),_=Math.abs(1-h*h);let S,x,y,R;if(_>0)if(S=h*p-d,x=h*d-p,R=c*_,S>=0)if(x>=-R)if(x<=R){const w=1/_;S*=w,x*=w,y=S*(S+h*x+2*d)+x*(h*S+x+2*p)+m}else x=c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*p)+m;else x=-c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*p)+m;else x<=-R?(S=Math.max(0,-(-h*c+d)),x=S>0?-c:Math.min(Math.max(-c,-p),c),y=-S*S+x*(x+2*p)+m):x<=R?(S=0,x=Math.min(Math.max(-c,-p),c),y=x*(x+2*p)+m):(S=Math.max(0,-(h*c+d)),x=S>0?c:Math.min(Math.max(-c,-p),c),y=-S*S+x*(x+2*p)+m);else x=h>0?-c:c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Pf).addScaledVector(Gl,x),y}intersectSphere(e,i){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),l=Xi.dot(Xi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),_>=0?(c=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,i,r,l,c){zf.subVectors(i,e),Vl.subVectors(r,e),Bf.crossVectors(zf,Vl);let h=this.direction.dot(Bf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ba.subVectors(this.origin,e);const p=d*this.direction.dot(Vl.crossVectors(ba,Vl));if(p<0)return null;const m=d*this.direction.dot(zf.cross(ba));if(m<0||p+m>h)return null;const _=-d*ba.dot(Bf);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,r,l,c,h,d,p,m,_,S,x,y,R,w,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,_,S,x,y,R,w,M)}set(e,i,r,l,c,h,d,p,m,_,S,x,y,R,w,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=S,g[14]=x,g[3]=y,g[7]=R,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ts.setFromMatrixColumn(e,0).length(),c=1/ts.setFromMatrixColumn(e,1).length(),h=1/ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=h*_,y=h*S,R=d*_,w=d*S;i[0]=p*_,i[4]=-p*S,i[8]=m,i[1]=y+R*m,i[5]=x-w*m,i[9]=-d*p,i[2]=w-x*m,i[6]=R+y*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*_,y=p*S,R=m*_,w=m*S;i[0]=x+w*d,i[4]=R*d-y,i[8]=h*m,i[1]=h*S,i[5]=h*_,i[9]=-d,i[2]=y*d-R,i[6]=w+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*_,y=p*S,R=m*_,w=m*S;i[0]=x-w*d,i[4]=-h*S,i[8]=R+y*d,i[1]=y+R*d,i[5]=h*_,i[9]=w-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*_,y=h*S,R=d*_,w=d*S;i[0]=p*_,i[4]=R*m-y,i[8]=x*m+w,i[1]=p*S,i[5]=w*m+x,i[9]=y*m-R,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,y=h*m,R=d*p,w=d*m;i[0]=p*_,i[4]=w-x*S,i[8]=R*S+y,i[1]=S,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*S+R,i[10]=x-w*S}else if(e.order==="XZY"){const x=h*p,y=h*m,R=d*p,w=d*m;i[0]=p*_,i[4]=-S,i[8]=m*_,i[1]=x*S+w,i[5]=h*_,i[9]=y*S-R,i[2]=R*S-y,i[6]=d*_,i[10]=w*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,i,r){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Aa.crossVectors(r,Xn),Aa.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Aa.crossVectors(r,Xn)),Aa.normalize(),kl.crossVectors(Xn,Aa),l[0]=Aa.x,l[4]=kl.x,l[8]=Xn.x,l[1]=Aa.y,l[5]=kl.y,l[9]=Xn.y,l[2]=Aa.z,l[6]=kl.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],_=r[1],S=r[5],x=r[9],y=r[13],R=r[2],w=r[6],M=r[10],g=r[14],P=r[3],O=r[7],U=r[11],G=r[15],H=l[0],B=l[4],K=l[8],C=l[12],A=l[1],F=l[5],ut=l[9],it=l[13],mt=l[2],ht=l[6],W=l[10],at=l[14],Z=l[3],xt=l[7],L=l[11],nt=l[15];return c[0]=h*H+d*A+p*mt+m*Z,c[4]=h*B+d*F+p*ht+m*xt,c[8]=h*K+d*ut+p*W+m*L,c[12]=h*C+d*it+p*at+m*nt,c[1]=_*H+S*A+x*mt+y*Z,c[5]=_*B+S*F+x*ht+y*xt,c[9]=_*K+S*ut+x*W+y*L,c[13]=_*C+S*it+x*at+y*nt,c[2]=R*H+w*A+M*mt+g*Z,c[6]=R*B+w*F+M*ht+g*xt,c[10]=R*K+w*ut+M*W+g*L,c[14]=R*C+w*it+M*at+g*nt,c[3]=P*H+O*A+U*mt+G*Z,c[7]=P*B+O*F+U*ht+G*xt,c[11]=P*K+O*ut+U*W+G*L,c[15]=P*C+O*it+U*at+G*nt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],_=e[2],S=e[6],x=e[10],y=e[14],R=e[3],w=e[7],M=e[11],g=e[15];return R*(+c*p*S-l*m*S-c*d*x+r*m*x+l*d*y-r*p*y)+w*(+i*p*y-i*m*x+c*h*x-l*h*y+l*m*_-c*p*_)+M*(+i*m*S-i*d*y-c*h*S+r*h*y+c*d*_-r*m*_)+g*(-l*d*_-i*p*S+i*d*x+l*h*S-r*h*x+r*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=e[9],x=e[10],y=e[11],R=e[12],w=e[13],M=e[14],g=e[15],P=S*M*m-w*x*m+w*p*y-d*M*y-S*p*g+d*x*g,O=R*x*m-_*M*m-R*p*y+h*M*y+_*p*g-h*x*g,U=_*w*m-R*S*m+R*d*y-h*w*y-_*d*g+h*S*g,G=R*S*p-_*w*p-R*d*x+h*w*x+_*d*M-h*S*M,H=i*P+r*O+l*U+c*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=P*B,e[1]=(w*x*c-S*M*c-w*l*y+r*M*y+S*l*g-r*x*g)*B,e[2]=(d*M*c-w*p*c+w*l*m-r*M*m-d*l*g+r*p*g)*B,e[3]=(S*p*c-d*x*c-S*l*m+r*x*m+d*l*y-r*p*y)*B,e[4]=O*B,e[5]=(_*M*c-R*x*c+R*l*y-i*M*y-_*l*g+i*x*g)*B,e[6]=(R*p*c-h*M*c-R*l*m+i*M*m+h*l*g-i*p*g)*B,e[7]=(h*x*c-_*p*c+_*l*m-i*x*m-h*l*y+i*p*y)*B,e[8]=U*B,e[9]=(R*S*c-_*w*c-R*r*y+i*w*y+_*r*g-i*S*g)*B,e[10]=(h*w*c-R*d*c+R*r*m-i*w*m-h*r*g+i*d*g)*B,e[11]=(_*d*c-h*S*c-_*r*m+i*S*m+h*r*y-i*d*y)*B,e[12]=G*B,e[13]=(_*w*l-R*S*l+R*r*x-i*w*x-_*r*M+i*S*M)*B,e[14]=(R*d*l-h*w*l-R*r*p+i*w*p+h*r*M-i*d*M)*B,e[15]=(h*S*l-_*d*l+_*r*p-i*S*p-h*r*x+i*d*x)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,_=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,S=d+d,x=c*m,y=c*_,R=c*S,w=h*_,M=h*S,g=d*S,P=p*m,O=p*_,U=p*S,G=r.x,H=r.y,B=r.z;return l[0]=(1-(w+g))*G,l[1]=(y+U)*G,l[2]=(R-O)*G,l[3]=0,l[4]=(y-U)*H,l[5]=(1-(x+g))*H,l[6]=(M+P)*H,l[7]=0,l[8]=(R+O)*B,l[9]=(M-P)*B,l[10]=(1-(x+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ts.set(l[0],l[1],l[2]).length();const h=ts.set(l[4],l[5],l[6]).length(),d=ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const m=1/c,_=1/h,S=1/d;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=_,fi.elements[5]*=_,fi.elements[6]*=_,fi.elements[8]*=S,fi.elements[9]*=S,fi.elements[10]*=S,i.setFromRotationMatrix(fi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ji){const p=this.elements,m=2*c/(i-e),_=2*c/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let y,R;if(d===Ji)y=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===hu)y=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ji){const p=this.elements,m=1/(i-e),_=1/(r-l),S=1/(h-c),x=(i+e)*m,y=(r+l)*_;let R,w;if(d===Ji)R=(h+c)*S,w=-2*S;else if(d===hu)R=c*S,w=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ts=new rt,fi=new Je,mx=new rt(0,0,0),gx=new rt(1,1,1),Aa=new rt,kl=new rt,Xn=new rt,Hg=new Je,Gg=new wo;class ea{constructor(e=0,i=0,r=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],S=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ve(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const Vg=new rt,es=new wo,Wi=new Je,Xl=new rt,Eo=new rt,vx=new rt,Sx=new wo,kg=new rt(1,0,0),Xg=new rt(0,1,0),Wg=new rt(0,0,1),qg={type:"added"},xx={type:"removed"},ns={type:"childadded",child:null},Ff={type:"childremoved",child:null};class Dn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new rt,i=new ea,r=new wo,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new oe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis(Wg,e)}translateOnAxis(e,i){return Vg.copy(e).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis(Wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Xl.copy(e):Xl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Eo,Xl,this.up):Wi.lookAt(Xl,Eo,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),es.setFromRotationMatrix(Wi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qg),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xx),Ff.child=e,this.dispatchEvent(Ff),Ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qg),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const S=p[m];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),_=h(e.images),S=h(e.shapes),x=h(e.skeletons),y=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new rt(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new rt,qi=new rt,If=new rt,Yi=new rt,is=new rt,as=new rt,Yg=new rt,Hf=new rt,Gf=new rt,Vf=new rt,kf=new Ye,Xf=new Ye,Wf=new Ye;class di{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){hi.subVectors(l,i),qi.subVectors(r,i),If.subVectors(e,i);const h=hi.dot(hi),d=hi.dot(qi),p=hi.dot(If),m=qi.dot(qi),_=qi.dot(If),S=h*m-d*d;if(S===0)return c.set(0,0,0),null;const x=1/S,y=(m*p-d*_)*x,R=(h*_-d*p)*x;return c.set(1-y-R,R,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,Yi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Yi.x),p.addScaledVector(h,Yi.y),p.addScaledVector(d,Yi.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return kf.setScalar(0),Xf.setScalar(0),Wf.setScalar(0),kf.fromBufferAttribute(e,i),Xf.fromBufferAttribute(e,r),Wf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(kf,c.x),h.addScaledVector(Xf,c.y),h.addScaledVector(Wf,c.z),h}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),qi.subVectors(e,i),hi.cross(qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;is.subVectors(l,r),as.subVectors(c,r),Hf.subVectors(e,r);const p=is.dot(Hf),m=as.dot(Hf);if(p<=0&&m<=0)return i.copy(r);Gf.subVectors(e,l);const _=is.dot(Gf),S=as.dot(Gf);if(_>=0&&S<=_)return i.copy(l);const x=p*S-_*m;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(is,h);Vf.subVectors(e,c);const y=is.dot(Vf),R=as.dot(Vf);if(R>=0&&y<=R)return i.copy(c);const w=y*m-p*R;if(w<=0&&m>=0&&R<=0)return d=m/(m-R),i.copy(r).addScaledVector(as,d);const M=_*R-y*S;if(M<=0&&S-_>=0&&y-R>=0)return Yg.subVectors(c,l),d=(S-_)/(S-_+(y-R)),i.copy(l).addScaledVector(Yg,d);const g=1/(M+w+x);return h=w*g,d=x*g,i.copy(r).addScaledVector(is,h).addScaledVector(as,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ra={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function qf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ae{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=nx(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=qf(h,c,e+1/3),this.g=qf(h,c,e),this.b=qf(h,c,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=ii){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const r=G_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return be.fromWorkingColorSpace(yn.copy(this),e),Math.round(ve(yn.r*255,0,255))*65536+Math.round(ve(yn.g*255,0,255))*256+Math.round(ve(yn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(yn.copy(this),i);const r=yn.r,l=yn.g,c=yn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const S=h-d;switch(m=_<=.5?S/(h+d):S/(2-h-d),h){case r:p=(l-c)/S+(l<c?6:0);break;case l:p=(c-r)/S+2;break;case c:p=(r-l)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(yn.copy(this),i),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ii){be.fromWorkingColorSpace(yn.copy(this),e);const i=yn.r,r=yn.g,l=yn.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ra),this.setHSL(Ra.h+e,Ra.s+i,Ra.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ra),e.getHSL(Wl);const r=wf(Ra.h,Wl.h,i),l=wf(Ra.s,Wl.s,i),c=wf(Ra.l,Wl.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Ae;Ae.NAMES=G_;let Mx=0;class mu extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=cs,this.side=La,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=ah,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(r.blending=this.blending),this.side!==La&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ih&&(r.blendSrc=this.blendSrc),this.blendDst!==ah&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ng&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class td extends mu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=b_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new rt,ql=new Pe;let yx=0;class bi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Og,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ql.fromBufferAttribute(this,i),ql.applyMatrix3(e),this.setXY(i,ql.x,ql.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Qe.fromBufferAttribute(this,i),Qe.applyMatrix3(e),this.setXYZ(i,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Qe.fromBufferAttribute(this,i),Qe.applyMatrix4(e),this.setXYZ(i,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Qe.fromBufferAttribute(this,i),Qe.applyNormalMatrix(e),this.setXYZ(i,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Qe.fromBufferAttribute(this,i),Qe.transformDirection(e),this.setXYZ(i,Qe.x,Qe.y,Qe.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),c=Pn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Og&&(e.usage=this.usage),e}}class V_ extends bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class k_ extends bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class dr extends bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Ex=0;const ni=new Je,Yf=new Dn,rs=new rt,Wn=new Do,To=new Do,hn=new rt;class gr extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?k_:V_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,i,r){return ni.makeTranslation(e,i,r),this.applyMatrix4(ni),this}scale(e,i,r){return ni.makeScale(e,i,r),this.applyMatrix4(ni),this}lookAt(e){return Yf.lookAt(e),Yf.updateMatrix(),this.applyMatrix4(Yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new dr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Wn.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $h);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];To.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Wn.min,To.min),Wn.expandByPoint(hn),hn.addVectors(Wn.max,To.max),Wn.expandByPoint(hn)):(Wn.expandByPoint(To.min),Wn.expandByPoint(To.max))}Wn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)hn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(hn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)hn.fromBufferAttribute(d,m),p&&(rs.fromBufferAttribute(e,m),hn.add(rs)),l=Math.max(l,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new rt,p[K]=new rt;const m=new rt,_=new rt,S=new rt,x=new Pe,y=new Pe,R=new Pe,w=new rt,M=new rt;function g(K,C,A){m.fromBufferAttribute(r,K),_.fromBufferAttribute(r,C),S.fromBufferAttribute(r,A),x.fromBufferAttribute(c,K),y.fromBufferAttribute(c,C),R.fromBufferAttribute(c,A),_.sub(m),S.sub(m),y.sub(x),R.sub(x);const F=1/(y.x*R.y-R.x*y.y);isFinite(F)&&(w.copy(_).multiplyScalar(R.y).addScaledVector(S,-y.y).multiplyScalar(F),M.copy(S).multiplyScalar(y.x).addScaledVector(_,-R.x).multiplyScalar(F),d[K].add(w),d[C].add(w),d[A].add(w),p[K].add(M),p[C].add(M),p[A].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ut=A.count;for(let it=F,mt=F+ut;it<mt;it+=3)g(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const O=new rt,U=new rt,G=new rt,H=new rt;function B(K){G.fromBufferAttribute(l,K),H.copy(G);const C=d[K];O.copy(C),O.sub(G.multiplyScalar(G.dot(C))).normalize(),U.crossVectors(H,C);const F=U.dot(p[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,F)}for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ut=A.count;for(let it=F,mt=F+ut;it<mt;it+=3)B(e.getX(it+0)),B(e.getX(it+1)),B(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,p=new rt,m=new rt,_=new rt,S=new rt;if(e)for(let x=0,y=e.count;x<y;x+=3){const R=e.getX(x+0),w=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),S.subVectors(l,c),_.cross(S),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),d.add(_),p.add(_),m.add(_),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),S.subVectors(l,c),_.cross(S),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,S=d.normalized,x=new m.constructor(p.length*_);let y=0,R=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*_;for(let g=0;g<_;g++)x[R++]=m[y++]}return new bi(x,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new gr,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,S=m.length;_<S;_++){const x=m[_],y=e(x,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let S=0,x=m.length;S<x;S++){const y=m[S];_.push(y.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],S=c[m];for(let x=0,y=S.length;x<y;x++)_.push(S[x].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,_=h.length;m<_;m++){const S=h[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zg=new Je,nr=new px,Yl=new $h,jg=new rt,Zl=new rt,jl=new rt,Kl=new rt,Zf=new rt,Ql=new rt,Kg=new rt,Jl=new rt;class Ti extends Dn{constructor(e=new gr,i=new td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Ql.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],S=c[p];_!==0&&(Zf.fromBufferAttribute(S,e),h?Ql.addScaledVector(Zf,_):Ql.addScaledVector(Zf.sub(i),_))}i.add(Ql)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yl.copy(r.boundingSphere),Yl.applyMatrix4(c),nr.copy(e.ray).recast(e.near),!(Yl.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Yl,jg)===null||nr.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(Zg.copy(c).invert(),nr.copy(e.ray).applyMatrix4(Zg),!(r.boundingBox!==null&&nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const M=x[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,G=O;U<G;U+=3){const H=d.getX(U),B=d.getX(U+1),K=d.getX(U+2);l=$l(this,g,e,r,m,_,S,H,B,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=d.getX(M),O=d.getX(M+1),U=d.getX(M+2);l=$l(this,h,e,r,m,_,S,P,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const M=x[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,G=O;U<G;U+=3){const H=U,B=U+1,K=U+2;l=$l(this,g,e,r,m,_,S,H,B,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=M,O=M+1,U=M+2;l=$l(this,h,e,r,m,_,S,P,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Tx(o,e,i,r,l,c,h,d){let p;if(e.side===zn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===La,d),p===null)return null;Jl.copy(d),Jl.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Jl);return m<i.near||m>i.far?null:{distance:m,point:Jl.clone(),object:o}}function $l(o,e,i,r,l,c,h,d,p,m){o.getVertexPosition(d,Zl),o.getVertexPosition(p,jl),o.getVertexPosition(m,Kl);const _=Tx(o,e,i,r,Zl,jl,Kl,Kg);if(_){const S=new rt;di.getBarycoord(Kg,Zl,jl,Kl,S),l&&(_.uv=di.getInterpolatedAttribute(l,d,p,m,S,new Pe)),c&&(_.uv1=di.getInterpolatedAttribute(c,d,p,m,S,new Pe)),h&&(_.normal=di.getInterpolatedAttribute(h,d,p,m,S,new rt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new rt,materialIndex:0};di.getNormal(Zl,jl,Kl,x.normal),_.face=x,_.barycoord=S}return _}class Ms extends gr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],S=[];let x=0,y=0;R("z","y","x",-1,-1,r,i,e,h,c,0),R("z","y","x",1,-1,r,i,-e,h,c,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new dr(m,3)),this.setAttribute("normal",new dr(_,3)),this.setAttribute("uv",new dr(S,2));function R(w,M,g,P,O,U,G,H,B,K,C){const A=U/B,F=G/K,ut=U/2,it=G/2,mt=H/2,ht=B+1,W=K+1;let at=0,Z=0;const xt=new rt;for(let L=0;L<W;L++){const nt=L*F-it;for(let Et=0;Et<ht;Et++){const At=Et*A-ut;xt[w]=At*P,xt[M]=nt*O,xt[g]=mt,m.push(xt.x,xt.y,xt.z),xt[w]=0,xt[M]=0,xt[g]=H>0?1:-1,_.push(xt.x,xt.y,xt.z),S.push(Et/B),S.push(1-L/K),at+=1}}for(let L=0;L<K;L++)for(let nt=0;nt<B;nt++){const Et=x+nt+ht*L,At=x+nt+ht*(L+1),q=x+(nt+1)+ht*(L+1),dt=x+(nt+1)+ht*L;p.push(Et,At,dt),p.push(At,q,dt),Z+=6}d.addGroup(y,Z,C),y+=Z,x+=at}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function wn(o){const e={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)e[l]=r[l]}return e}function bx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function X_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const Ax={clone:Ss,merge:wn};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Na extends mu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class W_ extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ji}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ca=new rt,Qg=new Pe,Jg=new Pe;class ai extends W_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(Cf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ca.x,Ca.y).multiplyScalar(-e/Ca.z),Ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ca.x,Ca.y).multiplyScalar(-e/Ca.z)}getViewSize(e,i){return this.getViewBounds(e,Qg,Jg),i.subVectors(Jg,Qg)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ss=-90,os=1;class wx extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(ss,os,e,i);l.layers=this.layers,this.add(l);const c=new ai(ss,os,e,i);c.layers=this.layers,this.add(c);const h=new ai(ss,os,e,i);h.layers=this.layers,this.add(h);const d=new ai(ss,os,e,i);d.layers=this.layers,this.add(d);const p=new ai(ss,os,e,i);p.layers=this.layers,this.add(p);const m=new ai(ss,os,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(S,x,y),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class q_ extends Bn{constructor(e,i,r,l,c,h,d,p,m,_){e=e!==void 0?e:[],i=i!==void 0?i:ps,super(e,i,r,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dx extends mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new q_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ei}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ms(5,5,5),c=new Na({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Da});c.uniforms.tEquirect.value=i;const h=new Ti(l,c),d=i.minFilter;return i.minFilter===hr&&(i.minFilter=Ei),new wx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class tu extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),g=this._getHandJoint(m,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=_.position.distanceTo(S.position),y=.02,R=.005;m.inputState.pinching&&x>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new tu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Lx extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Kf=new rt,Nx=new rt,Ox=new oe;class or{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Kf.subVectors(r,i).cross(Nx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Kf),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ox.getNormalMatrix(e),l=this.coplanarPoint(Kf).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new $h,eu=new rt;class Y_{constructor(e=new or,i=new or,r=new or,l=new or,c=new or,h=new or){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],S=l[6],x=l[7],y=l[8],R=l[9],w=l[10],M=l[11],g=l[12],P=l[13],O=l[14],U=l[15];if(r[0].setComponents(p-c,x-m,M-y,U-g).normalize(),r[1].setComponents(p+c,x+m,M+y,U+g).normalize(),r[2].setComponents(p+h,x+_,M+R,U+P).normalize(),r[3].setComponents(p-h,x-_,M-R,U-P).normalize(),r[4].setComponents(p-d,x-S,M-w,U-O).normalize(),i===Ji)r[5].setComponents(p+d,x+S,M+w,U+O).normalize();else if(i===hu)r[5].setComponents(d,S,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(eu.x=l.normal.x>0?e.max.x:e.min.x,eu.y=l.normal.y>0?e.max.y:e.min.y,eu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z_ extends Bn{constructor(e,i,r,l,c,h,d,p,m,_=fs){if(_!==fs&&_!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===fs&&(r=pr),r===void 0&&_===_s&&(r=gs),super(null,l,c,h,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:mi,this.minFilter=p!==void 0?p:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gu extends gr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,S=e/d,x=i/p,y=[],R=[],w=[],M=[];for(let g=0;g<_;g++){const P=g*x-h;for(let O=0;O<m;O++){const U=O*S-c;R.push(U,-P,0),w.push(0,0,1),M.push(O/d),M.push(1-g/p)}}for(let g=0;g<p;g++)for(let P=0;P<d;P++){const O=P+m*g,U=P+m*(g+1),G=P+1+m*(g+1),H=P+1+m*g;y.push(O,U,H),y.push(U,G,H)}this.setIndex(y),this.setAttribute("position",new dr(R,3)),this.setAttribute("normal",new dr(w,3)),this.setAttribute("uv",new dr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Px extends mu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zx extends mu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bx extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Fx extends Bx{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}class Ix extends W_{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Hx extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function $g(o,e,i,r){const l=Gx(r);switch(i){case D_:return o*e;case L_:return o*e;case N_:return o*e*2;case O_:return o*e/l.components*l.byteLength;case jh:return o*e/l.components*l.byteLength;case P_:return o*e*2/l.components*l.byteLength;case Kh:return o*e*2/l.components*l.byteLength;case U_:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case Qh:return o*e*4/l.components*l.byteLength;case ru:case su:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ou:case lu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _h:case Sh:return Math.max(o,16)*Math.max(e,8)/4;case gh:case vh:return Math.max(o,8)*Math.max(e,8)/2;case xh:case Mh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case uu:case Bh:case Fh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case z_:case Ih:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Hh:case Gh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Gx(o){switch(o){case ta:case R_:return{byteLength:1,components:1};case Ao:case C_:case Ro:return{byteLength:2,components:1};case Yh:case Zh:return{byteLength:2,components:4};case pr:case qh:case Qi:return{byteLength:4,components:1};case w_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j_(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Vx(o){const e=new WeakMap;function i(d,p){const m=d.array,_=d.usage,S=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const _=p.array,S=p.updateRanges;if(o.bindBuffer(m,d),S.length===0)o.bufferSubData(m,0,_);else{S.sort((y,R)=>y.start-R.start);let x=0;for(let y=1;y<S.length;y++){const R=S[x],w=S[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++x,S[x]=w)}S.length=x+1;for(let y=0,R=S.length;y<R;y++){const w=S[y];o.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Py=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:kx,alphahash_pars_fragment:Xx,alphamap_fragment:Wx,alphamap_pars_fragment:qx,alphatest_fragment:Yx,alphatest_pars_fragment:Zx,aomap_fragment:jx,aomap_pars_fragment:Kx,batching_pars_vertex:Qx,batching_vertex:Jx,begin_vertex:$x,beginnormal_vertex:tM,bsdfs:eM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:uM,color_pars_vertex:cM,color_vertex:fM,common:hM,cube_uv_reflection_fragment:dM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:_M,emissivemap_pars_fragment:vM,colorspace_fragment:SM,colorspace_pars_fragment:xM,envmap_fragment:MM,envmap_common_pars_fragment:yM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:PM,envmap_vertex:bM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:wM,gradientmap_pars_fragment:DM,lightmap_pars_fragment:UM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:NM,lights_pars_begin:OM,lights_toon_fragment:zM,lights_toon_pars_fragment:BM,lights_phong_fragment:FM,lights_phong_pars_fragment:IM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:VM,lights_fragment_maps:kM,lights_fragment_end:XM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:ZM,map_fragment:jM,map_pars_fragment:KM,map_particle_fragment:QM,map_particle_pars_fragment:JM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:ty,morphinstance_vertex:ey,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:ay,morphtarget_vertex:ry,normal_fragment_begin:sy,normal_fragment_maps:oy,normal_pars_fragment:ly,normal_pars_vertex:uy,normal_vertex:cy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:_y,premultiplied_alpha_fragment:vy,project_vertex:Sy,dithering_fragment:xy,dithering_pars_fragment:My,roughnessmap_fragment:yy,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:Ty,shadowmap_pars_vertex:by,shadowmap_vertex:Ay,shadowmask_pars_fragment:Ry,skinbase_vertex:Cy,skinning_pars_vertex:wy,skinning_vertex:Dy,skinnormal_vertex:Uy,specularmap_fragment:Ly,specularmap_pars_fragment:Ny,tonemapping_fragment:Oy,tonemapping_pars_fragment:Py,transmission_fragment:zy,transmission_pars_fragment:By,uv_pars_fragment:Fy,uv_pars_vertex:Iy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Vy,background_frag:ky,backgroundCube_vert:Xy,backgroundCube_frag:Wy,cube_vert:qy,cube_frag:Yy,depth_vert:Zy,depth_frag:jy,distanceRGBA_vert:Ky,distanceRGBA_frag:Qy,equirect_vert:Jy,equirect_frag:$y,linedashed_vert:tE,linedashed_frag:eE,meshbasic_vert:nE,meshbasic_frag:iE,meshlambert_vert:aE,meshlambert_frag:rE,meshmatcap_vert:sE,meshmatcap_frag:oE,meshnormal_vert:lE,meshnormal_frag:uE,meshphong_vert:cE,meshphong_frag:fE,meshphysical_vert:hE,meshphysical_frag:dE,meshtoon_vert:pE,meshtoon_frag:mE,points_vert:gE,points_frag:_E,shadow_vert:vE,shadow_frag:SE,sprite_vert:xE,sprite_frag:ME},Ut={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},yi={basic:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ae(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:wn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:wn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ae(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:wn([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:wn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:wn([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:wn([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:wn([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:wn([Ut.lights,Ut.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};yi.physical={uniforms:wn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const nu={r:0,b:0,g:0},ar=new ea,yE=new Je;function EE(o,e,i,r,l,c,h){const d=new Ae(0);let p=c===!0?0:1,m,_,S=null,x=0,y=null;function R(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function w(O){let U=!1;const G=R(O);G===null?g(d,p):G&&G.isColor&&(g(G,1),U=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,U){const G=R(U);G&&(G.isCubeTexture||G.mapping===pu)?(_===void 0&&(_=new Ti(new Ms(1,1,1),new Na({name:"BackgroundCubeMaterial",uniforms:Ss(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ar.copy(U.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(yE.makeRotationFromEuler(ar)),_.material.toneMapped=be.getTransfer(G.colorSpace)!==Ne,(S!==G||x!==G.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,S=G,x=G.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Ti(new gu(2,2),new Na({name:"BackgroundMaterial",uniforms:Ss(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:La,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=be.getTransfer(G.colorSpace)!==Ne,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(S!==G||x!==G.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,S=G,x=G.version,y=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function g(O,U){O.getRGB(nu,X_(o)),r.buffers.color.setClear(nu.r,nu.g,nu.b,U,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),p=U,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,g(d,p)},render:w,addToRenderList:M,dispose:P}}function TE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(A,F,ut,it,mt){let ht=!1;const W=S(it,ut,F);c!==W&&(c=W,m(c.object)),ht=y(A,it,ut,mt),ht&&R(A,it,ut,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,U(A,F,ut,it),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function S(A,F,ut){const it=ut.wireframe===!0;let mt=r[A.id];mt===void 0&&(mt={},r[A.id]=mt);let ht=mt[F.id];ht===void 0&&(ht={},mt[F.id]=ht);let W=ht[it];return W===void 0&&(W=x(p()),ht[it]=W),W}function x(A){const F=[],ut=[],it=[];for(let mt=0;mt<i;mt++)F[mt]=0,ut[mt]=0,it[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ut,attributeDivisors:it,object:A,attributes:{},index:null}}function y(A,F,ut,it){const mt=c.attributes,ht=F.attributes;let W=0;const at=ut.getAttributes();for(const Z in at)if(at[Z].location>=0){const L=mt[Z];let nt=ht[Z];if(nt===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),L===void 0||L.attribute!==nt||nt&&L.data!==nt.data)return!0;W++}return c.attributesNum!==W||c.index!==it}function R(A,F,ut,it){const mt={},ht=F.attributes;let W=0;const at=ut.getAttributes();for(const Z in at)if(at[Z].location>=0){let L=ht[Z];L===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const nt={};nt.attribute=L,L&&L.data&&(nt.data=L.data),mt[Z]=nt,W++}c.attributes=mt,c.attributesNum=W,c.index=it}function w(){const A=c.newAttributes;for(let F=0,ut=A.length;F<ut;F++)A[F]=0}function M(A){g(A,0)}function g(A,F){const ut=c.newAttributes,it=c.enabledAttributes,mt=c.attributeDivisors;ut[A]=1,it[A]===0&&(o.enableVertexAttribArray(A),it[A]=1),mt[A]!==F&&(o.vertexAttribDivisor(A,F),mt[A]=F)}function P(){const A=c.newAttributes,F=c.enabledAttributes;for(let ut=0,it=F.length;ut<it;ut++)F[ut]!==A[ut]&&(o.disableVertexAttribArray(ut),F[ut]=0)}function O(A,F,ut,it,mt,ht,W){W===!0?o.vertexAttribIPointer(A,F,ut,mt,ht):o.vertexAttribPointer(A,F,ut,it,mt,ht)}function U(A,F,ut,it){w();const mt=it.attributes,ht=ut.getAttributes(),W=F.defaultAttributeValues;for(const at in ht){const Z=ht[at];if(Z.location>=0){let xt=mt[at];if(xt===void 0&&(at==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),at==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const L=xt.normalized,nt=xt.itemSize,Et=e.get(xt);if(Et===void 0)continue;const At=Et.buffer,q=Et.type,dt=Et.bytesPerElement,St=q===o.INT||q===o.UNSIGNED_INT||xt.gpuType===qh;if(xt.isInterleavedBufferAttribute){const Tt=xt.data,Rt=Tt.stride,Kt=xt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Z.locationSize;Pt++)g(Z.location+Pt,Tt.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<Z.locationSize;Pt++)M(Z.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Pt=0;Pt<Z.locationSize;Pt++)O(Z.location+Pt,nt/Z.locationSize,q,L,Rt*dt,(Kt+nt/Z.locationSize*Pt)*dt,St)}else{if(xt.isInstancedBufferAttribute){for(let Tt=0;Tt<Z.locationSize;Tt++)g(Z.location+Tt,xt.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Tt=0;Tt<Z.locationSize;Tt++)M(Z.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<Z.locationSize;Tt++)O(Z.location+Tt,nt/Z.locationSize,q,L,nt*dt,nt/Z.locationSize*Tt*dt,St)}}else if(W!==void 0){const L=W[at];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Z.location,L);break;case 3:o.vertexAttrib3fv(Z.location,L);break;case 4:o.vertexAttrib4fv(Z.location,L);break;default:o.vertexAttrib1fv(Z.location,L)}}}}P()}function G(){K();for(const A in r){const F=r[A];for(const ut in F){const it=F[ut];for(const mt in it)_(it[mt].object),delete it[mt];delete F[ut]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const ut in F){const it=F[ut];for(const mt in it)_(it[mt].object),delete it[mt];delete F[ut]}delete r[A.id]}function B(A){for(const F in r){const ut=r[F];if(ut[A.id]===void 0)continue;const it=ut[A.id];for(const mt in it)_(it[mt].object),delete it[mt];delete ut[A.id]}}function K(){C(),h=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function bE(o,e,i){let r;function l(m){r=m}function c(m,_){o.drawArrays(r,m,_),i.update(_,r,1)}function h(m,_,S){S!==0&&(o.drawArraysInstanced(r,m,_,S),i.update(_,r,S))}function d(m,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,S);let y=0;for(let R=0;R<S;R++)y+=_[R];i.update(y,r,1)}function p(m,_,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let R=0;R<m.length;R++)h(m[R],_[R],x[R]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,S);let R=0;for(let w=0;w<S;w++)R+=_[w]*x[w];i.update(R,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function AE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==pi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ta&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qi&&!K)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const S=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=R>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:G,maxSamples:H}}function RE(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new or,d=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||l;return l=x,r=S.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){i=_(S,x,0)},this.setState=function(S,x,y){const R=S.clippingPlanes,w=S.clipIntersection,M=S.clipShadows,g=o.get(S);if(!l||R===null||R.length===0||c&&!M)c?_(null):m();else{const P=c?0:r,O=P*4;let U=g.clippingState||null;p.value=U,U=_(R,x,O,y);for(let G=0;G!==O;++G)U[G]=i[G];g.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,x,y,R){const w=S!==null?S.length:0;let M=null;if(w!==0){if(M=p.value,R!==!0||M===null){const g=y+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,U=y;O!==w;++O,U+=4)h.copy(S[O]).applyMatrix4(P,d),h.normal.toArray(M,U),M[U+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function CE(o){let e=new WeakMap;function i(h,d){return d===hh?h.mapping=ps:d===dh&&(h.mapping=ms),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===hh||d===dh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new Dx(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const us=4,t_=[.125,.215,.35,.446,.526,.582],cr=20,Qf=new Ix,e_=new Ae;let Jf=null,$f=0,th=0,eh=!1;const lr=(1+Math.sqrt(5))/2,ls=1/lr,n_=[new rt(-lr,ls,0),new rt(lr,ls,0),new rt(-ls,0,lr),new rt(ls,0,lr),new rt(0,lr,-ls),new rt(0,lr,ls),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],wE=new rt;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=wE}=c;Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jf,$f,th),this._renderer.xr.enabled=eh,e.scissorTest=!1,iu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Ro,format:pi,colorSpace:vs,depthBuffer:!1},l=a_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DE(c)),this._blurMaterial=UE(c,e,i)}return l}_compileMaterial(e){const i=new Ti(this._lodPlanes[0],e);this._renderer.compile(i,Qf)}_sceneToCubeUV(e,i,r,l,c){const p=new ai(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,y=S.toneMapping;S.getClearColor(e_),S.toneMapping=Ua,S.autoClear=!1;const R=new td({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),w=new Ti(new Ms,R);let M=!1;const g=e.background;g?g.isColor&&(R.color.copy(g),e.background=null,M=!0):(R.color.copy(e_),M=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[P],c.y,c.z)):O===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[P]));const U=this._cubeSize;iu(l,O*U,P>2?U:0,U,U),S.setRenderTarget(l),M&&S.render(w,p),S.render(e,p)}w.geometry.dispose(),w.material.dispose(),S.toneMapping=y,S.autoClear=x,e.background=g}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ps||e.mapping===ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ti(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;iu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Qf)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=n_[(l-c-1)%n_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new Ti(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*cr-1),w=c/R,M=isFinite(c)?1+Math.floor(_*w):cr;M>cr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${cr}`);const g=[];let P=0;for(let B=0;B<cr;++B){const K=B/w,C=Math.exp(-K*K/2);g.push(C),B===0?P+=C:B<M&&(P+=2*C)}for(let B=0;B<g.length;B++)g[B]=g[B]/P;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=R,x.mipInt.value=O-r;const U=this._sizeLods[l],G=3*U*(l>O-us?l-O+us:0),H=4*(this._cubeSize-U);iu(i,G,H,3*U,2*U),p.setRenderTarget(i),p.render(S,Qf)}}function DE(o){const e=[],i=[],r=[];let l=o;const c=o-us+1+t_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-us?p=t_[h-o+us-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,S=1+m,x=[_,_,S,_,S,S,_,_,S,S,_,S],y=6,R=6,w=3,M=2,g=1,P=new Float32Array(w*R*y),O=new Float32Array(M*R*y),U=new Float32Array(g*R*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,K=H>2?0:-1,C=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];P.set(C,w*R*H),O.set(x,M*R*H);const A=[H,H,H,H,H,H];U.set(A,g*R*H)}const G=new gr;G.setAttribute("position",new bi(P,w)),G.setAttribute("uv",new bi(O,M)),G.setAttribute("faceIndex",new bi(U,g)),e.push(G),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function a_(o,e,i){const r=new mr(o,e,i);return r.texture.mapping=pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function iu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function UE(o,e,i){const r=new Float32Array(cr),l=new rt(0,1,0);return new Na({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function r_(){return new Na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function s_(){return new Na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===hh||p===dh,_=p===ps||p===ms;if(m||_){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new i_(o)),S=m?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new i_(o)),S=m?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function NE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&sr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function OE(o,e,i,r){const l={},c=new WeakMap;function h(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const R in x.attributes)e.remove(x.attributes[R]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(S){const x=S.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(S){const x=[],y=S.index,R=S.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let O=0,U=P.length;O<U;O+=3){const G=P[O+0],H=P[O+1],B=P[O+2];x.push(G,H,H,B,B,G)}}else if(R!==void 0){const P=R.array;w=R.version;for(let O=0,U=P.length/3-1;O<U;O+=3){const G=O+0,H=O+1,B=O+2;x.push(G,H,H,B,B,G)}}else return;const M=new(F_(x)?k_:V_)(x,1);M.version=w;const g=c.get(S);g&&e.remove(g),c.set(S,M)}function _(S){const x=c.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&m(S)}else m(S);return c.get(S)}return{get:d,update:p,getWireframeAttribute:_}}function PE(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function m(x,y,R){R!==0&&(o.drawElementsInstanced(r,y,c,x*h,R),i.update(y,r,R))}function _(x,y,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,R);let M=0;for(let g=0;g<R;g++)M+=y[g];i.update(M,r,1)}function S(x,y,R,w){if(R===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)m(x[g]/h,y[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,w,0,R);let g=0;for(let P=0;P<R;P++)g+=y[P]*w[P];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function zE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function BE(o,e,i){const r=new WeakMap,l=new Ye;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let A=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;R===!0&&(U=1),w===!0&&(U=2),M===!0&&(U=3);let G=d.attributes.position.count*U,H=1;G>e.maxTextureSize&&(H=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*H*4*S),K=new I_(B,G,H,S);K.type=Qi,K.needsUpdate=!0;const C=U*4;for(let F=0;F<S;F++){const ut=g[F],it=P[F],mt=O[F],ht=G*H*4*F;for(let W=0;W<ut.count;W++){const at=W*C;R===!0&&(l.fromBufferAttribute(ut,W),B[ht+at+0]=l.x,B[ht+at+1]=l.y,B[ht+at+2]=l.z,B[ht+at+3]=0),w===!0&&(l.fromBufferAttribute(it,W),B[ht+at+4]=l.x,B[ht+at+5]=l.y,B[ht+at+6]=l.z,B[ht+at+7]=0),M===!0&&(l.fromBufferAttribute(mt,W),B[ht+at+8]=l.x,B[ht+at+9]=l.y,B[ht+at+10]=l.z,B[ht+at+11]=mt.itemSize===4?l.w:1)}}x={count:S,texture:K,size:new Pe(G,H)},r.set(d,x),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const w=d.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function FE(o,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,S=e.get(p,_);if(l.get(S)!==m&&(e.update(S),l.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return S}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const K_=new Bn,o_=new Z_(1,1),Q_=new I_,J_=new hx,$_=new q_,l_=[],u_=[],c_=new Float32Array(16),f_=new Float32Array(9),h_=new Float32Array(4);function ys(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=l_[l];if(c===void 0&&(c=new Float32Array(l),l_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function on(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function _u(o,e){let i=u_[e];i===void 0&&(i=new Int32Array(e),u_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function IE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function HE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2fv(this.addr,e),on(i,e)}}function GE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(sn(i,e))return;o.uniform3fv(this.addr,e),on(i,e)}}function VE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4fv(this.addr,e),on(i,e)}}function kE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;h_.set(r),o.uniformMatrix2fv(this.addr,!1,h_),on(i,r)}}function XE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;f_.set(r),o.uniformMatrix3fv(this.addr,!1,f_),on(i,r)}}function WE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;c_.set(r),o.uniformMatrix4fv(this.addr,!1,c_),on(i,r)}}function qE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function YE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2iv(this.addr,e),on(i,e)}}function ZE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3iv(this.addr,e),on(i,e)}}function jE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4iv(this.addr,e),on(i,e)}}function KE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function QE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2uiv(this.addr,e),on(i,e)}}function JE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3uiv(this.addr,e),on(i,e)}}function $E(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4uiv(this.addr,e),on(i,e)}}function tT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(o_.compareFunction=B_,c=o_):c=K_,i.setTexture2D(e||c,l)}function eT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||J_,l)}function nT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$_,l)}function iT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Q_,l)}function aT(o){switch(o){case 5126:return IE;case 35664:return HE;case 35665:return GE;case 35666:return VE;case 35674:return kE;case 35675:return XE;case 35676:return WE;case 5124:case 35670:return qE;case 35667:case 35671:return YE;case 35668:case 35672:return ZE;case 35669:case 35673:return jE;case 5125:return KE;case 36294:return QE;case 36295:return JE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function rT(o,e){o.uniform1fv(this.addr,e)}function sT(o,e){const i=ys(e,this.size,2);o.uniform2fv(this.addr,i)}function oT(o,e){const i=ys(e,this.size,3);o.uniform3fv(this.addr,i)}function lT(o,e){const i=ys(e,this.size,4);o.uniform4fv(this.addr,i)}function uT(o,e){const i=ys(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function cT(o,e){const i=ys(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fT(o,e){const i=ys(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function hT(o,e){o.uniform1iv(this.addr,e)}function dT(o,e){o.uniform2iv(this.addr,e)}function pT(o,e){o.uniform3iv(this.addr,e)}function mT(o,e){o.uniform4iv(this.addr,e)}function gT(o,e){o.uniform1uiv(this.addr,e)}function _T(o,e){o.uniform2uiv(this.addr,e)}function vT(o,e){o.uniform3uiv(this.addr,e)}function ST(o,e){o.uniform4uiv(this.addr,e)}function xT(o,e,i){const r=this.cache,l=e.length,c=_u(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||K_,c[h])}function MT(o,e,i){const r=this.cache,l=e.length,c=_u(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||J_,c[h])}function yT(o,e,i){const r=this.cache,l=e.length,c=_u(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||$_,c[h])}function ET(o,e,i){const r=this.cache,l=e.length,c=_u(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Q_,c[h])}function TT(o){switch(o){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return lT;case 35674:return uT;case 35675:return cT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ET}}class bT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=aT(i.type)}}class AT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TT(i.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function d_(o,e){o.seq.push(e),o.map[e.id]=e}function CT(o,e,i){const r=o.name,l=r.length;for(nh.lastIndex=0;;){const c=nh.exec(r),h=nh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){d_(i,m===void 0?new bT(d,o,e):new AT(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new RT(d),d_(i,S)),i=S}}}class cu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);CT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function p_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const wT=37297;let DT=0;function UT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const m_=new oe;function LT(o){be._getMatrix(m_,be.workingColorSpace,o);const e=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case fu:return[e,"LinearTransferOETF"];case Ne:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function g_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+UT(o.getShaderSource(e),h)}else return l}function NT(o,e){const i=LT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function OT(o,e){let i;switch(e){case BS:i="Linear";break;case FS:i="Reinhard";break;case IS:i="Cineon";break;case HS:i="ACESFilmic";break;case VS:i="AgX";break;case kS:i="Neutral";break;case GS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const au=new rt;function PT(){be.getLuminanceCoefficients(au);const o=au.x.toFixed(4),e=au.y.toFixed(4),i=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function BT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function FT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function bo(o){return o!==""}function __(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IT=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(o){return o.replace(IT,GT)}const HT=new Map;function GT(o,e){let i=le[e];if(i===void 0){const r=HT.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kh(i)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(VT,kT)}function kT(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function x_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===gS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function YT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case b_:e="ENVMAP_BLENDING_MULTIPLY";break;case PS:e="ENVMAP_BLENDING_MIX";break;case zS:e="ENVMAP_BLENDING_ADD";break}return e}function ZT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function jT(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=XT(i),m=WT(i),_=qT(i),S=YT(i),x=ZT(i),y=zT(i),R=BT(c),w=l.createProgram();let M,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(bo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(bo).join(`
`),g.length>0&&(g+=`
`)):(M=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),g=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ua?"#define TONE_MAPPING":"",i.toneMapping!==Ua?le.tonemapping_pars_fragment:"",i.toneMapping!==Ua?OT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,NT("linearToOutputTexel",i.outputColorSpace),PT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=kh(h),h=__(h,i),h=v_(h,i),d=kh(d),d=__(d,i),d=v_(d,i),h=S_(h),d=S_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+M+h,U=P+g+d,G=p_(l,l.VERTEX_SHADER,O),H=p_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,G),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(w).trim(),it=l.getShaderInfoLog(G).trim(),mt=l.getShaderInfoLog(H).trim();let ht=!0,W=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,G,H);else{const at=g_(l,G,"vertex"),Z=g_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ut+`
`+at+`
`+Z)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(it===""||mt==="")&&(W=!1);W&&(F.diagnostics={runnable:ht,programLog:ut,vertexShader:{log:it,prefix:M},fragmentShader:{log:mt,prefix:g}})}l.deleteShader(G),l.deleteShader(H),K=new cu(l,w),C=FT(l,w)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,wT)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=H,this}let KT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new JT(e),i.set(e,r)),r}}class JT{constructor(e){this.id=KT++,this.code=e,this.usedTimes=0}}function $T(o,e,i,r,l,c,h){const d=new H_,p=new QT,m=new Set,_=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,A,F,ut,it){const mt=ut.fog,ht=it.geometry,W=C.isMeshStandardMaterial?ut.environment:null,at=(C.isMeshStandardMaterial?i:e).get(C.envMap||W),Z=at&&at.mapping===pu?at.image.height:null,xt=R[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,nt=L!==void 0?L.length:0;let Et=0;ht.morphAttributes.position!==void 0&&(Et=1),ht.morphAttributes.normal!==void 0&&(Et=2),ht.morphAttributes.color!==void 0&&(Et=3);let At,q,dt,St;if(xt){const Me=yi[xt];At=Me.vertexShader,q=Me.fragmentShader}else At=C.vertexShader,q=C.fragmentShader,p.update(C),dt=p.getVertexShaderID(C),St=p.getFragmentShaderID(C);const Tt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Kt=it.isInstancedMesh===!0,Pt=it.isBatchedMesh===!0,xe=!!C.map,Re=!!C.matcap,ie=!!at,z=!!C.aoMap,dn=!!C.lightMap,re=!!C.bumpMap,ce=!!C.normalMap,kt=!!C.displacementMap,Ce=!!C.emissiveMap,Xt=!!C.metalnessMap,D=!!C.roughnessMap,E=C.anisotropy>0,tt=C.clearcoat>0,ct=C.dispersion>0,vt=C.iridescence>0,ft=C.sheen>0,Ht=C.transmission>0,wt=E&&!!C.anisotropyMap,zt=tt&&!!C.clearcoatMap,de=tt&&!!C.clearcoatNormalMap,yt=tt&&!!C.clearcoatRoughnessMap,Bt=vt&&!!C.iridescenceMap,jt=vt&&!!C.iridescenceThicknessMap,Gt=ft&&!!C.sheenColorMap,Ft=ft&&!!C.sheenRoughnessMap,ae=!!C.specularMap,Yt=!!C.specularColorMap,we=!!C.specularIntensityMap,k=Ht&&!!C.transmissionMap,Lt=Ht&&!!C.thicknessMap,st=!!C.gradientMap,gt=!!C.alphaMap,Ct=C.alphaTest>0,Dt=!!C.alphaHash,Jt=!!C.extensions;let Ie=Ua;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ie=o.toneMapping);const $e={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:At,fragmentShader:q,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&it._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&it.instanceColor!==null,instancingMorph:Kt&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:vs,alphaToCoverage:!!C.alphaToCoverage,map:xe,matcap:Re,envMap:ie,envMapMode:ie&&at.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:dn,bumpMap:re,normalMap:ce,displacementMap:x&&kt,emissiveMap:Ce,normalMapObjectSpace:ce&&C.normalMapType===ZS,normalMapTangentSpace:ce&&C.normalMapType===YS,metalnessMap:Xt,roughnessMap:D,anisotropy:E,anisotropyMap:wt,clearcoat:tt,clearcoatMap:zt,clearcoatNormalMap:de,clearcoatRoughnessMap:yt,dispersion:ct,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:jt,sheen:ft,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:ae,specularColorMap:Yt,specularIntensityMap:we,transmission:Ht,transmissionMap:k,thicknessMap:Lt,gradientMap:st,opaque:C.transparent===!1&&C.blending===cs&&C.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Dt,combine:C.combine,mapUv:xe&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:dn&&w(C.lightMap.channel),bumpMapUv:re&&w(C.bumpMap.channel),normalMapUv:ce&&w(C.normalMap.channel),displacementMapUv:kt&&w(C.displacementMap.channel),emissiveMapUv:Ce&&w(C.emissiveMap.channel),metalnessMapUv:Xt&&w(C.metalnessMap.channel),roughnessMapUv:D&&w(C.roughnessMap.channel),anisotropyMapUv:wt&&w(C.anisotropyMap.channel),clearcoatMapUv:zt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:de&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:ae&&w(C.specularMap.channel),specularColorMapUv:Yt&&w(C.specularColorMap.channel),specularIntensityMapUv:we&&w(C.specularIntensityMap.channel),transmissionMapUv:k&&w(C.transmissionMap.channel),thicknessMapUv:Lt&&w(C.thicknessMap.channel),alphaMapUv:gt&&w(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ce||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ht.attributes.uv&&(xe||gt),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Rt,skinning:it.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ie,decodeVideoTexture:xe&&C.map.isVideoTexture===!0&&be.getTransfer(C.map.colorSpace)===Ne,decodeVideoTextureEmissive:Ce&&C.emissiveMap.isVideoTexture===!0&&be.getTransfer(C.emissiveMap.colorSpace)===Ne,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ji,flipSided:C.side===zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Jt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&C.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)A.push(F),A.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(A,C),O(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function P(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function O(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const A=R[C.type];let F;if(A){const ut=yi[A];F=Ax.clone(ut.uniforms)}else F=C.uniforms;return F}function G(C,A){let F;for(let ut=0,it=_.length;ut<it;ut++){const mt=_[ut];if(mt.cacheKey===A){F=mt,++F.usedTimes;break}}return F===void 0&&(F=new jT(o,A,C,c),_.push(F)),F}function H(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function B(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:U,acquireProgram:G,releaseProgram:H,releaseShaderCache:B,programs:_,dispose:K}}function tb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function eb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function M_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function y_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(S,x,y,R,w,M){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:x,material:y,groupOrder:R,renderOrder:S.renderOrder,z:w,group:M},o[e]=g):(g.id=S.id,g.object=S,g.geometry=x,g.material=y,g.groupOrder=R,g.renderOrder=S.renderOrder,g.z=w,g.group=M),e++,g}function d(S,x,y,R,w,M){const g=h(S,x,y,R,w,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function p(S,x,y,R,w,M){const g=h(S,x,y,R,w,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function m(S,x){i.length>1&&i.sort(S||eb),r.length>1&&r.sort(x||M_),l.length>1&&l.sort(x||M_)}function _(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function nb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new y_,o.set(r,[h])):l>=c.length?(h=new y_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function ib(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ae};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function ab(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let rb=0;function sb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ob(o){const e=new ib,i=ab(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new rt);const l=new rt,c=new Je,h=new Je;function d(m){let _=0,S=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,R=0,w=0,M=0,g=0,P=0,O=0,U=0,G=0,H=0,B=0;m.sort(sb);for(let C=0,A=m.length;C<A;C++){const F=m[C],ut=F.color,it=F.intensity,mt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ut.r*it,S+=ut.g*it,x+=ut.b*it;else if(F.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(F.sh.coefficients[W],it);B++}else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const at=F.shadow,Z=i.get(F);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=F.shadow.matrix,P++}r.directional[y]=W,y++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(ut).multiplyScalar(it),W.distance=mt,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,r.spot[w]=W;const at=F.shadow;if(F.map&&(r.spotLightMap[G]=F.map,G++,at.updateMatrices(F),F.castShadow&&H++),r.spotLightMatrix[w]=at.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,r.spotShadow[w]=Z,r.spotShadowMap[w]=ht,U++}w++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(ut).multiplyScalar(it),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=W,M++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),W.distance=F.distance,W.decay=F.decay,F.castShadow){const at=F.shadow,Z=i.get(F);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,Z.shadowCameraNear=at.camera.near,Z.shadowCameraFar=at.camera.far,r.pointShadow[R]=Z,r.pointShadowMap[R]=ht,r.pointShadowMatrix[R]=F.shadow.matrix,O++}r.point[R]=W,R++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(it),W.groundColor.copy(F.groundColor).multiplyScalar(it),r.hemi[g]=W,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==y||K.pointLength!==R||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==g||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==U||K.numSpotMaps!==G||K.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=R,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+G-H,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,K.directionalLength=y,K.pointLength=R,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=g,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=U,K.numSpotMaps=G,K.numLightProbes=B,r.version=rb++)}function p(m,_){let S=0,x=0,y=0,R=0,w=0;const M=_.matrixWorldInverse;for(let g=0,P=m.length;g<P;g++){const O=m[g];if(O.isDirectionalLight){const U=r.directional[S];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),S++}else if(O.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:r}}function E_(o){const e=new ob(o),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function lb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new E_(o),e.set(l,[d])):c>=h.length?(d=new E_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fb(o,e,i){let r=new Y_;const l=new Pe,c=new Pe,h=new Ye,d=new Px({depthPacking:qS}),p=new zx,m={},_=i.maxTextureSize,S={[La]:zn,[zn]:La,[ji]:ji},x=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:ub,fragmentShader:cb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const R=new gr;R.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ti(R,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_;let g=this.type;this.render=function(H,B,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Da),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const it=g!==Zi&&this.type===Zi,mt=g===Zi&&this.type!==Zi;for(let ht=0,W=H.length;ht<W;ht++){const at=H[ht],Z=at.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/xt.x),l.x=c.x*xt.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/xt.y),l.y=c.y*xt.y,Z.mapSize.y=c.y)),Z.map===null||it===!0||mt===!0){const nt=this.type!==Zi?{minFilter:mi,magFilter:mi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new mr(l.x,l.y,nt),Z.map.texture.name=at.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const L=Z.getViewportCount();for(let nt=0;nt<L;nt++){const Et=Z.getViewport(nt);h.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),ut.viewport(h),Z.updateMatrices(at,nt),r=Z.getFrustum(),U(B,K,Z.camera,at,this.type)}Z.isPointLightShadow!==!0&&this.type===Zi&&P(Z,K),Z.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(C,A,F)};function P(H,B){const K=e.update(w);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new mr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,K,x,w,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,K,y,w,null)}function O(H,B,K,C){let A=null;const F=K.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)A=F;else if(A=K.isPointLight===!0?p:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ut=A.uuid,it=B.uuid;let mt=m[ut];mt===void 0&&(mt={},m[ut]=mt);let ht=mt[it];ht===void 0&&(ht=A.clone(),mt[it]=ht,B.addEventListener("dispose",G)),A=ht}if(A.visible=B.visible,A.wireframe=B.wireframe,C===Zi?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:S[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ut=o.properties.get(A);ut.light=K}return A}function U(H,B,K,C,A){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Zi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,H.matrixWorld);const it=e.update(H),mt=H.material;if(Array.isArray(mt)){const ht=it.groups;for(let W=0,at=ht.length;W<at;W++){const Z=ht[W],xt=mt[Z.materialIndex];if(xt&&xt.visible){const L=O(H,xt,C,A);H.onBeforeShadow(o,H,B,K,it,L,Z),o.renderBufferDirect(K,null,it,L,H,Z),H.onAfterShadow(o,H,B,K,it,L,Z)}}}else if(mt.visible){const ht=O(H,mt,C,A);H.onBeforeShadow(o,H,B,K,it,ht,null),o.renderBufferDirect(K,null,it,ht,H,null),H.onAfterShadow(o,H,B,K,it,ht,null)}}const ut=H.children;for(let it=0,mt=ut.length;it<mt;it++)U(ut[it],B,K,C,A)}function G(H){H.target.removeEventListener("dispose",G);for(const K in m){const C=m[K],A=H.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const hb={[rh]:sh,[oh]:ch,[lh]:fh,[ds]:uh,[sh]:rh,[ch]:oh,[fh]:lh,[uh]:ds};function db(o,e){function i(){let k=!1;const Lt=new Ye;let st=null;const gt=new Ye(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Dt,Jt,Ie,$e){$e===!0&&(Ct*=Ie,Dt*=Ie,Jt*=Ie),Lt.set(Ct,Dt,Jt,Ie),gt.equals(Lt)===!1&&(o.clearColor(Ct,Dt,Jt,Ie),gt.copy(Lt))},reset:function(){k=!1,st=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,st=null,gt=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const Jt=e.get("EXT_clip_control");Lt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Ct;Ct=null,this.setClear(Ie)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){st!==Dt&&!k&&(o.depthMask(Dt),st=Dt)},setFunc:function(Dt){if(Lt&&(Dt=hb[Dt]),gt!==Dt){switch(Dt){case rh:o.depthFunc(o.NEVER);break;case sh:o.depthFunc(o.ALWAYS);break;case oh:o.depthFunc(o.LESS);break;case ds:o.depthFunc(o.LEQUAL);break;case lh:o.depthFunc(o.EQUAL);break;case uh:o.depthFunc(o.GEQUAL);break;case ch:o.depthFunc(o.GREATER);break;case fh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){k=!1,st=null,gt=null,Ct=null,Lt=!1}}}function l(){let k=!1,Lt=null,st=null,gt=null,Ct=null,Dt=null,Jt=null,Ie=null,$e=null;return{setTest:function(Me){k||(Me?Tt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!k&&(o.stencilMask(Me),Lt=Me)},setFunc:function(Me,En,Tn){(st!==Me||gt!==En||Ct!==Tn)&&(o.stencilFunc(Me,En,Tn),st=Me,gt=En,Ct=Tn)},setOp:function(Me,En,Tn){(Dt!==Me||Jt!==En||Ie!==Tn)&&(o.stencilOp(Me,En,Tn),Dt=Me,Jt=En,Ie=Tn)},setLocked:function(Me){k=Me},setClear:function(Me){$e!==Me&&(o.clearStencil(Me),$e=Me)},reset:function(){k=!1,Lt=null,st=null,gt=null,Ct=null,Dt=null,Jt=null,Ie=null,$e=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},S={},x=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,U=null,G=null,H=null,B=new Ae(0,0,0),K=0,C=!1,A=null,F=null,ut=null,it=null,mt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,at=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=at>=2);let xt=null,L={};const nt=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),At=new Ye().fromArray(nt),q=new Ye().fromArray(Et);function dt(k,Lt,st,gt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(k,Dt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<st;Jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const St={};St[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),h.setFunc(ds),re(!1),ce(wg),Tt(o.CULL_FACE),z(Da);function Tt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Rt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Kt(k,Lt){return S[k]!==Lt?(o.bindFramebuffer(k,Lt),S[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(k,Lt){let st=y,gt=!1;if(k){st=x.get(Lt),st===void 0&&(st=[],x.set(Lt,st));const Ct=k.textures;if(st.length!==Ct.length||st[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++)st[Dt]=o.COLOR_ATTACHMENT0+Dt;st.length=Ct.length,gt=!0}}else st[0]!==o.BACK&&(st[0]=o.BACK,gt=!0);gt&&o.drawBuffers(st)}function xe(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Re={[ur]:o.FUNC_ADD,[vS]:o.FUNC_SUBTRACT,[SS]:o.FUNC_REVERSE_SUBTRACT};Re[xS]=o.MIN,Re[MS]=o.MAX;const ie={[yS]:o.ZERO,[ES]:o.ONE,[TS]:o.SRC_COLOR,[ih]:o.SRC_ALPHA,[DS]:o.SRC_ALPHA_SATURATE,[CS]:o.DST_COLOR,[AS]:o.DST_ALPHA,[bS]:o.ONE_MINUS_SRC_COLOR,[ah]:o.ONE_MINUS_SRC_ALPHA,[wS]:o.ONE_MINUS_DST_COLOR,[RS]:o.ONE_MINUS_DST_ALPHA,[US]:o.CONSTANT_COLOR,[LS]:o.ONE_MINUS_CONSTANT_COLOR,[NS]:o.CONSTANT_ALPHA,[OS]:o.ONE_MINUS_CONSTANT_ALPHA};function z(k,Lt,st,gt,Ct,Dt,Jt,Ie,$e,Me){if(k===Da){w===!0&&(Rt(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),k!==_S){if(k!==M||Me!==C){if((g!==ur||U!==ur)&&(o.blendEquation(o.FUNC_ADD),g=ur,U=ur),Me)switch(k){case cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dg:o.blendFunc(o.ONE,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,O=null,G=null,H=null,B.set(0,0,0),K=0,M=k,C=Me}return}Ct=Ct||Lt,Dt=Dt||st,Jt=Jt||gt,(Lt!==g||Ct!==U)&&(o.blendEquationSeparate(Re[Lt],Re[Ct]),g=Lt,U=Ct),(st!==P||gt!==O||Dt!==G||Jt!==H)&&(o.blendFuncSeparate(ie[st],ie[gt],ie[Dt],ie[Jt]),P=st,O=gt,G=Dt,H=Jt),(Ie.equals(B)===!1||$e!==K)&&(o.blendColor(Ie.r,Ie.g,Ie.b,$e),B.copy(Ie),K=$e),M=k,C=!1}function dn(k,Lt){k.side===ji?Rt(o.CULL_FACE):Tt(o.CULL_FACE);let st=k.side===zn;Lt&&(st=!st),re(st),k.blending===cs&&k.transparent===!1?z(Da):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(k){A!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),A=k)}function ce(k){k!==pS?(Tt(o.CULL_FACE),k!==F&&(k===wg?o.cullFace(o.BACK):k===mS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),F=k}function kt(k){k!==ut&&(W&&o.lineWidth(k),ut=k)}function Ce(k,Lt,st){k?(Tt(o.POLYGON_OFFSET_FILL),(it!==Lt||mt!==st)&&(o.polygonOffset(Lt,st),it=Lt,mt=st)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(k){k?Tt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function D(k){k===void 0&&(k=o.TEXTURE0+ht-1),xt!==k&&(o.activeTexture(k),xt=k)}function E(k,Lt,st){st===void 0&&(xt===null?st=o.TEXTURE0+ht-1:st=xt);let gt=L[st];gt===void 0&&(gt={type:void 0,texture:void 0},L[st]=gt),(gt.type!==k||gt.texture!==Lt)&&(xt!==st&&(o.activeTexture(st),xt=st),o.bindTexture(k,Lt||St[k]),gt.type=k,gt.texture=Lt)}function tt(){const k=L[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ct(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){At.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Ft(k){q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function ae(k,Lt){let st=m.get(Lt);st===void 0&&(st=new WeakMap,m.set(Lt,st));let gt=st.get(k);gt===void 0&&(gt=o.getUniformBlockIndex(Lt,k.name),st.set(k,gt))}function Yt(k,Lt){const gt=m.get(Lt).get(k);p.get(Lt)!==gt&&(o.uniformBlockBinding(Lt,gt,k.__bindingPointIndex),p.set(Lt,gt))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,L={},S={},x=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,U=null,G=null,H=null,B=new Ae(0,0,0),K=0,C=!1,A=null,F=null,ut=null,it=null,mt=null,At.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Tt,disable:Rt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:xe,setBlending:z,setMaterial:dn,setFlipSided:re,setCullFace:ce,setLineWidth:kt,setPolygonOffset:Ce,setScissorTest:Xt,activeTexture:D,bindTexture:E,unbindTexture:tt,compressedTexImage2D:ct,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:jt,updateUBOMapping:ae,uniformBlockBinding:Yt,texStorage2D:de,texStorage3D:yt,texSubImage2D:ft,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:we}}function pb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pe,_=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,E){return y?new OffscreenCanvas(D,E):du("canvas")}function w(D,E,tt){let ct=1;const vt=Xt(D);if((vt.width>tt||vt.height>tt)&&(ct=tt/Math.max(vt.width,vt.height)),ct<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ft=Math.floor(ct*vt.width),Ht=Math.floor(ct*vt.height);S===void 0&&(S=R(ft,Ht));const wt=E?R(ft,Ht):S;return wt.width=ft,wt.height=Ht,wt.getContext("2d").drawImage(D,0,0,ft,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Ht+")."),wt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function M(D){return D.generateMipmaps}function g(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,E,tt,ct,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ft=E;if(E===o.RED&&(tt===o.FLOAT&&(ft=o.R32F),tt===o.HALF_FLOAT&&(ft=o.R16F),tt===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.R8UI),tt===o.UNSIGNED_SHORT&&(ft=o.R16UI),tt===o.UNSIGNED_INT&&(ft=o.R32UI),tt===o.BYTE&&(ft=o.R8I),tt===o.SHORT&&(ft=o.R16I),tt===o.INT&&(ft=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ft=o.RG32F),tt===o.HALF_FLOAT&&(ft=o.RG16F),tt===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),tt===o.UNSIGNED_INT&&(ft=o.RG32UI),tt===o.BYTE&&(ft=o.RG8I),tt===o.SHORT&&(ft=o.RG16I),tt===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),tt===o.UNSIGNED_INT&&(ft=o.RGB32UI),tt===o.BYTE&&(ft=o.RGB8I),tt===o.SHORT&&(ft=o.RGB16I),tt===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),tt===o.BYTE&&(ft=o.RGBA8I),tt===o.SHORT&&(ft=o.RGBA16I),tt===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),E===o.RGBA){const Ht=vt?fu:be.getTransfer(ct);tt===o.FLOAT&&(ft=o.RGBA32F),tt===o.HALF_FLOAT&&(ft=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ft=Ht===Ne?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function U(D,E){let tt;return D?E===null||E===pr||E===gs?tt=o.DEPTH24_STENCIL8:E===Qi?tt=o.DEPTH32F_STENCIL8:E===Ao&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===gs?tt=o.DEPTH_COMPONENT24:E===Qi?tt=o.DEPTH_COMPONENT32F:E===Ao&&(tt=o.DEPTH_COMPONENT16),tt}function G(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==mi&&D.minFilter!==Ei?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function H(D){const E=D.target;E.removeEventListener("dispose",H),K(E),E.isVideoTexture&&_.delete(E)}function B(D){const E=D.target;E.removeEventListener("dispose",B),A(E)}function K(D){const E=r.get(D);if(E.__webglInit===void 0)return;const tt=D.source,ct=x.get(tt);if(ct){const vt=ct[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(D),Object.keys(ct).length===0&&x.delete(tt)}r.remove(D)}function C(D){const E=r.get(D);o.deleteTexture(E.__webglTexture);const tt=D.source,ct=x.get(tt);delete ct[E.__cacheKey],h.memory.textures--}function A(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let vt=0;vt<E.__webglFramebuffer[ct].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=D.textures;for(let ct=0,vt=tt.length;ct<vt;ct++){const ft=r.get(tt[ct]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(tt[ct])}r.remove(D)}let F=0;function ut(){F=0}function it(){const D=F;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),F+=1,D}function mt(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ht(D,E){const tt=r.get(D);if(D.isVideoTexture&&kt(D),D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){const ct=D.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,D,E);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function W(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){q(tt,D,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function at(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){q(tt,D,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Z(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){dt(tt,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const xt={[ph]:o.REPEAT,[fr]:o.CLAMP_TO_EDGE,[mh]:o.MIRRORED_REPEAT},L={[mi]:o.NEAREST,[XS]:o.NEAREST_MIPMAP_NEAREST,[Bl]:o.NEAREST_MIPMAP_LINEAR,[Ei]:o.LINEAR,[Rf]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},nt={[jS]:o.NEVER,[ex]:o.ALWAYS,[KS]:o.LESS,[B_]:o.LEQUAL,[QS]:o.EQUAL,[tx]:o.GEQUAL,[JS]:o.GREATER,[$S]:o.NOTEQUAL};function Et(D,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ei||E.magFilter===Rf||E.magFilter===Bl||E.magFilter===hr||E.minFilter===Ei||E.minFilter===Rf||E.minFilter===Bl||E.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,xt[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==Bl&&E.minFilter!==hr||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(D,E){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",H));const ct=E.source;let vt=x.get(ct);vt===void 0&&(vt={},x.set(ct,vt));const ft=mt(E);if(ft!==D.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[ft].usedTimes++;const Ht=vt[D.__cacheKey];Ht!==void 0&&(vt[D.__cacheKey].usedTimes--,Ht.usedTimes===0&&C(E)),D.__cacheKey=ft,D.__webglTexture=vt[ft].texture}return tt}function q(D,E,tt){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const vt=At(D,E),ft=E.source;i.bindTexture(ct,D.__webglTexture,o.TEXTURE0+tt);const Ht=r.get(ft);if(ft.version!==Ht.__version||vt===!0){i.activeTexture(o.TEXTURE0+tt);const wt=be.getPrimaries(be.workingColorSpace),zt=E.colorSpace===wa?null:be.getPrimaries(E.colorSpace),de=E.colorSpace===wa||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let yt=w(E.image,!1,l.maxTextureSize);yt=Ce(E,yt);const Bt=c.convert(E.format,E.colorSpace),jt=c.convert(E.type);let Gt=O(E.internalFormat,Bt,jt,E.colorSpace,E.isVideoTexture);Et(ct,E);let Ft;const ae=E.mipmaps,Yt=E.isVideoTexture!==!0,we=Ht.__version===void 0||vt===!0,k=ft.dataReady,Lt=G(E,yt);if(E.isDepthTexture)Gt=U(E.format===_s,E.type),we&&(Yt?i.texStorage2D(o.TEXTURE_2D,1,Gt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,jt,null));else if(E.isDataTexture)if(ae.length>0){Yt&&we&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let st=0,gt=ae.length;st<gt;st++)Ft=ae[st],Yt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,jt,Ft.data):i.texImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,jt,Ft.data);E.generateMipmaps=!1}else Yt?(we&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,yt.width,yt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,Bt,jt,yt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,ae[0].width,ae[0].height,yt.depth);for(let st=0,gt=ae.length;st<gt;st++)if(Ft=ae[st],E.format!==pi)if(Bt!==null)if(Yt){if(k)if(E.layerUpdates.size>0){const Ct=$g(Ft.width,Ft.height,E.format,E.type);for(const Dt of E.layerUpdates){const Jt=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,Dt,Ft.width,Ft.height,1,Bt,Jt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,yt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,yt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,yt.depth,Bt,jt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,yt.depth,0,Bt,jt,Ft.data)}else{Yt&&we&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let st=0,gt=ae.length;st<gt;st++)Ft=ae[st],E.format!==pi?Bt!==null?Yt?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,jt,Ft.data):i.texImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,jt,Ft.data)}else if(E.isDataArrayTexture)if(Yt){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,yt.width,yt.height,yt.depth),k)if(E.layerUpdates.size>0){const st=$g(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ct=yt.data.subarray(gt*st/yt.data.BYTES_PER_ELEMENT,(gt+1)*st/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Bt,jt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Bt,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,yt.width,yt.height,yt.depth,0,Bt,jt,yt.data);else if(E.isData3DTexture)Yt?(we&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,yt.width,yt.height,yt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Bt,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,yt.width,yt.height,yt.depth,0,Bt,jt,yt.data);else if(E.isFramebufferTexture){if(we)if(Yt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,yt.width,yt.height);else{let st=yt.width,gt=yt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,st,gt,0,Bt,jt,null),st>>=1,gt>>=1}}else if(ae.length>0){if(Yt&&we){const st=Xt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,st.width,st.height)}for(let st=0,gt=ae.length;st<gt;st++)Ft=ae[st],Yt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Bt,jt,Ft):i.texImage2D(o.TEXTURE_2D,st,Gt,Bt,jt,Ft);E.generateMipmaps=!1}else if(Yt){if(we){const st=Xt(yt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,st.width,st.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,jt,yt);M(E)&&g(ct),Ht.__version=ft.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function dt(D,E,tt){if(E.image.length!==6)return;const ct=At(D,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+tt);const ft=r.get(vt);if(vt.version!==ft.__version||ct===!0){i.activeTexture(o.TEXTURE0+tt);const Ht=be.getPrimaries(be.workingColorSpace),wt=E.colorSpace===wa?null:be.getPrimaries(E.colorSpace),zt=E.colorSpace===wa||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!de&&!yt?Bt[gt]=w(E.image[gt],!0,l.maxCubemapSize):Bt[gt]=yt?E.image[gt].image:E.image[gt],Bt[gt]=Ce(E,Bt[gt]);const jt=Bt[0],Gt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type),ae=O(E.internalFormat,Gt,Ft,E.colorSpace),Yt=E.isVideoTexture!==!0,we=ft.__version===void 0||ct===!0,k=vt.dataReady;let Lt=G(E,jt);Et(o.TEXTURE_CUBE_MAP,E);let st;if(de){Yt&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,jt.width,jt.height);for(let gt=0;gt<6;gt++){st=Bt[gt].mipmaps;for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];E.format!==pi?Gt!==null?Yt?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,ae,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(st=E.mipmaps,Yt&&we){st.length>0&&Lt++;const gt=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,Gt,Ft,Bt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Bt[gt].width,Bt[gt].height,0,Gt,Ft,Bt[gt].data);for(let Ct=0;Ct<st.length;Ct++){const Jt=st[Ct].image[gt].image;Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Jt.width,Jt.height,Gt,Ft,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,ae,Jt.width,Jt.height,0,Gt,Ft,Jt.data)}}else{Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Ft,Bt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Gt,Ft,Bt[gt]);for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Gt,Ft,Dt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,ae,Gt,Ft,Dt.image[gt])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function St(D,E,tt,ct,vt,ft){const Ht=c.convert(tt.format,tt.colorSpace),wt=c.convert(tt.type),zt=O(tt.internalFormat,Ht,wt,tt.colorSpace),de=r.get(E),yt=r.get(tt);if(yt.__renderTarget=E,!de.__hasExternalTextures){const Bt=Math.max(1,E.width>>ft),jt=Math.max(1,E.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,zt,Bt,jt,E.depth,0,Ht,wt,null):i.texImage2D(vt,ft,zt,Bt,jt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,vt,yt.__webglTexture,0,re(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,vt,yt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(D,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const ct=E.depthTexture,vt=ct&&ct.isDepthTexture?ct.type:null,ft=U(E.stencilBuffer,vt),Ht=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=re(E);ce(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,ft,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,D)}else{const ct=E.textures;for(let vt=0;vt<ct.length;vt++){const ft=ct[vt],Ht=c.convert(ft.format,ft.colorSpace),wt=c.convert(ft.type),zt=O(ft.internalFormat,Ht,wt,ft.colorSpace),de=re(E);tt&&ce(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,de,zt,E.width,E.height):ce(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const vt=ct.__webglTexture,ft=re(E);if(E.depthTexture.format===fs)ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===_s)ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Kt(D){const E=r.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ct=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",vt)};ct.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ct}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,D)}else if(tt){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),Tt(E.__webglDepthbuffer[ct],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Tt(E.__webglDepthbuffer,D,!1);else{const ct=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ct,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(D,E,tt){const ct=r.get(D);E!==void 0&&St(ct.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Kt(D)}function xe(D){const E=D.texture,tt=r.get(D),ct=r.get(E);D.addEventListener("dispose",B);const vt=D.textures,ft=D.isWebGLCubeRenderTarget===!0,Ht=vt.length>1;if(Ht||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),ft){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)tt.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else tt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=vt.length;wt<zt;wt++){const de=r.get(vt[wt]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&ce(D)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const zt=vt[wt];tt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const de=c.convert(zt.format,zt.colorSpace),yt=c.convert(zt.type),Bt=O(zt.internalFormat,de,yt,zt.colorSpace,D.isXRRenderTarget===!0),jt=re(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(tt.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),Et(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(tt.__webglFramebuffer[wt][zt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else St(tt.__webglFramebuffer[wt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=vt.length;wt<zt;wt++){const de=vt[wt],yt=r.get(de);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),Et(o.TEXTURE_2D,de),St(tt.__webglFramebuffer,D,de,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(de)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(wt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ct.__webglTexture),Et(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(tt.__webglFramebuffer[zt],D,E,o.COLOR_ATTACHMENT0,wt,zt);else St(tt.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,wt,0);M(E)&&g(wt),i.unbindTexture()}D.depthBuffer&&Kt(D)}function Re(D){const E=D.textures;for(let tt=0,ct=E.length;tt<ct;tt++){const vt=E[tt];if(M(vt)){const ft=P(D),Ht=r.get(vt).__webglTexture;i.bindTexture(ft,Ht),g(ft),i.unbindTexture()}}}const ie=[],z=[];function dn(D){if(D.samples>0){if(ce(D)===!1){const E=D.textures,tt=D.width,ct=D.height;let vt=o.COLOR_BUFFER_BIT;const ft=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(D),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const de=r.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,de,0)}o.blitFramebuffer(0,0,tt,ct,0,0,tt,ct,vt,o.NEAREST),p===!0&&(ie.length=0,z.length=0,ie.push(o.COLOR_ATTACHMENT0+zt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ie.push(ft),z.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const de=r.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,de,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function re(D){return Math.min(l.maxSamples,D.samples)}function ce(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Ce(D,E){const tt=D.colorSpace,ct=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==vs&&tt!==wa&&(be.getTransfer(tt)===Ne?(ct!==pi||vt!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Xt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=it,this.resetTextureUnits=ut,this.setTexture2D=ht,this.setTexture2DArray=W,this.setTexture3D=at,this.setTextureCube=Z,this.rebindTextures=Pt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ce}function mb(o,e){function i(r,l=wa){let c;const h=be.getTransfer(l);if(r===ta)return o.UNSIGNED_BYTE;if(r===Yh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Zh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===w_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===R_)return o.BYTE;if(r===C_)return o.SHORT;if(r===Ao)return o.UNSIGNED_SHORT;if(r===qh)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===Qi)return o.FLOAT;if(r===Ro)return o.HALF_FLOAT;if(r===D_)return o.ALPHA;if(r===U_)return o.RGB;if(r===pi)return o.RGBA;if(r===L_)return o.LUMINANCE;if(r===N_)return o.LUMINANCE_ALPHA;if(r===fs)return o.DEPTH_COMPONENT;if(r===_s)return o.DEPTH_STENCIL;if(r===O_)return o.RED;if(r===jh)return o.RED_INTEGER;if(r===P_)return o.RG;if(r===Kh)return o.RG_INTEGER;if(r===Qh)return o.RGBA_INTEGER;if(r===ru||r===su||r===ou||r===lu)if(h===Ne)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gh||r===_h||r===vh||r===Sh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xh||r===Mh||r===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===xh||r===Mh)return h===Ne?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===yh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Eh||r===Th||r===bh||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Eh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Th)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ch)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ph)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uu||r===Bh||r===Fh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===uu)return h===Ne?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===z_||r===Ih||r===Hh||r===Gh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===uu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Bn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Na({vertexShader:gb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new gu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sb extends xs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,S=null,x=null,y=null,R=null;const w=new vb,M=i.getContextAttributes();let g=null,P=null;const O=[],U=[],G=new Pe;let H=null;const B=new ai;B.viewport=new Ye;const K=new ai;K.viewport=new Ye;const C=[B,K],A=new Hx;let F=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let dt=O[q];return dt===void 0&&(dt=new jf,O[q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(q){let dt=O[q];return dt===void 0&&(dt=new jf,O[q]=dt),dt.getGripSpace()},this.getHand=function(q){let dt=O[q];return dt===void 0&&(dt=new jf,O[q]=dt),dt.getHandSpace()};function it(q){const dt=U.indexOf(q.inputSource);if(dt===-1)return;const St=O[dt];St!==void 0&&(St.update(q.inputSource,q.frame,m||h),St.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<O.length;q++){const dt=U[q];dt!==null&&(U[q]=null,O[q].disconnect(dt))}F=null,ut=null,w.reset(),e.setRenderTarget(g),y=null,x=null,S=null,l=null,P=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Tt=null,Rt=null;M.depth&&(Rt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?_s:fs,Tt=M.stencil?gs:pr);const Kt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(Kt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new mr(x.textureWidth,x.textureHeight,{format:pi,type:ta,depthTexture:new Z_(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new mr(y.framebufferWidth,y.framebufferHeight,{format:pi,type:ta,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(q){for(let dt=0;dt<q.removed.length;dt++){const St=q.removed[dt],Tt=U.indexOf(St);Tt>=0&&(U[Tt]=null,O[Tt].disconnect(St))}for(let dt=0;dt<q.added.length;dt++){const St=q.added[dt];let Tt=U.indexOf(St);if(Tt===-1){for(let Kt=0;Kt<O.length;Kt++)if(Kt>=U.length){U.push(St),Tt=Kt;break}else if(U[Kt]===null){U[Kt]=St,Tt=Kt;break}if(Tt===-1)break}const Rt=O[Tt];Rt&&Rt.connect(St)}}const W=new rt,at=new rt;function Z(q,dt,St){W.setFromMatrixPosition(dt.matrixWorld),at.setFromMatrixPosition(St.matrixWorld);const Tt=W.distanceTo(at),Rt=dt.projectionMatrix.elements,Kt=St.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),xe=Rt[14]/(Rt[10]+1),Re=(Rt[9]+1)/Rt[5],ie=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],dn=(Kt[8]+1)/Kt[0],re=Pt*z,ce=Pt*dn,kt=Tt/(-z+dn),Ce=kt*-z;if(dt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Xt=Pt+kt,D=xe+kt,E=re-Ce,tt=ce+(Tt-Ce),ct=Re*xe/D*Xt,vt=ie*xe/D*Xt;q.projectionMatrix.makePerspective(E,tt,ct,vt,Xt,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xt(q,dt){dt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(dt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let dt=q.near,St=q.far;w.texture!==null&&(w.depthNear>0&&(dt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),A.near=K.near=B.near=dt,A.far=K.far=B.far=St,(F!==A.near||ut!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,ut=A.far),B.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,A.layers.mask=B.layers.mask|K.layers.mask;const Tt=q.parent,Rt=A.cameras;xt(A,Tt);for(let Kt=0;Kt<Rt.length;Kt++)xt(Rt[Kt],Tt);Rt.length===2?Z(A,B,K):A.projectionMatrix.copy(B.projectionMatrix),L(q,A,Tt)};function L(q,dt,St){St===null?q.matrix.copy(dt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(dt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let nt=null;function Et(q,dt){if(_=dt.getViewerPose(m||h),R=dt,_!==null){const St=_.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Tt=!1;St.length!==A.cameras.length&&(A.cameras.length=0,Tt=!0);for(let Pt=0;Pt<St.length;Pt++){const xe=St[Pt];let Re=null;if(y!==null)Re=y.getViewport(xe);else{const z=S.getViewSubImage(x,xe);Re=z.viewport,Pt===0&&(e.setRenderTargetTextures(P,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(P))}let ie=C[Pt];ie===void 0&&(ie=new ai,ie.layers.enable(Pt),ie.viewport=new Ye,C[Pt]=ie),ie.matrix.fromArray(xe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(xe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Re.x,Re.y,Re.width,Re.height),Pt===0&&(A.matrix.copy(ie.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Tt===!0&&A.cameras.push(ie)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&S){const Pt=S.getDepthInformation(St[0]);Pt&&Pt.isValid&&Pt.texture&&w.init(e,Pt,l.renderState)}}for(let St=0;St<O.length;St++){const Tt=U[St],Rt=O[St];Tt!==null&&Rt!==void 0&&Rt.update(Tt,dt,m||h)}nt&&nt(q,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),R=null}const At=new j_;At.setAnimationLoop(Et),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const rr=new ea,xb=new Je;function Mb(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,X_(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,P,O,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(M,g):g.isMeshToonMaterial?(c(M,g),S(M,g)):g.isMeshPhongMaterial?(c(M,g),_(M,g)):g.isMeshStandardMaterial?(c(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,U)):g.isMeshMatcapMaterial?(c(M,g),R(M,g)):g.isMeshDepthMaterial?c(M,g):g.isMeshDistanceMaterial?(c(M,g),w(M,g)):g.isMeshNormalMaterial?c(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?p(M,g,P,O):g.isSpriteMaterial?m(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===zn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===zn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const P=e.get(g),O=P.envMap,U=P.envMapRotation;O&&(M.envMap.value=O,rr.copy(U),rr.x*=-1,rr.y*=-1,rr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),M.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(rr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function p(M,g,P,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*P,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function m(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function S(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,P){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const P=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const U=O.program;r.uniformBlockBinding(P,U)}function m(P,O){let U=l[P.id];U===void 0&&(R(P),U=_(P),l[P.id]=U,P.addEventListener("dispose",M));const G=O.program;r.updateUBOMapping(P,G);const H=e.render.frame;c[P.id]!==H&&(x(P),c[P.id]=H)}function _(P){const O=S();P.__bindingPointIndex=O;const U=o.createBuffer(),G=P.__size,H=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,G,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function S(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],U=P.uniforms,G=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,B=U.length;H<B;H++){const K=Array.isArray(U[H])?U[H]:[U[H]];for(let C=0,A=K.length;C<A;C++){const F=K[C];if(y(F,H,C,G)===!0){const ut=F.__offset,it=Array.isArray(F.value)?F.value:[F.value];let mt=0;for(let ht=0;ht<it.length;ht++){const W=it[ht],at=w(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,ut+mt,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,mt),mt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,O,U,G){const H=P.value,B=O+"_"+U;if(G[B]===void 0)return typeof H=="number"||typeof H=="boolean"?G[B]=H:G[B]=H.clone(),!0;{const K=G[B];if(typeof H=="number"||typeof H=="boolean"){if(K!==H)return G[B]=H,!0}else if(K.equals(H)===!1)return K.copy(H),!0}return!1}function R(P){const O=P.uniforms;let U=0;const G=16;for(let B=0,K=O.length;B<K;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let A=0,F=C.length;A<F;A++){const ut=C[A],it=Array.isArray(ut.value)?ut.value:[ut.value];for(let mt=0,ht=it.length;mt<ht;mt++){const W=it[mt],at=w(W),Z=U%G,xt=Z%at.boundary,L=Z+xt;U+=xt,L!==0&&G-L<at.storage&&(U+=G-L),ut.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=U,U+=at.storage}}}const H=U%G;return H>0&&(U+=G-H),P.__size=U,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:p,update:m,dispose:g}}class Eb{constructor(e={}){const{canvas:i=ix(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const R=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Ua,this.toneMappingExposure=1;const U=this;let G=!1,H=0,B=0,K=null,C=-1,A=null;const F=new Ye,ut=new Ye;let it=null;const mt=new Ae(0);let ht=0,W=i.width,at=i.height,Z=1,xt=null,L=null;const nt=new Ye(0,0,W,at),Et=new Ye(0,0,W,at);let At=!1;const q=new Y_;let dt=!1,St=!1;this.transmissionResolutionScale=1;const Tt=new Je,Rt=new Je,Kt=new rt,Pt=new Ye,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ie(){return K===null?Z:1}let z=r;function dn(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wh}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const X="webgl2";if(z=dn(X,b),z===null)throw dn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let re,ce,kt,Ce,Xt,D,E,tt,ct,vt,ft,Ht,wt,zt,de,yt,Bt,jt,Gt,Ft,ae,Yt,we,k;function Lt(){re=new NE(z),re.init(),Yt=new mb(z,re),ce=new AE(z,re,e,Yt),kt=new db(z,re),ce.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Ce=new zE(z),Xt=new tb,D=new pb(z,re,kt,Xt,ce,Yt,Ce),E=new CE(U),tt=new LE(U),ct=new Vx(z),we=new TE(z,ct),vt=new OE(z,ct,Ce,we),ft=new FE(z,vt,ct,Ce),Gt=new BE(z,ce,D),yt=new RE(Xt),Ht=new $T(U,E,tt,re,ce,we,yt),wt=new Mb(U,Xt),zt=new nb,de=new lb(re),jt=new EE(U,E,tt,kt,ft,y,p),Bt=new fb(U,ft,ce),k=new yb(z,Ce,ce,kt),Ft=new bE(z,re,Ce),ae=new PE(z,re,Ce),Ce.programs=Ht.programs,U.capabilities=ce,U.extensions=re,U.properties=Xt,U.renderLists=zt,U.shadowMap=Bt,U.state=kt,U.info=Ce}Lt();const st=new Sb(U,z);this.xr=st,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(W,at,!1))},this.getSize=function(b){return b.set(W,at)},this.setSize=function(b,X,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,at=X,i.width=Math.floor(b*Z),i.height=Math.floor(X*Z),$===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(W*Z,at*Z).floor()},this.setDrawingBufferSize=function(b,X,$){W=b,at=X,Z=$,i.width=Math.floor(b*$),i.height=Math.floor(X*$),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,X,$,Q){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,X,$,Q),kt.viewport(F.copy(nt).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(Et)},this.setScissor=function(b,X,$,Q){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,X,$,Q),kt.scissor(ut.copy(Et).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(b){kt.setScissorTest(At=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,$=!0){let Q=0;if(b){let Y=!1;if(K!==null){const Mt=K.texture.format;Y=Mt===Qh||Mt===Kh||Mt===jh}if(Y){const Mt=K.texture.type,bt=Mt===ta||Mt===pr||Mt===Ao||Mt===gs||Mt===Yh||Mt===Zh,Ot=jt.getClearColor(),Nt=jt.getClearAlpha(),$t=Ot.r,te=Ot.g,qt=Ot.b;bt?(R[0]=$t,R[1]=te,R[2]=qt,R[3]=Nt,z.clearBufferuiv(z.COLOR,0,R)):(w[0]=$t,w[1]=te,w[2]=qt,w[3]=Nt,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}X&&(Q|=z.DEPTH_BUFFER_BIT),$&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),jt.dispose(),zt.dispose(),de.dispose(),Xt.dispose(),E.dispose(),tt.dispose(),ft.dispose(),we.dispose(),k.dispose(),Ht.dispose(),st.dispose(),st.removeEventListener("sessionstart",Uo),st.removeEventListener("sessionend",Es),gi.stop()};function gt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const b=Ce.autoReset,X=Bt.enabled,$=Bt.autoUpdate,Q=Bt.needsUpdate,Y=Bt.type;Lt(),Ce.autoReset=b,Bt.enabled=X,Bt.autoUpdate=$,Bt.needsUpdate=Q,Bt.type=Y}function Dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const X=b.target;X.removeEventListener("dispose",Jt),Ie(X)}function Ie(b){$e(b),Xt.remove(b)}function $e(b){const X=Xt.get(b).programs;X!==void 0&&(X.forEach(function($){Ht.releaseProgram($)}),b.isShaderMaterial&&Ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,$,Q,Y,Mt){X===null&&(X=xe);const bt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=vu(b,X,$,Q,Y);kt.setMaterial(Q,bt);let Nt=$.index,$t=1;if(Q.wireframe===!0){if(Nt=vt.getWireframeAttribute($),Nt===void 0)return;$t=2}const te=$.drawRange,qt=$.attributes.position;let pe=te.start*$t,me=(te.start+te.count)*$t;Mt!==null&&(pe=Math.max(pe,Mt.start*$t),me=Math.min(me,(Mt.start+Mt.count)*$t)),Nt!==null?(pe=Math.max(pe,0),me=Math.min(me,Nt.count)):qt!=null&&(pe=Math.max(pe,0),me=Math.min(me,qt.count));const Fe=me-pe;if(Fe<0||Fe===1/0)return;we.setup(Y,Q,Ot,$,Nt);let ye,ee=Ft;if(Nt!==null&&(ye=ct.get(Nt),ee=ae,ee.setIndex(ye)),Y.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*ie()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(Y.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*ie()),Y.isLineSegments?ee.setMode(z.LINES):Y.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else Y.isPoints?ee.setMode(z.POINTS):Y.isSprite&&ee.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ee.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,nn=Y._multiDrawCounts,ge=Y._multiDrawCount,Un=Nt?ct.get(Nt).bytesPerElement:1,ri=Xt.get(Q).currentProgram.getUniforms();for(let bn=0;bn<ge;bn++)ri.setValue(z,"_gl_DrawID",bn),ee.render(Zt[bn]/Un,nn[bn])}else if(Y.isInstancedMesh)ee.renderInstances(pe,Fe,Y.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,nn=Math.min($.instanceCount,Zt);ee.renderInstances(pe,Fe,nn)}else ee.render(pe,Fe)};function Me(b,X,$){b.transparent===!0&&b.side===ji&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,en(b,X,$),b.side=La,b.needsUpdate=!0,en(b,X,$),b.side=ji):en(b,X,$)}this.compile=function(b,X,$=null){$===null&&($=b),g=de.get($),g.init(X),O.push(g),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),b!==$&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const Q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Mt=Y.material;if(Mt)if(Array.isArray(Mt))for(let bt=0;bt<Mt.length;bt++){const Ot=Mt[bt];Me(Ot,$,Y),Q.add(Ot)}else Me(Mt,$,Y),Q.add(Mt)}),g=O.pop(),Q},this.compileAsync=function(b,X,$=null){const Q=this.compile(b,X,$);return new Promise(Y=>{function Mt(){if(Q.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){Y(b);return}setTimeout(Mt,10)}re.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let En=null;function Tn(b){En&&En(b)}function Uo(){gi.stop()}function Es(){gi.start()}const gi=new j_;gi.setAnimationLoop(Tn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(b){En=b,st.setAnimationLoop(b),b===null?gi.stop():gi.start()},st.addEventListener("sessionstart",Uo),st.addEventListener("sessionend",Es),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,X,K),g=de.get(b,O.length),g.init(X),O.push(g),Rt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,dt=yt.init(this.clippingPlanes,St),M=zt.get(b,P.length),M.init(),P.push(M),st.enabled===!0&&st.isPresenting===!0){const Mt=U.xr.getDepthSensingMesh();Mt!==null&&_r(Mt,X,-1/0,U.sortObjects)}_r(b,X,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(xt,L),Re=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Re&&jt.addToRenderList(M,b),this.info.render.frame++,dt===!0&&yt.beginShadows();const $=g.state.shadowsArray;Bt.render($,b,X),dt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,Y=M.transmissive;if(g.setupLights(),X.isArrayCamera){const Mt=X.cameras;if(Y.length>0)for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];Lo(Q,Y,b,Nt)}Re&&jt.render(b);for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];Ts(M,b,Nt,Nt.viewport)}}else Y.length>0&&Lo(Q,Y,b,X),Re&&jt.render(b),Ts(M,b,X);K!==null&&B===0&&(D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(U,b,X),we.resetDefaultState(),C=-1,A=null,O.pop(),O.length>0?(g=O[O.length-1],dt===!0&&yt.setGlobalState(U.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function _r(b,X,$,Q){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){Q&&Pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);const bt=ft.update(b),Ot=b.material;Ot.visible&&M.push(b,bt,Ot,$,Pt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const bt=ft.update(b),Ot=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=bt.groups;for(let $t=0,te=Nt.length;$t<te;$t++){const qt=Nt[$t],pe=Ot[qt.materialIndex];pe&&pe.visible&&M.push(b,bt,pe,$,Pt.z,qt)}}else Ot.visible&&M.push(b,bt,Ot,$,Pt.z,null)}}const Mt=b.children;for(let bt=0,Ot=Mt.length;bt<Ot;bt++)_r(Mt[bt],X,$,Q)}function Ts(b,X,$,Q){const Y=b.opaque,Mt=b.transmissive,bt=b.transparent;g.setupLightsView($),dt===!0&&yt.setGlobalState(U.clippingPlanes,$),Q&&kt.viewport(F.copy(Q)),Y.length>0&&Fn(Y,X,$),Mt.length>0&&Fn(Mt,X,$),bt.length>0&&Fn(bt,X,$),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Lo(b,X,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new mr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Ro:ta,minFilter:hr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Mt=g.state.transmissionRenderTarget[Q.id],bt=Q.viewport||F;Mt.setSize(bt.z*U.transmissionResolutionScale,bt.w*U.transmissionResolutionScale);const Ot=U.getRenderTarget();U.setRenderTarget(Mt),U.getClearColor(mt),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),Re&&jt.render($);const Nt=U.toneMapping;U.toneMapping=Ua;const $t=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),dt===!0&&yt.setGlobalState(U.clippingPlanes,Q),Fn(b,$,Q),D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let qt=0,pe=X.length;qt<pe;qt++){const me=X[qt],Fe=me.object,ye=me.geometry,ee=me.material,Zt=me.group;if(ee.side===ji&&Fe.layers.test(Q.layers)){const nn=ee.side;ee.side=zn,ee.needsUpdate=!0,tn(Fe,$,Q,ye,ee,Zt),ee.side=nn,ee.needsUpdate=!0,te=!0}}te===!0&&(D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt))}U.setRenderTarget(Ot),U.setClearColor(mt,ht),$t!==void 0&&(Q.viewport=$t),U.toneMapping=Nt}function Fn(b,X,$){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Mt=b.length;Y<Mt;Y++){const bt=b[Y],Ot=bt.object,Nt=bt.geometry,$t=Q===null?bt.material:Q,te=bt.group;Ot.layers.test($.layers)&&tn(Ot,X,$,Nt,$t,te)}}function tn(b,X,$,Q,Y,Mt){b.onBeforeRender(U,X,$,Q,Y,Mt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(U,X,$,Q,b,Mt),Y.transparent===!0&&Y.side===ji&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,U.renderBufferDirect($,X,Q,Y,b,Mt),Y.side=La,Y.needsUpdate=!0,U.renderBufferDirect($,X,Q,Y,b,Mt),Y.side=ji):U.renderBufferDirect($,X,Q,Y,b,Mt),b.onAfterRender(U,X,$,Q,Y,Mt)}function en(b,X,$){X.isScene!==!0&&(X=xe);const Q=Xt.get(b),Y=g.state.lights,Mt=g.state.shadowsArray,bt=Y.state.version,Ot=Ht.getParameters(b,Y.state,Mt,X,$),Nt=Ht.getProgramCacheKey(Ot);let $t=Q.programs;Q.environment=b.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(b.isMeshStandardMaterial?tt:E).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,$t===void 0&&(b.addEventListener("dispose",Jt),$t=new Map,Q.programs=$t);let te=$t.get(Nt);if(te!==void 0){if(Q.currentProgram===te&&Q.lightsStateVersion===bt)return vr(b,Ot),te}else Ot.uniforms=Ht.getUniforms(b),b.onBeforeCompile(Ot,U),te=Ht.acquireProgram(Ot,Nt),$t.set(Nt,te),Q.uniforms=Ot.uniforms;const qt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=yt.uniform),vr(b,Ot),Q.needsLights=No(b),Q.lightsStateVersion=bt,Q.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=te,Q.uniformsList=null,te}function Ai(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=cu.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function vr(b,X){const $=Xt.get(b);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function vu(b,X,$,Q,Y){X.isScene!==!0&&(X=xe),D.resetTextureUnits();const Mt=X.fog,bt=Q.isMeshStandardMaterial?X.environment:null,Ot=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:vs,Nt=(Q.isMeshStandardMaterial?tt:E).get(Q.envMap||bt),$t=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qt=!!$.morphAttributes.position,pe=!!$.morphAttributes.normal,me=!!$.morphAttributes.color;let Fe=Ua;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Fe=U.toneMapping);const ye=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ee=ye!==void 0?ye.length:0,Zt=Xt.get(Q),nn=g.state.lights;if(dt===!0&&(St===!0||b!==A)){const Ve=b===A&&Q.id===C;yt.setState(Q,b,Ve)}let ge=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==nn.state.version||Zt.outputColorSpace!==Ot||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isBatchedMesh&&Zt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Zt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Zt.instancingMorph===!1&&Y.morphTexture!==null||Zt.envMap!==Nt||Q.fog===!0&&Zt.fog!==Mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==yt.numPlanes||Zt.numIntersection!==yt.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==te||Zt.morphTargets!==qt||Zt.morphNormals!==pe||Zt.morphColors!==me||Zt.toneMapping!==Fe||Zt.morphTargetsCount!==ee)&&(ge=!0):(ge=!0,Zt.__version=Q.version);let Un=Zt.currentProgram;ge===!0&&(Un=en(Q,X,Y));let ri=!1,bn=!1,ln=!1;const De=Un.getUniforms(),An=Zt.uniforms;if(kt.useProgram(Un.program)&&(ri=!0,bn=!0,ln=!0),Q.id!==C&&(C=Q.id,bn=!0),ri||A!==b){kt.buffers.depth.getReversed()?(Tt.copy(b.projectionMatrix),rx(Tt),sx(Tt),De.setValue(z,"projectionMatrix",Tt)):De.setValue(z,"projectionMatrix",b.projectionMatrix),De.setValue(z,"viewMatrix",b.matrixWorldInverse);const pn=De.map.cameraPosition;pn!==void 0&&pn.setValue(z,Kt.setFromMatrixPosition(b.matrixWorld)),ce.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&De.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,bn=!0,ln=!0)}if(Y.isSkinnedMesh){De.setOptional(z,Y,"bindMatrix"),De.setOptional(z,Y,"bindMatrixInverse");const Ve=Y.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),De.setValue(z,"boneTexture",Ve.boneTexture,D))}Y.isBatchedMesh&&(De.setOptional(z,Y,"batchingTexture"),De.setValue(z,"batchingTexture",Y._matricesTexture,D),De.setOptional(z,Y,"batchingIdTexture"),De.setValue(z,"batchingIdTexture",Y._indirectTexture,D),De.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&De.setValue(z,"batchingColorTexture",Y._colorsTexture,D));const vn=$.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Gt.update(Y,$,Un),(bn||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,De.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(An.envMap.value=Nt,An.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(An.envMapIntensity.value=X.environmentIntensity),bn&&(De.setValue(z,"toneMappingExposure",U.toneMappingExposure),Zt.needsLights&&Su(An,ln),Mt&&Q.fog===!0&&wt.refreshFogUniforms(An,Mt),wt.refreshMaterialUniforms(An,Q,Z,at,g.state.transmissionRenderTarget[b.id]),cu.upload(z,Ai(Zt),An,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(cu.upload(z,Ai(Zt),An,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&De.setValue(z,"center",Y.center),De.setValue(z,"modelViewMatrix",Y.modelViewMatrix),De.setValue(z,"normalMatrix",Y.normalMatrix),De.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ve=Q.uniformsGroups;for(let pn=0,Sr=Ve.length;pn<Sr;pn++){const Ln=Ve[pn];k.update(Ln,Un),k.bind(Ln,Un)}}return Un}function Su(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function No(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,X,$){Xt.get(b.texture).__webglTexture=X,Xt.get(b.depthTexture).__webglTexture=$;const Q=Xt.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const $=Xt.get(b);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};const Oa=z.createFramebuffer();this.setRenderTarget=function(b,X=0,$=0){K=b,H=X,B=$;let Q=!0,Y=null,Mt=!1,bt=!1;if(b){const Nt=Xt.get(b);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Nt.__hasExternalTextures)D.rebindTextures(b,Xt.get(b.texture).__webglTexture,Xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qt=b.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Xt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const $t=b.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(bt=!0);const te=Xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(te[X])?Y=te[X][$]:Y=te[X],Mt=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?Y=Xt.get(b).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[$]:Y=te,F.copy(b.viewport),ut.copy(b.scissor),it=b.scissorTest}else F.copy(nt).multiplyScalar(Z).floor(),ut.copy(Et).multiplyScalar(Z).floor(),it=At;if($!==0&&(Y=Oa),kt.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&kt.drawBuffers(b,Y),kt.viewport(F),kt.scissor(ut),kt.setScissorTest(it),Mt){const Nt=Xt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,$)}else if(bt){const Nt=Xt.get(b.texture),$t=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,$,$t)}else if(b!==null&&$!==0){const Nt=Xt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nt.__webglTexture,$)}C=-1},this.readRenderTargetPixels=function(b,X,$,Q,Y,Mt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Nt=b.texture,$t=Nt.format,te=Nt.type;if(!ce.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-Q&&$>=0&&$<=b.height-Y&&z.readPixels(X,$,Q,Y,Yt.convert($t),Yt.convert(te),Mt)}finally{const Nt=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,X,$,Q,Y,Mt,bt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){const Nt=b.texture,$t=Nt.format,te=Nt.type;if(!ce.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-Q&&$>=0&&$<=b.height-Y){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);const qt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(X,$,Q,Y,Yt.convert($t),Yt.convert(te),0);const pe=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,pe);const me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ax(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(qt),z.deleteSync(me),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,$=0){b.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const Q=Math.pow(2,-$),Y=Math.floor(b.image.width*Q),Mt=Math.floor(b.image.height*Q),bt=X!==null?X.x:0,Ot=X!==null?X.y:0;D.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,bt,Ot,Y,Mt),kt.unbindTexture()};const bs=z.createFramebuffer(),Ri=z.createFramebuffer();this.copyTextureToTexture=function(b,X,$=null,Q=null,Y=0,Mt=null){b.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],X=arguments[2],Mt=arguments[3]||0,$=null),Mt===null&&(Y!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Y,Y=0):Mt=0);let bt,Ot,Nt,$t,te,qt,pe,me,Fe;const ye=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if($!==null)bt=$.max.x-$.min.x,Ot=$.max.y-$.min.y,Nt=$.isBox3?$.max.z-$.min.z:1,$t=$.min.x,te=$.min.y,qt=$.isBox3?$.min.z:0;else{const vn=Math.pow(2,-Y);bt=Math.floor(ye.width*vn),Ot=Math.floor(ye.height*vn),b.isDataArrayTexture?Nt=ye.depth:b.isData3DTexture?Nt=Math.floor(ye.depth*vn):Nt=1,$t=0,te=0,qt=0}Q!==null?(pe=Q.x,me=Q.y,Fe=Q.z):(pe=0,me=0,Fe=0);const ee=Yt.convert(X.format),Zt=Yt.convert(X.type);let nn;X.isData3DTexture?(D.setTexture3D(X,0),nn=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),nn=z.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),nn=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),Un=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ri=z.getParameter(z.UNPACK_SKIP_PIXELS),bn=z.getParameter(z.UNPACK_SKIP_ROWS),ln=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ye.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,te),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qt);const De=b.isDataArrayTexture||b.isData3DTexture,An=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const vn=Xt.get(b),Ve=Xt.get(X),pn=Xt.get(vn.__renderTarget),Sr=Xt.get(Ve.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,pn.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Ln=0;Ln<Nt;Ln++)De&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(b).__webglTexture,Y,qt+Ln),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(X).__webglTexture,Mt,Fe+Ln)),z.blitFramebuffer($t,te,bt,Ot,pe,me,bt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Xt.has(b)){const vn=Xt.get(b),Ve=Xt.get(X);kt.bindFramebuffer(z.READ_FRAMEBUFFER,bs),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ri);for(let pn=0;pn<Nt;pn++)De?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vn.__webglTexture,Y,qt+pn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vn.__webglTexture,Y),An?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.__webglTexture,Mt,Fe+pn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ve.__webglTexture,Mt),Y!==0?z.blitFramebuffer($t,te,bt,Ot,pe,me,bt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):An?z.copyTexSubImage3D(nn,Mt,pe,me,Fe+pn,$t,te,bt,Ot):z.copyTexSubImage2D(nn,Mt,pe,me,$t,te,bt,Ot);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(nn,Mt,pe,me,Fe,bt,Ot,Nt,ee,Zt,ye.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(nn,Mt,pe,me,Fe,bt,Ot,Nt,ee,ye.data):z.texSubImage3D(nn,Mt,pe,me,Fe,bt,Ot,Nt,ee,Zt,ye):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,pe,me,bt,Ot,ee,Zt,ye.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,pe,me,ye.width,ye.height,ee,ye.data):z.texSubImage2D(z.TEXTURE_2D,Mt,pe,me,bt,Ot,ee,Zt,ye);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Un),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ri),z.pixelStorei(z.UNPACK_SKIP_ROWS,bn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ln),Mt===0&&X.generateMipmaps&&z.generateMipmap(nn),kt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,$=null,Q=null,Y=0){return b.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,$,Q,Y)},this.initRenderTarget=function(b){Xt.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),kt.unbindTexture()},this.resetState=function(){H=0,B=0,K=null,kt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}function Tb(){let o=null;const e=new Lx,i=new ai(70,window.innerWidth/window.innerHeight,.01,20);i.position.set(0,1.6,0),e.add(i);const r=new Fx(16777215,12303359,1);r.position.set(.5,1,.25),e.add(r);const l=new Eb({antialias:!0,alpha:!0});l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.xr.enabled=!0;const c=new Ms(.1,.1,.1),h=new td({color:65280}),d=new Ti(c,h);e.add(d);const p=l.xr.getController(0);p.addEventListener("select",m),e.add(p);function m(){d.position.set(0,0,-.3).applyMatrix4(p.matrixWorld)}_();function _(){l.setAnimationLoop(S)}async function S(){d.rotation.x+=.01,d.rotation.y+=.01,l.render(e,i)}const x={domOverlay:{root:document.body}};async function y(){if(navigator.xr){if(o=await navigator.xr.requestSession("immersive-ar",x),o==null)throw new Error("Failed to start AR session");l.xr.setReferenceSpaceType("local"),l.xr.setSession(o)}else throw new Error("WebXR is not supported")}return{startARSession:y}}function bb(){const o=Tb();return Ki.jsxs(Ki.Fragment,{children:[Ki.jsx("h1",{children:"HelloAR"}),Ki.jsx("button",{onClick:o.startARSession,children:"START!"})]})}function Ab(){return Ki.jsx(Ki.Fragment,{children:Ki.jsx(bb,{})})}dS.createRoot(document.getElementById("root")).render(Ki.jsx(sS.StrictMode,{children:Ki.jsx(Ab,{})}));
