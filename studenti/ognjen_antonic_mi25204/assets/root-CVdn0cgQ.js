import{R as br,a as xe,q as nn,p as D,L as he,t as We,w as Bc,v as Yc,M as Jc,x as Kc,S as Zc,y as Qc,O as ep,i as np}from"./chunk-JMJ3UQ3L-DA7t_x44.js";import"./types-DVY-JLIj.js";function ir(t,i){(i==null||i>t.length)&&(i=t.length);for(var s=0,o=Array(i);s<i;s++)o[s]=t[s];return o}function tp(t){if(Array.isArray(t))return t}function rp(t){if(Array.isArray(t))return ir(t)}function ip(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function ap(t,i){for(var s=0;s<i.length;s++){var o=i[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Yl(o.key),o)}}function sp(t,i,s){return i&&ap(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ye(t,i){var s=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!s){if(Array.isArray(t)||(s=xr(t))||i){s&&(t=s);var o=0,u=function(){};return{s:u,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(b){throw b},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f,c=!0,d=!1;return{s:function(){s=s.call(t)},n:function(){var b=s.next();return c=b.done,b},e:function(b){d=!0,f=b},f:function(){try{c||s.return==null||s.return()}finally{if(d)throw f}}}}function q(t,i,s){return(i=Yl(i))in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}function op(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function up(t,i){var s=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var o,u,f,c,d=[],b=!0,_=!1;try{if(f=(s=s.call(t)).next,i===0){if(Object(s)!==s)return;b=!1}else for(;!(b=(o=f.call(s)).done)&&(d.push(o.value),d.length!==i);b=!0);}catch(A){_=!0,u=A}finally{try{if(!b&&s.return!=null&&(c=s.return(),Object(c)!==c))return}finally{if(_)throw u}}return d}}function lp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lo(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),s.push.apply(s,o)}return s}function I(t){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?Lo(Object(s),!0).forEach(function(o){q(t,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Lo(Object(s)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(s,o))})}return t}function tn(t,i){return tp(t)||up(t,i)||xr(t,i)||lp()}function se(t){return rp(t)||op(t)||xr(t)||fp()}function cp(t,i){if(typeof t!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var o=s.call(t,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function Yl(t){var i=cp(t,"string");return typeof i=="symbol"?i:i+""}function Ze(t){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ze(t)}function xr(t,i){if(t){if(typeof t=="string")return ir(t,i);var s={}.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?ir(t,i):void 0}}var Go=function(){},kr={},Jl={},Kl=null,Zl={mark:Go,measure:Go};try{typeof window<"u"&&(kr=window),typeof document<"u"&&(Jl=document),typeof MutationObserver<"u"&&(Kl=MutationObserver),typeof performance<"u"&&(Zl=performance)}catch{}var pp=kr.navigator||{},Xo=pp.userAgent,Wo=Xo===void 0?"":Xo,ve=kr,V=Jl,Uo=Kl,Ue=Zl;ve.document;var de=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Ql=~Wo.indexOf("MSIE")||~Wo.indexOf("Trident/"),Ve,mp=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,dp=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ef={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},hp={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},nf=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],ne="classic",qe="duotone",tf="sharp",rf="sharp-duotone",af="chisel",sf="etch",of="graphite",uf="jelly",lf="jelly-duo",ff="jelly-fill",cf="mosaic",pf="notdog",mf="notdog-duo",df="pixel",hf="slab",vf="slab-duo",yf="slab-press",gf="slab-press-duo",bf="thumbprint",xf="utility",kf="utility-duo",_f="utility-fill",wf="vellum",Ef="whiteboard",vp="Classic",yp="Duotone",gp="Sharp",bp="Sharp Duotone",xp="Chisel",kp="Etch",_p="Graphite",wp="Jelly",Ep="Jelly Duo",Ap="Jelly Fill",Sp="Mosaic",Ip="Notdog",Pp="Notdog Duo",jp="Pixel",Op="Slab",Cp="Slab Duo",zp="Slab Press",Rp="Slab Press Duo",Dp="Thumbprint",Np="Utility",Fp="Utility Duo",Tp="Utility Fill",qp="Vellum",Mp="Whiteboard",Af=[ne,qe,tf,rf,af,sf,of,uf,lf,ff,cf,pf,mf,df,hf,vf,yf,gf,bf,xf,kf,_f,wf,Ef];Ve={},q(q(q(q(q(q(q(q(q(q(Ve,ne,vp),qe,yp),tf,gp),rf,bp),af,xp),sf,kp),of,_p),uf,wp),lf,Ep),ff,Ap),q(q(q(q(q(q(q(q(q(q(Ve,cf,Sp),pf,Ip),mf,Pp),df,jp),hf,Op),vf,Cp),yf,zp),gf,Rp),bf,Dp),xf,Np),q(q(q(q(Ve,kf,Fp),_f,Tp),wf,qp),Ef,Mp);var $p={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Lp={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Gp=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Xp={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Sf=["fak","fa-kit","fakd","fa-kit-duotone"],Vo={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Wp=["kit"],Up="kit",Vp="kit-duotone",Hp="Kit",Bp="Kit Duotone";q(q({},Up,Hp),Vp,Bp);var Yp={kit:{"fa-kit":"fak"}},Jp={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Kp={kit:{fak:"fa-kit"}},Ho={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},He,Be={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Qp="classic",em="duotone",nm="sharp",tm="sharp-duotone",rm="chisel",im="etch",am="graphite",sm="jelly",om="jelly-duo",um="jelly-fill",lm="mosaic",fm="notdog",cm="notdog-duo",pm="pixel",mm="slab",dm="slab-duo",hm="slab-press",vm="slab-press-duo",ym="thumbprint",gm="utility",bm="utility-duo",xm="utility-fill",km="vellum",_m="whiteboard",wm="Classic",Em="Duotone",Am="Sharp",Sm="Sharp Duotone",Im="Chisel",Pm="Etch",jm="Graphite",Om="Jelly",Cm="Jelly Duo",zm="Jelly Fill",Rm="Mosaic",Dm="Notdog",Nm="Notdog Duo",Fm="Pixel",Tm="Slab",qm="Slab Duo",Mm="Slab Press",$m="Slab Press Duo",Lm="Thumbprint",Gm="Utility",Xm="Utility Duo",Wm="Utility Fill",Um="Vellum",Vm="Whiteboard";He={},q(q(q(q(q(q(q(q(q(q(He,Qp,wm),em,Em),nm,Am),tm,Sm),rm,Im),im,Pm),am,jm),sm,Om),om,Cm),um,zm),q(q(q(q(q(q(q(q(q(q(He,lm,Rm),fm,Dm),cm,Nm),pm,Fm),mm,Tm),dm,qm),hm,Mm),vm,$m),ym,Lm),gm,Gm),q(q(q(q(He,bm,Xm),xm,Wm),km,Um),_m,Vm);var Hm="kit",Bm="kit-duotone",Ym="Kit",Jm="Kit Duotone";q(q({},Hm,Ym),Bm,Jm);var Km={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Zm={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ar={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Qm=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],If=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Zp,Qm),ed=["solid","regular","light","thin","duotone","brands","semibold"],Pf=[1,2,3,4,5,6,7,8,9,10],nd=Pf.concat([11,12,13,14,15,16,17,18,19,20]),td=["aw","fw","pull-left","pull-right"],rd=[].concat(se(Object.keys(Zm)),ed,td,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Be.GROUP,Be.SWAP_OPACITY,Be.PRIMARY,Be.SECONDARY]).concat(Pf.map(function(t){return"".concat(t,"x")})).concat(nd.map(function(t){return"w-".concat(t)})),id={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},pe="___FONT_AWESOME___",sr=16,jf="fa",Of="svg-inline--fa",ke="data-fa-i2svg",or="data-fa-pseudo-element",ad="data-fa-pseudo-element-pending",_r="data-prefix",wr="data-icon",Bo="fontawesome-i2svg",sd="async",od=["HTML","HEAD","STYLE","SCRIPT"],Cf=["::before","::after",":before",":after"],zf=(function(){try{return!0}catch{return!1}})();function Me(t){return new Proxy(t,{get:function(s,o){return o in s?s[o]:s[ne]}})}var Rf=I({},ef);Rf[ne]=I(I(I(I({},{"fa-duotone":"duotone"}),ef[ne]),Vo.kit),Vo["kit-duotone"]);var ud=Me(Rf),ur=I({},Xp);ur[ne]=I(I(I(I({},{duotone:"fad"}),ur[ne]),Ho.kit),Ho["kit-duotone"]);var Yo=Me(ur),lr=I({},ar);lr[ne]=I(I({},lr[ne]),Kp.kit);var Er=Me(lr),fr=I({},Km);fr[ne]=I(I({},fr[ne]),Yp.kit);Me(fr);var ld=mp,Df="fa-layers-text",fd=dp,cd=I({},$p);Me(cd);var pd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pn=hp,md=[].concat(se(Wp),se(rd)),Re=ve.FontAwesomeConfig||{};function dd(t){var i=V.querySelector("script["+t+"]");if(i)return i.getAttribute(t)}function hd(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(V&&typeof V.querySelector=="function"){var vd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vd.forEach(function(t){var i=tn(t,2),s=i[0],o=i[1],u=hd(dd(s));u!=null&&(Re[o]=u)})}var Nf={styleDefault:"solid",familyDefault:ne,cssPrefix:jf,replacementClass:Of,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Re.familyPrefix&&(Re.cssPrefix=Re.familyPrefix);var Ie=I(I({},Nf),Re);Ie.autoReplaceSvg||(Ie.observeMutations=!1);var N={};Object.keys(Nf).forEach(function(t){Object.defineProperty(N,t,{enumerable:!0,set:function(s){Ie[t]=s,De.forEach(function(o){return o(N)})},get:function(){return Ie[t]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(i){Ie.cssPrefix=i,De.forEach(function(s){return s(N)})},get:function(){return Ie.cssPrefix}});ve.FontAwesomeConfig=N;var De=[];function yd(t){return De.push(t),function(){De.splice(De.indexOf(t),1)}}var we=sr,oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gd(t){if(!(!t||!de)){var i=V.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=t;for(var s=V.head.childNodes,o=null,u=s.length-1;u>-1;u--){var f=s[u],c=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(o=f)}return V.head.insertBefore(i,o),t}}var bd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jo(){for(var t=12,i="";t-- >0;)i+=bd[Math.random()*62|0];return i}function je(t){for(var i=[],s=(t||[]).length>>>0;s--;)i[s]=t[s];return i}function Ar(t){return t.classList?je(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(i){return i})}function Ff(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xd(t){return Object.keys(t||{}).reduce(function(i,s){return i+"".concat(s,'="').concat(Ff(t[s]),'" ')},"").trim()}function rn(t){return Object.keys(t||{}).reduce(function(i,s){return i+"".concat(s,": ").concat(t[s].trim(),";")},"")}function Sr(t){return t.size!==oe.size||t.x!==oe.x||t.y!==oe.y||t.rotate!==oe.rotate||t.flipX||t.flipY}function kd(t){var i=t.transform,s=t.containerWidth,o=t.iconWidth,u={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),b={transform:"".concat(f," ").concat(c," ").concat(d)},_={transform:"translate(".concat(o/2*-1," -256)")};return{outer:u,inner:b,path:_}}function _d(t){var i=t.transform,s=t.width,o=s===void 0?sr:s,u=t.height,f=u===void 0?sr:u,c="";return Ql?c+="translate(".concat(i.x/we-o/2,"em, ").concat(i.y/we-f/2,"em) "):c+="translate(calc(-50% + ".concat(i.x/we,"em), calc(-50% + ").concat(i.y/we,"em)) "),c+="scale(".concat(i.size/we*(i.flipX?-1:1),", ").concat(i.size/we*(i.flipY?-1:1),") "),c+="rotate(".concat(i.rotate,"deg) "),c}var wd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Tf(){var t=jf,i=Of,s=N.cssPrefix,o=N.replacementClass,u=wd;if(s!==t||o!==i){var f=new RegExp("\\.".concat(t,"\\-"),"g"),c=new RegExp("\\--".concat(t,"\\-"),"g"),d=new RegExp("\\.".concat(i),"g");u=u.replace(f,".".concat(s,"-")).replace(c,"--".concat(s,"-")).replace(d,".".concat(o))}return u}var Ko=!1;function jn(){N.autoAddCss&&!Ko&&(gd(Tf()),Ko=!0)}var Ed={mixout:function(){return{dom:{css:Tf,insertCss:jn}}},hooks:function(){return{beforeDOMElementCreation:function(){jn()},beforeI2svg:function(){jn()}}}},me=ve||{};me[pe]||(me[pe]={});me[pe].styles||(me[pe].styles={});me[pe].hooks||(me[pe].hooks={});me[pe].shims||(me[pe].shims=[]);var ae=me[pe],qf=[],Mf=function(){V.removeEventListener("DOMContentLoaded",Mf),Qe=1,qf.map(function(i){return i()})},Qe=!1;de&&(Qe=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Qe||V.addEventListener("DOMContentLoaded",Mf));function Ad(t){de&&(Qe?setTimeout(t,0):qf.push(t))}function $e(t){var i=t.tag,s=t.attributes,o=s===void 0?{}:s,u=t.children,f=u===void 0?[]:u;return typeof t=="string"?Ff(t):"<".concat(i," ").concat(xd(o),">").concat(f.map($e).join(""),"</").concat(i,">")}function Zo(t,i,s){if(t&&t[i]&&t[i][s])return{prefix:i,iconName:s,icon:t[i][s]}}var On=function(i,s,o,u){var f=Object.keys(i),c=f.length,d=s,b,_,A;for(o===void 0?(b=1,A=i[f[0]]):(b=0,A=o);b<c;b++)_=f[b],A=d(A,i[_],_,i);return A};function $f(t){return se(t).length!==1?null:t.codePointAt(0).toString(16)}function Qo(t){return Object.keys(t).reduce(function(i,s){var o=t[s],u=!!o.icon;return u?i[o.iconName]=o.icon:i[s]=o,i},{})}function cr(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=s.skipHooks,u=o===void 0?!1:o,f=Qo(i);typeof ae.hooks.addPack=="function"&&!u?ae.hooks.addPack(t,Qo(i)):ae.styles[t]=I(I({},ae.styles[t]||{}),f),t==="fas"&&cr("fa",i)}var Fe=ae.styles,Sd=ae.shims,Lf=Object.keys(Er),Id=Lf.reduce(function(t,i){return t[i]=Object.keys(Er[i]),t},{}),Ir=null,Gf={},Xf={},Wf={},Uf={},Vf={};function Pd(t){return~md.indexOf(t)}function jd(t,i){var s=i.split("-"),o=s[0],u=s.slice(1).join("-");return o===t&&u!==""&&!Pd(u)?u:null}var Hf=function(){var i=function(f){return On(Fe,function(c,d,b){return c[b]=On(d,f,{}),c},{})};Gf=i(function(u,f,c){if(f[3]&&(u[f[3]]=c),f[2]){var d=f[2].filter(function(b){return typeof b=="number"});d.forEach(function(b){u[b.toString(16)]=c})}return u}),Xf=i(function(u,f,c){if(u[c]=c,f[2]){var d=f[2].filter(function(b){return typeof b=="string"});d.forEach(function(b){u[b]=c})}return u}),Vf=i(function(u,f,c){var d=f[2];return u[c]=c,d.forEach(function(b){u[b]=c}),u});var s="far"in Fe||N.autoFetchSvg,o=On(Sd,function(u,f){var c=f[0],d=f[1],b=f[2];return d==="far"&&!s&&(d="fas"),typeof c=="string"&&(u.names[c]={prefix:d,iconName:b}),typeof c=="number"&&(u.unicodes[c.toString(16)]={prefix:d,iconName:b}),u},{names:{},unicodes:{}});Wf=o.names,Uf=o.unicodes,Ir=an(N.styleDefault,{family:N.familyDefault})};yd(function(t){Ir=an(t.styleDefault,{family:N.familyDefault})});Hf();function Pr(t,i){return(Gf[t]||{})[i]}function Od(t,i){return(Xf[t]||{})[i]}function be(t,i){return(Vf[t]||{})[i]}function Bf(t){return Wf[t]||{prefix:null,iconName:null}}function Cd(t){var i=Uf[t],s=Pr("fas",t);return i||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function ye(){return Ir}var Yf=function(){return{prefix:null,iconName:null,rest:[]}};function zd(t){var i=ne,s=Lf.reduce(function(o,u){return o[u]="".concat(N.cssPrefix,"-").concat(u),o},{});return Af.forEach(function(o){(t.includes(s[o])||t.some(function(u){return Id[o].includes(u)}))&&(i=o)}),i}function an(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.family,o=s===void 0?ne:s,u=ud[o][t];if(o===qe&&!t)return"fad";var f=Yo[o][t]||Yo[o][u],c=t in ae.styles?t:null,d=f||c||null;return d}function Rd(t){var i=[],s=null;return t.forEach(function(o){var u=jd(N.cssPrefix,o);u?s=u:o&&i.push(o)}),{iconName:s,rest:i}}function eu(t){return t.sort().filter(function(i,s,o){return o.indexOf(i)===s})}var nu=If.concat(Sf);function sn(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.skipLookups,o=s===void 0?!1:s,u=null,f=eu(t.filter(function(P){return nu.includes(P)})),c=eu(t.filter(function(P){return!nu.includes(P)})),d=f.filter(function(P){return u=P,!nf.includes(P)}),b=tn(d,1),_=b[0],A=_===void 0?null:_,E=zd(f),S=I(I({},Rd(c)),{},{prefix:an(A,{family:E})});return I(I(I({},S),Td({values:t,family:E,styles:Fe,config:N,canonical:S,givenPrefix:u})),Dd(o,u,S))}function Dd(t,i,s){var o=s.prefix,u=s.iconName;if(t||!o||!u)return{prefix:o,iconName:u};var f=i==="fa"?Bf(u):{},c=be(o,u);return u=f.iconName||c||u,o=f.prefix||o,o==="far"&&!Fe.far&&Fe.fas&&!N.autoFetchSvg&&(o="fas"),{prefix:o,iconName:u}}var Nd=Af.filter(function(t){return t!==ne||t!==qe}),Fd=Object.keys(ar).filter(function(t){return t!==ne}).map(function(t){return Object.keys(ar[t])}).flat();function Td(t){var i=t.values,s=t.family,o=t.canonical,u=t.givenPrefix,f=u===void 0?"":u,c=t.styles,d=c===void 0?{}:c,b=t.config,_=b===void 0?{}:b,A=s===qe,E=i.includes("fa-duotone")||i.includes("fad"),S=_.familyDefault==="duotone",P=o.prefix==="fad"||o.prefix==="fa-duotone";if(!A&&(E||S||P)&&(o.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(o.prefix="fab"),!o.prefix&&Nd.includes(s)){var L=Object.keys(d).find(function(z){return Fd.includes(z)});if(L||_.autoFetchSvg){var $=Gp.get(s).defaultShortPrefixId;o.prefix=$,o.iconName=be(o.prefix,o.iconName)||o.iconName}}return(o.prefix==="fa"||f==="fa")&&(o.prefix=ye()||"fas"),o}var qd=(function(){function t(){ip(this,t),this.definitions={}}return sp(t,[{key:"add",value:function(){for(var s=this,o=arguments.length,u=new Array(o),f=0;f<o;f++)u[f]=arguments[f];var c=u.reduce(this._pullDefinitions,{});Object.keys(c).forEach(function(d){s.definitions[d]=I(I({},s.definitions[d]||{}),c[d]),cr(d,c[d]);var b=Er[ne][d];b&&cr(b,c[d]),Hf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,o){var u=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(u).map(function(f){var c=u[f],d=c.prefix,b=c.iconName,_=c.icon,A=_[2];s[d]||(s[d]={}),A.length>0&&A.forEach(function(E){typeof E=="string"&&(s[d][E]=_)}),s[d][b]=_}),s}}])})(),tu=[],Ae={},Se={},Md=Object.keys(Se);function $d(t,i){var s=i.mixoutsTo;return tu=t,Ae={},Object.keys(Se).forEach(function(o){Md.indexOf(o)===-1&&delete Se[o]}),tu.forEach(function(o){var u=o.mixout?o.mixout():{};if(Object.keys(u).forEach(function(c){typeof u[c]=="function"&&(s[c]=u[c]),Ze(u[c])==="object"&&Object.keys(u[c]).forEach(function(d){s[c]||(s[c]={}),s[c][d]=u[c][d]})}),o.hooks){var f=o.hooks();Object.keys(f).forEach(function(c){Ae[c]||(Ae[c]=[]),Ae[c].push(f[c])})}o.provides&&o.provides(Se)}),s}function pr(t,i){for(var s=arguments.length,o=new Array(s>2?s-2:0),u=2;u<s;u++)o[u-2]=arguments[u];var f=Ae[t]||[];return f.forEach(function(c){i=c.apply(null,[i].concat(o))}),i}function _e(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];var u=Ae[t]||[];u.forEach(function(f){f.apply(null,s)})}function ge(){var t=arguments[0],i=Array.prototype.slice.call(arguments,1);return Se[t]?Se[t].apply(null,i):void 0}function mr(t){t.prefix==="fa"&&(t.prefix="fas");var i=t.iconName,s=t.prefix||ye();if(i)return i=be(s,i)||i,Zo(Jf.definitions,s,i)||Zo(ae.styles,s,i)}var Jf=new qd,Ld=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,_e("noAuto")},Gd={i2svg:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return de?(_e("beforeI2svg",i),ge("pseudoElements2svg",i),ge("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Ad(function(){Wd({autoReplaceSvgRoot:s}),_e("watch",i)})}},Xd={icon:function(i){if(i===null)return null;if(Ze(i)==="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:be(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){var s=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],o=an(i[0]);return{prefix:o,iconName:be(o,s)||s}}if(typeof i=="string"&&(i.indexOf("".concat(N.cssPrefix,"-"))>-1||i.match(ld))){var u=sn(i.split(" "),{skipLookups:!0});return{prefix:u.prefix||ye(),iconName:be(u.prefix,u.iconName)||u.iconName}}if(typeof i=="string"){var f=ye();return{prefix:f,iconName:be(f,i)||i}}}},ie={noAuto:Ld,config:N,dom:Gd,parse:Xd,library:Jf,findIconDefinition:mr,toHtml:$e},Wd=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.autoReplaceSvgRoot,o=s===void 0?V:s;(Object.keys(ae.styles).length>0||N.autoFetchSvg)&&de&&N.autoReplaceSvg&&ie.dom.i2svg({node:o})};function on(t,i){return Object.defineProperty(t,"abstract",{get:i}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(o){return $e(o)})}}),Object.defineProperty(t,"node",{get:function(){if(de){var o=V.createElement("div");return o.innerHTML=t.html,o.children}}}),t}function Ud(t){var i=t.children,s=t.main,o=t.mask,u=t.attributes,f=t.styles,c=t.transform;if(Sr(c)&&s.found&&!o.found){var d=s.width,b=s.height,_={x:d/b/2,y:.5};u.style=rn(I(I({},f),{},{"transform-origin":"".concat(_.x+c.x/16,"em ").concat(_.y+c.y/16,"em")}))}return[{tag:"svg",attributes:u,children:i}]}function Vd(t){var i=t.prefix,s=t.iconName,o=t.children,u=t.attributes,f=t.symbol,c=f===!0?"".concat(i,"-").concat(N.cssPrefix,"-").concat(s):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},u),{},{id:c}),children:o}]}]}function Hd(t){var i=["aria-label","aria-labelledby","title","role"];return i.some(function(s){return s in t})}function jr(t){var i=t.icons,s=i.main,o=i.mask,u=t.prefix,f=t.iconName,c=t.transform,d=t.symbol,b=t.maskId,_=t.extra,A=t.watchable,E=A===void 0?!1:A,S=o.found?o:s,P=S.width,L=S.height,$=[N.replacementClass,f?"".concat(N.cssPrefix,"-").concat(f):""].filter(function(B){return _.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(_.classes).join(" "),z={children:[],attributes:I(I({},_.attributes),{},{"data-prefix":u,"data-icon":f,class:$,role:_.attributes.role||"img",viewBox:"0 0 ".concat(P," ").concat(L)})};!Hd(_.attributes)&&!_.attributes["aria-hidden"]&&(z.attributes["aria-hidden"]="true"),E&&(z.attributes[ke]="");var y=I(I({},z),{},{prefix:u,iconName:f,main:s,mask:o,maskId:b,transform:c,symbol:d,styles:I({},_.styles)}),W=o.found&&s.found?ge("generateAbstractMask",y)||{children:[],attributes:{}}:ge("generateAbstractIcon",y)||{children:[],attributes:{}},U=W.children,Y=W.attributes;return y.children=U,y.attributes=Y,d?Vd(y):Ud(y)}function ru(t){var i=t.content,s=t.width,o=t.height,u=t.transform,f=t.extra,c=t.watchable,d=c===void 0?!1:c,b=I(I({},f.attributes),{},{class:f.classes.join(" ")});d&&(b[ke]="");var _=I({},f.styles);Sr(u)&&(_.transform=_d({transform:u,width:s,height:o}),_["-webkit-transform"]=_.transform);var A=rn(_);A.length>0&&(b.style=A);var E=[];return E.push({tag:"span",attributes:b,children:[i]}),E}function Bd(t){var i=t.content,s=t.extra,o=I(I({},s.attributes),{},{class:s.classes.join(" ")}),u=rn(s.styles);u.length>0&&(o.style=u);var f=[];return f.push({tag:"span",attributes:o,children:[i]}),f}var Cn=ae.styles;function dr(t){var i=t[0],s=t[1],o=t.slice(4),u=tn(o,1),f=u[0],c=null;return Array.isArray(f)?c={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pn.SECONDARY),fill:"currentColor",d:f[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pn.PRIMARY),fill:"currentColor",d:f[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d:f}},{found:!0,width:i,height:s,icon:c}}var Yd={found:!1,width:512,height:512};function Jd(t,i){!zf&&!N.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(i,'" is missing.'))}function hr(t,i){var s=i;return i==="fa"&&N.styleDefault!==null&&(i=ye()),new Promise(function(o,u){if(s==="fa"){var f=Bf(t)||{};t=f.iconName||t,i=f.prefix||i}if(t&&i&&Cn[i]&&Cn[i][t]){var c=Cn[i][t];return o(dr(c))}Jd(t,i),o(I(I({},Yd),{},{icon:N.showMissingIcons&&t?ge("missingIconAbstract")||{}:{}}))})}var iu=function(){},vr=N.measurePerformance&&Ue&&Ue.mark&&Ue.measure?Ue:{mark:iu,measure:iu},ze='FA "7.3.0"',Kd=function(i){return vr.mark("".concat(ze," ").concat(i," begins")),function(){return Kf(i)}},Kf=function(i){vr.mark("".concat(ze," ").concat(i," ends")),vr.measure("".concat(ze," ").concat(i),"".concat(ze," ").concat(i," begins"),"".concat(ze," ").concat(i," ends"))},Or={begin:Kd,end:Kf},Je=function(){};function au(t){var i=t.getAttribute?t.getAttribute(ke):null;return typeof i=="string"}function Zd(t){var i=t.getAttribute?t.getAttribute(_r):null,s=t.getAttribute?t.getAttribute(wr):null;return i&&s}function Qd(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(N.replacementClass)}function eh(){if(N.autoReplaceSvg===!0)return Ke.replace;var t=Ke[N.autoReplaceSvg];return t||Ke.replace}function nh(t){return V.createElementNS("http://www.w3.org/2000/svg",t)}function th(t){return V.createElement(t)}function Zf(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.ceFn,o=s===void 0?t.tag==="svg"?nh:th:s;if(typeof t=="string")return V.createTextNode(t);var u=o(t.tag);Object.keys(t.attributes||[]).forEach(function(c){u.setAttribute(c,t.attributes[c])});var f=t.children||[];return f.forEach(function(c){u.appendChild(Zf(c,{ceFn:o}))}),u}function rh(t){var i=" ".concat(t.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}var Ke={replace:function(i){var s=i[0];if(s.parentNode)if(i[1].forEach(function(u){s.parentNode.insertBefore(Zf(u),s)}),s.getAttribute(ke)===null&&N.keepOriginalSource){var o=V.createComment(rh(s));s.parentNode.replaceChild(o,s)}else s.remove()},nest:function(i){var s=i[0],o=i[1];if(~Ar(s).indexOf(N.replacementClass))return Ke.replace(i);var u=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){var f=o[0].attributes.class.split(" ").reduce(function(d,b){return b===N.replacementClass||b.match(u)?d.toSvg.push(b):d.toNode.push(b),d},{toNode:[],toSvg:[]});o[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",f.toNode.join(" "))}var c=o.map(function(d){return $e(d)}).join(`
`);s.setAttribute(ke,""),s.innerHTML=c}};function su(t){t()}function Qf(t,i){var s=typeof i=="function"?i:Je;if(t.length===0)s();else{var o=su;N.mutateApproach===sd&&(o=ve.requestAnimationFrame||su),o(function(){var u=eh(),f=Or.begin("mutate");t.map(u),f(),s()})}}var Cr=!1;function ec(){Cr=!0}function yr(){Cr=!1}var en=null;function ou(t){if(Uo&&N.observeMutations){var i=t.treeCallback,s=i===void 0?Je:i,o=t.nodeCallback,u=o===void 0?Je:o,f=t.pseudoElementsCallback,c=f===void 0?Je:f,d=t.observeMutationsRoot,b=d===void 0?V:d;en=new Uo(function(_){if(!Cr){var A=ye();je(_).forEach(function(E){if(E.type==="childList"&&E.addedNodes.length>0&&!au(E.addedNodes[0])&&(N.searchPseudoElements&&c(E.target),s(E.target)),E.type==="attributes"&&E.target.parentNode&&N.searchPseudoElements&&c([E.target],!0),E.type==="attributes"&&au(E.target)&&~pd.indexOf(E.attributeName))if(E.attributeName==="class"&&Zd(E.target)){var S=sn(Ar(E.target)),P=S.prefix,L=S.iconName;E.target.setAttribute(_r,P||A),L&&E.target.setAttribute(wr,L)}else Qd(E.target)&&u(E.target)})}}),de&&en.observe(b,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ih(){en&&en.disconnect()}function ah(t){var i=t.getAttribute("style"),s=[];return i&&(s=i.split(";").reduce(function(o,u){var f=u.split(":"),c=f[0],d=f.slice(1);return c&&d.length>0&&(o[c]=d.join(":").trim()),o},{})),s}function sh(t){var i=t.getAttribute("data-prefix"),s=t.getAttribute("data-icon"),o=t.innerText!==void 0?t.innerText.trim():"",u=sn(Ar(t));return u.prefix||(u.prefix=ye()),i&&s&&(u.prefix=i,u.iconName=s),u.iconName&&u.prefix||(u.prefix&&o.length>0&&(u.iconName=Od(u.prefix,t.innerText)||Pr(u.prefix,$f(t.innerText))),!u.iconName&&N.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=t.firstChild.data)),u}function oh(t){var i=je(t.attributes).reduce(function(s,o){return s.name!=="class"&&s.name!=="style"&&(s[o.name]=o.value),s},{});return i}function uh(){return{iconName:null,prefix:null,transform:oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function uu(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=sh(t),o=s.iconName,u=s.prefix,f=s.rest,c=oh(t),d=pr("parseNodeAttributes",{},t),b=i.styleParser?ah(t):[];return I({iconName:o,prefix:u,transform:oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:b,attributes:c}},d)}var lh=ae.styles;function nc(t){var i=N.autoReplaceSvg==="nest"?uu(t,{styleParser:!1}):uu(t);return~i.extra.classes.indexOf(Df)?ge("generateLayersText",t,i):ge("generateSvgReplacementMutation",t,i)}function fh(){return[].concat(se(Sf),se(If))}function lu(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!de)return Promise.resolve();var s=V.documentElement.classList,o=function(E){return s.add("".concat(Bo,"-").concat(E))},u=function(E){return s.remove("".concat(Bo,"-").concat(E))},f=N.autoFetchSvg?fh():nf.concat(Object.keys(lh));f.includes("fa")||f.push("fa");var c=[".".concat(Df,":not([").concat(ke,"])")].concat(f.map(function(A){return".".concat(A,":not([").concat(ke,"])")})).join(", ");if(c.length===0)return Promise.resolve();var d=[];try{d=je(t.querySelectorAll(c))}catch{}if(d.length>0)o("pending"),u("complete");else return Promise.resolve();var b=Or.begin("onTree"),_=d.reduce(function(A,E){try{var S=nc(E);S&&A.push(S)}catch(P){zf||P.name==="MissingIcon"&&console.error(P)}return A},[]);return new Promise(function(A,E){Promise.all(_).then(function(S){Qf(S,function(){o("active"),o("complete"),u("pending"),typeof i=="function"&&i(),b(),A()})}).catch(function(S){b(),E(S)})})}function ch(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nc(t).then(function(s){s&&Qf([s],i)})}function ph(t){return function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(i||{}).icon?i:mr(i||{}),u=s.mask;return u&&(u=(u||{}).icon?u:mr(u||{})),t(o,I(I({},s),{},{mask:u}))}}var mh=function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.transform,u=o===void 0?oe:o,f=s.symbol,c=f===void 0?!1:f,d=s.mask,b=d===void 0?null:d,_=s.maskId,A=_===void 0?null:_,E=s.classes,S=E===void 0?[]:E,P=s.attributes,L=P===void 0?{}:P,$=s.styles,z=$===void 0?{}:$;if(i){var y=i.prefix,W=i.iconName,U=i.icon;return on(I({type:"icon"},i),function(){return _e("beforeDOMElementCreation",{iconDefinition:i,params:s}),jr({icons:{main:dr(U),mask:b?dr(b.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:W,transform:I(I({},oe),u),symbol:c,maskId:A,extra:{attributes:L,styles:z,classes:S}})})}},dh={mixout:function(){return{icon:ph(mh)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=lu,s.nodeCallback=ch,s}}},provides:function(i){i.i2svg=function(s){var o=s.node,u=o===void 0?V:o,f=s.callback,c=f===void 0?function(){}:f;return lu(u,c)},i.generateSvgReplacementMutation=function(s,o){var u=o.iconName,f=o.prefix,c=o.transform,d=o.symbol,b=o.mask,_=o.maskId,A=o.extra;return new Promise(function(E,S){Promise.all([hr(u,f),b.iconName?hr(b.iconName,b.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var L=tn(P,2),$=L[0],z=L[1];E([s,jr({icons:{main:$,mask:z},prefix:f,iconName:u,transform:c,symbol:d,maskId:_,extra:A,watchable:!0})])}).catch(S)})},i.generateAbstractIcon=function(s){var o=s.children,u=s.attributes,f=s.main,c=s.transform,d=s.styles,b=rn(d);b.length>0&&(u.style=b);var _;return Sr(c)&&(_=ge("generateAbstractTransformGrouping",{main:f,transform:c,containerWidth:f.width,iconWidth:f.width})),o.push(_||f.icon),{children:o,attributes:u}}}},hh={mixout:function(){return{layer:function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=o.classes,f=u===void 0?[]:u;return on({type:"layer"},function(){_e("beforeDOMElementCreation",{assembler:s,params:o});var c=[];return s(function(d){Array.isArray(d)?d.map(function(b){c=c.concat(b.abstract)}):c=c.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(se(f)).join(" ")},children:c}]})}}}},vh={mixout:function(){return{counter:function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};o.title;var u=o.classes,f=u===void 0?[]:u,c=o.attributes,d=c===void 0?{}:c,b=o.styles,_=b===void 0?{}:b;return on({type:"counter",content:s},function(){return _e("beforeDOMElementCreation",{content:s,params:o}),Bd({content:s.toString(),extra:{attributes:d,styles:_,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(se(f))}})})}}}},yh={mixout:function(){return{text:function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=o.transform,f=u===void 0?oe:u,c=o.classes,d=c===void 0?[]:c,b=o.attributes,_=b===void 0?{}:b,A=o.styles,E=A===void 0?{}:A;return on({type:"text",content:s},function(){return _e("beforeDOMElementCreation",{content:s,params:o}),ru({content:s,transform:I(I({},oe),f),extra:{attributes:_,styles:E,classes:["".concat(N.cssPrefix,"-layers-text")].concat(se(d))}})})}}},provides:function(i){i.generateLayersText=function(s,o){var u=o.transform,f=o.extra,c=null,d=null;if(Ql){var b=parseInt(getComputedStyle(s).fontSize,10),_=s.getBoundingClientRect();c=_.width/b,d=_.height/b}return Promise.resolve([s,ru({content:s.innerHTML,width:c,height:d,transform:u,extra:f,watchable:!0})])}}},tc=new RegExp('"',"ug"),fu=[1105920,1112319],cu=I(I(I(I({},{FontAwesome:{normal:"fas",400:"fas"}}),Lp),id),Jp),gr=Object.keys(cu).reduce(function(t,i){return t[i.toLowerCase()]=cu[i],t},{}),gh=Object.keys(gr).reduce(function(t,i){var s=gr[i];return t[i]=s[900]||se(Object.entries(s))[0][1],t},{});function bh(t){var i=t.replace(tc,"");return $f(se(i)[0]||"")}function xh(t){var i=t.getPropertyValue("font-feature-settings").includes("ss01"),s=t.getPropertyValue("content"),o=s.replace(tc,""),u=o.codePointAt(0),f=u>=fu[0]&&u<=fu[1],c=o.length===2?o[0]===o[1]:!1;return f||c||i}function kh(t,i){var s=t.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(i),u=isNaN(o)?"normal":o;return(gr[s]||{})[u]||gh[s]}function pu(t,i){var s="".concat(ad).concat(i.replace(":","-"));return new Promise(function(o,u){if(t.getAttribute(s)!==null)return o();var f=je(t.children),c=f.filter(function(te){return te.getAttribute(or)===i})[0],d=ve.getComputedStyle(t,i),b=d.getPropertyValue("font-family"),_=b.match(fd),A=d.getPropertyValue("font-weight"),E=d.getPropertyValue("content");if(c&&!_)return t.removeChild(c),o();if(_&&E!=="none"&&E!==""){var S=d.getPropertyValue("content"),P=kh(b,A),L=bh(S),$=_[0].startsWith("FontAwesome"),z=xh(d),y=Pr(P,L),W=y;if($){var U=Cd(L);U.iconName&&U.prefix&&(y=U.iconName,P=U.prefix)}if(y&&!z&&(!c||c.getAttribute(_r)!==P||c.getAttribute(wr)!==W)){t.setAttribute(s,W),c&&t.removeChild(c);var Y=uh(),B=Y.extra;B.attributes[or]=i,hr(y,P).then(function(te){var x=jr(I(I({},Y),{},{icons:{main:te,mask:Yf()},prefix:P,iconName:W,extra:B,watchable:!0})),T=V.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=x.map(function(C){return $e(C)}).join(`
`),t.removeAttribute(s),o()}).catch(u)}else o()}else o()})}function _h(t){return Promise.all([pu(t,"::before"),pu(t,"::after")])}function wh(t){return t.parentNode!==document.head&&!~od.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(or)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var Eh=function(i){return!!i&&Cf.some(function(s){return i.includes(s)})},Ah=function(i){if(!i)return[];var s=new Set,o=i.split(/,(?![^()]*\))/).map(function(b){return b.trim()});o=o.flatMap(function(b){return b.includes("(")?b:b.split(",").map(function(_){return _.trim()})});var u=Ye(o),f;try{for(u.s();!(f=u.n()).done;){var c=f.value;if(Eh(c)){var d=Cf.reduce(function(b,_){return b.replace(_,"")},c);d!==""&&d!=="*"&&s.add(d)}}}catch(b){u.e(b)}finally{u.f()}return s};function mu(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(de){var s;if(i)s=t;else if(N.searchPseudoElementsFullScan)s=t.querySelectorAll("*");else{var o=new Set,u=Ye(document.styleSheets),f;try{for(u.s();!(f=u.n()).done;){var c=f.value;try{var d=Ye(c.cssRules),b;try{for(d.s();!(b=d.n()).done;){var _=b.value,A=Ah(_.selectorText),E=Ye(A),S;try{for(E.s();!(S=E.n()).done;){var P=S.value;o.add(P)}}catch($){E.e($)}finally{E.f()}}}catch($){d.e($)}finally{d.f()}}catch($){N.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(c.href," (").concat($.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch($){u.e($)}finally{u.f()}if(!o.size)return;var L=Array.from(o).join(", ");try{s=t.querySelectorAll(L)}catch{}}return new Promise(function($,z){var y=je(s).filter(wh).map(_h),W=Or.begin("searchPseudoElements");ec(),Promise.all(y).then(function(){W(),yr(),$()}).catch(function(){W(),yr(),z()})})}}var Sh={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=mu,s}}},provides:function(i){i.pseudoElements2svg=function(s){var o=s.node,u=o===void 0?V:o;N.searchPseudoElements&&mu(u)}}},du=!1,Ih={mixout:function(){return{dom:{unwatch:function(){ec(),du=!0}}}},hooks:function(){return{bootstrap:function(){ou(pr("mutationObserverCallbacks",{}))},noAuto:function(){ih()},watch:function(s){var o=s.observeMutationsRoot;du?yr():ou(pr("mutationObserverCallbacks",{observeMutationsRoot:o}))}}}},hu=function(i){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce(function(o,u){var f=u.toLowerCase().split("-"),c=f[0],d=f.slice(1).join("-");if(c&&d==="h")return o.flipX=!0,o;if(c&&d==="v")return o.flipY=!0,o;if(d=parseFloat(d),isNaN(d))return o;switch(c){case"grow":o.size=o.size+d;break;case"shrink":o.size=o.size-d;break;case"left":o.x=o.x-d;break;case"right":o.x=o.x+d;break;case"up":o.y=o.y-d;break;case"down":o.y=o.y+d;break;case"rotate":o.rotate=o.rotate+d;break}return o},s)},Ph={mixout:function(){return{parse:{transform:function(s){return hu(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,o){var u=o.getAttribute("data-fa-transform");return u&&(s.transform=hu(u)),s}}},provides:function(i){i.generateAbstractTransformGrouping=function(s){var o=s.main,u=s.transform,f=s.containerWidth,c=s.iconWidth,d={transform:"translate(".concat(f/2," 256)")},b="translate(".concat(u.x*32,", ").concat(u.y*32,") "),_="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),A="rotate(".concat(u.rotate," 0 0)"),E={transform:"".concat(b," ").concat(_," ").concat(A)},S={transform:"translate(".concat(c/2*-1," -256)")},P={outer:d,inner:E,path:S};return{tag:"g",attributes:I({},P.outer),children:[{tag:"g",attributes:I({},P.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:I(I({},o.icon.attributes),P.path)}]}]}}}},zn={x:0,y:0,width:"100%",height:"100%"};function vu(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||i)&&(t.attributes.fill="black"),t}function jh(t){return t.tag==="g"?t.children:[t]}var Oh={hooks:function(){return{parseNodeAttributes:function(s,o){var u=o.getAttribute("data-fa-mask"),f=u?sn(u.split(" ").map(function(c){return c.trim()})):Yf();return f.prefix||(f.prefix=ye()),s.mask=f,s.maskId=o.getAttribute("data-fa-mask-id"),s}}},provides:function(i){i.generateAbstractMask=function(s){var o=s.children,u=s.attributes,f=s.main,c=s.mask,d=s.maskId,b=s.transform,_=f.width,A=f.icon,E=c.width,S=c.icon,P=kd({transform:b,containerWidth:E,iconWidth:_}),L={tag:"rect",attributes:I(I({},zn),{},{fill:"white"})},$=A.children?{children:A.children.map(vu)}:{},z={tag:"g",attributes:I({},P.inner),children:[vu(I({tag:A.tag,attributes:I(I({},A.attributes),P.path)},$))]},y={tag:"g",attributes:I({},P.outer),children:[z]},W="mask-".concat(d||Jo()),U="clip-".concat(d||Jo()),Y={tag:"mask",attributes:I(I({},zn),{},{id:W,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:U},children:jh(S)},Y]};return o.push(B,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(U,")"),mask:"url(#".concat(W,")")},zn)}),{children:o,attributes:u}}}},Ch={provides:function(i){var s=!1;ve.matchMedia&&(s=ve.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){var o=[],u={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:I(I({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var c=I(I({},f),{},{attributeName:"opacity"}),d={tag:"circle",attributes:I(I({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||d.children.push({tag:"animate",attributes:I(I({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},c),{},{values:"1;0;1;1;0;1;"})}),o.push(d),o.push({tag:"path",attributes:I(I({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:I(I({},c),{},{values:"1;0;0;0;0;1;"})}]}),s||o.push({tag:"path",attributes:I(I({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},zh={hooks:function(){return{parseNodeAttributes:function(s,o){var u=o.getAttribute("data-fa-symbol"),f=u===null?!1:u===""?!0:u;return s.symbol=f,s}}}},Rh=[Ed,dh,hh,vh,yh,Sh,Ih,Ph,Oh,Ch,zh];$d(Rh,{mixoutsTo:ie});ie.noAuto;var Pe=ie.config;ie.library;ie.dom;var rc=ie.parse;ie.findIconDefinition;ie.toHtml;var Dh=ie.icon;ie.layer;ie.text;ie.counter;function Nh(t){return t=t-0,t===t}function ic(t){return Nh(t)?t:(t=t.replace(/[_-]+(.)?/g,(i,s)=>s?s.toUpperCase():""),t.charAt(0).toLowerCase()+t.slice(1))}var Fh=(t,i)=>br.createElement("stop",{key:`${i}-${t.offset}`,offset:t.offset,stopColor:t.color,...t.opacity!==void 0&&{stopOpacity:t.opacity}});function Th(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Ee=new Map,qh=1e3;function Mh(t){if(Ee.has(t))return Ee.get(t);const i={};let s=0;const o=t.length;for(;s<o;){const u=t.indexOf(";",s),f=u===-1?o:u,c=t.slice(s,f).trim();if(c){const d=c.indexOf(":");if(d>0){const b=c.slice(0,d).trim(),_=c.slice(d+1).trim();if(b&&_){const A=ic(b);i[A.startsWith("webkit")?Th(A):A]=_}}}s=f+1}if(Ee.size===qh){const u=Ee.keys().next().value;u&&Ee.delete(u)}return Ee.set(t,i),i}function ac(t,i,s={}){if(typeof i=="string")return i;const o=(i.children||[]).map(E=>{let S=E;return("fill"in s||s.gradientFill)&&E.tag==="path"&&"fill"in E.attributes&&(S={...E,attributes:{...E.attributes,fill:void 0}}),ac(t,S)}),u=i.attributes||{},f={};for(const[E,S]of Object.entries(u))switch(!0){case E==="class":{f.className=S;break}case E==="style":{f.style=Mh(String(S));break}case E.startsWith("aria-"):case E.startsWith("data-"):{f[E.toLowerCase()]=S;break}default:f[ic(E)]=S}const{style:c,role:d,"aria-label":b,gradientFill:_,...A}=s;if(c&&(f.style=f.style?{...f.style,...c}:c),d&&(f.role=d),b&&(f["aria-label"]=b,f["aria-hidden"]="false"),_){f.fill=`url(#${_.id})`;const{type:E,stops:S=[],...P}=_;o.unshift(t(E==="linear"?"linearGradient":"radialGradient",{...P,id:_.id},S.map(Fh)))}return t(i.tag,{...f,...A},...o)}var $h=ac.bind(null,br.createElement),yu=(t,i)=>{const s=xe.useId();return t||(i?s:void 0)},Lh=class{constructor(t="react-fontawesome"){this.enabled=!1;let i=!1;try{i=typeof process<"u"&&!1}catch{}this.scope=t,this.enabled=i}log(...t){this.enabled&&console.log(`[${this.scope}]`,...t)}warn(...t){this.enabled&&console.warn(`[${this.scope}]`,...t)}error(...t){this.enabled&&console.error(`[${this.scope}]`,...t)}},Gh="searchPseudoElementsFullScan"in Pe&&typeof Pe.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Xh=Number.parseInt(Gh)>=7,Wh=()=>Xh,Ne="fa",Z={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},Uh={left:"fa-pull-left",right:"fa-pull-right"},Vh={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Hh={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},ce={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Bh(t){const i=Pe.cssPrefix||Pe.familyPrefix||Ne;return i===Ne?t:t.replace(new RegExp(String.raw`(?<=^|\s)${Ne}-`,"g"),`${i}-`)}function Yh(t){const{beat:i,fade:s,beatFade:o,bounce:u,shake:f,spin:c,spinPulse:d,spinReverse:b,pulse:_,fixedWidth:A,inverse:E,border:S,flip:P,size:L,rotation:$,pull:z,swapOpacity:y,rotateBy:W,widthAuto:U,flip360:Y,buzz:B,float:te,jello:x,spinSnap:T,spinSnap4:C,spinSnap8:j,swing:M,wag:F,className:X}=t,R=[];return X&&R.push(...X.split(" ")),i&&R.push(Z.beat),s&&R.push(Z.fade),o&&R.push(Z.beatFade),u&&R.push(Z.bounce),f&&R.push(Z.shake),c&&R.push(Z.spin),b&&R.push(Z.spinReverse),d&&R.push(Z.spinPulse),_&&R.push(Z.pulse),A&&R.push(ce.fixedWidth),E&&R.push(ce.inverse),S&&R.push(ce.border),P===!0&&R.push(ce.flip),(P==="horizontal"||P==="both")&&R.push(ce.flipHorizontal),(P==="vertical"||P==="both")&&R.push(ce.flipVertical),L!=null&&R.push(Hh[L]),$!=null&&$!==0&&R.push(Vh[$]),z!=null&&R.push(Uh[z]),y&&R.push(ce.swapOpacity),Wh()?(W&&R.push(ce.rotateBy),U&&R.push(ce.widthAuto),Y&&R.push(Z.flip360),B&&R.push(Z.buzz),te&&R.push(Z.float),x&&R.push(Z.jello),T&&R.push(Z.spinSnap),C&&R.push(Z.spinSnap4),j&&R.push(Z.spinSnap8),M&&R.push(Z.swing),F&&R.push(Z.wag),(Pe.cssPrefix||Pe.familyPrefix||Ne)===Ne?R:R.map(Bh)):R}var Jh=t=>typeof t=="object"&&"icon"in t&&!!t.icon;function gu(t){if(t)return Jh(t)?t:rc.icon(t)}function Kh(t){return Object.keys(t)}var bu=new Lh("FontAwesomeIcon"),sc={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Zh=new Set(Object.keys(sc)),Te=br.forwardRef((t,i)=>{const s={...sc,...t},{icon:o,mask:u,symbol:f,title:c,titleId:d,maskId:b,transform:_}=s,A=yu(b,!!u),E=yu(d,!!c),S=gu(o);if(!S)return bu.error("Icon lookup is undefined",o),null;const P=Yh(s),L=typeof _=="string"?rc.transform(_):_,$=gu(u),z=Dh(S,{...P.length>0&&{classes:P},...L&&{transform:L},...$&&{mask:$},symbol:f,title:c,titleId:E,maskId:A});if(!z)return bu.error("Could not find icon",S),null;const{abstract:y}=z,W={ref:i};for(const U of Kh(s))Zh.has(U)||(W[U]=s[U]);return $h(y[0],W)});Te.displayName="FontAwesomeIcon";var Rn={},xu;function Qh(){return xu||(xu=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0});var i="fas",s="bars",o=448,u=512,f=["navicon"],c="f0c9",d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z";t.definition={prefix:i,iconName:s,icon:[o,u,f,c,d]},t.faBars=t.definition,t.prefix=i,t.iconName=s,t.width=o,t.height=u,t.ligatures=f,t.unicode=c,t.svgPathData=d,t.aliases=f})(Rn)),Rn}var ev=Qh();const zr=xe.createContext({sidebarOpen:!1,setSidebarOpen:()=>{}}),nv=()=>{const{sidebarOpen:t,setSidebarOpen:i}=xe.useContext(zr);let s=nn();const o=(s.pathname.match(/\d+(?=-)/g)??[]).join(".");let u=s.pathname.split("/").at(-1)||"Home";return s.pathname.startsWith("/pages/")&&(u=u.split("-").slice(1).join(" ")),D.jsx("nav",{className:"w-full h-(--navbar-height) flex items-center justify-center text-(--hard-text-dark) bg-(--menu-color-medium) px-(--inline-padding-sm) sm:px-0 border-b-2 border-(--border-color-light) shadow-sm",children:D.jsxs("div",{className:"w-full flex items-center justify-between max-w-(--width-sm) md:max-w-(--width-lg) 2xl:max-w-(--width-xl) relative",children:[D.jsxs("div",{className:"capitalize flex flex-col text-(--hard-text-dark)",children:[D.jsx("span",{className:"text-(--soft-lines) text-sm",children:o||"Current page"}),D.jsx("h3",{className:"italic",children:u})]}),D.jsx("button",{className:"sidebar-control cursor-pointer xl:hidden",disabled:t,onClick:()=>i(!0),children:D.jsx(Te,{className:"text-3xl",icon:ev.faBars})}),D.jsx(he,{to:"/",className:"hidden xl:inline text-xl font-bold absolute left-1/2 top-1/2 -translate-1/2",children:D.jsx("h1",{children:"RookieMath"})}),D.jsx(he,{to:"/suggestions",className:"hidden xl:inline hover:text-(--soft-lines)",children:"Give Feedback"})]})})};var tv={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},rv={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},iv={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const av=({children:t,...i})=>{const{sidebarOpen:s,setSidebarOpen:o}=xe.useContext(zr),u=xe.useRef(null);return xe.useEffect(()=>{const f=d=>{d.key==="Escape"&&o(!1)},c=d=>{d.target&&d.target instanceof Element&&!d.target.closest("#sidebar")&&!d.target.closest(".sidebar-control")&&o(!1)};return window.addEventListener("keydown",f),window.addEventListener("click",c),()=>{window.removeEventListener("keydown",f),window.removeEventListener("click",c)}},[]),D.jsxs("aside",{id:"sidebar",ref:u,...i,className:`
            absolute left-full top-0 h-full overflow-auto
            w-4/5 max-w-96 border-l-1 border-(--soft-lines)
            z-100 bg-(--background-color-light) text-(--hard-text-dark)
            ${s?"flex -translate-x-full":"hidden"}
            flex-col transition transition-discrete xl:flex
            xl:left-auto xl:translate-x-0 xl:h-128 xl:border-1
            xl:rounded-xl xl:top-30 xl:shadow-md`,children:[D.jsxs("div",{className:"px-(--inline-padding-sm) sm:px(--inline-padding-md) w-full flex justify-between items-center border-b-1 border-(--soft-lines) xl:border-0",children:[D.jsx("span",{className:"italic py-2",children:"Content"}),D.jsx("button",{className:"py-2 text-2xl cursor-pointer xl:hidden",onClick:()=>o(!1),children:D.jsx(Te,{icon:tv})})]}),t]})},oc=({dir:t,indentLevel:i=0})=>{let s=nn();const o=(t.fsPath.match(/\d+(?=-)/g)??[]).join("."),u=t.name.split("-").slice(1).join(" "),f=D.jsxs(D.Fragment,{children:[i?D.jsx("li",{className:`capitalize text-(--hard-text-dark) ${i===1?"font-semibold border-t-1 border-(--soft-lines)":""}`,children:t.index?D.jsx(he,{style:{paddingLeft:`${i}em`},className:`${t.index.route===s.pathname?"bg-(--menu-color-medium) border-l-4 border-(--accent)":""} w-full inline-block py-1 hover:text-(--soft-lines)`,to:t.index.route,children:`${o} ${u}`}):D.jsxs("div",{style:{paddingLeft:`${i}em`},className:"py-1",children:[o," ",u]})}):null,t.children.map(c=>{switch(c.type){case"File":const d=(c.route.match(/\d+(?=-)/g)??[]).join("."),b=c.name.split("-").slice(1).join(" ");return D.jsx("li",{className:`capitalize text-(--hard-text-dark) ${i===1?"font-semibold border-t-1 border-(--soft-lines)":""} `,children:D.jsx(he,{style:{paddingLeft:`${i+1}em`},className:`${c.route===s.pathname?"bg-(--menu-color-medium) border-l-4 border-(--accent)":""} w-full inline-block py-1 hover:text-(--soft-lines)`,to:c.route,children:`${d} ${b}`})},c.fsPath);case"Directory":return D.jsx(oc,{dir:c,indentLevel:i+1},c.fsPath)}})]});return i?f:D.jsx("ul",{children:f})};var Q={},ee={},ku;function sv(){if(ku)return ee;ku=1;const t=/^[A-Za-z]:\//;function i(x=""){return x&&x.replace(/\\/g,"/").replace(t,T=>T.toUpperCase())}const s=/^[/\\]{2}/,o=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,u=/^[A-Za-z]:$/,f=/^\/([A-Za-z]:)?$/,c="/",d=":",b=function(x){if(x.length===0)return".";x=i(x);const T=x.match(s),C=P(x),j=x[x.length-1]==="/";return x=S(x,!C),x.length===0?C?"/":j?"./":".":(j&&(x+="/"),u.test(x)&&(x+="/"),T?C?`//${x}`:`//./${x}`:C&&!P(x)?`/${x}`:x)},_=function(...x){if(x.length===0)return".";let T;for(const C of x)C&&C.length>0&&(T===void 0?T=C:T+=`/${C}`);return T===void 0?".":b(T.replace(/\/\/+/g,"/"))};function A(){return typeof process<"u"&&typeof process.cwd=="function"?process.cwd().replace(/\\/g,"/"):"/"}const E=function(...x){x=x.map(j=>i(j));let T="",C=!1;for(let j=x.length-1;j>=-1&&!C;j--){const M=j>=0?x[j]:A();!M||M.length===0||(T=`${M}/${T}`,C=P(M))}return T=S(T,!C),C&&!P(T)?`/${T}`:T.length>0?T:"."};function S(x,T){let C="",j=0,M=-1,F=0,X=null;for(let R=0;R<=x.length;++R){if(R<x.length)X=x[R];else{if(X==="/")break;X="/"}if(X==="/"){if(!(M===R-1||F===1))if(F===2){if(C.length<2||j!==2||C[C.length-1]!=="."||C[C.length-2]!=="."){if(C.length>2){const Oe=C.lastIndexOf("/");Oe===-1?(C="",j=0):(C=C.slice(0,Oe),j=C.length-1-C.lastIndexOf("/")),M=R,F=0;continue}else if(C.length>0){C="",j=0,M=R,F=0;continue}}T&&(C+=C.length>0?"/..":"..",j=2)}else C.length>0?C+=`/${x.slice(M+1,R)}`:C=x.slice(M+1,R),j=R-M-1;M=R,F=0}else X==="."&&F!==-1?++F:F=-1}return C}const P=function(x){return o.test(x)},L=function(x){return i(x)},$=/.(\.[^./]+)$/,z=function(x){const T=$.exec(i(x));return T&&T[1]||""},y=function(x,T){const C=E(x).replace(f,"$1").split("/"),j=E(T).replace(f,"$1").split("/");if(j[0][1]===":"&&C[0][1]===":"&&C[0]!==j[0])return j.join("/");const M=[...C];for(const F of M){if(j[0]!==F)break;C.shift(),j.shift()}return[...C.map(()=>".."),...j].join("/")},W=function(x){const T=i(x).replace(/\/$/,"").split("/").slice(0,-1);return T.length===1&&u.test(T[0])&&(T[0]+="/"),T.join("/")||(P(x)?"/":".")},U=function(x){const T=[x.root,x.dir,x.base??x.name+x.ext].filter(Boolean);return i(x.root?E(...T):T.join("/"))},Y=function(x,T){const C=i(x).split("/").pop();return T&&C.endsWith(T)?C.slice(0,-T.length):C},B=function(x){const T=i(x).split("/").shift()||"/",C=Y(x),j=z(C);return{root:T,dir:W(x),base:C,ext:j,name:C.slice(0,C.length-j.length)}},te={__proto__:null,basename:Y,delimiter:d,dirname:W,extname:z,format:U,isAbsolute:P,join:_,normalize:b,normalizeString:S,parse:B,relative:y,resolve:E,sep:c,toNamespacedPath:L};return ee.basename=Y,ee.delimiter=d,ee.dirname=W,ee.extname=z,ee.format=U,ee.isAbsolute=P,ee.join=_,ee.normalize=b,ee.normalizeString=S,ee.normalizeWindowsPath=i,ee.parse=B,ee.path=te,ee.relative=y,ee.resolve=E,ee.sep=c,ee.toNamespacedPath=L,ee}var _u;function ov(){if(_u)return Q;_u=1,Object.defineProperty(Q,"__esModule",{value:!0});const t=sv();return Q.basename=t.basename,Q.default=t.path,Q.delimiter=t.delimiter,Q.dirname=t.dirname,Q.extname=t.extname,Q.format=t.format,Q.isAbsolute=t.isAbsolute,Q.join=t.join,Q.normalize=t.normalize,Q.normalizeString=t.normalizeString,Q.parse=t.parse,Q.relative=t.relative,Q.resolve=t.resolve,Q.sep=t.sep,Q.toNamespacedPath=t.toNamespacedPath,Q}var p={},wu;function uv(){if(wu)return p;wu=1;let t;function i(r){t={...t,...r}}function s(r){return{lang:r?.lang??t?.lang,message:r?.message,abortEarly:r?.abortEarly??t?.abortEarly,abortPipeEarly:r?.abortPipeEarly??t?.abortPipeEarly}}function o(){t=void 0}let u;function f(r,n){u||(u=new Map),u.set(n,r)}function c(r){return u?.get(r)}function d(r){u?.delete(r)}let b;function _(r,n){b||(b=new Map),b.set(n,r)}function A(r){return b?.get(r)}function E(r){b?.delete(r)}let S;function P(r,n,e){S||(S=new Map),S.get(r)||S.set(r,new Map),S.get(r).set(e,n)}function L(r,n){return S?.get(r)?.get(n)}function $(r,n){S?.get(r)?.delete(n)}function z(r){const n=typeof r;return n==="string"?`"${r}"`:n==="number"||n==="bigint"||n==="boolean"?`${r}`:n==="object"||n==="function"?(r&&Object.getPrototypeOf(r)?.constructor?.name)??"null":n}function y(r,n,e,a,l){const m=l&&"input"in l?l.input:e.value,h=l?.expected??r.expects??null,g=l?.received??z(m),v={kind:r.kind,type:r.type,input:m,expected:h,received:g,message:`Invalid ${n}: ${h?`Expected ${h} but r`:"R"}eceived ${g}`,requirement:r.requirement,path:l?.path,issues:l?.issues,lang:a.lang,abortEarly:a.abortEarly,abortPipeEarly:a.abortPipeEarly},k=r.kind==="schema",w=l?.message??r.message??L(r.reference,v.lang)??(k?A(v.lang):null)??a.message??c(v.lang);w!==void 0&&(v.message=typeof w=="function"?w(v):w),k&&(e.typed=!1),e.issues?e.issues.push(v):e.issues=[v]}let W;function U(r){return W||(W=new TextEncoder),W.encode(r).length}let Y;function B(r){Y||(Y=new Intl.Segmenter);const n=Y.segment(r);let e=0;for(const a of n)e++;return e}function te(r,n){if("pipe"in r){const e=[];for(let a=r.pipe.length-1;a>=0;a--){const l=r.pipe[a];if(l.kind==="schema"&&"pipe"in l)e.push(l);else if(l.kind==="metadata"&&l.type===n)return l[n]}for(const a of e){const l=te(a,n);if(l!==void 0)return l}}}function x(r){return{version:1,vendor:"valibot",validate(n){return r["~run"]({value:n},s())}}}let T;function C(r,n){T||(T=new Map),T.get(r)||T.set(r,new Intl.Segmenter(r,{granularity:"word"}));const e=T.get(r).segment(n);let a=0;for(const l of e)l.isWordLike&&a++;return a}const j=/\D/gu;function M(r){const n=r.replace(j,"");let e=n.length,a=1,l=0;for(;e;){const m=+n[--e];a^=1,l+=a?[0,2,4,6,8,1,3,5,7,9][m]:m}return l%10===0}function F(r,n){return Object.hasOwn(r,n)&&n!=="__proto__"&&n!=="prototype"&&n!=="constructor"}function X(r,n){const e=[...new Set(r)];return e.length>1?`(${e.join(` ${n} `)})`:e[0]??"never"}function R(r,n){const e={};for(const a of r)e[a]=n;return e}function Oe(r){const n={};for(const e of r)Object.assign(n,e.entries);return n}function mn(r){if(r.path){let n="";for(const e of r.path)if(typeof e.key=="string"||typeof e.key=="number")n?n+=`.${e.key}`:n+=e.key;else return null;return n}return null}function mc(r,n){return n.kind===r}function dc(r,n){return n.type===r}function hc(r){return r instanceof ue}var ue=class extends Error{constructor(r){super(r[0].message),this.name="ValiError",this.issues=r}};function Lr(r){return{kind:"transformation",type:"args",reference:Lr,async:!1,schema:r,"~run"(n,e){const a=n.value;return n.value=(...l)=>{const m=this.schema["~run"]({value:l},e);if(m.issues)throw new ue(m.issues);return a(...m.value)},n}}}function Gr(r){return{kind:"transformation",type:"args",reference:Gr,async:!1,schema:r,"~run"(n,e){const a=n.value;return n.value=async(...l)=>{const m=await r["~run"]({value:l},e);if(m.issues)throw new ue(m.issues);return a(...m.value)},n}}}function Xr(){return{kind:"transformation",type:"await",reference:Xr,async:!0,async"~run"(r){return r.value=await r.value,r}}}const Wr=/^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu,Ur=/^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u,Vr=/^[a-z][\da-z]*$/u,Hr=/^[+-]?(?:\d*\.)?\d+$/u,Br=/^\d+$/u,Yr=/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu,Jr=new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$","u"),Kr=/^(?:0[hx])?[\da-fA-F]+$/u,Zr=/^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u,Qr=/^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u,ei=/^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u,ni=/^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu,ti=/^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu,ri=/^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u,ii=/^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u,ai=/^(?:0\d|1\d|2[0-3]):[0-5]\d$/u,si=/^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u,oi=/^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z|[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u,ui=/^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u,li=/^(?:[\da-f]{2}:){5}[\da-f]{2}$|^(?:[\da-f]{2}-){5}[\da-f]{2}$|^(?:[\da-f]{4}\.){2}[\da-f]{4}$/iu,fi=/^(?:[\da-f]{2}:){7}[\da-f]{2}$|^(?:[\da-f]{2}-){7}[\da-f]{2}$|^(?:[\da-f]{4}\.){3}[\da-f]{4}$|^(?:[\da-f]{4}:){3}[\da-f]{4}$/iu,ci=/^(?:[\da-f]{2}:){5}[\da-f]{2}$|^(?:[\da-f]{2}-){5}[\da-f]{2}$|^(?:[\da-f]{4}\.){2}[\da-f]{4}$|^(?:[\da-f]{2}:){7}[\da-f]{2}$|^(?:[\da-f]{2}-){7}[\da-f]{2}$|^(?:[\da-f]{4}\.){3}[\da-f]{4}$|^(?:[\da-f]{4}:){3}[\da-f]{4}$/iu,pi=/^[\w-]+$/u,mi=/^(?:0o)?[0-7]+$/u,di=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,hi=/^[\da-z]+(?:[-_][\da-z]+)*$/u,vi=/^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u,yi=/^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;function gi(r){return{kind:"validation",type:"base64",reference:gi,async:!1,expects:null,requirement:Wr,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"Base64",n,e),n}}}function bi(r){return{kind:"validation",type:"bic",reference:bi,async:!1,expects:null,requirement:Ur,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"BIC",n,e),n}}}function xi(r){return{kind:"transformation",type:"brand",reference:xi,async:!1,name:r,"~run"(n){return n}}}function ki(r,n){return{kind:"validation",type:"bytes",reference:ki,async:!1,expects:`${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=U(e.value);l!==this.requirement&&y(this,"bytes",e,a,{received:`${l}`})}return e}}}function _i(r,n){return{kind:"validation",type:"check",reference:_i,async:!1,expects:null,requirement:r,message:n,"~run"(e,a){return e.typed&&!this.requirement(e.value)&&y(this,"input",e,a),e}}}function wi(r,n){return{kind:"validation",type:"check",reference:wi,async:!0,expects:null,requirement:r,message:n,async"~run"(e,a){return e.typed&&!await this.requirement(e.value)&&y(this,"input",e,a),e}}}function Ei(r,n){return{kind:"validation",type:"check_items",reference:Ei,async:!1,expects:null,requirement:r,message:n,"~run"(e,a){if(e.typed)for(let l=0;l<e.value.length;l++){const m=e.value[l];this.requirement(m,l,e.value)||y(this,"item",e,a,{input:m,path:[{type:"array",origin:"value",input:e.value,key:l,value:m}]})}return e}}}function Ai(r,n){return{kind:"validation",type:"check_items",reference:Ai,async:!0,expects:null,requirement:r,message:n,async"~run"(e,a){if(e.typed){const l=await Promise.all(e.value.map(this.requirement));for(let m=0;m<e.value.length;m++)if(!l[m]){const h=e.value[m];y(this,"item",e,a,{input:h,path:[{type:"array",origin:"value",input:e.value,key:m,value:h}]})}}return e}}}const vc=/^(?:\d{14,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u,yc=/[- ]/gu,gc=[/^3[47]\d{13}$/u,/^3(?:0[0-5]|[68]\d)\d{11,13}$/u,/^6(?:011|5\d{2})\d{12,15}$/u,/^(?:2131|1800|35\d{3})\d{11}$/u,/^5[1-5]\d{2}|(?:222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,/^(?:6[27]\d{14,17}|81\d{14,17})$/u,/^4\d{12}(?:\d{3,6})?$/u];function Si(r){return{kind:"validation",type:"credit_card",reference:Si,async:!1,expects:null,requirement(n){let e;return vc.test(n)&&(e=n.replace(yc,""))&&gc.some(a=>a.test(e))&&M(e)},message:r,"~run"(n,e){return n.typed&&!this.requirement(n.value)&&y(this,"credit card",n,e),n}}}function Ii(r){return{kind:"validation",type:"cuid2",reference:Ii,async:!1,expects:null,requirement:Vr,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"Cuid2",n,e),n}}}function Pi(r){return{kind:"validation",type:"decimal",reference:Pi,async:!1,expects:null,requirement:Hr,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"decimal",n,e),n}}}function ji(r){return{kind:"metadata",type:"description",reference:ji,description:r}}function Oi(r){return{kind:"validation",type:"digits",reference:Oi,async:!1,expects:null,requirement:Br,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"digits",n,e),n}}}function Ci(r){return{kind:"validation",type:"email",reference:Ci,expects:null,async:!1,requirement:Yr,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"email",n,e),n}}}function zi(r){return{kind:"validation",type:"emoji",reference:zi,async:!1,expects:null,requirement:Jr,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"emoji",n,e),n}}}function Ri(r){return{kind:"validation",type:"empty",reference:Ri,async:!1,expects:"0",message:r,"~run"(n,e){return n.typed&&n.value.length>0&&y(this,"length",n,e,{received:`${n.value.length}`}),n}}}function Di(r,n){return{kind:"validation",type:"ends_with",reference:Di,async:!1,expects:`"${r}"`,requirement:r,message:n,"~run"(e,a){return e.typed&&!e.value.endsWith(this.requirement)&&y(this,"end",e,a,{received:`"${e.value.slice(-this.requirement.length)}"`}),e}}}function Ni(r,n){return{kind:"validation",type:"entries",reference:Ni,async:!1,expects:`${r}`,requirement:r,message:n,"~run"(e,a){if(!e.typed)return e;const l=Object.keys(e.value).length;return e.typed&&l!==this.requirement&&y(this,"entries",e,a,{received:`${l}`}),e}}}function Fi(r,n){return{kind:"validation",type:"every_item",reference:Fi,async:!1,expects:null,requirement:r,message:n,"~run"(e,a){return e.typed&&!e.value.every(this.requirement)&&y(this,"item",e,a),e}}}function Ti(r){return{kind:"metadata",type:"examples",reference:Ti,examples:r}}function qi(r,n){const e=z(r);return{kind:"validation",type:"excludes",reference:qi,async:!1,expects:`!${e}`,requirement:r,message:n,"~run"(a,l){return a.typed&&a.value.includes(this.requirement)&&y(this,"content",a,l,{received:e}),a}}}function Mi(r){return{kind:"transformation",type:"filter_items",reference:Mi,async:!1,operation:r,"~run"(n){return n.value=n.value.filter(this.operation),n}}}function $i(r){return{kind:"transformation",type:"find_item",reference:$i,async:!1,operation:r,"~run"(n){return n.value=n.value.find(this.operation),n}}}function Li(r){return{kind:"validation",type:"finite",reference:Li,async:!1,expects:null,requirement:Number.isFinite,message:r,"~run"(n,e){return n.typed&&!this.requirement(n.value)&&y(this,"finite",n,e),n}}}function Gi(r){return{kind:"transformation",type:"flavor",reference:Gi,async:!1,name:r,"~run"(n){return n}}}function Xi(r,n){return{kind:"validation",type:"graphemes",reference:Xi,async:!1,expects:`${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=B(e.value);l!==this.requirement&&y(this,"graphemes",e,a,{received:`${l}`})}return e}}}function Wi(r,n){return{kind:"validation",type:"gt_value",reference:Wi,async:!1,expects:`>${r instanceof Date?r.toJSON():z(r)}`,requirement:r,message:n,"~run"(e,a){return e.typed&&!(e.value>this.requirement)&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}const bc={md4:32,md5:32,sha1:40,sha256:64,sha384:96,sha512:128,ripemd128:32,ripemd160:40,tiger128:32,tiger160:40,tiger192:48,crc32:8,crc32b:8,adler32:8};function Ui(r,n){return{kind:"validation",type:"hash",reference:Ui,expects:null,async:!1,requirement:RegExp(r.map(e=>`^[a-f0-9]{${bc[e]}}$`).join("|"),"iu"),message:n,"~run"(e,a){return e.typed&&!this.requirement.test(e.value)&&y(this,"hash",e,a),e}}}function Vi(r){return{kind:"validation",type:"hexadecimal",reference:Vi,async:!1,expects:null,requirement:Kr,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"hexadecimal",n,e),n}}}function Hi(r){return{kind:"validation",type:"hex_color",reference:Hi,async:!1,expects:null,requirement:Zr,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"hex color",n,e),n}}}function Bi(r){return{kind:"validation",type:"imei",reference:Bi,async:!1,expects:null,requirement(n){return Qr.test(n)&&M(n)},message:r,"~run"(n,e){return n.typed&&!this.requirement(n.value)&&y(this,"IMEI",n,e),n}}}function Yi(r,n){const e=z(r);return{kind:"validation",type:"includes",reference:Yi,async:!1,expects:e,requirement:r,message:n,"~run"(a,l){return a.typed&&!a.value.includes(this.requirement)&&y(this,"content",a,l,{received:`!${e}`}),a}}}function Ji(r){return{kind:"validation",type:"integer",reference:Ji,async:!1,expects:null,requirement:Number.isInteger,message:r,"~run"(n,e){return n.typed&&!this.requirement(n.value)&&y(this,"integer",n,e),n}}}function Ki(r){return{kind:"validation",type:"ip",reference:Ki,async:!1,expects:null,requirement:ti,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"IP",n,e),n}}}function Zi(r){return{kind:"validation",type:"ipv4",reference:Zi,async:!1,expects:null,requirement:ei,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"IPv4",n,e),n}}}function Qi(r){return{kind:"validation",type:"ipv6",reference:Qi,async:!1,expects:null,requirement:ni,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"IPv6",n,e),n}}}function ea(r){return{kind:"validation",type:"iso_date",reference:ea,async:!1,expects:null,requirement:ri,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"date",n,e),n}}}function na(r){return{kind:"validation",type:"iso_date_time",reference:na,async:!1,expects:null,requirement:ii,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"date-time",n,e),n}}}function ta(r){return{kind:"validation",type:"iso_time",reference:ta,async:!1,expects:null,requirement:ai,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"time",n,e),n}}}function ra(r){return{kind:"validation",type:"iso_time_second",reference:ra,async:!1,expects:null,requirement:si,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"time-second",n,e),n}}}function ia(r){return{kind:"validation",type:"iso_timestamp",reference:ia,async:!1,expects:null,requirement:oi,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"timestamp",n,e),n}}}function aa(r){return{kind:"validation",type:"iso_week",reference:aa,async:!1,expects:null,requirement:ui,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"week",n,e),n}}}function sa(r,n){return{kind:"validation",type:"length",reference:sa,async:!1,expects:`${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.length!==this.requirement&&y(this,"length",e,a,{received:`${e.value.length}`}),e}}}function oa(r,n){return{kind:"validation",type:"lt_value",reference:oa,async:!1,expects:`<${r instanceof Date?r.toJSON():z(r)}`,requirement:r,message:n,"~run"(e,a){return e.typed&&!(e.value<this.requirement)&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}function ua(r){return{kind:"validation",type:"mac",reference:ua,async:!1,expects:null,requirement:ci,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"MAC",n,e),n}}}function la(r){return{kind:"validation",type:"mac48",reference:la,async:!1,expects:null,requirement:li,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"48-bit MAC",n,e),n}}}function fa(r){return{kind:"validation",type:"mac64",reference:fa,async:!1,expects:null,requirement:fi,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"64-bit MAC",n,e),n}}}function ca(r){return{kind:"transformation",type:"map_items",reference:ca,async:!1,operation:r,"~run"(n){return n.value=n.value.map(this.operation),n}}}function pa(r,n){return{kind:"validation",type:"max_bytes",reference:pa,async:!1,expects:`<=${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=U(e.value);l>this.requirement&&y(this,"bytes",e,a,{received:`${l}`})}return e}}}function ma(r,n){return{kind:"validation",type:"max_entries",reference:ma,async:!1,expects:`<=${r}`,requirement:r,message:n,"~run"(e,a){if(!e.typed)return e;const l=Object.keys(e.value).length;return e.typed&&l>this.requirement&&y(this,"entries",e,a,{received:`${l}`}),e}}}function da(r,n){return{kind:"validation",type:"max_graphemes",reference:da,async:!1,expects:`<=${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=B(e.value);l>this.requirement&&y(this,"graphemes",e,a,{received:`${l}`})}return e}}}function ha(r,n){return{kind:"validation",type:"max_length",reference:ha,async:!1,expects:`<=${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.length>this.requirement&&y(this,"length",e,a,{received:`${e.value.length}`}),e}}}function va(r,n){return{kind:"validation",type:"max_size",reference:va,async:!1,expects:`<=${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.size>this.requirement&&y(this,"size",e,a,{received:`${e.value.size}`}),e}}}function ya(r,n){return{kind:"validation",type:"max_value",reference:ya,async:!1,expects:`<=${r instanceof Date?r.toJSON():z(r)}`,requirement:r,message:n,"~run"(e,a){return e.typed&&!(e.value<=this.requirement)&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}function ga(r,n,e){return{kind:"validation",type:"max_words",reference:ga,async:!1,expects:`<=${n}`,locales:r,requirement:n,message:e,"~run"(a,l){if(a.typed){const m=C(this.locales,a.value);m>this.requirement&&y(this,"words",a,l,{received:`${m}`})}return a}}}function ba(r){return{kind:"metadata",type:"metadata",reference:ba,metadata:r}}function xa(r,n){return{kind:"validation",type:"mime_type",reference:xa,async:!1,expects:X(r.map(e=>`"${e}"`),"|"),requirement:r,message:n,"~run"(e,a){return e.typed&&!this.requirement.includes(e.value.type)&&y(this,"MIME type",e,a,{received:`"${e.value.type}"`}),e}}}function ka(r,n){return{kind:"validation",type:"min_bytes",reference:ka,async:!1,expects:`>=${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=U(e.value);l<this.requirement&&y(this,"bytes",e,a,{received:`${l}`})}return e}}}function _a(r,n){return{kind:"validation",type:"min_entries",reference:_a,async:!1,expects:`>=${r}`,requirement:r,message:n,"~run"(e,a){if(!e.typed)return e;const l=Object.keys(e.value).length;return e.typed&&l<this.requirement&&y(this,"entries",e,a,{received:`${l}`}),e}}}function wa(r,n){return{kind:"validation",type:"min_graphemes",reference:wa,async:!1,expects:`>=${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=B(e.value);l<this.requirement&&y(this,"graphemes",e,a,{received:`${l}`})}return e}}}function Ea(r,n){return{kind:"validation",type:"min_length",reference:Ea,async:!1,expects:`>=${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.length<this.requirement&&y(this,"length",e,a,{received:`${e.value.length}`}),e}}}function Aa(r,n){return{kind:"validation",type:"min_size",reference:Aa,async:!1,expects:`>=${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.size<this.requirement&&y(this,"size",e,a,{received:`${e.value.size}`}),e}}}function Sa(r,n){return{kind:"validation",type:"min_value",reference:Sa,async:!1,expects:`>=${r instanceof Date?r.toJSON():z(r)}`,requirement:r,message:n,"~run"(e,a){return e.typed&&!(e.value>=this.requirement)&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}function Ia(r,n,e){return{kind:"validation",type:"min_words",reference:Ia,async:!1,expects:`>=${n}`,locales:r,requirement:n,message:e,"~run"(a,l){if(a.typed){const m=C(this.locales,a.value);m<this.requirement&&y(this,"words",a,l,{received:`${m}`})}return a}}}function Pa(r,n){return{kind:"validation",type:"multiple_of",reference:Pa,async:!1,expects:`%${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value%this.requirement!=0&&y(this,"multiple",e,a),e}}}function ja(r){return{kind:"validation",type:"nanoid",reference:ja,async:!1,expects:null,requirement:pi,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"Nano ID",n,e),n}}}function Oa(r){return{kind:"validation",type:"non_empty",reference:Oa,async:!1,expects:"!0",message:r,"~run"(n,e){return n.typed&&n.value.length===0&&y(this,"length",n,e,{received:"0"}),n}}}function Ca(r){return{kind:"transformation",type:"normalize",reference:Ca,async:!1,form:r,"~run"(n){return n.value=n.value.normalize(this.form),n}}}function za(r,n){return{kind:"validation",type:"not_bytes",reference:za,async:!1,expects:`!${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=U(e.value);l===this.requirement&&y(this,"bytes",e,a,{received:`${l}`})}return e}}}function Ra(r,n){return{kind:"validation",type:"not_entries",reference:Ra,async:!1,expects:`!${r}`,requirement:r,message:n,"~run"(e,a){if(!e.typed)return e;const l=Object.keys(e.value).length;return e.typed&&l===this.requirement&&y(this,"entries",e,a,{received:`${l}`}),e}}}function Da(r,n){return{kind:"validation",type:"not_graphemes",reference:Da,async:!1,expects:`!${r}`,requirement:r,message:n,"~run"(e,a){if(e.typed){const l=B(e.value);l===this.requirement&&y(this,"graphemes",e,a,{received:`${l}`})}return e}}}function Na(r,n){return{kind:"validation",type:"not_length",reference:Na,async:!1,expects:`!${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.length===this.requirement&&y(this,"length",e,a,{received:`${e.value.length}`}),e}}}function Fa(r,n){return{kind:"validation",type:"not_size",reference:Fa,async:!1,expects:`!${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.size===this.requirement&&y(this,"size",e,a,{received:`${e.value.size}`}),e}}}function Ta(r,n){return{kind:"validation",type:"not_value",reference:Ta,async:!1,expects:r instanceof Date?`!${r.toJSON()}`:`!${z(r)}`,requirement:r,message:n,"~run"(e,a){return e.typed&&this.requirement<=e.value&&this.requirement>=e.value&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}function qa(r,n){return{kind:"validation",type:"not_values",reference:qa,async:!1,expects:`!${X(r.map(e=>e instanceof Date?e.toJSON():z(e)),"|")}`,requirement:r,message:n,"~run"(e,a){return e.typed&&this.requirement.some(l=>l<=e.value&&l>=e.value)&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}function Ma(r,n,e){return{kind:"validation",type:"not_words",reference:Ma,async:!1,expects:`!${n}`,locales:r,requirement:n,message:e,"~run"(a,l){if(a.typed){const m=C(this.locales,a.value);m===this.requirement&&y(this,"words",a,l,{received:`${m}`})}return a}}}function $a(r){return{kind:"validation",type:"octal",reference:$a,async:!1,expects:null,requirement:mi,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"octal",n,e),n}}}function La(r,n){return{kind:"transformation",type:"parse_json",reference:La,config:r,message:n,async:!1,"~run"(e,a){try{e.value=JSON.parse(e.value,this.config?.reviver)}catch(l){if(l instanceof Error)y(this,"JSON",e,a,{received:`"${l.message}"`}),e.typed=!1;else throw l}return e}}}function Ga(r,n){if(r.issues)for(const e of n)for(const a of r.issues){let l=!1;const m=Math.min(e.length,a.path?.length??0);for(let h=0;h<m;h++)if(e[h]!==a.path[h].key&&(e[h]!=="$"||a.path[h].type!=="array")){l=!0;break}if(!l)return!1}return!0}function Xa(r,n,e){return{kind:"validation",type:"partial_check",reference:Xa,async:!1,expects:null,paths:r,requirement:n,message:e,"~run"(a,l){return(a.typed||Ga(a,r))&&!this.requirement(a.value)&&y(this,"input",a,l),a}}}function Wa(r,n,e){return{kind:"validation",type:"partial_check",reference:Wa,async:!0,expects:null,paths:r,requirement:n,message:e,async"~run"(a,l){return(a.typed||Ga(a,r))&&!await this.requirement(a.value)&&y(this,"input",a,l),a}}}function Ua(r){return{kind:"validation",type:"raw_check",reference:Ua,async:!1,expects:null,"~run"(n,e){return r({dataset:n,config:e,addIssue:a=>y(this,a?.label??"input",n,e,a)}),n}}}function Va(r){return{kind:"validation",type:"raw_check",reference:Va,async:!0,expects:null,async"~run"(n,e){return await r({dataset:n,config:e,addIssue:a=>y(this,a?.label??"input",n,e,a)}),n}}}function Ha(r){return{kind:"transformation",type:"raw_transform",reference:Ha,async:!1,"~run"(n,e){const a=r({dataset:n,config:e,addIssue:l=>y(this,l?.label??"input",n,e,l),NEVER:null});return n.issues?n.typed=!1:n.value=a,n}}}function Ba(r){return{kind:"transformation",type:"raw_transform",reference:Ba,async:!0,async"~run"(n,e){const a=await r({dataset:n,config:e,addIssue:l=>y(this,l?.label??"input",n,e,l),NEVER:null});return n.issues?n.typed=!1:n.value=a,n}}}function Ya(){return{kind:"transformation",type:"readonly",reference:Ya,async:!1,"~run"(r){return r}}}function Ja(r,n){return{kind:"transformation",type:"reduce_items",reference:Ja,async:!1,operation:r,initial:n,"~run"(e){return e.value=e.value.reduce(this.operation,this.initial),e}}}function Ka(r,n){return{kind:"validation",type:"regex",reference:Ka,async:!1,expects:`${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&!this.requirement.test(e.value)&&y(this,"format",e,a),e}}}function Za(r){return{kind:"transformation",type:"returns",reference:Za,async:!1,schema:r,"~run"(n,e){const a=n.value;return n.value=(...l)=>{const m=this.schema["~run"]({value:a(...l)},e);if(m.issues)throw new ue(m.issues);return m.value},n}}}function Qa(r){return{kind:"transformation",type:"returns",reference:Qa,async:!1,schema:r,"~run"(n,e){const a=n.value;return n.value=async(...l)=>{const m=await this.schema["~run"]({value:await a(...l)},e);if(m.issues)throw new ue(m.issues);return m.value},n}}}function es(r){return{kind:"validation",type:"rfc_email",reference:es,expects:null,async:!1,requirement:di,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"email",n,e),n}}}function ns(r){return{kind:"validation",type:"safe_integer",reference:ns,async:!1,expects:null,requirement:Number.isSafeInteger,message:r,"~run"(n,e){return n.typed&&!this.requirement(n.value)&&y(this,"safe integer",n,e),n}}}function ts(r,n){return{kind:"validation",type:"size",reference:ts,async:!1,expects:`${r}`,requirement:r,message:n,"~run"(e,a){return e.typed&&e.value.size!==this.requirement&&y(this,"size",e,a,{received:`${e.value.size}`}),e}}}function rs(r){return{kind:"validation",type:"slug",reference:rs,async:!1,expects:null,requirement:hi,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"slug",n,e),n}}}function is(r,n){return{kind:"validation",type:"some_item",reference:is,async:!1,expects:null,requirement:r,message:n,"~run"(e,a){return e.typed&&!e.value.some(this.requirement)&&y(this,"item",e,a),e}}}function as(r){return{kind:"transformation",type:"sort_items",reference:as,async:!1,operation:r,"~run"(n){return n.value=n.value.sort(this.operation),n}}}function ss(r,n){return{kind:"validation",type:"starts_with",reference:ss,async:!1,expects:`"${r}"`,requirement:r,message:n,"~run"(e,a){return e.typed&&!e.value.startsWith(this.requirement)&&y(this,"start",e,a,{received:`"${e.value.slice(0,this.requirement.length)}"`}),e}}}function os(r,n){return{kind:"transformation",type:"stringify_json",reference:os,message:n,config:r,async:!1,"~run"(e,a){try{const l=JSON.stringify(e.value,this.config?.replacer,this.config?.space);l===void 0&&(y(this,"JSON",e,a),e.typed=!1),e.value=l}catch(l){if(l instanceof Error)y(this,"JSON",e,a,{received:`"${l.message}"`}),e.typed=!1;else throw l}return e}}}function us(r){return{kind:"metadata",type:"title",reference:us,title:r}}function ls(r){return{kind:"transformation",type:"to_bigint",reference:ls,async:!1,message:r,"~run"(n,e){try{n.value=BigInt(n.value)}catch{y(this,"bigint",n,e),n.typed=!1}return n}}}function fs(){return{kind:"transformation",type:"to_boolean",reference:fs,async:!1,"~run"(r){return r.value=!!r.value,r}}}function cs(r){return{kind:"transformation",type:"to_date",reference:cs,async:!1,message:r,"~run"(n,e){try{n.value=new Date(n.value),isNaN(n.value)&&(y(this,"date",n,e,{received:'"Invalid Date"'}),n.typed=!1)}catch{y(this,"date",n,e),n.typed=!1}return n}}}function ps(){return{kind:"transformation",type:"to_lower_case",reference:ps,async:!1,"~run"(r){return r.value=r.value.toLowerCase(),r}}}function ms(r){return{kind:"transformation",type:"to_max_value",reference:ms,async:!1,requirement:r,"~run"(n){return n.value=n.value>this.requirement?this.requirement:n.value,n}}}function ds(r){return{kind:"transformation",type:"to_min_value",reference:ds,async:!1,requirement:r,"~run"(n){return n.value=n.value<this.requirement?this.requirement:n.value,n}}}function hs(r){return{kind:"transformation",type:"to_number",reference:hs,async:!1,message:r,"~run"(n,e){try{n.value=Number(n.value),isNaN(n.value)&&(y(this,"number",n,e),n.typed=!1)}catch{y(this,"number",n,e),n.typed=!1}return n}}}function vs(r){return{kind:"transformation",type:"to_string",reference:vs,async:!1,message:r,"~run"(n,e){try{n.value=String(n.value)}catch{y(this,"string",n,e),n.typed=!1}return n}}}function ys(){return{kind:"transformation",type:"to_upper_case",reference:ys,async:!1,"~run"(r){return r.value=r.value.toUpperCase(),r}}}function gs(r){return{kind:"transformation",type:"transform",reference:gs,async:!1,operation:r,"~run"(n){return n.value=this.operation(n.value),n}}}function bs(r){return{kind:"transformation",type:"transform",reference:bs,async:!0,operation:r,async"~run"(n){return n.value=await this.operation(n.value),n}}}function xs(){return{kind:"transformation",type:"trim",reference:xs,async:!1,"~run"(r){return r.value=r.value.trim(),r}}}function ks(){return{kind:"transformation",type:"trim_end",reference:ks,async:!1,"~run"(r){return r.value=r.value.trimEnd(),r}}}function _s(){return{kind:"transformation",type:"trim_start",reference:_s,async:!1,"~run"(r){return r.value=r.value.trimStart(),r}}}function ws(r){return{kind:"validation",type:"ulid",reference:ws,async:!1,expects:null,requirement:vi,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"ULID",n,e),n}}}function Es(r){return{kind:"validation",type:"url",reference:Es,async:!1,expects:null,requirement(n){try{return new URL(n),!0}catch{return!1}},message:r,"~run"(n,e){return n.typed&&!this.requirement(n.value)&&y(this,"URL",n,e),n}}}function As(r){return{kind:"validation",type:"uuid",reference:As,async:!1,expects:null,requirement:yi,message:r,"~run"(n,e){return n.typed&&!this.requirement.test(n.value)&&y(this,"UUID",n,e),n}}}function Ss(r,n){return{kind:"validation",type:"value",reference:Ss,async:!1,expects:r instanceof Date?r.toJSON():z(r),requirement:r,message:n,"~run"(e,a){return e.typed&&!(this.requirement<=e.value&&this.requirement>=e.value)&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}function Is(r,n){return{kind:"validation",type:"values",reference:Is,async:!1,expects:`${X(r.map(e=>e instanceof Date?e.toJSON():z(e)),"|")}`,requirement:r,message:n,"~run"(e,a){return e.typed&&!this.requirement.some(l=>l<=e.value&&l>=e.value)&&y(this,"value",e,a,{received:e.value instanceof Date?e.value.toJSON():z(e.value)}),e}}}function Ps(r,n,e){return{kind:"validation",type:"words",reference:Ps,async:!1,expects:`${n}`,locales:r,requirement:n,message:e,"~run"(a,l){if(a.typed){const m=C(this.locales,a.value);m!==this.requirement&&y(this,"words",a,l,{received:`${m}`})}return a}}}function xc(r,n){const e=r["~run"]({value:n},{abortEarly:!0}).issues;if(e)throw new ue(e)}function kc(r,n){return{...r,get"~standard"(){return x(this)},"~run"(e,a){return r["~run"](e,{...a,...n})}}}function re(r,n,e){return typeof r.fallback=="function"?r.fallback(n,e):r.fallback}function _c(r,n){return{...r,fallback:n,get"~standard"(){return x(this)},"~run"(e,a){const l=r["~run"](e,a);return l.issues?{typed:!0,value:re(this,l,a)}:l}}}function wc(r,n){return{...r,fallback:n,async:!0,get"~standard"(){return x(this)},async"~run"(e,a){const l=await r["~run"](e,a);return l.issues?{typed:!0,value:await re(this,l,a)}:l}}}function Ec(r){const n={};for(const e of r)if(e.path){const a=mn(e);a?(n.nested||(n.nested={}),n.nested[a]?n.nested[a].push(e.message):n.nested[a]=[e.message]):n.other?n.other.push(e.message):n.other=[e.message]}else n.root?n.root.push(e.message):n.root=[e.message];return n}function Ac(r,n){return{...r,"~run"(e,a){const l=e.issues&&[...e.issues];if(e=r["~run"](e,a),e.issues){for(const m of e.issues)if(!l?.includes(m)){let h=e.value;for(const g of n){const v=h[g],k={type:"unknown",origin:"value",input:h,key:g,value:v};if(m.path?m.path.push(k):m.path=[k],!v)break;h=v}}}return e}}}function Sc(r,n){return{...r,async:!0,async"~run"(e,a){const l=e.issues&&[...e.issues];if(e=await r["~run"](e,a),e.issues){for(const m of e.issues)if(!l?.includes(m)){let h=e.value;for(const g of n){const v=h[g],k={type:"unknown",origin:"value",input:h,key:g,value:v};if(m.path?m.path.push(k):m.path=[k],!v)break;h=v}}}return e}}}function J(r,n,e){return typeof r.default=="function"?r.default(n,e):r.default}function dn(r){if("entries"in r){const n={};for(const e in r.entries)n[e]=dn(r.entries[e]);return n}return"items"in r?r.items.map(dn):J(r)}async function hn(r){return"entries"in r?Object.fromEntries(await Promise.all(Object.entries(r.entries).map(async([n,e])=>[n,await hn(e)]))):"items"in r?Promise.all(r.items.map(hn)):J(r)}function Ic(r){return te(r,"description")}function Pc(r){const n=[];function e(a){if("pipe"in a)for(const l of a.pipe)l.kind==="schema"&&"pipe"in l?e(l):l.kind==="metadata"&&l.type==="examples"&&n.push(...l.examples)}return e(r),n}function vn(r){if("entries"in r){const n={};for(const e in r.entries)n[e]=vn(r.entries[e]);return n}return"items"in r?r.items.map(vn):re(r)}async function yn(r){return"entries"in r?Object.fromEntries(await Promise.all(Object.entries(r.entries).map(async([n,e])=>[n,await yn(e)]))):"items"in r?Promise.all(r.items.map(yn)):re(r)}function jc(r){const n={};function e(a){if("pipe"in a)for(const l of a.pipe)l.kind==="schema"&&"pipe"in l?e(l):l.kind==="metadata"&&l.type==="metadata"&&Object.assign(n,l.metadata)}return e(r),n}function Oc(r){return te(r,"title")}function Cc(r,n){return!r["~run"]({value:n},{abortEarly:!0}).issues}function js(){return{kind:"schema",type:"any",reference:js,expects:"any",async:!1,get"~standard"(){return x(this)},"~run"(r){return r.typed=!0,r}}}function Os(r,n){return{kind:"schema",type:"array",reference:Os,expects:"Array",async:!1,item:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];for(let m=0;m<l.length;m++){const h=l[m],g=this.item["~run"]({value:h},a);if(g.issues){const v={type:"array",origin:"value",input:l,key:m,value:h};for(const k of g.issues)k.path?k.path.unshift(v):k.path=[v],e.issues?.push(k);if(e.issues||(e.issues=g.issues),a.abortEarly){e.typed=!1;break}}g.typed||(e.typed=!1),e.value.push(g.value)}}else y(this,"type",e,a);return e}}}function Cs(r,n){return{kind:"schema",type:"array",reference:Cs,expects:"Array",async:!0,item:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];const m=await Promise.all(l.map(h=>this.item["~run"]({value:h},a)));for(let h=0;h<m.length;h++){const g=m[h];if(g.issues){const v={type:"array",origin:"value",input:l,key:h,value:l[h]};for(const k of g.issues)k.path?k.path.unshift(v):k.path=[v],e.issues?.push(k);if(e.issues||(e.issues=g.issues),a.abortEarly){e.typed=!1;break}}g.typed||(e.typed=!1),e.value.push(g.value)}}else y(this,"type",e,a);return e}}}function zs(r){return{kind:"schema",type:"bigint",reference:zs,expects:"bigint",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return typeof n.value=="bigint"?n.typed=!0:y(this,"type",n,e),n}}}function Rs(r){return{kind:"schema",type:"blob",reference:Rs,expects:"Blob",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return n.value instanceof Blob?n.typed=!0:y(this,"type",n,e),n}}}function Ds(r){return{kind:"schema",type:"boolean",reference:Ds,expects:"boolean",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return typeof n.value=="boolean"?n.typed=!0:y(this,"type",n,e),n}}}function Ns(r,n){return{kind:"schema",type:"custom",reference:Ns,expects:"unknown",async:!1,check:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){return this.check(e.value)?e.typed=!0:y(this,"type",e,a),e}}}function Fs(r,n){return{kind:"schema",type:"custom",reference:Fs,expects:"unknown",async:!0,check:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){return await this.check(e.value)?e.typed=!0:y(this,"type",e,a),e}}}function Ts(r){return{kind:"schema",type:"date",reference:Ts,expects:"Date",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return n.value instanceof Date?isNaN(n.value)?y(this,"type",n,e,{received:'"Invalid Date"'}):n.typed=!0:y(this,"type",n,e),n}}}function gn(r,n){const e=[];for(const a in r)(`${+a}`!==a||typeof r[a]!="string"||!Object.is(r[r[a]],+a))&&e.push(r[a]);return{kind:"schema",type:"enum",reference:gn,expects:X(e.map(z),"|"),async:!1,enum:r,options:e,message:n,get"~standard"(){return x(this)},"~run"(a,l){return this.options.includes(a.value)?a.typed=!0:y(this,"type",a,l),a}}}function qs(r,n){return{kind:"schema",type:"exact_optional",reference:qs,expects:r.expects,async:!1,wrapped:r,default:n,get"~standard"(){return x(this)},"~run"(e,a){return this.wrapped["~run"](e,a)}}}function Ms(r,n){return{kind:"schema",type:"exact_optional",reference:Ms,expects:r.expects,async:!0,wrapped:r,default:n,get"~standard"(){return x(this)},async"~run"(e,a){return this.wrapped["~run"](e,a)}}}function $s(r){return{kind:"schema",type:"file",reference:$s,expects:"File",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return n.value instanceof File?n.typed=!0:y(this,"type",n,e),n}}}function bn(r){return{kind:"schema",type:"function",reference:bn,expects:"Function",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return typeof n.value=="function"?n.typed=!0:y(this,"type",n,e),n}}}function Ls(r,n){return{kind:"schema",type:"instance",reference:Ls,expects:r.name,async:!1,class:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value instanceof this.class?e.typed=!0:y(this,"type",e,a),e}}}function Ge(r,n){if(typeof r==typeof n){if(r===n||r instanceof Date&&n instanceof Date&&+r==+n)return{value:r};if(r&&n&&r.constructor===Object&&n.constructor===Object){for(const e in n)if(e in r){const a=Ge(r[e],n[e]);if(a.issue)return a;r[e]=a.value}else r[e]=n[e];return{value:r}}if(Array.isArray(r)&&Array.isArray(n)&&r.length===n.length){for(let e=0;e<r.length;e++){const a=Ge(r[e],n[e]);if(a.issue)return a;r[e]=a.value}return{value:r}}}return{issue:!0}}function Gs(r,n){return{kind:"schema",type:"intersect",reference:Gs,expects:X(r.map(e=>e.expects),"&"),async:!1,options:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){if(this.options.length){const l=e.value;let m;e.typed=!0;for(const h of this.options){const g=h["~run"]({value:l},a);if(g.issues&&(e.issues?e.issues.push(...g.issues):e.issues=g.issues,a.abortEarly)){e.typed=!1;break}g.typed||(e.typed=!1),e.typed&&(m?m.push(g.value):m=[g.value])}if(e.typed){e.value=m[0];for(let h=1;h<m.length;h++){const g=Ge(e.value,m[h]);if(g.issue){y(this,"type",e,a,{received:"unknown"});break}e.value=g.value}}}else y(this,"type",e,a);return e}}}function Xs(r,n){return{kind:"schema",type:"intersect",reference:Xs,expects:X(r.map(e=>e.expects),"&"),async:!0,options:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){if(this.options.length){const l=e.value;let m;e.typed=!0;const h=await Promise.all(this.options.map(g=>g["~run"]({value:l},a)));for(const g of h){if(g.issues&&(e.issues?e.issues.push(...g.issues):e.issues=g.issues,a.abortEarly)){e.typed=!1;break}g.typed||(e.typed=!1),e.typed&&(m?m.push(g.value):m=[g.value])}if(e.typed){e.value=m[0];for(let g=1;g<m.length;g++){const v=Ge(e.value,m[g]);if(v.issue){y(this,"type",e,a,{received:"unknown"});break}e.value=v.value}}}else y(this,"type",e,a);return e}}}function Ws(r){return{kind:"schema",type:"lazy",reference:Ws,expects:"unknown",async:!1,getter:r,get"~standard"(){return x(this)},"~run"(n,e){return this.getter(n.value)["~run"](n,e)}}}function Us(r){return{kind:"schema",type:"lazy",reference:Us,expects:"unknown",async:!0,getter:r,get"~standard"(){return x(this)},async"~run"(n,e){return(await this.getter(n.value))["~run"](n,e)}}}function Vs(r,n){return{kind:"schema",type:"literal",reference:Vs,expects:z(r),async:!1,literal:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value===this.literal?e.typed=!0:y(this,"type",e,a),e}}}function Hs(r,n){return{kind:"schema",type:"loose_object",reference:Hs,expects:"Object",async:!1,entries:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(l&&typeof l=="object"){e.typed=!0,e.value={};for(const m in this.entries){const h=this.entries[m];if(m in l||(h.type==="exact_optional"||h.type==="optional"||h.type==="nullish")&&h.default!==void 0){const g=m in l?l[m]:J(h),v=h["~run"]({value:g},a);if(v.issues){const k={type:"object",origin:"value",input:l,key:m,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],e.issues?.push(w);if(e.issues||(e.issues=v.issues),a.abortEarly){e.typed=!1;break}}v.typed||(e.typed=!1),e.value[m]=v.value}else if(h.fallback!==void 0)e.value[m]=re(h);else if(h.type!=="exact_optional"&&h.type!=="optional"&&h.type!=="nullish"&&(y(this,"key",e,a,{input:void 0,expected:`"${m}"`,path:[{type:"object",origin:"key",input:l,key:m,value:l[m]}]}),a.abortEarly))break}if(!e.issues||!a.abortEarly)for(const m in l)F(l,m)&&!(m in this.entries)&&(e.value[m]=l[m])}else y(this,"type",e,a);return e}}}function Bs(r,n){return{kind:"schema",type:"loose_object",reference:Bs,expects:"Object",async:!0,entries:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(l&&typeof l=="object"){e.typed=!0,e.value={};const m=await Promise.all(Object.entries(this.entries).map(async([h,g])=>{if(h in l||(g.type==="exact_optional"||g.type==="optional"||g.type==="nullish")&&g.default!==void 0){const v=h in l?l[h]:await J(g);return[h,v,g,await g["~run"]({value:v},a)]}return[h,l[h],g,null]}));for(const[h,g,v,k]of m)if(k){if(k.issues){const w={type:"object",origin:"value",input:l,key:h,value:g};for(const O of k.issues)O.path?O.path.unshift(w):O.path=[w],e.issues?.push(O);if(e.issues||(e.issues=k.issues),a.abortEarly){e.typed=!1;break}}k.typed||(e.typed=!1),e.value[h]=k.value}else if(v.fallback!==void 0)e.value[h]=await re(v);else if(v.type!=="exact_optional"&&v.type!=="optional"&&v.type!=="nullish"&&(y(this,"key",e,a,{input:void 0,expected:`"${h}"`,path:[{type:"object",origin:"key",input:l,key:h,value:g}]}),a.abortEarly))break;if(!e.issues||!a.abortEarly)for(const h in l)F(l,h)&&!(h in this.entries)&&(e.value[h]=l[h])}else y(this,"type",e,a);return e}}}function Ys(r,n){return{kind:"schema",type:"loose_tuple",reference:Ys,expects:"Array",async:!1,items:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];for(let m=0;m<this.items.length;m++){const h=l[m],g=this.items[m]["~run"]({value:h},a);if(g.issues){const v={type:"array",origin:"value",input:l,key:m,value:h};for(const k of g.issues)k.path?k.path.unshift(v):k.path=[v],e.issues?.push(k);if(e.issues||(e.issues=g.issues),a.abortEarly){e.typed=!1;break}}g.typed||(e.typed=!1),e.value.push(g.value)}if(!e.issues||!a.abortEarly)for(let m=this.items.length;m<l.length;m++)e.value.push(l[m])}else y(this,"type",e,a);return e}}}function Js(r,n){return{kind:"schema",type:"loose_tuple",reference:Js,expects:"Array",async:!0,items:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];const m=await Promise.all(this.items.map(async(h,g)=>{const v=l[g];return[g,v,await h["~run"]({value:v},a)]}));for(const[h,g,v]of m){if(v.issues){const k={type:"array",origin:"value",input:l,key:h,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],e.issues?.push(w);if(e.issues||(e.issues=v.issues),a.abortEarly){e.typed=!1;break}}v.typed||(e.typed=!1),e.value.push(v.value)}if(!e.issues||!a.abortEarly)for(let h=this.items.length;h<l.length;h++)e.value.push(l[h])}else y(this,"type",e,a);return e}}}function Ks(r,n,e){return{kind:"schema",type:"map",reference:Ks,expects:"Map",async:!1,key:r,value:n,message:e,get"~standard"(){return x(this)},"~run"(a,l){const m=a.value;if(m instanceof Map){a.typed=!0,a.value=new Map;for(const[h,g]of m){const v=this.key["~run"]({value:h},l);if(v.issues){const w={type:"map",origin:"key",input:m,key:h,value:g};for(const O of v.issues)O.path?O.path.unshift(w):O.path=[w],a.issues?.push(O);if(a.issues||(a.issues=v.issues),l.abortEarly){a.typed=!1;break}}const k=this.value["~run"]({value:g},l);if(k.issues){const w={type:"map",origin:"value",input:m,key:h,value:g};for(const O of k.issues)O.path?O.path.unshift(w):O.path=[w],a.issues?.push(O);if(a.issues||(a.issues=k.issues),l.abortEarly){a.typed=!1;break}}(!v.typed||!k.typed)&&(a.typed=!1),a.value.set(v.value,k.value)}}else y(this,"type",a,l);return a}}}function Zs(r,n,e){return{kind:"schema",type:"map",reference:Zs,expects:"Map",async:!0,key:r,value:n,message:e,get"~standard"(){return x(this)},async"~run"(a,l){const m=a.value;if(m instanceof Map){a.typed=!0,a.value=new Map;const h=await Promise.all([...m].map(([g,v])=>Promise.all([g,v,this.key["~run"]({value:g},l),this.value["~run"]({value:v},l)])));for(const[g,v,k,w]of h){if(k.issues){const O={type:"map",origin:"key",input:m,key:g,value:v};for(const G of k.issues)G.path?G.path.unshift(O):G.path=[O],a.issues?.push(G);if(a.issues||(a.issues=k.issues),l.abortEarly){a.typed=!1;break}}if(w.issues){const O={type:"map",origin:"value",input:m,key:g,value:v};for(const G of w.issues)G.path?G.path.unshift(O):G.path=[O],a.issues?.push(G);if(a.issues||(a.issues=w.issues),l.abortEarly){a.typed=!1;break}}(!k.typed||!w.typed)&&(a.typed=!1),a.value.set(k.value,w.value)}}else y(this,"type",a,l);return a}}}function Qs(r){return{kind:"schema",type:"nan",reference:Qs,expects:"NaN",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return Number.isNaN(n.value)?n.typed=!0:y(this,"type",n,e),n}}}function eo(r){return{kind:"schema",type:"never",reference:eo,expects:"never",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return y(this,"type",n,e),n}}}function no(r,n){return{kind:"schema",type:"non_nullable",reference:no,expects:"!null",async:!1,wrapped:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value!==null&&(e=this.wrapped["~run"](e,a)),e.value===null&&y(this,"type",e,a),e}}}function to(r,n){return{kind:"schema",type:"non_nullable",reference:to,expects:"!null",async:!0,wrapped:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){return e.value!==null&&(e=await this.wrapped["~run"](e,a)),e.value===null&&y(this,"type",e,a),e}}}function ro(r,n){return{kind:"schema",type:"non_nullish",reference:ro,expects:"(!null & !undefined)",async:!1,wrapped:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value===null||e.value===void 0||(e=this.wrapped["~run"](e,a)),(e.value===null||e.value===void 0)&&y(this,"type",e,a),e}}}function io(r,n){return{kind:"schema",type:"non_nullish",reference:io,expects:"(!null & !undefined)",async:!0,wrapped:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){return e.value===null||e.value===void 0||(e=await this.wrapped["~run"](e,a)),(e.value===null||e.value===void 0)&&y(this,"type",e,a),e}}}function xn(r,n){return{kind:"schema",type:"non_optional",reference:xn,expects:"!undefined",async:!1,wrapped:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value!==void 0&&(e=this.wrapped["~run"](e,a)),e.value===void 0&&y(this,"type",e,a),e}}}function kn(r,n){return{kind:"schema",type:"non_optional",reference:kn,expects:"!undefined",async:!0,wrapped:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){return e.value!==void 0&&(e=await this.wrapped["~run"](e,a)),e.value===void 0&&y(this,"type",e,a),e}}}function _n(r){return{kind:"schema",type:"null",reference:_n,expects:"null",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return n.value===null?n.typed=!0:y(this,"type",n,e),n}}}function ao(r,n){return{kind:"schema",type:"nullable",reference:ao,expects:`(${r.expects} | null)`,async:!1,wrapped:r,default:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value===null&&(this.default!==void 0&&(e.value=J(this,e,a)),e.value===null)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function so(r,n){return{kind:"schema",type:"nullable",reference:so,expects:`(${r.expects} | null)`,async:!0,wrapped:r,default:n,get"~standard"(){return x(this)},async"~run"(e,a){return e.value===null&&(this.default!==void 0&&(e.value=await J(this,e,a)),e.value===null)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function oo(r,n){return{kind:"schema",type:"nullish",reference:oo,expects:`(${r.expects} | null | undefined)`,async:!1,wrapped:r,default:n,get"~standard"(){return x(this)},"~run"(e,a){return(e.value===null||e.value===void 0)&&(this.default!==void 0&&(e.value=J(this,e,a)),e.value===null||e.value===void 0)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function uo(r,n){return{kind:"schema",type:"nullish",reference:uo,expects:`(${r.expects} | null | undefined)`,async:!0,wrapped:r,default:n,get"~standard"(){return x(this)},async"~run"(e,a){return(e.value===null||e.value===void 0)&&(this.default!==void 0&&(e.value=await J(this,e,a)),e.value===null||e.value===void 0)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function lo(r){return{kind:"schema",type:"number",reference:lo,expects:"number",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return typeof n.value=="number"&&!isNaN(n.value)?n.typed=!0:y(this,"type",n,e),n}}}function fo(r,n){return{kind:"schema",type:"object",reference:fo,expects:"Object",async:!1,entries:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(l&&typeof l=="object"){e.typed=!0,e.value={};for(const m in this.entries){const h=this.entries[m];if(m in l||(h.type==="exact_optional"||h.type==="optional"||h.type==="nullish")&&h.default!==void 0){const g=m in l?l[m]:J(h),v=h["~run"]({value:g},a);if(v.issues){const k={type:"object",origin:"value",input:l,key:m,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],e.issues?.push(w);if(e.issues||(e.issues=v.issues),a.abortEarly){e.typed=!1;break}}v.typed||(e.typed=!1),e.value[m]=v.value}else if(h.fallback!==void 0)e.value[m]=re(h);else if(h.type!=="exact_optional"&&h.type!=="optional"&&h.type!=="nullish"&&(y(this,"key",e,a,{input:void 0,expected:`"${m}"`,path:[{type:"object",origin:"key",input:l,key:m,value:l[m]}]}),a.abortEarly))break}}else y(this,"type",e,a);return e}}}function co(r,n){return{kind:"schema",type:"object",reference:co,expects:"Object",async:!0,entries:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(l&&typeof l=="object"){e.typed=!0,e.value={};const m=await Promise.all(Object.entries(this.entries).map(async([h,g])=>{if(h in l||(g.type==="exact_optional"||g.type==="optional"||g.type==="nullish")&&g.default!==void 0){const v=h in l?l[h]:await J(g);return[h,v,g,await g["~run"]({value:v},a)]}return[h,l[h],g,null]}));for(const[h,g,v,k]of m)if(k){if(k.issues){const w={type:"object",origin:"value",input:l,key:h,value:g};for(const O of k.issues)O.path?O.path.unshift(w):O.path=[w],e.issues?.push(O);if(e.issues||(e.issues=k.issues),a.abortEarly){e.typed=!1;break}}k.typed||(e.typed=!1),e.value[h]=k.value}else if(v.fallback!==void 0)e.value[h]=await re(v);else if(v.type!=="exact_optional"&&v.type!=="optional"&&v.type!=="nullish"&&(y(this,"key",e,a,{input:void 0,expected:`"${h}"`,path:[{type:"object",origin:"key",input:l,key:h,value:g}]}),a.abortEarly))break}else y(this,"type",e,a);return e}}}function po(r,n,e){return{kind:"schema",type:"object_with_rest",reference:po,expects:"Object",async:!1,entries:r,rest:n,message:e,get"~standard"(){return x(this)},"~run"(a,l){const m=a.value;if(m&&typeof m=="object"){a.typed=!0,a.value={};for(const h in this.entries){const g=this.entries[h];if(h in m||(g.type==="exact_optional"||g.type==="optional"||g.type==="nullish")&&g.default!==void 0){const v=h in m?m[h]:J(g),k=g["~run"]({value:v},l);if(k.issues){const w={type:"object",origin:"value",input:m,key:h,value:v};for(const O of k.issues)O.path?O.path.unshift(w):O.path=[w],a.issues?.push(O);if(a.issues||(a.issues=k.issues),l.abortEarly){a.typed=!1;break}}k.typed||(a.typed=!1),a.value[h]=k.value}else if(g.fallback!==void 0)a.value[h]=re(g);else if(g.type!=="exact_optional"&&g.type!=="optional"&&g.type!=="nullish"&&(y(this,"key",a,l,{input:void 0,expected:`"${h}"`,path:[{type:"object",origin:"key",input:m,key:h,value:m[h]}]}),l.abortEarly))break}if(!a.issues||!l.abortEarly){for(const h in m)if(F(m,h)&&!(h in this.entries)){const g=this.rest["~run"]({value:m[h]},l);if(g.issues){const v={type:"object",origin:"value",input:m,key:h,value:m[h]};for(const k of g.issues)k.path?k.path.unshift(v):k.path=[v],a.issues?.push(k);if(a.issues||(a.issues=g.issues),l.abortEarly){a.typed=!1;break}}g.typed||(a.typed=!1),a.value[h]=g.value}}}else y(this,"type",a,l);return a}}}function mo(r,n,e){return{kind:"schema",type:"object_with_rest",reference:mo,expects:"Object",async:!0,entries:r,rest:n,message:e,get"~standard"(){return x(this)},async"~run"(a,l){const m=a.value;if(m&&typeof m=="object"){a.typed=!0,a.value={};const[h,g]=await Promise.all([Promise.all(Object.entries(this.entries).map(async([v,k])=>{if(v in m||(k.type==="exact_optional"||k.type==="optional"||k.type==="nullish")&&k.default!==void 0){const w=v in m?m[v]:await J(k);return[v,w,k,await k["~run"]({value:w},l)]}return[v,m[v],k,null]})),Promise.all(Object.entries(m).filter(([v])=>F(m,v)&&!(v in this.entries)).map(async([v,k])=>[v,k,await this.rest["~run"]({value:k},l)]))]);for(const[v,k,w,O]of h)if(O){if(O.issues){const G={type:"object",origin:"value",input:m,key:v,value:k};for(const K of O.issues)K.path?K.path.unshift(G):K.path=[G],a.issues?.push(K);if(a.issues||(a.issues=O.issues),l.abortEarly){a.typed=!1;break}}O.typed||(a.typed=!1),a.value[v]=O.value}else if(w.fallback!==void 0)a.value[v]=await re(w);else if(w.type!=="exact_optional"&&w.type!=="optional"&&w.type!=="nullish"&&(y(this,"key",a,l,{input:void 0,expected:`"${v}"`,path:[{type:"object",origin:"key",input:m,key:v,value:k}]}),l.abortEarly))break;if(!a.issues||!l.abortEarly)for(const[v,k,w]of g){if(w.issues){const O={type:"object",origin:"value",input:m,key:v,value:k};for(const G of w.issues)G.path?G.path.unshift(O):G.path=[O],a.issues?.push(G);if(a.issues||(a.issues=w.issues),l.abortEarly){a.typed=!1;break}}w.typed||(a.typed=!1),a.value[v]=w.value}}else y(this,"type",a,l);return a}}}function wn(r,n){return{kind:"schema",type:"optional",reference:wn,expects:`(${r.expects} | undefined)`,async:!1,wrapped:r,default:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value===void 0&&(this.default!==void 0&&(e.value=J(this,e,a)),e.value===void 0)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function En(r,n){return{kind:"schema",type:"optional",reference:En,expects:`(${r.expects} | undefined)`,async:!0,wrapped:r,default:n,get"~standard"(){return x(this)},async"~run"(e,a){return e.value===void 0&&(this.default!==void 0&&(e.value=await J(this,e,a)),e.value===void 0)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function An(r,n){return{kind:"schema",type:"picklist",reference:An,expects:X(r.map(z),"|"),async:!1,options:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){return this.options.includes(e.value)?e.typed=!0:y(this,"type",e,a),e}}}function ho(r){return{kind:"schema",type:"promise",reference:ho,expects:"Promise",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return n.value instanceof Promise?n.typed=!0:y(this,"type",n,e),n}}}function vo(r,n,e){return{kind:"schema",type:"record",reference:vo,expects:"Object",async:!1,key:r,value:n,message:e,get"~standard"(){return x(this)},"~run"(a,l){const m=a.value;if(m&&typeof m=="object"){a.typed=!0,a.value={};for(const h in m)if(F(m,h)){const g=m[h],v=this.key["~run"]({value:h},l);if(v.issues){const w={type:"object",origin:"key",input:m,key:h,value:g};for(const O of v.issues)O.path=[w],a.issues?.push(O);if(a.issues||(a.issues=v.issues),l.abortEarly){a.typed=!1;break}}const k=this.value["~run"]({value:g},l);if(k.issues){const w={type:"object",origin:"value",input:m,key:h,value:g};for(const O of k.issues)O.path?O.path.unshift(w):O.path=[w],a.issues?.push(O);if(a.issues||(a.issues=k.issues),l.abortEarly){a.typed=!1;break}}(!v.typed||!k.typed)&&(a.typed=!1),v.typed&&(a.value[v.value]=k.value)}}else y(this,"type",a,l);return a}}}function yo(r,n,e){return{kind:"schema",type:"record",reference:yo,expects:"Object",async:!0,key:r,value:n,message:e,get"~standard"(){return x(this)},async"~run"(a,l){const m=a.value;if(m&&typeof m=="object"){a.typed=!0,a.value={};const h=await Promise.all(Object.entries(m).filter(([g])=>F(m,g)).map(([g,v])=>Promise.all([g,v,this.key["~run"]({value:g},l),this.value["~run"]({value:v},l)])));for(const[g,v,k,w]of h){if(k.issues){const O={type:"object",origin:"key",input:m,key:g,value:v};for(const G of k.issues)G.path=[O],a.issues?.push(G);if(a.issues||(a.issues=k.issues),l.abortEarly){a.typed=!1;break}}if(w.issues){const O={type:"object",origin:"value",input:m,key:g,value:v};for(const G of w.issues)G.path?G.path.unshift(O):G.path=[O],a.issues?.push(G);if(a.issues||(a.issues=w.issues),l.abortEarly){a.typed=!1;break}}(!k.typed||!w.typed)&&(a.typed=!1),k.typed&&(a.value[k.value]=w.value)}}else y(this,"type",a,l);return a}}}function go(r,n){return{kind:"schema",type:"set",reference:go,expects:"Set",async:!1,value:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(l instanceof Set){e.typed=!0,e.value=new Set;for(const m of l){const h=this.value["~run"]({value:m},a);if(h.issues){const g={type:"set",origin:"value",input:l,key:null,value:m};for(const v of h.issues)v.path?v.path.unshift(g):v.path=[g],e.issues?.push(v);if(e.issues||(e.issues=h.issues),a.abortEarly){e.typed=!1;break}}h.typed||(e.typed=!1),e.value.add(h.value)}}else y(this,"type",e,a);return e}}}function bo(r,n){return{kind:"schema",type:"set",reference:bo,expects:"Set",async:!0,value:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(l instanceof Set){e.typed=!0,e.value=new Set;const m=await Promise.all([...l].map(async h=>[h,await this.value["~run"]({value:h},a)]));for(const[h,g]of m){if(g.issues){const v={type:"set",origin:"value",input:l,key:null,value:h};for(const k of g.issues)k.path?k.path.unshift(v):k.path=[v],e.issues?.push(k);if(e.issues||(e.issues=g.issues),a.abortEarly){e.typed=!1;break}}g.typed||(e.typed=!1),e.value.add(g.value)}}else y(this,"type",e,a);return e}}}function xo(r,n){return{kind:"schema",type:"strict_object",reference:xo,expects:"Object",async:!1,entries:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(l&&typeof l=="object"){e.typed=!0,e.value={};for(const m in this.entries){const h=this.entries[m];if(m in l||(h.type==="exact_optional"||h.type==="optional"||h.type==="nullish")&&h.default!==void 0){const g=m in l?l[m]:J(h),v=h["~run"]({value:g},a);if(v.issues){const k={type:"object",origin:"value",input:l,key:m,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],e.issues?.push(w);if(e.issues||(e.issues=v.issues),a.abortEarly){e.typed=!1;break}}v.typed||(e.typed=!1),e.value[m]=v.value}else if(h.fallback!==void 0)e.value[m]=re(h);else if(h.type!=="exact_optional"&&h.type!=="optional"&&h.type!=="nullish"&&(y(this,"key",e,a,{input:void 0,expected:`"${m}"`,path:[{type:"object",origin:"key",input:l,key:m,value:l[m]}]}),a.abortEarly))break}if(!e.issues||!a.abortEarly){for(const m in l)if(!(m in this.entries)){y(this,"key",e,a,{input:m,expected:"never",path:[{type:"object",origin:"key",input:l,key:m,value:l[m]}]});break}}}else y(this,"type",e,a);return e}}}function ko(r,n){return{kind:"schema",type:"strict_object",reference:ko,expects:"Object",async:!0,entries:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(l&&typeof l=="object"){e.typed=!0,e.value={};const m=await Promise.all(Object.entries(this.entries).map(async([h,g])=>{if(h in l||(g.type==="exact_optional"||g.type==="optional"||g.type==="nullish")&&g.default!==void 0){const v=h in l?l[h]:await J(g);return[h,v,g,await g["~run"]({value:v},a)]}return[h,l[h],g,null]}));for(const[h,g,v,k]of m)if(k){if(k.issues){const w={type:"object",origin:"value",input:l,key:h,value:g};for(const O of k.issues)O.path?O.path.unshift(w):O.path=[w],e.issues?.push(O);if(e.issues||(e.issues=k.issues),a.abortEarly){e.typed=!1;break}}k.typed||(e.typed=!1),e.value[h]=k.value}else if(v.fallback!==void 0)e.value[h]=await re(v);else if(v.type!=="exact_optional"&&v.type!=="optional"&&v.type!=="nullish"&&(y(this,"key",e,a,{input:void 0,expected:`"${h}"`,path:[{type:"object",origin:"key",input:l,key:h,value:g}]}),a.abortEarly))break;if(!e.issues||!a.abortEarly){for(const h in l)if(!(h in this.entries)){y(this,"key",e,a,{input:h,expected:"never",path:[{type:"object",origin:"key",input:l,key:h,value:l[h]}]});break}}}else y(this,"type",e,a);return e}}}function _o(r,n){return{kind:"schema",type:"strict_tuple",reference:_o,expects:"Array",async:!1,items:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];for(let m=0;m<this.items.length;m++){const h=l[m],g=this.items[m]["~run"]({value:h},a);if(g.issues){const v={type:"array",origin:"value",input:l,key:m,value:h};for(const k of g.issues)k.path?k.path.unshift(v):k.path=[v],e.issues?.push(k);if(e.issues||(e.issues=g.issues),a.abortEarly){e.typed=!1;break}}g.typed||(e.typed=!1),e.value.push(g.value)}!(e.issues&&a.abortEarly)&&this.items.length<l.length&&y(this,"type",e,a,{input:l[this.items.length],expected:"never",path:[{type:"array",origin:"value",input:l,key:this.items.length,value:l[this.items.length]}]})}else y(this,"type",e,a);return e}}}function wo(r,n){return{kind:"schema",type:"strict_tuple",reference:wo,expects:"Array",async:!0,items:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];const m=await Promise.all(this.items.map(async(h,g)=>{const v=l[g];return[g,v,await h["~run"]({value:v},a)]}));for(const[h,g,v]of m){if(v.issues){const k={type:"array",origin:"value",input:l,key:h,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],e.issues?.push(w);if(e.issues||(e.issues=v.issues),a.abortEarly){e.typed=!1;break}}v.typed||(e.typed=!1),e.value.push(v.value)}!(e.issues&&a.abortEarly)&&this.items.length<l.length&&y(this,"type",e,a,{input:l[this.items.length],expected:"never",path:[{type:"array",origin:"value",input:l,key:this.items.length,value:l[this.items.length]}]})}else y(this,"type",e,a);return e}}}function Eo(r){return{kind:"schema",type:"string",reference:Eo,expects:"string",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return typeof n.value=="string"?n.typed=!0:y(this,"type",n,e),n}}}function Ao(r){return{kind:"schema",type:"symbol",reference:Ao,expects:"symbol",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return typeof n.value=="symbol"?n.typed=!0:y(this,"type",n,e),n}}}function So(r,n){return{kind:"schema",type:"tuple",reference:So,expects:"Array",async:!1,items:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];for(let m=0;m<this.items.length;m++){const h=l[m],g=this.items[m]["~run"]({value:h},a);if(g.issues){const v={type:"array",origin:"value",input:l,key:m,value:h};for(const k of g.issues)k.path?k.path.unshift(v):k.path=[v],e.issues?.push(k);if(e.issues||(e.issues=g.issues),a.abortEarly){e.typed=!1;break}}g.typed||(e.typed=!1),e.value.push(g.value)}}else y(this,"type",e,a);return e}}}function Io(r,n){return{kind:"schema",type:"tuple",reference:Io,expects:"Array",async:!0,items:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){const l=e.value;if(Array.isArray(l)){e.typed=!0,e.value=[];const m=await Promise.all(this.items.map(async(h,g)=>{const v=l[g];return[g,v,await h["~run"]({value:v},a)]}));for(const[h,g,v]of m){if(v.issues){const k={type:"array",origin:"value",input:l,key:h,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],e.issues?.push(w);if(e.issues||(e.issues=v.issues),a.abortEarly){e.typed=!1;break}}v.typed||(e.typed=!1),e.value.push(v.value)}}else y(this,"type",e,a);return e}}}function Po(r,n,e){return{kind:"schema",type:"tuple_with_rest",reference:Po,expects:"Array",async:!1,items:r,rest:n,message:e,get"~standard"(){return x(this)},"~run"(a,l){const m=a.value;if(Array.isArray(m)){a.typed=!0,a.value=[];for(let h=0;h<this.items.length;h++){const g=m[h],v=this.items[h]["~run"]({value:g},l);if(v.issues){const k={type:"array",origin:"value",input:m,key:h,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],a.issues?.push(w);if(a.issues||(a.issues=v.issues),l.abortEarly){a.typed=!1;break}}v.typed||(a.typed=!1),a.value.push(v.value)}if(!a.issues||!l.abortEarly)for(let h=this.items.length;h<m.length;h++){const g=m[h],v=this.rest["~run"]({value:g},l);if(v.issues){const k={type:"array",origin:"value",input:m,key:h,value:g};for(const w of v.issues)w.path?w.path.unshift(k):w.path=[k],a.issues?.push(w);if(a.issues||(a.issues=v.issues),l.abortEarly){a.typed=!1;break}}v.typed||(a.typed=!1),a.value.push(v.value)}}else y(this,"type",a,l);return a}}}function jo(r,n,e){return{kind:"schema",type:"tuple_with_rest",reference:jo,expects:"Array",async:!0,items:r,rest:n,message:e,get"~standard"(){return x(this)},async"~run"(a,l){const m=a.value;if(Array.isArray(m)){a.typed=!0,a.value=[];const[h,g]=await Promise.all([Promise.all(this.items.map(async(v,k)=>{const w=m[k];return[k,w,await v["~run"]({value:w},l)]})),Promise.all(m.slice(this.items.length).map(async(v,k)=>[k+this.items.length,v,await this.rest["~run"]({value:v},l)]))]);for(const[v,k,w]of h){if(w.issues){const O={type:"array",origin:"value",input:m,key:v,value:k};for(const G of w.issues)G.path?G.path.unshift(O):G.path=[O],a.issues?.push(G);if(a.issues||(a.issues=w.issues),l.abortEarly){a.typed=!1;break}}w.typed||(a.typed=!1),a.value.push(w.value)}if(!a.issues||!l.abortEarly)for(const[v,k,w]of g){if(w.issues){const O={type:"array",origin:"value",input:m,key:v,value:k};for(const G of w.issues)G.path?G.path.unshift(O):G.path=[O],a.issues?.push(G);if(a.issues||(a.issues=w.issues),l.abortEarly){a.typed=!1;break}}w.typed||(a.typed=!1),a.value.push(w.value)}}else y(this,"type",a,l);return a}}}function Sn(r){return{kind:"schema",type:"undefined",reference:Sn,expects:"undefined",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return n.value===void 0?n.typed=!0:y(this,"type",n,e),n}}}function Oo(r,n){return{kind:"schema",type:"undefinedable",reference:Oo,expects:`(${r.expects} | undefined)`,async:!1,wrapped:r,default:n,get"~standard"(){return x(this)},"~run"(e,a){return e.value===void 0&&(this.default!==void 0&&(e.value=J(this,e,a)),e.value===void 0)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function Co(r,n){return{kind:"schema",type:"undefinedable",reference:Co,expects:`(${r.expects} | undefined)`,async:!0,wrapped:r,default:n,get"~standard"(){return x(this)},async"~run"(e,a){return e.value===void 0&&(this.default!==void 0&&(e.value=await J(this,e,a)),e.value===void 0)?(e.typed=!0,e):this.wrapped["~run"](e,a)}}}function Xe(r){let n;if(r)for(const e of r)n?n.push(...e.issues):n=e.issues;return n}function zo(r,n){return{kind:"schema",type:"union",reference:zo,expects:X(r.map(e=>e.expects),"|"),async:!1,options:r,message:n,get"~standard"(){return x(this)},"~run"(e,a){let l,m,h;for(const g of this.options){const v=g["~run"]({value:e.value},a);if(v.typed)if(v.issues)m?m.push(v):m=[v];else{l=v;break}else h?h.push(v):h=[v]}if(l)return l;if(m){if(m.length===1)return m[0];y(this,"type",e,a,{issues:Xe(m)}),e.typed=!0}else{if(h?.length===1)return h[0];y(this,"type",e,a,{issues:Xe(h)})}return e}}}function Ro(r,n){return{kind:"schema",type:"union",reference:Ro,expects:X(r.map(e=>e.expects),"|"),async:!0,options:r,message:n,get"~standard"(){return x(this)},async"~run"(e,a){let l,m,h;for(const g of this.options){const v=await g["~run"]({value:e.value},a);if(v.typed)if(v.issues)m?m.push(v):m=[v];else{l=v;break}else h?h.push(v):h=[v]}if(l)return l;if(m){if(m.length===1)return m[0];y(this,"type",e,a,{issues:Xe(m)}),e.typed=!0}else{if(h?.length===1)return h[0];y(this,"type",e,a,{issues:Xe(h)})}return e}}}function Do(){return{kind:"schema",type:"unknown",reference:Do,expects:"unknown",async:!1,get"~standard"(){return x(this)},"~run"(r){return r.typed=!0,r}}}function No(r,n,e){return{kind:"schema",type:"variant",reference:No,expects:"Object",async:!1,key:r,options:n,message:e,get"~standard"(){return x(this)},"~run"(a,l){const m=a.value;if(m&&typeof m=="object"){let h,g=0,v=this.key,k=[];const w=(O,G)=>{for(const K of O.options){if(K.type==="variant")w(K,new Set(G).add(K.key));else{let Ce=!0,le=0;for(const H of G){const fe=K.entries[H];if(H in m?fe["~run"]({typed:!1,value:m[H]},{abortEarly:!0}).issues:fe.type!=="exact_optional"&&fe.type!=="optional"&&fe.type!=="nullish"){Ce=!1,v!==H&&(g<le||g===le&&H in m&&!(v in m))&&(g=le,v=H,k=[]),v===H&&k.push(K.entries[H].expects);break}le++}if(Ce){const H=K["~run"]({value:m},l);(!h||!h.typed&&H.typed)&&(h=H)}}if(h&&!h.issues)break}};if(w(this,new Set([this.key])),h)return h;y(this,"type",a,l,{input:m[v],expected:X(k,"|"),path:[{type:"object",origin:"value",input:m,key:v,value:m[v]}]})}else y(this,"type",a,l);return a}}}function Fo(r,n,e){return{kind:"schema",type:"variant",reference:Fo,expects:"Object",async:!0,key:r,options:n,message:e,get"~standard"(){return x(this)},async"~run"(a,l){const m=a.value;if(m&&typeof m=="object"){let h,g=0,v=this.key,k=[];const w=async(O,G)=>{for(const K of O.options){if(K.type==="variant")await w(K,new Set(G).add(K.key));else{let Ce=!0,le=0;for(const H of G){const fe=K.entries[H];if(H in m?(await fe["~run"]({typed:!1,value:m[H]},{abortEarly:!0})).issues:fe.type!=="exact_optional"&&fe.type!=="optional"&&fe.type!=="nullish"){Ce=!1,v!==H&&(g<le||g===le&&H in m&&!(v in m))&&(g=le,v=H,k=[]),v===H&&k.push(K.entries[H].expects);break}le++}if(Ce){const H=await K["~run"]({value:m},l);(!h||!h.typed&&H.typed)&&(h=H)}}if(h&&!h.issues)break}};if(await w(this,new Set([this.key])),h)return h;y(this,"type",a,l,{input:m[v],expected:X(k,"|"),path:[{type:"object",origin:"value",input:m,key:v,value:m[v]}]})}else y(this,"type",a,l);return a}}}function In(r){return{kind:"schema",type:"void",reference:In,expects:"void",async:!1,message:r,get"~standard"(){return x(this)},"~run"(n,e){return n.value===void 0?n.typed=!0:y(this,"type",n,e),n}}}function zc(r,n){return An(Object.keys(r.entries),n)}function Rc(r,n){return{...r,get"~standard"(){return x(this)},"~run"(e,a){return r["~run"](e,{...a,message:n})}}}function Dc(r,n){const e={...r.entries};for(const a of n)delete e[a];return{...r,entries:e,get"~standard"(){return x(this)}}}function To(r,n,e){const a=r["~run"]({value:n},s(e));if(a.issues)throw new ue(a.issues);return a.value}async function qo(r,n,e){const a=await r["~run"]({value:n},s(e));if(a.issues)throw new ue(a.issues);return a.value}function Nc(r,n){const e=a=>To(r,a,n);return e.schema=r,e.config=n,e}function Fc(r,n){const e=a=>qo(r,a,n);return e.schema=r,e.config=n,e}function Tc(r,n){const e={};for(const a in r.entries)e[a]=!n||n.includes(a)?wn(r.entries[a]):r.entries[a];return{...r,entries:e,get"~standard"(){return x(this)}}}function qc(r,n){const e={};for(const a in r.entries)e[a]=!n||n.includes(a)?En(r.entries[a]):r.entries[a];return{...r,entries:e,get"~standard"(){return x(this)}}}function Mc(r,n){const e={};for(const a of n)e[a]=r.entries[a];return{...r,entries:e,get"~standard"(){return x(this)}}}function $c(...r){return{...r[0],pipe:r,get"~standard"(){return x(this)},"~run"(n,e){for(const a of r)if(a.kind!=="metadata"){if(n.issues&&(a.kind==="schema"||a.kind==="transformation")){n.typed=!1;break}(!n.issues||!e.abortEarly&&!e.abortPipeEarly)&&(n=a["~run"](n,e))}return n}}}function Lc(...r){return{...r[0],pipe:r,async:!0,get"~standard"(){return x(this)},async"~run"(n,e){for(const a of r)if(a.kind!=="metadata"){if(n.issues&&(a.kind==="schema"||a.kind==="transformation")){n.typed=!1;break}(!n.issues||!e.abortEarly&&!e.abortPipeEarly)&&(n=await a["~run"](n,e))}return n}}}function Gc(r,n,e){const a=Array.isArray(n)?n:void 0,l=Array.isArray(n)?e:n,m={};for(const h in r.entries)m[h]=!a||a.includes(h)?xn(r.entries[h],l):r.entries[h];return{...r,entries:m,get"~standard"(){return x(this)}}}function Xc(r,n,e){const a=Array.isArray(n)?n:void 0,l=Array.isArray(n)?e:n,m={};for(const h in r.entries)m[h]=!a||a.includes(h)?kn(r.entries[h],l):r.entries[h];return{...r,entries:m,get"~standard"(){return x(this)}}}function Mo(r,n,e){const a=r["~run"]({value:n},s(e));return{typed:a.typed,success:!a.issues,output:a.value,issues:a.issues}}async function $o(r,n,e){const a=await r["~run"]({value:n},s(e));return{typed:a.typed,success:!a.issues,output:a.value,issues:a.issues}}function Wc(r,n){const e=a=>Mo(r,a,n);return e.schema=r,e.config=n,e}function Uc(r,n){const e=a=>$o(r,a,n);return e.schema=r,e.config=n,e}function Vc(r){let n="";for(const e of r){n&&(n+=`
`),n+=`× ${e.message}`;const a=mn(e);a&&(n+=`
  → at ${a}`)}return n}function Hc(r){return r.wrapped}return p.BASE64_REGEX=Wr,p.BIC_REGEX=Ur,p.CUID2_REGEX=Vr,p.DECIMAL_REGEX=Hr,p.DIGITS_REGEX=Br,p.EMAIL_REGEX=Yr,p.EMOJI_REGEX=Jr,p.HEXADECIMAL_REGEX=Kr,p.HEX_COLOR_REGEX=Zr,p.IMEI_REGEX=Qr,p.IPV4_REGEX=ei,p.IPV6_REGEX=ni,p.IP_REGEX=ti,p.ISO_DATE_REGEX=ri,p.ISO_DATE_TIME_REGEX=ii,p.ISO_TIMESTAMP_REGEX=oi,p.ISO_TIME_REGEX=ai,p.ISO_TIME_SECOND_REGEX=si,p.ISO_WEEK_REGEX=ui,p.MAC48_REGEX=li,p.MAC64_REGEX=fi,p.MAC_REGEX=ci,p.NANO_ID_REGEX=pi,p.OCTAL_REGEX=mi,p.RFC_EMAIL_REGEX=di,p.SLUG_REGEX=hi,p.ULID_REGEX=vi,p.UUID_REGEX=yi,p.ValiError=ue,p._addIssue=y,p._getByteCount=U,p._getGraphemeCount=B,p._getLastMetadata=te,p._getStandardProps=x,p._getWordCount=C,p._isLuhnAlgo=M,p._isValidObjectKey=F,p._joinExpects=X,p._stringify=z,p.any=js,p.args=Lr,p.argsAsync=Gr,p.array=Os,p.arrayAsync=Cs,p.assert=xc,p.awaitAsync=Xr,p.base64=gi,p.bic=bi,p.bigint=zs,p.blob=Rs,p.boolean=Ds,p.brand=xi,p.bytes=ki,p.check=_i,p.checkAsync=wi,p.checkItems=Ei,p.checkItemsAsync=Ai,p.config=kc,p.creditCard=Si,p.cuid2=Ii,p.custom=Ns,p.customAsync=Fs,p.date=Ts,p.decimal=Pi,p.deleteGlobalConfig=o,p.deleteGlobalMessage=d,p.deleteSchemaMessage=E,p.deleteSpecificMessage=$,p.description=ji,p.digits=Oi,p.email=Ci,p.emoji=zi,p.empty=Ri,p.endsWith=Di,p.entries=Ni,p.entriesFromList=R,p.entriesFromObjects=Oe,p.enum=gn,p.enum_=gn,p.everyItem=Fi,p.exactOptional=qs,p.exactOptionalAsync=Ms,p.examples=Ti,p.excludes=qi,p.fallback=_c,p.fallbackAsync=wc,p.file=$s,p.filterItems=Mi,p.findItem=$i,p.finite=Li,p.flatten=Ec,p.flavor=Gi,p.forward=Ac,p.forwardAsync=Sc,p.function=bn,p.function_=bn,p.getDefault=J,p.getDefaults=dn,p.getDefaultsAsync=hn,p.getDescription=Ic,p.getDotPath=mn,p.getExamples=Pc,p.getFallback=re,p.getFallbacks=vn,p.getFallbacksAsync=yn,p.getGlobalConfig=s,p.getGlobalMessage=c,p.getMetadata=jc,p.getSchemaMessage=A,p.getSpecificMessage=L,p.getTitle=Oc,p.graphemes=Xi,p.gtValue=Wi,p.hash=Ui,p.hexColor=Hi,p.hexadecimal=Vi,p.imei=Bi,p.includes=Yi,p.instance=Ls,p.integer=Ji,p.intersect=Gs,p.intersectAsync=Xs,p.ip=Ki,p.ipv4=Zi,p.ipv6=Qi,p.is=Cc,p.isOfKind=mc,p.isOfType=dc,p.isValiError=hc,p.isoDate=ea,p.isoDateTime=na,p.isoTime=ta,p.isoTimeSecond=ra,p.isoTimestamp=ia,p.isoWeek=aa,p.keyof=zc,p.lazy=Ws,p.lazyAsync=Us,p.length=sa,p.literal=Vs,p.looseObject=Hs,p.looseObjectAsync=Bs,p.looseTuple=Ys,p.looseTupleAsync=Js,p.ltValue=oa,p.mac=ua,p.mac48=la,p.mac64=fa,p.map=Ks,p.mapAsync=Zs,p.mapItems=ca,p.maxBytes=pa,p.maxEntries=ma,p.maxGraphemes=da,p.maxLength=ha,p.maxSize=va,p.maxValue=ya,p.maxWords=ga,p.message=Rc,p.metadata=ba,p.mimeType=xa,p.minBytes=ka,p.minEntries=_a,p.minGraphemes=wa,p.minLength=Ea,p.minSize=Aa,p.minValue=Sa,p.minWords=Ia,p.multipleOf=Pa,p.nan=Qs,p.nanoid=ja,p.never=eo,p.nonEmpty=Oa,p.nonNullable=no,p.nonNullableAsync=to,p.nonNullish=ro,p.nonNullishAsync=io,p.nonOptional=xn,p.nonOptionalAsync=kn,p.normalize=Ca,p.notBytes=za,p.notEntries=Ra,p.notGraphemes=Da,p.notLength=Na,p.notSize=Fa,p.notValue=Ta,p.notValues=qa,p.notWords=Ma,p.null=_n,p.null_=_n,p.nullable=ao,p.nullableAsync=so,p.nullish=oo,p.nullishAsync=uo,p.number=lo,p.object=fo,p.objectAsync=co,p.objectWithRest=po,p.objectWithRestAsync=mo,p.octal=$a,p.omit=Dc,p.optional=wn,p.optionalAsync=En,p.parse=To,p.parseAsync=qo,p.parseJson=La,p.parser=Nc,p.parserAsync=Fc,p.partial=Tc,p.partialAsync=qc,p.partialCheck=Xa,p.partialCheckAsync=Wa,p.pick=Mc,p.picklist=An,p.pipe=$c,p.pipeAsync=Lc,p.promise=ho,p.rawCheck=Ua,p.rawCheckAsync=Va,p.rawTransform=Ha,p.rawTransformAsync=Ba,p.readonly=Ya,p.record=vo,p.recordAsync=yo,p.reduceItems=Ja,p.regex=Ka,p.required=Gc,p.requiredAsync=Xc,p.returns=Za,p.returnsAsync=Qa,p.rfcEmail=es,p.safeInteger=ns,p.safeParse=Mo,p.safeParseAsync=$o,p.safeParser=Wc,p.safeParserAsync=Uc,p.set=go,p.setAsync=bo,p.setGlobalConfig=i,p.setGlobalMessage=f,p.setSchemaMessage=_,p.setSpecificMessage=P,p.size=ts,p.slug=rs,p.someItem=is,p.sortItems=as,p.startsWith=ss,p.strictObject=xo,p.strictObjectAsync=ko,p.strictTuple=_o,p.strictTupleAsync=wo,p.string=Eo,p.stringifyJson=os,p.summarize=Vc,p.symbol=Ao,p.title=us,p.toBigint=ls,p.toBoolean=fs,p.toDate=cs,p.toLowerCase=ps,p.toMaxValue=ms,p.toMinValue=ds,p.toNumber=hs,p.toString=vs,p.toUpperCase=ys,p.transform=gs,p.transformAsync=bs,p.trim=xs,p.trimEnd=ks,p.trimStart=_s,p.tuple=So,p.tupleAsync=Io,p.tupleWithRest=Po,p.tupleWithRestAsync=jo,p.ulid=ws,p.undefined=Sn,p.undefined_=Sn,p.undefinedable=Oo,p.undefinedableAsync=Co,p.union=zo,p.unionAsync=Ro,p.unknown=Do,p.unwrap=Hc,p.url=Es,p.uuid=As,p.value=Ss,p.values=Is,p.variant=No,p.variantAsync=Fo,p.void=In,p.void_=In,p.words=Ps,p}var Dn,Eu;function Le(){if(Eu)return Dn;Eu=1;var t=Array.isArray;return Dn=t,Dn}var Nn,Au;function lv(){if(Au)return Nn;Au=1;var t=typeof We=="object"&&We&&We.Object===Object&&We;return Nn=t,Nn}var Fn,Su;function Rr(){if(Su)return Fn;Su=1;var t=lv(),i=typeof self=="object"&&self&&self.Object===Object&&self,s=t||i||Function("return this")();return Fn=s,Fn}var Tn,Iu;function un(){if(Iu)return Tn;Iu=1;var t=Rr(),i=t.Symbol;return Tn=i,Tn}var qn,Pu;function fv(){if(Pu)return qn;Pu=1;var t=un(),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,u=t?t.toStringTag:void 0;function f(c){var d=s.call(c,u),b=c[u];try{c[u]=void 0;var _=!0}catch{}var A=o.call(c);return _&&(d?c[u]=b:delete c[u]),A}return qn=f,qn}var Mn,ju;function cv(){if(ju)return Mn;ju=1;var t=Object.prototype,i=t.toString;function s(o){return i.call(o)}return Mn=s,Mn}var $n,Ou;function Dr(){if(Ou)return $n;Ou=1;var t=un(),i=fv(),s=cv(),o="[object Null]",u="[object Undefined]",f=t?t.toStringTag:void 0;function c(d){return d==null?d===void 0?u:o:f&&f in Object(d)?i(d):s(d)}return $n=c,$n}var Ln,Cu;function Nr(){if(Cu)return Ln;Cu=1;function t(i){return i!=null&&typeof i=="object"}return Ln=t,Ln}var Gn,zu;function Fr(){if(zu)return Gn;zu=1;var t=Dr(),i=Nr(),s="[object Symbol]";function o(u){return typeof u=="symbol"||i(u)&&t(u)==s}return Gn=o,Gn}var Xn,Ru;function pv(){if(Ru)return Xn;Ru=1;var t=Le(),i=Fr(),s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;function u(f,c){if(t(f))return!1;var d=typeof f;return d=="number"||d=="symbol"||d=="boolean"||f==null||i(f)?!0:o.test(f)||!s.test(f)||c!=null&&f in Object(c)}return Xn=u,Xn}var Wn,Du;function Tr(){if(Du)return Wn;Du=1;function t(i){var s=typeof i;return i!=null&&(s=="object"||s=="function")}return Wn=t,Wn}var Un,Nu;function mv(){if(Nu)return Un;Nu=1;var t=Dr(),i=Tr(),s="[object AsyncFunction]",o="[object Function]",u="[object GeneratorFunction]",f="[object Proxy]";function c(d){if(!i(d))return!1;var b=t(d);return b==o||b==u||b==s||b==f}return Un=c,Un}var Vn,Fu;function dv(){if(Fu)return Vn;Fu=1;var t=Rr(),i=t["__core-js_shared__"];return Vn=i,Vn}var Hn,Tu;function hv(){if(Tu)return Hn;Tu=1;var t=dv(),i=(function(){var o=/[^.]+$/.exec(t&&t.keys&&t.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""})();function s(o){return!!i&&i in o}return Hn=s,Hn}var Bn,qu;function vv(){if(qu)return Bn;qu=1;var t=Function.prototype,i=t.toString;function s(o){if(o!=null){try{return i.call(o)}catch{}try{return o+""}catch{}}return""}return Bn=s,Bn}var Yn,Mu;function yv(){if(Mu)return Yn;Mu=1;var t=mv(),i=hv(),s=Tr(),o=vv(),u=/[\\^$.*+?()[\]{}|]/g,f=/^\[object .+?Constructor\]$/,c=Function.prototype,d=Object.prototype,b=c.toString,_=d.hasOwnProperty,A=RegExp("^"+b.call(_).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function E(S){if(!s(S)||i(S))return!1;var P=t(S)?A:f;return P.test(o(S))}return Yn=E,Yn}var Jn,$u;function gv(){if($u)return Jn;$u=1;function t(i,s){return i?.[s]}return Jn=t,Jn}var Kn,Lu;function qr(){if(Lu)return Kn;Lu=1;var t=yv(),i=gv();function s(o,u){var f=i(o,u);return t(f)?f:void 0}return Kn=s,Kn}var Zn,Gu;function ln(){if(Gu)return Zn;Gu=1;var t=qr(),i=t(Object,"create");return Zn=i,Zn}var Qn,Xu;function bv(){if(Xu)return Qn;Xu=1;var t=ln();function i(){this.__data__=t?t(null):{},this.size=0}return Qn=i,Qn}var et,Wu;function xv(){if(Wu)return et;Wu=1;function t(i){var s=this.has(i)&&delete this.__data__[i];return this.size-=s?1:0,s}return et=t,et}var nt,Uu;function kv(){if(Uu)return nt;Uu=1;var t=ln(),i="__lodash_hash_undefined__",s=Object.prototype,o=s.hasOwnProperty;function u(f){var c=this.__data__;if(t){var d=c[f];return d===i?void 0:d}return o.call(c,f)?c[f]:void 0}return nt=u,nt}var tt,Vu;function _v(){if(Vu)return tt;Vu=1;var t=ln(),i=Object.prototype,s=i.hasOwnProperty;function o(u){var f=this.__data__;return t?f[u]!==void 0:s.call(f,u)}return tt=o,tt}var rt,Hu;function wv(){if(Hu)return rt;Hu=1;var t=ln(),i="__lodash_hash_undefined__";function s(o,u){var f=this.__data__;return this.size+=this.has(o)?0:1,f[o]=t&&u===void 0?i:u,this}return rt=s,rt}var it,Bu;function Ev(){if(Bu)return it;Bu=1;var t=bv(),i=xv(),s=kv(),o=_v(),u=wv();function f(c){var d=-1,b=c==null?0:c.length;for(this.clear();++d<b;){var _=c[d];this.set(_[0],_[1])}}return f.prototype.clear=t,f.prototype.delete=i,f.prototype.get=s,f.prototype.has=o,f.prototype.set=u,it=f,it}var at,Yu;function Av(){if(Yu)return at;Yu=1;function t(){this.__data__=[],this.size=0}return at=t,at}var st,Ju;function uc(){if(Ju)return st;Ju=1;function t(i,s){return i===s||i!==i&&s!==s}return st=t,st}var ot,Ku;function fn(){if(Ku)return ot;Ku=1;var t=uc();function i(s,o){for(var u=s.length;u--;)if(t(s[u][0],o))return u;return-1}return ot=i,ot}var ut,Zu;function Sv(){if(Zu)return ut;Zu=1;var t=fn(),i=Array.prototype,s=i.splice;function o(u){var f=this.__data__,c=t(f,u);if(c<0)return!1;var d=f.length-1;return c==d?f.pop():s.call(f,c,1),--this.size,!0}return ut=o,ut}var lt,Qu;function Iv(){if(Qu)return lt;Qu=1;var t=fn();function i(s){var o=this.__data__,u=t(o,s);return u<0?void 0:o[u][1]}return lt=i,lt}var ft,el;function Pv(){if(el)return ft;el=1;var t=fn();function i(s){return t(this.__data__,s)>-1}return ft=i,ft}var ct,nl;function jv(){if(nl)return ct;nl=1;var t=fn();function i(s,o){var u=this.__data__,f=t(u,s);return f<0?(++this.size,u.push([s,o])):u[f][1]=o,this}return ct=i,ct}var pt,tl;function Ov(){if(tl)return pt;tl=1;var t=Av(),i=Sv(),s=Iv(),o=Pv(),u=jv();function f(c){var d=-1,b=c==null?0:c.length;for(this.clear();++d<b;){var _=c[d];this.set(_[0],_[1])}}return f.prototype.clear=t,f.prototype.delete=i,f.prototype.get=s,f.prototype.has=o,f.prototype.set=u,pt=f,pt}var mt,rl;function Cv(){if(rl)return mt;rl=1;var t=qr(),i=Rr(),s=t(i,"Map");return mt=s,mt}var dt,il;function zv(){if(il)return dt;il=1;var t=Ev(),i=Ov(),s=Cv();function o(){this.size=0,this.__data__={hash:new t,map:new(s||i),string:new t}}return dt=o,dt}var ht,al;function Rv(){if(al)return ht;al=1;function t(i){var s=typeof i;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?i!=="__proto__":i===null}return ht=t,ht}var vt,sl;function cn(){if(sl)return vt;sl=1;var t=Rv();function i(s,o){var u=s.__data__;return t(o)?u[typeof o=="string"?"string":"hash"]:u.map}return vt=i,vt}var yt,ol;function Dv(){if(ol)return yt;ol=1;var t=cn();function i(s){var o=t(this,s).delete(s);return this.size-=o?1:0,o}return yt=i,yt}var gt,ul;function Nv(){if(ul)return gt;ul=1;var t=cn();function i(s){return t(this,s).get(s)}return gt=i,gt}var bt,ll;function Fv(){if(ll)return bt;ll=1;var t=cn();function i(s){return t(this,s).has(s)}return bt=i,bt}var xt,fl;function Tv(){if(fl)return xt;fl=1;var t=cn();function i(s,o){var u=t(this,s),f=u.size;return u.set(s,o),this.size+=u.size==f?0:1,this}return xt=i,xt}var kt,cl;function qv(){if(cl)return kt;cl=1;var t=zv(),i=Dv(),s=Nv(),o=Fv(),u=Tv();function f(c){var d=-1,b=c==null?0:c.length;for(this.clear();++d<b;){var _=c[d];this.set(_[0],_[1])}}return f.prototype.clear=t,f.prototype.delete=i,f.prototype.get=s,f.prototype.has=o,f.prototype.set=u,kt=f,kt}var _t,pl;function Mv(){if(pl)return _t;pl=1;var t=qv(),i="Expected a function";function s(o,u){if(typeof o!="function"||u!=null&&typeof u!="function")throw new TypeError(i);var f=function(){var c=arguments,d=u?u.apply(this,c):c[0],b=f.cache;if(b.has(d))return b.get(d);var _=o.apply(this,c);return f.cache=b.set(d,_)||b,_};return f.cache=new(s.Cache||t),f}return s.Cache=t,_t=s,_t}var wt,ml;function $v(){if(ml)return wt;ml=1;var t=Mv(),i=500;function s(o){var u=t(o,function(c){return f.size===i&&f.clear(),c}),f=u.cache;return u}return wt=s,wt}var Et,dl;function Lv(){if(dl)return Et;dl=1;var t=$v(),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,o=t(function(u){var f=[];return u.charCodeAt(0)===46&&f.push(""),u.replace(i,function(c,d,b,_){f.push(b?_.replace(s,"$1"):d||c)}),f});return Et=o,Et}var At,hl;function Gv(){if(hl)return At;hl=1;function t(i,s){for(var o=-1,u=i==null?0:i.length,f=Array(u);++o<u;)f[o]=s(i[o],o,i);return f}return At=t,At}var St,vl;function Xv(){if(vl)return St;vl=1;var t=un(),i=Gv(),s=Le(),o=Fr(),u=t?t.prototype:void 0,f=u?u.toString:void 0;function c(d){if(typeof d=="string")return d;if(s(d))return i(d,c)+"";if(o(d))return f?f.call(d):"";var b=d+"";return b=="0"&&1/d==-1/0?"-0":b}return St=c,St}var It,yl;function Wv(){if(yl)return It;yl=1;var t=Xv();function i(s){return s==null?"":t(s)}return It=i,It}var Pt,gl;function pn(){if(gl)return Pt;gl=1;var t=Le(),i=pv(),s=Lv(),o=Wv();function u(f,c){return t(f)?f:i(f,c)?[f]:s(o(f))}return Pt=u,Pt}var jt,bl;function Mr(){if(bl)return jt;bl=1;var t=Fr();function i(s){if(typeof s=="string"||t(s))return s;var o=s+"";return o=="0"&&1/s==-1/0?"-0":o}return jt=i,jt}var Ot,xl;function Uv(){if(xl)return Ot;xl=1;var t=pn(),i=Mr();function s(o,u){u=t(u,o);for(var f=0,c=u.length;o!=null&&f<c;)o=o[i(u[f++])];return f&&f==c?o:void 0}return Ot=s,Ot}var Ct,kl;function lc(){if(kl)return Ct;kl=1;var t=qr(),i=(function(){try{var s=t(Object,"defineProperty");return s({},"",{}),s}catch{}})();return Ct=i,Ct}var zt,_l;function Vv(){if(_l)return zt;_l=1;var t=lc();function i(s,o,u){o=="__proto__"&&t?t(s,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):s[o]=u}return zt=i,zt}var Rt,wl;function Hv(){if(wl)return Rt;wl=1;var t=Vv(),i=uc(),s=Object.prototype,o=s.hasOwnProperty;function u(f,c,d){var b=f[c];(!(o.call(f,c)&&i(b,d))||d===void 0&&!(c in f))&&t(f,c,d)}return Rt=u,Rt}var Dt,El;function fc(){if(El)return Dt;El=1;var t=9007199254740991,i=/^(?:0|[1-9]\d*)$/;function s(o,u){var f=typeof o;return u=u??t,!!u&&(f=="number"||f!="symbol"&&i.test(o))&&o>-1&&o%1==0&&o<u}return Dt=s,Dt}var Nt,Al;function Bv(){if(Al)return Nt;Al=1;var t=Hv(),i=pn(),s=fc(),o=Tr(),u=Mr();function f(c,d,b,_){if(!o(c))return c;d=i(d,c);for(var A=-1,E=d.length,S=E-1,P=c;P!=null&&++A<E;){var L=u(d[A]),$=b;if(L==="__proto__"||L==="constructor"||L==="prototype")return c;if(A!=S){var z=P[L];$=_?_(z,L,P):void 0,$===void 0&&($=o(z)?z:s(d[A+1])?[]:{})}t(P,L,$),P=P[L]}return c}return Nt=f,Nt}var Ft,Sl;function Yv(){if(Sl)return Ft;Sl=1;var t=Uv(),i=Bv(),s=pn();function o(u,f,c){for(var d=-1,b=f.length,_={};++d<b;){var A=f[d],E=t(u,A);c(E,A)&&i(_,s(A,u),E)}return _}return Ft=o,Ft}var Tt,Il;function Jv(){if(Il)return Tt;Il=1;function t(i,s){return i!=null&&s in Object(i)}return Tt=t,Tt}var qt,Pl;function Kv(){if(Pl)return qt;Pl=1;var t=Dr(),i=Nr(),s="[object Arguments]";function o(u){return i(u)&&t(u)==s}return qt=o,qt}var Mt,jl;function cc(){if(jl)return Mt;jl=1;var t=Kv(),i=Nr(),s=Object.prototype,o=s.hasOwnProperty,u=s.propertyIsEnumerable,f=t((function(){return arguments})())?t:function(c){return i(c)&&o.call(c,"callee")&&!u.call(c,"callee")};return Mt=f,Mt}var $t,Ol;function Zv(){if(Ol)return $t;Ol=1;var t=9007199254740991;function i(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=t}return $t=i,$t}var Lt,Cl;function Qv(){if(Cl)return Lt;Cl=1;var t=pn(),i=cc(),s=Le(),o=fc(),u=Zv(),f=Mr();function c(d,b,_){b=t(b,d);for(var A=-1,E=b.length,S=!1;++A<E;){var P=f(b[A]);if(!(S=d!=null&&_(d,P)))break;d=d[P]}return S||++A!=E?S:(E=d==null?0:d.length,!!E&&u(E)&&o(P,E)&&(s(d)||i(d)))}return Lt=c,Lt}var Gt,zl;function ey(){if(zl)return Gt;zl=1;var t=Jv(),i=Qv();function s(o,u){return o!=null&&i(o,u,t)}return Gt=s,Gt}var Xt,Rl;function ny(){if(Rl)return Xt;Rl=1;var t=Yv(),i=ey();function s(o,u){return t(o,u,function(f,c){return i(o,c)})}return Xt=s,Xt}var Wt,Dl;function ty(){if(Dl)return Wt;Dl=1;function t(i,s){for(var o=-1,u=s.length,f=i.length;++o<u;)i[f+o]=s[o];return i}return Wt=t,Wt}var Ut,Nl;function ry(){if(Nl)return Ut;Nl=1;var t=un(),i=cc(),s=Le(),o=t?t.isConcatSpreadable:void 0;function u(f){return s(f)||i(f)||!!(o&&f&&f[o])}return Ut=u,Ut}var Vt,Fl;function iy(){if(Fl)return Vt;Fl=1;var t=ty(),i=ry();function s(o,u,f,c,d){var b=-1,_=o.length;for(f||(f=i),d||(d=[]);++b<_;){var A=o[b];u>0&&f(A)?u>1?s(A,u-1,f,c,d):t(d,A):c||(d[d.length]=A)}return d}return Vt=s,Vt}var Ht,Tl;function ay(){if(Tl)return Ht;Tl=1;var t=iy();function i(s){var o=s==null?0:s.length;return o?t(s,1):[]}return Ht=i,Ht}var Bt,ql;function sy(){if(ql)return Bt;ql=1;function t(i,s,o){switch(o.length){case 0:return i.call(s);case 1:return i.call(s,o[0]);case 2:return i.call(s,o[0],o[1]);case 3:return i.call(s,o[0],o[1],o[2])}return i.apply(s,o)}return Bt=t,Bt}var Yt,Ml;function oy(){if(Ml)return Yt;Ml=1;var t=sy(),i=Math.max;function s(o,u,f){return u=i(u===void 0?o.length-1:u,0),function(){for(var c=arguments,d=-1,b=i(c.length-u,0),_=Array(b);++d<b;)_[d]=c[u+d];d=-1;for(var A=Array(u+1);++d<u;)A[d]=c[d];return A[u]=f(_),t(o,this,A)}}return Yt=s,Yt}var Jt,$l;function uy(){if($l)return Jt;$l=1;function t(i){return function(){return i}}return Jt=t,Jt}var Kt,Ll;function ly(){if(Ll)return Kt;Ll=1;function t(i){return i}return Kt=t,Kt}var Zt,Gl;function fy(){if(Gl)return Zt;Gl=1;var t=uy(),i=lc(),s=ly(),o=i?function(u,f){return i(u,"toString",{configurable:!0,enumerable:!1,value:t(f),writable:!0})}:s;return Zt=o,Zt}var Qt,Xl;function cy(){if(Xl)return Qt;Xl=1;var t=800,i=16,s=Date.now;function o(u){var f=0,c=0;return function(){var d=s(),b=i-(d-c);if(c=d,b>0){if(++f>=t)return arguments[0]}else f=0;return u.apply(void 0,arguments)}}return Qt=o,Qt}var er,Wl;function py(){if(Wl)return er;Wl=1;var t=fy(),i=cy(),s=i(t);return er=s,er}var nr,Ul;function my(){if(Ul)return nr;Ul=1;var t=ay(),i=oy(),s=py();function o(u){return s(i(u,void 0,t),u+"")}return nr=o,nr}var tr,Vl;function dy(){if(Vl)return tr;Vl=1;var t=ny(),i=my(),s=i(function(o,u){return o==null?{}:t(o,u)});return tr=s,tr}var rr,Hl;function hy(){if(Hl)return rr;Hl=1;var t=Object.create,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,u=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,c=(j,M)=>{for(var F in M)i(j,F,{get:M[F],enumerable:!0})},d=(j,M,F,X)=>{if(M&&typeof M=="object"||typeof M=="function")for(let R of o(M))!f.call(j,R)&&R!==F&&i(j,R,{get:()=>M[R],enumerable:!(X=s(M,R))||X.enumerable});return j},b=(j,M,F)=>(F=j!=null?t(u(j)):{},d(!j||!j.__esModule?i(F,"default",{value:j,enumerable:!0}):F,j)),_=j=>d(i({},"__esModule",{value:!0}),j),A={};c(A,{getAppDirectory:()=>$,index:()=>Y,layout:()=>te,prefix:()=>x,relative:()=>T,route:()=>W}),rr=_(A);var E=b(ov()),S=b(uv()),P=b(dy());function L(j,M){if(j===!1||j===null||typeof j>"u")throw console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"),new Error(M)}function $(){return L(globalThis.__reactRouterAppDirectory),globalThis.__reactRouterAppDirectory}var z=S.pipe(S.custom(j=>!(typeof j=="object"&&j!==null&&"then"in j&&"catch"in j),"Invalid type: Expected object but received a promise. Did you forget to await?"),S.object({id:S.optional(S.pipe(S.string(),S.notValue("root","A route cannot use the reserved id 'root'."))),path:S.optional(S.string()),index:S.optional(S.boolean()),caseSensitive:S.optional(S.boolean()),file:S.string(),children:S.optional(S.array(S.lazy(()=>z)))}));S.array(z);var y=["id","index","caseSensitive"];function W(j,M,F,X){let R={};return Array.isArray(F)||!F?X=F:R=F,{file:M,children:X,path:j??void 0,...(0,P.default)(R,y)}}var U=["id"];function Y(j,M){return{file:j,index:!0,...(0,P.default)(M,U)}}var B=["id"];function te(j,M,F){let X={};return Array.isArray(M)||!M?F=M:X=M,{file:j,children:F,...(0,P.default)(X,B)}}function x(j,M){return M.map(F=>F.index||typeof F.path=="string"?{...F,path:F.path?C(j,F.path):j,children:F.children}:F.children?{...F,children:x(j,F.children)}:F)}function T(j){return{route:(M,F,...X)=>W(M,E.resolve(j,F),...X),index:(M,...F)=>Y(E.resolve(j,M),...F),layout:(M,...F)=>te(E.resolve(j,M),...F),prefix:x}}function C(j,M){return[j.replace(/\/+$/,""),M.replace(/^\/+/,"")].join("/")}return rr}var Bl=hy();const vy=()=>{const t=["root.tsx","components/"];return Object.keys({"../components/BottomNav.tsx":0,"../components/ContentTree.tsx":0,"../components/CustomLatex.tsx":0,"../components/HamburgerMenu.tsx":0,"../components/LatexRenderer.tsx":0,"../components/Navbar.tsx":0,"../components/Sidebar.tsx":0,"../index.tsx":0,"../pages/1-introduction/1-sets/1-set-axioms.tsx":0,"../pages/1-introduction/1-sets/index.tsx":0,"../pages/1-introduction/2-relations/1-binary-relations.tsx":0,"../pages/1-introduction/2-relations/2-functions.tsx":0,"../pages/1-introduction/2-relations/index.tsx":0,"../pages/2-geometry/1-vectors/index.tsx":0,"../root.tsx":0,"../suggestion-handler.tsx":0,"../suggestions.tsx":0}).filter(i=>t.every(s=>!i.includes(s))).map(i=>i.replaceAll("../",""))},yy=t=>{let i={type:"Directory",name:"",fsPath:"",children:[]},s=i;return t.forEach(o=>{o.split("/").forEach(f=>{if(f==="index.tsx")s.index={type:"File",name:"index",extension:".tsx",fsPath:o,route:s.fsPath};else if(f.endsWith(".tsx")){const c=f.slice(0,-4);s.children.push({type:"File",name:c,extension:".tsx",fsPath:o,route:`${s.fsPath}/${c}`})}else{let c=s.children.find(d=>d.type==="Directory"&&d.name===f);c||(c={type:"Directory",name:f,fsPath:`${s.fsPath}/${f}`,children:[]},s.children.push(c)),s=c}}),s.children.sort((f,c)=>f.name.localeCompare(c.name)),s=i}),i},gy=t=>{let i=[];const s=(o,u)=>{o.index&&u.push(Bl.route(o.fsPath,o.index.fsPath)),o.children.forEach(f=>{switch(f.type){case"File":u.push(Bl.route(f.route,f.fsPath));break;case"Directory":s(f,u);break}})};return s(t,i),i};function*pc(t){yield t;for(const i of t.children)switch(i.type){case"File":yield i;break;case"Directory":for(const s of pc(i))yield s;break}}function*by(t){for(const i of pc(t))switch(i.type){case"File":yield{name:i.name,route:i.route};break;case"Directory":if(!i.index)continue;yield{name:i.name,route:i.index.route};break}}const xy=vy(),$r=yy(xy);gy($r);const ky=()=>{let t=nn();if(!t.pathname.startsWith("/pages/"))return null;const i=$r.children.find(c=>c.type==="Directory"&&c.name==="pages");if(!i)return null;const s=[...by(i)],o=s.findIndex(c=>c.route===t.pathname);if(o===-1)return null;const u=s[o-1],f=s[o+1];return D.jsx("div",{className:"px-(--inline-padding-sm) sm:px-0 bg-(--menu-color-medium) border-t-2 border-(--border-color-light) text-(--soft-text-light)",children:D.jsxs("div",{className:"flex items-center justify-between py-4 max-w-(--width-sm) md:max-w-(--width-lg) mx-auto",children:[D.jsx("div",{className:"w-12/25",children:u&&D.jsxs(he,{className:"w-full px-2 py-1 text-center text-(--hard-text-dark) flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize",to:u.route,children:[D.jsx(Te,{className:"text-xs",icon:iv}),u.name.split("-").slice(1).join(" ")]})}),D.jsx("div",{className:"w-12/25",children:f&&D.jsxs(he,{className:"w-full px-2 py-1 text-center text-(--hard-text-dark) flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize",to:f.route,children:[f.name.split("-").slice(1).join(" "),D.jsx(Te,{className:"text-xs",icon:rv})]})})]})})},Ey=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css"}];function Ay({children:t}){const[i,s]=xe.useState(!1);let o=nn();const u=$r.children.find(f=>f.type=="Directory"&&f.name=="pages");return D.jsxs("html",{lang:"en",children:[D.jsxs("head",{children:[D.jsx("meta",{charSet:"utf-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),D.jsx(Jc,{}),D.jsx(Kc,{})]}),D.jsx(zr,{value:{sidebarOpen:i,setSidebarOpen:s},children:D.jsxs("body",{className:"h-svh flex flex-col overflow-hidden",children:[D.jsx("header",{className:"sticky top-0 z-100 relative",children:D.jsx(nv,{})}),D.jsxs("div",{className:"w-full flex-1 overflow-hidden flex justify-center",children:[D.jsx("main",{className:"h-full w-full overflow-auto px-(--inline-padding-sm) max-w-(--width-sm) md:max-w-(--width-lg) 2xl:max-w-(--width-xl) shadow-lg relative flex flex-col gap-6 text-(--hard-text-dark)",children:t}),D.jsxs(av,{children:[D.jsx(he,{to:"/",className:`xl:hidden pl-(--inline-padding-sm) py-2 ${o.pathname==="/"?"bg-(--menu-color-medium) border-l-4 border-(--accent)":""}`,children:"Home"}),D.jsx(he,{to:"/suggestions",className:`xl:hidden pl-(--inline-padding-sm) py-2 ${o.pathname==="/suggestions"?"bg-(--menu-color-medium) border-l-4 border-(--accent)":""}`,children:"Give Feedback"}),u&&D.jsx(oc,{dir:u})]})]}),D.jsx(Zc,{}),D.jsx(Qc,{}),D.jsx("footer",{className:"xl:hidden",children:D.jsx(ky,{})})]})})]})}const Sy=Bc(function(){return D.jsx(ep,{})}),Iy=Yc(function({error:i}){let s="Oops!",o="An unexpected error occurred.",u;return np(i)&&(s=i.status===404?"404":"Error",o=i.status===404?"The requested page could not be found.":i.statusText||o),D.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[D.jsx("h1",{children:s}),D.jsx("p",{children:o}),u]})});export{Iy as ErrorBoundary,Ay as Layout,Sy as default,Ey as links};
