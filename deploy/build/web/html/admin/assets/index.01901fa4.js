var e=(e,t,a)=>new Promise(((l,i)=>{var r=e=>{try{n(a.next(e))}catch(t){i(t)}},s=e=>{try{n(a.throw(e))}catch(t){i(t)}},n=e=>e.done?l(e.value):Promise.resolve(e.value).then(r,s);n((a=a.apply(e,t)).next())}));import{_ as t}from"./CommonPage.90710f2e.js";import{_ as a}from"./CrudTable.92e515e8.js";import{_ as l}from"./QueryBarItem.1ddf46ee.js";import{_ as i}from"./TheIcon.508d8a14.js";import{m as r,bw as s,z as n,ac as o,H as d,bd as u,c,w as p,D as m,u as v,o as h,a as f,d as y,b,_ as g,e as _,F as w,j as k,bx as j,bl as x,au as S,av as z}from"./index.fc8a4220.js";import{u as C}from"./useCRUD.186e8af4.js";import{a as U,b as $}from"./data.67ec6cdf.js";import{N as A}from"./Image.7ac1ed0b.js";import{N as D}from"./Switch.c2a2609a.js";import{N as P}from"./Popconfirm.a5efd3d5.js";import{_ as T}from"./Upload.081b9328.js";import{_ as B,a as O}from"./Tabs.758517b8.js";import{_ as q}from"./Input.03701cc7.js";import{_ as N}from"./Select.c8646cc6.js";import"./AppPage.19cd2eee.js";import"./Space.9795b332.js";import"./get-slot.8207e825.js";import"./Checkbox.4ef1ea81.js";import"./RadioGroup.5e2ed13e.js";import"./Forward.80f15f48.js";import"./utils.3e78d745.js";import"./Add.1dcf8422.js";function R(e,t){const a=document.createElement("a");a.download=t,a.style.display="none";const l=new Blob([e]);a.href=URL.createObjectURL(l),document.body.appendChild(a),a.click(),document.body.removeChild(a)}const I={"inline-block":""},F=r({name:"文章列表"}),V=Object.assign(F,{setup(r){const[F,V]=[m(),v()],J=s();let L=n([]),E=n([]);const G=n(null),H=n({}),K=n({}),{handleDelete:Q}=C({name:"文章",doDelete:function(e){0===K.value.is_delete?d.softDeleteArticle({ids:JSON.parse(e),is_delete:1}):d.deleteArticle(e)},refresh:()=>{var e;return null==(e=G.value)?void 0:e.handleSearch()}});o((()=>{d.getCategoryOption().then((e=>L.value=e.data)),d.getTagOption().then((e=>E.value=e.data)),M("all")})),u((()=>{var e;const{needRefresh:t}=F.query;t&&(null==(e=G.value)||e.handleSearch())}));const W=[{type:"selection",width:20,fixed:"left"},{title:"文章封面",key:"img",width:55,align:"center",render:e=>k(A,{imgProps:{style:{"border-radius":"2px",height:"100%",width:"100%"}},src:j(e.img),fallbackSrc:"http://dummyimage.com/400x400",showToolbarTooltip:!0})},{title:"文章标题",key:"title",width:120,align:"center",ellipsis:{tooltip:!0}},{title:"分类",key:"category.name",width:60,align:"center",ellipsis:{tooltip:!0},render:e=>k("div",e.category.name||"无")},{title:"标签",key:"tags",width:100,align:"center",render(e){var t;const a=null!=(t=e.tags)?t:[],l=[];for(let i=0;i<a.length;i++)l.push(k(x,{type:"info",style:{margin:"2px 3px"}},{default:()=>a[i].name}));return k("div",l.length?l:"无")}},{title:"浏览量",key:"view_count",width:40,align:"center",ellipsis:{tooltip:!0}},{title:"点赞量",key:"like_count",width:40,align:"center",ellipsis:{tooltip:!0}},{title:"类型",key:"type",width:50,align:"center",render:e=>k(x,{type:$[e.type].tag},{default:()=>$[e.type].name})},{title:"发布时间",key:"updateDate",align:"center",width:80,render:e=>k(g,{size:"small",type:"text",ghost:!0},{default:()=>S(e.updated_at),icon:z("mdi:update",{size:18})})},{title:"置顶",key:"is_top",width:50,align:"center",fixed:"left",render:t=>k(D,{size:"small",rubberBand:!1,value:t.is_top,loading:!!t.publishing,checkedValue:1,uncheckedValue:0,onUpdateValue:()=>function(t){return e(this,null,(function*(){var e;t.id&&(t.publishing=!0,t.is_top=0===t.is_top?1:0,yield d.updateArticleTop(t),t.publishing=!1,null==$message||$message.success(t.is_top?"已成功置顶":"已取消置顶"),null==(e=G.value)||e.handleSearch())}))}(t)})},{title:"操作",key:"actions",width:120,align:"center",fixed:"right",render(t){return[t.is_delete?k(g,{size:"small",type:"success",secondary:!0,onClick:()=>e(this,null,(function*(){var e;yield d.softDeleteArticle({ids:[t.id],is_delete:0}),yield null==(e=G.value)?void 0:e.handleSearch()}))},{default:()=>"恢复",icon:z("majesticons:eye-line",{size:14})}):k(g,{size:"small",type:"primary",secondary:!0,onClick:()=>V.push(`/article/write/${t.id}`)},{default:()=>"查看",icon:z("majesticons:eye-line",{size:14})}),k(P,{onPositiveClick:()=>Q([t.id],!1)},{trigger:()=>k(g,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:z("material-symbols:delete-outline",{size:14})}),default:()=>k("div",{},"确定删除该文章吗?")})]}}];function M(e){var t;switch(e){case"all":K.value.is_delete=0,K.value.status=null;break;case"public":K.value.is_delete=0,K.value.status=1;break;case"secret":K.value.is_delete=0,K.value.status=2;break;case"draft":K.value.is_delete=0,K.value.status=3;break;case"delete":K.value.is_delete=1,K.value.status=null}null==(t=G.value)||t.handleSearch()}function X(e){return!!e.file.name.endsWith(".md")||($message.error("只能上传 .md 格式的文件，请重新上传"),!1)}function Y({event:e}){var t;const a=(null==e?void 0:e.target).response;0===JSON.parse(a).code?(null==(t=G.value)||t.handleSearch(),$message.success("文章导入成功！")):$message.error("文章导入失败！")}return(r,s)=>{const n=i,o=T,u=B,m=O,v=q,k=l,j=N,x=a,S=t;return h(),c(S,{"show-footer":"",title:"文章列表"},{action:p((()=>{var t,a;return[f(b(g),{type:"primary",onClick:s[0]||(s[0]=e=>b(V).replace("/article/write"))},{default:p((()=>[f(n,{icon:"material-symbols:add",size:18,"mr-5":""}),y(" 新建文章 ")])),_:1}),f(b(g),{"ml-20":"",type:"error",disabled:!(null==(t=G.value)?void 0:t.selections.length),onClick:s[1]||(s[1]=e=>{var t;return b(Q)(null==(t=G.value)?void 0:t.selections)})},{default:p((()=>[f(n,{icon:"material-symbols:recycling-rounded",size:18,"mr-5":""}),y(" 批量删除 ")])),_:1},8,["disabled"]),f(b(g),{"ml-20":"",type:"info",disabled:!(null==(a=G.value)?void 0:a.selections.length),onClick:s[2]||(s[2]=t=>{var a;return function(t){return e(this,null,(function*(){var e;const a=null==(e=G.value)?void 0:e.tableData.filter((e=>t.includes(e.id)));for(const t of a)R(t.content,`${t.title}.md`)}))}(null==(a=G.value)?void 0:a.selections)})},{default:p((()=>[f(n,{icon:"mdi:export",size:18,"mr-5":""}),y(" 批量导出 ")])),_:1},8,["disabled"]),_("div",I,[f(o,{action:"/api/article/import",headers:{Authorization:`Bearer ${b(J)}`},"show-file-list":!1,multiple:"",onBeforeUpload:X,onFinish:Y},{default:p((()=>[f(b(g),{"ml-20":"",type:"success"},{default:p((()=>[f(n,{icon:"mdi:import",size:18,"mr-5":""}),y(" 批量导入 ")])),_:1})])),_:1},8,["headers"])])]})),default:p((()=>[f(m,{type:"line",animated:"","onUpdate:value":M},{prefix:p((()=>[y(" 状态 ")])),default:p((()=>[f(u,{name:"all",tab:"全部"}),f(u,{name:"public",tab:"公开"}),f(u,{name:"secret",tab:"私密"}),f(u,{name:"draft",tab:"草稿箱"}),f(u,{name:"delete",tab:"回收站"})])),_:1}),f(x,{ref_key:"$table",ref:G,"query-items":H.value,"onUpdate:query-items":s[11]||(s[11]=e=>H.value=e),"extra-params":K.value,columns:W,"get-data":b(d).getArticles},{queryBar:p((()=>[f(k,{label:"标题","label-width":40,"content-width":180},{default:p((()=>[f(v,{value:H.value.title,"onUpdate:value":s[3]||(s[3]=e=>H.value.title=e),clearable:"",type:"text",placeholder:"请输入标题",onKeydown:s[4]||(s[4]=w((e=>{var t;return null==(t=G.value)?void 0:t.handleSearch()}),["enter"]))},null,8,["value"])])),_:1}),f(k,{label:"类型","label-width":40,"content-width":160},{default:p((()=>[f(j,{value:H.value.type,"onUpdate:value":[s[5]||(s[5]=e=>H.value.type=e),s[6]||(s[6]=e=>{var t;return null==(t=G.value)?void 0:t.handleSearch()})],clearable:"",placeholder:"请选择文章类型",options:b(U)},null,8,["value","options"])])),_:1}),f(k,{label:"分类","label-width":40,"content-width":160},{default:p((()=>[f(j,{value:H.value.category_id,"onUpdate:value":[s[7]||(s[7]=e=>H.value.category_id=e),s[8]||(s[8]=e=>{var t;return null==(t=G.value)?void 0:t.handleSearch()})],clearable:"",filterable:"",placeholder:"请选择文章分类",options:L.value},null,8,["value","options"])])),_:1}),f(k,{label:"标签","label-width":40,"content-width":160},{default:p((()=>[f(j,{value:H.value.tag_id,"onUpdate:value":[s[9]||(s[9]=e=>H.value.tag_id=e),s[10]||(s[10]=e=>{var t;return null==(t=G.value)?void 0:t.handleSearch()})],clearable:"",filterable:"",placeholder:"请选择文章标签",options:E.value},null,8,["value","options"])])),_:1})])),_:1},8,["query-items","extra-params","get-data"])])),_:1})}}});export{V as default};
