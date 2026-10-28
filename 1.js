"use strict";

const WHATSAPP_NUMBER = "201033002607";
const PAYMENT_NUMBER = "01033002607";

/*
  قائمة الألعاب التي نفذت كميتها.
  اكتب اسم اللعبة بالضبط كما يظهر في قائمة raw.
  مثال:
  "Elden Ring",
  "Forza Horizon 5"
*/
const SOLD_OUT_GAMES = [
  // "Elden Ring",
  // "Forza Horizon 5",
  // "Red Dead Redemption 2"
];

const STORE_SETTINGS = {
  online: {
    "THE FINALS": 300,
    "HELLDIVERS 2": 300,
    "Battlefield 2042": 300,
    "Call of Duty: Black Ops 6": 300,
    "Palworld": 300,
        "Call of Duty: Modern Warfare 4":3500,
            "EA SPORTS FC 27":2100,
    "Forza Horizon 6":600


  },

  offline: [
    "Call of Duty: Modern Warfare 4",
    "EA SPORTS FC 26",
    "EA SPORTS FC 27",
    "Forza Horizon 5",
    "Forza Horizon 6",
    "Elden Ring",
    "God of War Ragnarök",
    "God of War",
    "Marvel's Spider-Man Remastered",
    "Red Dead Redemption 2",
    "Cyberpunk 2077",
    "Grand Theft Auto V Enhanced",
    "Resident Evil 4",
    "The Witcher 3: Wild Hunt",
    "Ghost of Tsushima DIRECTOR'S CUT",
    "Black Myth: Wukong",
    "Baldur's Gate 3",
    "Hogwarts Legacy",
    "Assassin's Creed Shadows",
    "Forza Motorsport",
    "F1 25",
    "Need for Speed Unbound",
    "Sekiro: Shadows Die Twice",
    "Lies of P",
    "Marvel's Spider-Man 2",
    "Horizon Forbidden West Complete Edition",
    "Mafia: Definitive Edition",
    "Assassin's Creed Mirage",
    "Far Cry 6",
    "Resident Evil Village",
    "Silent Hill 2",
    "Alan Wake 2",
    "Dead Space",
    "The Last of Us Part I",
    "UNCHARTED: Legacy of Thieves Collection",
    "Star Wars Jedi: Survivor",
    "Prince of Persia: The Lost Crown",
    "Devil May Cry 5",
    "Final Fantasy XVI",
    "Monster Hunter Wilds",
    "Persona 3 Reload",
    "Metaphor: ReFantazio",
    "Dragon's Dogma 2",
    "DOOM: The Dark Ages",
    "Starfield",
    "Kingdom Come: Deliverance II"
  ],

  offers: {
    "Red Dead Redemption 2": 250,
    "God of War": 250,
    "Forza Horizon 5": 250,
    "Elden Ring": 250,
    "Cyberpunk 2077": 250
  },

  newGames: [
    "Call of Duty: Modern Warfare 4",
    "EA SPORTS FC 27",
    "Forza Horizon 6",
    "Marvel's Spider-Man 2",
    "Assassin's Creed Shadows",
    "Battlefield 6",
    "Call of Duty: Black Ops 7",
    "Hades II",
    "Hollow Knight: Silksong",
    "Split Fiction"
  ],

  featured: [
    "Red Dead Redemption 2",
    "God of War Ragnarök",
    "Elden Ring",
    "Cyberpunk 2077",
    "Forza Horizon 5",
    "Marvel's Spider-Man Remastered",
    "Black Myth: Wukong",
    "The Witcher 3: Wild Hunt",
    "Ghost of Tsushima DIRECTOR'S CUT",
    "Baldur's Gate 3"
  ]
};

