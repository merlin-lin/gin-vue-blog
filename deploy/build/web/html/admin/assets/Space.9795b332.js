import{b8 as e,m as t,n as a,p as n,ag as r,q as i,v as l,b9 as o,aR as s,ba as p,j as d}from"./index.fc8a4220.js";import{g as c}from"./get-slot.8207e825.js";const m={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},g={name:"Space",self:()=>m};let u;const f=()=>{if(!e)return!0;if(void 0===u){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=1===e.scrollHeight;return document.body.removeChild(e),u=t}return u},x=t({name:"Space",props:Object.assign(Object.assign({},n.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:p}=a(e),d=n("Space","-space",void 0,g,e,t),c=r("Space",p,t);return{useGap:f(),rtlEnabled:c,mergedClsPrefix:t,margin:i((()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if("number"==typeof t)return{horizontal:t,vertical:t};const{self:{[l("gap",t)]:a}}=d.value,{row:n,col:r}=o(a);return{horizontal:s(r),vertical:s(n)}}))}},render(){const{vertical:e,align:t,inline:a,justify:n,itemStyle:r,margin:i,wrap:l,mergedClsPrefix:o,rtlEnabled:s,useGap:m,wrapItem:g,internalUseGap:u}=this,f=p(c(this));if(!f.length)return null;const x=`${i.horizontal}px`,y=i.horizontal/2+"px",h=`${i.vertical}px`,v=i.vertical/2+"px",b=f.length-1,w=n.startsWith("space-");return d("div",{role:"none",class:[`${o}-space`,s&&`${o}-space--rtl`],style:{display:a?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!l||e?"nowrap":"wrap",marginTop:m||e?"":`-${v}`,marginBottom:m||e?"":`-${v}`,alignItems:t,gap:m?`${i.vertical}px ${i.horizontal}px`:""}},g||!m&&!u?f.map(((t,a)=>d("div",{role:"none",style:[r,{maxWidth:"100%"},m?"":e?{marginBottom:a!==b?h:""}:s?{marginLeft:w?"space-between"===n&&a===b?"":y:a!==b?x:"",marginRight:w?"space-between"===n&&0===a?"":y:"",paddingTop:v,paddingBottom:v}:{marginRight:w?"space-between"===n&&a===b?"":y:a!==b?x:"",marginLeft:w?"space-between"===n&&0===a?"":y:"",paddingTop:v,paddingBottom:v}]},t))):f)}});export{x as _,g as s};
