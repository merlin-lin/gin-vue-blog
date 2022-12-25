import{J as O,K as X,k as S,r as N,L as q,M as F,j as P,N as U,O as w,P as E,Q as Y,R as z,S as B,o as J,T as W,E as A,U as H,V as I,W as Z,X as K,Y as j}from"./index.d0faf39f.js";import{b as ee}from"./next-frame-once.67417e12.js";function te(e){if(typeof e=="number")return{"":e.toString()};const s={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,t]=r.split(":");t===void 0?s[""]=n:s[n]=t}),s}function C(e,s){var r;if(e==null)return;const n=te(e);if(s===void 0)return n[""];if(typeof s=="string")return(r=n[s])!==null&&r!==void 0?r:n[""];if(Array.isArray(s)){for(let t=s.length-1;t>=0;--t){const i=s[t];if(i in n)return n[i]}return n[""]}else{let t,i=-1;return Object.keys(n).forEach(o=>{const a=Number(o);!Number.isNaN(a)&&s>=a&&a>=i&&(i=a,t=n[o])}),t}}function se(e,s="default",r=[]){const t=e.$slots[s];return t===void 0?r:t()}function ne(e){var s;const r=(s=e.dirs)===null||s===void 0?void 0:s.find(({dir:n})=>n===O);return!!(r&&r.value===!1)}const re={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ie(e){return`(min-width: ${e}px)`}const G={};function oe(e=re){if(!X)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const s=N({}),r=Object.keys(e),n=(t,i)=>{t.matches?s.value[i]=!0:s.value[i]=!1};return r.forEach(t=>{const i=e[t];let o,a;G[i]===void 0?(o=window.matchMedia(ie(i)),o.addEventListener?o.addEventListener("change",d=>{a.forEach(f=>{f(d,t)})}):o.addListener&&o.addListener(d=>{a.forEach(f=>{f(d,t)})}),a=new Set,G[i]={mql:o,cbs:a}):(o=G[i].mql,a=G[i].cbs),a.add(n),o.matches&&a.forEach(d=>{d(o,t)})}),q(()=>{r.forEach(t=>{const{cbs:i}=G[e[t]];i.has(n)&&i.delete(n)})}),S(()=>{const{value:t}=s;return r.filter(i=>t[i])})}const V=1,T=F("n-grid"),L=1,ae={span:{type:[Number,String],default:L},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},pe=P({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:ae,setup(){const{isSsrRef:e,xGapRef:s,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:t}=U(T),i=Y();return{overflow:n,itemStyle:r,layoutShiftDisabled:t,mergedXGap:S(()=>w(s.value||0)),deriveStyle:()=>{e.value;const{privateSpan:o=L,privateShow:a=!0,privateColStart:d=void 0,privateOffset:f=0}=i.vnode.props,{value:_}=s,g=w(_||0);return{display:a?"":"none",gridColumn:`${d!=null?d:`span ${o}`} / span ${o}`,marginLeft:f?`calc((100% - (${o} - 1) * ${g}) / ${o} * ${f} + ${g} * ${f})`:""}}}},render(){var e,s;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:t}=this;return E("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${t}) / ${r} * ${n} + ${t} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(s=(e=this.$slots).default)===null||s===void 0?void 0:s.call(e,{overflow:this.overflow}))}}),le={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Q=24,D="__ssr__",fe={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Q},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},ce=P({name:"Grid",inheritAttrs:!1,props:fe,setup(e){const{mergedClsPrefixRef:s,mergedBreakpointsRef:r}=z(e),n=/^\d+$/,t=N(void 0),i=oe((r==null?void 0:r.value)||le),o=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),a=S(()=>{if(!!o.value)return e.responsive==="self"?t.value:i.value}),d=B(()=>{var u;return(u=Number(C(e.cols.toString(),a.value)))!==null&&u!==void 0?u:Q}),f=B(()=>C(e.xGap.toString(),a.value)),_=B(()=>C(e.yGap.toString(),a.value)),g=u=>{t.value=u.contentRect.width},v=u=>{ee(g,u)},x=N(!1),R=S(()=>{if(e.responsive==="self")return v}),p=N(!1),h=N();return J(()=>{const{value:u}=h;u&&u.hasAttribute(D)&&(u.removeAttribute(D),p.value=!0)}),W(T,{layoutShiftDisabledRef:A(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:A(e,"itemStyle"),xGapRef:f,overflowRef:x}),{isSsr:!H,contentEl:h,mergedClsPrefix:s,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:w(e.xGap),rowGap:w(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:w(f.value),rowGap:w(_.value)}),isResponsive:o,responsiveQuery:a,responsiveCols:d,handleResize:R,overflow:x}},render(){if(this.layoutShiftDisabled)return E("div",I({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var s,r,n,t,i,o,a;this.overflow=!1;const d=K(se(this)),f=[],{collapsed:_,collapsedRows:g,responsiveCols:v,responsiveQuery:x}=this;d.forEach(l=>{var $,m,c,y;if((($=l==null?void 0:l.type)===null||$===void 0?void 0:$.__GRID_ITEM__)!==!0)return;if(ne(l)){const b=j(l);b.props?b.props.privateShow=!1:b.props={privateShow:!1},f.push({child:b,rawChildSpan:0});return}l.dirs=((m=l.dirs)===null||m===void 0?void 0:m.filter(({dir:b})=>b!==O))||null;const M=j(l),k=Number((y=C((c=M.props)===null||c===void 0?void 0:c.span,x))!==null&&y!==void 0?y:V);k!==0&&f.push({child:M,rawChildSpan:k})});let R=0;const p=(s=f[f.length-1])===null||s===void 0?void 0:s.child;if(p!=null&&p.props){const l=(r=p.props)===null||r===void 0?void 0:r.suffix;l!==void 0&&l!==!1&&(R=(t=(n=p.props)===null||n===void 0?void 0:n.span)!==null&&t!==void 0?t:V,p.props.privateSpan=R,p.props.privateColStart=v+1-R,p.props.privateShow=(i=p.props.privateShow)!==null&&i!==void 0?i:!0)}let h=0,u=!1;for(const{child:l,rawChildSpan:$}of f){if(u&&(this.overflow=!0),!u){const m=Number((a=C((o=l.props)===null||o===void 0?void 0:o.offset,x))!==null&&a!==void 0?a:0),c=Math.min($+m,v);if(l.props?(l.props.privateSpan=c,l.props.privateOffset=m):l.props={privateSpan:c,privateOffset:m},_){const y=h%v;c+y>v&&(h+=v-y),c+h+R>g*v?u=!0:h+=c}}u&&(l.props?l.props.privateShow!==!0&&(l.props.privateShow=!1):l.props={privateShow:!1})}return E("div",I({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[D]:this.isSsr||void 0},this.$attrs),f.map(({child:l})=>l))};return this.isResponsive&&this.responsive==="self"?E(Z,{onResize:this.handleResize},{default:e}):e()}});export{ce as _,pe as a};
