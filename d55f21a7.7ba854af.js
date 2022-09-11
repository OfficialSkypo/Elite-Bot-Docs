(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(119)),a={id:"welcomefeature",title:"Welcome Feature",slug:"/welcome-feature"},l={unversionedId:"welcomefeature",id:"welcomefeature",isDocsHomePage:!1,title:"Welcome Feature",description:"Enabling the Welcome Feature",source:"@site/docs\\welcomefeature.md",slug:"/welcome-feature",permalink:"/docs/welcome-feature",editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/welcomefeature.md",version:"current",sidebar:"someSidebar",previous:{title:"Logging Feature",permalink:"/docs/logging-feature"},next:{title:"Join Roles",permalink:"/docs/join-roles"}},i=[{value:"Enabling the Welcome Feature",id:"enabling-the-welcome-feature",children:[]},{value:"Configuring the Welcome Feature",id:"configuring-the-welcome-feature",children:[]}],u={toc:i};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"enabling-the-welcome-feature"},"Enabling the Welcome Feature"),Object(c.b)("p",null,'By default, the Welcome feature is toggled off. Firstly, use the "/toggle welcome" command within your guild returning true to enable (or false to disable).'),Object(c.b)("p",null,"An Example of toggling the Welcome feature:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:n(194).default})),Object(c.b)("h2",{id:"configuring-the-welcome-feature"},"Configuring the Welcome Feature"),Object(c.b)("p",null,"Next you need to configure the Welcome Feature for your guild! "),Object(c.b)("p",null,'Firstly, use the "/welcomechannel" command which conists of one argument which should be the channel you wish the bot to send user join messages to!'),Object(c.b)("p",null,"An example of setting the welcome channel:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:n(195).default})),Object(c.b)("p",null,'Next, use the "/welcomeembed" command which consists of two arguments, one being the title that the welcome embed message should have, and the second being the description that the welcome embed message should be set to.'),Object(c.b)("p",null,"An example of setting the welcome embed:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:n(196).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:n(197).default})),Object(c.b)("p",null,"And... that's it! The Welcome Feature is now fully configured and requires no other configuration."))}s.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),b=r,p=m["".concat(a,".").concat(b)]||m[b]||f[b]||c;return n?o.a.createElement(p,l(l({ref:t},u),{},{components:n})):o.a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/welcometoggle-example-cf9e63651f4d70a70aa116fce250263c.png"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/welcomechannel-example-4bd7eb5fa785718c639bc31c08407a20.png"},196:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/welcomeembed-example-7bcc3e2d1c769a625ed43017a8550598.png"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/welcomefeature-embed-e18bc2759d1151384c7eff7cb87cbe6b.png"}}]);