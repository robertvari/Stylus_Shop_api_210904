(this.webpackJsonpstylus_shop_ui=this.webpackJsonpstylus_shop_ui||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(35),r=c.n(s),i=c(5),o=c.n(i),j=c(10),l=c(2),u=c(3),b=c(4),d=c(7),O=c.n(d),h=c(25),p=c(0),x=Object(n.createContext)(!0),m=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(0),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(n.useState)(0),b=Object(l.a)(u,2),d=b[0],O=b[1],m=Object(n.useState)(!1),f=Object(l.a)(m,2),v=f[0],g=f[1],N=function(e){s(e),localStorage.setItem("shopping_list",JSON.stringify(e))};return Object(n.useEffect)((function(){!function(){for(var e=0,t=0;t<a.length;t++)e+=a[t].quantity;O(e)}(),function(){for(var e=0,t=0;t<a.length;t++){var c=a[t];e+=c.price*c.quantity}j(e)}()}),[a]),Object(n.useEffect)((function(){var e=localStorage.getItem("shopping_list");e&&s(JSON.parse(e))}),[]),Object(p.jsx)(x.Provider,{value:{shopping_list:a,total:o,count:d,visible:v,set_visible:g,add_to_cart:function(e){var t,c=e,n=Object(h.a)(a);if(t=e.id,a.find((function(e){return e.id===t})))for(var s=0;s<n.length;s++){var r=n[s];if(r.id===e.id){r.quantity++;break}}else c.quantity=1,n.push(c);N(n),g(!0)},remove_from_cart:function(e){var t=a.filter((function(t){return t.id!==e}));N(t)},set_quantity:function(e,t){for(var c=Object(h.a)(a),n=0;n<c.length;n++){var s=c[n];if(s.id===e){var r=s.quantity+t;r>0&&(s.quantity=r);break}}N(c)},clear_shopping_list:function(){N([])}},children:e.children})},f=c(72),v=Object(n.createContext)(!0),g=function(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),u=i[0],b=i[1],d=Object(f.a)(),h=Object(l.a)(d,3),x=h[0],m=h[1],g=h[2],N=Object(n.useState)(""),y=Object(l.a)(N,2),_=y[0],C=y[1],S=Object(n.useState)(""),k=Object(l.a)(S,2),E=k[0],w=k[1],P=Object(n.useState)(""),T=Object(l.a)(P,2),A=T[0],R=T[1],I=Object(n.useState)(""),U=Object(l.a)(I,2),F=U[0],L=U[1],q=Object(n.useState)(""),D=Object(l.a)(q,2),B=D[0],M=D[1],Y=Object(n.useState)(""),G=Object(l.a)(Y,2),H=G[0],W=G[1],J=Object(n.useState)(""),Q=Object(l.a)(J,2),z=Q[0],$=Q[1],K=Object(n.useState)(""),X=Object(l.a)(K,2),V=X[0],Z=X[1],ee=Object(n.useState)(null),te=Object(l.a)(ee,2),ce=te[0],ne=te[1],ae=Object(n.useState)(""),se=Object(l.a)(ae,2),re=se[0],ie=se[1],oe="http://139.162.163.23",je=function(){x.token&&(b(x.token),s(!0))},le=function(){var e=Object(j.a)(o.a.mark((function e(t,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"post",url:"".concat(oe,"/api/auth/login/"),data:{email:t,password:c}}).then((function(e){return t=e.data.key,b(t),m("token",t,{path:"/",sameSite:"strict",maxAge:86400}),void s(!0);var t})).catch((function(e){return console.log(e.response.status)}));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),ue=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"post",url:"".concat(oe,"/api/auth/logout/"),headers:{authorization:"token ".concat(u)}});case 2:g("token",{path:"/"}),b(null),s(!1),C(""),w(""),R(""),ie(""),Z(""),ne(null),$(""),W(""),M(""),L("");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(j.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()({method:"post",url:"".concat(oe,"/api/auth/registration/"),data:{email:t,password1:c,password2:c}});case 3:return n=e.sent,e.abrupt("return",201===n.status);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c){return e.apply(this,arguments)}}(),de=function(){O()({method:"get",url:"".concat(oe,"/api/users/profile/"),headers:{authorization:"token ".concat(u)}}).then((function(e){e.data.profile;ne(e.data.user_id),C(e.data.email),w(e.data.profile.first_name),R(e.data.profile.last_name),L(e.data.profile.company),M(e.data.profile.address),W(e.data.profile.city),$(e.data.profile.post_code),Z(e.data.profile.phone),ie(e.data.profile.slug)}))},Oe=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"patch",url:"".concat(oe,"/api/users/profile/"),headers:{authorization:"token ".concat(u)},data:{first_name:E,last_name:A,company:F,address:B,city:H,post_code:z,phone:V}});case 2:de();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){je()}),[]),Object(n.useEffect)((function(){a&&de()}),[a]),Object(p.jsx)(v.Provider,{value:{log_in_user:le,logout_user:ue,register_user:be,update_profile:Oe,check_token:je,logged_in:a,user_id:ce,email:_,set_email:C,first_name:E,set_first_name:w,last_name:A,set_last_name:R,company:F,set_company:L,address:B,set_address:M,city:H,set_city:W,post_code:z,set_post_code:$,phone:V,set_phone:Z,profile_url:re},children:e.children})};function N(e){var t=e.item_data;return Object(p.jsxs)(u.b,{to:"/categories/".concat(t.title),className:"menu-item",children:[t.title.toUpperCase(),t.items&&Object(p.jsx)("i",{className:"fas fa-caret-down"}),t.items&&Object(p.jsx)("div",{className:"popup-menu",children:t.items.map((function(e){return Object(p.jsx)(u.b,{to:"/categories/".concat(t.title,"/").concat(e),className:"menu-item",children:e},e)}))})]})}function y(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){O()({method:"get",url:"".concat("http://139.162.163.23","/api/categories/")}).then((function(e){return a(e.data)}))}),[]),Object(p.jsx)("div",{className:"menu",children:c.map((function(e){return Object(p.jsx)(N,{item_data:e},e.id)}))})}function _(){var e=Object(n.useContext)(x),t=e.count,c=e.set_visible;return Object(p.jsxs)("button",{className:"cart-button",onClick:function(e){return c(!0)},children:[Object(p.jsx)("i",{className:"fas fa-shopping-cart"})," CART",t>0&&Object(p.jsx)("div",{className:"item-count",children:t})]})}var C=function(e){var t=Object(n.useContext)(v),c=t.logged_in,a=t.logout_user,s=Object(n.useState)(null),r=Object(l.a)(s,2),i=r[0],d=r[1],h=Object(b.g)(),x=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:h.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()({method:"get",url:"".concat("http://139.162.163.23","/api/site-info/")}).then((function(e){return d(e.data)}))}),[]),Object(p.jsx)("div",{className:"header-container",children:Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsxs)("div",{className:"title-container",children:[Object(p.jsx)(u.b,{to:"/",children:Object(p.jsx)("h1",{children:i&&i.name})}),Object(p.jsxs)("div",{children:[c?Object(p.jsxs)("div",{className:"logged-in-container",children:[Object(p.jsx)(u.b,{to:"/users/profile",children:Object(p.jsx)("i",{className:"fas fa-user"})}),Object(p.jsx)("button",{onClick:x,children:"Log Out"})]}):Object(p.jsxs)("small",{className:"sign-in-container",children:[Object(p.jsx)(u.b,{to:"/users/login",children:"Sign in"})," or ",Object(p.jsx)(u.b,{to:"/users/registration",children:"Create an Account"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"search-box",children:[Object(p.jsx)("input",{type:"text",placeholder:"Search all products..."}),Object(p.jsx)("i",{className:"fas fa-search"})]}),Object(p.jsx)(_,{})]})]}),Object(p.jsx)(y,{})]})})};var S=function(e){return Object(p.jsx)("div",{className:"footer-container",children:Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"QUICK LINKS"}),Object(p.jsx)("p",{children:"Search"}),Object(p.jsx)("p",{children:"Contact"}),Object(p.jsx)("p",{children:"About Us"}),Object(p.jsx)("p",{children:"News"}),Object(p.jsx)("p",{children:"FAQ"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"GET IN TOUCH"}),Object(p.jsx)("p",{children:"Sign up to stay in the loop. Receive updates, access to exclusive deals, and more."})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"NEWSLETTER"}),Object(p.jsxs)("div",{className:"newsletter-box",children:[Object(p.jsx)("input",{type:"email",placeholder:"Email"}),Object(p.jsx)("button",{children:"SIGN UP"})]})]})]})})},k=Object(n.createContext)(!0),E=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){O()({method:"get",url:"".concat("http://139.162.163.23","/api/shop-items/")}).then((function(e){return s(e.data)}))}),[]),Object(p.jsx)(k.Provider,{value:{items:a},children:e.children})};var w=function(e){var t=Object(n.useContext)(k).items,c=Object(n.useState)([]),a=Object(l.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(0),o=Object(l.a)(i,2),j=o[0],b=o[1],d=function(e){var t=j;(t+=e)>s.length-1?t=0:t<0&&(t=s.length-1),b(t)};return Object(n.useEffect)((function(){r(t.filter((function(e){return e.featured})))}),[t]),0===t.length?null:Object(p.jsxs)("div",{className:"slider-container",children:[Object(p.jsx)(u.b,{to:"/details/".concat(t[j].slug),children:Object(p.jsx)("div",{className:"image-container",children:s.map((function(e,t){return Object(p.jsx)("img",{className:"slider-image ".concat(j===t?"active":""),src:e.image,alt:""},e.id)}))})}),Object(p.jsx)("i",{className:"fas fa-chevron-left left-step-button",onClick:function(e){return d(-1)}}),Object(p.jsx)("i",{className:"fas fa-chevron-right right-step-button",onClick:function(e){return d(1)}})]})};function P(e){var t=e.title,c=e.image;return Object(p.jsxs)(u.b,{className:"category-card",children:[Object(p.jsx)("div",{className:"image-container",style:{backgroundImage:"url(".concat(c,")")}}),Object(p.jsx)("small",{children:t})]})}var T=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){O()({method:"get",url:"".concat("http://139.162.163.23","/api/categories/")}).then((function(e){return s(e.data)}))}),[]),Object(p.jsxs)("div",{className:"collection-container",children:[Object(p.jsx)("h3",{children:"SHOP FOR"}),Object(p.jsx)("div",{className:"item-container",children:a.map((function(e){return Object(p.jsx)(P,{title:e.title,image:e.image},e.id)}))})]})},A=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var R=function(e){var t=e.data;return Object(p.jsxs)(u.b,{to:"/details/".concat(t.slug),className:"item-card",children:[Object(p.jsx)("img",{src:t.image,alt:""}),Object(p.jsx)("div",{className:"title",children:t.title}),Object(p.jsxs)("div",{className:"price",children:["$",A(t.price)]})]})};var I=function(e){var t=e.title,c=e.items;return Object(p.jsxs)("div",{className:"collection-container",children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("div",{className:"item-container",children:c.map((function(e){return Object(p.jsx)(R,{data:e},e.id)}))})]})};var U=function(e){var t=Object(n.useContext)(k).items,c=Object(n.useState)([]),a=Object(l.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)([]),o=Object(l.a)(i,2),j=o[0],u=o[1],b=Object(n.useState)([]),d=Object(l.a)(b,2),h=d[0],x=d[1];return Object(n.useEffect)((function(){O()({method:"get",url:"".concat("http://139.162.163.23","/analog")}).then((function(e){return u(e.data)})),O()({method:"get",url:"".concat("http://139.162.163.23","/leica_m")}).then((function(e){return x(e.data)}))}),[]),Object(n.useEffect)((function(){r(t.filter((function(e){return e.featured})))}),[t]),Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsx)("div",{className:"content-offset"}),Object(p.jsx)(w,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(T,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(I,{title:"FEATURED COLLECTION",items:s}),Object(p.jsx)("hr",{}),Object(p.jsx)(I,{title:"ANALOG CAMERAS",items:j}),Object(p.jsx)("hr",{}),Object(p.jsx)(I,{title:"LEICA M",items:h})]})};var F=function(e){var t=Object(n.useContext)(v).log_in_user,c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),O=d[0],h=d[1],x=Object(b.g)(),m=function(){var e=Object(j.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),0!==s.length&&0!==O.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t(s,O);case 5:x.push("/users/profile");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsx)("div",{className:"content-offset"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("h3",{children:"LOGIN"}),Object(p.jsx)("input",{type:"email",placeholder:"Email",value:s,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("input",{type:"password",placeholder:"Password",value:O,onChange:function(e){return h(e.target.value)}}),Object(p.jsx)("small",{children:Object(p.jsx)(u.b,{to:"/users/password-reset",children:"Forgot your password?"})}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"inverted",onClick:m,children:"SIGN IN"}),Object(p.jsx)("br",{}),Object(p.jsxs)("small",{children:["or ",Object(p.jsx)(u.b,{to:"/",children:"Return to Store"})]})]})]})};var L=function(e){var t=Object(n.useContext)(v).register_user,c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),O=d[0],h=d[1],x=Object(n.useState)(""),m=Object(l.a)(x,2),f=m[0],g=m[1],N=Object(n.useState)(null),y=Object(l.a)(N,2),_=y[0],C=y[1],S=Object(n.useState)(!1),k=Object(l.a)(S,2),E=k[0],w=k[1],P=Object(b.g)(),T=function(){var e=Object(j.a)(o.a.mark((function e(c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),C(null),0!==s.length){e.next=5;break}return C("Email must be filled."),e.abrupt("return");case 5:if(0!==O.length){e.next=8;break}return C("Password is invalid"),e.abrupt("return");case 8:return f!==O&&C("Passwords doesn't match"),w(!0),e.next=12,t(s,O);case 12:if(n=e.sent,w(!1),n){e.next=17;break}return C("This email already exists"),e.abrupt("return");case 17:P.push("/users/registration-email-sent");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsx)("div",{className:"content-offset"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("h3",{children:"CREATE ACCOUNT"}),Object(p.jsx)("input",{type:"email",placeholder:"Email",value:s,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("input",{type:"password",placeholder:"Password",value:O,onChange:function(e){return h(e.target.value)}}),Object(p.jsx)("input",{type:"password",placeholder:"Password confirm",value:f,onChange:function(e){return g(e.target.value)}}),Object(p.jsx)("br",{}),_&&Object(p.jsx)("small",{className:"error-message",children:_}),E?Object(p.jsx)("div",{children:"Waiting..."}):Object(p.jsx)("button",{className:"inverted",onClick:T,children:"CREATE"}),Object(p.jsx)("br",{}),Object(p.jsxs)("small",{children:["or ",Object(p.jsx)(u.b,{to:"/",children:"Return to Store"})]})]})]})};var q=function(e){var t=Object(b.h)().category,c=Object(b.h)().subcategory,a=Object(n.useContext)(k).items;return Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsx)("div",{className:"content-offset"}),Object(p.jsx)("h3",{children:t}),Object(p.jsx)("div",{className:"item-list-container",children:a.filter((function(e){return c?e.category===t&&c===e.subcategory:e.category===t})).map((function(e){return Object(p.jsx)(R,{data:e},e.id)}))})]})};function D(e){var t=e.data,c=Object(n.useContext)(x).add_to_cart;return Object(p.jsxs)("div",{className:"item-details-container",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:t.image,alt:""})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:t.title}),Object(p.jsxs)("h2",{children:["$",A(t.price)]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"button-container",children:[Object(p.jsxs)("button",{onClick:function(e){return c(t)},children:[Object(p.jsx)("i",{className:"fas fa-cart-plus"})," ADD TO CART"]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"inverted",children:"BUY IT NOW"})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:t.description})]})]})}var B=function(e){var t=Object(b.h)().slug,c=Object(n.useContext)(k).items,a=Object(n.useState)(null),s=Object(l.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){!function(){if(t){var e=c.find((function(e){return e.slug===t}));e&&i(e)}else i(null)}()}),[c]),Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsx)("div",{className:"content-offset"}),r&&Object(p.jsx)(D,{data:r})]})};var M=function(e){return Object(p.jsx)("div",{className:"content-container",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("h3",{children:"RESET YOUR PASSWORD"}),Object(p.jsx)("small",{children:"We will send you an email to reset your password."}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"email",placeholder:"Email"}),Object(p.jsx)("button",{className:"inverted",children:"SUBMIT"}),Object(p.jsx)("br",{}),Object(p.jsxs)("small",{children:["or ",Object(p.jsx)(u.b,{to:"/users/login",children:"Cancel"})]})]})})};function Y(e){var t=e.quantity,c=e.item_id,a=Object(n.useContext)(x).set_quantity;return Object(p.jsxs)("div",{className:"quantity-container",children:[Object(p.jsx)("i",{className:"far fa-minus-square",onClick:function(){return a(c,-1)}}),Object(p.jsx)("div",{children:t}),Object(p.jsx)("i",{className:"far fa-plus-square",onClick:function(){return a(c,1)}})]})}var G=function(e){var t=e.data,c=Object(n.useContext)(x).remove_from_cart;return Object(p.jsxs)("div",{className:"cart-item-container",children:[Object(p.jsx)("img",{src:t.image,className:"cart-item-image",alt:""}),Object(p.jsx)("div",{className:"cart-item-title",children:t.title}),Object(p.jsx)(Y,{quantity:t.quantity,item_id:t.id}),Object(p.jsxs)("h3",{className:"cart-item-price",children:["$",A(t.price)]}),Object(p.jsx)("i",{className:"fas fa-trash-alt delete-item-button",onClick:function(e){return c(t.id)}})]})};var H=function(e){var t=Object(n.useContext)(x),c=t.shopping_list,a=t.total,s=t.count,r=t.visible,i=t.set_visible;return r?Object(p.jsx)("div",{className:"cart-container",onClick:function(e){return i(!1)},children:Object(p.jsx)("div",{className:"cart-details",onClick:function(e){return e.stopPropagation()},children:s>0?Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("h3",{children:"SHOPPING CART"}),Object(p.jsx)("hr",{}),c.map((function(e){return Object(p.jsx)(G,{data:e},e.id)})),Object(p.jsx)("hr",{}),Object(p.jsxs)("h2",{className:"price",children:["$",A(a)]}),Object(p.jsx)("small",{className:"taxes",children:"Shipping, taxes, and discounts will be calculated at checkout."}),Object(p.jsx)(u.b,{to:"/checkout",className:"checkout-button",children:Object(p.jsx)("button",{className:"inverted",onClick:function(e){return i(!1)},children:"CHECK OUT"})})]}):Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("h3",{children:"YOUR CART IS CURRENTLY EMPTY."}),Object(p.jsxs)("p",{children:["Continue browsing ",Object(p.jsx)(u.b,{to:"/",children:"here."}),"."]})]})})}):null},W=c(14);var J=function(e){var t=Object(W.useStripe)(),c=Object(W.useElements)(),a=Object(b.g)(),s=Object(n.useContext)(x),r=s.shopping_list,i=s.clear_shopping_list,l=s.total,u=Object(n.useContext)(v),d=u.first_name,h=u.last_name,m=u.company,f=u.address,g=u.apartment,N=u.city,y=u.post_code,_=u.phone,C=u.email,S=u.user_id,k=function(){var e=Object(j.a)(o.a.mark((function e(n){var s,j,u,b,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t&&c){e.next=3;break}return e.abrupt("return");case 3:return s=c.getElement(W.CardElement),e.next=6,t.createPaymentMethod({type:"card",card:s,billing_details:{name:d+" "+h,email:C,phone:_,address:{city:N,country:"HU",postal_code:y,line1:f}}});case 6:if(j=e.sent,u=j.error,b=j.paymentMethod,!u){e.next=13;break}console.log("[error]",u),e.next=18;break;case 13:return p=b.id,e.next=16,O()({method:"post",url:"".concat("http://139.162.163.23","/api/order/"),data:{payment_id:p,amount:100*l,shopping_list:r,customer:{user_id:S,email:C,first_name:d,last_name:h,company:m,address:f,apartment:g,city:N,post_code:y,phone:_}}});case 16:"succeeded"===e.sent.data.status&&(i(),a.push("/payment_success"));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:k,children:[Object(p.jsx)(W.CardElement,{options:{hidePostalCode:!0}}),Object(p.jsxs)("button",{type:"submit",disabled:!t,children:[Object(p.jsx)("i",{className:"far fa-credit-card"}),"Check out"]})]})},Q=c(38),z=Object(Q.a)("pk_test_51HyehYF9rSH7raBvQsbdg02wPMcRm0RtwPGOxBNlB0BNRdzAQIpSeptP48fGtvNBQDAwckdPkJzTMQUPFrlYWkH500JF4oGXW5");var $=function(e){var t=Object(n.useContext)(x),c=t.shopping_list,a=t.total,s=t.count,r=Object(n.useContext)(v),i=r.email,o=r.first_name,j=r.last_name,l=r.company,b=r.address,d=r.city,O=r.post_code,h=r.phone,m=r.logged_in;return Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsx)("div",{className:"content-offset"}),Object(p.jsx)("div",{className:"checkout-container",children:s>0?Object(p.jsxs)(n.Fragment,{children:[Object(p.jsxs)("div",{className:"costumer-details-container",children:[Object(p.jsx)("h3",{children:"Contact information"}),Object(p.jsx)("hr",{}),!m&&Object(p.jsxs)("small",{className:"have-an-account",children:["Already have an account? ",Object(p.jsx)(u.b,{to:"/users/login",children:"Log in"})]}),i?Object(p.jsx)("input",{type:"email",placeholder:"Email",value:i}):Object(p.jsx)("input",{type:"email",placeholder:"Email"}),Object(p.jsx)("h4",{children:"Shipping address"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"name-container",children:[o?Object(p.jsx)("input",{type:"text",placeholder:"First Name",value:o}):Object(p.jsx)("input",{type:"text",placeholder:"First Name"}),j?Object(p.jsx)("input",{type:"text",placeholder:"Last Name",value:j}):Object(p.jsx)("input",{type:"text",placeholder:"Last Name"})]}),l?Object(p.jsx)("input",{type:"text",placeholder:"Company",value:l}):Object(p.jsx)("input",{type:"text",placeholder:"Company"}),b?Object(p.jsx)("input",{type:"text",placeholder:"Address",value:b}):Object(p.jsx)("input",{type:"text",placeholder:"Address"}),d?Object(p.jsx)("input",{type:"text",placeholder:"City",value:d}):Object(p.jsx)("input",{type:"text",placeholder:"City"}),O?Object(p.jsx)("input",{type:"text",placeholder:"Post code",value:O}):Object(p.jsx)("input",{type:"text",placeholder:"Post code"}),h?Object(p.jsx)("input",{type:"text",placeholder:"Phone",value:h}):Object(p.jsx)("input",{type:"text",placeholder:"Phone"})]}),Object(p.jsxs)("div",{className:"shopping-cart-container",children:[c.map((function(e){return Object(p.jsx)(G,{data:e},e.id)})),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"total-price-container",children:[Object(p.jsx)("h3",{children:"Total"}),Object(p.jsxs)("h2",{children:["$",A(a)]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"card-data-container",children:Object(p.jsx)(W.Elements,{stripe:z,children:Object(p.jsx)(J,{})})})]})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"YOUR CART IS CURRENTLY EMPTY."}),Object(p.jsxs)("p",{children:["Continue browsing ",Object(p.jsx)(u.b,{to:"/",children:"here."}),"."]})]})})]})};var K=function(e){var t=Object(n.useContext)(v),c=t.first_name,a=t.set_first_name,s=t.last_name,r=t.set_last_name,i=t.company,o=t.set_company,j=t.address,l=t.set_address,u=t.city,b=t.set_city,d=t.post_code,O=t.set_post_code,h=t.phone,x=t.set_phone,m=t.update_profile;return Object(p.jsxs)("div",{className:"content-container",children:[Object(p.jsx)("div",{className:"content-offset"}),Object(p.jsxs)("form",{className:"profile-form",children:[Object(p.jsx)("h2",{children:"Profile"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"name-container",children:[Object(p.jsx)("input",{type:"text",placeholder:"First name",value:c,onChange:function(e){return a(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"Last name",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(p.jsx)("input",{type:"text",placeholder:"Company",value:i,onChange:function(e){return o(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"Address",value:j,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"City",value:u,onChange:function(e){return b(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"Post code",value:d,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"Phone",value:h,onChange:function(e){return x(e.target.value)}}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{className:"inverted",onClick:function(e){e.preventDefault(),m()},children:"UPDATE"})]})]})};var X=function(e){return Object(p.jsx)("div",{className:"center-page-container",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Thank you for your registration"}),Object(p.jsx)("p",{children:"We sent a confirmation link to your email address."})]})})},V=c(21),Z=c(39),ee=["component"];var te=function(e){var t=e.component,c=Object(Z.a)(e,ee),a=Object(n.useContext)(v),s=a.logged_in,r=a.check_token,i=Object(n.useState)(!0),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(n.useEffect)((function(){r(),u(!1)}),[]),j?null:Object(p.jsx)(b.b,Object(V.a)(Object(V.a)({},c),{},{render:function(e){return s?Object(p.jsx)(t,Object(V.a)({},e)):Object(p.jsx)(b.a,{to:"/users/login"})}}))};var ce=function(){return Object(p.jsx)(u.a,{children:Object(p.jsx)(g,{children:Object(p.jsx)(E,{children:Object(p.jsx)(m,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(H,{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(C,{}),Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/categories/:category/:subcategory?",component:q}),Object(p.jsx)(b.b,{path:"/details/:slug",component:B}),Object(p.jsx)(b.b,{path:"/checkout/",component:$}),Object(p.jsx)(b.b,{path:"/users/login",component:F}),Object(p.jsx)(b.b,{path:"/users/registration",component:L}),Object(p.jsx)(b.b,{path:"/users/password-reset",component:M}),Object(p.jsx)(b.b,{path:"/users/registration-email-sent",component:X}),Object(p.jsx)(te,{path:"/users/profile",component:K}),Object(p.jsx)(b.b,{path:"/",component:U})]})]}),Object(p.jsx)(S,{})]})})})})})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(69);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[70,1,2]]]);
//# sourceMappingURL=main.eefc0f45.chunk.js.map