(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(8),c=a.n(r),i=a(183),s=a(13),o=a(86),l=a(88),m=a(181),j=a(182),u=a(44),h=a(10),d=a(180),b=a(174),x=a(171),p=a(3),O=Object(x.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px",minHeight:50},center:{display:"inline",margin:"auto"}}),g=function(e){var t=e.info,a=O();return Object(p.jsxs)(b.a,{className:a.card,children:[Object(p.jsx)("h1",{className:a.center,children:"Chat App"}),t.username&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:a.center,style:{float:"right"},children:"Room: ".concat(t.room)}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:a.center,style:{float:"right"},children:"User: ".concat(t.username)})]})]})},f=a(176),v=Object(x.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"30px"}}),y=function(e){var t=e.isLogin,a=v();return Object(p.jsxs)(b.a,{className:a.card,children:[Object(p.jsx)("p",{style:{display:"inline"},children:"\xa9Alex Lavallee 2021"}),!t&&Object(p.jsx)(u.b,{to:"/login",style:{float:"right",textDecoration:"none"},children:Object(p.jsx)(f.a,{variant:"outlined",children:"return to login"})})]})},N=a(185),w=Object(x.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px"}}),S=function(e){var t=e.sendMessageFunc,a=w(),r=Object(n.useState)(""),c=Object(s.a)(r,2),i=c[0],o=c[1];return Object(p.jsx)(b.a,{variant:"outlined",className:a.card,children:Object(p.jsxs)("form",{className:a.root,onSubmit:function(e){e.preventDefault(),i&&(t(i),o(""))},children:[Object(p.jsx)(N.a,{style:{width:"100%",marginBottom:"10px"},value:i,onChange:function(e){return o(e.target.value)},label:"Message",variant:"outlined"}),Object(p.jsx)(f.a,{style:{float:"right"},variant:"outlined",type:"submit",children:"Send"})]})})},T=Object(x.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"10px"}}),k=function(e){var t=e.messages,a=e.sendMessageFunc,n=T();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{className:n.card,children:Object(p.jsx)("pre",{children:t})}),Object(p.jsx)(S,{sendMessageFunc:a}),Object(p.jsx)(y,{isLogin:!1})]})},C=a(179),F=a(187),L=a(184),W=a(188),B=Object(x.a)({card:{margin:"auto","margin-top":"10px","margin-bottom":"10px",maxWidth:500,padding:"30px"},textField:{"margin-top":"10px","margin-bottom":"10px"}}),J=function(e){var t=e.setInfoWrapper,a=e.username,r=e.mainTheme,c=B(),i=Object(n.useState)(a),o=Object(s.a)(i,2),l=o[0],m=o[1],j=Object(n.useState)("Lobby"),u=Object(s.a)(j,2),d=u[0],x=u[1],O=Object(n.useState)(r),g=Object(s.a)(O,2),v=g[0],w=g[1],S=Object(n.useState)(""),T=Object(s.a)(S,2),k=T[0],J=T[1],M=Object(n.useState)(!1),R=Object(s.a)(M,2),U=R[0],A=R[1];return Object(p.jsxs)(p.Fragment,{children:[U&&Object(p.jsx)(h.a,{to:"",push:!0}),Object(p.jsx)(b.a,{variant:"outlined",className:c.card,children:Object(p.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),t("Custom"===d?{username:l,room:k,theme:v}:{username:l,room:d,theme:v}),A(!0)},children:[Object(p.jsx)(N.a,{required:!0,className:c.textField,style:{width:"100%"},value:l,onChange:function(e){return m(e.target.value)},label:"Username",variant:"outlined"}),Object(p.jsxs)(C.a,{variant:"outlined",style:{width:"calc(50% - 5px)",marginTop:"10px"},children:[Object(p.jsx)(F.a,{children:"Room"}),Object(p.jsxs)(L.a,{label:"Room",value:d,onChange:function(e){return x(e.target.value)},children:[Object(p.jsx)(W.a,{value:"Lobby",children:"Lobby"}),Object(p.jsx)(W.a,{value:"Breakout 1",children:"Breakout 1"}),Object(p.jsx)(W.a,{value:"Breakout 2",children:"Breakout 2"}),Object(p.jsx)(W.a,{value:"Custom",children:"Custom"})]})]}),Object(p.jsxs)(C.a,{variant:"outlined",style:{width:"calc(50% - 5px)",marginTop:"10px",marginLeft:"10px"},children:[Object(p.jsx)(F.a,{children:"Theme"}),Object(p.jsxs)(L.a,{label:"Theme",value:v,onChange:function(e){return w(e.target.value)},children:[Object(p.jsx)(W.a,{value:"darkTheme",children:"Dark"}),Object(p.jsx)(W.a,{value:"lightTheme",children:"Light"})]})]}),"Custom"===d&&Object(p.jsx)(N.a,{required:!0,className:c.textField,style:{width:"100%"},value:k,onChange:function(e){return J(e.target.value)},label:"Room Name",variant:"outlined"}),Object(p.jsx)(f.a,{style:{float:"right",marginTop:"10px"},variant:"outlined",type:"submit",children:"Submit"})]})}),Object(p.jsx)(y,{isLogin:!0})]})};J.defaultProps={username:"",mainTheme:"darkTheme"};var M,R=J,U=Object(o.io)("wss://alextesting.ninja/",{path:"/chatApp/socket"});var A=function(){var e=Object(d.a)(["info"]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("\n".repeat(window.outerWidth/50)),i=Object(s.a)(c,2),o=i[0],b=i[1],x=Object(n.useState)({theme:"darkTheme"}),O=Object(s.a)(x,2),f=O[0],v=O[1];function y(e){return r("info",e,{path:"/",domain:"lavalleeale.github.io",secure:!0}),v(e),f.username?f.username!==e.username&&f.room===e.room?U.emit("changeName",JSON.stringify({oldName:f.username,newName:e.username})):f.username===e.username&&f.room!==e.room?U.emit("changeRoom",e.room):f.username===e.username&&f.room===e.room||U.emit("changeInfo",JSON.stringify(e)):U.emit("newUser",JSON.stringify(e))}U.removeAllListeners(),U.on("update",(function(e){b(o.split("\n").slice(1).join("\n")+e)})),U.on("newUser",(function(e){b("".concat(o.split("\n").slice(1).join("\n")).concat(e," has joined the chat\n"))})),U.on("changeName",(function(e){M=JSON.parse(e),b("".concat(o.split("\n").slice(1).join("\n")).concat(M.oldName," has changed their name to ").concat(M.newName,"\n"))})),U.on("delUser",(function(e){b("".concat(o.split("\n").slice(1).join("\n")).concat(e," has left the chat\n"))}));var N={darkTheme:Object(l.a)({palette:{type:"dark"}}),lightTheme:Object(l.a)({palette:{type:"light"}})};return Object(p.jsxs)(m.a,{theme:N[f.theme],children:[Object(p.jsx)(j.a,{}),Object(p.jsx)(g,{info:f}),Object(p.jsxs)(u.a,{children:[Object(p.jsxs)(h.b,{exact:!0,path:"/",children:[!f.username&&(a.info?y(a.info):Object(p.jsx)(h.a,{to:"login",push:!0})),Object(p.jsx)(k,{messages:o,sendMessageFunc:function(e){return function(e){"/clear"===e?b("\n".repeat(window.outerWidth/50)):U.emit("sendMessage","".concat(f.username,": ").concat(e,"\n"))}(e)},username:f.username})]}),Object(p.jsx)(h.b,{exact:!0,path:"/login",children:Object(p.jsx)(R,{setInfoWrapper:function(e){return y(e)},username:f.username,mainTheme:f.theme})})]})]})};c.a.render(Object(p.jsx)(i.a,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.4346f2ac.chunk.js.map