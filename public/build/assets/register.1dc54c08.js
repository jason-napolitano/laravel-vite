import{e as d,G as u,j as c,k as e,H as n,I as l,l as t,v as i,x as f,z as w,h as p,p as _}from"./main.b730449a.js";import{B as v,l as y}from"./auth.ebd5ab33.js";/* empty css                        */import"./_plugin-vue_export-helper.c19f56d4.js";const x={class:"my-2"},g={class:"text-pomegranate"},h={class:"my-2"},V={class:"text-pomegranate"},B={class:"my-2"},U={class:"text-pomegranate"},k={class:"my-2"},b={class:"text-pomegranate"},D={class:"my-2"},E={class:"text-pomegranate"},N={class:"my-2"},F=d({name:"register",props:{errors:null},setup(a){const s=u({username:"",image:"",name:"",email:"",password:"",password_confirmation:""});return(m,o)=>(p(),c("form",{onSubmit:o[5]||(o[5]=w(r=>t(s).post(m.route("register.store")),["prevent"]))},[e("div",x,[n(e("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>t(s).name=r),placeholder:"Full Name",type:"text",class:"w-100 form-control"},null,512),[[l,t(s).name]]),e("div",g,i(a.errors.name),1)]),e("div",h,[n(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>t(s).username=r),placeholder:"Username",type:"text",class:"w-100 form-control"},null,512),[[l,t(s).username]]),e("div",V,i(a.errors.username),1)]),e("div",B,[n(e("input",{"onUpdate:modelValue":o[2]||(o[2]=r=>t(s).email=r),placeholder:"Email Address",type:"text",class:"w-100 form-control"},null,512),[[l,t(s).email]]),e("div",U,i(a.errors.email),1)]),e("div",k,[n(e("input",{"onUpdate:modelValue":o[3]||(o[3]=r=>t(s).password=r),placeholder:"Enter Password",type:"password",class:"w-100 form-control"},null,512),[[l,t(s).password]]),e("div",b,i(a.errors.password),1)]),e("div",D,[n(e("input",{"onUpdate:modelValue":o[4]||(o[4]=r=>t(s).password_confirmation=r),placeholder:"Repeat Password",type:"password",class:"w-100 form-control"},null,512),[[l,t(s).password_confirmation]]),e("div",E,i(a.errors.password_confirmation),1)]),e("div",N,[f(v,{classes:"btn btn-primary w-100 my-1","form-data":t(s)},null,8,["form-data"])])],32))}}),M={layout:y},z=d({...M,name:"register",props:{errors:null},setup(a){return(s,m)=>(p(),_(F,{errors:a.errors},null,8,["errors"]))}});export{z as default};
