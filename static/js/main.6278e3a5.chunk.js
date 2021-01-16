(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{45:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var r=n(3),c=n(0),i=n.n(c),o=n(12),a=n.n(o),s=(n(45),n(7)),l=n(8),u=n(10),j=n(9),d=(n(46),n(32)),b=n(37),h=n(14),O="ADD_ITEM",p="REMOVE_ITEM ",f="TOGGLE_ITEM",v="SET_VISIBILITY_FILTER",m="SHOW_ALL",x="SHOW_COMPLETED",y="SHOW_ACTIVE",g=0;var k=n(33),C=n(38),I=n(21),E=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t,e=this;return Object(r.jsx)(k.a,{className:"mb-5 mt-2",children:Object(r.jsx)(k.a.Body,{children:Object(r.jsxs)(C.a,{onSubmit:function(n){var r;(n.preventDefault(),t.value.trim())&&(console.log(t.value),e.props.dispatch((r=t.value,{type:O,id:g++,text:r})),t.value="")},children:[Object(r.jsx)("input",{ref:function(e){t=e}}),Object(r.jsx)(I.a,{className:"ml-5",type:"submit",children:"Add Todo"})]})})})}}]),n}(i.a.Component),S=Object(h.b)()(E),T=n(18),A=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(T.a.Item,{children:Object(r.jsx)(T.a.Link,{eventKey:this.props.children,onClick:this.props.onClick,disabled:this.props.active,children:this.props.children})})})}}]),n}(i.a.Component);var w=Object(h.b)((function(t,e){return{active:e.filter===t.visibilityFilter}}),(function(t,e){return{onClick:function(){var n;t((n=e.filter,{type:v,filter:n}))}}}))(A),L=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(T.a,{variant:"tabs",defaultActiveKey:"All",children:[Object(r.jsx)(w,{filter:m,children:"All"}),Object(r.jsx)(w,{filter:y,children:"Active"}),Object(r.jsx)(w,{filter:x,children:"Completed"})]})})}}]),n}(i.a.Component),_=n(34),F=n(36),W=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log(this.props),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:this.props.id}),Object(r.jsx)("td",{children:Object(r.jsx)("span",{style:{textDecoration:this.props.completed?"line-through":"none"},onClick:this.props.onClick,children:this.props.text})}),Object(r.jsx)("td",{children:Object(r.jsx)(I.a,{variant:"danger",onClick:this.props.removeClick,children:"remove"})})]})}}]),n}(i.a.Component),D=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(F.a,{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:" ID"}),Object(r.jsx)("th",{children:"TodoList"}),Object(r.jsx)("th",{children:"Action"})]})}),Object(r.jsx)("tbody",{children:this.props.items.map((function(e){return Object(r.jsx)(W,Object(_.a)(Object(_.a)({},e),{},{onClick:function(){return t.props.onItemClick(e.id)},removeClick:function(){return t.props.removeClick(e.id)}}),e.id)}))})]})})}}]),n}(i.a.Component);function M(t,e){switch(e){case"SHOW_COMPLETED":return t.filter((function(t){return t.completed}));case"SHOW_ACTIVE":return t.filter((function(t){return!t.completed}));case"SHOW_ALL":default:return t}}var H=Object(h.b)((function(t){return{items:M(t.items,t.visibilityFilter)}}),(function(t){return{onItemClick:function(e){t(function(t){return{type:f,id:t}}(e))},removeClick:function(e){t(function(t){return{type:p,id:t}}(e))}}}))(D),B=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{bg:"info",variant:"dark",children:Object(r.jsx)(d.a.Brand,{children:" Todo Redux App"})}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(S,{}),Object(r.jsx)(L,{}),Object(r.jsx)(H,{})]})]})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(17),N=n(39);var V=Object(J.b)({visibilityFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return e.filter;default:return t}},items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return console.log(e),[].concat(Object(N.a)(t),[{id:e.id,text:e.text,completed:!1}]);case p:return t.filter((function(t){return e.id!==t.id}));case f:return t.map((function(t){return t.id===e.id?Object.assign({},t,{completed:!t.completed}):t}));default:return t}}});var R=function(){var t=localStorage.getItem("state");if(t)return JSON.parse(t)}(),G=Object(J.c)(V,R);G.subscribe((function(){!function(t){var e=JSON.stringify(t);localStorage.setItem("state",e)}(G.getState())})),a.a.render(Object(r.jsx)(h.a,{store:G,children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(B,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.6278e3a5.chunk.js.map