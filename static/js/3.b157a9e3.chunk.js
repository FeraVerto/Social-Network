(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{296:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var s=a(34),n=a(35),o=a(37),r=a(36),u=a(38),l=a(0),i=a.n(l),c=a(29),p=a(14),m=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(u.a)(a,t),Object(n.a)(a,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.a,{to:"/login"})}}]),a}(i.a.Component);return Object(p.b)(m)(t)}},300:function(e,t,a){e.exports={mainContent:"Profile_mainContent__3XrV5"}},301:function(e,t,a){e.exports={background:"ProfileInfo_background__1tAwH",userName:"ProfileInfo_userName__2XnM7",userAvatar:"ProfileInfo_userAvatar__qlIFO",userInfo:"ProfileInfo_userInfo__3hlxg",listInfo:"ProfileInfo_listInfo__2LNML",profileInfoContacts:"ProfileInfo_profileInfoContacts__3fU1C",userContact:"ProfileInfo_userContact__17UaI"}},302:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c",postsBlock2:"MyPosts_postsBlock2__2k2pC",postsBlock1:"MyPosts_postsBlock1__3UVd1"}},303:function(e,t,a){e.exports={item:"Post_item__ihtu9",itemPost:"Post_itemPost__hn1tP",itemLike:"Post_itemLike__3zHlN",like:"Post_like__oViQh"}},304:function(e,t,a){"use strict";a.r(t);var s=a(34),n=a(35),o=a(37),r=a(36),u=a(38),l=a(0),i=a.n(l),c=a(300),p=a.n(c),m=a(301),f=a.n(m),d=a(41),_=(i.a.Component,a(129)),h=function(e){var t=Object(l.useState)(!1),a=Object(_.a)(t,2),s=a[0],n=a[1],o=Object(l.useState)(e.status),r=Object(_.a)(o,2),u=r[0],c=r[1];Object(l.useEffect)((function(){c(e.status)}),[e.status]);return i.a.createElement("div",null,!s&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"No status")),s&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(u)},onChange:function(e){c(e.currentTarget.value)},value:u})))},b=function(e){var t=e.profile,a=e.status,s=e.updateStatus;return t?i.a.createElement("div",{className:f.a.background},i.a.createElement("div",{className:f.a.userAvatar},i.a.createElement("img",{src:t.photos.large,alt:"Freddy"})),i.a.createElement("div",{className:f.a.userInfo},i.a.createElement("span",{className:f.a.userName},t.fullName),i.a.createElement(h,{status:a,updateStatus:s}),i.a.createElement("ul",{className:f.a.listInfo},i.a.createElement("li",null,"Date of Brith: 2 january"),i.a.createElement("li",null,"City: Springwood"),i.a.createElement("li",null,"Job: ",t.lookingForAJob)))):i.a.createElement(d.a,null)},E=a(95),P=a(42),k=a(302),v=a.n(k),g=a(303),j=a.n(g),O=function(e){return i.a.createElement("li",{className:j.a.item},i.a.createElement("div",{className:j.a.itemLike},i.a.createElement("img",{src:"https://lamcdn.net/furfurmag.ru/post-cover/PYMgsmfOiI0s9C3k8dwZ8Q-default.jpg",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u0424\u0440\u0435\u0434\u0434\u0438"}),i.a.createElement("span",{className:j.a.like},"Like ",e.like)),i.a.createElement("div",{className:j.a.itemPost},e.message))},N=a(127),I=a(128),y=a(86),C=a(50),S=Object(y.a)(10),A=i.a.memo((function(e){var t=Object(P.a)(e.posts).reverse().map((function(e){return i.a.createElement(O,{message:e.message,like:e.likesCount,id:e.id})}));return i.a.createElement("div",{className:v.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(B,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("ul",{className:v.a.posts},t))})),B=Object(I.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{className:v.a.postsBlockAdd,onSubmit:e.handleSubmit},i.a.createElement("div",{className:v.a.postsBlock1},i.a.createElement(N.a,{component:C.b,name:"newPostText",placeholder:"Hi, how are you sleep?",validate:[y.b,S]})),i.a.createElement("div",{className:v.a.postsBlock2},i.a.createElement("button",null," Add post ")))})),w=A,x=a(14),M=Object(x.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(E.a)(t))}}}))(w),U=function(e){return i.a.createElement("main",{className:p.a.mainContent},i.a.createElement(b,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(M,null))},L=a(29),F=a(296),T=a(7),J=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(U,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(i.a.Component);t.default=Object(T.d)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:E.d,getStatus:E.c,updateStatus:E.e}),L.f,F.a)(J)}}]);
//# sourceMappingURL=3.b157a9e3.chunk.js.map