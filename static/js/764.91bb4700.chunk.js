"use strict";(self.webpackChunkslim_mom=self.webpackChunkslim_mom||[]).push([[764],{5764:function(e,a,s){s.r(a),s.d(a,{default:function(){return V}});var t=s(1413),r=s(5861),n=s(4687),i=s.n(n),l=s(2791),c=s(4420),o=s(7689),m=s(1134),d=s(9655),u=s(9273),g=s(8983),x=s(6178),p=s(9776),_=s(9439),v="RegistrationBackground_background__C+cVd",h="RegistrationBackground_strawberry__1xabC",f="RegistrationBackground_banana__cAOzy",b="RegistrationBackground_leaves__WD32F",j=s(5095),w=s(1470),N=s(6009),R=s(1446),P=s(184);var y=function(e){var a=e.children,s=(0,l.useState)(0),t=(0,_.Z)(s,2),r=t[0],n=t[1],i=function(){var e=document.documentElement.clientWidth;n(e)};return(0,l.useEffect)((function(){i(),window.addEventListener("resize",i)}),[]),(0,P.jsxs)("section",{className:v,children:[r<=767?null:r<=1279?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:b,children:(0,P.jsx)("img",{src:N,alt:"Leaves"})}),(0,P.jsx)("div",{className:f,children:(0,P.jsx)("img",{src:w,alt:"Banana"})}),(0,P.jsx)("div",{className:h,children:(0,P.jsx)("img",{src:j,alt:"Strawberry",width:"286px"})})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:b,children:(0,P.jsx)("img",{src:R,alt:"Leaves"})}),(0,P.jsx)("div",{className:f,children:(0,P.jsx)("img",{src:w,alt:"Banana"})}),(0,P.jsx)("div",{className:h,children:(0,P.jsx)("img",{src:j,alt:"Strawberry"})})]}),a]})},k="RegistrationPage_titleFormBox__iAJg6",L="RegistrationPage_titleForm__E+5n0",B="RegistrationPage_labelBox__VEOX1",A="RegistrationPage_labelForm__pmYXE",E="RegistrationPage_inputForm__U31UV",F="RegistrationPage_buttonsBox__EeqgJ",Z="RegistrationPage_buttonLogin__5LsJT",C="RegistrationPage_buttonRegister__73BcE",z="RegistrationPage_error__-pFp8",S="RegistrationPage_form__enUF+",q="RegistrationPage_registerFormBox__i47O+";var V=function(){var e,a,s,n=(0,c.I0)(),l=(0,c.v9)(x.a),_=(0,c.v9)(g.x),v=(0,m.cI)({defaultValues:{name:"",email:"",password:""}}),h=v.register,f=v.handleSubmit,b=v.reset,j=v.watch,w=v.formState.errors,N=j("name"),R=j("email"),V=j("password"),I=function(){var e=(0,r.Z)(i().mark((function e(a){var s,t,r,c,o,m,g,x,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=a.name,t=a.email,r=a.password,null===l||void 0===l||!l.countedCalories){e.next=10;break}return c=l.countedCalories,o=l.notAllowedFoodCategories,m=l.formData,g={name:s,email:t.toLowerCase(),password:r,calorie:c,data:m,notRecommendedProduct:o},e.next=6,n((0,u.l9)(g));case 6:x=e.sent,d.Am.error(x.payload.message),e.next=14;break;case 10:return e.next=12,n((0,u.l9)({name:s,email:t.toLowerCase(),password:r}));case 12:p=e.sent,d.Am.error(p.payload.message);case 14:b();case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),J=(0,o.s0)();return(0,P.jsxs)(y,{children:[_?(0,P.jsx)(p.a,{}):null,(0,P.jsx)("div",{className:q,children:(0,P.jsxs)("form",{className:S,onSubmit:f(I),children:[(0,P.jsx)("div",{className:k,children:(0,P.jsx)("h1",{className:L,children:"Register"})}),(0,P.jsxs)("div",{className:B,children:[(0,P.jsxs)("label",{className:A,children:["Name *",(0,P.jsx)("input",(0,t.Z)({className:E,value:N,type:"text"},h("name",{required:{value:!0,message:"Please enter your name"},minLength:{value:3,message:"Name must be at least 3 characters"},maxLength:{value:254,message:"Name must not exceed 254 characters"}}))),w.name&&(0,P.jsx)("p",{className:z,children:null===(e=w.name)||void 0===e?void 0:e.message})]}),(0,P.jsxs)("label",{className:A,children:["Email *",(0,P.jsx)("input",(0,t.Z)({className:E,value:R,type:"email"},h("email",{required:{value:!0,message:"Please enter your email address"},pattern:{value:/^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,message:"Invalid email format"},minLength:{value:3,message:"Email must be at least 3 characters"},maxLength:{value:254,message:"Email must not exceed 254 characters"}}))),w.email&&(0,P.jsx)("p",{className:z,children:null===(a=w.email)||void 0===a?void 0:a.message})]}),(0,P.jsxs)("label",{className:A,children:["Password *",(0,P.jsx)("input",(0,t.Z)({className:E,value:V,type:"password"},h("password",{minLength:{value:8,message:"Your password must be at least 8 characters"},maxLength:{value:100,message:"Your password must not exceed 100 characters"},required:{value:!0,message:"Please enter your password"},pattern:{value:/(?=.*[A-Za-z])(?=.*[0-9])/,message:"Password must include letters and numbers"}}))),w.password&&(0,P.jsx)("p",{className:z,children:null===(s=w.password)||void 0===s?void 0:s.message})]})]}),(0,P.jsxs)("div",{className:F,children:[(0,P.jsx)("button",{className:C,type:"submit",children:"Register"}),(0,P.jsx)("button",{type:"button",className:Z,onClick:function(){return J("/login")},children:"Log in"})]})]})})]})}},6178:function(e,a,s){s.d(a,{a:function(){return t}});var t=function(e){return e.calculate}},8983:function(e,a,s){s.d(a,{x:function(){return t}});var t=function(e){return e.loading.isLoading}},1470:function(e,a,s){e.exports=s.p+"static/media/desktop-banana-1x.a5b24d1304e71a87dd46.png"},1446:function(e,a,s){e.exports=s.p+"static/media/desktop-leafs-1x.1d0977f6a1a80da94e8f.png"},5095:function(e,a,s){e.exports=s.p+"static/media/Strawberry-Big-PNG.015b18cc0cce75f47ce1.png"},6009:function(e,a,s){e.exports=s.p+"static/media/tablet-leaves-flipped-1x.ab2ea6027bcd393c10fa.png"}}]);
//# sourceMappingURL=764.91bb4700.chunk.js.map