(window.webpackJsonptest=window.webpackJsonptest||[]).push([[0],{57:function(e,t,o){e.exports={rootHeader:"styles_rootHeader__1c5os",logoBox:"styles_logoBox__2abzq",navBox:"styles_navBox__1PQjS"}},65:function(e,t,o){e.exports={rootFooter:"styles_rootFooter__1tPLk"}},69:function(e,t,o){e.exports={rootMap:"styles_rootMap__1qAPP"}},70:function(e,t,o){e.exports={rootHome:"styles_rootHome__3MfIy"}},78:function(e,t,o){e.exports=o(91)},83:function(e,t,o){},90:function(e,t,o){},91:function(e,t,o){"use strict";o.r(t);var n=o(8),a=o.n(n),r=o(64),c=o.n(r),l=(o(83),o(55)),i=o(61),s=o(43),u=o(57),m=o.n(u),p=function(){return a.a.createElement("header",{className:m.a.rootHeader},a.a.createElement("div",{className:m.a.logoBox},"Netmapp"),a.a.createElement("nav",{className:m.a.navBox},a.a.createElement(A,null)))},f=o(65),d=o.n(f),h=function(){return a.a.createElement("footer",{className:d.a.rootFooter},"footer")},v=o(66),g=o(67),E=o(75),w=o(68),b=o(76),y=o(69),_=o.n(y),x=o(73),k=o(56),j=o(77),z=o(74),C=o(16),B=function(e){function t(e){var o;return Object(v.a)(this,t),(o=Object(E.a)(this,Object(w.a)(t).call(this,e))).state={center:[546e3,6868e3],zoom:8},o.olmap=new x.a({target:null,layers:[new j.a({source:new z.a})],view:new k.a({center:o.state.center,zoom:o.state.zoom})}),o}return Object(b.a)(t,e),Object(g.a)(t,[{key:"updateMap",value:function(){this.olmap.getView().setCenter(this.state.center),this.olmap.getView().setZoom(this.state.zoom)}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){alert("---- Success to find your current location!!! ----");var o=C.a.transform([t.coords.longitude,t.coords.latitude],"EPSG:4326","EPSG:3857");e.setState({center:o,zoom:14})}),this.olmap.setTarget("map"),this.olmap.on("moveend",function(){var t=e.olmap.getView().getCenter(),o=e.olmap.getView().getZoom();e.setState({center:t,zoom:o})})}},{key:"shouldComponentUpdate",value:function(e,t){var o=this.olmap.getView().getCenter(),n=this.olmap.getView().getZoom();return o!==t.center||n!==t.zoom}},{key:"userAction",value:function(){this.setState({center:[546e3,6868e3],zoom:10})}},{key:"render",value:function(){var e=this;return this.updateMap(),a.a.createElement("div",{id:"map",className:_.a.rootMap},a.a.createElement("button",{onClick:function(t){return e.userAction()}},"Go To Point"))}}]),t}(n.Component),N=o(70),O=o.n(N),P=function(){return a.a.createElement("div",{className:O.a.rootHome},a.a.createElement(B,null))},H=function(){return a.a.createElement("div",null,"AboutUs")},M=function(){return a.a.createElement("div",null,"ContactUs")},S="".concat("/Netmapp/"),V=[{path:S,component:p,exact:!1,label:""},{path:S,component:P,exact:!0,label:"Home"},{path:"".concat(S,"about-us/"),component:H,exact:!0,label:"About-Us"},{path:"".concat(S,"contact-us/"),component:M,exact:!0,label:"Contact-Us"},{path:S,component:h,exact:!1,label:""}],A=function(){var e=V.length-1;return a.a.createElement(n.Fragment,null,V.reduce(function(t,o,n){var r=o.path,c=o.label;return 0===n||n===e?t:[].concat(Object(i.a)(t),[a.a.createElement(l.b,{key:n,to:r},c)])},[]))},F=function(){var e=V.length-1;return a.a.createElement(n.Fragment,null,a.a.createElement(s.a,V[0]),a.a.createElement("main",null,V.reduce(function(t,o,n){return 0===n||n===e?t:[].concat(Object(i.a)(t),[a.a.createElement(s.a,Object.assign({key:n},o))])},[])),a.a.createElement(s.a,V[e]))},U=(o(90),function(){return a.a.createElement(l.a,null,a.a.createElement(F,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[78,1,2]]]);
//# sourceMappingURL=main.3447ef19.chunk.js.map