import{W as F,u as C,r as l,a as o,F as R,j as e,d as _,O as j}from"./app.a7057b18.js";import{c as A}from"./index.893e1e4b.js";import{A as D}from"./ActionMessage.41a9a07b.js";import{F as T}from"./FormSection.0876abff.js";import{I as i,T as N}from"./TextInput.1870492f.js";import{I as c}from"./InputLabel.16b3aa92.js";import{P as L}from"./PrimaryButton.aba9d04b.js";import{S as P}from"./SecondaryButton.3ee971bf.js";import{u as U}from"./useTypedPage.d2dae482.js";import"./transition.cc0afa0e.js";import"./SectionTitle.faf43838.js";function H({user:r}){const a=F({_method:"PUT",name:r.name,email:r.email,photo:null}),s=C(),[m,u]=l.exports.useState(null),n=l.exports.useRef(null),d=U(),[k,y]=l.exports.useState(!1);function x(){a.post(s("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>p()})}function S(){var t;(t=n.current)==null||t.click()}function b(){var h,g;const t=(g=(h=n.current)==null?void 0:h.files)==null?void 0:g[0];if(!t)return;a.setData("photo",t);const f=new FileReader;f.onload=I=>{var v;u((v=I.target)==null?void 0:v.result)},f.readAsDataURL(t)}function w(){j.delete(s("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{u(null),p()}})}function p(){var t;(t=n.current)!=null&&t.value&&(n.current.value="",a.setData("photo",null))}return o(T,{onSubmit:x,title:"Profile Information",description:"Update your account's profile information and email address.",renderActions:()=>o(R,{children:[e(D,{on:a.recentlySuccessful,className:"mr-3",children:"Saved."}),e(L,{className:A({"opacity-25":a.processing}),disabled:a.processing,children:"Save"})]}),children:[d.props.jetstream.managesProfilePhotos?o("div",{className:"col-span-6 sm:col-span-4",children:[e("input",{type:"file",className:"hidden",ref:n,onChange:b}),e(c,{htmlFor:"photo",value:"Photo"}),m?e("div",{className:"mt-2",children:e("span",{className:"block rounded-full w-20 h-20",style:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:`url('${m}')`}})}):e("div",{className:"mt-2",children:e("img",{src:r.profile_photo_url,alt:r.name,className:"rounded-full h-20 w-20 object-cover"})}),e(P,{className:"mt-2 mr-2",type:"button",onClick:S,children:"Select A New Photo"}),r.profile_photo_path?e(P,{type:"button",className:"mt-2",onClick:w,children:"Remove Photo"}):null,e(i,{message:a.errors.photo,className:"mt-2"})]}):null,o("div",{className:"col-span-6 sm:col-span-4",children:[e(c,{htmlFor:"name",value:"Name"}),e(N,{id:"name",type:"text",className:"mt-1 block w-full",value:a.data.name,onChange:t=>a.setData("name",t.currentTarget.value),autoComplete:"name"}),e(i,{message:a.errors.name,className:"mt-2"})]}),o("div",{className:"col-span-6 sm:col-span-4",children:[e(c,{htmlFor:"email",value:"Email"}),e(N,{id:"email",type:"email",className:"mt-1 block w-full",value:a.data.email,onChange:t=>a.setData("email",t.currentTarget.value)}),e(i,{message:a.errors.email,className:"mt-2"}),d.props.jetstream.hasEmailVerification&&r.email_verified_at===null?o("div",{children:[o("p",{className:"text-sm mt-2 dark:text-white",children:["Your email address is unverified.",e(_,{href:s("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",onClick:t=>{t.preventDefault(),y(!0)},children:"Click here to re-send the verification email."})]}),k&&e("div",{className:"mt-2 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to your email address."})]}):null]})]})}export{H as default};
