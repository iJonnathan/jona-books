(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,s=1;s<o.length;s++){var r=o[s];0!==i[r]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},s={app:0},i={app:0},n=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"019ad46a"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o={about:1};s[t]?e.push(s[t]):0!==s[t]&&o[t]&&e.push(s[t]=new Promise((function(e,o){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"fef4cbe6"}[t]+".css",i=l.p+a,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var c=n[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===a||d===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete s[t],p.parentNode.removeChild(p),o(n)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){s[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,o){a=i[t]=[e,o]}));e.push(a[2]=n);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var o=i[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,o[1](u)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=d;n.push([1,"chunk-vendors"]),o()})({0:function(t,e){},"02b5":function(t,e,o){"use strict";o("edfe")},"0782":function(t,e,o){"use strict";o("d8dd")},1:function(t,e,o){t.exports=o("56d7")},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},3:function(t,e){},3530:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin "},[o("div",{staticClass:"container",staticStyle:{width:"100%","max-width":"initial",margin:"0"}},[o("div",{staticClass:"row "},[o("div",{staticClass:"col s12"},[o("UploadBooks")],1)])])])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uploadBooks center-align"},[a("div",{staticClass:"container",staticStyle:{width:"100%","max-width":"initial",margin:"0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s6"},[a("div",{staticClass:"container",staticStyle:{width:"80%"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12 m12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedBookUpload.name,expression:"selectedBookUpload.name"}],attrs:{autocomplete:"off",id:"name",type:"text"},domProps:{value:t.selectedBookUpload.name},on:{input:function(e){e.target.composing||t.$set(t.selectedBookUpload,"name",e.target.value)}}}),a("label",{staticClass:"active",attrs:{for:"name"}},[t._v(" Nombre del libro")])]),a("div",{staticClass:"input-field col s12 m12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedBookUpload.author,expression:"selectedBookUpload.author"}],attrs:{autocomplete:"off",id:"author",type:"text",disabled:!t.selectedBookUpload.file},domProps:{value:t.selectedBookUpload.author},on:{input:function(e){e.target.composing||t.$set(t.selectedBookUpload,"author",e.target.value)}}}),a("label",{staticClass:"active",attrs:{for:"author"}},[t._v(" Autor")])]),a("div",{staticClass:"input-field col s12 m12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedBookUpload.category,expression:"selectedBookUpload.category"}],attrs:{autocomplete:"off",id:"category",type:"text",disabled:!t.selectedBookUpload.file},domProps:{value:t.selectedBookUpload.category},on:{input:function(e){e.target.composing||t.$set(t.selectedBookUpload,"category",e.target.value)}}}),a("label",{staticClass:"active",attrs:{for:"cactegory"}},[t._v(" Categoría")])]),a("div",{staticClass:"col s1 left-align",staticStyle:{padding:"7px"}},[a("a",{staticClass:"waves-effect waves-light btn-small",attrs:{disabled:!t.selectedBookUpload.file},on:{click:function(e){return t.removeUploadBook()}}},[a("i",{staticClass:"material-icons"},[t._v("delete")])])]),a("div",{staticClass:"col s11 right-align",staticStyle:{padding:"7px"}},[a("a",{staticClass:"waves-effect waves-light btn-small",attrs:{disabled:!t.allInfoToUploadAreComplete()},on:{click:function(e){return t.submitBooks()}}},[t._v("Subir Libros")])]),a("div",{staticClass:"col s12 divImportbooks"},[0==t.listBooksToUpload.length?a("div",[a("div",{staticClass:"file-field input-field"},[a("input",{attrs:{type:"file",multiple:"",name:"books",accept:".pdf"},on:{change:t.importBooks}}),t._m(0)])]):t._e(),t.listBooksToUpload.length>0?a("div",{attrs:{id:"listt"}},[a("div",{staticClass:"row"},t._l(t.listBooksToUpload,(function(e,s){return a("div",{key:s,staticClass:"col s12 m12 l12",class:{bookSelected:e.name==t.selectedBookUpload.name},on:{click:function(o){return t.chooseBookUpload(e)}}},[a("div",{staticClass:"col s1 m1 l1 ",staticStyle:{"padding-top":"30px"}},[t.isCompleteToUploadBook(e)?a("i",{staticClass:"material-icons",style:"color:green"},[t._v("check_circle_outline")]):t._e(),t.isCompleteToUploadBook(e)?t._e():a("i",{staticClass:"material-icons",style:"color:#F30202"},[t._v("highlight_off")])]),a("div",{staticClass:"col s2 m2 l2 "},[a("div",{staticClass:"file-field input-field left-align"},[a("input",{attrs:{type:"file",name:"covers",accept:"image/*"},on:{change:t.importCover}}),a("div",{staticClass:"file-path-wrapper divImportcover",attrs:{id:"div"+e.name}},[""==e.coverpath?a("img",{staticStyle:{"margin-left":"-9px","margin-bottom":"-6px"},attrs:{src:o("a22a"),width:"49",height:"65"}}):t._e(),""!=e.coverpath?a("img",{staticStyle:{"margin-left":"-9px","margin-bottom":"-6px"},attrs:{src:e.coverpath,id:"cover"+e.name,width:"49",height:"65"}}):t._e()])])]),a("div",{staticClass:"col s9 m9 l9",staticStyle:{"padding-top":"2%"}},[a("div",[a("span",{staticClass:"title"},[a("label",{staticStyle:{"font-size":"14px","word-break":"break-all"}},[a("b",[t._v(t._s(e.name))])])])]),a("div",[a("span",{staticClass:"title"},[a("label",{staticStyle:{"font-size":"14px","word-break":"break-all"}},[t._v(t._s(e.author))])])]),a("div",[a("span",{staticClass:"title"},[a("label",{staticStyle:{"font-size":"14px","word-break":"break-all"}},[t._v(t._s(e.category))])])])])])})),0)]):t._e()])])])]),a("div",{staticClass:"col s6 "},[a("div",{staticClass:"container",staticStyle:{width:"80%"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s5"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategory,expression:"selectedCategory"}],attrs:{id:"selectCategories"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCategory=e.target.multiple?o:o[0]}}},[a("option",{attrs:{value:"",selected:""}},[t._v("All")]),t._l(t.listCategories,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2),a("label",[t._v("Categorías")])]),a("div",{staticClass:"input-field col s7"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedAuthor,expression:"selectedAuthor"}],attrs:{id:"selectAuthors"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedAuthor=e.target.multiple?o:o[0]}}},[a("option",{attrs:{value:"",selected:""}},[t._v("All")]),t._l(t.listAuthors,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2),a("label",[t._v("Autores")])]),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{placeholder:"Buscar ...",id:"search",type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),a("div",{staticClass:"input-field col s11 divListBooks",staticStyle:{height:"auto","overflow-x":"hidden","overflow-y":"scroll","max-height":"600px"}},t._l(t.filterBooks,(function(e){return a("div",{key:e.id,staticClass:"col s12 m12 l12",class:{bookSelected:e.id==t.selectedBook.id},staticStyle:{margin:"0",padding:"1%","border-bottom":"1px dotted gray"},on:{click:function(o){return t.chooseBook(e)}}},[a("div",{staticClass:"col s1 m1 l1 "},[a("Book",{attrs:{coverpath:e.coverpath,widthBook:"42",heightBook:"67"}})],1),a("div",{staticClass:"col s11 m11 l11"},[a("div",[a("span",{staticClass:"title"},[a("label",{staticStyle:{"font-size":"14px","word-break":"break-all"}},[a("b",[t._v(t._s(e.name))])])])]),a("div",[a("span",{staticClass:"title"},[a("label",{staticStyle:{"font-size":"14px","word-break":"break-all"}},[t._v(t._s(e.author))])])]),a("div",[a("span",{staticClass:"title"},[a("label",{staticStyle:{"font-size":"14px","word-break":"break-all"}},[t._v(t._s(e.category))])])])])])})),0),a("div",{staticClass:"col s1"},[a("div",{staticStyle:{"padding-top":"30% blue"}},[a("a",{staticClass:"waves-effect waves-light btn-small  modal-trigger",attrs:{href:"#modalRemove",disabled:""==t.selectedBook.name}},[a("i",{staticClass:"material-icons"},[t._v("delete")])])]),a("div",{staticClass:"modal ",staticStyle:{height:"340px",width:"50%"},attrs:{id:"modalRemove"}},[a("div",{staticClass:"modal-content grey lighten-2"},[a("h4",[t._v("¿Estás seguro de eliminar este libro?")]),a("hr"),a("br"),a("div",{staticClass:"container",staticStyle:{width:"100%","max-width":"initial",margin:"0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s3 m3 l3 blue",staticStyle:{"padding-left":"15%"}},[a("Book",{attrs:{coverpath:t.selectedBook.coverpath,widthBook:"82",heightBook:"134"}})],1),a("div",{staticClass:"col s9 m9 l9"},[a("h6",[a("b",[t._v(t._s(t.selectedBook.name))])]),a("h6",[t._v(t._s(t.selectedBook.author))]),a("h6",[t._v(t._s(t.selectedBook.category))])])])])]),a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"waves-effect waves-green btn-flat",on:{click:function(e){return t.removeBook()}}},[t._v("Pues si")])])])])])])])])]),a("img",{attrs:{src:"",id:"output"}}),a("img",{staticStyle:{display:"none"},attrs:{src:"",id:"imgcover"}}),a("canvas",{staticStyle:{display:"none"},attrs:{id:"canvascover"}})])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"file-path-wrapper center-align",staticStyle:{"padding-top":"15px"}},[o("label",{staticStyle:{"font-size":"15px"}},[t._v("Importar Libros")])])}],r=o("1da1"),l=o("3835"),c=o("5530"),d=(o("96cf"),o("4e82"),o("4de4"),o("ac1f"),o("466d"),o("b0c0"),o("841c"),o("159b"),o("4fad"),o("1276"),o("d3b7"),o("5cc6"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search"},[o("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),o("div",{staticClass:"srch_wrpr",staticStyle:{"margin-left":"auto","margin-right":"auto"}},[o("div",{staticClass:"srch_sb_cnt"},[o("input",{staticClass:"sech_txt_inpt",attrs:{type:"text",placeholder:"Busca tu Canción/Artista..."},domProps:{value:t.search},on:{input:t.updateSearch}}),o("button",{staticClass:"srch_btn",on:{click:function(e){return t.selectTrack(t.selectedTrack)}}},[o("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])]),t.searchList.length>0?o("div",{staticClass:"containerTracks"},[o("div",{staticClass:"container",staticStyle:{height:"500px",overflowY:"auto",width:"100%","background-color":"white"}},t._l(t.searchList,(function(e){return o("div",{key:e.uri,staticClass:"row itemTrack",on:{click:function(o){return t.selectTrack(e)}}},[o("div",{staticClass:"col s4"},[o("img",{attrs:{src:e.albumUrl,height:"64px",width:"64px"}})]),o("div",{staticClass:"col s8",staticStyle:{"padding-top":"3%","text-float":"left"}},[t._v(" "+t._s(e.title)+" "),o("br"),o("b",[t._v(" "+t._s(e.artist))])])])})),0)]):t._e()])}),u=[],p=o("bc3a"),h=o.n(p),f={name:"Search",props:{msg:String},data:function(){return{search:"",searchList:[],updateSearch:""}}},m=f,v=(o("0782"),o("2877")),g=Object(v["a"])(m,d,u,!1,null,null,null),A=g.exports,k=o("2f62"),C=o("c71c"),b=o("1157");window.$=b;var w={name:"UploadBooks",components:{Search:A,Book:C["a"]},data:function(){return{listBooksToUpload:[],selectedBookUpload:{name:"",author:"",category:"",file:null,cover:null,coverpath:""},search:"",selectedBook:{id:"",name:"",author:"",category:"",file:null,cover:null,coverpath:""},selectedCategory:"",selectedAuthor:""}},watch:{uploadComponetIsLoad:function(t){if(t){var e=document.querySelectorAll("select");M.FormSelect.init(e),this.loadAutocompleteCategoriesAndAuthors(),this.selectedBookUpload={name:"",author:"",category:"",file:null,cover:null,coverpath:""},this.selectedBook={id:"",name:"",author:"",category:"",file:null,cover:null,coverpath:""}}}},beforeCreate:function(){this.$store.commit("getBooksInfo")},mounted:function(){M.Modal.init(document.querySelectorAll("#modalRemove"))},computed:Object(c["a"])(Object(c["a"])({},Object(k["b"])({listBooks:"listBooks",listCategories:"listCategories",listAuthors:"listAuthors",uploadComponetIsLoad:"uploadComponetIsLoad"})),{},{filterBooks:function(){var t=this,e=new Intl.Collator("es"),o=this.listBooks.filter((function(e){if((""==t.selectedCategory&&""==t.selectedAuthor||""==t.selectedCategory&&""!=t.selectedAuthor&&e.author==t.selectedAuthor||""!=t.selectedCategory&&""==t.selectedAuthor&&e.category==t.selectedCategory||""!=t.selectedCategory&&""!=t.selectedAuthor&&e.category==t.selectedCategory&&e.author==t.selectedAuthor)&&(e.name.toLowerCase().match(t.search.toLowerCase())||e.category.toLowerCase().match(t.search.toLowerCase())||e.author.toLowerCase().match(t.search.toLowerCase())))return e})).sort((function(t,o){return e.compare(t.name,o.name)}));return o}}),methods:{loadAutocompleteCategoriesAndAuthors:function(){var t=this,e={},o={};this.listCategories.forEach((function(t){e[t]=null})),M.Autocomplete.init(document.getElementById("category"),{data:e,onAutocomplete:function(e){t.selectedBookUpload.category=e}}),this.listAuthors.forEach((function(t){o[t]=null})),M.Autocomplete.init(document.getElementById("author"),{data:o,onAutocomplete:function(e){t.selectedBookUpload.author=e}})},allInfoToUploadAreComplete:function(){var t=this,e=!0;return 0==this.listBooksToUpload.length&&(e=!1),this.listBooksToUpload.forEach((function(o){t.isCompleteToUploadBook(o)||(e=!1)})),e},isCompleteToUploadBook:function(t){return!(""==t.name||!t.cover||!t.file||""==t.author||""==t.category||""==t.coverpath)},importBooks:function(t){for(var e=0,o=Object.entries(t.target.files);e<o.length;e++){var a=Object(l["a"])(o[e],2),s=(a[0],a[1]);this.listBooksToUpload.push({name:s.name,category:"",author:"",file:s,cover:null,coverpath:""})}this.selectedBookUpload=this.listBooksToUpload[0],document.getElementById("name").focus()},importCover:function(t){var e=document.getElementById("canvascover"),o=e.getContext("2d");o.clearRect(0,0,e.width,e.height);var a=this,s=new FileReader;s.onload=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var o,s,i,n,r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=document.getElementById("imgcover"),o.src=e.target.result,s=document.getElementById("canvascover"),i=100,n=150,s.width=i,s.height=n,r=s.getContext("2d"),r.drawImage(o,0,0,i,n),t.next=11,s.toDataURL("image/png",1);case 11:l=t.sent,a.selectedBookUpload.coverpath=l,a.selectedBookUpload.cover=a.dataURLtoFile(l,"cover.png");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s.readAsDataURL(t.target.files[0])},dataURLtoFile:function(t,e){var o=t.split(","),a=o[0].match(/:(.*?);/)[1],s=atob(o[1]),i=s.length,n=new Uint8Array(i);while(i--)n[i]=s.charCodeAt(i);return new File([n],e,{type:a})},chooseBookUpload:function(t){var e=this.listBooksToUpload.indexOf(t);this.selectedBookUpload=this.listBooksToUpload[e]},removeUploadBook:function(){var t=this.listBooksToUpload.indexOf(this.selectedBookUpload);this.listBooksToUpload.splice(t,1),this.listBooksToUpload.length>0?this.selectedBookUpload=this.listBooksToUpload[0]:this.selectedBookUpload={name:"",author:"",category:"",file:null,cover:null,coverpath:""}},submitBooks:function(){var t=this;if(this.allInfoToUploadAreComplete()){for(var e=new FormData,o=0;o<this.listBooksToUpload.length;o++)e.append("name["+o+"]",this.listBooksToUpload[o].name),e.append("author["+o+"]",this.listBooksToUpload[o].author),e.append("category["+o+"]",this.listBooksToUpload[o].category),e.append("books["+o+"]",this.listBooksToUpload[o].file),e.append("covers["+o+"]",this.listBooksToUpload[o].cover);h.a.post("http://localhost:3000/books",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e.data),t.$store.commit("getBooksInfo"),t.listBooksToUpload=[]})).catch((function(t){return console.log(t)}))}else alert("existe información incompleta")},chooseBook:function(t){this.selectedBook=t},removeBook:function(){var t=this;h.a.delete("http://localhost:3000/book",{params:{id:this.selectedBook.id}}).then((function(e){console.log(e.data);var o=document.getElementById("modalRemove"),a=M.Modal.getInstance(o);a.close(),t.$store.commit("getBooksInfo")})).catch((function(t){return console.log(t)}))},editBook:function(){this.listBooks.push(this.listBooks[0])}}},B=w,y=(o("85ff"),Object(v["a"])(B,i,n,!1,null,null,null)),_=y.exports,S={name:"Admin",components:{UploadBooks:_}},x=S,U=Object(v["a"])(x,a,s,!1,null,null,null);e["default"]=U.exports},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app fullScreen",attrs:{id:"app"}},[o("router-view")],1)},i=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Bookshelft")],1)},r=[],l=o("3530"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{key:t.$route.fullPath,staticClass:"bookshelft center-align",staticStyle:{"background-color":"#e4e4e4"}},[o("div",{staticClass:"navbar-fixed"},[o("nav",{staticClass:"header-bookshlft"},[o("div",{staticClass:"nav-wrapper"},[t._m(0),o("form",{attrs:{action:"",method:"post"}},[o("div",{staticClass:"input-field"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticStyle:{"background-color":"#f4f4f4"},attrs:{autocomplete:"off",id:"search",type:"search",name:"search",placeholder:"Buscar ..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._m(1),o("i",{staticClass:"material-icons",on:{click:function(e){t.search=""}}},[t._v("close")])])]),o("ul",{staticClass:"right hide-on-med-and-down",staticStyle:{padding:"6px 30px 0 0"},attrs:{id:"nav-mobile"}},[o("li",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFilter,expression:"selectedFilter"}],staticClass:"selectFilter",attrs:{id:"selectFilter"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedFilter=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"all",selected:""}},[t._v("All")]),o("option",{attrs:{value:"authors"}},[t._v("Autores")]),o("option",{attrs:{value:"categories"}},[t._v("Categorias")])])])])])])]),o("div",{staticClass:"container center-align container-bookshelft"},[o("div",{staticClass:"row"},t._l(t.filterListBooks,(function(e){return o("div",{key:e.id,staticClass:"col s4 m3 l3 xl3  item ",style:t.cssVars,on:{click:function(o){return t.openBook(e)}}},[o("Book",{attrs:{coverpath:e.coverpath,widthBook:t.widthBook,heightBook:t.heightBook}})],1)})),0)])])},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"left"},[o("li",[o("a",[o("i",{staticClass:"hamburger material-icons hide-on-med-and-up"},[t._v("menu")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"label-icon",attrs:{for:"search"}},[o("i",{staticClass:"material-icons"},[t._v("search")])])}],u=o("5530"),p=(o("4e82"),o("4de4"),o("ac1f"),o("466d"),o("b0c0"),o("841c"),o("c71c")),h=o("2f62"),f=o("772b"),m={name:"Bookshelft",components:{Book:p["a"],PdfViewer:f["default"]},data:function(){return{search:"",selectedFilter:"1"}},beforeCreate:function(){this.$store.commit("getBooksInfo");var t=document.querySelectorAll("select");M.FormSelect.init(t)},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.$store.commit("setWidthScreen",document.querySelector(".app").offsetWidth)}))},computed:Object(u["a"])({},Object(h["b"])({listBooks:"listBooks",listCategories:"listCategories",listAuthors:"listAuthors",widthScreen:"widthScreen",widthBook:"widthBook",heightBook:"heightBook",filterListBooks:function(){var t=this,e=new Intl.Collator("es"),o=this.listBooks.filter((function(e){if(e.name.toLowerCase().match(t.search.toLowerCase())||e.category.toLowerCase().match(t.search.toLowerCase())||e.author.toLowerCase().match(t.search.toLowerCase()))return e})).sort((function(t,o){return e.compare(t.name,o.name)}));return o},cssVars:function(){var t=0;return this.widthScreen>1e3?t=100:this.widthScreen>600&&this.widthScreen<=1e3?t=70:this.widthScreen>400&&this.widthScreen<=600?t=50:this.widthScreen>200&&this.widthScreen<=400&&(t=40),{"--width":String(parseInt(this.widthBook)+t)+"px","--height":String(parseInt(this.heightBook)+t)+"px"}}})),methods:{openBook:function(t){this.$router.push({name:"PdfViewer",params:{idBook:t.id}})}}},v=m,g=(o("a6eb"),o("2877")),A=Object(g["a"])(v,c,d,!1,null,"1f03d95b",null),k=A.exports,C={name:"Home",components:{Admin:l["default"],Bookshelft:k},data:function(){return{currentComponent:"Bookshelft"}}},b=C,w=Object(g["a"])(b,n,r,!1,null,null,null),B=w.exports,y=o("4d5c"),_=o.n(y),S={name:"App",components:{Home:B},mounted:function(){_.a.AutoInit(),console.log($(document).height()+"   "+document.querySelector(".app").offsetWidth),this.$store.commit("setWidthScreen",document.querySelector(".app").offsetWidth),window.onpopstate=function(){location.reload()}}},x=S,U=(o("5c0b"),Object(g["a"])(x,s,i,!1,null,null,null)),L=U.exports,T=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),P=o("14b7"),E=o.n(P),I={openCertificate:function(){if(localStorage.hasOwnProperty("access-token")&&null!=localStorage.getItem("access-token")){var t=localStorage.getItem("access-token"),e=E.a.decode(t,{complete:!0});return e}return null},isCertificateValid:function(){var t=this.openCertificate();if(null!=t){var e=t.payload.exp;return!(1e3*e<new Date)||(localStorage.removeItem("access-token"),!1)}return!1},isAdmin:function(){var t=this.openCertificate();return null!=t&&"admin"==t.payload.user._role}},j=I;a["a"].use(T["a"]);var O=[{path:"/",name:"Home",component:B},{path:"/admin",name:"Admin",component:function(){return o.e("about").then(o.bind(null,"3530"))}},{path:"/login",name:"Login",component:function(){return o.e("about").then(o.bind(null,"a55b"))},beforeEnter:function(t,e,o){var a=t.query.redirect;if(null!=a){var s=j.isCertificateValid();s?o({path:a}):o()}else o()}},{path:"/book/:idBook",name:"PdfViewer",props:function(t){return{idBook:t.params.idBook}},component:function(){return o.e("about").then(o.bind(null,"772b"))}}],F=new T["a"]({mode:"history",base:"/",routes:O}),R=F,V=o("1da1"),N=(o("96cf"),o("2b3d"),o("b64b"),o("159b"),o("caad"),o("2532"),o("a434"),o("bc3a")),D=o.n(N);a["a"].use(h["a"]);var z=new h["a"].Store({state:{currentComponet:l["default"],listBooks:[],keysBooks:[],listCategories:[],listAuthors:[],uploadComponetIsLoad:!1,bookFilePath:null,pdfViewerComponentIsLoad:!1,widthScreen:0,heightScreen:0,widthBook:"",heightBook:""},mutations:{setCurrentComponent:function(t,e){t.currentComponet=e},setWidthScreen:function(t,e){t.widthScreen=e,t.heightScreen=$(document).height();var o=parseFloat(e)/18.8,a=parseFloat(e)/12.8;o<70||a<90?(t.widthBook="70",t.heightBook="90"):o>105||a>150?(t.widthBook="105",t.heightBook="150"):(t.widthBook=String(o),t.heightBook=String(a))},add:function(t,e){t.listAuthors.push(e)},getBookFile:function(t,e){console.log("entrando"),t.pdfViewerComponentIsLoad=!1;var o={responseType:"blob",params:{id:e},headers:{"Content-Type":"application/pdf"}};D.a.get(window.serverUrl+"/book",o).then((function(e){console.log(e.data),t.bookFilePath=URL.createObjectURL(new Blob([e.data],{type:"application/pdf"})),t.pdfViewerComponentIsLoad=!0})).catch((function(t){return console.log(t)}))},getBooksInfo:function(t){t.uploadComponetIsLoad=!1,console.log(window.serverUrl+"/coverbook"),D.a.get(window.serverUrl+"/books").then(function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(o){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object.keys(o.data),a.forEach((function(e){t.keysBooks.includes(e)||(t.listBooks.push(o.data[e]),t.keysBooks.push(e))})),t.keysBooks.forEach((function(e){if(!a.includes(e)){var o=t.keysBooks.indexOf(e);t.keysBooks.splice(o,1),t.listBooks.splice(o,1)}})),e.next=5,t.listBooks.forEach((function(e){var o={responseType:"blob",params:{id:e.id},headers:{"Content-Type":"image/png"}};t.listCategories.includes(e.category)||t.listCategories.push(e.category),t.listAuthors.includes(e.author)||t.listAuthors.push(e.author),D.a.get(window.serverUrl+"/coverbook",o).then((function(t){e.coverpath=window.URL.createObjectURL(new Blob([t.data]))})).catch((function(t){return console.log(t)}))}));case 5:t.uploadComponetIsLoad=!0;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))}},actions:{},modules:{}});o("8266"),o("6885"),o("c789");a["a"].config.productionTip=!1,window.serverUrl="https://jonabooks-server.herokuapp.com:/api",new a["a"]({router:R,store:z,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},6:function(t,e){},"61d5":function(t,e,o){"use strict";o("c4a4")},7:function(t,e){},"749b":function(t,e,o){},"772b":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{margin:"0px",padding:"0px",overflow:"hidden"},attrs:{id:"PdfViewer"}},[t.pdfViewerComponentIsLoad?o("div",[o("iframe",{staticStyle:{overflow:"hidden","overflow-x":"hidden","overflow-y":"hidden",height:"100%",width:"100%",position:"absolute",top:"0px",left:"0px",right:"0px",bottom:"0px"},attrs:{id:"miframe",src:t.bookFilePath,width:"100%",height:"100%",type:"application/pdf"}})]):t._e(),t.pdfViewerComponentIsLoad?t._e():o("div",[t._v(" cargando ... ")])])},s=[],i=o("5530"),n=o("858e"),r=o("2f62"),l={name:"PdfViewer",components:{pdf:n["a"]},props:{idBook:{type:String,default:""}},data:function(){return{currentPage:0,pageCount:0,src:null,numPages:0,link:0,i:0}},watch:{pdfViewerComponentIsLoad:function(t){},idBook:function(t){alert(t)}},mounted:function(){this.$store.commit("getBookFile",this.idBook)},computed:Object(i["a"])({},Object(r["b"])({bookFilePath:"bookFilePath",pdfViewerComponentIsLoad:"pdfViewerComponentIsLoad",heightScreen:"heightScreen"})),methods:{changePdfPage:function(t){0===t&&this.currentPage>1&&this.currentPage--,1===t&&this.currentPage<this.pageCount&&this.currentPage++},loadPdfHandler:function(){this.currentPage=2},handleOpen:function(){this.pdfDialog=!0},print:function(){document.getElementById("2").focus()}}},c=l,d=(o("61d5"),o("2877")),u=Object(d["a"])(c,a,s,!1,null,"c5de5894",null);e["default"]=u.exports},8:function(t,e){},"85ff":function(t,e,o){"use strict";o("749b")},9:function(t,e){},"9c0c":function(t,e,o){},a22a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAaCAMAAAD7eU6DAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGxQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdCL/qgAAACR0Uk5TACA/PICQ/7DA4NBAoDDwUM/fEHBfYL9PPUvEuH+vn/Toj+9MQLwApgAAAaBJREFUeJytktFynDAMReXElmXJwiACTdukSej//2NlWGY6O1P2pXpABo6l62sB/B3h6YjnW34K8O+IKSFizIRYmIsvr2CBighCTolAfACrDgiNEug4KtRLuNVae2UF1zBZu648N2CHg7h2nK9hkMkkCL1Ah4M+gP1Mi1DUjEiwPIIxhJkmDTmBTddwQFwhEo6S2rfp2jo8gm75Eg5yxPMty9V1/9ewc8Bez8X3+y9ntu4VEvuJGHGgwv21lv6MP0qlGBP9jDVGGlAc5gACyozZutEDjrA4bIE5tG5R9f8AOjg8GKTpDQIXsPdp6WAwxBwiZ6VxXSeH11UtO1xh9jpvv3jus+z39+HuEi5aODfywNq1LkAOR6m7/yytC07ts8/mYK6vLrN5ywpNekeH3zUd8Jf1i2v2iSiWrDoseV3XzSv7nh2etDkjrlBcTwk+HVhNYHBYe69dxqa2u9FESoCZN9GZDHw2cTPxChzNPUvZt3pH7Zr9cDLrl/u8vSxV1l3T0nwPu8ui0Ha4StrhIxjvg++ygJ0D9nouft9/ObP9Ab4FGhV65FREAAAAAElFTkSuQmCC"},a6eb:function(t,e,o){"use strict";o("f346")},c4a4:function(t,e,o){},c71c:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book-component"},[o("div",{staticClass:"book-container ",style:t.cssVars},[o("div",{staticClass:"book"},[o("img",{attrs:{src:t.coverpath}})])])])},s=[],i={name:"Book",props:{coverpath:String,widthBook:String,heightBook:String},computed:{cssVars:function(){return{"--width":this.widthBook+"px","--height":this.heightBook+"px"}}}},n=i,r=(o("02b5"),o("2877")),l=Object(r["a"])(n,a,s,!1,null,"00141a3c",null);e["a"]=l.exports},d8dd:function(t,e,o){},edfe:function(t,e,o){},f346:function(t,e,o){}});
//# sourceMappingURL=app.f8854b69.js.map