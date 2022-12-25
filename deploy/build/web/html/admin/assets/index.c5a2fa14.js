import{_ as e}from"./CommonPage.42c5f357.js";import{_ as a}from"./CrudModal.73287289.js";import{_ as l}from"./CrudTable.8a53b5ee.js";import{_ as t}from"./QueryBarItem.6782c918.js";import{_ as r}from"./TheIcon.b33e2977.js";import{m as i,z as o,H as s,ac as d,c as n,w as u,o as m,a as p,d as c,b as f,_ as v,F as b,at as g,j as h,c4 as y,au as k,av as _}from"./index.8ba31f54.js";import{u as j}from"./useCRUD.abf0b145.js";import{N as w}from"./Image.8f5bdb4c.js";import{N as C}from"./Popconfirm.caadfb99.js";import{_ as U}from"./Input.cf9d5282.js";import{_ as x,a as z}from"./FormItem.250456a2.js";import"./AppPage.4308d760.js";import"./Space.67b6b1d7.js";import"./get-slot.8207e825.js";import"./Checkbox.b843ab15.js";import"./RadioGroup.100f224c.js";import"./Select.ef01f3df.js";import"./Forward.0d5f42cb.js";import"./utils.3e78d745.js";const q=i({name:"友链管理"}),S=Object.assign(q,{setup(i){const q=o(null),S=o({}),{modalVisible:F,modalTitle:I,modalLoading:L,handleAdd:O,handleDelete:P,handleEdit:R,handleSave:D,modalForm:T,modalFormRef:A}=j({name:"友链",initForm:{},doCreate:s.saveOrUpdateLink,doDelete:s.deleteLinks,doUpdate:s.saveOrUpdateLink,refresh:()=>{var e;return null==(e=q.value)?void 0:e.handleSearch()}});d((()=>{var e;null==(e=q.value)||e.handleSearch()}));const B=[{type:"selection",width:15,fixed:"left"},{title:"头像",key:"avatar",width:50,align:"center",render:e=>h(w,{height:50,imgProps:{style:{"border-radius":"3px"}},src:e.avatar,"fallback-src":"http://dummyimage.com/400x400","show-toolbar-tooltip":!0})},{title:"链接名",key:"name",width:100,align:"center",ellipsis:{tooltip:!0}},{title:"链接地址",key:"address",width:120,align:"center",ellipsis:{tooltip:!0},render:e=>h("a",{style:"cursor: pointer",onClick:()=>{const{copy:a}=y();a(e.address),$message.info("复制到剪切板!")}},e.address)},{title:"链接介绍",key:"intro",width:120,align:"center",ellipsis:{tooltip:!0}},{title:"创建日期",key:"created_at",width:80,align:"center",render:e=>h(v,{size:"small",type:"text",ghost:!0},{default:()=>k(e.created_at),icon:_("mdi:clock-time-three-outline",{size:17})})},{title:"操作",key:"actions",width:100,align:"center",fixed:"right",render:e=>[h(v,{size:"small",type:"primary",onClick:()=>R(e)},{default:()=>"编辑",icon:_("material-symbols:edit-outline",{size:14})}),h(C,{onPositiveClick:()=>P([e.id],!1)},{trigger:()=>h(v,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:_("material-symbols:delete-outline",{size:14})}),default:()=>h("div",{},"确定删除该分类吗?")})]}];return(i,o)=>{const d=r,h=U,y=t,k=l,_=x,j=z,w=a,C=e;return m(),n(C,{"show-footer":"",title:"友链管理"},{action:u((()=>{var e;return[p(f(v),{type:"primary",onClick:f(O)},{default:u((()=>[p(d,{icon:"material-symbols:add",size:18}),c(" 新建友链 ")])),_:1},8,["onClick"]),p(f(v),{"ml-20":"",type:"error",disabled:!(null==(e=q.value)?void 0:e.selections.length),onClick:o[0]||(o[0]=e=>{var a;return f(P)(null==(a=q.value)?void 0:a.selections)})},{default:u((()=>[p(d,{icon:"material-symbols:playlist-remove",size:18}),c(" 批量删除 ")])),_:1},8,["disabled"])]})),default:u((()=>[p(k,{ref_key:"$table",ref:q,"query-items":S.value,"onUpdate:query-items":o[3]||(o[3]=e=>S.value=e),columns:B,"get-data":f(s).getLinks},{queryBar:u((()=>[p(y,{label:"友链名","label-width":50},{default:u((()=>[p(h,{value:S.value.keyword,"onUpdate:value":o[1]||(o[1]=e=>S.value.keyword=e),clearable:"",type:"text",placeholder:"请输入友链名",onKeydown:o[2]||(o[2]=b((e=>{var a;return null==(a=q.value)?void 0:a.handleSearch()}),["enter"]))},null,8,["value"])])),_:1})])),_:1},8,["query-items","get-data"]),p(w,{visible:f(F),"onUpdate:visible":o[8]||(o[8]=e=>g(F)?F.value=e:null),title:f(I),loading:f(L),onOnSave:f(D)},{default:u((()=>[p(j,{ref_key:"modalFormRef",ref:A,"label-placement":"left","label-align":"left","label-width":80,model:f(T)},{default:u((()=>[p(_,{label:"链接名",path:"name",rule:{required:!0,message:"请输入友链名称",trigger:["input","blur"]}},{default:u((()=>[p(h,{value:f(T).name,"onUpdate:value":o[4]||(o[4]=e=>f(T).name=e),placeholder:"请输入友链名称"},null,8,["value"])])),_:1}),p(_,{label:"链接头像",path:"avatar",rule:{required:!0,message:"请输入友链头像",trigger:["input","blur"]}},{default:u((()=>[p(h,{value:f(T).avatar,"onUpdate:value":o[5]||(o[5]=e=>f(T).avatar=e),placeholder:"请输入链接头像"},null,8,["value"])])),_:1}),p(_,{label:"链接地址",path:"address",rule:{required:!0,message:"请输入友链地址",trigger:["input","blur"]}},{default:u((()=>[p(h,{value:f(T).address,"onUpdate:value":o[6]||(o[6]=e=>f(T).address=e),placeholder:"请输入链接地址"},null,8,["value"])])),_:1}),p(_,{label:"链接介绍",path:"intro",rule:{required:!0,message:"请输入友链介绍",trigger:["input","blur"]}},{default:u((()=>[p(h,{value:f(T).intro,"onUpdate:value":o[7]||(o[7]=e=>f(T).intro=e),placeholder:"请输入友链地址"},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title","loading","onOnSave"])])),_:1})}}});export{S as default};
