(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(t,e,n){t.exports={formInputs:"AddTask_formInputs__3dd7q",displayFlex:"AddTask_displayFlex__1Bk8n",flexDisplay:"AddTask_flexDisplay__hBnbY",inputDiv:"AddTask_inputDiv__JEbFy",addInputs:"AddTask_addInputs__1L7dr",reminder:"AddTask_reminder__2aLbh",btnContainer:"AddTask_btnContainer__3WPdt",btn:"AddTask_btn__1k044"}},,,,,,,function(t,e,n){t.exports={btnHeader:"Button_btnHeader__dNqo2",btnAdd:"Button_btnAdd__1FPr6",btnClose:"Button_btnClose__18528"}},function(t,e,n){t.exports={tasks:"FirstTask_tasks__1czhh",subtasks:"FirstTask_subtasks__p47hT",reminder:"FirstTask_reminder__1Kdpw"}},,,function(t,e,n){t.exports={header:"Header_header__3SVVt"}},function(t,e,n){t.exports={taskDiv:"Task_taskDiv__2XISv"}},,,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(12),c=n.n(s),i=(n(21),n(16)),o=n(7),d=n(3),u=n.n(d),l=n(5),b=n(4),p=n(13),j=n.n(p),h=n(9),f=n.n(h),x=n(0),k=function(t){var e=t.text,n=t.clickMe,a=t.showTaskAdd;return Object(x.jsx)("button",{className:"".concat(f.a.btnHeader," ").concat(a?f.a.btnClose:f.a.btnAdd),onClick:n,children:e})},m=function(t){var e=t.title,n=t.showAddTask,a=t.btnText;return Object(x.jsxs)("div",{className:j.a.header,children:[Object(x.jsx)("h1",{children:e}),Object(x.jsx)(k,{text:a?"close":"add",clickMe:n,showTaskAdd:a})]})},O=n(14),v=n.n(O),_=n(10),y=n.n(_),T=n(15),g=function(t){var e=t.taskHeader,n=t.onDelete,a=t.onToggle;return Object(x.jsxs)("div",{className:"".concat(y.a.tasks," ").concat(e.reminder?y.a.reminder:""),onDoubleClick:function(){a(e.id)},children:[Object(x.jsxs)("div",{className:y.a.subtasks,children:[Object(x.jsxs)("h2",{children:[e.text," "]}),Object(x.jsx)(T.a,{style:{color:"red",marginRight:20,cursor:"pointer"},onClick:function(){return n(e.id)}})]}),Object(x.jsxs)("p",{children:[" ",e.day," "]})]})},D=function(t){var e=t.task,n=t.onDelete,a=t.onToggle,r=e.map((function(t){return Object(x.jsx)(g,{taskHeader:t,onDelete:n,onToggle:a},t.id)}));return Object(x.jsx)("div",{className:v.a.taskDiv,children:r})},N=n(2),w=n.n(N),A=function(t){var e=t.onAdd,n=Object(a.useState)(""),r=Object(b.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(""),o=Object(b.a)(i,2),d=o[0],u=o[1],l=Object(a.useState)(!1),p=Object(b.a)(l,2),j=p[0],h=p[1];return Object(x.jsxs)("form",{className:"".concat(w.a.formInputs," ").concat(w.a.displayFlex),onSubmit:function(t){t.preventDefault(),!s|!d?alert("input value"):(e({text:s,day:d,reminder:j}),c(""),u(""),h(!1))},children:[Object(x.jsxs)("div",{className:"".concat(w.a.displayFlex," ").concat(w.a.inputDiv),children:[Object(x.jsx)("label",{htmlFor:"addingTask",children:"task"}),Object(x.jsx)("input",{type:"text",placeholder:"add task...",className:"".concat(w.a.addInputs),value:s,onChange:function(t){return c(t.target.value)}})]}),Object(x.jsxs)("div",{className:"".concat(w.a.displayFlex," ").concat(w.a.inputDiv),children:[Object(x.jsx)("label",{htmlFor:"addingReminder",children:"day & time"}),Object(x.jsx)("input",{type:"text",placeholder:"day and time...",className:"".concat(w.a.addInputs),value:d,onChange:function(t){return u(t.target.value)}})]}),Object(x.jsxs)("div",{className:"".concat(w.a.flexDisplay," ").concat(w.a.inputDiv),children:[Object(x.jsx)("label",{htmlFor:"addingTask",children:"set reminder"}),Object(x.jsx)("input",{type:"checkbox",className:w.a.reminder,value:j,onChange:function(t){return h(t.currentTarget.checked)}})]}),Object(x.jsx)("div",{className:w.a.btnContainer,children:Object(x.jsx)("button",{className:w.a.btn,type:"submit",children:"save task"})})]})};var C=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)(!1),c=Object(b.a)(s,2),d=c[0],p=c[1];Object(a.useEffect)((function(){var t=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var j=function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks/".concat(e),{method:"DELETE"});case 2:r(n.filter((function(t){return t.id!==e})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(l.a)(u.a.mark((function t(e){var a,s,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:return a=t.sent,s=Object(o.a)(Object(o.a)({},a),{},{reminder:!a.reminder}),t.next=6,fetch("http://localhost:5000/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(s)});case 6:return c=t.sent,t.next=9,c.json();case 9:i=t.sent,r(n.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{reminder:i.reminder}):t})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(l.a)(u.a.mark((function t(e){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,r([].concat(Object(i.a)(n),[s]));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(m,{title:"task tracker",showAddTask:function(){return p(!d)},btnText:d}),d&&Object(x.jsx)(A,{onAdd:k}),n.length>0?Object(x.jsx)(D,{task:n,onDelete:h,onToggle:f}):"No task to show"]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),F()}],[[24,1,2]]]);
//# sourceMappingURL=main.cc2c7e91.chunk.js.map