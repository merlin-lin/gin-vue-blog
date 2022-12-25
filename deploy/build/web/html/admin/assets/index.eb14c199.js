import{_ as e}from"./CommonPage.3d59e7ac.js";import{_ as t}from"./CrudModal.17742d32.js";import{_ as n}from"./CrudTable.79b8f87b.js";import{_ as l}from"./QueryBarItem.c712c54b.js";import{_ as o}from"./TheIcon.aefcbec7.js";import{Q as a,R as r,q as s,i,V as u,k as d,a6 as c,l as h,m,n as p,z as f,ac as g,a4 as b,Z as _,p as v,x as j,j as y,H as w,c as $,w as x,o as C,a as k,d as S,b as z,_ as q,F as N,t as R,bl as L,at as O,au as T,av as P,c4 as F}from"./index.70bc36b3.js";import{u as B}from"./useCRUD.5608f24d.js";import{N as E}from"./Popconfirm.c8873f31.js";import{_ as H}from"./Input.ea8d809e.js";import{_ as I,a as U}from"./FormItem.63942158.js";import"./AppPage.0bbd3948.js";import"./Space.a9c4e2ac.js";import"./get-slot.8207e825.js";import"./Checkbox.4bbd4fe8.js";import"./RadioGroup.2e199a0e.js";import"./Select.c679e813.js";import"./Forward.4950def2.js";const W={name:"Code",common:i,self:e=>{const{textColor2:t,fontSize:n,fontWeightStrong:l,textColor3:o}=e;return{textColor:t,fontSize:n,fontWeightStrong:l,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:o}}},D=u([d("code","\n font-size: var(--n-font-size);\n font-family: var(--n-font-family);\n ",[c("show-line-numbers","\n display: flex;\n "),h("line-numbers","\n user-select: none;\n padding-right: 12px;\n text-align: right;\n transition: color .3s var(--n-bezier);\n color: var(--n-line-number-text-color);\n "),c("word-wrap",[u("pre","\n white-space: pre-wrap;\n word-break: break-all;\n ")]),u("pre","\n margin: 0;\n line-height: inherit;\n font-size: inherit;\n font-family: inherit;\n "),u("[class^=hljs]","\n color: var(--n-text-color);\n transition: \n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ")]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,\n ${t} .hljs-quote {\n color: var(--n-mono-3);\n font-style: italic;\n }`,`${t} .hljs-doctag,\n ${t} .hljs-keyword,\n ${t} .hljs-formula {\n color: var(--n-hue-3);\n }`,`${t} .hljs-section,\n ${t} .hljs-name,\n ${t} .hljs-selector-tag,\n ${t} .hljs-deletion,\n ${t} .hljs-subst {\n color: var(--n-hue-5);\n }`,`${t} .hljs-literal {\n color: var(--n-hue-1);\n }`,`${t} .hljs-string,\n ${t} .hljs-regexp,\n ${t} .hljs-addition,\n ${t} .hljs-attribute,\n ${t} .hljs-meta-string {\n color: var(--n-hue-4);\n }`,`${t} .hljs-built_in,\n ${t} .hljs-class .hljs-title {\n color: var(--n-hue-6-2);\n }`,`${t} .hljs-attr,\n ${t} .hljs-variable,\n ${t} .hljs-template-variable,\n ${t} .hljs-type,\n ${t} .hljs-selector-class,\n ${t} .hljs-selector-attr,\n ${t} .hljs-selector-pseudo,\n ${t} .hljs-number {\n color: var(--n-hue-6);\n }`,`${t} .hljs-symbol,\n ${t} .hljs-bullet,\n ${t} .hljs-link,\n ${t} .hljs-meta,\n ${t} .hljs-selector-id,\n ${t} .hljs-title {\n color: var(--n-hue-2);\n }`,`${t} .hljs-emphasis {\n font-style: italic;\n }`,`${t} .hljs-strong {\n font-weight: var(--n-font-weight-strong);\n }`,`${t} .hljs-link {\n text-decoration: underline;\n }`]}]),M=m({name:"Code",props:Object.assign(Object.assign({},v.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),setup(e,{slots:t}){const{internalNoHighlight:n}=e,{mergedClsPrefixRef:l,inlineThemeDisabled:o}=p(),i=f(null),u=n?{value:void 0}:function(e,t){const n=a(r,null);return s((()=>e.hljs||(null==n?void 0:n.mergedHljsRef.value)))}(e),d=s((()=>!e.inline&&!e.wordWrap&&e.showLineNumbers)),c=()=>{if(t.default)return;const{value:n}=i;if(!n)return;const{language:l}=e,o=e.uri?window.decodeURIComponent(e.code):e.code;if(l){const t=((e,t,n)=>{const{value:l}=u;return l&&e&&l.getLanguage(e)?l.highlight(n?t.trim():t,{language:e}).value:null})(l,o,e.trim);if(null!==t){if(e.inline)n.innerHTML=t;else{const e=n.querySelector(".__code__");e&&n.removeChild(e);const l=document.createElement("pre");l.className="__code__",l.innerHTML=t,n.appendChild(l)}return}}if(e.inline)return void(n.textContent=o);const a=n.querySelector(".__code__");if(a)a.textContent=o;else{const e=document.createElement("pre");e.className="__code__",e.textContent=o,n.innerHTML="",n.appendChild(e)}};g(c),b(_(e,"language"),c),b(_(e,"code"),c),n||b(u,c);const h=v("Code","-code",D,W,e,l),m=s((()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:n},self:{textColor:l,fontSize:o,fontWeightStrong:a,lineNumberTextColor:r,"mono-3":s,"hue-1":i,"hue-2":u,"hue-3":d,"hue-4":c,"hue-5":m,"hue-5-2":p,"hue-6":f,"hue-6-2":g}}=h.value,{internalFontSize:b}=e;return{"--n-font-size":b?`${b}px`:o,"--n-font-family":n,"--n-font-weight-strong":a,"--n-bezier":t,"--n-text-color":l,"--n-mono-3":s,"--n-hue-1":i,"--n-hue-2":u,"--n-hue-3":d,"--n-hue-4":c,"--n-hue-5":m,"--n-hue-5-2":p,"--n-hue-6":f,"--n-hue-6-2":g,"--n-line-number-text-color":r}})),y=o?j("code",s((()=>`${e.internalFontSize||"a"}`)),m,e):void 0;return{mergedClsPrefix:l,codeRef:i,mergedShowLineNumbers:d,lineNumbers:s((()=>{let t=1;const n=[];let l=!1;for(const o of e.code)"\n"===o?(l=!0,n.push(t++)):l=!1;return l||n.push(t++),n.join("\n")})),cssVars:o?void 0:m,themeClass:null==y?void 0:y.themeClass,onRender:null==y?void 0:y.onRender}},render(){var e,t;const{mergedClsPrefix:n,wordWrap:l,mergedShowLineNumbers:o,onRender:a}=this;return null==a||a(),y("code",{class:[`${n}-code`,this.themeClass,l&&`${n}-code--word-wrap`,o&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},o?y("pre",{class:`${n}-code__line-numbers`},this.lineNumbers):null,null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e))}}),V=m({name:"操作日志"}),J=Object.assign(V,{setup(a){const r=s((()=>e=>{switch(e){case"GET":default:return"info";case"POST":return"success";case"PUT":return"warning";case"DELETE":return"error"}})),i=f(null),u=f({}),{modalVisible:d,modalLoading:c,handleDelete:h,modalForm:m,modalFormRef:p,handleView:b}=B({name:"日志",doDelete:w.deleteOperationLogs,refresh:()=>{var e;return null==(e=i.value)?void 0:e.handleSearch()}});g((()=>{var e;null==(e=i.value)||e.handleSearch()}));const _=[{type:"selection",width:20,fixed:"left"},{title:"系统模块",key:"opt_module",width:70,align:"center",ellipsis:{tooltip:!0}},{title:"操作类型",key:"opt_type",width:70,align:"center",ellipsis:{tooltip:!0}},{title:"请求方法",key:"request_method",width:80,align:"center",ellipsis:{tooltip:!0},render:e=>y(L,{type:r.value(e.request_method)},{default:()=>e.request_method})},{title:"操作人员",key:"nickname",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"登录IP",key:"ip_address",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"登录地址",key:"ip_source",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"发布时间",key:"created_at",align:"center",width:80,render:e=>y(q,{size:"small",type:"text",ghost:!0},{default:()=>T(e.created_at),icon:P("mdi:update",{size:18})})},{title:"操作",key:"actions",width:120,align:"center",fixed:"right",render:e=>[y(q,{size:"small",quaternary:!0,type:"info",onClick:()=>b(e)},{default:()=>"查看",icon:P("ic:outline-remove-red-eye",{size:16})}),y(E,{onPositiveClick:()=>h([e.id],!1)},{trigger:()=>y(q,{size:"small",quaternary:!0,type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:P("material-symbols:delete-outline",{size:16})}),default:()=>y("div",{},"确定删除该日志吗?")})]}];function v(e){const{copy:t}=F();t(JSON.stringify(JSON.parse(e),null,2)),$message.success("内容已复制到剪切板!")}return(a,s)=>{const f=o,g=H,b=l,j=n,y=I,T=M,P=U,F=t,B=e;return C(),$(B,{"show-footer":"",title:"操作日志"},{action:x((()=>{var e;return[k(z(q),{"ml-20":"",type:"error",disabled:!(null==(e=i.value)?void 0:e.selections.length),onClick:s[0]||(s[0]=e=>{var t;return z(h)(null==(t=i.value)?void 0:t.selections)})},{default:x((()=>[k(f,{icon:"material-symbols:playlist-remove",size:18}),S(" 批量删除 ")])),_:1},8,["disabled"])]})),default:x((()=>[k(j,{ref_key:"$table",ref:i,"query-items":u.value,"onUpdate:query-items":s[3]||(s[3]=e=>u.value=e),columns:_,"get-data":z(w).getOperationLogs},{queryBar:x((()=>[k(b,{label:"模块名","label-width":50},{default:x((()=>[k(g,{value:u.value.keyword,"onUpdate:value":s[1]||(s[1]=e=>u.value.keyword=e),clearable:"",type:"text",placeholder:"请输入模块名或描述",onKeydown:s[2]||(s[2]=N((e=>{var t;return null==(t=i.value)?void 0:t.handleSearch()}),["enter"]))},null,8,["value"])])),_:1})])),_:1},8,["query-items","get-data"]),k(F,{visible:z(d),"onUpdate:visible":s[6]||(s[6]=e=>O(d)?d.value=e:null),title:"日志详情","show-footer":!1,loading:z(c)},{default:x((()=>[k(P,{ref_key:"modalFormRef",ref:p,"label-placement":"left","label-align":"left","label-width":90,model:z(m)},{default:x((()=>[k(y,{label:"操作模块: ",path:"opt_module"},{default:x((()=>[S(R(z(m).opt_module),1)])),_:1}),k(y,{label:"请求地址: ",path:"opt_url"},{default:x((()=>[S(R(z(m).opt_url),1)])),_:1}),k(y,{label:"请求方法: ",path:"request_method"},{default:x((()=>[k(z(L),{type:r.value(z(m).request_method)},{default:x((()=>[S(R(z(m).request_method),1)])),_:1},8,["type"])])),_:1}),k(y,{label:"操作类型: ",path:"opt_type"},{default:x((()=>[S(R(z(m).opt_type),1)])),_:1}),k(y,{label:"操作方法: ",path:"opt_method"},{default:x((()=>[k(T,{code:z(m).opt_method,"code-wrap":"",language:"json"},null,8,["code"])])),_:1}),k(y,{label:"操作人员: ",path:"nickname"},{default:x((()=>[S(R(z(m).nickname),1)])),_:1}),k(y,{label:"请求参数: ",path:"request_param"},{default:x((()=>[k(T,{"p-7":"","cursor-pointer":"","word-wrap":"",code:z(m).request_param,language:"json",onClick:s[4]||(s[4]=e=>v(z(m).request_param))},null,8,["code"])])),_:1}),k(y,{label:"返回数据: ",path:"response_data"},{default:x((()=>[k(T,{"p-7":"","cursor-pointer":"",code:JSON.stringify(JSON.parse(z(m).response_data),null,2),language:"json",onClick:s[5]||(s[5]=e=>v(z(m).response_data))},null,8,["code"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","loading"])])),_:1})}}});export{J as default};
