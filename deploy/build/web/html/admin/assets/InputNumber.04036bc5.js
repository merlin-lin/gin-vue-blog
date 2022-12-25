import{m as e,j as n,az as t,i,aL as l,V as r,k as a,n as o,p as u,aa as s,z as d,Z as f,a9 as c,ab as p,a4 as m,ag as v,q as h,bW as g,ai as b,an as x,a0 as I,N as w,bX as y,ao as B,am as V}from"./index.70bc36b3.js";import{i as T,u as D,_ as C}from"./Input.ea8d809e.js";import{A as F}from"./Add.0acf478a.js";const O=e({name:"Remove",render:()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:"\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "}))}),P=t({name:"InputNumber",common:i,peers:{Button:l,Input:T},self:e=>{const{textColorDisabled:n}=e;return{iconColorDisabled:n}}});function N(e){return null==e||"string"==typeof e&&""===e.trim()?null:Number(e)}function U(e){return null==e||!Number.isNaN(e)}function k(e,n){return null==e?"":void 0===n?String(e):e.toFixed(n)}function S(e){if(null===e)return null;if("number"==typeof e)return e;{const n=Number(e);return Number.isNaN(n)?null:n}}const M=r([a("input-number-suffix","\n display: inline-block;\n margin-right: 10px;\n "),a("input-number-prefix","\n display: inline-block;\n margin-left: 10px;\n ")]),R=e({name:"InputNumber",props:Object.assign(Object.assign({},u.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),setup(e){const{mergedBorderedRef:n,mergedClsPrefixRef:t,mergedRtlRef:i}=o(e),l=u("InputNumber","-input-number",M,P,e,t),{localeRef:r}=D("InputNumber"),a=s(e),{mergedSizeRef:b,mergedDisabledRef:I,mergedStatusRef:w}=a,y=d(null),T=d(null),C=d(null),F=d(e.defaultValue),O=f(e,"value"),R=c(O,F),A=d(""),$=e=>{const n=String(e).split(".")[1];return n?n.length:0},j=p((()=>{const{placeholder:n}=e;return void 0!==n?n:r.value.placeholder})),z=p((()=>{const n=S(e.step);return null!==n?0===n?1:Math.abs(n):1})),E=p((()=>{const n=S(e.min);return null!==n?n:null})),K=p((()=>{const n=S(e.max);return null!==n?n:null})),L=n=>{const{value:t}=R;if(n===t)return void q();const{"onUpdate:value":i,onUpdateValue:l,onChange:r}=e,{nTriggerFormInput:o,nTriggerFormChange:u}=a;r&&B(r,n),l&&B(l,n),i&&B(i,n),F.value=n,o(),u()},_=({offset:n,doUpdateIfValid:t,fixPrecision:i,isInputing:l})=>{const{value:r}=A;if(l&&((a=r).includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(a)||/^\.\d+$/.test(a))))return!1;var a;const o=(e.parse||N)(r);if(null===o)return t&&L(null),null;if(U(o)){const r=$(o),{precision:a}=e;if(void 0!==a&&a<r&&!i)return!1;let u=parseFloat((o+n).toFixed(null!=a?a:(n=>{const t=[e.min,e.max,e.step,n].map((e=>void 0===e?0:$(e)));return Math.max(...t)})(o)));if(U(u)){const{value:n}=K,{value:i}=E;if(null!==n&&u>n){if(!t||l)return!1;u=n}if(null!==i&&u<i){if(!t||l)return!1;u=i}return!(e.validator&&!e.validator(u))&&(t&&L(u),u)}}return!1},q=()=>{const{value:n}=R;if(U(n)){const{format:t,precision:i}=e;t?A.value=t(n):null===n||void 0===i||$(n)>i?A.value=k(n,void 0):A.value=k(n,i)}else A.value=String(n)};q();const W=p((()=>!1===_({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1}))),X=p((()=>{const{value:n}=R;if(e.validator&&null===n)return!1;const{value:t}=z;return!1!==_({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})})),Z=p((()=>{const{value:n}=R;if(e.validator&&null===n)return!1;const{value:t}=z;return!1!==_({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})}));function G(){const{value:n}=Z;if(!n)return void le();const{value:t}=R;if(null===t)e.validator||L(Y());else{const{value:e}=z;_({offset:e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function H(){const{value:n}=X;if(!n)return void ie();const{value:t}=R;if(null===t)e.validator||L(Y());else{const{value:e}=z;_({offset:-e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const J=function(n){const{onFocus:t}=e,{nTriggerFormFocus:i}=a;t&&B(t,n),i()},Q=function(n){var t,i;if(n.target===(null===(t=y.value)||void 0===t?void 0:t.wrapperElRef))return;const l=_({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(!1!==l){const e=null===(i=y.value)||void 0===i?void 0:i.inputElRef;e&&(e.value=String(l||"")),R.value===l&&q()}else q();const{onBlur:r}=e,{nTriggerFormBlur:o}=a;r&&B(r,n),o(),V((()=>{q()}))};function Y(){if(e.validator)return null;const{value:n}=E,{value:t}=K;return null!==n?Math.max(0,n):null!==t?Math.min(0,t):0}let ee=null,ne=null,te=null;function ie(){te&&(window.clearTimeout(te),te=null),ee&&(window.clearInterval(ee),ee=null)}function le(){re&&(window.clearTimeout(re),re=null),ne&&(window.clearInterval(ne),ne=null)}let re=null;m(R,(()=>{q()}));const ae={focus:()=>{var e;return null===(e=y.value)||void 0===e?void 0:e.focus()},blur:()=>{var e;return null===(e=y.value)||void 0===e?void 0:e.blur()}},oe=v("InputNumber",i,t);return Object.assign(Object.assign({},ae),{rtlEnabled:oe,inputInstRef:y,minusButtonInstRef:T,addButtonInstRef:C,mergedClsPrefix:t,mergedBordered:n,uncontrolledValue:F,mergedValue:R,mergedPlaceholder:j,displayedValueInvalid:W,mergedSize:b,mergedDisabled:I,displayedValue:A,addable:Z,minusable:X,mergedStatus:w,handleFocus:J,handleBlur:Q,handleClear:function(n){!function(n){const{onClear:t}=e;t&&B(t,n)}(n),L(null)},handleMouseDown:function(e){var n,t,i;(null===(n=C.value)||void 0===n?void 0:n.$el.contains(e.target))&&e.preventDefault(),(null===(t=T.value)||void 0===t?void 0:t.$el.contains(e.target))&&e.preventDefault(),null===(i=y.value)||void 0===i||i.activate()},handleAddClick:()=>{ne||G()},handleMinusClick:()=>{ee||H()},handleAddMousedown:function(){le(),re=window.setTimeout((()=>{ne=window.setInterval((()=>{G()}),100)}),800),x("mouseup",document,le,{once:!0})},handleMinusMousedown:function(){ie(),te=window.setTimeout((()=>{ee=window.setInterval((()=>{H()}),100)}),800),x("mouseup",document,ie,{once:!0})},handleKeyDown:function(n){var t,i;if("Enter"===n.key){if(n.target===(null===(t=y.value)||void 0===t?void 0:t.wrapperElRef))return;!1!==_({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&(null===(i=y.value)||void 0===i||i.deactivate())}else if("ArrowUp"===n.key){if(!Z.value)return;if(!1===e.keyboard.ArrowUp)return;n.preventDefault();!1!==_({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&G()}else if("ArrowDown"===n.key){if(!X.value)return;if(!1===e.keyboard.ArrowDown)return;n.preventDefault();!1!==_({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&H()}},handleUpdateDisplayedValue:function(n){A.value=n,!e.updateValueOnInput||e.format||e.parse||void 0!==e.precision||_({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})},mergedTheme:l,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:h((()=>{const{self:{iconColorDisabled:e}}=l.value,[n,t,i,r]=g(e);return{textColorTextDisabled:`rgb(${n}, ${t}, ${i})`,opacityDisabled:`${r}`}}))})},render(){const{mergedClsPrefix:e,$slots:t}=this,i=()=>n(y,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>I(t["minus-icon"],(()=>[n(w,{clsPrefix:e},{default:()=>n(O,null)})]))}),l=()=>n(y,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>I(t["add-icon"],(()=>[n(w,{clsPrefix:e},{default:()=>n(F,null)})]))});return n("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},n(C,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var l;return this.showButton&&"both"===this.buttonPlacement?[i(),b(t.prefix,(t=>t?n("span",{class:`${e}-input-number-prefix`},t):null))]:null===(l=t.prefix)||void 0===l?void 0:l.call(t)},suffix:()=>{var r;return this.showButton?[b(t.suffix,(t=>t?n("span",{class:`${e}-input-number-suffix`},t):null)),"right"===this.buttonPlacement?i():null,l()]:null===(r=t.suffix)||void 0===r?void 0:r.call(t)}}))}});export{R as _};
