(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(e){e.exports={"menu.load_from_url":"Otw\xf3rz URL","menu.load_from_file":"Otw\xf3rz plik","menu.print":"Drukuj","menu.download":"Pobierz","menu.pdf_file":"Plik PDF","menu.png_file":"Plik PNG","menu.svg_file":"Plik SVG","menu.github":"\u0179r\xf3d\u0142a na GitHub","intro.title":"Topola Genealogy","intro.description":"Topola Genealogy pozwala przegl\u0105da\u0107 drzewo genealogiczne w interaktywny spos\xf3b.","intro.instructions":"Kliknij OTW\xd3RZ URL lub OTW\xd3RZ PLIK, aby za\u0142adowa\u0107 plik GEDCOM. Wi\u0119kszo\u015b\u0107 program\xf3w genealogicznych posiada funkcj\u0119 eksportu do pliku GEDCOM.","intro.examples":"Poni\u017cej jest kilka przyk\u0142ad\xf3w znalezionych w Internecie:","intro.from":"\u017ar\xf3d\u0142o:","intro.privacy":"Prywatno\u015b\u0107","intro.privacy_note":'U\u017cywaj\u0105c funkcji "Otw\xf3rz plik", Twoje dane nie s\u0105 nigdzie wysy\u0142ane i pozostaj\u0105 na Twoim komputerze. U\u017cywaj\u0105c funkcji "Otw\xf3rz URL", dane z podanego adresu przesy\u0142ane s\u0105 przez us\u0142ug\u0119 {link} w celu umo\u017cliwienia za\u0142adowania danych z innej domeny (CORS).',"load_from_url.title":"Otw\xf3rz z adresu URL","load_from_url.comment":"Dane z podanego adresu URL zostan\u0105 za\u0142adowane poprzez us\u0142ug\u0119 {link} w celu unikni\u0119cia problem\xf3w z CORS.","load_from_url.cancel":"Anuluj","load_from_url.load":"Otw\xf3rz","gedcom.BAPM":"Chrzest","gedcom.BIRT":"Narodziny","gedcom.BURI":"Pogrzeb","gedcom.CHR":"Chrzest","gedcom.DEAT":"\u015amier\u0107","gedcom.EMAIL":"E-mail","gedcom.OCCU":"Zaw\xf3d","gedcom.TITL":"Tytu\u0142","gedcom.WWW":"Strona WWW"}},241:function(e,t){},279:function(e,t,n){e.exports=n(497)},291:function(e,t){},297:function(e,t){},491:function(e,t,n){},497:function(e,t,n){"use strict";n.r(t);var a=n(152),r=n(238),o=n(239),i=n(0),l=n(59),c=n(240),s=n(15),u=n(32),d=n(33),m=n(35),h=n(34),f=n(36),p=n(41),g=n(20),E=n(243),v=n.n(E),w=n(149),y=n(67);function b(){var e=g.select("#chart").node().parentElement;e.scrollLeft=-g.event.transform.x,e.scrollTop=-g.event.transform.y}function O(){var e=g.select("#chart").node().parentElement,t=e.scrollLeft+e.clientWidth/2,n=e.scrollTop+e.clientHeight/2;g.select(e).call(g.zoom().translateTo,t,n)}var C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).chart=void 0,n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderChart",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialRender:!1};t.initialRender&&(g.select("#chart").node().innerHTML="",this.chart=Object(y.createChart)({json:this.props.data,chartType:y.HourglassChart,renderer:y.DetailedRenderer,svgSelector:"#chart",indiCallback:function(t){return e.props.onSelection(t)},animate:!0,updateSvgSize:!1,locale:this.context.intl.locale}));var n=this.chart.render({startIndi:this.props.selection.id,baseGeneration:this.props.selection.generation}),a=g.select("#chart"),r=a.node().parentElement;g.select(r).on("scroll",O).call(g.zoom().scaleExtent([1,1]).translateExtent([[0,0],n.size]).on("zoom",b));var o,i,l=r.clientWidth/2-n.origin[0],c=r.clientHeight/2-n.origin[1],s=g.max([0,(r.clientWidth-n.size[0])/2]),u=g.max([0,(r.clientHeight-n.size[1])/2]),d=a.transition().delay(200).duration(500);(t.initialRender?a:d).attr("transform","translate(".concat(s,", ").concat(u,")")).attr("width",n.size[0]).attr("height",n.size[1]),t.initialRender?(r.scrollLeft=-l,r.scrollTop=-c):d.tween("scrollLeft",(i=-l,function(){var e=g.interpolateNumber(r.scrollLeft,i);return function(t){r.scrollLeft=e(t)}})).tween("scrollTop",(o=-c,function(){var e=g.interpolateNumber(r.scrollTop,o);return function(t){r.scrollTop=e(t)}}))}},{key:"componentDidMount",value:function(){this.renderChart({initialRender:!0})}},{key:"componentDidUpdate",value:function(e){this.renderChart({initialRender:this.props.data!==e.data})}},{key:"render",value:function(){return i.createElement("div",{id:"svgContainer"},i.createElement("svg",{id:"chart"}))}},{key:"getSvgContents",value:function(){var e=document.getElementById("chart").cloneNode(!0);return e.removeAttribute("transform"),(new XMLSerializer).serializeToString(e)}},{key:"print",value:function(){var e=this,t=document.createElement("iframe");t.style.position="absolute",t.style.top="-1000px",t.style.left="-1000px",t.onload=function(){t.contentDocument.open(),t.contentDocument.write(e.getSvgContents()),t.contentDocument.close(),setTimeout(function(){t.contentWindow.focus(),t.contentWindow.print(),t.parentNode.removeChild(t)},500)},document.body.appendChild(t)}},{key:"downloadSvg",value:function(){var e=new Blob([this.getSvgContents()],{type:"image/svg+xml"});Object(w.saveAs)(e,"topola.svg")}},{key:"drawOnCanvas",value:function(){var e=document.createElement("canvas"),t=document.getElementById("chart");e.width=2*t.getBBox().width,e.height=2*t.getBBox().height;var n=new Blob([this.getSvgContents()],{type:"image/svg+xml"}),a=new Image;return a.src=URL.createObjectURL(n),new Promise(function(t){a.onload=function(){var n=e.getContext("2d"),r=n.fillStyle;n.fillStyle="white",n.fillRect(0,0,e.width,e.height),n.fillStyle=r,n.drawImage(a,0,0,e.width,e.height),t(e)}})}},{key:"downloadPng",value:function(){var e=function(e){e&&Object(w.saveAs)(e,"topola.png")};this.drawOnCanvas().then(function(t){return t.toBlob(e,"image/png")})}},{key:"downloadPdf",value:function(){this.drawOnCanvas().then(function(e){var t=new v.a({orientation:e.width>e.height?"l":"p",unit:"pt",format:[e.width,e.height]});t.addImage(e,"PNG",0,0,e.width,e.height,"NONE"),t.save("topola.pdf")})}}]),t}(i.PureComponent);C.contextTypes={intl:s.d};var k=n(245),j=n.n(k),R=["NAME"],z=["BIRT","BAPM","CHR","DEAT","BURI"],D=["TITL","OCCU","WWW","EMAIL"],S=new Map([["BAPM","Baptism"],["BIRT","Birth"],["BURI","Burial"],["CHR","Christening"],["DEAT","Death"],["EMAIL","E-mail"],["OCCU","Occupation"],["TITL","Title"],["WWW","WWW"]]);function M(e){return i.createElement(s.a,{id:"gedcom.".concat(e),defaultMessage:S.get(e)||e})}function P(e,t){var n=[],a=e.tree.find(function(e){return"DATE"===e.tag});a&&a.data&&n.push(a.data);var r=e.tree.find(function(e){return"PLAC"===e.tag});return r&&r.data&&n.push(r.data),e.tree.filter(function(e){return"NOTE"===e.tag}).forEach(function(e){n.push(i.createElement("i",null,e.data))}),n.length?i.createElement(i.Fragment,null,i.createElement("div",{className:"ui sub header"},M(t)),i.createElement("span",null,n.map(function(e){return i.createElement(i.Fragment,null,e,i.createElement("br",null))}))):null}function T(e,t){var n=[];return e.data&&n.push(e.data),e.tree.filter(function(e){return"NOTE"===e.tag}).forEach(function(e){n.push(i.createElement("i",null,e.data))}),n.length?i.createElement(i.Fragment,null,i.createElement("div",{className:"ui sub header"},M(t)),i.createElement("span",null,n.map(function(e){return i.createElement(i.Fragment,null,e,i.createElement("br",null))}))):null}function L(e,t){return i.createElement("h2",{className:"ui header"},e.data.split("/").filter(function(e){return!!e}).map(function(e){return i.createElement(i.Fragment,null,e,i.createElement("br",null))}))}function _(e,t,n){return j()(t,function(t){return e.filter(function(e){return e.tag===t}).map(function(e){return n(e,t)})}).filter(function(e){return null!==e}).map(function(e){return i.createElement("div",{className:"ui segment"},e)})}var U=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.gedcom.indis[this.props.indi].tree;return i.createElement("div",{className:"ui segments",id:"details"},_(e,R,L),_(e,z,P),_(e,D,T))}}]),t}(i.Component),I=n(145);function N(e){return e.substring(1,e.length-1)}function x(e){var t=e.find(function(e){return"HEAD"===e.tag}),n={},a={};return e.forEach(function(e){"INDI"===e.tag?n[N(e.pointer)]=e:"FAM"===e.tag&&(a[N(e.pointer)]=e)}),{head:t,indis:n,fams:a}}function W(e,t){if(!e.children)return e;var n=e.children.sort(function(e){var t=new Map;return e.indis.forEach(function(e){t[e.id]=e}),function(e,n){var a,r,o=(a=e)<(r=n)?-1:a>r?1:0,i=t[e],l=t[n],c=i&&i.birth,s=l&&l.birth,u=c&&(c.date||c.dateRange&&c.dateRange.from),d=s&&(s.date||s.dateRange&&s.dateRange.from);return u&&u.year&&d&&d.year?u.year!==d.year?u.year-d.year:u.month&&d.month?u.month!==d.month?u.month-d.month:u.day&&d.day&&u.day!==d.day?u.month-d.month:o:o:o}}(t));return Object.assign({},e,{children:n})}function A(e){var t=e.fams.map(function(t){return W(t,e)});return Object.assign({},e,{fams:t})}function F(e){if(!e.imageUrl||e.imageUrl.startsWith("http"))return e;var t=Object.assign({},e);return delete t.imageUrl,t}function B(e){var t=e.indis.map(F);return Object.assign({},e,{indis:t})}function G(e,t,n){return{id:t||e.indis[0].id,generation:n||0}}function H(e,t){var n=function(e){var t=Object(I.parse)(e),n=Object(y.gedcomEntriesToJson)(t);if(!n||!n.indis||!n.indis.length||!n.fams||!n.fams.length)throw new Error("Failed to read GEDCOM file");return{chartData:B(A(n)),gedcom:x(t)}}(e),a=JSON.stringify(n);try{sessionStorage.setItem(t,a)}catch(r){console.warn("Failed to store data in session storage: "+r)}return n}function J(e,t){try{return Promise.resolve(function(e,t){var n=sessionStorage.getItem(e);if(n)return JSON.parse(n);if(!t)throw new Error("Error loading data. Please upload your file again.");return H(t,e)}(e,t))}catch(n){return Promise.reject(new Error("Failed to read GEDCOM file"))}}var V=n(513),K=n(506);function Z(e){return i.createElement(K.a,{to:{pathname:"/view",search:p.stringify({url:e.url})}},e.text)}function q(){return i.createElement(V.a,{className:"intro"},i.createElement(V.a.Content,null,i.createElement(V.a.Header,null,i.createElement(s.a,{id:"intro.title",defaultMessage:"Topola Genealogy Viewer"}))),i.createElement(V.a.Content,null,i.createElement("p",null,i.createElement(s.a,{id:"intro.description",defaultMessage:"Topola Genealogy is a genealogy tree viewer that lets you browse the structure of the family."})),i.createElement("p",null,i.createElement(s.a,{id:"intro.instructions",defaultMessage:"Use the LOAD FROM URL or LOAD FROM FILE buttons above to load a GEDCOM file. You can export a GEDCOM file from most of the existing genealogy programs and web sites."})),i.createElement("p",null,i.createElement(s.a,{id:"intro.examples",defaultMessage:"Here are some examples from the web that you can view:"})),i.createElement("ul",null,i.createElement("li",null,i.createElement(Z,{url:"http://genpol.com/module-Downloads-prep_hand_out-lid-32.html",text:"Karol Wojty\u0142a"})," ","(",i.createElement(s.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"http://genpol.com/module-Downloads-display-lid-32.html"},"GENPOL"),")"),i.createElement("li",null,i.createElement(Z,{url:"https://webtreeprint.com/tp_downloader.php?path=famous_gedcoms/shakespeare.ged",text:"Shakespeare"})," ","(",i.createElement(s.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"https://webtreeprint.com/tp_famous_gedcoms.php"},"webtreeprint.com"),")"),i.createElement("li",null,i.createElement(Z,{url:"http://genealogyoflife.com/tng/gedcom/HarryPotter.ged",text:"Harry Potter"})," ","(",i.createElement(s.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"http://famousfamilytrees.blogspot.com/"},"Famous Family Trees"),")")),i.createElement("p",null,i.createElement("b",null,i.createElement(s.a,{id:"intro.privacy",defaultMessage:"Privacy"})),":",i.createElement(s.a,{id:"intro.privacy_note",defaultMessage:'When using the "load from file" option, this site does not send your data anywhere and files loaded from disk do not leave your computer. When using "load from URL", data is passed through the {link} service to deal with an issue with cross-site file loading in the browser (CORS).',values:{link:i.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere")}}))))}var X=n(514),Y=n(523),Q=n(509),$=n(520),ee=n(522),te=n(517),ne=n(250),ae=n.n(ne),re=n(511),oe=n(519),ie=n(237),le=n(510),ce=n(508),se=n(516),ue=n(515),de=n(512),me=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loadUrlDialogOpen:!1},n.inputRef=void 0,n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleUpload",value:function(e){var t=this,n=e.target.files;if(n&&n.length){var a=new FileReader;a.onload=function(e){var n=e.target.result,a=ae()(n);t.props.history.push({pathname:"/view",search:p.stringify({file:a}),state:{data:n}})},a.readAsText(n[0])}}},{key:"handleLoadFromUrl",value:function(){var e=this;this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!0}),function(){return e.inputRef.focus()})}},{key:"handleClose",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1}))}},{key:"handleLoad",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1})),this.state.url&&this.props.history.push({pathname:"/view",search:p.stringify({url:this.state.url})})}},{key:"handleUrlChange",value:function(e){this.setState(Object.assign({},this.state,{url:e.target.value}))}},{key:"render",value:function(){var e=this,t=i.createElement(re.a,{open:this.state.loadUrlDialogOpen,onClose:function(){return e.handleClose()},centered:!1},i.createElement(oe.a,null,i.createElement(ie.a,{name:"cloud download"}),i.createElement(s.a,{id:"load_from_url.title",defaultMessage:"Load from URL",children:function(e){return e}})),i.createElement(re.a.Content,null,i.createElement(le.a,{onSubmit:function(){return e.handleLoad()}},i.createElement(ce.a,{placeholder:"https://",fluid:!0,onChange:function(t){return e.handleUrlChange(t)},ref:function(t){return e.inputRef=t}}),i.createElement("p",null,i.createElement(s.a,{id:"load_from_url.comment",defaultMessage:"Data from the URL will be loaded through {link} to avoid CORS issues.",values:{link:i.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere.herokuapp.com")}})))),i.createElement(re.a.Actions,null,i.createElement(se.a,{secondary:!0,onClick:function(){return e.handleClose()}},i.createElement(s.a,{id:"load_from_url.cancel",defaultMessage:"Cancel"})),i.createElement(se.a,{primary:!0,onClick:function(){return e.handleLoad()}},i.createElement(s.a,{id:"load_from_url.load",defaultMessage:"Load"})))),n=this.props.showingChart?i.createElement(i.Fragment,null,i.createElement(ue.a.Item,{as:"a",onClick:function(){return e.props.onPrint()}},i.createElement(ie.a,{name:"print"}),i.createElement(s.a,{id:"menu.print",defaultMessage:"Print"})),i.createElement(de.a,{trigger:i.createElement("div",null,i.createElement(ie.a,{name:"download"}),i.createElement(s.a,{id:"menu.download",defaultMessage:"Download"})),className:"item"},i.createElement(de.a.Menu,null,i.createElement(de.a.Item,{onClick:function(){return e.props.onDownloadPdf()}},i.createElement(s.a,{id:"menu.pdf_file",defaultMessage:"PDF file"})),i.createElement(de.a.Item,{onClick:function(){return e.props.onDownloadPng()}},i.createElement(s.a,{id:"menu.png_file",defaultMessage:"PNG file"})),i.createElement(de.a.Item,{onClick:function(){return e.props.onDownloadSvg()}},i.createElement(s.a,{id:"menu.svg_file",defaultMessage:"SVG file"}))))):null;return i.createElement(ue.a,{attached:"top",inverted:!0,color:"blue",size:"large"},i.createElement(K.a,{to:"/"},i.createElement(ue.a.Item,null,i.createElement("b",null,"Topola Genealogy"))),i.createElement(ue.a.Item,{as:"a",onClick:function(){return e.handleLoadFromUrl()}},i.createElement(ie.a,{name:"cloud download"}),i.createElement(s.a,{id:"menu.load_from_url",defaultMessage:"Load from URL"})),i.createElement("input",{className:"hidden",type:"file",accept:".ged",id:"fileInput",onChange:function(t){return e.handleUpload(t)}}),i.createElement("label",{htmlFor:"fileInput"},i.createElement(ue.a.Item,{as:"a"},i.createElement(ie.a,{name:"folder open"}),i.createElement(s.a,{id:"menu.load_from_file",defaultMessage:"Load from file"}))),n,i.createElement(ue.a.Item,{as:"a",href:"https://github.com/PeWu/topola-viewer",position:"right"},i.createElement(s.a,{id:"menu.github",defaultMessage:"Source on GitHub"})),t)}}]),t}(i.Component);function he(e){return i.createElement(X.a,{negative:!0,className:"error"},i.createElement(X.a.Header,null,"Failed to load file"),i.createElement("p",null,e.message))}var fe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},n.chartRef=null,n.onSelection=function(e){var t=n.props.location,a=p.parse(t.search);a.indi=e.id,a.gen=String(e.generation),t.search=p.stringify(a),n.props.history.push(t)},n.renderMainArea=function(){return n.state.data&&n.state.selection?i.createElement("div",{id:"content"},i.createElement(C,{data:n.state.data.chartData,onSelection:n.onSelection,selection:n.state.selection,ref:function(e){return n.chartRef=e}}),n.state.showSidePanel?i.createElement(Y.a,{minWidth:768,id:"sidePanel"},i.createElement(U,{gedcom:n.state.data.gedcom,indi:n.state.selection.id})):null):n.state.error?i.createElement(he,{message:n.state.error}):i.createElement(Q.a,{active:!0,size:"large"})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"isNewData",value:function(e,t){return!(!e||e===this.state.hash)||!(!t||this.state.url===t)}},{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this;if("/view"===this.props.location.pathname){var t=this.props.location.state&&this.props.location.state.data,n=p.parse(this.props.location.search),a=function(e){var t=n[e];return"string"===typeof t?t:void 0},r=a("url"),o=a("indi"),i=Number(a("gen")),l=isNaN(i)?void 0:i,c=a("file"),s="false"!==a("handleCors"),u="true"===a("sidePanel");if(r||c){if(this.isNewData(c,r)){(c?J(c,t):function(e,t){var n=sessionStorage.getItem(e);if(n)return Promise.resolve(JSON.parse(n));var a=t?"https://cors-anywhere.herokuapp.com/"+e:e;return window.fetch(a).then(function(e){return 200!==e.status?Promise.reject(new Error(e.statusText)):e.text()}).then(function(t){return H(t,e)})}(r,s)).then(function(t){e.setState(Object.assign({},e.state,{data:t,hash:c,selection:G(t.chartData,o,l),error:void 0,loading:!1,url:r,showSidePanel:u}))},function(t){e.setState(Object.assign({},e.state,{error:t.message,loading:!1}))}),this.setState(Object.assign({},this.state,{data:void 0,selection:void 0,hash:c,error:void 0,loading:!0,url:r}))}else if(this.state.data&&this.state.selection){var d=G(this.state.data.chartData,o,l);this.state.selection.id===d.id&&this.state.selection.generation===d.generation||this.setState(Object.assign({},this.state,{selection:d}))}}else this.props.history.replace({pathname:"/"})}}},{key:"render",value:function(){var e=this;return i.createElement(i.Fragment,null,i.createElement($.a,{render:function(t){return i.createElement(me,Object.assign({},t,{showingChart:!("/view"!==e.props.history.location.pathname||!e.state.data||!e.state.selection),onPrint:function(){return e.chartRef&&e.chartRef.print()},onDownloadPdf:function(){return e.chartRef&&e.chartRef.downloadPdf()},onDownloadPng:function(){return e.chartRef&&e.chartRef.downloadPng()},onDownloadSvg:function(){return e.chartRef&&e.chartRef.downloadSvg()}}))}}),i.createElement(ee.a,null,i.createElement($.a,{exact:!0,path:"/",component:q}),i.createElement($.a,{exact:!0,path:"/view",render:this.renderMainArea}),i.createElement(te.a,{to:"/"})))}}]),t}(i.Component),pe=n(268),ge=n(518);n(491),n(493),n(496);Object(s.c)([].concat(Object(a.a)(r),Object(a.a)(o)));var Ee={pl:c},ve=navigator.language&&navigator.language.split(/[-_]/)[0],we=Object(pe.detect)();we&&"ie"===we.name?l.render(i.createElement("p",null,"Topola Genealogy Viewer does not support Internet Explorer. Please try a different browser."),document.querySelector("#root")):l.render(i.createElement(s.b,{locale:ve,messages:Ee[ve]},i.createElement(ge.a,null,i.createElement($.a,{component:fe}))),document.querySelector("#root"))}},[[279,2,1]]]);
//# sourceMappingURL=main.90b8d263.chunk.js.map