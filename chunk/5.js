(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"168":function(e,n,t){e.exports=t.p+"static/images/4.jpeg"},"169":function(e,n,t){e.exports=t.p+"static/images/btn.png"},"170":function(e,n,t){},"176":function(e,n,t){"use strict";t.r(n);var c=t(8),a=t(99),i=t(18),o=t(110),s=t(31),l=t(168),u=t.n(l),r=t(169),b=t.n(r),p=(t(170),t(108));n.default=function(){var e=Object(i.useState)(!1),n=Object(c.a)(e,2),t=n[0],l=n[1],r=Object(i.useState)(""),j=Object(c.a)(r,2),m=j[0],f=j[1];return Object(p.jsxs)(o.Flex,{"align":"center","direction":"column","className":"detail","children":[Object(p.jsx)(a.Image,{"className":"full","mode":"aspectFit","src":u.a}),Object(p.jsx)(o.Field,{"maxlength":4,"onInput":function onInput(e){f(e.detail.value)},"label":"防伪码","className":"inp","placeholder":"请输入瓶身防伪码第二排后4位进行验证"}),Object(p.jsx)(a.Image,{"className":"btn","mode":"aspectFit","onClick":function onSubmit(){m.length<4?Object(s.showToast)({"title":"请输入4位数验证码","icon":"none"}):l(!0)},"src":b.a}),Object(p.jsx)(o.Dialog,{"visible":t,"title":"验证成功！该产品为正品","onCancel":function onCancel(){return l(!1)},"onConfirm":function onConfirm(){return l(!1)}})]})}}}]);