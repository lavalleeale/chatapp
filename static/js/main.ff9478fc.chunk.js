(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(8),c=a.n(r),s=a(13),i=a(86),o=a(174),l=a(176),m=a(171),j=a(44),u=a(3),h=Object(m.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"30px"}}),b=function(e){var t=e.isLogin,a=h();return Object(u.jsxs)(o.a,{className:a.card,children:[Object(u.jsx)("p",{style:{display:"inline"},children:"\xa9Alex Lavallee 2021"}),!t&&Object(u.jsx)(j.b,{to:"/login",style:{float:"right",textDecoration:"none"},children:Object(u.jsx)(l.a,{variant:"outlined",children:"return to login"})})]})},d=a(185),x=a(179),p=a(187),O=a(184),g=a(188),f=a(10),v=Object(m.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"30px"},textField:{"margin-top":"10px","margin-bottom":"10px"}}),y=function(e){var t=e.setInfoWrapper,a=e.username,r=e.mainTheme,c=v(),i=Object(n.useState)(a),m=Object(s.a)(i,2),j=m[0],h=m[1],y=Object(n.useState)("Lobby"),N=Object(s.a)(y,2),S=N[0],w=N[1],k=Object(n.useState)(r),T=Object(s.a)(k,2),C=T[0],F=T[1],L=Object(n.useState)(""),W=Object(s.a)(L,2),B=W[0],J=W[1],M=Object(n.useState)(!1),R=Object(s.a)(M,2),U=R[0],A=R[1];return Object(u.jsxs)(u.Fragment,{children:[U&&Object(u.jsx)(f.a,{to:"/",push:!0}),Object(u.jsx)(o.a,{variant:"outlined",className:c.card,children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!j)return alert("Please enter username");if("Custom"===S){if(!B)return alert("Enter custom room name or select another room");t({username:j,room:B,theme:C})}else t({username:j,room:S,theme:C});A(!0)},children:[Object(u.jsx)(d.a,{className:c.textField,style:{width:"100%"},value:j,onChange:function(e){return h(e.target.value)},label:"Username",variant:"outlined"}),Object(u.jsxs)(x.a,{variant:"outlined",style:{width:"calc(50% - 5px)",marginTop:"10px"},children:[Object(u.jsx)(p.a,{children:"Room"}),Object(u.jsxs)(O.a,{label:"Room",value:S,onChange:function(e){return w(e.target.value)},children:[Object(u.jsx)(g.a,{value:"Lobby",children:"Lobby"}),Object(u.jsx)(g.a,{value:"Breakout 1",children:"Breakout 1"}),Object(u.jsx)(g.a,{value:"Breakout 2",children:"Breakout 2"}),Object(u.jsx)(g.a,{value:"Custom",children:"Custom"})]})]}),Object(u.jsxs)(x.a,{variant:"outlined",style:{width:"calc(50% - 5px)",marginTop:"10px",marginLeft:"10px"},children:[Object(u.jsx)(p.a,{children:"Theme"}),Object(u.jsxs)(O.a,{label:"Theme",value:C,onChange:function(e){return F(e.target.value)},children:[Object(u.jsx)(g.a,{value:"darkTheme",children:"Dark"}),Object(u.jsx)(g.a,{value:"lightTheme",children:"Light"})]})]}),"Custom"===S&&Object(u.jsx)(d.a,{className:c.textField,style:{width:"100%"},value:B,onChange:function(e){return J(e.target.value)},label:"Room Name",variant:"outlined"}),Object(u.jsx)(l.a,{style:{float:"right",marginTop:"10px"},variant:"outlined",type:"submit",children:"Submit"})]})}),Object(u.jsx)(b,{isLogin:!0})]})};y.defaultProps={username:""};var N,S=y,w=Object(m.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px"}}),k=function(e){var t=e.sendMessageFunc,a=w(),r=Object(n.useState)(""),c=Object(s.a)(r,2),i=c[0],m=c[1];return Object(u.jsx)(o.a,{variant:"outlined",className:a.card,children:Object(u.jsxs)("form",{className:a.root,onSubmit:function(e){e.preventDefault(),i&&(t(i),m(""))},children:[Object(u.jsx)(d.a,{style:{width:"100%",marginBottom:"10px"},value:i,onChange:function(e){return m(e.target.value)},label:"Message",variant:"outlined"}),Object(u.jsx)(l.a,{style:{float:"right"},variant:"outlined",type:"submit",children:"Send"})]})})},T=Object(m.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px"}}),C=function(e){var t=e.messages,a=e.username,n=e.sendMessageFunc,r=T();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{className:r.card,children:Object(u.jsx)("pre",{children:t})}),a&&Object(u.jsx)(k,{sendMessageFunc:n}),Object(u.jsx)(b,{isLogin:!1})]})},F=Object(m.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px",minHeight:50},center:{display:"inline",margin:"auto"}}),L=function(e){var t=e.info,a=F();return Object(u.jsxs)(o.a,{className:a.card,children:[Object(u.jsx)("h1",{className:a.center,children:"Chat App"}),t.username&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:a.center,style:{float:"right"},children:"Room: ".concat(t.room)}),Object(u.jsx)("br",{}),Object(u.jsx)("h2",{className:a.center,style:{float:"right"},children:"User: ".concat(t.username)})]})]})},W=a(88),B=a(181),J=a(182),M=a(180),R=Object(i.io)("wss://alextesting.ninja/",{path:"/chatApp/socket"});var U=function(){var e=Object(M.a)(["info"]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("\n".repeat(window.outerWidth/50)),i=Object(s.a)(c,2),o=i[0],l=i[1],m=Object(n.useState)({theme:"darkTheme"}),h=Object(s.a)(m,2),b=h[0],d=h[1];function x(e){return r("info",e,{path:"/",domain:"lavalleeale.github.io",secure:!0}),d(e),b.username?b.username!==e.username&&b.room===e.room?R.emit("changeName",JSON.stringify({oldName:b.username,newName:e.username})):b.username===e.username&&b.room!==e.room?R.emit("changeRoom",e.room):b.username!==e.username||b.room!==e.room?R.emit("changeInfo",JSON.stringify(e)):void 0:R.emit("newUser",JSON.stringify(e))}R.removeAllListeners(),R.on("update",(function(e){l(o.split("\n").slice(1).join("\n")+e)})),R.on("newUser",(function(e){l("".concat(o.split("\n").slice(1).join("\n")).concat(e," has joined the chat\n"))})),R.on("changeName",(function(e){N=JSON.parse(e),l("".concat(o.split("\n").slice(1).join("\n")).concat(N.oldName," has changed their name to ").concat(N.newName,"\n"))})),R.on("delUser",(function(e){l("".concat(o.split("\n").slice(1).join("\n")).concat(e," has left the chat\n"))}));var p={darkTheme:Object(W.a)({palette:{type:"dark"}}),lightTheme:Object(W.a)({palette:{type:"light"}})};return Object(u.jsxs)(B.a,{theme:p[b.theme],children:[Object(u.jsx)(J.a,{}),Object(u.jsx)(L,{info:b}),Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(f.b,{exact:!0,path:"/",children:[!b.username&&(a.info?x(a.info):Object(u.jsx)(f.a,{to:"/login",push:!0})),Object(u.jsx)(C,{messages:o,sendMessageFunc:function(e){return function(e){R.emit("sendMessage","".concat(b.username,": ").concat(e,"\n"))}(e)},username:b.username})]}),Object(u.jsx)(f.b,{exact:!0,path:"/login",children:Object(u.jsx)(S,{setInfoWrapper:function(e){return x(e)},username:b.username,theme:b.theme})})]})]})},A=a(183);c.a.render(Object(u.jsx)(A.a,{children:Object(u.jsx)(U,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.ff9478fc.chunk.js.map