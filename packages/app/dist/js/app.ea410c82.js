(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({list:"list",login:"login",mark:"mark",retro:"retro"}[e]||e)+"."+{list:"911e34bc",login:"b3d4b97b",mark:"5619428b",retro:"dc7f12d1","chunk-3e334b5b":"06011578","chunk-5b390329":"0cd2c56e","chunk-4821208a":"c0b2ebbd","chunk-7f00f2f6":"efd79f95","chunk-01922260":"6aed3401","chunk-05176ac2":"12d77766","chunk-5fcaede5":"9b99db9b","chunk-2d217a2f":"fefed326","chunk-2787c235":"a9f5be91","chunk-278a2b7e":"3c3715c2","chunk-5c2524fd":"b06be77f","chunk-1594828c":"4add50ce"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={login:1,retro:1,"chunk-3e334b5b":1,"chunk-5b390329":1,"chunk-4821208a":1,"chunk-7f00f2f6":1,"chunk-01922260":1,"chunk-05176ac2":1,"chunk-2787c235":1,"chunk-278a2b7e":1,"chunk-5c2524fd":1,"chunk-1594828c":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({list:"list",login:"login",mark:"mark",retro:"retro"}[e]||e)+"."+{list:"31d6cfe0",login:"df9a13e6",mark:"31d6cfe0",retro:"fe93a913","chunk-3e334b5b":"4ab85a59","chunk-5b390329":"c4dc1c86","chunk-4821208a":"b800cc3d","chunk-7f00f2f6":"fe9e5d6d","chunk-01922260":"f47f692d","chunk-05176ac2":"a8a4eeff","chunk-5fcaede5":"31d6cfe0","chunk-2d217a2f":"31d6cfe0","chunk-2787c235":"74a5565f","chunk-278a2b7e":"d832308b","chunk-5c2524fd":"7f2979b8","chunk-1594828c":"51c37e57"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],f.parentNode.removeChild(f),r(c)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"105b":function(e,t,r){"use strict";(function(e){r.d(t,"i",(function(){return b})),r.d(t,"f",(function(){return v})),r.d(t,"b",(function(){return O})),r.d(t,"g",(function(){return k})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return j})),r.d(t,"j",(function(){return P})),r.d(t,"a",(function(){return x})),r.d(t,"h",(function(){return R}));r("df26");var n=r("c8ff"),o=r("bc4a"),a=r.n(o),c=(r("e809"),r("3193"),Object({NODE_ENV:"production",BASE_URL:"/"})),u=c.VUE_APP_API_KEY,i=c.VUE_APP_AUTH_DOMAIN,s=c.VUE_APP_DATABASE_URL,l=c.VUE_APP_PROJECT_ID,p=c.VUE_APP_STORAGE_BUCKET,f=c.VUE_APP_MESSAGING_SENDER_ID,m=c.VUE_APP_APP_ID;console.log(e);var d={apiKey:u,authDomain:i,databaseURL:s,projectId:l,storageBucket:p,messagingSenderId:f,appId:m};a.a.initializeApp(d);var h=a.a.auth(),b=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.signOut();case 2:return t=e.sent,localStorage.removeItem("accessToken"),localStorage.removeItem("uid"),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=new a.a.auth.GoogleAuthProvider;g.addScope("https://www.googleapis.com/auth/contacts.readonly");var v=function(){return h.signInWithPopup(g)},O=function(e,t){return h.signInWithEmailAndPassword(e,t)},k=function(e){return h.onAuthStateChanged(e)},w=function(e){return a.a.database().ref("marks/".concat(e))},y=function(){return a.a.database().ref("retros")},j=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.database().ref("retros/".concat(t)).once("value");case 3:return r=e.sent,e.abrupt("return",r.val());case 7:throw e.prev=7,e.t0=e["catch"](0),console.warn(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.database().ref("retros/".concat(t)).update(r);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e["catch"](0),console.warn(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.push(r);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e["catch"](0),console.warn("on retro create error",e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.database().ref("retros/".concat(t)).remove();case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e["catch"](0),console.warn("on retro remove error",e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}).call(this,r("17ad"))},"56d7":function(e,t,r){"use strict";r.r(t);r("dde3"),r("c8a0"),r("3cdf"),r("5c85");var n=r("9869"),o=r("105b"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.isAuth?r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",{on:{click:function(t){return e.$router.push("/list")}}},[e._v("\n        RetrEwoks\n      ")])]),r("v-spacer"),r("v-avatar",[e.userProfile.photoURL?r("img",{attrs:{src:e.userProfile.photoURL,alt:"user avatar"}}):e._e()]),r("v-btn",{attrs:{flat:""},on:{click:e.signOut}},[r("span",{staticClass:"mr-2"},[e._v("Log out")])])],1):e._e(),r("v-content",{staticClass:"main-content"},[r("router-view")],1)],1)},c=[],u=(r("e125"),r("2e73"),r("0c1f"),r("ce72")),i=r("9ce4");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"App",methods:l({},Object(i["b"])(["signOut"])),computed:l({},Object(i["c"])(["isAuth","userProfile"]))},f=p,m=(r("fddc"),r("2be6")),d=r("16aa"),h=r.n(d),b=r("9293"),g=r("c123"),v=r("7265"),O=r("c60d"),k=r("d6cb"),w=r("1806"),y=r("abc0"),j=Object(m["a"])(f,a,c,!1,null,"1102c6f4",null),P=j.exports;h()(j,{VApp:b["a"],VAvatar:g["a"],VBtn:v["a"],VContent:O["a"],VSpacer:k["a"],VToolbar:w["a"],VToolbarTitle:y["a"]});var x=r("5f2b");n["a"].use(x["a"]);var R=new x["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",meta:{auth:!1},component:function(){return r.e("login").then(r.bind(null,"21f3"))}},{path:"/list",name:"list",component:function(){return r.e("list").then(r.bind(null,"7cac"))}},{path:"/retros/:id",name:"retro",component:function(){return r.e("retro").then(r.bind(null,"ade4"))}},{path:"/mark/create/:type",name:"mark",component:function(){return r.e("mark").then(r.bind(null,"8c6c"))}},{path:"/retros/share/:id",name:"share",component:function(){return r.e("mark").then(r.bind(null,"210b"))}}]}),E=(r("df26"),r("c8ff")),A=(r("ae66"),{loginForm:{email:"",password:""},userProfile:{},tokenError:"",error:!1,loading:!1,isAuth:!1}),_={loginError:function(){return{message:A.tokenError.message,stateError:A.error}},isAuth:function(){return A.isAuth},userProfile:function(){return A.userProfile}},S={updateLoginForm:function(e,t){var r=t.key,n=t.value;A.loginForm[r]=n},setToken:function(e,t){var r=t.uid,n=t.ra;localStorage.setItem("accessToken",n),localStorage.setItem("uid",r),R.replace("/list"),A.isAuth=!0},putAuth:function(){A.isAuth=!0},setGoogleUser:function(e,t){var r=t.displayName,n=t.email,o=t.photoURL,a=t.uid;A.userProfile={displayName:r,email:n,photoURL:o,uid:a}},setTokenError:function(e,t){A.tokenError={message:t.message},A.error=!0},setLoading:function(){A.loading=!A.loading},hideError:function(){A.tokenError="",A.error=!1},setLogOut:function(){A.isAuth=!1}},D={signOut:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(o["i"])();case 3:r("setLogOut"),R.replace("/login");case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),googleAuth:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(o["f"])();case 3:return n=e.sent,a=n.user,e.next=7,r("setGoogleUser",a);case 7:return e.next=9,r("putAuth",a);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),signIn:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("setLoading"),e.prev=2,n=A.loginForm,a=n.email,c=n.password,e.next=6,Object(o["b"])(a,c);case 6:return u=e.sent,i=u.user,e.next=10,r("setToken",i);case 10:return e.next=12,r("putAuth",i);case 12:return e.next=15,r("setLoading");case 15:e.next=23;break;case 17:return e.prev=17,e.t0=e["catch"](2),e.next=21,r("setTokenError",e.t0);case 21:return e.next=23,r("setLoading");case 23:case"end":return e.stop()}}),e,null,[[2,17]])})));function t(t){return e.apply(this,arguments)}return t}()},I={state:A,getters:_,mutations:S,actions:D};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={marks:[],markForm:{text:""},retroId:""},U={marks:function(){var e=Object(o["c"])(L.retroId);return e.on("value",(function(e){L.marks=e.val()})),L.marks}},N={setRetroId:function(){var e=R.currentRoute.params.id;L.retroId=e},updateMarkForm:function(e,t){var r=t.key,n=t.value;L.markForm[r]=n},clearState:function(){L.markForm={text:""}}},M={pushMark:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c,u,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.rootState.login,n=t.commit,a=r.userProfile,c=a.photoURL,u=a.displayName,i=R.currentRoute.params.type,s=Object(o["c"])(L.retroId),e.next=6,s.push(F({},L.markForm,{type:i,userAvatar:c,userName:u,id:L.retroId}));case 6:return e.next=8,R.replace("/retros/".concat(L.retroId));case 8:return e.next=10,n("clearState");case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},C={state:L,getters:U,mutations:N,actions:M};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G={retros:[],retroForm:{},roomForm:{title:"",date:new Date,isEdit:!1}},$={retros:function(){var e=Object(o["d"])();return e.on("value",(function(e){G.retros=e.val()})),G.retros},getRoom:function(){return G.roomForm}},K={updateRoomForm:function(e,t){var r=t.key,n=t.value;G.roomForm[r]=n},setRoom:function(e,t){G.roomForm=B({},t,{isEdit:!0})}},J={getRoom:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,Object(o["e"])(r);case 4:return a=e.sent,e.next=7,n("setRoom",B({},a,{id:r}));case 7:return e.next=9,n("openMenu","roomForm",{root:!0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.warn("get room failed",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateRoom:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,n=G.roomForm,a=n.date,c=n.title,u=n.id,e.prev=2,e.next=5,Object(o["j"])(u,{date:a,title:c});case 5:return G.roomForm={},e.next=8,r("closeDialog",{},{root:!0});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t){return e.apply(this,arguments)}return t}(),createRoom:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,n=G.roomForm,a=n.date,c=n.title,u=Object(o["d"])(),e.next=5,Object(o["a"])(u,{title:c,date:a});case 5:return G.roomForm={},e.next=8,r("closeDialog",{},{root:!0});case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),closeRoom:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,Object(o["h"])(r);case 4:n("setRemoveConfirm"),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](1),e.t0;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,r){return e.apply(this,arguments)}return t}()},q={state:G,getters:$,mutations:K,actions:J},H={isMenuOpen:!1,modalName:""},W={isMenuOpen:function(){return H.isMenuOpen},modalName:function(){return H.modalName}},z={openMenu:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";H.isMenuOpen=!H.isMenuOpen,H.modalName=t},toggleDialog:function(){H.isMenuOpen=!H.isMenuOpen}},Y={closeDialog:function(e){var t=e.commit;t("toggleDialog")}},Q={state:H,mutations:z,getters:W,actions:Y};n["a"].use(i["a"]);var X=new i["a"].Store({modules:{login:I,marks:C,retros:q,uix:Q}}),Z=X,ee=r("2b95");r("725c"),r("265f");n["a"].use(ee["a"],{iconfont:"fa"}),n["a"].config.productionTip=!1,new n["a"]({router:R,store:Z,render:function(e){return e(P)},mounted:function(){var e=this;Object(o["g"])((function(t){t?(e.$router.push("/list"),e.$store.commit("putAuth"),e.$store.commit("setGoogleUser",t)):e.$router.push("/login")}))}}).$mount("#app")},d392:function(e,t,r){},fddc:function(e,t,r){"use strict";var n=r("d392"),o=r.n(n);o.a}});
//# sourceMappingURL=app.ea410c82.js.map