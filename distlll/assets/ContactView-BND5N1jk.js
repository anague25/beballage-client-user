import{_ as b,N as y,F as w,L as V,i as E,t as N}from"./index-BCmC1QR8.js";import{f as l,E as _,G as n,I as r,q as h,J as e,P as k,M as i,N as d,Q as c,T as m,S as M}from"./@vue-CRjAt1GK.js";import{u as L}from"./vue-router-BY3fkmSn.js";import{u as S}from"./vuex-j54FugZL.js";import"./vue3-toastify-CEi4-HDi.js";import"./sweetalert2-BCK3Sqif.js";import"./axios-1jJeUhjj.js";import"./vee-validate-BE89hST2.js";import"./@vee-validate-BMb1-Yqj.js";const j="/images/svgs/mail.svg",C="/images/svgs/icon-send.svg",U="/images/svgs/uiw_mail.svg",F="/images/svgs/icon-phone.svg",q="/images/svgs/icon-position.svg",z={components:{Navbar:y,Footer:w,Loader:V},setup(){L();const x=S(),t=l(""),g=l(""),s=l([]),f=l(""),u=l(""),p=l("");return{address:t,name:g,phone:f,email:u,message:p,errors:s,sendMessage:async()=>{s.value="",x.dispatch("loader/setLoading",!0);try{const a=await E.post("/api/messages",{address:t.value,name:g.value,phone:f.value,email:u.value,message:p.value});N.success()}catch(a){a.response&&a.response.data&&a.response.data.errors?(console.log(a),s.value=a.response.data.errors):console.log(a)}finally{x.dispatch("loader/setLoading",!1)}}}}},B=e("header",{class:"bg-gray-800 h-[500px] lg:h-[500px] flex items-center justify-center"},[e("div",{id:"headerContent",class:"text-gray-200 font-light text-center px-6"},[e("h1",{class:"text-4xl font-bold mb-4"},"Contactez-nous"),e("p",{class:"text-lg lg:w-[800px]"},"Si vous avez des inquiétudes ou des difficultés à comprendre comment utiliser notre application, n'hésitez pas à nous contacter en utilisant le formulaire convivial fourni ci-dessous.")])],-1),T={class:"contact-form"},D={class:"lg:max-w-[1000px] lg:flex mx-auto px-6 py-10 mt-[-100px] mb-[150px] lg:p-0"},Q={class:"form bg-[#ffffff] p-[5%] lg:w-[60%]"},G=e("div",{class:"flex items-center justify-between"},[e("h2",{class:"text-[22px] font-bold text-[#333333]"},"Envoyer un message"),e("div",{class:"icon"},[e("img",{src:j,alt:""})])],-1),I={class:"mt-6"},J={class:"flex flex-col lg:flex-col justify-between gap-y-5"},P={class:"lg:flex lg:items-center lg:gap-x-5"},R={class:"w-full"},A=e("h4",{class:"text-[14px] font-semibold text-[#333333]"},"Votre Email",-1),H={key:0,class:"text-red-500 m-1"},K={class:"w-full"},O=e("h4",{class:"text-[14px] font-semibold text-[#333333]"},"Votre adresse",-1),W={key:0,class:"text-red-500 m-1"},X={class:"lg:flex lg:items-center lg:gap-x-5"},Y={class:"w-full"},Z=e("h4",{class:"text-[14px] font-semibold text-[#333333]"},"Votre nom",-1),$={key:0,class:"text-red-500 m-1"},ee={class:"w-full"},se=e("h4",{class:"text-[14px] font-semibold text-[#333333] mt-4 lg:mt-0"},"Votre Telephone ",-1),te={key:0,class:"text-red-500 m-1"},oe={class:""},ae=e("h4",{class:"text-[14px] font-semibold text-[#333333]"},"Votre message",-1),le={key:0,class:"text-red-500 m-1"},ne=e("div",{class:"mt-8 flex w-full justify-end"},[e("button",{type:"submit",class:"flex justify-center items-center w-[50px] h-[50px] bg-black rounded-full",title:"send message"},[e("img",{width:"25",src:C,alt:""})])],-1),re=M('<div class="info bg-red-700 text-white p-[5%] lg:w-[40%]"><div class=""><h3 class="text-[22px]">Quelques informations utiles</h3><div class="flex flex-col gap-y-4 mt-4"><div class="flex items-center gap-x-2"><img src="'+U+'" alt=""><p class="font-light"><a href="mailto:contact@deballage.cm">contact@deballage.cm</a></p></div><div class="flex items-center gap-x-2"><img src="'+F+'" alt=""><p class="font-light">(+237) 682 827 307</p></div><div class="flex items-center gap-x-2"><img src="'+q+'" alt=""><p class="font-light">contact@deballage.cm</p></div></div></div></div>',1);function ie(x,t,g,s,f,u){const p=_("Navbar"),v=_("Loader"),a=_("Footer");return n(),r("main",null,[h(p),h(v),B,e("section",T,[e("div",D,[e("div",Q,[G,e("div",I,[e("form",{onSubmit:t[5]||(t[5]=k((...o)=>s.sendMessage&&s.sendMessage(...o),["prevent"]))},[e("div",J,[e("div",P,[e("div",R,[A,i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.email=o),placeholder:"Enter your mail",type:"email",class:"px-2 py-[12px] mt-2 lg:mt-0 rounded-[4.25px] w-full border-b-2"},null,512),[[d,s.email]]),s.errors.email?(n(),r("span",H,c(s.errors.email[0]),1)):m("",!0)]),e("div",K,[O,i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.address=o),placeholder:"Enter your address",type:"text",class:"px-2 py-[12px] mt-2 lg:mt-0 rounded-[4.25px] w-full border-b-2"},null,512),[[d,s.address]]),s.errors.address?(n(),r("span",W,c(s.errors.address[0]),1)):m("",!0)])]),e("div",X,[e("div",Y,[Z,i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.name=o),placeholder:"Enter your name here",type:"text",class:"px-2 py-[12px] mt-2 rounded-[4.25px] w-full border-b-2"},null,512),[[d,s.name]]),s.errors.name?(n(),r("span",$,c(s.errors.name[0]),1)):m("",!0)]),e("div",ee,[se,i(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.phone=o),placeholder:"Enter your phone number",type:"text",class:"px-2 py-[12px] mt-2 rounded-[4.25px] w-full border-b-2"},null,512),[[d,s.phone]]),s.errors.phone?(n(),r("span",te,c(s.errors.phone[0]),1)):m("",!0)])]),e("div",oe,[ae,i(e("textarea",{"onUpdate:modelValue":t[4]||(t[4]=o=>s.message=o),placeholder:"Enter your message",class:"px-2 py-[12px] h-[150px] mt-2 rounded-[4.25px] w-full border-b-2"},null,512),[[d,s.message]]),s.errors.message?(n(),r("span",le,c(s.errors.message[0]),1)):m("",!0)])]),ne],32)])]),re])]),h(a)])}const he=b(z,[["render",ie]]);export{he as default};