const raw = [
["Call of Duty: Modern Warfare 4",2026,"shooter",0,400],
["EA SPORTS FC 25",2024,"sports",2669320,300],
["EA SPORTS FC 26",2025,"sports",0,400],
["EA SPORTS FC 27",2026,"sports",0,400],
["Forza Horizon 5",2021,"racing",1551360,300],
["Forza Horizon 6",2026,"racing",0,400],
["Forza Motorsport",2023,"racing",2440510,300],
["F1 25",2025,"racing",0,400],
["F1 24",2024,"racing",2488620,300],
["Need for Speed Unbound",2022,"racing",1846380,300],
["The Crew Motorfest",2023,"racing",2698940,300],
["Elden Ring",2022,"souls",1245620,300],
["Elden Ring: Shadow of the Erdtree",2024,"souls",1245620,300],
["Sekiro: Shadows Die Twice",2019,"souls",814380,300],
["Lies of P",2023,"souls",1627720,300],
["Black Myth: Wukong",2024,"souls",2358720,300],
["Lords of the Fallen",2023,"souls",1501750,300],
["Nioh 2",2021,"souls",1325200,300],
["Bloodborne",2015,"souls",0,300],
["Remnant II",2023,"souls",1282100,300],
["Wo Long: Fallen Dynasty",2023,"souls",1448440,300],
["God of War Ragnarök",2024,"story",2322010,300],
["God of War",2018,"story",1593500,300],
["Marvel's Spider-Man Remastered",2022,"story",1817070,300],
["Marvel's Spider-Man: Miles Morales",2022,"story",1817190,300],
["Marvel's Spider-Man 2",2025,"story",2651280,400],
["Ghost of Tsushima DIRECTOR'S CUT",2024,"story",2215430,300],
["Horizon Forbidden West Complete Edition",2024,"story",2420110,300],
["Horizon Zero Dawn Remastered",2024,"story",2561580,300],
["Red Dead Redemption 2",2019,"story",1174180,300],
["Cyberpunk 2077",2020,"story",1091500,300],
["Grand Theft Auto V Enhanced",2025,"open",3240220,400],
["Mafia: Definitive Edition",2020,"story",1030840,300],
["Assassin's Creed Mirage",2023,"open",3035570,300],
["Assassin's Creed Valhalla",2020,"open",2208920,300],
["Assassin's Creed Shadows",2025,"open",0,400],
["Far Cry 6",2021,"open",2369390,300],
["Dying Light 2 Stay Human",2022,"horror",534380,300],
["Resident Evil 2",2019,"horror",883710,300],
["Resident Evil 3",2020,"horror",952060,300],
["Resident Evil Village",2021,"horror",1196590,300],
["Resident Evil 4",2023,"horror",2050650,300],
["Silent Hill 2",2024,"horror",2124490,300],
["Alan Wake 2",2023,"horror",0,300],
["Dead Space",2023,"horror",1693980,300],
["The Callisto Protocol",2022,"horror",1544020,300],
["The Outlast Trials",2024,"horror",1304930,300],
["Sons of the Forest",2024,"horror",1326470,300],
["The Last of Us Part I",2023,"story",1888930,300],
["The Last of Us Part II Remastered",2025,"story",2531310,400],
["UNCHARTED: Legacy of Thieves Collection",2022,"story",1659420,300],
["Star Wars Jedi: Survivor",2023,"story",1774580,300],
["Prince of Persia: The Lost Crown",2024,"action",2751000,300],
["Sifu",2022,"action",2138710,300],
["Kena: Bridge of Spirits",2021,"action",1954200,300],
["Stray",2022,"action",1332010,300],
["Devil May Cry 5",2019,"action",601150,300],
["Armored Core VI: Fires of Rubicon",2023,"action",1888160,300],
["Final Fantasy XVI",2024,"rpg",2515020,300],
["Final Fantasy VII Remake Intergrade",2021,"rpg",1462040,300],
["Monster Hunter Wilds",2025,"rpg",2246340,400],
["Persona 3 Reload",2024,"rpg",2161700,300],
["Metaphor: ReFantazio",2024,"rpg",2679460,300],
["Baldur's Gate 3",2023,"rpg",1086940,300],
["Dragon's Dogma 2",2024,"rpg",2054970,300],
["Hogwarts Legacy",2023,"open",990080,300],
["DOOM Eternal",2020,"shooter",782330,300],
["DOOM: The Dark Ages",2025,"shooter",3017860,400],
["Call of Duty: Modern Warfare II",2022,"shooter",1962660,300],
["Call of Duty: Modern Warfare III",2023,"shooter",2519060,300],
["Call of Duty: Black Ops 6",2024,"shooter",1938090,300],
["Call of Duty: Black Ops 7",2025,"shooter",0,400],
["Battlefield 2042",2021,"shooter",1517290,300],
["Battlefield 6",2025,"shooter",0,400],
["HELLDIVERS 2",2024,"shooter",553850,300],
["Warhammer 40,000: Space Marine 2",2024,"action",2183900,300],
["THE FINALS",2023,"shooter",2073850,300],
["S.T.A.L.K.E.R. 2: Heart of Chornobyl",2024,"shooter",1643320,300],
["Palworld",2024,"open",1623730,300],
["Hades II",2025,"action",1145350,400],
["Hades",2020,"action",1145360,300],
["Hollow Knight: Silksong",2025,"action",1030300,400],
["It Takes Two",2021,"action",1426210,300],
["Split Fiction",2025,"action",2001120,400],
["TEKKEN 8",2024,"sports",1778820,300],
["Street Fighter 6",2023,"sports",1364780,300],
["Mortal Kombat 1",2023,"sports",1971870,300],
["WWE 2K25",2025,"sports",0,400],
["NBA 2K25",2024,"sports",2878980,300],
["Starfield",2023,"rpg",1716740,300],
["Kingdom Come: Deliverance II",2025,"rpg",1771300,400],
["The Witcher 3: Wild Hunt",2015,"rpg",292030,300]
];

