(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-674253d5"],{"1dde":function(t,e,a){var c=a("d039"),n=a("b622"),s=a("2d00"),o=n("species");t.exports=function(t){return s>=51||!c((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"6be2":function(t,e,a){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,a){var c=t.get(e);c?c.push(a):t.set(e,[a])},off:function(e,a){var c=t.get(e);c&&(a?c.splice(c.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var c=t.get(e);c&&c.slice().map((function(t){t(a)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,a)}))}}},n=c();e["a"]=n},8418:function(t,e,a){"use strict";var c=a("a04b"),n=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var o=c(e);o in t?n.f(t,o,s(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("da84"),s=a("d039"),o=a("e8b5"),l=a("861d"),r=a("7b0b"),i=a("07fa"),u=a("8418"),d=a("65f0"),b=a("1dde"),h=a("b622"),f=a("2d00"),m=h("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",p=n.TypeError,g=f>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=b("concat"),y=function(t){if(!l(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},x=!g||!v;c({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,c,n,s,o=r(this),l=d(o,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(s=-1===e?o:arguments[e],y(s)){if(n=i(s),b+n>j)throw p(O);for(a=0;a<n;a++,b++)a in s&&u(l,b,s[a])}else{if(b>=j)throw p(O);u(l,b++,s)}return l.length=b,l}})},b0c0:function(t,e,a){var c=a("83ab"),n=a("5e77").EXISTS,s=a("e330"),o=a("9bf2").f,l=Function.prototype,r=s(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=s(i.exec),d="name";c&&!n&&o(l,d,{configurable:!0,get:function(){try{return u(i,r(this))[1]}catch(t){return""}}})},cc55:function(t,e,a){"use strict";a.r(e);a("99af"),a("b0c0"),a("b64b");var c=a("7a23"),n={class:"container"},s=Object(c["h"])("h1",{class:"text-center my-3 p-2"},"購物車",-1),o={class:"text-end"},l=Object(c["h"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),r=[l],i=Object(c["j"])(" 清空購物車 "),u={class:"table align-middle"},d=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th"),Object(c["h"])("th",{style:{width:"250px"}},"畫作縮圖"),Object(c["h"])("th",null,"品名"),Object(c["h"])("th",{style:{width:"150px"}},"數量/單位"),Object(c["h"])("th",{class:"text-end"},"單價")])],-1),b=["onClick"],h={class:"py-1"},f=["src","alt"],m={key:0,class:"text-success"},j={class:"input-group input-group-sm"},O={class:"input-group mb-3"},p=["onUpdate:modelValue","onChange","disabled"],g=["value"],v={class:"input-group-text",id:"basic-addon2"},y={class:"text-end"},x={key:0,class:"text-success"},k=Object(c["h"])("td",{colspan:"4",class:"text-end"},"總計",-1),C={class:"text-end"},V={key:0,colspan:"4",class:"text-end text-success"},I={class:"text-end text-success"},w={class:"my-5 row justify-content-center"},L={class:"mb-3"},D=Object(c["h"])("label",{for:"email",class:"form-label"},"Email",-1),q={class:"mb-3"},U=Object(c["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),S={class:"mb-3"},$=Object(c["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),_={class:"mb-3"},A=Object(c["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),E={class:"mb-3"},T=Object(c["h"])("label",{for:"message",class:"form-label"},"留言",-1),F={class:"text-end"},G=["disabled"];function J(t,e,a,l,J,M){var B=Object(c["I"])("v-field"),P=Object(c["I"])("error-message"),Q=Object(c["I"])("v-form");return Object(c["y"])(),Object(c["g"])("div",n,[s,Object(c["h"])("div",o,[Object(c["h"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[0]||(e[0]=function(){return M.deleteAllCarts&&M.deleteAllCarts.apply(M,arguments)})},[Object(c["V"])(Object(c["h"])("span",null,r,512),[[c["Q"],1===J.isLoadingItem]]),i])]),Object(c["h"])("table",u,[d,Object(c["h"])("tbody",null,[J.cartData.carts?(Object(c["y"])(!0),Object(c["g"])(c["a"],{key:0},Object(c["G"])(J.cartData.carts,(function(t){return Object(c["y"])(),Object(c["g"])("tr",{key:t.id},[Object(c["h"])("td",null,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return M.removeCartItem(t.id)}}," x ",8,b)]),Object(c["h"])("td",null,[Object(c["h"])("div",h,[Object(c["h"])("img",{style:{width:"150px"},src:t.product.imageUrl,alt:t.product.title},null,8,f)])]),Object(c["h"])("td",null,[Object(c["j"])(Object(c["L"])(t.product.title)+" ",1),t.coupon?(Object(c["y"])(),Object(c["g"])("div",m," 已套用優惠券")):Object(c["f"])("",!0)]),Object(c["h"])("td",null,[Object(c["h"])("div",j,[Object(c["h"])("div",O,[Object(c["V"])(Object(c["h"])("select",{id:"",class:"form-select","onUpdate:modelValue":function(e){return t.qty=e},onChange:function(e){return M.updateCartItem(t)},disabled:J.isLoadingItem===t.id},[(Object(c["y"])(),Object(c["g"])(c["a"],null,Object(c["G"])(20,(function(e){return Object(c["h"])("option",{value:e,key:"".concat(e,"-").concat(t.id)},Object(c["L"])(e),9,g)})),64))],40,p),[[c["O"],t.qty]]),Object(c["h"])("span",v,Object(c["L"])(t.product.unit),1)])])]),Object(c["h"])("td",y,[J.cartData.final_total!==J.cartData.total?(Object(c["y"])(),Object(c["g"])("div",x,"折扣價：")):Object(c["f"])("",!0),Object(c["j"])(" "+Object(c["L"])(t.product.price)+" 元 ",1)])])})),128)):Object(c["f"])("",!0)]),Object(c["h"])("tfoot",null,[Object(c["h"])("tr",null,[k,Object(c["h"])("td",C,Object(c["L"])(J.cartData.total)+" 元",1)]),Object(c["h"])("tr",null,[J.cartData.finial_total!==J.cartData.total?(Object(c["y"])(),Object(c["g"])("td",V,"折扣價")):Object(c["f"])("",!0),Object(c["h"])("td",I,Object(c["L"])(J.cartData.final_total)+" 元",1)])])]),Object(c["h"])("div",w,[Object(c["k"])(Q,{ref:"form",class:"col-md-6",onSubmit:M.createOrder},{default:Object(c["U"])((function(t){var a=t.errors;return[Object(c["h"])("div",L,[D,Object(c["k"])(B,{id:"email",name:"email",type:"email",class:Object(c["s"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:J.form.user.email,"onUpdate:modelValue":e[1]||(e[1]=function(t){return J.form.user.email=t})},null,8,["class","modelValue"]),Object(c["k"])(P,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",q,[U,Object(c["k"])(B,{id:"name",name:"姓名",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:J.form.user.name,"onUpdate:modelValue":e[2]||(e[2]=function(t){return J.form.user.name=t})},null,8,["class","modelValue"]),Object(c["k"])(P,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",S,[$,Object(c["k"])(B,{id:"tel",name:"電話",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:J.form.user.tel,"onUpdate:modelValue":e[3]||(e[3]=function(t){return J.form.user.tel=t})},null,8,["class","modelValue"]),Object(c["k"])(P,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",_,[A,Object(c["k"])(B,{id:"address",name:"地址",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:J.form.user.address,"onUpdate:modelValue":e[4]||(e[4]=function(t){return J.form.user.address=t})},null,8,["class","modelValue"]),Object(c["k"])(P,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",E,[T,Object(c["V"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[5]||(e[5]=function(t){return J.form.message=t})},null,512),[[c["P"],J.form.message]])]),Object(c["h"])("div",F,[Object(c["h"])("button",{type:"submit",class:"btn btn-danger",disabled:Object.keys(a).length>0||0===J.cartData.carts.length},"送出訂單",8,G)])]})),_:1},8,["onSubmit"])])])}var M=a("6be2"),B={data:function(){return{cartData:{carts:[]},isLoadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},methods:{getCart:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/cart")).then((function(e){t.cartData=e.data.data})).catch((function(t){alert(t.data.message)}))},addToCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c={product_id:t,qty:a};this.isLoadingItem=t,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/cart"),{data:c}).then((function(t){e.isLoadingItem="",M["a"].emit("get-cart"),alert(t.data.message)})).catch((function(t){alert(t.data.message)}))},removeCartItem:function(t){var e=this;this.isLoadingItem=t,this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/cart/").concat(t)).then((function(t){console.log(t),e.getCart(),e.isLoadingItem=""})).catch((function(t){alert(t.data.message)}))},updateCartItem:function(t){var e=this,a={product_id:t.id,qty:t.qty};this.isLoadingItem=t.id,this.$http.put("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/cart/").concat(t.id),{data:a}).then((function(t){e.getCart(),M["a"].emit("get-cart"),e.isLoadingItem=""})).catch((function(t){alert(t.data.message)}))},deleteAllCarts:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/carts")).then((function(e){console.log(e),t.getCart(),M["a"].emit("get-cart")})).catch((function(t){alert(t.data.message)}))},createOrder:function(){var t=this,e=this.form;this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/order"),{data:e}).then((function(e){alert(e.data.message),t.$refs.form.resetForm(),t.getCart()})).catch((function(t){alert(t.data.message)}))}},mounted:function(){this.getCart()}},P=a("6b0d"),Q=a.n(P);const X=Q()(B,[["render",J]]);e["default"]=X}}]);
//# sourceMappingURL=chunk-674253d5.a2c09eac.js.map