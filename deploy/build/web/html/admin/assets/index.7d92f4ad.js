var e=(e,a,l)=>new Promise(((s,t)=>{var r=e=>{try{n(l.next(e))}catch(a){t(a)}},o=e=>{try{n(l.throw(e))}catch(a){t(a)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,o);n((l=l.apply(e,a)).next())}));import{_ as a}from"./CommonPage.3d59e7ac.js";import{_ as l}from"./UploadOne.cab09805.js";import{y as s,z as t,c as r,w as o,o as n,a as u,e as d,d as i,H as p,_ as v}from"./index.70bc36b3.js";import{_ as w}from"./Input.ea8d809e.js";import{_ as m,a as c}from"./FormItem.63942158.js";import{_ as f,a as _}from"./Tabs.e1e870eb.js";import"./AppPage.0bbd3948.js";import"./Upload.ae0f55c8.js";import"./Add.0acf478a.js";import"./Image.71f0b28b.js";import"./utils.3e78d745.js";const b={flex:"","items-center":"","m-30":""},h={"w-200":"","mr-30":""},g={__name:"index",setup(g){const y=s(),j=t(null),k=t({avatar:y.avatar,nickname:y.nickname,intro:y.intro,website:y.website});function U(){return e(this,null,(function*(){var a;null==(a=j.value)||a.validate((a=>e(this,null,(function*(){a||(yield p.updateCurrent(k.value),$message.success("更新成功!"),y.setUserInfo(k.value))}))))}))}const x={nickname:[{required:!0,message:"请输入昵称",trigger:["input","blur","change"]}]},C=t(null),P=t({old_password:"",new_password:"",confirm_password:""});function q(){return e(this,null,(function*(){var a;null==(a=C.value)||a.validate((a=>e(this,null,(function*(){a||(yield p.updateCurrentPassword(P.value),$message.success("修改成功!"))}))))}))}const I={old_password:[{required:!0,message:"请输入旧密码",trigger:["input","blur","change"]}],new_password:[{required:!0,message:"请输入新密码",trigger:["input","blur","change"]}],confirm_password:[{required:!0,message:"请再次输入密码",trigger:["input","blur"]},{validator:function(e,a){return!!P.value.new_password&&P.value.new_password.startsWith(a)&&P.value.new_password.length>=a.length},message:"两次密码输入不一致",trigger:"input"},{validator:function(e,a){return a===P.value.new_password},message:"两次密码输入不一致",trigger:["blur","password-input"]}]};return(e,s)=>{const t=w,p=m,g=v,y=c,F=f,A=_,R=a;return n(),r(R,{"show-header":!1},{default:o((()=>[u(A,{type:"line",animated:""},{default:o((()=>[u(F,{name:"website",tab:"修改信息"},{default:o((()=>[d("div",b,[d("div",h,[u(l,{preview:k.value.avatar,"onUpdate:preview":s[0]||(s[0]=e=>k.value.avatar=e),width:130},null,8,["preview"])]),u(y,{ref_key:"infoFormRef",ref:j,"label-placement":"left","label-align":"left","label-width":"100",model:k.value,rules:x,"w-400":""},{default:o((()=>[u(p,{label:"昵称",path:"nickname"},{default:o((()=>[u(t,{value:k.value.nickname,"onUpdate:value":s[1]||(s[1]=e=>k.value.nickname=e),type:"text",placeholder:"请填写昵称"},null,8,["value"])])),_:1}),u(p,{label:"个人简介",path:"intro"},{default:o((()=>[u(t,{value:k.value.intro,"onUpdate:value":s[2]||(s[2]=e=>k.value.intro=e),type:"text",placeholder:"请填写个人简介"},null,8,["value"])])),_:1}),u(p,{label:"个人网站",path:"website"},{default:o((()=>[u(t,{value:k.value.website,"onUpdate:value":s[3]||(s[3]=e=>k.value.website=e),type:"text",placeholder:"请填写个人网站"},null,8,["value"])])),_:1}),u(g,{type:"primary",onClick:U},{default:o((()=>[i(" 修改 ")])),_:1})])),_:1},8,["model"])])])),_:1}),u(F,{name:"contact",tab:"修改密码"},{default:o((()=>[u(y,{ref_key:"passwordFormRef",ref:C,"label-placement":"left","label-align":"left",model:P.value,"label-width":"100",rules:I,"w-400":"","m-30":""},{default:o((()=>[u(p,{label:"旧密码",path:"old_password"},{default:o((()=>[u(t,{value:P.value.old_password,"onUpdate:value":s[4]||(s[4]=e=>P.value.old_password=e),type:"password","show-password-on":"mousedown",placeholder:"请输入旧密码"},null,8,["value"])])),_:1}),u(p,{label:"新密码",path:"new_password"},{default:o((()=>[u(t,{value:P.value.new_password,"onUpdate:value":s[5]||(s[5]=e=>P.value.new_password=e),disabled:!P.value.old_password,type:"password","show-password-on":"mousedown",placeholder:"请输入新密码"},null,8,["value","disabled"])])),_:1}),u(p,{label:"确认密码",path:"confirm_password"},{default:o((()=>[u(t,{value:P.value.confirm_password,"onUpdate:value":s[6]||(s[6]=e=>P.value.confirm_password=e),disabled:!P.value.new_password,type:"password","show-password-on":"mousedown",placeholder:"请再次输入新密码"},null,8,["value","disabled"])])),_:1}),u(g,{type:"primary",onClick:q},{default:o((()=>[i(" 修改 ")])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})}}};export{g as default};