const categoryInfo=[
["all","🎮","كل الألعاب"],
["story","📖","ألعاب قصة"],
["souls","⚔️","سولز"],
["racing","🏎️","سباق"],
["horror","👻","رعب"],
["action","💥","أكشن"],
["shooter","🎯","شوتر"],
["rpg","🧙","RPG"],
["open","🌍","عالم مفتوح"],
["sports","⚽","رياضة"]
];

const baseGames=raw.map((g,i)=>({
 baseId:i,name:g[0],year:g[1],cat:g[2],appid:g[3],basePrice:g[4]
})).filter((g,i,arr)=>arr.findIndex(x=>x.name===g.name)===i);

function readJSON(key,fallback){
 try{
  const v=localStorage.getItem(key);
  return v===null?fallback:JSON.parse(v);
 }catch{
  return fallback;
 }
}

let activeCategory="all";
let cart=readJSON("gamevex_cart",{});

function isSoldOut(name){
 return SOLD_OUT_GAMES.includes(name);
}

function getOfferPrices(){
 return {...STORE_SETTINGS.offers};
}

function getFeaturedNames(){
 return [...STORE_SETTINGS.featured].slice(0,10);
}

function getOnlinePrice(name){
 const v=STORE_SETTINGS.online[name];
 return v===undefined?null:Number(v);
}

function getOfflinePrice(name){
 const v=STORE_SETTINGS.offlinePrices?.[name];
 return v===undefined?null:Number(v);
}

function makeGames(){
 const list=[];

 baseGames.forEach(g=>{
  if(Object.prototype.hasOwnProperty.call(STORE_SETTINGS.online,g.name)){
   list.push({...g,id:g.baseId+"_online",mode:"online",price:getOnlinePrice(g.name)??g.basePrice});
  }

  if(STORE_SETTINGS.offline.includes(g.name)){
   list.push({...g,id:g.baseId+"_offline",mode:"offline",price:getOfflinePrice(g.name)??g.basePrice});
  }
 });

 return list;
}

let games=makeGames();

function saveCart(){
 localStorage.setItem("gamevex_cart",JSON.stringify(cart));
}

function escapeHTML(s){
 return String(s).replace(/[&<>"']/g,c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
 }[c]));
}

function money(n){
 return Number(n).toLocaleString("en-US")+" جنيه";
}

function goTo(id){
 document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function toast(msg){
 const el=document.getElementById("toast");
 el.textContent=msg;
 el.classList.add("show");
 clearTimeout(toast.timer);
 toast.timer=setTimeout(()=>el.classList.remove("show"),2400);
}

function coverURL(g){
 if(!g.appid)return "";
 return `https://cdn.akamai.steamstatic.com/steam/apps/${g.appid}/library_600x900.jpg`;
}

function coverHTML(g){
 const url=coverURL(g);

 if(!url){
  return `<div class="cover-fallback">${escapeHTML(g.name)}</div>`;
 }

 return `<img src="${url}" alt="${escapeHTML(g.name)}" loading="lazy"
 onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('div'),{className:'cover-fallback',textContent:${JSON.stringify(g.name)}}))">`;
}

function renderCategories(){
 document.getElementById("categories").innerHTML=categoryInfo.map(c=>`
 <button class="category ${activeCategory===c[0]?"active":""}" onclick="setCategory('${c[0]}')">
 <span class="emoji">${c[1]}</span>${c[2]}</button>`).join("");
}

function setCategory(cat){
 activeCategory=cat;
 renderCategories();

 document.getElementById("catalogTitle").textContent=
 categoryInfo.find(c=>c[0]===cat)?.[2]||"كل الألعاب";

 renderAll();
 goTo("catalog");
}

function getFilteredGames(mode){
 const query=document.getElementById("searchInput").value.toLowerCase().trim();
 const sort=document.getElementById("sortSelect").value;

 let list=games.filter(g=>
  g.mode===mode&&
  (activeCategory==="all"||g.cat===activeCategory)&&
  g.name.toLowerCase().includes(query)
 );

 if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="priceLow")list.sort((a,b)=>a.price-b.price);
 if(sort==="priceHigh")list.sort((a,b)=>b.price-a.price);
 if(sort==="year")list.sort((a,b)=>b.year-a.year);

 return list;
}

