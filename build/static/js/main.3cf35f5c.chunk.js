(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(17),r=t.n(c),a=t(18),o=t(8),u=t(3),s=t(2),i=t(0),l=function(e){var n=e.searchValue,t=e.searchHandler;return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.newName,t=e.newNameHandler,c=e.newNumber,r=e.newNumberHandler,a=e.clickHandler;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:t,value:n})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:r,value:c})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:a,children:"add"})})]})},j=function(e){var n=e.persons,t=e.searchValue,c=e.deleteHandler;return Object(i.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return Object(i.jsxs)("div",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){return c(e.id,e.name)},children:"Delete"})]},n)}))})},b=t(5),h=t.n(b),f="/api/persons",O=function(){return h.a.get(f).then((function(e){return e.data}))},m=function(e){return h.a.post(f,e).then((function(e){return e.data}))},v=function(e,n){return h.a.delete("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},x=function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.successMessage;return null===n?null:Object(i.jsx)("div",{className:"success",children:n})},w=function(e){var n=e.errorMessage;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(s.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(s.useState)(""),b=Object(u.a)(r,2),h=b[0],f=b[1],g=Object(s.useState)(""),N=Object(u.a)(g,2),k=N[0],H=N[1],C=Object(s.useState)(""),S=Object(u.a)(C,2),M=S[0],V=S[1],y=Object(s.useState)(null),D=Object(u.a)(y,2),A=D[0],E=D[1],I=Object(s.useState)(null),J=Object(u.a)(I,2),L=J[0],T=J[1];Object(s.useEffect)((function(){O().then((function(e){return c(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(p,{successMessage:A}),Object(i.jsx)(w,{errorMessage:L}),Object(i.jsx)(l,{searchValue:M,searchHandler:function(e){V(e.target.value)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(d,{newName:h,newNameHandler:function(e){f(e.target.value)},newNumber:k,newNumberHandler:function(e){H(e.target.value)},clickHandler:function(e){e.preventDefault();var n={name:h,number:k},r=t.find((function(e){return e.name===h})),u=Object(o.a)(Object(o.a)({},r),{},{number:k});r?confirm("".concat(h," is already added to phonebook, replace the old number with new one?"))&&x(r.id,u).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e})))})).catch((function(e){console.log(e)})):m(n).then((function(e){c([].concat(Object(a.a)(t),[e])),E("Added ".concat(e.name)),setTimeout((function(){return E(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),T(e.response.data.error)})),f(""),H("")}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(j,{persons:t,searchValue:M,deleteHandler:function(e,n){console.log(n,e);var t={name:h,number:k};confirm("Delete ".concat(n," ?"))&&v(e,t).catch((function(e){T('Information of "'.concat(n,'" has already been removed from the server')),setTimeout((function(){return T(null)}),5e3),console.log(e)}))}})]})};t(42);r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3cf35f5c.chunk.js.map