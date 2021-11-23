(()=>{"use strict";var e={82318:(e,t,a)=>{a(67280),a(65363),a(10071);var r=a(98880),o=a(99592),n=a(83673);function i(e,t,a,r,o,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});s.render=i;const l=s;var c=a(67250),p=a(47083),d=a(79582);const u=[{path:"/",component:()=>Promise.all([a.e(736),a.e(397)]).then(a.bind(a,50397)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(125)]).then(a.bind(a,82125))},{path:"/registration/",component:()=>Promise.all([a.e(736),a.e(395)]).then(a.bind(a,45395))},{path:"/registration/success",component:()=>Promise.all([a.e(736),a.e(878)]).then(a.bind(a,45878))},{path:"/registration/detail",component:()=>Promise.all([a.e(736),a.e(323)]).then(a.bind(a,29323))},{path:"/registration/:id",component:()=>Promise.all([a.e(736),a.e(395)]).then(a.bind(a,45395)),params:!0,props:!0},{path:"/doctor/search",component:()=>Promise.all([a.e(736),a.e(435)]).then(a.bind(a,16435))},{path:"/user/login",component:()=>Promise.all([a.e(736),a.e(746)]).then(a.bind(a,99746))}]},{path:"/test",component:()=>Promise.all([a.e(736),a.e(961)]).then(a.bind(a,57925))},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(193)]).then(a.bind(a,32193))}],f=u,h=(0,p.BC)((function(){const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/")});return t}));async function m(e,t){const r="function"===typeof c.default?await(0,c.default)({}):c.default,{storeKey:n}=await Promise.resolve().then(a.bind(a,67250)),i="function"===typeof h?await h({store:r}):h;r.$router=i;const s=e(l);return s.use(o.Z,t),{app:s,store:r,storeKey:n,router:i}}var v=a(23522),b=a(16246),g=a(11417),y=a(64434),k=a(16249);const P={config:{brand:{primary:"#F9A602",secondary:"#1A4430",accent:"#213441",positive:"#2E7758"}},lang:v.Z,plugins:{AddressbarColor:b.Z,Dialog:g.Z,Notify:y.Z,Loading:k.Z}},w="/";async function j({app:e,router:t,store:a,storeKey:r},o){let n=!1;const i=e=>{n=!0;const a=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=a},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<o.length;c++)try{await o[c]({app:e,router:t,store:a,ssrContext:null,redirect:i,urlPath:s,publicPath:w})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.use(a,r),e.mount("#q-app"))}m(r.ri,P).then((e=>Promise.all([Promise.resolve().then(a.bind(a,74570)),Promise.resolve().then(a.bind(a,5474))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,a)}))))},5474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s,api:()=>i});var r=a(47083),o=a(30052),n=a.n(o);const i=n().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},74570:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(67250);const o=async({app:e})=>{e.provide("store",r.default)}},67250:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(61959);const o=(0,r.qj)({leftDrawerOpen:!1,showSwipeIcon:!0,showBanner:!0,showPartnerSection:!0,searchBoxClicked:!1,isNewPatient:!1,isOldPatient:!1,formEditing:!1,dialogConfirm:!1,isConfirm:!1,todaySelected:!1,today:function(){return new Date(Date.now()).getDate()}});setTimeout((()=>{o.showSwipeIcon=!1}),2500);const n={state:o};a(67280),a(65363);var i=a(79582),s=(a(44885),a(30052)),l=a.n(s);const c={detail:(0,r.iH)([]),clinicLists:(0,r.iH)([]),searchText:(0,r.iH)(""),searchSpecialist:(0,r.iH)(""),searchDate:(0,r.iH)(""),isFiltered:(0,r.iH)(!1),tempPoli:(0,r.iH)([]),kodePoli:(0,r.iH)(""),filterDokter:()=>0!=Object.keys(c.getDoctorFromSessionStorage).length?Object.values(c.getDoctorFromSessionStorage).filter((e=>e.specialist().toUpperCase().includes(c.searchSpecialist.value.toUpperCase())||e.name.toUpperCase().includes(c.searchSpecialist.value.toUpperCase()))):c.detail.value.filter((e=>e.specialist().toUpperCase().includes(c.searchSpecialist.value.toUpperCase())||e.name.toUpperCase().includes(c.searchSpecialist.value.toUpperCase()))),doctorId(){const e=(0,i.yj)();return!!e.params.id&&e.params.id},selected:[],selectedDate:(0,r.iH)(""),tempSelected:{id:"001",name:"tes",kd_poli:"tes",specialist:"tes",date:"tes",time:{start:"tes",end:"tes"}},getDataDokter:()=>{const e=new Date(c.searchDate.value).getDay();c.detail.value=[],l().post("http://backend.rsalisibrohmalisi.com/api/dokter",{data:{hari:e}}).then((e=>(c.clinicLists.value=Object.values(e.data.data).map((e=>e.nm_poli.replace("POLI",""))).filter(((e,t,a)=>a.indexOf(e)==t)),Object.values(e.data.data).forEach((e=>{if(e){const t={id:e.kd_dokter,name:e.nm_dokter,kd_poli:e.kd_poli,specialist:()=>e.nm_poli.replace("POLI",""),date:c.searchDate.value,time:{start:e.jam_mulai,end:e.jam_selesai}};c.tempPoli.value.push(e.nm_poli.replace("POLI","SPESIALIS")),c.detail.value.push(t)}else c.detail.value.push(null)})))))},getDoctorFromSessionStorage:()=>{}},p={state:c};var d=a(25616);const u=(0,r.qj)({detail:{noRM:"",nik:"",noBPJS:"-",name:"",birthDate:"",phone:"",jnsBayar:"",jk:"",tmp_lahir:"",nm_ibu:"",alamat:"",gol_darah:"",pekerjaan:"",stts_nikah:"",agama:"",umur:"",pnd:"-",keluarga:"",namakeluarga:"",kd_pj:"-",kd_kel:"80545",kd_kec:"1",kd_kab:"1",pekerjaanpj:"-",alamatpj:"-",kelurahanpj:"KELURAHAN",kecamatanpj:"KECAMATAN",kabupatenpj:"KABUPATEN",perusahaan_pasien:"-",suku_bangsa:"1",bahasa_pasien:"5",cacat_fisik:"1",email:"-",nip:"-",kd_prop:"1",propinsipj:"-",isPasienBaru:!1,tgl_daftar:null,tgl_periksa:""},formattedBirthDate:()=>d.ZP.formatDate(new Date(u.detail.birthDate),"DD MMMM YYYY"),formattedTglPeriksa:()=>d.ZP.formatDate(new Date(u.detail.tgl_periksa),"DD MMMM YYYY"),storePasienLama:()=>{},storePasienBaru:()=>{l().post("http://backend.rsalisibrohmalisi.com/api/pendaftaran/pasien-baru",u.detail)},registrationDetail:{qrcode:(0,r.iH)("https://via.placeholder.com/150x150"),estimasiDipanggil:(0,r.iH)(""),antrian:(0,r.iH)("")},table:()=>{var e,t;return{"No. KTP":u.detail.nik,"Nama Pasien":u.detail.name,"Tanggal Lahir":u.formattedBirthDate(),"No. Whatsapp":u.detail.phone,"Dokter Tujuan":null===(e=p.state.selected)||void 0===e?void 0:e.name,Klinik:null===(t=p.state.selected)||void 0===t?void 0:t.specialist(),"Jenis Bayar":u.detail.jnsBayar,"Tanggal Periksa":u.formattedTglPeriksa()}}}),f=u,h={components:n,doctor:p,patient:f},m=h}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,o,n)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){for(var[r,o,n]=e[p],s=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var n=Object.create(null);a.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>r[e]));return i["default"]=()=>r,a.d(n,i),n}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{125:"76b4cb2f",193:"b83e0894",323:"71c63de7",395:"6989f22a",397:"8184f61b",435:"172b6a13",746:"32cbf279",878:"5cd8443c",961:"d6af896e"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{395:"4048639b",397:"b5d1a379",435:"a3f6afa4",736:"3312c09c"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="rsasm-frontend:";a.l=(r,o,n,i)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var d=c[p];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=r),e[r]=[o];var u=(t,a)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(a))),t)return t(a)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],n=o.getAttribute("data-href");if(n===e||n===t)return o}},r=r=>new Promise(((o,n)=>{var i=a.miniCssF(r),s=a.p+i;if(t(i,s))return o();e(r,s,o,n)})),o={143:0};a.f.miniCss=(e,t)=>{var a={395:1,397:1,435:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((a,r)=>o=e[t]=[a,r]));r.push(o[2]=n);var i=a.p+a.u(t),s=new Error,l=r=>{if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,s,l]=r,c=0;for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var p=l(a);for(t&&t(r);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[i[c]]=0;return a.O(p)},r=self["webpackChunkrsasm_frontend"]=self["webpackChunkrsasm_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(82318)));r=a.O(r)})();