function getPriceForCard(g,options={}){
 if(options.offer){
  const offers=getOfferPrices();
  if(Object.prototype.hasOwnProperty.call(offers,g.name)){
   return Number(offers[g.name]);
  }
 }
 return Number(g.price);
}

function gameCard(g,options={}){
 const isOffer=options.offer===true;
 const isFeatured=options.featured===true;
 const soldOut=isSoldOut(g.name);
 const displayPrice=getPriceForCard(g,options);
 const oldPrice=isOffer&&displayPrice<g.price?`<span class="old-price">${money(g.price)}</span>`:"";
 const priceClass=isOffer&&displayPrice<g.price?"discount-price":"";
 const modeLabel=g.mode==="online"?"أونلاين":"أوفلاين";
 const isNew=STORE_SETTINGS.newGames.includes(g.name);

 return `<article class="card ${soldOut?"sold-out":""}">
 <div class="cover">${coverHTML(g)}
 ${soldOut?'<div class="sold-out-overlay"><span>لقد نفذت الكمية</span></div>':""}
 ${isNew?'<span class="badge badge-new">جديد</span>':""}
 <span class="badge ${g.mode==="online"?"badge-online":"badge-offline"}" ${isNew?'style="top:43px"':""}>${modeLabel}</span>
 ${isOffer?'<span class="badge badge-offer">عرض</span>':""}
 ${isFeatured?'<span class="badge badge-feature">TOP 10</span>':""}
 </div>
 <div class="card-body">
 <h3>${escapeHTML(g.name)}</h3>
 <div class="meta">${g.year} · ${categoryInfo.find(c=>c[0]===g.cat)?.[2]||g.cat}</div>
 <div class="meta">${modeLabel}</div>
 ${soldOut?'<div class="meta sold-out-label">لقد نفذت الكمية</div>':""}
 <div class="price ${priceClass}">${money(displayPrice)} ${oldPrice}</div>
 <div class="card-actions">
 <button class="btn" ${soldOut?'disabled title="لقد نفذت الكمية"':""} onclick="addToCart('${g.id}',${displayPrice})">${soldOut?"نفذت الكمية":"+ أضف للسلة"}</button>
 </div>
 </div>
 </article>`;
}

function renderSection(id,list,options={}){
 const el=document.getElementById(id);

 if(!list.length){
  el.innerHTML='<div class="empty">مفيش ألعاب هنا مطابقة للبحث أو التصنيف الحالي.</div>';
  return;
 }

 el.innerHTML=list.map(g=>gameCard(g,options)).join("");
}

function renderAll(){
 renderSection("onlineProducts",getFilteredGames("online"));
 renderSection("offlineProducts",getFilteredGames("offline"));

 const query=document.getElementById("searchInput").value.toLowerCase().trim();
 const featuredList=getFeaturedNames();

 let featured=games.filter(g=>
  featuredList.includes(g.name)&&g.mode==="offline"&&
  (activeCategory==="all"||g.cat===activeCategory)&&
  g.name.toLowerCase().includes(query)
 );

 featured.sort((a,b)=>featuredList.indexOf(a.name)-featuredList.indexOf(b.name));
 featured=featured.slice(0,10);
 renderSection("topProducts",featured,{featured:true});

 const offers=getOfferPrices();

 let offerGames=games.filter(g=>
  Object.prototype.hasOwnProperty.call(offers,g.name)&&g.mode==="offline"&&
  (activeCategory==="all"||g.cat===activeCategory)&&
  g.name.toLowerCase().includes(query)
 );

 const sort=document.getElementById("sortSelect").value;
 if(sort==="name")offerGames.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="priceLow")offerGames.sort((a,b)=>offers[a.name]-offers[b.name]);
 if(sort==="priceHigh")offerGames.sort((a,b)=>offers[b.name]-offers[a.name]);
 if(sort==="year")offerGames.sort((a,b)=>b.year-a.year);

 renderSection("offerProducts",offerGames,{offer:true});
}

function addToCart(id,price){
 const g=games.find(x=>x.id===id);
 if(!g)return;

 if(isSoldOut(g.name)){
  toast("عذرًا، لقد نفذت كمية اللعبة");
  return;
 }

 cart[id]=cart[id]||{qty:0,price:g.price};
 if(typeof cart[id]==="number")cart[id]={qty:cart[id],price:g.price};

 cart[id].qty++;
 cart[id].price=Number(price);

 saveCart();
 updateCart();
 toast("اتضافت للسلة 🛒");
}

