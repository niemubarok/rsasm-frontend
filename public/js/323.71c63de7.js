"use strict";(self["webpackChunkrsasm_frontend"]=self["webpackChunkrsasm_frontend"]||[]).push([[323],{28447:(t,e,n)=>{n.d(e,{Z:()=>u});var a=n(83673),i=n(62323);const s={href:"/",style:{"text-decoration":"none"}};function r(t,e,n,r,l,o){const d=(0,a.up)("menu-button"),c=(0,a.up)("q-btn"),m=(0,a.up)("q-chip");return(0,a.wg)(),(0,a.j4)("div",null,[(0,a.Wm)(d),(0,a.Wm)("a",s,[(0,a.Wm)(c,{style:{"z-index":"2"},flat:"",rounded:"",icon:"home",color:"grey-9",onClick:r.onClickHomeBtn},null,8,["onClick"])]),(0,a.Wm)(m,{rounded:"",class:"bg-grey-3 text-grey-7"},{default:(0,a.w5)((()=>[(0,a.Wm)("h5",{style:t.$q.platform.is.mobile?"font-size:16px":""},(0,i.zw)(n.cardTitle),5)])),_:1})])}var l=n(88175);const o={props:{cardTitle:{type:String,default:""}},components:{MenuButton:l.Z},setup(){const t=(0,a.f3)("store"),e=()=>{console.log("clicked")},n=()=>{t.doctor.state.searchText.value="",t.doctor.state.isFiltered.value=!1,t.components.state.searchBoxClicked=!1};return{store:t,log:e,onClickHomeBtn:n}}};var d=n(48240),c=n(67030),m=n(7518),p=n.n(m);o.render=r;const u=o;p()(o,"components",{QBtn:d.Z,QChip:c.Z})},88175:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(83673);function i(t,e,n,i,s,r){const l=(0,a.up)("q-btn");return t.$q.screen.lt.lg?((0,a.wg)(),(0,a.j4)(l,{key:0,flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu",class:"q-mx-cs",style:{"z-index":"2"},onClick:e[1]||(e[1]=t=>i.store.components.state.leftDrawerOpen=!i.store.components.state.leftDrawerOpen)})):(0,a.kq)("",!0)}const s={setup(){return{store:(0,a.f3)("store")}}};var r=n(48240),l=n(7518),o=n.n(l);s.render=i;const d=s;o()(s,"components",{QBtn:r.Z})},29323:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});var a=n(83673),i=n(62323);const s={id:"content",class:"column items-start q-gutter-xs"},r={class:"row q-mt-md"},l={ref:"toPrint"},o=(0,a.Wm)("span",null,"Simpanlah qrcode berikut untuk melakukan checkin",-1),d=(0,a.Wm)("div",{class:"float-right",style:{"margin-top":"-30px"}},null,-1),c=(0,a.Uk)(" Nomor Antrian "),m={class:"column items-center"},p={class:"text-h4"},u={class:"column items-center"},g=(0,a.Uk)(" Estimasi dipanggil : ");function x(t,e,n,x,h,f){const k=(0,a.up)("q-chip"),q=(0,a.up)("navigation"),w=(0,a.up)("q-separator"),b=(0,a.up)("q-card-section"),y=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(y,{tag:"div",class:"q-pa-md q-mt-md fit",style:{"border-radius":"30px"}},{default:(0,a.w5)((()=>[(0,a.Wm)("div",null,[x.store.patient.registrationDetail.qrcode?((0,a.wg)(),(0,a.j4)(k,{key:0,"icon-right":"download",clickable:"","text-color":"accent",align:"left",onClick:x.test,color:"primary",label:"Simpan detail pendaftaran",size:"sm",class:"absolute-bottom-right q-mr-xl q-mb-sm z-top q-py-sm",style:{width:"200px"}},null,8,["onClick"])):(0,a.kq)("",!0)]),(0,a.Wm)(q,{cardTitle:"Detail Pendaftaran"}),(0,a.Wm)(w),(0,a.Wm)("div",s,[(0,a.Wm)("div",r,[(0,a.Wm)(y,{flat:"",bordered:"",class:["q-pt-sm q-mt-sm",t.$q.screen.lt.sm?"q-mt-md fit":""],style:{"border-radius":"30px","min-width":"300px",height:"250px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)("table",l,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(x.store.patient.table(),((t,e)=>((0,a.wg)(),(0,a.j4)("tr",{key:e},[(0,a.Wm)("td",null,(0,i.zw)(e),1),(0,a.Wm)("td",null,": "+(0,i.zw)(t),1)])))),128))],512)])),_:1})])),_:1},8,["class"]),(0,a.Wm)(y,{id:"qrcode",flat:"",bordered:"",class:"transparent q-ml-sm",style:[{"min-width":"250px","min-height":"250px width:400px"},t.$q.screen.lt.md?"margin-top: 20px;":""]},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"column items-center"},{default:(0,a.w5)((()=>[o,x.store.patient.registrationDetail.qrcode?((0,a.wg)(),(0,a.j4)("img",{key:0,src:x.store.patient.registrationDetail.qrcode,style:{width:"200px",height:"200px"}},null,8,["src"])):(0,a.kq)("",!0)])),_:1}),d])),_:1},8,["style"]),(0,a.Wm)(y,{id:"antrian",style:{"border-radius":"30px",height:"250px"},class:["q-pb-sm q-mx-sm q-mt-sm",t.$q.screen.lt.sm?"fit":""],flat:"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"bg-green-3 text-center text-grey-7 text-h6"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)("div",m,[(0,a.Wm)(k,{size:"xl",color:"white"},{default:(0,a.w5)((()=>[(0,a.Wm)("span",p,(0,i.zw)(x.store.patient.registrationDetail.antrian),1)])),_:1})]),(0,a.Wm)("div",u,[g,(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)("span",null,(0,i.zw)(x.store.patient.registrationDetail.estimasiDipanggil),1)])),_:1})])])),_:1},8,["class"])])])])),_:1})}var h=n(61959),f=n(28447),k=n(48825),q=n(49310),w=n(79582);const b={components:{Navigation:f.Z},setup(){const t=(0,a.f3)("store"),e=(0,w.tv)(),n=(0,k.Z)(),i=(0,h.iH)(null),s=(new FileReader,document.getElementById("qrcode"),()=>{const e=t.patient.registrationDetail.qrcode,n=document.createElement("a"),a=t.patient.detail.name;n.href=e,n.download=a,n.click()}),r=async()=>{var e,a;const i=new q.kH("p","pt","a5");i.setFontSize(12),i.text(120,30,":::Bukti Pendaftaran Online:::"),i.line(20,35,400,35),i.text(30,50,"No. KTP"),i.text(150,50,`: ${t.patient.detail.nik}`),i.text(30,70,"Nama Pasien"),i.text(150,70,`: ${t.patient.detail.name}`),i.text(30,90,"Tanggal Lahir "),i.text(150,90,`: ${t.patient.formattedBirthDate()}`),i.text(30,110,"No. Whatsapp"),i.text(150,110,`: ${t.patient.detail.phone}`),i.text(30,130,"Dokter Tujuan"),i.text(150,130,`: ${null===(e=t.doctor.state.selected)||void 0===e?void 0:e.name}`),i.text(30,150,"Klinik"),i.text(150,150,`: ${null===(a=t.doctor.state.selected)||void 0===a?void 0:a.specialist()}`),i.text(30,170,"Jenis Bayar"),i.text(150,170,`: ${t.patient.detail.jnsBayar}`),i.text(30,190,"Tanggal Periksa"),i.text(30,210,"Estimasi Dipanggil"),i.text(30,230,"No. Antrian"),i.setFontSize(16),i.text(150,190,`: ${t.patient.formattedTglPeriksa()}`),i.text(150,210,`: ${t.patient.registrationDetail.estimasiDipanggil}`),i.text(150,230,`: ${t.patient.registrationDetail.antrian}`),i.line(20,240,400,240),i.line(20,555,400,555),i.setFontSize(10),i.text(150,15,"RS Ali Sibroh Malisi"),i.setFontSize(7),i.text(30,565,"__Gunakan qrcode di atas pada saat checkin di lobby rumah sakit"),i.addImage(t.patient.registrationDetail.qrcode,65,250,300,300,"MEDIUM"),i.save(t.patient.detail.name),n.loading.show({message:"Sedang membuat PDF, Mohon Tunggu..."}),setTimeout((async()=>{n.loading.hide()}),1e3)};return(0,a.bv)((()=>{null!=t.doctor.state.selected&&0!=Object.keys(t.doctor.state.selected).length||e.push("/")})),{download:s,store:t,test:r,toPrint:i}}};var y=n(10151),v=n(67030),W=n(65869),D=n(25589),z=n(7518),$=n.n(z);b.render=x;const C=b;$()(b,"components",{QCard:y.Z,QChip:v.Z,QSeparator:W.Z,QCardSection:D.Z})}}]);