import{c as l}from"./index.893e1e4b.js";import{S as c}from"./SectionTitle.faf43838.js";import{a,j as m}from"./app.a7057b18.js";function h({onSubmit:r,renderActions:d,title:i,description:e,children:o}){const s=!!d;return a("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[m(c,{title:i,description:e}),m("div",{className:"mt-5 md:mt-0 md:col-span-2",children:a("form",{onSubmit:t=>{t.preventDefault(),r()},children:[m("div",{className:l("px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow",s?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"),children:m("div",{className:"grid grid-cols-6 gap-6",children:o})}),s&&m("div",{className:"flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md",children:d==null?void 0:d()})]})})]})}export{h as F};
