(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{100:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),s=(t(97),t(98),t(99),t(100),t(18)),o=t(19),m=t(21),i=t(20),u=t(155),d=t(156),E=t(157),h=t(158),f=t(159),p=t(160),g=t(10),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},N="http://localhost:3001/";function v(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,a.name))))}var O=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(v,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Galer\xeda")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Galer\xeda"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},y=t(6),w=t(161),M=t(162),L=t(163),j=t(182),k=t(164),S=t(165),D=t(166),C=t(167),x=t(168),F=t(9),A=t(26),I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}};function _(e){var a=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:N+a.image,alt:a.name}),r.a.createElement(w.a,null,r.a.createElement(h.a,null,a.name),r.a.createElement(M.a,null,a.description)))))}function R(e){var a=e.comments,t=e.postComment,n=e.dishId;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comentarios"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(A.Stagger,{in:!0},a.map((function(e){return r.a.createElement(A.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})))),r.a.createElement(q,{dishId:n,postComment:t})):r.a.createElement("div",null)}var q=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).toggleModal=n.toggleModal.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(o.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(L.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-cart-arrow-down"})," Comprar"),r.a.createElement(j.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.a,{toggle:this.toggleModal},"Comprar"),r.a.createElement(S.a,null,r.a.createElement(F.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(D.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"rating",md:6},"Cantidad"),r.a.createElement(x.a,{md:12},r.a.createElement(F.Control.select,{model:"rating",id:"rating",className:"form-control",md:6},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(x.a,null,r.a.createElement(C.a,{htmlFor:"author"},"Nombres"),r.a.createElement(F.Control.text,{model:".author",id:"author",placeholder:"Nombres",className:"form-control",validators:{required:I,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:T(15)}}),r.a.createElement(F.Errors,{className:"text-danger",model:"name",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(x.a,null,r.a.createElement(C.a,{htmlFor:"comment"}),r.a.createElement(F.Control.textarea,{model:"comment",id:"comment",className:"form-control",rows:6}))),r.a.createElement(L.a,{type:"submit",className:"bg-primary"},"Comprar")))))}}]),t}(n.Component),P=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Galer\xeda")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(_,{dish:e.dish}),r.a.createElement(R,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null):void 0},H=t(169);function G(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:N+a.image,alt:a.name}),r.a.createElement(w.a,null,r.a.createElement(h.a,null,a.name),a.designation?r.a.createElement(H.a,null,a.designation):null,r.a.createElement(M.a,null,a.description))))}var J=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(G,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(G,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(G,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderMess}))))},z=t(170),B=t(171),U=t(172),W=t(173),Y=t(174),Z=t(175),$=t(176),V=t(177),K=t(178),Q=t(179),X=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(y.a)(n)),n.toggleModal=n.toggleModal.bind(Object(y.a)(n)),n.handleLogin=n.handleLogin.bind(Object(y.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(z.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(B.a,{onClick:this.toggleNav}),r.a.createElement(U.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo-dudis.png",height:"30",width:"41",alt:"DudisToys"})),r.a.createElement(W.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(Y.a,{navbar:!0},r.a.createElement(Z.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(Z.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," Nosotros")),r.a.createElement(Z.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Galer\xeda")),r.a.createElement(Z.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Cont\xe1ctanos"))),r.a.createElement(Y.a,{className:"ml-auto",navbar:!0},r.a.createElement(Z.a,null,r.a.createElement(L.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement($.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Dudis'Toys"),r.a.createElement("p",null,"Bienvenidos a esta fascinante p\xe1gina de tecnolog\xeda y entretenimiento con un esp\xedritu innovador y m\xe1gico hacia la vida. ",r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\ude00")))))),r.a.createElement(j.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.a,{toggle:this.toggleModal},"Login"),r.a.createElement(S.a,null,r.a.createElement(V.a,{onSubmit:this.handleLogin},r.a.createElement(K.a,null,r.a.createElement(C.a,{htmlFor:"username"},"Username"),r.a.createElement(Q.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(K.a,null,r.a.createElement(C.a,{htmlFor:"password"},"Password"),r.a.createElement(Q.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(K.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(Q.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}})," Remember me")),r.a.createElement(L.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component),ee=function(e){return e&&e.length},ae=function(e){return function(a){return!a||a.length<=e}},te=function(e){return function(a){return a&&a.length>=e}},ne=function(e){return!isNaN(Number(e))},re=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},le=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Cont\xe1ctanos")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Cont\xe1ctanos"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Informaci\xf3n Local")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Nuestra Direcci\xf3n"),r.a.createElement("address",null,"121, T\xfapac Amaru",r.a.createElement("br",null),"Lima",r.a.createElement("br",null),"Per\xfa",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +51 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +51 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"dudistoys@gmail.com"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Mapa de Ubicaci\xf3n")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"#!"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Env\xedanos tu  Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(F.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(D.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"firstname",md:2},"Nombres"),r.a.createElement(x.a,{md:10},r.a.createElement(F.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"Nombres",className:"form-control",validators:{required:ee,minLength:te(3),maxLength:ae(15)}}),r.a.createElement(F.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"lastname",md:2},"Apellidos"),r.a.createElement(x.a,{md:10},r.a.createElement(F.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ee,minLength:te(3),maxLength:ae(15)}}),r.a.createElement(F.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(x.a,{md:10},r.a.createElement(F.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. N\xfamero",className:"form-control",validators:{required:ee,minLength:te(3),maxLength:ae(15),isNumber:ne}}),r.a.createElement(F.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(x.a,{md:10},r.a.createElement(F.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ee,validEmail:re}}),r.a.createElement(F.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(x.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(C.a,{check:!0},r.a.createElement(F.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"Podr\xedamos contactarte?")))),r.a.createElement(x.a,{md:{size:3,offset:1}},r.a.createElement(F.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"message",md:2},"Tu Feedback"),r.a.createElement(x.a,{md:10},r.a.createElement(F.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(x.a,{md:{size:10,offset:2}},r.a.createElement(L.a,{type:"submit",color:"primary"},"Enviar Feedback")))))))}}]),t}(n.Component),ce=t(180),se=t(181);function oe(e){var a=e.leader;return r.a.createElement(ce.a,{tag:"li"},r.a.createElement(A.Fade,{in:!0},r.a.createElement(ce.a,{left:!0,middle:!0,href:"!#"},r.a.createElement(ce.a,{object:!0,src:N+a.image,alt:a.name})),r.a.createElement(ce.a,{body:!0,className:"ml-3"},r.a.createElement(ce.a,{Heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description))))}var me=function(e){var a=e.leaders.leaders.map((function(e){return r.a.createElement(oe,{leader:e})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Nosotros")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Nosotros"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Nuestra Historia"),r.a.createElement("p",null,"Empresa de juguetes divertidos para ni\xf1os y adolescentes."),r.a.createElement("p",null,"A medida que los ni\xf1os dan forma a sus propios mundos, contribuimos a tener un impacto positivo en el mundo en el que viven hoy y heredar\xe1n en el futuro.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(se.a,{className:"bg-primary text-white"},"Hecha un Vistazo"),r.a.createElement(w.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Inicio"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2015"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"LEGO"),r.a.createElement("dt",{className:"col-6"},"Facturaci\xf3n en el \xfaltimo a\xf1o"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Empleados"),r.a.createElement("dd",{className:"col-6"},"60"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(w.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"Jugar para un ni\xf1o y una ni\xf1a es la posibilidad de recortar un trocito de mundo y manipularlo para entenderlo."),r.a.createElement("footer",{className:"blockquote-footer"},"Francesco Tonucci.",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Liderazgo corporativo")),r.a.createElement("div",{className:"col-12"},r.a.createElement(ce.a,{className:"mt-3",list:!0},r.a.createElement(A.Stagger,{in:!0},a)))))};var ie=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"Nosotros")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Galer\xeda")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Cont\xe1ctanos")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Nuestra Direacci\xf3n"),r.a.createElement("address",null,"121, T\xfapac Amaru",r.a.createElement("br",null),"Lima",r.a.createElement("br",null),"Per\xfa",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +51 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +51 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"dudistoys@gmail.com"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 Dudis'Toys")))))},ue=t(11),de=t(24),Ee=function(){return{type:"DISHES_LOADING"}},he=function(e){return{type:"DISHES_FAILED",payload:e}},fe=function(e){return{type:"ADD_DISHES",payload:e}},pe=function(e){return{type:"COMMENTS_FAILED",payload:e}},ge=function(e){return{type:"ADD_COMMENTS",payload:e}},be=function(){return{type:"PROMOS_LOADING"}},Ne=function(e){return{type:"PROMOS_FAILED",payload:e}},ve=function(e){return{type:"ADD_PROMOS",payload:e}},Oe=function(){return{type:"LEADERS_LOADING"}},ye=function(e){return{type:"LEADERS_FAILED",payload:e}},we=function(e){return{type:"ADD_LEADERS",payload:e}},Me=t(52),Le=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(Me.TransitionGroup,null,r.a.createElement(Me.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ue.d,null,r.a.createElement(ue.b,{path:"/home",component:function(){return r.a.createElement(J,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(ue.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(me,{leaders:e.props.leaders})}}),r.a.createElement(ue.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(O,{dishes:e.props.dishes})}}),r.a.createElement(ue.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(P,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ue.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(le,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(ue.a,{to:"/home"})))),r.a.createElement(ie,null))}}]),t}(n.Component),je=Object(ue.g)(Object(de.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e,a,t,n){return{type:"ADD_COMMENT",payload:n}}())})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(Ee(!0)),fetch(N+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(fe(a))})).catch((function(a){return e(he(a.message))}))}))},resetFeedbackForm:function(){e(F.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},fetchPromos:function(){e((function(e){return e(be()),fetch(N+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(Ne(a.message))}))}))},fetchLeaders:function(){e((function(e){return e(Oe()),fetch(N+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(we(a))})).catch((function(a){return e(ye(a.message))}))}))}}}))(Le)),ke=(t(153),t(7)),Se=t(25),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(ke.a)(Object(ke.a)({},e),{},{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(ke.a)(Object(ke.a)({},e),{},{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return t.id=e.comments.length,t.date=(new Date).toISOString(),Object(ke.a)(Object(ke.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Ae=t(90),Ie=t(91),Te=t.n(Ie),_e={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Re=Object(Se.createStore)(Object(Se.combineReducers)(Object(ke.a)({dishes:De,comments:Ce,promotions:xe,leaders:Fe},Object(F.createForms)({feedback:_e}))),Object(Se.applyMiddleware)(Ae.a,Te.a)),qe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(de.Provider,{store:Re},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(je,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,a,t){e.exports=t(154)}},[[92,1,2]]]);
//# sourceMappingURL=main.2da4cf31.chunk.js.map