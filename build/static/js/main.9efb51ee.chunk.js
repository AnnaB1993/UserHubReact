(this.webpackJsonpuser_hub_react=this.webpackJsonpuser_hub_react||[]).push([[0],{34:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var n=r(9),c=r(0),s=r(28),a=r.n(s),u=r(12),o=r(2);r(34);var i=r(1),j=function(e){var t=e.currentUser,r=e.setCurrentUser,s=e.userList,a=Object(c.useState)(),o=Object(n.a)(a,2),j=o[0],l=o[1];Object(c.useEffect)((function(){l(s[0])}),[s]);return Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"Welcome to UserHub"}),Object(i.jsx)("form",{className:"user-select",onSubmit:function(e){e.preventDefault()},children:t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.b,{to:"/posts",activeClassName:"current",children:"POSTS"}),Object(i.jsx)(u.b,{to:"/todos",activeClassName:"current",children:"TODOS"}),Object(i.jsxs)("button",{onClick:function(e){l(s[0]),localStorage.removeItem("currentUser"),r(null)},children:["LOG OUT, ",t.username]})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("select",{onChange:function(e){var t=e.target.value,r=s.find((function(e){return e.id==t}));l(r)},children:s.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.username},e.id)}))}),Object(i.jsx)("button",{onClick:function(e){var t;t=j,localStorage.setItem("currentUser",JSON.stringify(t)),r(j)},children:"LOG IN"})]})})]})},l=(r(41),function(e){var t=e.currentUser,r=e.userPosts;return Object(i.jsxs)("div",{className:"user-posts",children:[Object(i.jsxs)("h2",{children:["Posts By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,n=e.body;return Object(i.jsxs)("div",{className:"post",children:[Object(i.jsx)("h3",{children:r}),Object(i.jsx)("p",{children:n})]},t)}))]})}),h=(r(42),function(e){var t=e.currentUser,r=e.userTodos;return Object(i.jsxs)("div",{className:"user-todos",children:[Object(i.jsxs)("h2",{children:["Todos By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,n=e.completed;return Object(i.jsx)("div",{className:"todo",children:Object(i.jsx)("h3",{style:{textDecoration:n?"line-through":"none"},children:r})},t)}))]})}),b=r(10),d=r.n(b),O=r(13),p=r(14),f=r.n(p),x="https://jsonplace-univclone.herokuapp.com";function v(){return(v=Object(O.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(){return(m=Object(O.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/posts"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(){return(g=Object(O.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/todos"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var y=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),r=t[0],s=t[1],a=Object(c.useState)(JSON.parse(localStorage.getItem("currentUser"))),b=Object(n.a)(a,2),d=b[0],O=b[1],p=Object(c.useState)([]),f=Object(n.a)(p,2),x=f[0],y=f[1],S=Object(c.useState)([]),U=Object(n.a)(S,2),w=U[0],N=U[1];return Object(c.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){s(e)})).catch((function(e){console.error(e)}))}),[]),Object(c.useEffect)((function(){if(!d)return y([]),void N([]);(function(e){return m.apply(this,arguments)})(d.id).then((function(e){y(e)})).catch((function(e){console.error(e)})),function(e){return g.apply(this,arguments)}(d.id).then((function(e){N(e)})).catch((function(e){console.error(e)}))}),[d]),Object(i.jsx)(u.a,{children:Object(i.jsxs)("div",{id:"App",children:[Object(i.jsx)(j,{userList:r,currentUser:d,setCurrentUser:O}),d?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.d,{children:[Object(i.jsx)(o.b,{path:"/posts",children:Object(i.jsx)(l,{userPosts:x,currentUser:d})}),Object(i.jsx)(o.b,{path:"/todos",children:Object(i.jsx)(h,{userTodos:w,currentUser:d})}),Object(i.jsx)(o.b,{exact:!0,path:"/",children:Object(i.jsxs)("h2",{style:{padding:".5em"},children:["Welcome, ",d.username,"!"]})}),Object(i.jsx)(o.a,{to:"/"})]})}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.d,{children:[Object(i.jsx)(o.b,{exact:!0,path:"/",children:Object(i.jsx)("h2",{style:{padding:".5em"},children:"Please log in, above."})}),Object(i.jsx)(o.a,{to:"/"})]})})]})})};a.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.9efb51ee.chunk.js.map