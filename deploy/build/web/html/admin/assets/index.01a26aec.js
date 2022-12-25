import{_ as e}from"./CommonPage.90710f2e.js";import{_ as a}from"./CrudModal.d3702f9d.js";import{_ as t}from"./CrudTable.92e515e8.js";import{_ as l}from"./QueryBarItem.1ddf46ee.js";import{_ as r}from"./TheIcon.508d8a14.js";import{m as i,z as o,ac as d,H as s,c as n,w as m,o as u,a as c,d as p,b as f,_ as v,F as y,at as g,j as h,au as b,av as _}from"./index.fc8a4220.js";import{u as j}from"./useCRUD.186e8af4.js";import{N as k}from"./Popconfirm.a5efd3d5.js";import{_ as C}from"./Input.03701cc7.js";import{_ as w,a as z}from"./FormItem.c4ce805c.js";import"./AppPage.19cd2eee.js";import"./Space.9795b332.js";import"./get-slot.8207e825.js";import"./Checkbox.4ef1ea81.js";import"./RadioGroup.5e2ed13e.js";import"./Select.c8646cc6.js";import"./Forward.80f15f48.js";const x=i({name:"分类管理"}),S=Object.assign(x,{setup(i){const x=o(null),S=o({});d((()=>{var e;null==(e=x.value)||e.handleSearch()}));const{modalVisible:U,modalTitle:F,modalLoading:q,handleAdd:O,handleDelete:I,handleEdit:P,handleSave:R,modalForm:D,modalFormRef:T}=j({name:"分类",initForm:{},doCreate:s.saveOrUpdateCategory,doDelete:s.deleteCategory,doUpdate:s.saveOrUpdateCategory,refresh:()=>{var e;return null==(e=x.value)?void 0:e.handleSearch()}}),A=[{type:"selection",width:15,fixed:"left"},{title:"分类名",key:"name",width:100,align:"center",ellipsis:{tooltip:!0}},{title:"文章量",key:"article_count",width:30,align:"center"},{title:"创建日期",key:"created_at",width:80,align:"center",render:e=>h(v,{size:"small",type:"text",ghost:!0},{default:()=>b(e.created_at),icon:_("mdi:clock-time-three-outline",{size:17})})},{title:"更新日期",key:"updated_at",width:80,align:"center",render:e=>h(v,{size:"small",type:"text",ghost:!0},{default:()=>b(e.updated_at),icon:_("mdi:update",{size:18})})},{title:"操作",key:"actions",width:100,align:"center",fixed:"right",render:e=>[h(v,{size:"small",type:"primary",onClick:()=>P(e)},{default:()=>"编辑",icon:_("material-symbols:edit-outline",{size:14})}),h(k,{onPositiveClick:()=>I([e.id],!1)},{trigger:()=>h(v,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:_("material-symbols:delete-outline",{size:14})}),default:()=>h("div",{},"确定删除该分类吗?")})]}];return(i,o)=>{const d=r,h=C,b=l,_=t,j=w,k=z,P=a,B=e;return u(),n(B,{"show-footer":"",title:"分类管理"},{action:m((()=>{var e;return[c(f(v),{type:"primary",onClick:f(O)},{default:m((()=>[c(d,{icon:"material-symbols:add",size:18}),p(" 新建分类 ")])),_:1},8,["onClick"]),c(f(v),{"ml-20":"",type:"error",disabled:!(null==(e=x.value)?void 0:e.selections.length),onClick:o[0]||(o[0]=e=>{var a;return f(I)(null==(a=x.value)?void 0:a.selections)})},{default:m((()=>[c(d,{icon:"material-symbols:playlist-remove",size:18}),p(" 批量删除 ")])),_:1},8,["disabled"])]})),default:m((()=>[c(_,{ref_key:"$table",ref:x,"query-items":S.value,"onUpdate:query-items":o[3]||(o[3]=e=>S.value=e),columns:A,"get-data":f(s).getCategorys},{queryBar:m((()=>[c(b,{label:"分类名","label-width":50},{default:m((()=>[c(h,{value:S.value.keyword,"onUpdate:value":o[1]||(o[1]=e=>S.value.keyword=e),clearable:"",type:"text",placeholder:"请输入分类名",onKeydown:o[2]||(o[2]=y((e=>{var a;return null==(a=x.value)?void 0:a.handleSearch()}),["enter"]))},null,8,["value"])])),_:1})])),_:1},8,["query-items","get-data"]),c(P,{visible:f(U),"onUpdate:visible":o[5]||(o[5]=e=>g(U)?U.value=e:null),title:f(F),loading:f(q),onOnSave:f(R)},{default:m((()=>[c(k,{ref_key:"modalFormRef",ref:T,"label-placement":"left","label-align":"left","label-width":80,model:f(D)},{default:m((()=>[c(j,{label:"文章分类",path:"name",rule:{required:!0,message:"请输入分类名称",trigger:["input","blur"]}},{default:m((()=>[c(h,{value:f(D).name,"onUpdate:value":o[4]||(o[4]=e=>f(D).name=e),placeholder:"请输入分类名称",clearable:""},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title","loading","onOnSave"])])),_:1})}}});export{S as default};
