(window.webpackJsonptest=window.webpackJsonptest||[]).push([[0],{57:function(e,t,n){e.exports={rootHeader:"styles_rootHeader__1c5os",logoBox:"styles_logoBox__2abzq",navBox:"styles_navBox__1PQjS"}},65:function(e,t,n){e.exports={rootFooter:"styles_rootFooter__1tPLk"}},69:function(e,t,n){e.exports={rootMap:"styles_rootMap__1qAPP"}},70:function(e,t,n){e.exports={rootHome:"styles_rootHome__3MfIy"}},78:function(e,t,n){e.exports=n(91)},83:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var o=n(8),a=n.n(o),r=n(64),c=n.n(r),l=(n(83),n(55)),s=n(61),i=n(43),u=n(57),m=n.n(u),p=function(){return a.a.createElement("header",{className:m.a.rootHeader},a.a.createElement("div",{className:m.a.logoBox},"Netmapp"),a.a.createElement("nav",{className:m.a.navBox},a.a.createElement(F,null)))},h=n(65),f=n.n(h),v=function(){return a.a.createElement("footer",{className:f.a.rootFooter},"footer")},d=n(66),g=n(67),w=n(75),b=n(68),E=n(76),_=n(69),y=n.n(_),x=n(73),k=n(56),j=n(77),z=n(74),B=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(w.a)(this,Object(b.a)(t).call(this,e))).state={center:[0,0],zoom:1},n.olmap=new x.a({target:null,layers:[new j.a({source:new z.a})],view:new k.a({center:n.state.center,zoom:n.state.zoom})}),n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"updateMap",value:function(){this.olmap.getView().setCenter(this.state.center),this.olmap.getView().setZoom(this.state.zoom)}},{key:"componentDidMount",value:function(){var e=this;this.olmap.setTarget("map"),this.olmap.on("moveend",function(){var t=e.olmap.getView().getCenter(),n=e.olmap.getView().getZoom();e.setState({center:t,zoom:n})})}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.olmap.getView().getCenter(),o=this.olmap.getView().getZoom();return n!==t.center||o!==t.zoom}},{key:"userAction",value:function(){this.setState({center:[546e3,6868e3],zoom:5})}},{key:"render",value:function(){var e=this;return this.updateMap(),a.a.createElement("div",{id:"map",className:y.a.rootMap},a.a.createElement("button",{onClick:function(t){return e.userAction()}},"Go To Point"))}}]),t}(o.Component),C=n(70),N=n.n(C),O=function(){return a.a.createElement("div",{className:N.a.rootHome},a.a.createElement(B,null))},H=function(){return a.a.createElement("div",null,"AboutUs")},M=function(){return a.a.createElement("div",null,"ContactUs")},V="".concat("/Netmapp/"),A=[{path:V,component:p,exact:!1,label:""},{path:V,component:O,exact:!0,label:"Home"},{path:"".concat(V,"about-us/"),component:H,exact:!0,label:"About-Us"},{path:"".concat(V,"contact-us/"),component:M,exact:!0,label:"Contact-Us"},{path:V,component:v,exact:!1,label:""}],F=function(){var e=A.length-1;return a.a.createElement(o.Fragment,null,A.reduce(function(t,n,o){var r=n.path,c=n.label;return 0===o||o===e?t:[].concat(Object(s.a)(t),[a.a.createElement(l.b,{key:o,to:r},c)])},[]))},P=function(){var e=A.length-1;return a.a.createElement(o.Fragment,null,a.a.createElement(i.a,A[0]),a.a.createElement("main",null,A.reduce(function(t,n,o){return 0===o||o===e?t:[].concat(Object(s.a)(t),[a.a.createElement(i.a,Object.assign({key:o},n))])},[])),a.a.createElement(i.a,A[e]))},U=(n(90),function(){return a.a.createElement(l.a,null,a.a.createElement(P,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[78,1,2]]]);
//# sourceMappingURL=main.5635dbf1.chunk.js.map