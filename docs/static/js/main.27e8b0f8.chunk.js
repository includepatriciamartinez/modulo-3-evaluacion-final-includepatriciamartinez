(this.webpackJsonpmaps=this.webpackJsonpmaps||[]).push([[0],{18:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(15),l=t.n(n),i=t(6),s=(t(23),t(12)),m=t(5),o=function(e){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__dialog"},r.a.createElement("div",{className:"modal__content"},r.a.createElement("header",{className:"modal__header"},r.a.createElement("h2",{className:"modal__title"},e.character.name),r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{className:"modal__close icon fas fa-times"}))),r.a.createElement("section",null,r.a.createElement("img",{className:" card__img",src:e.character.image,alt:"".concat(e.character.name," pic")}),r.a.createElement("ul",{className:"ml-1 mt-1"},r.a.createElement("li",null,"Species:",e.character.species),r.a.createElement("li",null,"Origin:",e.character.origin),r.a.createElement("li",null,"Episode:",e.character.episode.lenght),r.a.createElement("li",null,"Status:",e.character.status))))))},u=function(e){return r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{className:"form__input-text",type:"text",name:"name",id:"name",placeholder:"Search your character here...",onChange:function(a){e.handlerFilter({value:a.target.value,key:"name"})}}))},h=function(e){return r.a.createElement("section",null,r.a.createElement(u,{handlerFilter:e.handlerFilter}))},d=function(e){return r.a.createElement("li",{className:"card"},r.a.createElement(i.b,{to:"/character/".concat(e.character.id)},r.a.createElement("img",{className:"card__img",src:e.character.image,alt:"".concat(e.character.name," pic"),title:"".concat(e.character.name," pic")}),r.a.createElement("h4",{className:"card__title"},e.character.name),r.a.createElement("p",{className:"card__description"},e.character.species),r.a.createElement("p",{className:"card__description"},e.character.origin),r.a.createElement("p",{className:"card__description"},e.character.status)))},p=function(e){var a=e.characters.map((function(e){return r.a.createElement(d,{key:e.id,character:e})}));return r.a.createElement("section",null,r.a.createElement("ul",{className:"cards"},a))},E=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement(h,{handlerFilter:e.handlerFilter}),r.a.createElement(p,{characters:e.characters}))},f=function(){return fetch("https://rickandmortyapi.com/api/character/?results=20").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,species:e.species,origin:e.origin.name,episode:e.episode,status:e.status}}))}))},g=function(){var e=Object(c.useState)([]),a=Object(s.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(""),i=Object(s.a)(l,2),u=i[0],h=i[1];Object(c.useEffect)((function(){f().then((function(e){n(e)}))}),[]);var d=t.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title--big"},"Rick and Morty"),r.a.createElement("div",{className:".display-block"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(E,{handlerFilter:function(e){h(e.value)},characters:d})),r.a.createElement(m.a,{path:"/character/:characterId",render:function(e){var a=e.match.params.characterId,c=t.find((function(e){return e.id===parseInt(a)}));if(void 0!==c)return r.a.createElement(o,{character:c})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.27e8b0f8.chunk.js.map