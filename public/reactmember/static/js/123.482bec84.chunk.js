"use strict";(self.webpackChunkreact_member_center=self.webpackChunkreact_member_center||[]).push([[123],{69128:function(e,n,t){t.d(n,{Bd:function(){return A},D0:function(){return s},DL:function(){return j},DM:function(){return p},Di:function(){return x},Kj:function(){return l},Ns:function(){return c},ZM:function(){return h},aS:function(){return o},ac:function(){return g},ef:function(){return Z},gQ:function(){return d},iY:function(){return f},s:function(){return u},sG:function(){return i},xD:function(){return m}});var a=t(1413),r=t(71584);function s(){return r.Z.get("/account")}function i(e){return r.Z.put("/account",e)}function c(e){return r.Z.put("/account/phone/old",e)}function o(e){return r.Z.put("/account/phone",e)}function l(e){return r.Z.put("/account/email/old",e)}function u(e){return r.Z.put("/account/email",e)}function d(e){return r.Z.put("/account/password",e)}function m(e){return r.Z.get("/ssh_key",{params:e})}function f(e){return r.Z.post("/ssh_key",e)}function h(e){return r.Z.put("/ssh_key/".concat(e.id),e)}function x(e){return r.Z.delete("/ssh_key/".concat(e.id),e)}function g(e){return r.Z.get("/api",{params:(0,a.Z)({},e)})}function p(e){return r.Z.post("/api",e)}function Z(e){return r.Z.delete("/api/".concat(e))}function j(e){return r.Z.put("/api/".concat(e.id,"/white_list"),e)}function A(e){return r.Z.get("/log",{params:e})}},24779:function(e,n,t){t.d(n,{Z:function(){return s}});t(72791);var a=t(69221),r=t(80184);function s(e){var n=e.page;return(0,r.jsx)(a.Z,{total:e.total,pageSize:n.limit,showSizeChanger:!0,pageSizeOptions:e.pageSizeOptions||[10,20,30,50,100],current:n.page,showTitle:!1,onChange:function(n,t){e.changePage(n,t)},showTotal:function(e,n){return"\u663e\u793a".concat(n[0],"-").concat(n[1]," \u7684 ").concat(e)}})}},5123:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(1413),r=t(29439),s=t(72791),i=t(24779),c=t(68678),o=t(77483),l=t(87309),u=t(45227),d=t(70478),m=t(21830),f=t.n(m),h=t(60151),x=t(69128),g=t(80184);function p(){var e=c.Z.TextArea,n=(0,s.useState)(200),m=(0,r.Z)(n,2),p=m[0],Z=m[1],j=(0,s.useState)({keywords:"",page:1,limit:20,orderby:"id",sort:"desc"}),A=(0,r.Z)(j,2),b=A[0],C=A[1];(0,s.useEffect)((function(){P()}),[b]);var N=(0,s.useState)(!1),k=(0,r.Z)(N,2),w=k[0],v=k[1],S=(0,s.useState)([]),y=(0,r.Z)(S,2),B=y[0],E=y[1],_=(0,s.useState)(0),I=(0,r.Z)(_,2),T=I[0],D=I[1],z=[{title:"\u540d\u79f0",width:300,align:"left",dataIndex:"name",className:"column-name"},{title:"\u6307\u7eb9",dataIndex:"finger_print",key:"finger_print",width:400,className:"finger-column"},{title:"\u64cd\u4f5c",align:"left",width:120,className:"cloumn-operate",fixed:"right",render:function(e,n){return(0,g.jsx)(g.Fragment,{children:n.id===T?(0,g.jsxs)("span",{className:"more-operation",children:[(0,g.jsx)("a",{className:"more-edit",onClick:function(){return G(n)},children:"\u7f16\u8f91"}),(0,g.jsx)("a",{className:"more-delete",onClick:function(){return X(n)},children:"\u5220\u9664"})]}):(0,g.jsx)("span",{className:"more",onClick:function(){D(n.id)},children:"..."})})}}],F=o.Z.useForm(),L=(0,r.Z)(F,1)[0],M=o.Z.useForm(),R=(0,r.Z)(M,1)[0],Y=(0,s.useState)(!1),J=(0,r.Z)(Y,2),O=J[0],Q=J[1],V=(0,s.useState)(!1),H=(0,r.Z)(V,2),K=H[0],U=H[1],q=function(){Q(!1)},G=function(e){R.setFieldsValue({id:e.id,name:e.name,public_key:e.public_key}),U(!0)},X=function(e){f().fire({text:"\u60a8\u5c06\u5220\u9664 ".concat(e.name,",\u4e00\u65e6\u5220\u9664\u4e0d\u53ef\u627e\u56de"),icon:"info",showCancelButton:!0,confirmButtonColor:"#5C5EE4",confirmButtonText:"\u786e\u8ba4",cancelButtonText:"\u53d6\u6d88",customClass:{icon:"ssh-icon",cancelButton:"ssh-cancel-button"}}).then((function(n){n.value&&(0,x.Di)(e).then((function(n){200===n.data.status&&("\u5220\u9664\u6210\u529f"===n.data.msg?(f().fire({text:"\u6210\u529f\u5220\u9664 ".concat(e.name),icon:"success",confirmButtonColor:"#5C5EE4",confirmButtonText:"\u786e\u8ba4"}),Q(!1),P()):(0,h.vC)(n.data.msg,"error"))}))}))},P=function(){v(!0),console.log(b),(0,x.xD)(b).then((function(e){if(console.log(e),200===e.data.status){var n=e.data.data.count;Z((function(){return n}));var t=e.data.data.list;E(t)}v(!1)}))};return(0,g.jsxs)("div",{className:"com-card ssh",children:[(0,g.jsxs)("div",{className:"card-top",children:[(0,g.jsxs)("div",{className:"title",children:[(0,g.jsx)("p",{className:"main-title",children:"SSH\u79d8\u94a5"}),(0,g.jsx)("p",{className:"lat-title",children:"\u79d8\u94a5\u5c06\u7528\u4e8e\u521b\u5efa\u5b9e\u4f8b\u65f6\u4f7f\u7528\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u60a8\u7684\u79c1\u94a5\u767b\u5f55\u4e91\u670d\u52a1\u5668"})]}),(0,g.jsxs)(l.Z,{className:"create-btn",onClick:function(){Q(!0),L.setFieldsValue({name:"",public_key:""})},children:[(0,g.jsx)("img",{className:"create-icon",src:t(30029),alt:""})," \u521b\u5efa\u79d8\u94a5"]})]}),(0,g.jsx)("div",{className:"card-main",children:(0,g.jsx)("div",{className:"main_table",children:(0,g.jsx)(u.Z,{columns:z,dataSource:B,pagination:!1,loading:w,rowKey:function(e){return e.id},scroll:0!==B.length?{x:"100%",scrollToFirstRowOnChange:!0}:null})})}),(0,g.jsx)(i.Z,{total:p,page:b,changePage:function(e,n){C((function(t){return(0,a.Z)((0,a.Z)({},t),{},{page:e,limit:n})}))}}),(0,g.jsx)(d.Z,{visible:O,footer:null,centered:!0,closable:!1,style:{borderRadius:"10px",overflow:"auto"},width:"6.4rem",maskClosable:!0,onCancel:q,keyboard:!0,getContainer:!1,children:(0,g.jsxs)("div",{className:"modal-create-ssh",children:[(0,g.jsx)("div",{className:"modal-title",children:"\u521b\u5efaSSH\u79d8\u94a5"}),(0,g.jsx)("div",{className:"modal-form",children:(0,g.jsxs)(o.Z,{colon:!1,size:"large",form:L,onFinish:function(){var e=L.getFieldsValue();(0,x.iY)((0,a.Z)({},e)).then((function(e){200===e.data.status&&("\u521b\u5efa\u6210\u529f"===e.data.msg?((0,h.vC)("\u521b\u5efa\u6210\u529f","success"),Q(!1),P()):(0,h.vC)(e.data.msg,"error"))}))},children:[(0,g.jsx)(o.Z.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}],children:(0,g.jsx)(c.Z,{})}),(0,g.jsx)(o.Z.Item,{label:"\u516c\u94a5",name:"public_key",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u516c\u94a5"}],children:(0,g.jsx)(e,{rows:8})}),(0,g.jsx)(o.Z.Item,{noStyle:!0,children:(0,g.jsxs)("div",{className:"modal-form-footer flex",children:[(0,g.jsx)(l.Z,{className:"btn-ok",size:"middle",htmlType:"submit",children:"\u786e\u5b9a"}),(0,g.jsx)(l.Z,{className:"btn-no",size:"middle",onClick:function(){return Q(!1)},children:"\u53d6\u6d88"})]})})]})})]})}),(0,g.jsx)(d.Z,{visible:K,footer:null,centered:!0,closable:!1,style:{borderRadius:"10px",overflow:"auto"},width:"6.4rem",maskClosable:!0,onCancel:q,keyboard:!0,getContainer:!1,children:(0,g.jsxs)("div",{className:"modal-create-ssh",children:[(0,g.jsx)("div",{className:"modal-title",children:"\u7f16\u8f91SSH\u79d8\u94a5"}),(0,g.jsx)("div",{className:"modal-form",children:(0,g.jsxs)(o.Z,{colon:!1,size:"large",form:R,onFinish:function(){var e=R.getFieldsValue();(0,x.ZM)(e).then((function(e){200===e.data.status&&((0,h.vC)("\u7f16\u8f91\u6210\u529f","success"),U(!1),P())}))},children:[(0,g.jsx)(o.Z.Item,{name:"id",hidden:!0,children:(0,g.jsx)(c.Z,{})}),(0,g.jsx)(o.Z.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}],children:(0,g.jsx)(c.Z,{})}),(0,g.jsx)(o.Z.Item,{label:"\u516c\u94a5",name:"public_key",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u516c\u94a5"}],children:(0,g.jsx)(e,{rows:8})}),(0,g.jsx)(o.Z.Item,{noStyle:!0,children:(0,g.jsxs)("div",{className:"modal-form-footer flex",children:[(0,g.jsx)(l.Z,{className:"btn-ok",size:"middle",htmlType:"submit",children:"\u786e\u5b9a"}),(0,g.jsx)(l.Z,{className:"btn-no",size:"middle",onClick:function(){return U(!1)},children:"\u53d6\u6d88"})]})})]})})]})})]})}},30029:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAASxJREFUOE99kjFKxGAUhL/BC+gJ3EpL19JKbawEEQ+gnaXrCVxvkD2B220lrCcwnZXgspVWWlktKBELm5EnfyT+CT4I5M9788+bmYiOst0HDoAbSQ9dM2p+tL0M3AIBrGsMnALrwKOkr2jkwAI4S4gZsJHed4E5sAdcBzgHPgOrwLmkwvY0rXwpaWh7H3iRNM+BoSdY6sES2G6cA/ghqcyBQ+Ciw4zNMMn2CXDfYgyA7Zo1ju/AQNLY9g7QSxqrP4wJGC4eRxRAMCwBW2mLO0mLX1dTDL20Tm3QoaSp7SNgEbqaEn4Y0+5XwBsQWUatAJ+JtZT01AVs5hf9maS+7dAU2U0kVS1gYo2h0Bf2jyQNbIe2kDDJnc7jCDPiKf7T1/rl8lttrwGVpNe89w1HAIYPpcz/ywAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=123.482bec84.chunk.js.map