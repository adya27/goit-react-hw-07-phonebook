(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{33:function(t,e,n){t.exports={deleteBtn:"DeleteBtn_deleteBtn__OsEoU"}},34:function(t,e,n){t.exports={contact:"Contact_contact__1jUfj"}},41:function(t,e,n){},42:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),o=n(11),u=n.n(o),i=(n(41),n(42),n(10)),b=n(8),s=n.n(b),l=n(6),j=n(32),f=n(15),d=n.n(f),O=n(2),h=Object(O.b)("addContactSuccess"),m=Object(O.b)("addContactRequest"),p=Object(O.b)("addContactError"),x=Object(O.b)("deleteContactSuccess"),v=Object(O.b)("deleteContactRequest"),C=Object(O.b)("deleteContactError"),g=Object(O.b)("fetchContactSuccess"),_=Object(O.b)("fetchContactRequest"),k=Object(O.b)("fetchContactError"),B=Object(O.b)("filterContactSuccess"),S="http://localhost:3004/",y=n(12),N=function(t){return t.loader},D=function(t){return t.contacts},F=Object(y.a)([D,function(t){return t.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}));var w=Object(l.b)((function(t){return{loading:N(t),contacts:D(t)}}),(function(t){return{handleSubmit:function(e){return t((n=e,function(t){t(m()),d.a.post("".concat(S,"contacts"),n).then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(p(e))}))}));var n}}}))((function(t){var e=t.handleSubmit,n=t.loading,a=t.contacts,o=Object(r.useState)(""),u=Object(i.a)(o,2),b=u[0],l=u[1],f=Object(r.useState)(""),d=Object(i.a)(f,2),O=d[0],h=d[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["Phonebook ",n&&Object(c.jsx)("span",{children:"loading..."})]}),Object(c.jsxs)("form",{className:s.a.form,onSubmit:function(t){t.preventDefault(),a.map((function(t){return t.name})).includes(b)?alert("".concat(b," is already exists in contacts")):(e({id:Object(j.v4)(),name:b,number:O}),l(""),h(""))},children:[Object(c.jsxs)("label",{className:s.a.label,children:["Name",Object(c.jsx)("input",{className:s.a.input1,name:"name",onChange:function(t){var e=t.currentTarget.value;l(e)},value:b,type:"text"})]}),Object(c.jsxs)("label",{className:s.a.label,children:["Number",Object(c.jsx)("input",{className:s.a.input2,name:"number",onChange:function(t){var e=t.currentTarget.value;h(e)},value:O,type:"text"})]}),Object(c.jsx)("button",{className:s.a.input1,type:"submit",children:"Add contact"})]})]})})),P=n(33),E=n.n(P);var T=function(t){return Object(c.jsx)("button",{className:E.a.deleteBtn,onClick:t.onClickDeleteBtn,type:"button",children:"Delete"})},L=n(34),q=n.n(L);var A=function(t){return Object(c.jsxs)("li",{className:q.a.contact,children:[t.name," : ",t.number,Object(c.jsx)(T,{onClickDeleteBtn:function(){return t.deleteBtn(t.id)}})]})};var R=Object(l.b)((function(t){return{contacts:F(t)}}),(function(t){return{fetchFirst:function(){return t((function(t){t(_()),d.a.get("".concat(S,"contacts/")).then((function(e){return t(g(e))})).catch((function(e){return t(k(e))}))}))},onDeleteBtnClick:function(e){return t(function(t){return function(e){e(v(t)),d.a.delete("".concat(S,"contacts/").concat(t)).then((function(){return e(x(t))})).catch((function(t){return e(C(t))}))}}(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteBtnClick,a=t.fetchFirst;return Object(r.useEffect)((function(){a()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)("ul",{children:e.map((function(t){return Object(c.jsx)(A,{name:t.name,number:t.number,id:t.id,deleteBtn:function(){return n(t.id)}},t.id)}))})]})}));var U=Object(l.b)(null,(function(t){return{dispatchFilter:function(e){return t(B(e))}}}))((function(t){var e=t.dispatchFilter,n=Object(r.useState)(""),a=Object(i.a)(n,2),o=a[0],u=a[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Find contacts by name"}),Object(c.jsx)("input",{onChange:function(t){var n=t.currentTarget.value;u(n),e(n)},value:o})]})}));var I,J,V=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(w,{}),Object(c.jsx)(U,{}),Object(c.jsx)(R,{})]})},z=n(14),M=n(3),Q=n(7),G=n(5),H=Object(O.c)([],(I={},Object(G.a)(I,h,(function(t,e){var n=e.payload;return[].concat(Object(z.a)(t),[n])})),Object(G.a)(I,g,(function(t,e){return e.payload.data})),Object(G.a)(I,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),I)),K=Object(O.c)("",Object(G.a)({},B,(function(t,e){return e.payload.toLowerCase()}))),W=Object(O.c)([],(J={},Object(G.a)(J,h,(function(){return!1})),Object(G.a)(J,m,(function(){return!0})),Object(G.a)(J,p,(function(){return!1})),Object(G.a)(J,x,(function(){return!1})),Object(G.a)(J,v,(function(){return!0})),Object(G.a)(J,C,(function(){return!1})),Object(G.a)(J,g,(function(){return!1})),J)),X=n(35),Y=n.n(X),Z=[].concat(Object(z.a)(Object(O.d)({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[Y.a]),$=Object(M.c)({contacts:H,filter:K,loader:W}),tt=Object(O.a)({reducer:$,devTools:!1,middleware:Z}),et=(Object(Q.g)(tt),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))});u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{store:tt,children:Object(c.jsx)(V,{})})}),document.getElementById("root")),et()},8:function(t,e,n){t.exports={form:"Phonebook_form__31gfV",label:"Phonebook_label__2xxdn",input1:"Phonebook_input1__288VC",input2:"Phonebook_input2__eQUD9"}}},[[68,1,2]]]);
//# sourceMappingURL=main.72383dfe.chunk.js.map