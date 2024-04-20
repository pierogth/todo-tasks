import{u as i,W as n,a as e,j as s,b as m}from"./app.a7057b18.js";import{c}from"./index.893e1e4b.js";import{A as d}from"./AuthenticationCard.7f98ebea.js";import{T as u,I as p}from"./TextInput.1870492f.js";import{I as l}from"./InputLabel.16b3aa92.js";import{P as f}from"./PrimaryButton.aba9d04b.js";import"./AuthenticationCardLogo.b48cd7ac.js";function N(){const o=i(),r=n({password:""});function t(a){a.preventDefault(),r.post(o("password.confirm"),{onFinish:()=>r.reset()})}return e(d,{children:[s(m,{title:"Secure Area"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:t,children:[e("div",{children:[s(l,{htmlFor:"password",children:"Password"}),s(u,{id:"password",type:"password",className:"mt-1 block w-full",value:r.data.password,onChange:a=>r.setData("password",a.currentTarget.value),required:!0,autoComplete:"current-password",autoFocus:!0}),s(p,{className:"mt-2",message:r.errors.password})]}),s("div",{className:"flex justify-end mt-4",children:s(f,{className:c("ml-4",{"opacity-25":r.processing}),disabled:r.processing,children:"Confirm"})})]})]})}export{N as default};