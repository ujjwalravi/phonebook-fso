(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(15),r=t.n(a),o=(t(20),t(6)),u=t(3),i=t(4),s=t.n(i),d="/api/persons",l={getAll:function(){return s.a.get(d)},create:function(e){return s.a.post(d,e)},update:function(e,n){return s.a.put("".concat(d,"/").concat(e),n)},deleteA:function(e){return s.a.delete("".concat(d,"/").concat(e))}},b=t(0),j=function(e){var n=e.notification,t=e.errorMessage;return n||t?Object(b.jsx)("p",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,marginBottom:10},children:n||t}):null},f=function(e){var n=e.onSubmit,t=e.name,c=e.number;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:t.value,onChange:t.onChange})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:c.value,onChange:c.onChange})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.value,t=e.onChange;return Object(b.jsxs)("div",{children:["filter shown with: ",Object(b.jsx)("input",{value:n,onChange:t})]})},m=function(e){var n=e.name,t=e.number,c=e.delte;return Object(b.jsxs)("li",{children:[n," ",t," ",Object(b.jsx)("button",{onClick:c,children:"delete"})]})},O=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),s=i[0],d=i[1],O=Object(c.useState)(""),v=Object(u.a)(O,2),p=v[0],g=v[1],x=Object(c.useState)(""),w=Object(u.a)(x,2),C=w[0],S=w[1],k=Object(c.useState)(null),y=Object(u.a)(k,2),A=y[0],T=y[1],B=Object(c.useState)(null),D=Object(u.a)(B,2),E=D[0],I=D[1];Object(c.useEffect)((function(){l.getAll().then((function(e){return a(e.data)})).catch((function(e){I(e.response.data.error)}))}),[]);var J=""===C?t:t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(j,{notification:A,errorMessage:E}),Object(b.jsx)(h,{value:C,onChange:function(e){S(e.target.value)}}),Object(b.jsx)("h3",{children:"Add a new"}),Object(b.jsx)(f,{onSubmit:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(s)){var n=t.find((function(e){return e.name===s}));if(!0===window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one?"))){var c=Object(o.a)(Object(o.a)({},n),{},{number:p});l.update(n.id,c).then((function(e){a(t.map((function(t){return t.id!==n.id?t:e.data}))),g(""),d(""),T("Added ".concat(n.name)),setTimeout((function(){T(null)}),5e3)})).catch((function(e){e.response.data?(I(e.response.data.error),setTimeout((function(){I(null)}),5e3)):(I("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){I(null)}),5e3))}))}}else{var r={name:s,number:p};l.create(r).then((function(e){a(t.concat(e.data)),g(""),d(""),T("Added ".concat(e.data.name)),setTimeout((function(){T(null)}),5e3)})).catch((function(e){console.log("here1"),I(e.response.data.error)}))}},name:{value:s,onChange:function(e){d(e.target.value)}},number:{value:p,onChange:function(e){g(e.target.value)}}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)("ul",{children:J.map((function(e){return Object(b.jsx)(m,{name:e.name,number:e.number,delte:function(){return n=e,void(window.confirm("Delete ".concat(n.name))&&l.deleteA(n.id).then((function(){return a(t.filter((function(e){return e.id!==n.id})))})));var n}},e.id)}))})]})};r.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.27590fbc.chunk.js.map