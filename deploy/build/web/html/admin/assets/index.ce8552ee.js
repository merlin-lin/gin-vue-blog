var e=(e,t,r)=>new Promise(((l,a)=>{var o=e=>{try{i(r.next(e))}catch(t){a(t)}},n=e=>{try{i(r.throw(e))}catch(t){a(t)}},i=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,n);i((r=r.apply(e,t)).next())}));import{_ as t}from"./AppPage.4308d760.js";import{_ as r}from"./TheIcon.b33e2977.js";import{bs as l,c1 as a,q as o,z as n,aT as i,i as s,aO as u,a3 as d,k as c,aq as v,V as f,ar as p,l as h,m,n as g,Q as b,p as x,c2 as y,a4 as S,v as w,x as z,c3 as _,ac as $,ae as C,a0 as R,ai as k,j as E,al as F,aV as j,ad as T,ab as O,af as P,Z as G,b8 as N,aQ as L,b0 as B,ba as A,bN as D,ag as M,y as H,H as I,c as V,w as W,o as q,e as Q,a as X,b as Y,t as Z,d as J,g as K,bV as U,ak as ee,aw as te,_ as re}from"./index.8ba31f54.js";import{i as le,o as ae}from"./utils.3e78d745.js";import{g as oe}from"./get-slot.8207e825.js";import{_ as ne}from"./GradientText.a5181e38.js";function ie(e,t){var r;if(null==e)return;const l=function(e){if("number"==typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[r,l]=e.split(":");void 0===l?t[""]=r:t[r]=l})),t}(e);if(void 0===t)return l[""];if("string"==typeof t)return null!==(r=l[t])&&void 0!==r?r:l[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const r=t[e];if(r in l)return l[r]}return l[""]}{let e,r=-1;return Object.keys(l).forEach((a=>{const o=Number(a);!Number.isNaN(o)&&t>=o&&o>=r&&(r=o,e=l[a])})),e}}const se={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};const ue={};const de={name:"Avatar",common:s,self:e=>{const{borderRadius:t,avatarColor:r,cardColor:l,fontSize:a,heightTiny:o,heightSmall:n,heightMedium:i,heightLarge:s,heightHuge:d,modalColor:c,popoverColor:v}=e;return{borderRadius:t,fontSize:a,border:`2px solid ${l}`,heightTiny:o,heightSmall:n,heightMedium:i,heightLarge:s,heightHuge:d,color:u(l,r),colorModal:u(c,r),colorPopover:u(v,r)}}},ce=d("n-avatar-group"),ve=c("avatar","\n width: var(--n-merged-size);\n height: var(--n-merged-size);\n color: #FFF;\n font-size: var(--n-font-size);\n display: inline-flex;\n position: relative;\n overflow: hidden;\n text-align: center;\n border: var(--n-border);\n border-radius: var(--n-border-radius);\n --n-merged-color: var(--n-color);\n background-color: var(--n-merged-color);\n transition:\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n",[v(f("&","--n-merged-color: var(--n-color-modal);")),p(f("&","--n-merged-color: var(--n-color-popover);")),f("img","\n width: 100%;\n height: 100%;\n "),h("text","\n white-space: nowrap;\n display: inline-block;\n position: absolute;\n left: 50%;\n top: 50%;\n "),c("icon","\n vertical-align: bottom;\n font-size: calc(var(--n-merged-size) - 6px);\n "),h("text","line-height: 1.25")]),fe=m({name:"Avatar",props:Object.assign(Object.assign({},x.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=g(e),l=n(!1);let a=null;const s=n(null),u=n(null),d=b(ce,null),c=o((()=>{const{size:t}=e;if(t)return t;const{size:r}=d||{};return r||"medium"})),v=x("Avatar","-avatar",ve,de,e,t),f=b(y,null),p=o((()=>{if(d)return!0;const{round:t,circle:r}=e;return void 0!==t||void 0!==r?t||r:!!f&&f.roundRef.value})),h=o((()=>!!d||(e.bordered||!1)));S((()=>e.src),(()=>l.value=!1));const m=o((()=>{const t=c.value,r=p.value,l=h.value,{color:a}=e,{self:{borderRadius:o,fontSize:n,color:i,border:s,colorModal:u,colorPopover:d},common:{cubicBezierEaseInOut:f}}=v.value;let m;return m="number"==typeof t?`${t}px`:v.value.self[w("height",t)],{"--n-font-size":n,"--n-border":l?s:"none","--n-border-radius":r?"50%":o,"--n-color":a||i,"--n-color-modal":a||u,"--n-color-popover":a||d,"--n-bezier":f,"--n-merged-size":`var(--n-avatar-size-override, ${m})`}})),R=r?z("avatar",o((()=>{const t=c.value,r=p.value,l=h.value,{color:a}=e;let o="";return t&&(o+="number"==typeof t?`a${t}`:t[0]),r&&(o+="b"),l&&(o+="c"),a&&(o+=_(a)),o})),m,e):void 0,k=n(!e.lazy);$((()=>{if(le)return;let t;const r=C((()=>{null==t||t(),t=void 0,e.lazy&&(t=ae(u.value,e.intersectionObserverOptions,k))}));i((()=>{r(),null==t||t()}))}));const E=n(!e.lazy);return{textRef:s,selfRef:u,mergedRoundRef:p,mergedClsPrefix:t,fitTextTransform:()=>{const{value:e}=s;if(e&&(null===a||a!==e.innerHTML)){a=e.innerHTML;const{value:t}=u;if(t){const{offsetWidth:r,offsetHeight:l}=t,{offsetWidth:a,offsetHeight:o}=e,n=.9,i=Math.min(r/a*n,l/o*n,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${i})`}}},cssVars:r?void 0:m,themeClass:null==R?void 0:R.themeClass,onRender:null==R?void 0:R.onRender,hasLoadError:l,handleError:t=>{var r;if(!k.value)return;l.value=!0;const{onError:a,imgProps:o}=e;null===(r=null==o?void 0:o.onError)||void 0===r||r.call(o,t),a&&a(t)},shouldStartLoading:k,loaded:E,mergedOnLoad:t=>{var r;const{onLoad:l,imgProps:a}=e;null==l||l(t),null===(r=null==a?void 0:a.onLoad)||void 0===r||r.call(a,t),E.value=!0}}},render(){var e,t;const{$slots:r,src:l,mergedClsPrefix:a,lazy:o,onRender:n,mergedOnLoad:i,shouldStartLoading:s,loaded:u,hasLoadError:d}=this;let c;null==n||n();const v=!u&&!d&&(this.renderPlaceholder?this.renderPlaceholder():null===(t=(e=this.$slots).placeholder)||void 0===t?void 0:t.call(e));return c=this.hasLoadError?this.renderFallback?this.renderFallback():R(r.fallback,(()=>[E("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})])):k(r.default,(e=>{if(e)return E(F,{onResize:this.fitTextTransform},{default:()=>E("span",{ref:"textRef",class:`${a}-avatar__text`},e)});if(l){const{imgProps:e}=this;return E("img",Object.assign(Object.assign({},e),{loading:le&&o?"lazy":"eager",src:le||s||u?l:void 0,onLoad:i,"data-image-src":l,onError:this.handleError,style:[null==e?void 0:e.style,{objectFit:this.objectFit},v?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}})),E("span",{ref:"selfRef",class:[`${a}-avatar`,this.themeClass],style:this.cssVars},c,o&&v)}}),pe=d("n-grid"),he=1,me=m({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:{span:{type:[Number,String],default:he},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:l,layoutShiftDisabledRef:a}=b(pe),n=T();return{overflow:l,itemStyle:r,layoutShiftDisabled:a,mergedXGap:o((()=>j(t.value||0))),deriveStyle:()=>{e.value;const{privateSpan:r=he,privateShow:l=!0,privateColStart:a,privateOffset:o=0}=n.vnode.props,{value:i}=t,s=j(i||0);return{display:l?"":"none",gridColumn:`${null!=a?a:`span ${r}`} / span ${r}`,marginLeft:o?`calc((100% - (${r} - 1) * ${s}) / ${r} * ${o} + ${s} * ${o})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:e,offset:t,mergedXGap:r}=this;return E("div",{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${r}) / ${e} * ${t} + ${r} * ${t})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e,{overflow:this.overflow}))}}),ge={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},be="__ssr__",xe=m({name:"Grid",inheritAttrs:!1,props:{layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:24},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=g(e),l=/^\d+$/,s=n(void 0),u=function(e=se){if(!a)return o((()=>[]));if("function"!=typeof window.matchMedia)return o((()=>[]));const t=n({}),r=Object.keys(e),l=(e,r)=>{e.matches?t.value[r]=!0:t.value[r]=!1};return r.forEach((t=>{const r=e[t];let a,o;void 0===ue[r]?(a=window.matchMedia(`(min-width: ${r}px)`),a.addEventListener?a.addEventListener("change",(e=>{o.forEach((r=>{r(e,t)}))})):a.addListener&&a.addListener((e=>{o.forEach((r=>{r(e,t)}))})),o=new Set,ue[r]={mql:a,cbs:o}):(a=ue[r].mql,o=ue[r].cbs),o.add(l),a.matches&&o.forEach((e=>{e(a,t)}))})),i((()=>{r.forEach((t=>{const{cbs:r}=ue[e[t]];r.has(l)&&r.delete(l)}))})),o((()=>{const{value:e}=t;return r.filter((t=>e[t]))}))}((null==r?void 0:r.value)||ge),d=O((()=>!!e.itemResponsive||(!l.test(e.cols.toString())||(!l.test(e.xGap.toString())||!l.test(e.yGap.toString()))))),c=o((()=>{if(d.value)return"self"===e.responsive?s.value:u.value})),v=O((()=>{var t;return null!==(t=Number(ie(e.cols.toString(),c.value)))&&void 0!==t?t:24})),f=O((()=>ie(e.xGap.toString(),c.value))),p=O((()=>ie(e.yGap.toString(),c.value))),h=e=>{s.value=e.contentRect.width},m=e=>{B(h,e)},b=n(!1),x=o((()=>{if("self"===e.responsive)return m})),y=n(!1),S=n();return $((()=>{const{value:e}=S;e&&e.hasAttribute(be)&&(e.removeAttribute(be),y.value=!0)})),P(pe,{layoutShiftDisabledRef:G(e,"layoutShiftDisabled"),isSsrRef:y,itemStyleRef:G(e,"itemStyle"),xGapRef:f,overflowRef:b}),{isSsr:!N,contentEl:S,mergedClsPrefix:t,style:o((()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:j(e.xGap),rowGap:j(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${v.value}, minmax(0, 1fr))`,columnGap:j(f.value),rowGap:j(p.value)})),isResponsive:d,responsiveQuery:c,responsiveCols:v,handleResize:x,overflow:b}},render(){if(this.layoutShiftDisabled)return E("div",L({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var e,t,r,a,o,n,i;this.overflow=!1;const s=A(oe(this)),u=[],{collapsed:d,collapsedRows:c,responsiveCols:v,responsiveQuery:f}=this;s.forEach((e=>{var t,r,a,o;if(!0!==(null===(t=null==e?void 0:e.type)||void 0===t?void 0:t.__GRID_ITEM__))return;if(function(e){var t;const r=null===(t=e.dirs)||void 0===t?void 0:t.find((({dir:e})=>e===l));return!(!r||!1!==r.value)}(e)){const t=D(e);return t.props?t.props.privateShow=!1:t.props={privateShow:!1},void u.push({child:t,rawChildSpan:0})}e.dirs=(null===(r=e.dirs)||void 0===r?void 0:r.filter((({dir:e})=>e!==l)))||null;const n=D(e),i=Number(null!==(o=ie(null===(a=n.props)||void 0===a?void 0:a.span,f))&&void 0!==o?o:1);0!==i&&u.push({child:n,rawChildSpan:i})}));let p=0;const h=null===(e=u[u.length-1])||void 0===e?void 0:e.child;if(null==h?void 0:h.props){const e=null===(t=h.props)||void 0===t?void 0:t.suffix;void 0!==e&&!1!==e&&(p=null!==(a=null===(r=h.props)||void 0===r?void 0:r.span)&&void 0!==a?a:1,h.props.privateSpan=p,h.props.privateColStart=v+1-p,h.props.privateShow=null===(o=h.props.privateShow)||void 0===o||o)}let m=0,g=!1;for(const{child:l,rawChildSpan:b}of u){if(g&&(this.overflow=!0),!g){const e=Number(null!==(i=ie(null===(n=l.props)||void 0===n?void 0:n.offset,f))&&void 0!==i?i:0),t=Math.min(b+e,v);if(l.props?(l.props.privateSpan=t,l.props.privateOffset=e):l.props={privateSpan:t,privateOffset:e},d){const e=m%v;t+e>v&&(m+=v-e),t+m+p>c*v?g=!0:m+=t}}g&&(l.props?!0!==l.props.privateShow&&(l.props.privateShow=!1):l.props={privateShow:!1})}return E("div",L({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[be]:this.isSsr||void 0},this.$attrs),u.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?E(F,{onResize:this.handleResize},{default:e}):e()}}),ye={name:"Statistic",common:s,self:e=>{const{textColor2:t,textColor3:r,fontSize:l,fontWeight:a}=e;return{labelFontSize:l,labelFontWeight:a,valueFontWeight:a,valueFontSize:"24px",labelTextColor:r,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}}},Se=c("statistic",[h("label","\n font-weight: var(--n-label-font-weight);\n transition: .3s color var(--n-bezier);\n font-size: var(--n-label-font-size);\n color: var(--n-label-text-color);\n "),c("statistic-value","\n margin-top: 4px;\n font-weight: var(--n-value-font-weight);\n ",[h("prefix","\n margin: 0 4px 0 0;\n font-size: var(--n-value-font-size);\n transition: .3s color var(--n-bezier);\n color: var(--n-value-prefix-text-color);\n ",[c("icon",{verticalAlign:"-0.125em"})]),h("content","\n font-size: var(--n-value-font-size);\n transition: .3s color var(--n-bezier);\n color: var(--n-value-text-color);\n "),h("suffix","\n margin: 0 0 0 4px;\n font-size: var(--n-value-font-size);\n transition: .3s color var(--n-bezier);\n color: var(--n-value-suffix-text-color);\n ",[c("icon",{verticalAlign:"-0.125em"})])])]),we=m({name:"Statistic",props:Object.assign(Object.assign({},x.props),{tabularNums:Boolean,label:String,value:[String,Number]}),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:l}=g(e),a=x("Statistic","-statistic",Se,ye,e,t),n=M("Statistic",l,t),i=o((()=>{const{self:{labelFontWeight:e,valueFontSize:t,valueFontWeight:r,valuePrefixTextColor:l,labelTextColor:o,valueSuffixTextColor:n,valueTextColor:i,labelFontSize:s},common:{cubicBezierEaseInOut:u}}=a.value;return{"--n-bezier":u,"--n-label-font-size":s,"--n-label-font-weight":e,"--n-label-text-color":o,"--n-value-font-weight":r,"--n-value-font-size":t,"--n-value-prefix-text-color":l,"--n-value-suffix-text-color":n,"--n-value-text-color":i}})),s=r?z("statistic",void 0,i,e):void 0;return{rtlEnabled:n,mergedClsPrefix:t,cssVars:r?void 0:i,themeClass:null==s?void 0:s.themeClass,onRender:null==s?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:t,$slots:{default:r,label:l,prefix:a,suffix:o}}=this;return null===(e=this.onRender)||void 0===e||e.call(this),E("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},k(l,(e=>E("div",{class:`${t}-statistic__label`},this.label||e))),E("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},k(a,(e=>e&&E("span",{class:`${t}-statistic-value__prefix`},e))),void 0!==this.value?E("span",{class:`${t}-statistic-value__content`},this.value):k(r,(e=>e&&E("span",{class:`${t}-statistic-value__content`},e))),k(o,(e=>e&&E("span",{class:`${t}-statistic-value__suffix`},e)))))}}),ze={"flex-1":""},_e={flex:"","items-center":""},$e={"ml-20":""},Ce={"text-16":""},Re={"ml-auto":"",flex:"","items-center":""},ke=Q("a",{href:"https://github.com/szluyu99/gin-vue-blog",target:"_blank"},[Q("img",{alt:"stars",src:"https://badgen.net/github/stars/szluyu99/gin-vue-blog"})],-1),Ee=Q("a",{href:"https://github.com/szluyu99/gin-vue-blog",target:"_blank"},[Q("img",{alt:"forks",src:"https://badgen.net/github/forks/szluyu99/gin-vue-blog"})],-1),Fe={flex:"","flex-wrap":"","justify-between":""},je=Q("p",{"op-60":""}," 这是个基于 gin 开发的博客管理后台 ",-1),Te=Q("div",{"w-300":"","h-0":""},null,-1),Oe=Q("div",{"w-300":"","h-0":""},null,-1),Pe=Q("div",{"w-300":"","h-0":""},null,-1),Ge=Q("div",{"w-300":"","h-0":""},null,-1),Ne={__name:"index",setup(l){const{nickname:a,avatar:o}=H();let i=n({});$((()=>e(this,null,(function*(){!function(){e(this,null,(function*(){fetch("https://v1.hitokoto.cn?c=i").then((e=>e.json())).then((e=>s.value=e.hitokoto)).catch((()=>s.value="宠辱不惊，看庭前花开花落；去留无意，望天上云卷云舒。"))}))}();const t=yield I.getHomeInfo();i.value=t.data}))));let s=n("");return(e,l)=>{const n=fe,u=ne,d=we,c=te,v=r,f=me,p=xe,h=re,m=t;return q(),V(m,{"show-footer":!0},{default:W((()=>[Q("div",ze,[X(c,{"rounded-10":""},{default:W((()=>[Q("div",_e,[X(n,{round:"",size:60,src:Y(o)},null,8,["src"]),Q("div",$e,[Q("p",Ce," Hello, "+Z(Y(a)),1),X(u,{"mt-5":"","text-12":"","op-60":"",gradient:"linear-gradient(90deg, red 0%, green 50%, blue 100%)"},{default:W((()=>[J(Z(s.value),1)])),_:1})]),Q("div",Re,[X(d,{label:"Stars","w-80":"","ml-80":""},{default:W((()=>[ke])),_:1}),X(d,{label:"Forks","w-100":"","ml-80":""},{default:W((()=>[Ee])),_:1})])])])),_:1}),X(p,{"mt-15":"","x-gap":"12",cols:4},{default:W((()=>[X(f,null,{default:W((()=>[X(c,null,{default:W((()=>[X(v,{icon:"fa6-solid:users",color:"#40C9C6",size:60}),X(d,{"float-right":"",label:"访问量"},{default:W((()=>{var e;return[J(Z(null!=(e=i.value.view_count)?e:"unknown"),1)]})),_:1})])),_:1})])),_:1}),X(f,null,{default:W((()=>[X(c,null,{default:W((()=>[X(v,{icon:"heroicons:users-solid",color:"#34BFA3",size:60}),X(d,{"float-right":"",label:"用户量"},{default:W((()=>{var e;return[J(Z(null!=(e=i.value.user_count)?e:"unknown"),1)]})),_:1})])),_:1})])),_:1}),X(f,null,{default:W((()=>[X(c,null,{default:W((()=>[X(v,{icon:"material-symbols:article",color:"#F4516C",size:60}),X(d,{"float-right":"",label:"文章量"},{default:W((()=>{var e;return[J(Z(null!=(e=i.value.article_count)?e:"unknown"),1)]})),_:1})])),_:1})])),_:1}),X(f,null,{default:W((()=>[X(c,null,{default:W((()=>[X(v,{icon:"bxs:comment-dots",color:"#36A3F7",size:60}),X(d,{"float-right":"",label:"留言量"},{default:W((()=>{var e;return[J(Z(null!=(e=i.value.message_count)?e:"unknown"),1)]})),_:1})])),_:1})])),_:1})])),_:1}),X(c,{title:"项目",size:"small","mt-15":"","rounded-10":""},{"header-extra":W((()=>[X(h,{text:"",type:"primary"},{default:W((()=>[J(" 更多 ")])),_:1})])),default:W((()=>[Q("div",Fe,[(q(),K(ee,null,U(10,(e=>X(c,{key:e,class:"w-300 flex-shrink-0 my-10 cursor-pointer","hover:card-shadow":"",title:"Gin Blog Admin",size:"small"},{default:W((()=>[je])),_:2},1024))),64)),Te,Oe,Pe,Ge])])),_:1})])])),_:1})}}};export{Ne as default};
