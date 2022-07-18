(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(117)),l={id:"xpsystem",title:"XP System",slug:"/xp-system"},o={unversionedId:"xpsystem",id:"xpsystem",isDocsHomePage:!1,title:"XP System",description:"Enabling the XP System",source:"@site/docs\\xpsystem.md",slug:"/xp-system",permalink:"/docs/xp-system",editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/xpsystem.md",version:"current",sidebar:"someSidebar",previous:{title:"Contact Us",permalink:"/docs/contact-us"},next:{title:"Logging Feature",permalink:"/docs/logging-feature"}},c=[{value:"Enabling the XP System",id:"enabling-the-xp-system",children:[]},{value:"Configuring the XP System",id:"configuring-the-xp-system",children:[]},{value:"Configuring role level rewards",id:"configuring-role-level-rewards",children:[]}],s={toc:c};function m(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"enabling-the-xp-system"},"Enabling the XP System"),Object(i.b)("p",null,'By default, the XP System is toggled off. Firstly, use the "/xpsystemtoggle" command within your guild returning true to enable (or false to disable).'),Object(i.b)("p",null,"An Example of toggling the XP System:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(179).default})),Object(i.b)("h2",{id:"configuring-the-xp-system"},"Configuring the XP System"),Object(i.b)("p",null,'Next you need to configure the XP system for your guild! You can do this using the "/xpsystemsettings" command alongside 6 arguments that you must fill in. Below is a table describing each.'),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Argument Name"),Object(i.b)("th",{parentName:"tr",align:"center"},"Example"),Object(i.b)("th",{parentName:"tr",align:null},"Explanation"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"xpmin"),Object(i.b)("td",{parentName:"tr",align:"center"},"5"),Object(i.b)("td",{parentName:"tr",align:null},"The minimum threshold of XP that should be given per message and per interval in voice chat.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"xpmax"),Object(i.b)("td",{parentName:"tr",align:"center"},"25"),Object(i.b)("td",{parentName:"tr",align:null},"The maximum threshold of XP that should be given per message and per interval in voice chat.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"xpmultiplier"),Object(i.b)("td",{parentName:"tr",align:"center"},"50"),Object(i.b)("td",{parentName:"tr",align:null},"This is the multiplier that each level should follow using a logarithmic equation. The higher the number, the more XP will be needed per rank! For example, at multiplier 50, lvl 1 requires 50 XP, lvl 2 requires 175 XP, lvl 3 requires 350 XP.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"levelupchannel"),Object(i.b)("td",{parentName:"tr",align:"center"},"#\ud83c\udf7bmain-lounge"),Object(i.b)("td",{parentName:"tr",align:null},"This is where level up messages will be posted into one a user reaches the next level threshold.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"intervalvc"),Object(i.b)("td",{parentName:"tr",align:"center"},"60"),Object(i.b)("td",{parentName:"tr",align:null},"This is the interval (in seconds!) at which XP is added to a user that is in a voice chat. For example 60 means that every 60 seconds, the user will receive XP whilst in the VC.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"afkvc"),Object(i.b)("td",{parentName:"tr",align:"center"},"#\ud83d\udd57AFK"),Object(i.b)("td",{parentName:"tr",align:null},"This should be set to an AFK channel where gaining XP is blacklisted due to inactivity so no XP is given.")))),Object(i.b)("p",null,"An example of setting the XP system settings:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(180).default})),Object(i.b)("h2",{id:"configuring-role-level-rewards"},"Configuring role level rewards"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},'You can use the command "/xprewards" in order to check what the current level role rewards are!'))),Object(i.b)("p",null,'An additional feature, is to give roles to users once they cross a certain level threshold. This is very easily configured, using the "/xproleadd" command. The two arguments for this command are the role to give to the user and the level at which this should occur. Alternatively, you can use "/xproleremove" with a role argument to remove a role reward.'),Object(i.b)("p",null,"An example of adding an XP Role reward:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(181).default})),Object(i.b)("p",null,"And... that's it! The XP System is now fully configured and requires no other configuration."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"There are many more commands that can be used within the XP System including leaderboards and more! Check these out within the Commands category of this documentation."))))}m.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=m(n),u=a,p=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(p,o(o({ref:t},s),{},{components:n})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xpsystemtoggle-example-1a1c1912e746ae753a2b10dc42d64cfa.png"},180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xpsystemsettings-example-d3e0d864d9c97577f4a8bb7bb57e5082.png"},181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xpsystemroleadd-example-af6754b64c10711d2ceff7a5d788ddf7.png"}}]);