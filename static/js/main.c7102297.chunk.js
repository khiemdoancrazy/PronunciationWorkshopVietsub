(this.webpackJsonppronunciationworkshopvietsub=this.webpackJsonppronunciationworkshopvietsub||[]).push([[0],{102:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(0),i=n.n(c),a=n(33),o=n.n(a),s=(n(102),n(103),n(139)),u=n(143),l=n(16),j=n(17),h=n(20),d=n(19),b=n(142),O=n(53),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(b.a,{size:"large",icon:!0,children:[Object(r.jsx)(O.a,{name:"like",color:"red"}),Object(r.jsx)(b.a.Content,{children:"Improve Your English by experiencing our Accent Reduction Course to learn English Pronunciation and American Accent."})]})}}]),n}(i.a.Component),p=n(144),v=n(145),x=n(85),m=n.n(x),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsxs)(u.a,{size:"large",children:[Object(r.jsx)(O.a,{name:"film",color:"green"}),Object(r.jsx)(u.a.Content,{children:"Video"})]}),Object(r.jsx)(m.a,{controls:!0,onEnded:this.props.nextVideo,url:this.props.url})]})}}]),n}(i.a.Component),g=n(141),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)(g.a.Item,{as:"a",href:this.props.url,onClick:function(t){return e.handleClick(t)},children:this.props.title})}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.onClick()}}]),n}(i.a.Component),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"handleClick",value:function(e){this.props.changeVideo(e)}},{key:"render",value:function(){var e=this,t=this.props.videos.map((function(t,n){return Object(r.jsx)(y,{title:t.name,url:t.file,onClick:function(){return e.handleClick(n)}},n)}));return Object(r.jsxs)(s.a,{children:[Object(r.jsxs)(u.a,{size:"large",children:[Object(r.jsx)(O.a,{name:"list",color:"blue"}),Object(r.jsx)(u.a.Content,{children:"Playlist"})]}),Object(r.jsx)(g.a,{children:t})]})}}]),n}(i.a.Component),V=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={videos:[],currentIndex:0,currentUrlVideo:"",autoplay:!1},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("videos.json").then((function(e){return e.json()})).then((function(t){e.setState({videos:t,currentIndex:0,currentUrlVideo:t[0].file})}))}},{key:"changeVideo",value:function(e){e<this.state.videos.length&&this.setState({currentIndex:e,currentUrlVideo:this.state.videos[e].file,autoplay:!0})}},{key:"nextVideo",value:function(){var e=this.state.currentIndex;e<this.state.videos.length&&(e++,this.changeVideo(e))}},{key:"render",value:function(){var e=this;return Object(r.jsx)(p.a,{vertical:!0,children:Object(r.jsxs)(v.a,{stackable:!0,celled:"internally",children:[Object(r.jsx)(v.a.Column,{width:11,children:Object(r.jsx)(k,{url:this.state.currentUrlVideo,autoplay:this.state.autoplay,nextVideo:function(){return e.nextVideo()}})}),Object(r.jsx)(v.a.Column,{width:5,children:Object(r.jsx)(C,{videos:this.state.videos,changeVideo:function(t){return e.changeVideo(t)}})})]})})}}]),n}(i.a.Component),I=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={documents:[]},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("documents.json").then((function(e){return e.json()})).then((function(t){return e.setState({documents:t})}))}},{key:"render",value:function(){var e=this.state.documents.map((function(e,t){return Object(r.jsx)(g.a.Item,{as:"a",target:"_blank",href:e.file,children:e.name},t)}));return Object(r.jsxs)(p.a,{vertical:!0,children:[Object(r.jsxs)(u.a,{size:"large",textAlign:"left",children:[Object(r.jsx)(O.a,{name:"file pdf outline",color:"red"}),Object(r.jsx)(u.a.Content,{children:"Documents"})]}),Object(r.jsx)(g.a,{ordered:!0,children:e})]})}}]),n}(i.a.Component);var w=function(){return Object(r.jsxs)(s.a,{className:"raised very padded segment",children:[Object(r.jsx)(u.a,{size:"huge",textAlign:"center",children:"Pronunciation Workshop Vietsub"}),Object(r.jsx)(V,{}),Object(r.jsx)(I,{}),Object(r.jsx)(f,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),z()}},[[127,1,2]]]);
//# sourceMappingURL=main.c7102297.chunk.js.map