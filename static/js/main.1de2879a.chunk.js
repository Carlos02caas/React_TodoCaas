(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/AgregandoTodo.c0ae17f0.png"},function(e,t,n){e.exports=n(32)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),c=n.n(l),r=(n(18),n(19),n(20),n(4)),u=n(2);var m=Object(a.createContext)(),i=function(e){var t=e.children,n=function(e,t){var n=Object(a.useState)(t),o=Object(u.a)(n,2),l=o[0],c=o[1],r=Object(a.useState)(!0),m=Object(u.a)(r,2),i=m[0],d=m[1],s=Object(a.useState)(!1),E=Object(u.a)(s,2),f=E[0],p=E[1];return Object(a.useEffect)(function(){setTimeout(function(){try{var n,a=localStorage.getItem(e);a?(n=JSON.parse(a),c(n)):(localStorage.setItem(e,JSON.stringify(t)),n=t),d(!1)}catch(f){d(!1),p(!0)}},2e3)},[]),{item:l,saveItem:function(t){localStorage.setItem(e,JSON.stringify(t)),c(t)},loading:i,error:f}}("TODOS_V1",[]),l=n.item,c=n.saveItem,i=n.loading,d=n.error,s=Object(a.useState)(""),E=Object(u.a)(s,2),f=E[0],p=E[1],v=Object(a.useState)(!1),T=Object(u.a)(v,2),b=T[0],O=T[1],g=l.filter(function(e){return!!e.completed}).length,h=l.length,C=l.filter(function(e){var t=e.text.toLowerCase(),n=f.toLowerCase();return t.includes(n)});return o.a.createElement(m.Provider,{value:{loading:i,error:d,completedTodos:g,totalTodos:h,searchValue:f,setSearchValue:p,searchedTodos:C,conmpleteTodo:function(e){var t=Object(r.a)(l),n=t.findIndex(function(t){return t.text===e});t[n].completed=!0,c(t)},deleteTodo:function(e){var t=Object(r.a)(l),n=t.findIndex(function(t){return t.text===e});t.splice(n,1),c(t)},openModal:b,setOpenModal:O,addTodo:function(e){var t=Object(r.a)(l);t.push({text:e,completed:!1}),c(t)}}},t)},d=function(){var e=Object(a.useContext)(m),t=e.loading,n=e.completedTodos,l=e.totalTodos,c=l-n;return o.a.createElement("div",null,!!c&&!t&&o.a.createElement("h1",{className:"TodoCounter"},"Has Completado ",o.a.createElement("span",null,n)," de ",o.a.createElement("span",null,l)," TODO's"),!c&&!t&&o.a.createElement("h1",{className:"TodoCounter"},"No hay ToDo's por completar"),!!t&&o.a.createElement("h1",{className:"TodoCounter"},"Cargando ToDo's"))},s=(n(21),function(){var e=Object(a.useContext)(m),t=e.searchValue,n=e.setSearchValue;return o.a.createElement("div",{className:"TodoSearch"},o.a.createElement("input",{className:"TodoSearch-input",type:"text",placeholder:"Limpiar Carro",value:t,onChange:function(e){n(e.target.value)}}))}),E=function(e){return o.a.createElement("ul",null,e.children)},f=(n(22),n(6)),p=n(5),v=function(e){return o.a.createElement("div",{className:"TodoItem"},o.a.createElement("li",null,o.a.createElement("span",{className:"icon icon-check ".concat(e.completed&&"icon-check--active"," "),onClick:e.onComplete},o.a.createElement(f.a,{icon:p.a})),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),o.a.createElement("span",{className:"icon icon-delete",onClick:e.onDelete},o.a.createElement(f.a,{icon:p.b}))))},T=(n(25),function(){return o.a.createElement("div",{className:"honeycomb"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}),b=(n(26),function(){return o.a.createElement("p",null,"Error...")}),O=(n(27),function(){return o.a.createElement("p",null,"Crea tu primer Todo..")}),g=(n(28),function(e){var t=e.setOpenModal;return o.a.createElement("button",{className:"CreateTodoButton",onClick:function(){t(function(e){return!e})}},"+")}),h=n(3),C=n.n(h),N=(n(29),function(e){var t=e.children;return C.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}),j=(n(30),function(e){var t=e.children;return C.a.createPortal(o.a.createElement("div",{className:"ModalTodosBackground"},t),document.getElementById("modalTodos"))}),x=function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"modal"}))},S=function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"modalTodos"}))},I=(n(31),function(){var e=Object(a.useContext)(m),t=e.addTodo,n=e.setOpenModal,l=Object(a.useState)(""),c=Object(u.a)(l,2),r=c[0],i=c[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r),n(!1)}},o.a.createElement("label",null,"Escribe Tu nuevo ToDo"),o.a.createElement("textarea",{placeholder:"Ir de compras",value:r,onChange:function(e){i(e.target.value)}}),o.a.createElement("div",{className:"TodoForm-buttonContainer"},o.a.createElement("button",{type:"",className:"TodoForm-button TodoForm-button--cancel",onClick:function(e){n(!1)}},"Cancelar"),o.a.createElement("button",{className:"TodoForm-button TodoForm-button--add",onClick:function(){}},"Agregar")))}),k=n(9),y=n.n(k),M=function(){var e=Object(a.useContext)(m),t=e.loading,n=e.error,l=e.searchedTodos,c=e.conmpleteTodo,r=e.deleteTodo,u=e.openModal,i=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"TodooApp"},o.a.createElement("div",{className:"TodoApp-createItem"},o.a.createElement(x,null)),o.a.createElement("div",{className:"TodoApp-list"},o.a.createElement(d,null),o.a.createElement(s,null),o.a.createElement(E,null,t&&o.a.createElement(T,null),n&&o.a.createElement(b,null),!t&&0===l.length&&o.a.createElement(O,null),l.map(function(e){return o.a.createElement(v,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return r(e.text)}})}),o.a.createElement(S,null)),o.a.createElement(g,{setOpenModal:i}),u&&o.a.createElement(N,null,o.a.createElement(I,null)),u&&o.a.createElement(j,null,o.a.createElement("img",{src:y.a,alt:""})))))};var w=function(){return o.a.createElement(i,null,o.a.createElement(M,null))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(w,null))}],[[10,1,2]]]);
//# sourceMappingURL=main.1de2879a.chunk.js.map