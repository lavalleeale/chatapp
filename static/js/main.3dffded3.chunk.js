(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),s=n.n(r),c=n(13),i=n(86),o=n(174),l=n(176),u=n(171),m=n(44),j=n(3),b=Object(u.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"30px"}}),d=function(e){var t=e.isLogin,n=b();return Object(j.jsxs)(o.a,{className:n.card,children:[Object(j.jsx)("p",{style:{display:"inline"},children:"\xa9Alex Lavallee 2021"}),!t&&Object(j.jsx)(m.b,{to:"/login",style:{float:"right"},children:Object(j.jsx)(l.a,{variant:"outlined",children:"return to login"})})]})},h=n(185),x=n(179),p=n(187),O=n(184),g=n(188),f=n(10),v=Object(u.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"30px"},textField:{"margin-top":"10px","margin-bottom":"10px"}}),y=function(e){var t=e.setInfoWrapper,n=e.username,r=v(),s=Object(a.useState)(n),i=Object(c.a)(s,2),u=i[0],m=i[1],b=Object(a.useState)("Lobby"),y=Object(c.a)(b,2),N=y[0],S=y[1],w=Object(a.useState)(""),F=Object(c.a)(w,2),C=F[0],k=F[1],L=Object(a.useState)(!1),W=Object(c.a)(L,2),B=W[0],J=W[1];return Object(j.jsxs)(j.Fragment,{children:[B&&Object(j.jsx)(f.a,{to:"/",push:!0}),Object(j.jsx)(o.a,{variant:"outlined",className:r.card,children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!u)return alert("Please enter username");if("Custom"===N){if(!C)return alert("Enter custom room name or select another room");t({username:u,room:C})}else t({username:u,room:N});J(!0)},children:[Object(j.jsx)(h.a,{className:r.textField,style:{width:"60%"},value:u,onChange:function(e){return m(e.target.value)},label:"Username",variant:"outlined"}),Object(j.jsxs)(x.a,{variant:"outlined",style:{width:"calc(40% - 10px)",margin:"10px 0 0 10px"},children:[Object(j.jsx)(p.a,{children:"Room"}),Object(j.jsxs)(O.a,{label:"Room",value:N,onChange:function(e){return S(e.target.value)},children:[Object(j.jsx)(g.a,{value:"Lobby",children:"Lobby"}),Object(j.jsx)(g.a,{value:"Breakout 1",children:"Breakout 1"}),Object(j.jsx)(g.a,{value:"Breakout 2",children:"Breakout 2"}),Object(j.jsx)(g.a,{value:"Custom",children:"Custom"})]})]}),"Custom"===N&&Object(j.jsx)(h.a,{className:r.textField,style:{width:"100%"},value:C,onChange:function(e){return k(e.target.value)},label:"Room Name",variant:"outlined"}),Object(j.jsx)(l.a,{style:{float:"right"},variant:"outlined",type:"submit",children:"Submit"})]})}),Object(j.jsx)(d,{isLogin:!0})]})};y.defaultProps={username:""};var N,S=y,w=Object(u.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px"}}),F=function(e){var t=e.sendMessageFunc,n=w(),r=Object(a.useState)(""),s=Object(c.a)(r,2),i=s[0],u=s[1];return Object(j.jsx)(o.a,{variant:"outlined",className:n.card,children:Object(j.jsxs)("form",{className:n.root,onSubmit:function(e){e.preventDefault(),i&&(t(i),u(""))},children:[Object(j.jsx)(h.a,{style:{width:"100%",marginBottom:"10px"},value:i,onChange:function(e){return u(e.target.value)},label:"Message",variant:"outlined"}),Object(j.jsx)(l.a,{style:{float:"right"},variant:"outlined",type:"submit",children:"Send"})]})})},C=Object(u.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px"}}),k=function(e){var t=e.messages,n=e.username,a=e.sendMessageFunc,r=C();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{className:r.card,children:Object(j.jsx)("pre",{children:t})}),n&&Object(j.jsx)(F,{sendMessageFunc:a}),Object(j.jsx)(d,{isLogin:!1})]})},L=Object(u.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px",minHeight:50},center:{display:"inline",margin:"auto"}}),W=function(e){var t=e.info,n=L();return Object(j.jsxs)(o.a,{className:n.card,children:[Object(j.jsx)("h1",{className:n.center,children:"Chat App"}),t.username&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:n.center,style:{float:"right"},children:"Room: ".concat(t.room)}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:n.center,style:{float:"right"},children:"User: ".concat(t.username)})]})]})},B=n(88),J=n(181),M=n(182),R=n(180),U=Object(i.io)("wss://alextesting.ninja/",{path:"/chatApp/socket"});var A=function(){var e=Object(R.a)(["info"]),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),i=Object(c.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)({}),b=Object(c.a)(u,2),d=b[0],h=b[1];function x(e){if(d.username)if(d.username!==e.username&&d.room===e.room)U.emit("changeName",JSON.stringify({oldName:d.username,newName:e.username}));else if(d.username===e.username&&d.room!==e.room)U.emit("changeRoom",e.room);else{if(d.username===e.username&&d.room===e.room)return;U.emit("changeInfo",JSON.stringify(e))}else U.emit("newUser",JSON.stringify(e));r("info",e,{path:"/",domain:"lavalleeale.github.io",secure:!0}),h(e)}U.removeAllListeners(),U.on("update",(function(e){l(o.split("\n").slice(1).join("\n")+e)})),U.on("newUser",(function(e){l("".concat(o.split("\n").slice(1).join("\n")).concat(e," has joined the chat\n"))})),U.on("changeName",(function(e){N=JSON.parse(e),l("".concat(o.split("\n").slice(1).join("\n")).concat(N.oldName," has changed their name to ").concat(N.newName,"\n"))})),U.on("delUser",(function(e){l("".concat(o.split("\n").slice(1).join("\n")).concat(e," has left the chat\n"))}));var p=Object(B.a)({palette:{type:"dark"}});return Object(j.jsxs)(J.a,{theme:p,children:[Object(j.jsx)(M.a,{}),Object(j.jsx)(W,{info:d}),Object(j.jsxs)(m.a,{children:[Object(j.jsxs)(f.b,{exact:!0,path:"/",children:[!d.username&&(n.info?x(n.info):Object(j.jsx)(f.a,{to:"/login",push:!0})),Object(j.jsx)(k,{messages:o,sendMessageFunc:function(e){return function(e){U.emit("sendMessage","".concat(d.username,": ").concat(e,"\n"))}(e)},username:d.username})]}),Object(j.jsx)(f.b,{exact:!0,path:"/login",children:Object(j.jsx)(S,{setInfoWrapper:function(e){return x(e)},username:d.username})})]})]})},I=n(183);s.a.render(Object(j.jsx)(I.a,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.3dffded3.chunk.js.map