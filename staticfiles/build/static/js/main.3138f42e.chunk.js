(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{17:function(e,t,a){e.exports={Input:"SignInUpForm_Input__3xaLZ",Container:"SignInUpForm_Container__2cuBp",Form:"SignInUpForm_Form__2ZPJ4",Text:"SignInUpForm_Text__-5VQs"}},19:function(e,t,a){e.exports={Button:"Button_Button__27i9m",CenterButton:"Button_CenterButton__3iPlz",Danger:"Button_Danger__LnRwy"}},21:function(e,t,a){e.exports={Form:"BookCreatEditForm_Form__33sLC",FormLabel:"BookCreatEditForm_FormLabel__37RT1",FormControl:"BookCreatEditForm_FormControl__1KQQE"}},28:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__1amC6",Active:"NavBar_Active__3PBZb"}},56:function(e,t,a){e.exports={Avatar:"Avatar_Avatar__196lW"}},63:function(e,t,a){},8:function(e,t,a){e.exports={App:"App_App__16ZpL",Main:"App_Main__HQkvd",Image:"App_Image__3UPXw",Alert:"App_Alert__3Zd3X"}},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),o=(a(63),a(8)),i=a.n(o),l=a(7),u=a(18),j=a(98),d=a(99),b=a(95),p=a(97),m=a(96),h=a.p+"static/media/logo.4cdc4e40.png",O=a(28),x=a.n(O),v=a(19),f=a.n(v),g=a(11),N=a(12),C=a(10),w=a.n(C);w.a.defaults.baseURL="/api",w.a.defaults.headers.post["Content-Type"]="multipart/form-data",w.a.defaults.withCredentials=!0;var _=w.a.create(),k=w.a.create(),y=a(38),A=a(1),F=Object(n.createContext)(),S=Object(n.createContext)(),B=function(){return Object(n.useContext)(S)},L=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(N.a)(a,2),c=r[0],s=r[1],o=Object(y.useHistory)(),i=function(){var e=Object(u.a)(Object(l.a)().mark((function e(){var t,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("dj-rest-auth/user/");case 3:t=e.sent,a=t.data,s(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(n.useMemo)((function(){_.interceptors.request.use(function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/dj-rest-auth/token/refresh/");case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),s((function(e){return e&&o.push("/signin"),null})),e.abrupt("return",t);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),k.interceptors.response.use((function(e){return e}),function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==(null===(a=t.response)||void 0===a?void 0:a.status)){e.next=10;break}return e.prev=1,e.next=4,w.a.post("/dj-rest-auth/token/refresh/");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),s((function(e){return e&&o.push("/signin"),null}));case 9:return e.abrupt("return",w()(t.config));case 10:return e.abrupt("return",Promise.reject(t));case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),Object(A.jsx)(F.Provider,{value:c,children:Object(A.jsx)(S.Provider,{value:s,children:t})})},I=a(56),P=a.n(I),R=function(e){var t=e.src,a=e.height,n=void 0===a?45:a,r=e.text;return Object(A.jsxs)("span",{children:[Object(A.jsx)("img",{className:P.a.Avatar,src:t,height:n,width:n,alt:"avatar"}),r]})},U=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&r(!1)};return document.addEventListener("mouseup",e),function(){document.removeEventListener("mouseup",e)}}),[c]),{expanded:a,setExpanded:r,ref:c}},E=function(){var e=Object(n.useContext)(F),t=B(),a=U(),r=a.expanded,c=a.setExpanded,s=a.ref,o=function(){var e=Object(u.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("api/dj-rest-auth/logout/");case 3:t(null),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),i=Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(g.c,{exact:!0,activeClassName:x.a.Active,to:"/",children:[Object(A.jsx)("i",{class:"fa-solid fa-house"}),"Home"]}),Object(A.jsxs)(g.c,{activeClassName:x.a.Active,to:"/mybooks",children:[Object(A.jsx)("i",{class:"fa-solid fa-book"}),"My Books"]}),Object(A.jsxs)(g.c,{activeClassName:x.a.Active,to:"/books/create",children:[Object(A.jsx)("i",{class:"far fa-plus-square"}),"Add Book"]}),Object(A.jsx)(g.c,{activeClassName:x.a.Active,to:"/profiles/".concat(null===e||void 0===e?void 0:e.profile_id),children:Object(A.jsx)(R,{src:null===e||void 0===e?void 0:e.profile_image,text:null===e||void 0===e?void 0:e.username,height:40})}),Object(A.jsxs)(g.c,{to:"/",onClick:o,children:[Object(A.jsx)("i",{class:"fa-solid fa-right-from-bracket"}),"Sign out"]})]}),O=Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(j.a,{className:"ml-auto",children:[Object(A.jsxs)(g.c,{activeClassName:x.a.Active,to:"/signin",children:[Object(A.jsx)("i",{class:"fa-solid fa-right-to-bracket"}),"Sign in"]}),Object(A.jsxs)(g.c,{activeClassName:x.a.Active,to:"/signup",children:[Object(A.jsx)("i",{class:"fa-solid fa-user-plus"}),"Sign up"]})]})});return Object(A.jsx)(d.a,{expanded:r,expand:"md",fixed:"top",className:x.a.NavBar,children:Object(A.jsxs)(b.a,{fluid:!0,children:[Object(A.jsx)(g.c,{to:"/",children:Object(A.jsx)(d.a.Brand,{children:Object(A.jsx)("img",{src:h,alt:"logo",height:"60"})})}),Object(A.jsx)(d.a.Toggle,{ref:s,onClick:function(){return c(!r)},"aria-controls":"navbarScroll"}),Object(A.jsxs)(d.a.Collapse,{id:"navbarScroll",children:[Object(A.jsx)(j.a,{className:"mx-auto",children:Object(A.jsxs)(p.a,{className:"d-flex",children:[Object(A.jsx)(p.a.Control,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(A.jsx)(m.a,{className:f.a.Button,children:"Search"})]})}),Object(A.jsx)(j.a,{children:e?i:O})]})]})})},G=a(6),T=a(25),D=a(20),H=a(17),M=a.n(H),Z=a(100),Q=function(){var e,t,a,r,c=Object(n.useState)({username:"",password1:"",password2:""}),s=Object(N.a)(c,2),o=s[0],j=s[1],d=o.username,h=o.password1,O=o.password2,x=Object(n.useState)({}),v=Object(N.a)(x,2),C=v[0],_=v[1],k=Object(G.useHistory)(),y=function(e){j(Object(D.a)(Object(D.a)({},o),{},Object(T.a)({},e.target.name,e.target.value)))},F=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.a.post("api/dj-rest-auth/registration/",o);case 4:k.push("/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),_(null===(a=e.t0.response)||void 0===a?void 0:a.data);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(b.a,{className:M.a.Container,children:Object(A.jsxs)(p.a,{className:M.a.Form,onSubmit:F,children:[Object(A.jsx)("h2",{className:"mb-4 text-center",children:"Sign Up"}),Object(A.jsxs)(p.a.Group,{controlId:"username",children:[Object(A.jsx)(p.a.Label,{className:"d-none",children:"Username"}),Object(A.jsx)(p.a.Control,{type:"text",placeholder:"Username",name:"username",className:M.a.Input,value:d,onChange:y})]}),null===(e=C.username)||void 0===e?void 0:e.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)(p.a.Group,{controlId:"password1",children:[Object(A.jsx)(p.a.Label,{className:"d-none",children:"Password"}),Object(A.jsx)(p.a.Control,{type:"password",placeholder:"Password",name:"password1",className:M.a.Input,value:h,onChange:y})]}),null===(t=C.password1)||void 0===t?void 0:t.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)(p.a.Group,{controlId:"password2",children:[Object(A.jsx)(p.a.Label,{className:"d-none",children:"Confirm Password"}),Object(A.jsx)(p.a.Control,{type:"Password",placeholder:"Confirm Password",name:"password2",className:M.a.Input,value:O,onChange:y})]}),null===(a=C.password2)||void 0===a?void 0:a.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsx)("div",{className:f.a.CenterButton,children:Object(A.jsx)(m.a,{type:"submit",className:f.a.Button,children:"Sign Up"})}),null===(r=C.non_field_errors)||void 0===r?void 0:r.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)("p",{className:"".concat(M.a.Text," mt-3"),children:["Already have an account?",Object(A.jsx)(g.b,{to:"/signin",children:"login here"})]})]})})},J=function(){var e,t,a,r=B(),c=Object(n.useState)({username:"",password:""}),s=Object(N.a)(c,2),o=s[0],j=s[1],d=o.username,h=o.password,O=Object(n.useState)({}),x=Object(N.a)(O,2),v=x[0],C=x[1],_=Object(G.useHistory)(),k=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var a,n,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.a.post("api/dj-rest-auth/login/",o);case 4:a=e.sent,n=a.data,r(n.user),_.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),C(null===(c=e.t0.response)||void 0===c?void 0:c.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(e){j(Object(D.a)(Object(D.a)({},o),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(A.jsx)(b.a,{className:M.a.Container,children:Object(A.jsxs)(p.a,{className:M.a.Form,onSubmit:k,children:[Object(A.jsx)("h2",{className:"mb-4 text-center",children:"Sign In"}),Object(A.jsxs)(p.a.Group,{controlId:"username",children:[Object(A.jsx)(p.a.Label,{className:"d-none",children:"Username"}),Object(A.jsx)(p.a.Control,{type:"text",placeholder:"Username",name:"username",className:M.a.Input,value:d,onChange:y})]}),null===(e=v.username)||void 0===e?void 0:e.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)(p.a.Group,{controlId:"password",children:[Object(A.jsx)(p.a.Label,{className:"d-none",children:"Password"}),Object(A.jsx)(p.a.Control,{type:"password",placeholder:"Password",name:"password",className:M.a.Input,value:h,onChange:y})]}),null===(t=v.password)||void 0===t?void 0:t.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsx)("div",{className:f.a.CenterButton,children:Object(A.jsx)(m.a,{type:"submit",className:f.a.Button,children:"Sign In"})}),null===(a=v.non_field_errors)||void 0===a?void 0:a.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)("p",{className:"".concat(M.a.Text," mt-3"),children:["Don't have an account?",Object(A.jsx)(g.b,{to:"/signup",children:"Register here"})]})]})})},q=a(21),X=a.n(q);var z=function(){var e,t,a,r,c,s=Object(n.useState)({}),o=Object(N.a)(s,2),j=o[0],d=o[1],b=Object(n.useState)({title:"",author:"",summary:"",genre:"",image:""}),h=Object(N.a)(b,2),O=h[0],x=h[1],v=O.title,g=O.author,C=O.summary,w=O.genre,k=O.image,F=Object(n.useRef)(null),S=Object(y.useHistory)(),B=function(e){x(Object(D.a)(Object(D.a)({},O),{},Object(T.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var a,n,r,c,s;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("title",v),a.append("author",g),a.append("summary",C),a.append("genre",w),a.append("image",F.current.files[0]),e.prev=7,e.next=10,_.post("/api/books/",a);case 10:n=e.sent,r=n.data,S.push("/api/books/".concat(r.id)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),console.log(e.t0),401!==(null===(c=e.t0.response)||void 0===c?void 0:c.status)&&d(null===(s=e.t0.response)||void 0===s?void 0:s.data);case 19:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(p.a,{className:X.a.Form,onSubmit:L,children:[Object(A.jsxs)(p.a.Group,{controlId:"title",children:[Object(A.jsx)(p.a.Label,{className:X.a.FormLabel,children:"Title"}),Object(A.jsx)(p.a.Control,{className:X.a.FormControl,type:"text",name:"title",value:v,onChange:B})]}),null===j||void 0===j||null===(e=j.title)||void 0===e?void 0:e.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)(p.a.Group,{controlId:"author",children:[Object(A.jsx)(p.a.Label,{className:X.a.FormLabel,children:"Author"}),Object(A.jsx)(p.a.Control,{className:X.a.FormControl,type:"text",name:"author",value:g,onChange:B})]}),null===j||void 0===j||null===(t=j.author)||void 0===t?void 0:t.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)(p.a.Group,{controlId:"genre",children:[Object(A.jsx)(p.a.Label,{className:X.a.FormLabel,children:"Genre"}),Object(A.jsx)(p.a.Control,{className:X.a.FormControl,type:"text",name:"genre",value:w,onChange:B})]}),null===j||void 0===j||null===(a=j.genre)||void 0===a?void 0:a.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)(p.a.Group,{controlId:"summary",children:[Object(A.jsx)(p.a.Label,{className:X.a.FormLabel,children:"Summary"}),Object(A.jsx)(p.a.Control,{className:X.a.FormControl,as:"textarea",name:"summary",rows:6,value:C,onChange:B})]}),null===j||void 0===j||null===(r=j.summary)||void 0===r?void 0:r.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)(p.a.Group,{controlId:"image",children:[Object(A.jsx)(p.a.Label,{className:X.a.FormLabel,children:"Cover Image"}),Object(A.jsx)(p.a.File,{name:"image",accept:"image/*",onChange:function(e){e.target.files.lenght&&(URL.revokeObjectURL(k),x(Object(D.a)(Object(D.a)({},O),{},{image:URL.createObjectURL(e.target.files[0])})))},ref:F})]}),null===j||void 0===j||null===(c=j.image)||void 0===c?void 0:c.map((function(e,t){return Object(A.jsx)(Z.a,{className:i.a.Alert,variant:"warning",children:e},t)})),Object(A.jsxs)("div",{className:f.a.CenterButton,children:[Object(A.jsx)(m.a,{className:f.a.Danger,onClick:function(){return S.goBack()},children:"Cancel"}),Object(A.jsx)(m.a,{className:f.a.Button,type:"Submit",children:"Submit"})]})]})};var K=function(){return Object(A.jsxs)("div",{className:i.a.App,children:[Object(A.jsx)(E,{}),Object(A.jsx)(b.a,{className:i.a.Main,children:Object(A.jsxs)(G.Switch,{children:[Object(A.jsx)(G.Route,{exact:!0,path:"/",render:function(){return Object(A.jsx)("h1",{children:"Home page"})}}),Object(A.jsx)(G.Route,{exact:!0,path:"/mybooks",render:function(){return Object(A.jsx)("h1",{children:"My Books"})}}),Object(A.jsx)(G.Route,{exact:!0,path:"/signin",render:function(){return Object(A.jsx)(J,{})}}),Object(A.jsx)(G.Route,{exact:!0,path:"/signup",render:function(){return Object(A.jsx)(Q,{})}}),Object(A.jsx)(G.Route,{exact:!0,path:"/books/create",render:function(){return Object(A.jsx)(z,{})}}),Object(A.jsx)(G.Route,{render:function(){return Object(A.jsx)("p",{children:"404 Page not found"})}})]})})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,101)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(g.a,{children:Object(A.jsx)(L,{children:Object(A.jsx)(K,{})})})}),document.getElementById("root")),V()}},[[93,1,2]]]);
//# sourceMappingURL=main.3138f42e.chunk.js.map