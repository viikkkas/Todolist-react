(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{11:function(t,e,a){t.exports=a(22)},13:function(t,e,a){},15:function(t,e,a){},22:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),r=(a(13),a(9)),s=a(5),c=a(6),i=a(10),o=a(8),u=a(3),m=function(t){var e=t.data,a=t.onDel,r=Object(n.useState)("list-data"),s=Object(u.a)(r,2),c=s[0],i=s[1];return l.a.createElement("div",{className:c,onClick:function(){"list-data strike"===c?a(e):i("list-data strike")}},e)},d=function(t){var e=t.list,a=t.onDel;return l.a.createElement("div",{className:"list"},e.map((function(t,e){return l.a.createElement(m,{data:t,onDel:a,key:t})})))};d.defaultProps={list:["hello","world"]};var b=d,f=function(t){var e=t.onSub,a=Object(n.useState)(""),r=Object(u.a)(a,2),s=r[0],c=r[1];return l.a.createElement("form",null,l.a.createElement("input",{type:"text",className:"form-control-lg",name:"task",placeholder:"Add a task...",value:s,onChange:function(t){c(t.target.value)}}),l.a.createElement("button",{className:"btn btn-primary btn-lg btn-margin",onClick:function(t){t.preventDefault(),e({task:s}),c("")}},"+"))},h=(a(14),a(15),function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(){var t;return Object(s.a)(this,a),(t=e.call(this)).handleSubmit=function(e){var a=e.task,n=Object(r.a)(t.state.list);n.push(a),t.setState({list:n})},t.handleDelete=function(e){var a=t.state.list.filter((function(t){return t!==e}));t.setState({list:a})},t.state={list:["take out trash","write code"]},t}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"head"},l.a.createElement("h1",null,"Todo List"),l.a.createElement("div",{className:"todo-wrapper"},l.a.createElement(f,Object.assign({},this.state,{onSub:this.handleSubmit})),l.a.createElement(b,Object.assign({},this.state,{onDel:this.handleDelete}))))}}]),a}(n.Component)),p=a(7);Object(p.render)(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.81248b4d.chunk.js.map