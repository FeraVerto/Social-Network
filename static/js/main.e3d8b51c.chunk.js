(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",list:"Navbar_list__2GzPV",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",navbar_mobile:"Navbar_navbar_mobile__3i9go"}},104:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(42),r=n(9),o={messages:[{message:"Hi",id:1},{message:"How are u",id:2},{message:"You",id:3}],dialogs:[{name:"Freddy",id:1,photo:"https://lamcdn.net/furfurmag.ru/post-cover/PYMgsmfOiI0s9C3k8dwZ8Q-default.jpg"},{name:"Nancy",id:2,photo:"https://cs8.pikabu.ru/post_img/2016/02/16/6/1455614024134387187.jpg"},{name:"Glen",id:3,photo:"https://avatars.mds.yandex.net/get-zen_doc/1866022/pub_5db7caed1e8e3f00ac32a293_5db7ddb498930900b236e7d6/scale_1200"}]},s=function(e){return{type:"SEND-MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageText;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{message:n,id:4}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(131),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"17ff73e8-0597-4fec-9a60-f80cbf4609a3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},137:function(e,t,n){e.exports=n.p+"static/media/base-avatar.46cc5c93.png"},138:function(e,t,n){e.exports=n.p+"static/media/preloader.3a658c63.svg"},165:function(e,t,n){e.exports=n(295)},24:function(e,t,n){e.exports={usersInfo:"Users_usersInfo__3m434",usersAvatar:"Users_usersAvatar__VO2SS",photo:"Users_photo__2hOPg",userInfo:"Users_userInfo__21fTd",userStatus:"Users_userStatus__3dsIO",userStatusText:"Users_userStatusText__biDMU",userLocation:"Users_userLocation__2sqGN",userName:"Users_userName__1mt5V"}},248:function(e,t,n){},249:function(e,t,n){},254:function(e,t,n){e.exports={nav:"Friends_nav__34e08",item:"Friends_item__13jWM",activeLink:"Friends_activeLink__2dT3A"}},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(7),r=n(95),o=n(104),s={},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;arguments.length>1&&arguments[1];return e},u=n(8),i=n.n(u),l=n(17),m=n(42),f=n(9),p=n(13),d=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(f.a)({},e,{},a):e}))},g={users:[],pageSize:10,totalItemsCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(e){return{type:"FOLLOW",userId:e}},E=function(e){return{type:"UNFOLLOW",userId:e}},v=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},_=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},O=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(_(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(f.a)({},e,{users:d(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(f.a)({},e,{users:d(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(f.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(f.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(f.a)({},e,{totaItemsCount:t.count});case"TOGGLE_IS_FETCHING":return Object(f.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(f.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(m.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},S=n(33),P="samurai-network/auth/SET_USER_DATA",j={userId:null,email:null,login:null,isAuth:!1},N=function(e,t,n,a){return{type:P,payload:{userId:e,email:t,login:n,isAuth:a}}},I=function(){return function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,s=a.email,t(N(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(f.a)({},e,{},t.payload);default:return e}},y=n(132),k=n(130),T={initialized:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(f.a)({},e,{initialized:!0});default:return e}},x=Object(a.c)({profilePage:r.b,dialogsPage:o.a,sidebar:c,usersPage:w,auth:C,form:k.a,app:L}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,F=Object(a.e)(x,U(Object(a.a)(y.a)));window._store_=F;var A=F,M=n(0),z=n.n(M),G=n(67),R=n.n(G),D=(n(248),n(34)),H=n(35),W=n(37),B=n(36),V=n(38),q=(n(249),n(46)),X=n.n(q),J=n(11),K=n(50),Y=function(e){return z.a.createElement("header",{className:X.a.header},z.a.createElement("div",{className:X.a.logo},"Kruegerbook"),z.a.createElement("div",{className:X.a.header_search},z.a.createElement("input",{type:"search",name:"search"}),z.a.createElement("button",{className:X.a.header_search_button},"Search")),z.a.createElement("div",null,e.isAuth?z.a.createElement("div",{className:X.a.loginBlock},e.login,z.a.createElement("button",{onClick:e.logout}," Log out ")):z.a.createElement(J.b,{to:"/login"}," Login ")))},Z=n(10),Q=n.n(Z),$=(n(254),function(){return z.a.createElement("nav",{className:Q.a.nav},z.a.createElement("div",{className:Q.a.navbar_mobile},z.a.createElement("span",{className:Q.a.menu_mobile},"Menu")),z.a.createElement("ul",{className:Q.a.list},z.a.createElement("li",{className:Q.a.item},z.a.createElement(J.b,{to:"/profile",activeClassName:Q.a.activeLink},"Profile")),z.a.createElement("li",{className:Q.a.item},z.a.createElement(J.b,{to:"/dialogs",activeClassName:Q.a.activeLink},"Messages")),z.a.createElement("li",{className:Q.a.item},z.a.createElement(J.b,{to:"news",activeClassName:Q.a.activeLink},"News")),z.a.createElement("li",{className:Q.a.item},z.a.createElement(J.b,{to:"music",activeClassName:Q.a.activeLink},"Music")),z.a.createElement("li",{className:Q.a.item},z.a.createElement(J.b,{to:"setting",activeClassName:Q.a.activeLink},"Settings")),z.a.createElement("li",{className:Q.a.item},z.a.createElement(J.b,{to:"users",activeClassName:Q.a.activeLink},"Users"))))}),ee=(n(255),function(e){return z.a.createElement("div",null,"Newsjjkjk")}),te=(n(256),function(e){return z.a.createElement("div",null,"Music")}),ne=(n(257),function(e){return z.a.createElement("div",null,"Setting")}),ae=n(29),re=n(14),oe=n(57),se=n(69),ce=n(129),ue=n(58),ie=n.n(ue),le=n(136),me=n.n(le),fe=function(e){for(var t=e.totaItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChange,o=e.portionSize,s=void 0===o?10:o,c=Math.ceil(t/n),u=[],i=1;i<=c;i++)u.push(i);var l=Math.ceil(c/s),m=Object(M.useState)(1),f=Object(ce.a)(m,2),p=f[0],d=f[1],g=(p-1)*s+1,h=p*s;return z.a.createElement("div",{className:ie.a.paginator},p>0&&z.a.createElement("button",{onClick:function(){d(p-1)}},"PREV"),u.filter((function(e){return e>=g&&e<=h})).map((function(e){return z.a.createElement("div",{className:ie.a.number},z.a.createElement("span",{className:me()(Object(se.a)({},ie.a.selectedPage,a===e),ie.a.pageNumber),key:e,onClick:function(e){r(e)}},e))})),l>p&&z.a.createElement("button",{onClick:function(){d(p+1)}},"NEXT"))},pe=n(24),de=n.n(pe),ge=n(137),he=n.n(ge),Ee=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;return z.a.createElement("div",null,z.a.createElement("div",{className:de.a.usersInfo,key:t.id},z.a.createElement("div",{className:de.a.usersAvatar},z.a.createElement("div",null,z.a.createElement(J.b,{to:"/profile/"+t.id},z.a.createElement("img",{className:de.a.photo,src:null!=t.photos.small?t.photos.small:he.a,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",width:"110px"}))),z.a.createElement("div",{className:de.a.usersFollow},t.followed?z.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):z.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),z.a.createElement("div",{className:de.a.userInfo},z.a.createElement("div",{className:de.a.userStatus},z.a.createElement("div",{className:de.a.userName},t.name),z.a.createElement("div",{className:de.a.userStatusText},t.status)),z.a.createElement("div",{className:de.a.userLocation},z.a.createElement("div",null,t.country),z.a.createElement("div",null,t.city)))))},ve=function(e){var t=e.currentPage,n=e.onPageChange,a=e.totaItemsCount,r=e.pageSize,o=e.users,s=Object(oe.a)(e,["currentPage","onPageChange","totaItemsCount","pageSize","users"]);return z.a.createElement("div",null,z.a.createElement("div",null,o.map((function(e){return z.a.createElement(Ee,{user:e,key:e.id,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow})}))),z.a.createElement(fe,{currentPage:t,onPageChange:n,totaItemsCount:a,pageSize:r}))},be=n(41),_e=n(139),Oe=Object(_e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),we=function(e){return e.usersPage.pageSize},Se=function(e){return e.usersPage.totaItemsCount},Pe=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},Ne=function(e){return e.usersPage.followingInProgress},Ie=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(W.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).onPageChange=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(V.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return z.a.createElement(z.a.Fragment,null,this.props.isFetching?z.a.createElement(be.a,null):null,z.a.createElement(ve,{totaItemsCount:this.props.totaItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),t}(z.a.Component),Ce=Object(a.d)(Object(re.b)((function(e){return{users:Oe(e),pageSize:we(e),totaItemsCount:Se(e),currentPage:Pe(e),isFetching:je(e),followingInProgress:Ne(e)}}),{follow:function(e){return function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,p.c.follow.bind(p.c),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,p.c.unfollow.bind(p.c),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:v,toogleFollowingProgress:_,requestUsers:function(e,t){return function(){var n=Object(l.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(b(!0)),a(v(e)),n.next=4,p.c.getUsers(e,t);case 4:r=n.sent,a(b(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount}),a(v(e));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ie),ye=function(e){function t(){return Object(D.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return z.a.createElement(Y,this.props)}}]),t}(z.a.Component),ke=Object(re.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.data.resultCode&&t(N(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ye),Te=n(55),Le=n.n(Te),xe=n(127),Ue=n(128),Fe=n(86),Ae=Object(Ue.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return z.a.createElement("div",null,z.a.createElement("form",{onSubmit:t},z.a.createElement("div",null,z.a.createElement(xe.a,{placeholder:"Email",name:"email",component:K.a,validate:[Fe.b]})),z.a.createElement("div",null,z.a.createElement(xe.a,{placeholder:"Password",type:"password",name:"password",component:K.a,validate:[Fe.b]})),z.a.createElement("div",null,z.a.createElement(xe.a,{type:"checkbox",name:"rememberMe",component:K.a}),"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),n&&z.a.createElement("div",{className:Le.a.formSummaryError}," ",n," "),z.a.createElement("div",null,z.a.createElement("button",null,"Login"))))})),Me=Object(re.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(l.a)(i.a.mark((function a(r){var o,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(I()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(S.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?z.a.createElement(ae.a,{to:"/profile"}):z.a.createElement("div",null,z.a.createElement("h1",null,"Login"),z.a.createElement(Ae,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ze=function(e){return function(t){return z.a.createElement(M.Suspense,{fallback:z.a.createElement(be.a,null)},z.a.createElement(e,t))}},Ge=z.a.lazy((function(){return n.e(4).then(n.bind(null,305))})),Re=z.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),De=function(e){function t(){return Object(D.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return z.a.createElement("div",{className:"app-wrapper"},z.a.createElement(ke,null),z.a.createElement($,null),z.a.createElement(M.Suspense,{fallback:z.a.createElement(be.a,null)},z.a.createElement("div",{className:"app-wrapper-content"},z.a.createElement(ae.b,{path:"/dialogs",render:ze(Ge)}),z.a.createElement(ae.b,{path:"/profile/:userId?",render:ze(Re)}),z.a.createElement(ae.b,{path:"/users",render:function(){return z.a.createElement(Ce,null)}}),z.a.createElement(ae.b,{path:"/news",component:ee}),z.a.createElement(ae.b,{path:"/music",component:te}),z.a.createElement(ae.b,{path:"/setting",component:ne}),z.a.createElement(ae.b,{path:"/login",component:function(){return z.a.createElement(Me,null)}}))))}}]),t}(z.a.Component),He=Object(a.d)(ae.f,Object(re.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(I());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(De),We=function(e){return z.a.createElement(J.a,{basename:"/Social-Network"},z.a.createElement(re.a,{store:A},z.a.createElement(He,null)))};R.a.render(z.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(138),s=n.n(o),c=n(92),u=n.n(c);t.a=function(e){return r.a.createElement("div",{className:u.a.preloader},r.a.createElement("img",{className:u.a.preloaderImg,src:s.a}))}},46:function(e,t,n){e.exports={header:"Header_header__1VCKf",logo:"Header_logo__3_SJs",loginBlock:"Header_loginBlock__6mma5",imgLogo:"Header_imgLogo__3176M",mobileMenu:"Header_mobileMenu__2DN1E",header_search:"Header_header_search__XGF0O"}},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(57),r=n(0),o=n.n(r),s=n(55),c=n.n(s),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,s=n&&a;return o.a.createElement("div",{className:c.a.formControl+" "+(s?c.a.error:"")},o.a.createElement("div",null,r),s&&o.a.createElement("span",null,a))},i=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))}},55:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},58:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",selectedPage:"Paginator_selectedPage__3SIki",number:"Paginator_number__2m6BL"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var a=n(8),r=n.n(a),o=n(17),s=n(42),c=n(9),u=n(13),i={posts:[{id:1,message:"Hi, how are you sleep?",likesCount:20},{id:2,message:"I like the night!",likesCount:15}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case"DELETE_POST":return Object(c.a)({},e,{posts:e.posts.filter((function(e){return!t.postId}))});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.e3d8b51c.chunk.js.map