function normalizeCart(){
 for(const id of Object.keys(cart)){
  const g=games.find(x=>x.id===id);

  if(!g||isSoldOut(g.name)){
   delete cart[id];
   continue;
  }

  if(typeof cart[id]==="number")cart[id]={qty:cart[id],price:g.price};

  if(!cart[id]||typeof cart[id]!=="object"||cart[id].qty<=0){
   delete cart[id];
   continue;
  }

  cart[id].price=Number(cart[id].price);
 }
 saveCart();
}

function changeQty(id,delta){
 if(!cart[id])return;

 const g=games.find(x=>x.id===id);
 if(g&&isSoldOut(g.name)){
  delete cart[id];
  saveCart();
  updateCart();
  toast("لقد نفذت كمية اللعبة");
  return;
 }

 cart[id].qty+=delta;
 if(cart[id].qty<=0)delete cart[id];
 saveCart();
 updateCart();
}

function removeItem(id){
 delete cart[id];
 saveCart();
 updateCart();
 toast("اتحذفت من السلة");
}

function clearCart(){
 cart={};
 saveCart();
 updateCart();
 toast("السلة اتفضت");
}

function updateCart(){
 const ids=Object.keys(cart);

 document.getElementById("cartCount").textContent=
 ids.reduce((s,id)=>s+(cart[id]?.qty||0),0);

 document.getElementById("cartItems").innerHTML=ids.length?ids.map(id=>{
  const g=games.find(x=>x.id===id);
  if(!g)return "";

  const item=cart[id];

  return `<div class="cart-row">
  <div class="cart-thumb">${coverHTML(g)}</div>
  <div class="cart-info">
  <h4>${escapeHTML(g.name)} — ${g.mode==="online"?"أونلاين":"أوفلاين"}</h4>
  <small>${money(item.price)} للنسخة</small>
  <div class="qty">
  <button onclick="changeQty('${id}',-1)" aria-label="تقليل العدد">−</button>
  <span>${item.qty}</span>
  <button onclick="changeQty('${id}',1)" aria-label="زيادة العدد">+</button>
  <button class="remove" onclick="removeItem('${id}')">إزالة</button>
  </div>
  </div>
  </div>`;
 }).join(""):'<div class="empty">السلة فاضية لسه 🎮</div>';

 const total=ids.reduce((sum,id)=>
  sum+(cart[id]?(Number(cart[id].price)||0)*cart[id].qty:0),0
 );

 document.getElementById("cartTotal").textContent=money(total);
}

function openCart(){
 document.getElementById("overlay").classList.add("show");
 document.getElementById("cartDrawer").classList.add("show");
 document.body.style.overflow="hidden";
}

function closeCart(){
 document.getElementById("overlay").classList.remove("show");
 document.getElementById("cartDrawer").classList.remove("show");
 document.body.style.overflow="";
}

/* الاسم ورقم الهاتف إجباريان في كل طلب */
function checkout(){
 normalizeCart();
 updateCart();

 const ids=Object.keys(cart);

 if(!ids.length){
  toast("السلة فاضية");
  return;
 }

 const name=document.getElementById("customerName").value.trim();
 const phone=document.getElementById("customerPhone").value.trim();

 if(!name){
  toast("اكتب اسمك الأول");
  document.getElementById("customerName").focus();
  return;
 }

 if(!phone){
  toast("اكتب رقم تليفونك الأول");
  document.getElementById("customerPhone").focus();
  return;
 }

 const phoneDigits=phone.replace(/\D/g,"");

 if(phoneDigits.length<8){
  toast("اكتب رقم تليفون صحيح");
  document.getElementById("customerPhone").focus();
  return;
 }

 const lines=ids.map(id=>{
  const g=games.find(x=>x.id===id);
  const item=cart[id];

  return g
   ?`${g.name} (${g.mode==="online"?"أونلاين":"أوفلاين"}) × ${item.qty} = ${item.price*item.qty} جنيه`
   :"";
 }).filter(Boolean);

 const total=ids.reduce((s,id)=>
  s+(cart[id]?cart[id].price*cart[id].qty:0),0
 );

 const msg=[
  "مساء الخيرGAME.VEX",
  "الاسم: "+name,
  "رقم العميل: "+phone,
  "",
  ...lines,
  "",
  "الإجمالي: "+money(total),
  "في انتظار تأكيد الطلب"
 ].join("\n");

 window.open(
  "https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),
  "_blank"
 );
}

normalizeCart();
renderCategories();
renderAll();
updateCart();

document.addEventListener("keydown",function(e){
 if(e.key==="Escape")closeCart();
});