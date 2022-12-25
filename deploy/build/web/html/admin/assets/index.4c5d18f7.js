import{_ as e}from"./CommonPage.90710f2e.js";import{_ as n}from"./CrudModal.d3702f9d.js";import{_ as t}from"./CrudTable.92e515e8.js";import{_ as l}from"./QueryBarItem.1ddf46ee.js";import{_ as o}from"./TheIcon.508d8a14.js";import{m as a,j as r,az as i,i as d,aM as s,a2 as c,a3 as u,Q as f,$ as h,a1 as v,N as p,z as g,bh as b,q as y,b8 as k,ab as m,ac as x,a$ as w,aD as C,aV as R,bE as S,k as N,V as K,a6 as D,bF as F,l as A,a7 as P,X as L,n as O,ag as T,p as E,aB as B,ae as _,Z as $,a9 as z,a4 as j,am as U,bY as I,bi as q,ao as M,af as V,x as H,ah as Y,bZ as G,a0 as Q,H as X,c as W,w as Z,o as J,a as ee,d as ne,b as te,_ as le,F as oe,at as ae,bl as re,au as ie,av as de}from"./index.fc8a4220.js";import{u as se}from"./useCRUD.186e8af4.js";import{c as ce,_ as ue}from"./Checkbox.4ef1ea81.js";import{e as fe,b as he}from"./Select.c8646cc6.js";import{V as ve}from"./RadioGroup.5e2ed13e.js";import{N as pe}from"./Switch.c2a2609a.js";import{N as ge}from"./Popconfirm.a5efd3d5.js";import{_ as be}from"./Input.03701cc7.js";import{_ as ye,a as ke}from"./FormItem.c4ce805c.js";import"./AppPage.19cd2eee.js";import"./Space.9795b332.js";import"./get-slot.8207e825.js";import"./Forward.80f15f48.js";function me(e){return"string"==typeof e?`s-${e}`:`n-${e}`}const xe=a({name:"Switcher",render:()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},r("path",{d:"M12 8l10 8l-10 8z"}))}),we=i({name:"Tree",common:d,peers:{Checkbox:ce,Scrollbar:s,Empty:fe},self:e=>{const{borderRadiusSmall:n,hoverColor:t,pressedColor:l,primaryColor:o,textColor3:a,textColor2:r,textColorDisabled:i,fontSize:d}=e;return{fontSize:d,nodeBorderRadius:n,nodeColorHover:t,nodeColorPressed:l,nodeColorActive:c(o,{alpha:.1}),arrowColor:a,nodeTextColor:r,nodeTextColorDisabled:i,loadingColor:o,dropMarkColor:o}}}),Ce=u("n-tree-select"),Re=u("n-tree"),Se=a({name:"NTreeSwitcher",props:{clsPrefix:{type:String,required:!0},expanded:Boolean,selected:Boolean,hide:Boolean,loading:Boolean,onClick:Function},setup(e){const{renderSwitcherIconRef:n}=f(Re,null);return()=>{const{clsPrefix:t}=e;return r("span",{"data-switcher":!0,class:[`${t}-tree-node-switcher`,e.expanded&&`${t}-tree-node-switcher--expanded`,e.hide&&`${t}-tree-node-switcher--hide`],onClick:e.onClick},r("div",{class:`${t}-tree-node-switcher__icon`},r(h,null,{default:()=>{if(e.loading)return r(v,{clsPrefix:t,key:"loading",radius:85,strokeWidth:20});const{value:l}=n;return l?l({expanded:e.expanded,selected:e.selected}):r(p,{clsPrefix:t,key:"switcher"},{default:()=>r(xe,null)})}})))}}}),Ne=a({name:"NTreeNodeCheckbox",props:{clsPrefix:{type:String,required:!0},right:Boolean,focusable:Boolean,disabled:Boolean,checked:Boolean,indeterminate:Boolean,onCheck:Function},setup(e){function n(n){const{onCheck:t}=e;if(t)return t(n)}return{handleUpdateValue:function(t){e.indeterminate?n(!1):n(t)},mergedTheme:f(Re).mergedThemeRef}},render(){const{clsPrefix:e,mergedTheme:n,checked:t,indeterminate:l,disabled:o,focusable:a,handleUpdateValue:i}=this;return r("span",{class:[`${e}-tree-node-checkbox`,this.right&&`${e}-tree-node-checkbox--right`],"data-checkbox":!0},r(ue,{focusable:a,disabled:o,theme:n.peers.Checkbox,themeOverrides:n.peerOverrides.Checkbox,checked:t,indeterminate:l,onUpdateChecked:i}))}}),Ke=a({name:"TreeNodeContent",props:{clsPrefix:{type:String,required:!0},disabled:Boolean,checked:Boolean,selected:Boolean,onClick:Function,onDragstart:Function,tmNode:{type:Object,required:!0},nodeProps:Object},setup(e){const{renderLabelRef:n,renderPrefixRef:t,renderSuffixRef:l,labelFieldRef:o}=f(Re);return{selfRef:g(null),renderLabel:n,renderPrefix:t,renderSuffix:l,labelField:o,handleClick:function(n){!function(n){const{onClick:t}=e;t&&t(n)}(n)}}},render(){const{clsPrefix:e,labelField:n,nodeProps:t,checked:l=!1,selected:o=!1,renderLabel:a,renderPrefix:i,renderSuffix:d,handleClick:s,onDragstart:c,tmNode:{rawNode:u,rawNode:{prefix:f,suffix:h,[n]:v}}}=this;return r("span",Object.assign({},t,{ref:"selfRef",class:[`${e}-tree-node-content`,null==t?void 0:t.class],onClick:s,draggable:void 0!==c||void 0,onDragstart:c}),i||f?r("div",{class:`${e}-tree-node-content__prefix`},i?i({option:u,selected:o,checked:l}):b(f)):null,r("div",{class:`${e}-tree-node-content__text`},a?a({option:u,selected:o,checked:l}):b(v)),d||h?r("div",{class:`${e}-tree-node-content__suffix`},d?d({option:u,selected:o,checked:l}):b(h)):null)}});function De({position:e,offsetLevel:n,indent:t,el:l}){const o={position:"absolute",boxSizing:"border-box",right:0};if("inside"===e)o.left=0,o.top=0,o.bottom=0,o.borderRadius="inherit",o.boxShadow="inset 0 0 0 2px var(--n-drop-mark-color)";else{const a="before"===e?"top":"bottom";o[a]=0,o.left=l.offsetLeft+6-n*t+"px",o.height="2px",o.backgroundColor="var(--n-drop-mark-color)",o.transformOrigin=a,o.borderRadius="1px",o.transform="before"===e?"translateY(-4px)":"translateY(4px)"}return r("div",{style:o})}function Fe(e,n){return!!e.rawNode[n]}function Ae(e,n,t,l){null==e||e.forEach((e=>{t(e),Ae(e[n],n,t,l),l(e)}))}function Pe(e,n,t,l,o){const a=new Set,r=new Set,i=[];return Ae(e,l,(e=>{if(i.push(e),o(n,e)){r.add(e[t]);for(let e=i.length-2;e>=0;--e){if(a.has(i[e][t]))return;a.add(i[e][t])}}}),(()=>{i.pop()})),{expandedKeys:Array.from(a),highlightKeySet:r}}if(k&&Image){(new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}const Le=a({name:"TreeNode",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const n=f(Re),{droppingNodeParentRef:t,droppingMouseNodeRef:l,draggingNodeRef:o,droppingPositionRef:a,droppingOffsetLevelRef:r,nodePropsRef:i,indentRef:d,blockLineRef:s,checkboxPlacementRef:c,checkOnClickRef:u,disabledFieldRef:h}=n,v=m((()=>!!e.tmNode.rawNode.checkboxDisabled)),p=m((()=>Fe(e.tmNode,h.value))),b=m((()=>n.disabledRef.value||p.value)),k=y((()=>{const{value:n}=i;if(n)return n({option:e.tmNode.rawNode})})),w=g(null),R={value:null};function S(){const{tmNode:t}=e;if(t.isLeaf||t.shallowLoaded)n.handleSwitcherClick(t);else{if(n.loadingKeysRef.value.has(t.key))return;n.loadingKeysRef.value.add(t.key);const{onLoadRef:{value:e}}=n;e&&e(t.rawNode).then((()=>{n.handleSwitcherClick(t)})).finally((()=>{n.loadingKeysRef.value.delete(t.key)}))}}x((()=>{R.value=w.value.$el}));const N=m((()=>!p.value&&n.selectableRef.value&&(!n.internalTreeSelect||("child"!==n.mergedCheckStrategyRef.value||n.multipleRef.value&&n.cascadeRef.value||e.tmNode.isLeaf)))),K=m((()=>n.checkableRef.value&&(n.cascadeRef.value||"child"!==n.mergedCheckStrategyRef.value||e.tmNode.isLeaf))),D=m((()=>n.displayedCheckedKeysRef.value.includes(e.tmNode.key))),F=m((()=>{const{value:n}=K;if(!n)return!1;const{value:t}=u;return"boolean"==typeof t?t:t(e.tmNode.rawNode)}));function A(t){const{value:l}=n.expandOnClickRef,{value:o}=N,{value:a}=F;if(!o&&!l&&!a)return;if(C(t,"checkbox")||C(t,"switcher"))return;const{tmNode:r}=e;o&&n.handleSelect(r),l&&!r.isLeaf&&S(),a&&P(!D.value)}function P(t){n.handleCheck(e.tmNode,t)}return{showDropMark:m((()=>{const{value:n}=o;if(!n)return;const{value:t}=a;if(!t)return;const{value:r}=l;if(!r)return;const{tmNode:i}=e;return i.key===r.key})),showDropMarkAsParent:m((()=>{const{value:n}=t;if(!n)return!1;const{tmNode:l}=e,{value:o}=a;return("before"===o||"after"===o)&&n.key===l.key})),pending:m((()=>n.pendingNodeKeyRef.value===e.tmNode.key)),loading:m((()=>n.loadingKeysRef.value.has(e.tmNode.key))),highlight:m((()=>{var t;return null===(t=n.highlightKeySetRef.value)||void 0===t?void 0:t.has(e.tmNode.key)})),checked:D,indeterminate:m((()=>n.displayedIndeterminateKeysRef.value.includes(e.tmNode.key))),selected:m((()=>n.mergedSelectedKeysRef.value.includes(e.tmNode.key))),expanded:m((()=>n.mergedExpandedKeysRef.value.includes(e.tmNode.key))),disabled:b,checkable:K,mergedCheckOnClick:F,checkboxDisabled:v,selectable:N,expandOnClick:n.expandOnClickRef,internalScrollable:n.internalScrollableRef,draggable:n.draggableRef,blockLine:s,nodeProps:k,checkboxFocusable:n.internalCheckboxFocusableRef,droppingPosition:a,droppingOffsetLevel:r,indent:d,checkboxPlacement:c,contentInstRef:w,contentElRef:R,handleCheck:P,handleDrop:function(t){t.preventDefault(),null!==a.value&&n.handleDrop({event:t,node:e.tmNode,dropPosition:a.value})},handleDragStart:function(t){n.handleDragStart({event:t,node:e.tmNode})},handleDragEnter:function(t){t.currentTarget===t.target&&n.handleDragEnter({event:t,node:e.tmNode})},handleDragOver:function(t){t.preventDefault(),n.handleDragOver({event:t,node:e.tmNode})},handleDragEnd:function(t){n.handleDragEnd({event:t,node:e.tmNode})},handleDragLeave:function(t){t.currentTarget===t.target&&n.handleDragLeave({event:t,node:e.tmNode})},handleLineClick:function(e){var n,t;s.value&&(b.value||A(e),null===(t=null===(n=k.value)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e))},handleContentClick:function(e){var n,t;s.value||(b.value||A(e),null===(t=null===(n=k.value)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e))},handleSwitcherClick:S}},render(){const{tmNode:e,clsPrefix:n,checkable:t,expandOnClick:l,selectable:o,selected:a,checked:i,highlight:d,draggable:s,blockLine:c,indent:u,disabled:f,pending:h,internalScrollable:v,nodeProps:p,checkboxPlacement:g}=this,b=s&&!f?{onDragenter:this.handleDragEnter,onDragleave:this.handleDragLeave,onDragend:this.handleDragEnd,onDrop:this.handleDrop,onDragover:this.handleDragOver}:void 0,y=v?me(e.key):void 0,k="right"===g,m=t?r(Ne,{right:k,focusable:this.checkboxFocusable,disabled:f||this.checkboxDisabled,clsPrefix:n,checked:this.checked,indeterminate:this.indeterminate,onCheck:this.handleCheck}):null;return r("div",Object.assign({class:`${n}-tree-node-wrapper`},b),r("div",Object.assign({},c?p:void 0,{class:[`${n}-tree-node`,{[`${n}-tree-node--selected`]:a,[`${n}-tree-node--checkable`]:t,[`${n}-tree-node--highlight`]:d,[`${n}-tree-node--pending`]:h,[`${n}-tree-node--disabled`]:f,[`${n}-tree-node--selectable`]:o,[`${n}-tree-node--clickable`]:o||l||this.mergedCheckOnClick},null==p?void 0:p.class],"data-key":y,draggable:s&&c,onClick:this.handleLineClick,onDragstart:s&&c&&!f?this.handleDragStart:void 0}),w(e.level,r("div",{class:`${n}-tree-node-indent`},r("div",{style:{width:`${u}px`}}))),r(Se,{clsPrefix:n,expanded:this.expanded,selected:a,loading:this.loading,hide:e.isLeaf,onClick:this.handleSwitcherClick}),k?null:m,r(Ke,{ref:"contentInstRef",clsPrefix:n,checked:i,selected:a,onClick:this.handleContentClick,nodeProps:c?void 0:p,onDragstart:!s||c||f?void 0:this.handleDragStart,tmNode:e}),s?this.showDropMark?De({el:this.contentElRef.value,position:this.droppingPosition,offsetLevel:this.droppingOffsetLevel,indent:u}):this.showDropMarkAsParent?De({el:this.contentElRef.value,position:"inside",offsetLevel:this.droppingOffsetLevel,indent:u}):null:null,k?m:null))}});const Oe=a({name:"TreeMotionWrapper",props:{clsPrefix:{type:String,required:!0},height:Number,nodes:{type:Array,required:!0},mode:{type:String,required:!0},onAfterEnter:{type:Function,required:!0}},render(){const{clsPrefix:e}=this;return r(S,{onAfterEnter:this.onAfterEnter,appear:!0,reverse:"collapse"===this.mode},{default:()=>r("div",{class:[`${e}-tree-motion-wrapper`,`${e}-tree-motion-wrapper--${this.mode}`],style:{height:R(this.height)}},this.nodes.map((n=>r(Le,{clsPrefix:e,tmNode:n}))))})}}),Te=N("tree","\n font-size: var(--n-font-size);\n outline: none;\n",[K("ul, li","\n margin: 0;\n padding: 0;\n list-style: none;\n "),K(">",[N("tree-node",[K("&:first-child",{marginTop:0})])]),N("tree-node-indent","\n flex-grow: 0;\n flex-shrink: 0;\n height: 0;\n "),N("tree-motion-wrapper",[D("expand",[F({duration:"0.2s"})]),D("collapse",[F({duration:"0.2s",reverse:!0})])]),N("tree-node-wrapper","\n box-sizing: border-box;\n padding: 3px 0;\n "),N("tree-node","\n transform: translate3d(0,0,0);\n position: relative;\n display: flex;\n border-radius: var(--n-node-border-radius);\n transition: background-color .3s var(--n-bezier);\n ",[D("highlight",[N("tree-node-content",[A("text",{borderBottomColor:"var(--n-node-text-color-disabled)"})])]),D("disabled",[N("tree-node-content","\n color: var(--n-node-text-color-disabled);\n cursor: not-allowed;\n ")]),P("disabled",[D("clickable",[N("tree-node-content","\n cursor: pointer;\n ")])])]),D("block-node",[N("tree-node-content","\n flex: 1;\n min-width: 0;\n ")]),P("block-line",[N("tree-node",[P("disabled",[N("tree-node-content",[K("&:hover",{backgroundColor:"var(--n-node-color-hover)"})]),D("selectable",[N("tree-node-content",[K("&:active",{backgroundColor:"var(--n-node-color-pressed)"})])]),D("pending",[N("tree-node-content","\n background-color: var(--n-node-color-hover);\n ")]),D("selected",[N("tree-node-content",{backgroundColor:"var(--n-node-color-active)"})])])])]),D("block-line",[N("tree-node",[P("disabled",[K("&:hover",{backgroundColor:"var(--n-node-color-hover)"}),D("pending","\n background-color: var(--n-node-color-hover);\n "),D("selectable",[P("selected",[K("&:active",{backgroundColor:"var(--n-node-color-pressed)"})])]),D("selected",{backgroundColor:"var(--n-node-color-active)"})]),D("disabled","\n cursor: not-allowed;\n ")])]),N("tree-node-switcher","\n cursor: pointer;\n display: inline-flex;\n flex-shrink: 0;\n height: 24px;\n width: 24px;\n align-items: center;\n justify-content: center;\n transition: transform .15s var(--n-bezier);\n vertical-align: bottom;\n ",[A("icon","\n position: relative;\n height: 14px;\n width: 14px;\n display: flex;\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n font-size: 14px;\n ",[N("icon",[L()]),N("base-loading","\n color: var(--n-loading-color);\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n ",[L()]),N("base-icon",[L()])]),D("hide",{visibility:"hidden"}),D("expanded",{transform:"rotate(90deg)"})]),N("tree-node-checkbox","\n display: inline-flex;\n height: 24px;\n width: 16px;\n vertical-align: bottom;\n align-items: center;\n justify-content: center;\n margin-right: 4px;\n ",[D("right","margin-left: 4px;")]),D("checkable",[N("tree-node-content","\n padding: 0 6px;\n ")]),N("tree-node-content","\n position: relative;\n display: inline-flex;\n align-items: center;\n min-height: 24px;\n box-sizing: border-box;\n line-height: 1.5;\n vertical-align: bottom;\n padding: 0 6px 0 4px;\n cursor: default;\n border-radius: var(--n-node-border-radius);\n text-decoration-color: #0000;\n text-decoration-line: underline;\n color: var(--n-node-text-color);\n transition:\n color .3s var(--n-bezier),\n text-decoration-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[K("&:last-child",{marginBottom:0}),A("prefix","\n display: inline-flex;\n margin-right: 8px;\n "),A("text","\n border-bottom: 1px solid #0000;\n transition: border-color .3s var(--n-bezier);\n flex-grow: 1;\n max-width: 100%;\n "),A("suffix","\n display: inline-flex;\n ")]),A("empty","margin: auto;")]);var Ee=globalThis&&globalThis.__awaiter||function(e,n,t,l){return new(t||(t=Promise))((function(o,a){function r(e){try{d(l.next(e))}catch(n){a(n)}}function i(e){try{d(l.throw(e))}catch(n){a(n)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,i)}d((l=l.apply(e,n||[])).next())}))};const Be={allowCheckingNotLoaded:Boolean,filter:Function,defaultExpandAll:Boolean,expandedKeys:Array,keyField:{type:String,default:"key"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandedKeys:{type:Array,default:()=>[]},indeterminateKeys:Array,renderSwitcherIcon:Function,onUpdateIndeterminateKeys:[Function,Array],"onUpdate:indeterminateKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],"onUpdate:expandedKeys":[Function,Array]},_e=a({name:"Tree",props:Object.assign(Object.assign(Object.assign(Object.assign({},E.props),{accordion:Boolean,showIrrelevantNodes:{type:Boolean,default:!0},data:{type:Array,default:()=>[]},expandOnDragenter:{type:Boolean,default:!0},expandOnClick:Boolean,checkOnClick:{type:[Boolean,Function],default:!1},cancelable:{type:Boolean,default:!0},checkable:Boolean,draggable:Boolean,blockNode:Boolean,blockLine:Boolean,disabled:Boolean,checkedKeys:Array,defaultCheckedKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},multiple:Boolean,pattern:{type:String,default:""},onLoad:Function,cascade:Boolean,selectable:{type:Boolean,default:!0},indent:{type:Number,default:16},allowDrop:{type:Function,default:function({dropPosition:e,node:n}){return!1===n.isLeaf||(!!n.children||"inside"!==e)}},animated:{type:Boolean,default:!0},checkboxPlacement:{type:String,default:"left"},virtualScroll:Boolean,watchProps:Array,renderLabel:Function,renderPrefix:Function,renderSuffix:Function,nodeProps:Function,keyboard:{type:Boolean,default:!0},onDragenter:[Function,Array],onDragleave:[Function,Array],onDragend:[Function,Array],onDragstart:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onUpdateCheckedKeys:[Function,Array],"onUpdate:checkedKeys":[Function,Array],onUpdateSelectedKeys:[Function,Array],"onUpdate:selectedKeys":[Function,Array]}),Be),{internalTreeSelect:Boolean,internalScrollable:Boolean,internalScrollablePadding:String,internalRenderEmpty:Function,internalHighlightKeySet:Object,internalUnifySelectCheck:Boolean,internalCheckboxFocusable:{type:Boolean,default:!0},internalFocusable:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},leafOnly:Boolean}),setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:l}=O(e),o=T("Tree",l,n),a=E("Tree","-tree",Te,we,e,n),r=g(null),i=g(null),d=g(null);const s=y((()=>{const{pattern:n}=e;return n&&n.length&&de.value?function(e,n,t,l,o){const a=new Set,r=new Set,i=new Set,d=[],s=[],c=[];return function e(d){d.forEach((d=>{if(c.push(d),n(t,d)){a.add(d[l]),i.add(d[l]);for(let e=c.length-2;e>=0;--e){const n=c[e][l];if(r.has(n))break;r.add(n),a.has(n)&&a.delete(n)}}const s=d[o];s&&e(s),c.pop()}))}(e),function e(n,t){n.forEach((n=>{const i=n[l],s=a.has(i),c=r.has(i);if(!s&&!c)return;const u=n[o];if(u)if(s)t.push(n);else{d.push(i);const l=Object.assign(Object.assign({},n),{[o]:[]});t.push(l),e(u,l[o])}else t.push(n)}))}(e,s),{filteredTree:s,highlightKeySet:i,expandedKeys:d}}(e.data,de.value,n,e.keyField,e.childrenField):{filteredTree:e.data,highlightKeySet:null,expandedKeys:void 0}})),c=y((()=>{return B(e.showIrrelevantNodes?e.data:s.value.filteredTree,(n=e.keyField,t=e.childrenField,l=e.disabledField,{getIsGroup:()=>!1,getKey:e=>e[n],getChildren:e=>e[t],getDisabled:e=>!(!e[l]&&!e.checkboxDisabled)}));var n,t,l})),u=f(Ce,null),h=e.internalTreeSelect?u.dataTreeMate:c,{watchProps:v}=e,p=g([]);(null==v?void 0:v.includes("defaultCheckedKeys"))?_((()=>{p.value=e.defaultCheckedKeys})):p.value=e.defaultCheckedKeys;const b=$(e,"checkedKeys"),k=z(b,p),m=y((()=>h.value.getCheckedKeys(k.value,{cascade:e.cascade,allowNotLoaded:e.allowCheckingNotLoaded}))),x=function(e){return y((()=>e.leafOnly?"child":e.checkStrategy))}(e),w=y((()=>m.value.checkedKeys)),C=y((()=>{const{indeterminateKeys:n}=e;return void 0!==n?n:m.value.indeterminateKeys})),R=g([]);(null==v?void 0:v.includes("defaultSelectedKeys"))?_((()=>{R.value=e.defaultSelectedKeys})):R.value=e.defaultSelectedKeys;const S=$(e,"selectedKeys"),N=z(S,R),K=g([]),D=n=>{K.value=e.defaultExpandAll?h.value.getNonLeafKeys():void 0===n?e.defaultExpandedKeys:n};(null==v?void 0:v.includes("defaultExpandedKeys"))?_((()=>D(void 0))):_((()=>D(e.defaultExpandedKeys)));const F=$(e,"expandedKeys"),A=z(F,K),P=y((()=>c.value.getFlattenedNodes(A.value))),{pendingNodeKeyRef:L,handleKeydown:Y}=function({props:e,fNodesRef:n,mergedExpandedKeysRef:t,mergedSelectedKeysRef:l,handleSelect:o,handleSwitcherClick:a}){const{value:r}=l,i=f(Ce,null),d=i?i.pendingNodeKeyRef:g(r.length?r[r.length-1]:null);return{pendingNodeKeyRef:d,handleKeydown:function(l){if(!e.keyboard)return;const{value:r}=d;if(null===r){if("ArrowDown"!==l.key&&"ArrowUp"!==l.key||l.preventDefault(),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(l.key)&&null===r){const{value:e}=n;let t=0;for(;t<e.length;){if(!e[t].disabled){d.value=e[t].key;break}t+=1}}}else{const{value:e}=n;let i=e.findIndex((e=>e.key===r));if(!~i)return;if("Enter"===l.key)o(e[i]);else if("ArrowDown"===l.key)for(l.preventDefault(),i+=1;i<e.length;){if(!e[i].disabled){d.value=e[i].key;break}i+=1}else if("ArrowUp"===l.key)for(l.preventDefault(),i-=1;i>=0;){if(!e[i].disabled){d.value=e[i].key;break}i-=1}else if("ArrowLeft"===l.key){const n=e[i];if(n.isLeaf||!t.value.includes(r)){const e=n.getParent();e&&(d.value=e.key)}else a(n)}else if("ArrowRight"===l.key){const n=e[i];if(n.isLeaf)return;if(t.value.includes(r))for(i+=1;i<e.length;){if(!e[i].disabled){d.value=e[i].key;break}i+=1}else a(n)}}}}}({props:e,mergedSelectedKeysRef:N,fNodesRef:P,mergedExpandedKeysRef:A,handleSelect:Oe,handleSwitcherClick:Le});let G=null,Q=null;const X=g(new Set),W=y((()=>e.internalHighlightKeySet||s.value.highlightKeySet)),Z=z(W,X),J=g(new Set),ee=y((()=>A.value.filter((e=>!J.value.has(e)))));let ne=0;const te=g(null),le=g(null),oe=g(null),ae=g(null),re=g(0),ie=y((()=>{const{value:e}=le;return e?e.parent:null})),de=y((()=>{const{filter:n}=e;if(n)return n;const{labelField:t}=e;return(e,n)=>{if(!e.length)return!0;const l=n[t];return"string"==typeof l&&l.toLowerCase().includes(e.toLowerCase())}}));j($(e,"data"),(()=>{J.value.clear(),L.value=null,Ne()}),{deep:!1});let se=!1;const ce=()=>{se=!0,U((()=>{se=!1}))};let ue;function fe(n){return Ee(this,void 0,void 0,(function*(){const{onLoad:t}=e;if(!t)return yield Promise.resolve();const{value:l}=J;return yield new Promise((e=>{l.has(n.key)||(l.add(n.key),t(n.rawNode).then((()=>{l.delete(n.key),e()})).catch((e=>{De()})))}))}))}j($(e,"pattern"),((n,t)=>{if(e.showIrrelevantNodes)if(ue=void 0,n){const{expandedKeys:n,highlightKeySet:t}=Pe(e.data,e.pattern,e.keyField,e.childrenField,de.value);X.value=t,ce(),ke(n,ye(n),{node:null,action:"filter"})}else X.value=new Set;else if(n.length){t.length||(ue=A.value);const{expandedKeys:e}=s.value;void 0!==e&&(ce(),ke(e,ye(e),{node:null,action:"filter"}))}else void 0!==ue&&(ce(),ke(ue,ye(ue),{node:null,action:"filter"}))})),_((()=>{var e;const{value:n}=c;if(!n)return;const{getNode:t}=n;null===(e=A.value)||void 0===e||e.forEach((e=>{const n=t(e);n&&!n.shallowLoaded&&fe(n)}))}));const he=g(!1),ve=g([]);j(ee,((n,t)=>{if(!e.animated||se)return void U(be);const l=new Set(t);let o=null,a=null;for(const e of n)if(!l.has(e)){if(null!==o)return;o=e}const i=new Set(n);for(const e of t)if(!i.has(e)){if(null!==a)return;a=e}if(null===o&&null===a)return;const{virtualScroll:s}=e,u=(s?d.value.listElRef:r.value).offsetHeight,f=Math.ceil(u/30)+1;let h;if(null!==o&&(h=t),null!==a&&(h=void 0===h?n:h.filter((e=>e!==a))),he.value=!0,ve.value=c.value.getFlattenedNodes(h),null!==o){const e=ve.value.findIndex((e=>e.key===o));if(~e){const t=ve.value[e].children;if(t){const l=I(t,n);ve.value.splice(e+1,0,{__motion:!0,mode:"expand",height:s?30*l.length:void 0,nodes:s?l.slice(0,f):l})}}}if(null!==a){const e=ve.value.findIndex((e=>e.key===a));if(~e){const t=ve.value[e].children;if(!t)return;he.value=!0;const l=I(t,n);ve.value.splice(e+1,0,{__motion:!0,mode:"collapse",height:s?30*l.length:void 0,nodes:s?l.slice(0,f):l})}}}));const pe=y((()=>q(P.value))),ge=y((()=>he.value?ve.value:P.value));function be(){const{value:e}=i;e&&e.sync()}function ye(e){const{getNode:n}=h.value;return e.map((e=>{var t;return(null===(t=n(e))||void 0===t?void 0:t.rawNode)||null}))}function ke(n,t,l){const{"onUpdate:expandedKeys":o,onUpdateExpandedKeys:a}=e;K.value=n,o&&M(o,n,t,l),a&&M(a,n,t,l)}function xe(n,t,l){const{"onUpdate:checkedKeys":o,onUpdateCheckedKeys:a}=e;p.value=n,a&&M(a,n,t,l),o&&M(o,n,t,l)}function Se(n,t,l){const{"onUpdate:selectedKeys":o,onUpdateSelectedKeys:a}=e;R.value=n,a&&M(a,n,t,l),o&&M(o,n,t,l)}function Ne(){te.value=null,Ke()}function Ke(){re.value=0,le.value=null,oe.value=null,ae.value=null,De()}function De(){G&&(window.clearTimeout(G),G=null),Q=null}function Ae(n,t){if(e.disabled||Fe(n,e.disabledField))return;if(e.internalUnifySelectCheck&&!e.multiple)return void Oe(n);const l=t?"check":"uncheck",{checkedKeys:o,indeterminateKeys:a}=h.value[l](n.key,w.value,{cascade:e.cascade,checkStrategy:x.value,allowNotLoaded:e.allowCheckingNotLoaded});xe(o,ye(o),{node:n.rawNode,action:l}),function(n,t){const{"onUpdate:indeterminateKeys":l,onUpdateIndeterminateKeys:o}=e;l&&M(l,n,t),o&&M(o,n,t)}(a,ye(a))}function Le(n){e.disabled||he.value||function(n){if(e.disabled)return;const{key:t}=n,{value:l}=A,o=l.findIndex((e=>e===t));if(~o){const e=Array.from(l);e.splice(o,1),ke(e,ye(e),{node:n.rawNode,action:"collapse"})}else{const o=c.value.getNode(t);if(!o||o.isLeaf)return;let a;if(e.accordion){const e=new Set(n.siblings.map((({key:e})=>e)));a=l.filter((n=>!e.has(n))),a.push(t)}else a=l.concat(t);ke(a,ye(a),{node:n.rawNode,action:"expand"})}}(n)}function Oe(n){if(!e.disabled&&e.selectable){if(L.value=n.key,e.internalUnifySelectCheck){const{value:{checkedKeys:t,indeterminateKeys:l}}=m;e.multiple?Ae(n,!(t.includes(n.key)||l.includes(n.key))):xe([n.key],ye([n.key]),{node:n.rawNode,action:"check"})}if(e.multiple){const t=Array.from(N.value),l=t.findIndex((e=>e===n.key));~l?e.cancelable&&t.splice(l,1):~l||t.push(n.key),Se(t,ye(t),{node:n.rawNode,action:~l?"unselect":"select"})}else{N.value.includes(n.key)?e.cancelable&&Se([],[],{node:n.rawNode,action:"unselect"}):Se([n.key],ye([n.key]),{node:n.rawNode,action:"select"})}}}function Be({event:n,node:t},l=!0){var o;if(!e.draggable||e.disabled||Fe(t,e.disabledField))return;const{value:a}=te;if(!a)return;const{allowDrop:r,indent:i}=e;l&&function(n){const{onDragover:t}=e;t&&M(t,n)}({event:n,node:t.rawNode});const d=n.currentTarget,{height:s,top:c}=d.getBoundingClientRect(),u=n.clientY-c;let f;f=r({node:t.rawNode,dropPosition:"inside",phase:"drag"})?u<=8?"before":u>=s-8?"after":"inside":u<=s/2?"before":"after";const{value:h}=pe;let v,p;const g=h(t.key);if(null===g)return void Ke();let b=!1;"inside"===f?(v=t,p="inside"):"before"===f?t.isFirstChild?(v=t,p="before"):(v=P.value[g-1],p="after"):(v=t,p="after"),!v.isLeaf&&A.value.includes(v.key)&&(b=!0,"after"===p&&(v=P.value[g+1],v?p="before":(v=t,p="inside")));const y=v;if(oe.value=y,!b&&a.isLastChild&&a.key===v.key&&(p="after"),"after"===p){let e=ne-n.clientX,t=0;for(;e>=i/2&&null!==v.parent&&v.isLastChild&&t<1;)e-=i,t+=1,v=v.parent;re.value=t}else re.value=0;if(!(a.contains(v)||"inside"===p&&(null===(o=a.parent)||void 0===o?void 0:o.key)===v.key)||a.key===y.key&&a.key===v.key)if(r({node:v.rawNode,dropPosition:p,phase:"drag"})){if(a.key===v.key)De();else if(Q!==v.key)if("inside"===p){if(e.expandOnDragenter){if(function(e){if(G&&(window.clearTimeout(G),G=null),e.isLeaf)return;Q=e.key;const n=()=>{if(Q!==e.key)return;const{value:n}=oe;if(n&&n.key===e.key&&!A.value.includes(e.key)){const n=A.value.concat(e.key);ke(n,ye(n),{node:e.rawNode,action:"expand"})}G=null,Q=null};G=e.shallowLoaded?window.setTimeout((()=>{n()}),1e3):window.setTimeout((()=>{fe(e).then((()=>{n()}))}),1e3)}(v),!v.shallowLoaded&&Q!==v.key)return void Ne()}else if(!v.shallowLoaded)return void Ne()}else De();else"inside"!==p&&De();ae.value=p,le.value=v}else Ke();else Ke()}j(L,(n=>{var t,l;if(null!==n)if(e.virtualScroll)null===(t=d.value)||void 0===t||t.scrollTo({key:n});else if(e.internalScrollable){const{value:e}=i;if(null===e)return;const t=null===(l=e.contentRef)||void 0===l?void 0:l.querySelector(`[data-key="${me(n)}"]`);if(!t)return;e.scrollTo({el:t})}})),V(Re,{loadingKeysRef:J,highlightKeySetRef:Z,displayedCheckedKeysRef:w,displayedIndeterminateKeysRef:C,mergedSelectedKeysRef:N,mergedExpandedKeysRef:A,mergedThemeRef:a,mergedCheckStrategyRef:x,nodePropsRef:$(e,"nodeProps"),disabledRef:$(e,"disabled"),checkableRef:$(e,"checkable"),selectableRef:$(e,"selectable"),expandOnClickRef:$(e,"expandOnClick"),onLoadRef:$(e,"onLoad"),draggableRef:$(e,"draggable"),blockLineRef:$(e,"blockLine"),indentRef:$(e,"indent"),cascadeRef:$(e,"cascade"),checkOnClickRef:$(e,"checkOnClick"),checkboxPlacementRef:e.checkboxPlacement,droppingMouseNodeRef:oe,droppingNodeParentRef:ie,draggingNodeRef:te,droppingPositionRef:ae,droppingOffsetLevelRef:re,fNodesRef:P,pendingNodeKeyRef:L,disabledFieldRef:$(e,"disabledField"),internalScrollableRef:$(e,"internalScrollable"),internalCheckboxFocusableRef:$(e,"internalCheckboxFocusable"),internalTreeSelect:e.internalTreeSelect,renderLabelRef:$(e,"renderLabel"),renderPrefixRef:$(e,"renderPrefix"),renderSuffixRef:$(e,"renderSuffix"),renderSwitcherIconRef:$(e,"renderSwitcherIcon"),labelFieldRef:$(e,"labelField"),multipleRef:$(e,"multiple"),handleSwitcherClick:Le,handleDragEnd:function({event:n,node:t}){Ne(),!e.draggable||e.disabled||Fe(t,e.disabledField)||function(n){const{onDragend:t}=e;t&&M(t,n)}({event:n,node:t.rawNode})},handleDragEnter:function({event:n,node:t}){!e.draggable||e.disabled||Fe(t,e.disabledField)||(Be({event:n,node:t},!1),function(n){const{onDragenter:t}=e;t&&M(t,n)}({event:n,node:t.rawNode}))},handleDragLeave:function({event:n,node:t}){!e.draggable||e.disabled||Fe(t,e.disabledField)||function(n){const{onDragleave:t}=e;t&&M(t,n)}({event:n,node:t.rawNode})},handleDragStart:function({event:n,node:t}){!e.draggable||e.disabled||Fe(t,e.disabledField)||(ne=n.clientX,te.value=t,function(n){const{onDragstart:t}=e;t&&M(t,n)}({event:n,node:t.rawNode}))},handleDrop:function({event:n,node:t,dropPosition:l}){if(!e.draggable||e.disabled||Fe(t,e.disabledField))return;const{value:o}=te,{value:a}=le,{value:r}=ae;if(o&&a&&r&&e.allowDrop({node:a.rawNode,dropPosition:r,phase:"drag"})&&o.key!==a.key){if("before"===r){const e=o.getNext({includeDisabled:!0});if(e&&e.key===a.key)return void Ke()}if("after"===r){const e=o.getPrev({includeDisabled:!0});if(e&&e.key===a.key)return void Ke()}!function(n){const{onDrop:t}=e;t&&M(t,n)}({event:n,node:a.rawNode,dragNode:o.rawNode,dropPosition:l}),Ne()}},handleDragOver:Be,handleSelect:Oe,handleCheck:Ae});const _e={handleKeydown:Y,scrollTo:function(e){var n;null===(n=d.value)||void 0===n||n.scrollTo(e)},getCheckedData:()=>{if(!e.checkable)return{keys:[],options:[]};const{checkedKeys:n}=m.value;return{keys:n,options:ye(n)}},getIndeterminateData:()=>{if(!e.checkable)return{keys:[],options:[]};const{indeterminateKeys:n}=m.value;return{keys:n,options:ye(n)}}},$e=y((()=>{const{common:{cubicBezierEaseInOut:e},self:{fontSize:n,nodeBorderRadius:t,nodeColorHover:l,nodeColorPressed:o,nodeColorActive:r,arrowColor:i,loadingColor:d,nodeTextColor:s,nodeTextColorDisabled:c,dropMarkColor:u}}=a.value;return{"--n-arrow-color":i,"--n-loading-color":d,"--n-bezier":e,"--n-font-size":n,"--n-node-border-radius":t,"--n-node-color-active":r,"--n-node-color-hover":l,"--n-node-color-pressed":o,"--n-node-text-color":s,"--n-node-text-color-disabled":c,"--n-drop-mark-color":u}})),ze=t?H("tree",void 0,$e,e):void 0;return Object.assign(Object.assign({},_e),{mergedClsPrefix:n,mergedTheme:a,rtlEnabled:o,fNodes:ge,aip:he,selfElRef:r,virtualListInstRef:d,scrollbarInstRef:i,handleFocusout:function(n){var t;if(e.virtualScroll||e.internalScrollable){const{value:e}=i;if(null===(t=null==e?void 0:e.containerRef)||void 0===t?void 0:t.contains(n.relatedTarget))return;L.value=null}else{const{value:e}=r;if(null==e?void 0:e.contains(n.relatedTarget))return;L.value=null}},handleDragLeaveTree:function(e){e.target===e.currentTarget&&Ke()},handleScroll:function(){be()},getScrollContainer:function(){var e;return null===(e=d.value)||void 0===e?void 0:e.listElRef},getScrollContent:function(){var e;return null===(e=d.value)||void 0===e?void 0:e.itemsElRef},handleAfterEnter:function(){he.value=!1,e.virtualScroll&&U(be)},handleResize:function(){be()},cssVars:t?void 0:$e,themeClass:null==ze?void 0:ze.themeClass,onRender:null==ze?void 0:ze.onRender})},render(){var e;const{fNodes:n,internalRenderEmpty:t}=this;if(!n.length&&t)return t();const{mergedClsPrefix:l,blockNode:o,blockLine:a,draggable:i,disabled:d,internalFocusable:s,checkable:c,handleKeydown:u,rtlEnabled:f,handleFocusout:h}=this,v=s&&!d,p=v?"0":void 0,g=[`${l}-tree`,f&&`${l}-tree--rtl`,c&&`${l}-tree--checkable`,(a||o)&&`${l}-tree--block-node`,a&&`${l}-tree--block-line`],b=e=>"__motion"in e?r(Oe,{height:e.height,nodes:e.nodes,clsPrefix:l,mode:e.mode,onAfterEnter:this.handleAfterEnter}):r(Le,{key:e.key,tmNode:e,clsPrefix:l});if(this.virtualScroll){const{mergedTheme:e,internalScrollablePadding:n}=this,t=Y(n||"0");return r(G,{ref:"scrollbarInstRef",onDragleave:i?this.handleDragLeaveTree:void 0,container:this.getScrollContainer,content:this.getScrollContent,class:g,theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,tabindex:p,onKeydown:v?u:void 0,onFocusout:v?h:void 0},{default:()=>{var e;return null===(e=this.onRender)||void 0===e||e.call(this),r(ve,{ref:"virtualListInstRef",items:this.fNodes,itemSize:30,ignoreItemResize:this.aip,paddingTop:t.top,paddingBottom:t.bottom,class:this.themeClass,style:[this.cssVars,{paddingLeft:t.left,paddingRight:t.right}],onScroll:this.handleScroll,onResize:this.handleResize,showScrollbar:!1,itemResizable:!0},{default:({item:e})=>b(e)})}})}const{internalScrollable:y}=this;return g.push(this.themeClass),null===(e=this.onRender)||void 0===e||e.call(this),y?r(G,{class:g,tabindex:p,onKeydown:v?u:void 0,onFocusout:v?h:void 0,style:this.cssVars,contentStyle:{padding:this.internalScrollablePadding}},{default:()=>r("div",{onDragleave:i?this.handleDragLeaveTree:void 0,ref:"selfElRef"},this.fNodes.map(b))}):r("div",{class:g,tabindex:p,ref:"selfElRef",style:this.cssVars,onKeydown:v?u:void 0,onFocusout:v?h:void 0,onDragleave:i?this.handleDragLeaveTree:void 0},n.length?n.map(b):Q(this.$slots.empty,(()=>[r(he,{class:`${l}-tree__empty`,theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})])))}}),$e=a({name:"角色管理"}),ze=Object.assign($e,{setup(a){const i=g(null),d=g({}),{modalVisible:s,modalAction:c,modalTitle:u,modalLoading:f,handleAdd:h,handleDelete:v,handleEdit:p,handleSave:b,modalForm:y,modalFormRef:k}=se({name:"角色",initForm:{},doCreate:X.saveOrUpdateRole,doDelete:X.deleteRole,doUpdate:X.saveOrUpdateRole,refresh:()=>{var e;return null==(e=i.value)?void 0:e.handleSearch()}});let m=g(!0),w=g([]),C=g([]);x((()=>{var e;null==(e=i.value)||e.handleSearch(),X.getResourceOption().then((e=>w.value=e.data)),X.getMenuOption().then((e=>C.value=e.data))}));const R=[{type:"selection",width:15,fixed:"left"},{title:"角色名",key:"name",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"角色标签",key:"label",width:80,align:"center",render:e=>r(re,{type:"info"},{default:()=>e.label})},{title:"创建日期",key:"created_at",width:60,align:"center",render:e=>r("span",ie(e.created_at))},{title:"是否禁用",key:"is_disable",width:30,align:"center",fixed:"left",render:e=>r(pe,{size:"small",rubberBand:!1,value:e.is_disable,loading:!!e.publishing,checkedValue:1,uncheckedValue:0,onUpdateValue:()=>$message.info("这个功能暂时还不支持~")})},{title:"操作",key:"actions",width:100,align:"center",fixed:"right",render:e=>[r(le,{size:"tiny",quaternary:!0,type:"info",onClick:()=>{m.value=!0,X.getMenuOption().then((e=>C.value=e.data)),p(e)}},{default:()=>"菜单权限",icon:de("material-symbols:edit-outline",{size:14})}),r(le,{size:"tiny",quaternary:!0,type:"info",onClick:()=>{m.value=!1,X.getResourceOption().then((e=>w.value=e.data)),p(e)}},{default:()=>"资源权限",icon:de("ic:baseline-folder-open",{size:14})}),r(ge,{onPositiveClick:()=>v([e.id],!1),onNegativeClick:()=>{}},{trigger:()=>r(le,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:de("material-symbols:delete-outline",{size:14})}),default:()=>r("div",{},"确定删除该角色吗?")})]}];return(a,r)=>{const p=o,g=be,x=l,S=t,N=ye,K=_e,D=ke,F=n,A=e;return J(),W(A,{"show-footer":"",title:"角色管理"},{action:Z((()=>{var e;return[ee(te(le),{type:"primary",onClick:te(h)},{default:Z((()=>[ee(p,{icon:"material-symbols:add",size:18}),ne(" 新建角色 ")])),_:1},8,["onClick"]),ee(te(le),{"ml-20":"",type:"error",disabled:!(null==(e=i.value)?void 0:e.selections.length),onClick:r[0]||(r[0]=e=>{var n;return te(v)(null==(n=i.value)?void 0:n.selections)})},{default:Z((()=>[ee(p,{icon:"material-symbols:playlist-remove",size:18}),ne(" 批量删除 ")])),_:1},8,["disabled"])]})),default:Z((()=>[ee(S,{ref_key:"$table",ref:i,"query-items":d.value,"onUpdate:query-items":r[3]||(r[3]=e=>d.value=e),columns:R,"get-data":te(X).getRoles},{queryBar:Z((()=>[ee(x,{label:"角色名","label-width":50},{default:Z((()=>[ee(g,{value:d.value.keyword,"onUpdate:value":r[1]||(r[1]=e=>d.value.keyword=e),clearable:"",type:"text",placeholder:"请输入角色名",onKeydown:r[2]||(r[2]=oe((e=>{var n;return null==(n=i.value)?void 0:n.handleSearch()}),["enter"]))},null,8,["value"])])),_:1})])),_:1},8,["query-items","get-data"]),ee(F,{visible:te(s),"onUpdate:visible":r[8]||(r[8]=e=>ae(s)?s.value=e:null),title:te(u),loading:te(f),onOnSave:te(b)},{default:Z((()=>[ee(D,{ref_key:"modalFormRef",ref:k,"label-placement":"left","label-align":"left","label-width":80,model:te(y),disabled:"view"===te(c)},{default:Z((()=>[ee(N,{label:"角色名",path:"name"},{default:Z((()=>[ee(g,{value:te(y).name,"onUpdate:value":r[4]||(r[4]=e=>te(y).name=e),placeholder:"请输入角色名称"},null,8,["value"])])),_:1}),ee(N,{label:"角色标签",path:"name"},{default:Z((()=>[ee(g,{value:te(y).label,"onUpdate:value":r[5]||(r[5]=e=>te(y).label=e),placeholder:"请输入角色标签"},null,8,["value"])])),_:1}),m.value?(J(),W(N,{key:0,label:"菜单权限",path:"menu_ids"},{default:Z((()=>[ee(K,{data:C.value,"checked-keys":te(y).menu_ids,"block-line":"",checkable:"","expand-on-click":"","onUpdate:checkedKeys":r[6]||(r[6]=e=>te(y).menu_ids=e)},null,8,["data","checked-keys"])])),_:1})):(J(),W(N,{key:1,label:"资源权限",path:"resource_ids"},{default:Z((()=>[ee(K,{data:w.value,"checked-keys":te(y).resource_ids,"block-line":"",checkable:"",cascade:"",accordion:"","expand-on-click":"","onUpdate:checkedKeys":r[7]||(r[7]=e=>te(y).resource_ids=e)},null,8,["data","checked-keys"])])),_:1}))])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","onOnSave"])])),_:1})}}});export{ze as default};
