(this["webpackJsonptest-of-yal"]=this["webpackJsonptest-of-yal"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n(6),a=n.n(s),i=(n(34),n(22)),l=n(23),o=n(28),u=n(27),d=(n(35),n(13)),j=function(e){var t=e.list,n=t.map((function(e){return new Date(e.dob).getMonth()})).filter((function(e,t,n){return n.indexOf(e)===t})),c=["December","January","February","March","April","May","June","July","August","September","November"];return Object(r.jsxs)("div",{className:"block-birthday",children:[Object(r.jsx)("h1",{children:"Employees birthday"}),0!==t.length?Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:c.find((function(t,n){return n===e}))})}),Object(r.jsx)("ul",{children:t.map((function(t){return e===new Date(t.dob).getMonth()&&Object(r.jsx)("li",{children:Object(r.jsxs)("span",{children:[t.lastName," ",t.firstName]})},d())}))})]},d())}))}):Object(r.jsx)("div",{children:"No selected employees"})]})},h=(n(44),n(13)),b=function(e){var t=e.onUsers,n=e.onHandleChange,c=t.users,s=new Array(26).fill(1).map((function(e,t){return String.fromCharCode(65+t)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Employees"}),Object(r.jsx)("ul",{className:"block-users",children:s.map((function(e){return Object(r.jsxs)("li",{className:"block-users__item",children:[Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:e})}),c.some((function(t){return t.lastName.startsWith(e)}))?Object(r.jsx)("ul",{className:"users",children:c.map((function(t,c){return t.lastName.startsWith(e)&&Object(r.jsxs)("li",{className:"users-item",children:[Object(r.jsxs)("span",{children:[t.firstName," ",t.lastName]}),Object(r.jsx)("input",{type:"checkbox",id:t.id,name:"selected".concat(c),checked:t.selected,onChange:n})]},t.id)}))}):Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:Object(r.jsx)("span",{children:"----"})})})]},h())}))})]})},p=(n(45),n(7)),f="USERS_FETCH_DATA_REQUEST",O="USERS_FETCH_DATA_SUCCES",m="USERS_FETCH_DATA_ERROR",y="CHANGE_SELECTED",x=n(52),g=function(e){return function(t){t({type:f}),x.get(e).then((function(e){t(function(e){return{type:O,payload:{users:e}}}(e.data))})).catch((function(e){return t(function(e){return{type:m,payload:{error:e}}}(e))}))}},v=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchData("https://yalantis-react-school-api.yalantis.com/api/task0/users")}},{key:"render",value:function(){var e=this.props.handleChangeSelected;return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(b,{onUsers:this.props.state,onHandleChange:e}),Object(r.jsx)(j,{list:this.props.state.listBirthday})]})}}]),n}(c.Component),S=Object(p.b)((function(e){return{state:e}}),(function(e){return{fetchData:function(t){return e(g(t))},handleChangeSelected:function(t){return e(function(e){return{type:y,payload:{item:e.target}}}(t))}}}))(v),E=n(4),N=n(25),C=n(26),_=n(12),k=n(3),D={users:[],listBirthday:[],loading:!1,error:null},A=Object(E.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return Object(k.a)(Object(k.a)({},e),{},{loading:!0,error:null});case O:var c=[],s=localStorage.getItem("listB");void 0!==s&&null!==s&&(c=JSON.parse(s));var a=r.users.map((function(e){var t=!!c.find((function(t){return t.id===e.id}));return Object(k.a)(Object(k.a)({},e),{},{selected:t})}));return Object(k.a)(Object(k.a)({},e),{},{users:a,loading:!1,error:null,listBirthday:c});case m:return Object(k.a)(Object(k.a)({},e),{},{loading:!1,error:r.error});case y:var i,l=r.item,o=l.checked,u=l.id,d=Object(_.a)(e.users);return d.find((function(e){return e.id===u&&(e.selected=o)})),i=d.filter((function(e){return!0===e.selected})),localStorage.setItem("listB",JSON.stringify(i)),Object(k.a)(Object(k.a)({},e),{},{users:d,listBirthday:Object(_.a)(i)});default:return e}}),Object(N.composeWithDevTools)(Object(E.applyMiddleware)(C.a)));a.a.render(Object(r.jsx)(p.a,{store:A,children:Object(r.jsx)(S,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.da00f523.chunk.js.map