(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=r.a.createContext({}),m=function(t){var e=r.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):b(b({},e),t)),n},g=function(t){var e=m(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,o=c(t,["components","mdxType","originalType","parentName"]),g=m(n),u=a,p=g["".concat(i,".").concat(u)]||g[u]||d[u]||l;return n?r.a.createElement(p,b(b({ref:e},o),{},{components:n})):r.a.createElement(p,b({ref:e},o))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var b={};for(var c in e)hasOwnProperty.call(e,c)&&(b[c]=e[c]);b.originalType=t,b.mdxType="string"==typeof t?t:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return b})),n.d(e,"default",(function(){return o}));var a=n(3),r=(n(0),n(121));const l={id:"configurationcommands",title:"Configuration Commands \u2699\ufe0f",slug:"/configuration-commands"},i={unversionedId:"configurationcommands",id:"configurationcommands",isDocsHomePage:!1,title:"Configuration Commands \u2699\ufe0f",description:"Table of Commands",source:"@site/docs\\configurationcommands.md",slug:"/configuration-commands",permalink:"/docs/configuration-commands",editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/configurationcommands.md",version:"current",sidebar:"someSidebar",previous:{title:"Anti-Spam Feature",permalink:"/docs/anti-spam-feature"},next:{title:"Moderation Commands \ud83d\udee1\ufe0f",permalink:"/docs/moderation-commands"}},b=[{value:"Table of Commands",id:"table-of-commands",children:[]}],c={toc:b};function o(t){let{components:e,...n}=t;return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"table-of-commands"},"Table of Commands"),Object(r.b)("p",null,"All commands are listed in alphabetical order! Each command comes with an example and usage description, as well as permission needed to run the command and timeout between each usage in seconds!"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Command"),Object(r.b)("th",{parentName:"tr",align:"center"},"Example"),Object(r.b)("th",{parentName:"tr",align:null},"Usage"),Object(r.b)("th",{parentName:"tr",align:null},"Permission"),Object(r.b)("th",{parentName:"tr",align:null},"Timeout"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/antispam settings"),Object(r.b)("td",{parentName:"tr",align:"center"},"/antispam settings ","[messages][time]"," ","[timegap][timeout]"),Object(r.b)("td",{parentName:"tr",align:null},"Alter the default settings of the Anti-Spam feature."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Messages"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/antispam similarity"),Object(r.b)("td",{parentName:"tr",align:"center"},"/antispam similarity ","[choice][percentage]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the Text Similarity section of the Anti-Spam feature."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Messages"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo xpsystem"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo xpsystem"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the XP System."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo logging"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo logging"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Logging Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo welcome"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo welcome"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Welcome Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo joinroles"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo joinroles"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Join Roles Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo fivemstatus"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo fivemstatus"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Five M Status Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo roleselect"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo roleselect"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Role Select Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo verification"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo verification"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Five M Status Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo suggestion"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo suggestion"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Suggestion Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo djfeature"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo djfeature"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the DJ Music Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo voicecount"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo voicecount"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Voice Count Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo createvc"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo createvc"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Join to Create VC Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/configinfo antispam"),Object(r.b)("td",{parentName:"tr",align:"center"},"/configinfo antispam"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current configuration for the Anti-Spam Feature."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/dj role"),Object(r.b)("td",{parentName:"tr",align:"center"},"/dj role ","[@role]"),Object(r.b)("td",{parentName:"tr",align:null},"Set your DJ role for the music feature!"),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/fivemstatus config"),Object(r.b)("td",{parentName:"tr",align:"center"},"/fivemstatus config ","[#channel][serverip]"),Object(r.b)("td",{parentName:"tr",align:null},"Set the Five M status channel and server IP for the guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/fivemstatus embed"),Object(r.b)("td",{parentName:"tr",align:"center"},"/fivemstatus embed ","[title][description]"),Object(r.b)("td",{parentName:"tr",align:null},"Customise the description of the Five M status embed."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/fivemstatus resend"),Object(r.b)("td",{parentName:"tr",align:"center"},"/fivemstatus resend"),Object(r.b)("td",{parentName:"tr",align:null},"Customise the description of the Five M status embed."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/joinrole add"),Object(r.b)("td",{parentName:"tr",align:"center"},"/joinrole add ","[@role]"),Object(r.b)("td",{parentName:"tr",align:null},"Add a role to give to users on join to this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/joinrole check"),Object(r.b)("td",{parentName:"tr",align:"center"},"/joinrole check"),Object(r.b)("td",{parentName:"tr",align:null},"Check the roles that are given to users on join to this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/joinrole remove"),Object(r.b)("td",{parentName:"tr",align:"center"},"/joinrole remove ","[@role]"),Object(r.b)("td",{parentName:"tr",align:null},"Remove a role to give to users on join from this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/logging channel"),Object(r.b)("td",{parentName:"tr",align:"center"},"/logging channel ","[#channel]"),Object(r.b)("td",{parentName:"tr",align:null},"Set the logs channel for the guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/roleselection add"),Object(r.b)("td",{parentName:"tr",align:"center"},"/roleselection add ","[menuname][@role]"," ","[description][emoji]"),Object(r.b)("td",{parentName:"tr",align:null},"Add a role into the role selection menu."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/roleselection check"),Object(r.b)("td",{parentName:"tr",align:"center"},"/roleselection check"),Object(r.b)("td",{parentName:"tr",align:null},"Check the current role selection menus in your guild!"),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/roleselection create"),Object(r.b)("td",{parentName:"tr",align:"center"},"/roleselection create ","[menuname][menudescription]"),Object(r.b)("td",{parentName:"tr",align:null},"Create a new role selection menu."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/roleselection delete"),Object(r.b)("td",{parentName:"tr",align:"center"},"/roleselection delete ","[menuname]"),Object(r.b)("td",{parentName:"tr",align:null},"Delete a currently existing role selection menu in this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/roleselection spawn"),Object(r.b)("td",{parentName:"tr",align:"center"},"/roleselection menu ","[menuname]"),Object(r.b)("td",{parentName:"tr",align:null},"Generate a role selection menu!"),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/roleselection remove"),Object(r.b)("td",{parentName:"tr",align:"center"},"/roleselection remove ","[menuname][@role]"),Object(r.b)("td",{parentName:"tr",align:null},"Remove a role into the role selection menu."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/suggestion channel"),Object(r.b)("td",{parentName:"tr",align:"center"},"/suggestion channel ","[#channel]"),Object(r.b)("td",{parentName:"tr",align:null},"Set the welcome channel for the guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle antispam"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle antispam ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the Anti-Spam feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle createvc"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle createvc ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the the create voice chat feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle djonly"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle djonly ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle DJ for the music feature!"),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle fivemstatus"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle fivemstatus ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the Five M Status feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle logging"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle logging ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the log feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle suggestion"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle suggestion ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the suggestion feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle verification"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle verification ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the Verification feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle voicecount"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle voicecount ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the voice chat member count feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle welcome"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle welcome ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the welcome feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/toggle xpsystem"),Object(r.b)("td",{parentName:"tr",align:"center"},"/toggle xpsystem ","[true/false]"),Object(r.b)("td",{parentName:"tr",align:null},"Toggle the XP system feature for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/verification menu"),Object(r.b)("td",{parentName:"tr",align:"center"},"/verification menu"),Object(r.b)("td",{parentName:"tr",align:null},"Post the verificaiton menu for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Guild"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/verification settings"),Object(r.b)("td",{parentName:"tr",align:"center"},"/verification settings ","[description][roletogive]"),Object(r.b)("td",{parentName:"tr",align:null},"Adjust the Verification feature settings for this guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/welcome channel"),Object(r.b)("td",{parentName:"tr",align:"center"},"/welcome channel ","[#channel]"),Object(r.b)("td",{parentName:"tr",align:null},"Set the welcome channel for the guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/welcome embed"),Object(r.b)("td",{parentName:"tr",align:"center"},"/welcome embed ","[title][description]"),Object(r.b)("td",{parentName:"tr",align:null},"Customise some features of the welcome embed for your guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/xpsystem roleadd"),Object(r.b)("td",{parentName:"tr",align:"center"},"/xpsystem roleadd ","[level][@role]"),Object(r.b)("td",{parentName:"tr",align:null},"Add a role to give to users when reaching a level threshold."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/xpsystem roleremove"),Object(r.b)("td",{parentName:"tr",align:"center"},"/xpsystem roleremove ","[@role]"),Object(r.b)("td",{parentName:"tr",align:null},"Remove a role to give to users when reaching a level threshold."),Object(r.b)("td",{parentName:"tr",align:null},"Manage Roles"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"/xpsystem settings"),Object(r.b)("td",{parentName:"tr",align:"center"},"/xpsystem settings ","[xptype][xpmin]"," ","[xpmax][xpmultiplier]"," ","[#levelupchannel][intervalvc]"," ","[#afkvc]"),Object(r.b)("td",{parentName:"tr",align:null},"Customise settings for the XP system feature for your guild."),Object(r.b)("td",{parentName:"tr",align:null},"Administrator"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")))))}o.isMDXComponent=!0}}]);