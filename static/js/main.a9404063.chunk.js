(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(26),n=c(8),a=(c(36),c(37),c(3)),r=(c(38),c(1)),l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},i=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},j=c(5),o=c(9),d=c(0),b=c(4),u=c(7),h="https://mate-academy.github.io/react_people-table/api/people.json";function x(e){return new Promise((function(t){return setTimeout(t,e)}))}function O(){return(O=Object(u.a)(Object(b.a)().mark((function e(){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x(500).then((function(){return fetch(h)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(40);var m=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},p=c(10),f=c.n(p),v=function(e){var t=e.person,c=Object(a.q)().slug;return Object(r.jsx)(n.b,{to:c?"../".concat(t.slug):t.slug,className:f()({"has-text-danger":"f"===t.sex}),children:t.name})},g=c(24),N=c(27);function y(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(j.a)(e,2),s=t[0],n=t[1];null===n?c.delete(s):Array.isArray(n)?(c.delete(s),n.forEach((function(e){c.append(s,e)}))):c.set(s,n)})),c.toString()}var w=["children","params"],k=function(e){var t=e.children,c=e.params,s=Object(N.a)(e,w),a=Object(n.d)(),l=Object(j.a)(a,1)[0];return Object(r.jsx)(n.b,Object(g.a)(Object(g.a)({to:{search:y(l,c)}},s),{},{children:t}))},F=function(e){var t=e.sortBy,c=Object(n.d)(),s=Object(j.a)(c,1)[0],a="desc"===s.get("order"),l=s.get("sort")||"",i={order:t!==l||a?null:"desc",sort:t===l&&a?null:t};return Object(r.jsx)(k,{params:i,children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:f()("fas",{"fa-sort":l!==t,"fa-sort-up":l===t&&!a,"fa-sort-down":l===t&&a})})})})},S=function(e){var t=e.people,c=Object(a.q)().slug,s=function(e){var c=e&&function(e){return t.find((function(t){return t.name===e}))}(e);return e?Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(v,{person:c}):Object(r.jsx)(r.Fragment,{children:e})}):Object(r.jsx)(r.Fragment,{children:"-"})};return Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:Object(r.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(r.jsx)(F,{sortBy:"name"})]})}),Object(r.jsx)("th",{children:Object(r.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(r.jsx)(F,{sortBy:"sex"})]})}),Object(r.jsx)("th",{children:Object(r.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(r.jsx)(F,{sortBy:"born"})]})}),Object(r.jsx)("th",{children:Object(r.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(r.jsx)(F,{sortBy:"died"})]})}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"person",className:f()({"has-background-warning":e.slug===c}),children:[Object(r.jsx)("td",{children:Object(r.jsx)(v,{person:e})}),Object(r.jsx)("td",{children:e.sex}),Object(r.jsx)("td",{children:e.born}),Object(r.jsx)("td",{children:e.died}),Object(r.jsx)("td",{children:s(e.motherName)}),Object(r.jsx)("td",{children:s(e.fatherName)})]},e.slug)}))})]})},L=function(e){return e.sex="sex",e.query="query",e.centuries="centuries",e.sort="sort",e.order="order",e}({}),A=["16","17","18","19","20"],P=function(){var e=Object(n.d)(),t=Object(j.a)(e,2),c=t[0],s=t[1],a=c.get(L.sex),l=c.getAll(L.centuries);return Object(r.jsxs)("nav",{className:"panel",children:[Object(r.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(r.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(r.jsx)(k,{className:f()({"is-active":!a}),params:{sex:null},children:"All"}),Object(r.jsx)(k,{className:f()({"is-active":"m"===a}),params:{sex:"m"},children:"Male"}),Object(r.jsx)(k,{className:f()({"is-active":"f"===a}),params:{sex:"f"},children:"Female"})]}),Object(r.jsx)("div",{className:"panel-block",children:Object(r.jsxs)("p",{className:"control has-icons-left",children:[Object(r.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",onChange:function(e){s(y(c,{query:e.target.value||null}))}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(r.jsx)("div",{className:"panel-block",children:Object(r.jsx)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:Object(r.jsxs)("div",{className:"level-left",children:[A.map((function(e){return Object(r.jsx)(k,{"data-cy":"century",className:f()("button mr-1",{"is-info":l.includes(e)}),params:{centuries:l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(o.a)(l),[e])},children:e})})),Object(r.jsx)("div",{className:"level-right ml-4",children:Object(r.jsx)(k,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})})}),Object(r.jsx)("div",{className:"panel-block",children:Object(r.jsx)(k,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,query:null,centuries:null},children:"Reset all filters"})})]})};function q(e,t,c,s,n,a){var r=Object(o.a)(e);if(t&&(r=r.filter((function(e){return e.sex===t}))),s.length>0){r=r.filter((function(e){return s.includes(function(e){return Math.ceil(e.born/100)}(e).toString())}))}if(c){var l=c.toLocaleLowerCase();r=r.filter((function(e){return[e.name,e.motherName||"",e.fatherName||""].join("\n").toLocaleLowerCase().includes(l)}))}return n&&(r.sort((function(e,t){switch(n){case"name":case"sex":return e[n].localeCompare(t[n]);case"born":case"died":return e[n]-t[n];default:return 0}})),"desc"===a&&r.reverse()),r}var B=function(){var e=Object(d.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(!0),l=Object(j.a)(a,2),i=l[0],o=l[1],b=Object(d.useState)(!1),u=Object(j.a)(b,2),h=u[0],x=u[1],p=Object(n.d)(),f=Object(j.a)(p,1)[0],v=f.get(L.sex),g=f.get(L.query),N=f.getAll(L.centuries),y=f.get(L.sort),w=f.get(L.order),k=q(c,v,g,N,y,w);return Object(d.useEffect)((function(){(function(){return O.apply(this,arguments)})().then(s).catch((function(){return x(!0)})).finally((function(){return o(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(r.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(r.jsx)(P,{})}),Object(r.jsx)("div",{className:"column",children:Object(r.jsx)("div",{className:"box table-container",children:i?Object(r.jsx)(m,{}):Object(r.jsx)(r.Fragment,{children:h?Object(r.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(r.jsx)(r.Fragment,{children:c.length>0?Object(r.jsx)(S,{people:k}):Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})})})})]})})]})},C=function(){return Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return f()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/people",className:function(e){var t=e.isActive;return f()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},E=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)(C,{}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(a.d,{children:[Object(r.jsx)(a.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsx)(a.b,{path:"/home",element:Object(r.jsx)(a.a,{to:"/",replace:!0})}),Object(r.jsxs)(a.b,{path:"people",children:[Object(r.jsx)(a.b,{index:!0,element:Object(r.jsx)(B,{})}),Object(r.jsx)(a.b,{path:":slug?",element:Object(r.jsx)(B,{})})]}),Object(r.jsx)(a.b,{path:"*",element:Object(r.jsx)(i,{})})]})})})]})};Object(s.createRoot)(document.getElementById("root")).render(Object(r.jsx)(n.a,{children:Object(r.jsx)(E,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a9404063.chunk.js.map