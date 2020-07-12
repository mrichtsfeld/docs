(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),s=(n(0),n(199)),a={id:"themes",title:"Themes",sidebar_label:"Themes",description:"How to build a theme for Standard Notes.",keywords:["standard notes","notes app","end-to-end encryption","build an extension","theme"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},i={id:"extensions/themes",isDocsHomePage:!1,title:"Themes",description:"How to build a theme for Standard Notes.",source:"@site/docs/extensions/themes.md",permalink:"/extensions/themes",editUrl:"https://github.com/standardnotes/docs/edit/master/docs/extensions/themes.md",lastUpdatedAt:1593569680,sidebar_label:"Themes",sidebar:"someSidebar",previous:{title:"Local Setup",permalink:"/extensions/local-setup"},next:{title:"Actions",permalink:"/extensions/actions"}},l=[{value:"Creating a theme",id:"creating-a-theme",children:[{value:"Reloading Mobile Themes",id:"reloading-mobile-themes",children:[]}]},{value:"Licensing",id:"licensing",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Themes allow you to customize the look and feel of the Standard Notes app on all platforms."),Object(s.b)("p",null,"You can view the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/sn-extensions/solarized-dark-theme"}),"source code")," of our official themes in order to best understand how to create your own theme."),Object(s.b)("p",null,"For how to install a theme, please see ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/extensions/publishing"}),"Publishing"),"."),Object(s.b)("h2",{id:"creating-a-theme"},"Creating a theme"),Object(s.b)("p",null,"Themes are simple CSS files which override a few variables to style the look of the application. ",Object(s.b)("strong",{parentName:"p"},"CSS themes will automatically work on mobile.")," Your CSS file should contain content similar to the below."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Note that font and font sizes do not apply to mobile; only desktop/web.")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),":root {\n  --sn-stylekit-base-font-size: 14px;\n\n  --sn-stylekit-font-size-p: 1rem;\n  --sn-stylekit-font-size-editor: 1.21rem;\n\n  --sn-stylekit-font-size-h6: 0.8rem;\n  --sn-stylekit-font-size-h5: 0.9rem;\n  --sn-stylekit-font-size-h4: 1rem;\n  --sn-stylekit-font-size-h3: 1.1rem;\n  --sn-stylekit-font-size-h2: 1.2rem;\n  --sn-stylekit-font-size-h1: 1.3rem;\n\n  --sn-stylekit-neutral-color: #989898;\n  --sn-stylekit-neutral-contrast-color: white;\n\n  --sn-stylekit-info-color: #086dd6;\n  --sn-stylekit-info-contrast-color: white;\n\n  --sn-stylekit-success-color: #2b9612;\n  --sn-stylekit-success-contrast-color: white;\n\n  --sn-stylekit-warning-color: #f6a200;\n  --sn-stylekit-warning-contrast-color: white;\n\n  --sn-stylekit-danger-color: #f80324;\n  --sn-stylekit-danger-contrast-color: white;\n\n  --sn-stylekit-shadow-color: #c8c8c8;\n  --sn-stylekit-background-color: white;\n  --sn-stylekit-border-color: #e3e3e3;\n  --sn-stylekit-foreground-color: black;\n\n  --sn-stylekit-contrast-background-color: #f6f6f6;\n  --sn-stylekit-contrast-foreground-color: #2e2e2e;\n  --sn-stylekit-contrast-border-color: #e3e3e3;\n\n  --sn-stylekit-secondary-background-color: #f6f6f6;\n  --sn-stylekit-secondary-foreground-color: #2e2e2e;\n  --sn-stylekit-secondary-border-color: #e3e3e3;\n\n  --sn-stylekit-secondary-contrast-background-color: #e3e3e3;\n  --sn-stylekit-secondary-contrast-foreground-color: #2e2e2e;\n  --sn-styleki--secondary-contrast-border-color: #a2a2a2;\n\n  --sn-stylekit-editor-background-color: var(--sn-stylekit-background-color);\n  --sn-stylekit-editor-foreground-color: var(--sn-stylekit-foreground-color);\n\n  --sn-stylekit-paragraph-text-color: #454545;\n\n  --sn-stylekit-input-placeholder-color: rgb(168, 168, 168);\n  --sn-stylekit-input-border-color: #e3e3e3;\n\n  --sn-stylekit-scrollbar-thumb-color: #dfdfdf;\n  --sn-stylekit-scrollbar-track-border-color: #e7e7e7;\n\n  --sn-stylekit-general-border-radius: 2px;\n\n  --sn-stylekit-monospace-font: 'Ubuntu Mono', courier, monospace;\n  --sn-stylekit-sans-serif-font: -apple-system, BlinkMacSystemFont, 'Segoe UI',\n    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n    'Helvetica Neue', sans-serif;\n}\n")),Object(s.b)("p",null,"In order to get SN to display a dock icon for your theme (a circle in the lower right corner of the app that allows you to quickly toggle themes), add the following payload into the your ext.json file when ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/extensions/publishing"}),"publishing your theme"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"dock_icon": {\n   "type": "circle",\n   "background_color": "#086DD6",\n   "foreground_color": "#ffffff",\n   "border_color": "#086DD6"\n}\n')),Object(s.b)("h3",{id:"reloading-mobile-themes"},"Reloading Mobile Themes"),Object(s.b)("p",null,"The mobile app will download a theme once and cache it indefinitely. If you're installing your own mobile theme and make changes, you can press and hold on the theme name in the list to bring up the option to re-download the theme from the server."),Object(s.b)("h2",{id:"licensing"},"Licensing"),Object(s.b)("p",null,"Our themes are provided open-source mainly for educational and quality purposes. You're free to install them on your own servers, but please consider subscribing to ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://standardnotes.org/extensions"}),"Standard Notes Extended")," to help sustain future development of the Standard Notes ecosystem."))}d.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,m=u["".concat(a,".").concat(b)]||u[b]||p[b]||s;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);