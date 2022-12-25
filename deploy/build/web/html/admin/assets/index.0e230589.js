import{_ as e}from"./CommonPage.90710f2e.js";import{_ as a}from"./CrudModal.d3702f9d.js";import{_ as t}from"./CrudTable.92e515e8.js";import{_ as l}from"./QueryBarItem.1ddf46ee.js";import{_ as r}from"./TheIcon.508d8a14.js";import{m as i,z as o,H as d,ac as s,c as n,w as m,o as u,a as c,d as p,b as f,_ as v,F as y,at as g,j as h,bl as b,au as _,av as j}from"./index.fc8a4220.js";import{u as k}from"./useCRUD.186e8af4.js";import{N as w}from"./Popconfirm.a5efd3d5.js";import{_ as z}from"./Input.03701cc7.js";import{_ as C,a as x}from"./FormItem.c4ce805c.js";import"./AppPage.19cd2eee.js";import"./Space.9795b332.js";import"./get-slot.8207e825.js";import"./Checkbox.4ef1ea81.js";import"./RadioGroup.5e2ed13e.js";import"./Select.c8646cc6.js";import"./Forward.80f15f48.js";const S=i({name:"标签管理"}),U=Object.assign(S,{setup(i){const S=o(null),U=o({}),{modalVisible:F,modalTitle:T,modalLoading:q,handleAdd:O,handleDelete:I,handleEdit:P,handleSave:R,modalForm:D,modalFormRef:A}=k({name:"标签",initForm:{},doCreate:d.saveOrUpdateTag,doDelete:d.deleteTag,doUpdate:d.saveOrUpdateTag,refresh:()=>{var e;return null==(e=S.value)?void 0:e.handleSearch()}});s((()=>{var e;null==(e=S.value)||e.handleSearch()}));const B=[{type:"selection",width:15,fixed:"left"},{title:"标签名",key:"name",width:100,align:"center",render:e=>h(b,{type:"info"},{default:()=>e.name})},{title:"文章量",key:"article_count",width:30,align:"center"},{title:"创建日期",key:"created_at",width:80,align:"center",render:e=>h(v,{size:"small",type:"text",ghost:!0},{default:()=>_(e.created_at),icon:j("mdi:clock-time-three-outline",{size:17})})},{title:"更新日期",key:"updated_at",width:80,align:"center",render:e=>h(v,{size:"small",type:"text",ghost:!0},{default:()=>_(e.updated_at),icon:j("mdi:update",{size:18})})},{title:"操作",key:"actions",width:100,align:"center",fixed:"right",render:e=>[h(v,{size:"small",type:"primary",onClick:()=>P(e)},{default:()=>"编辑",icon:j("material-symbols:edit-outline",{size:14})}),h(w,{onPositiveClick:()=>I([e.id],!1)},{trigger:()=>h(v,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:j("material-symbols:delete-outline",{size:14})}),default:()=>h("div",{},"确定删除该标签吗?")})]}];return(i,o)=>{const s=r,h=z,b=l,_=t,j=C,k=x,w=a,P=e;return u(),n(P,{"show-footer":"",title:"标签管理"},{action:m((()=>{var e;return[c(f(v),{type:"primary",onClick:f(O)},{default:m((()=>[c(s,{icon:"material-symbols:add",size:18}),p(" 新建标签 ")])),_:1},8,["onClick"]),c(f(v),{"ml-20":"",type:"error",disabled:!(null==(e=S.value)?void 0:e.selections.length),onClick:o[0]||(o[0]=e=>{var a;return f(I)(null==(a=S.value)?void 0:a.selections)})},{default:m((()=>[c(s,{icon:"material-symbols:playlist-remove",size:18}),p(" 批量删除 ")])),_:1},8,["disabled"])]})),default:m((()=>[c(_,{ref_key:"$table",ref:S,"query-items":U.value,"onUpdate:query-items":o[3]||(o[3]=e=>U.value=e),columns:B,"get-data":f(d).getTags},{queryBar:m((()=>[c(b,{label:"标签名","label-width":50},{default:m((()=>[c(h,{value:U.value.keyword,"onUpdate:value":o[1]||(o[1]=e=>U.value.keyword=e),clearable:"",type:"text",placeholder:"请输入标签名",onKeydown:o[2]||(o[2]=y((e=>{var a;return null==(a=S.value)?void 0:a.handleSearch()}),["enter"]))},null,8,["value"])])),_:1})])),_:1},8,["query-items","get-data"]),c(w,{visible:f(F),"onUpdate:visible":o[5]||(o[5]=e=>g(F)?F.value=e:null),title:f(T),loading:f(q),onOnSave:f(R)},{default:m((()=>[c(k,{ref_key:"modalFormRef",ref:A,"label-placement":"left","label-align":"left","label-width":80,model:f(D)},{default:m((()=>[c(j,{label:"文章标签",path:"name",rule:{required:!0,message:"请输入标签名称",trigger:["input","blur"]}},{default:m((()=>[c(h,{value:f(D).name,"onUpdate:value":o[4]||(o[4]=e=>f(D).name=e),placeholder:"请输入标签名称",clearable:""},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title","loading","onOnSave"])])),_:1})}}});export{U as default};
