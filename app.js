/*
  PERSONALIZA TU CATÁLOGO AQUÍ:
  1. WHATSAPP_NUMBER: código de país + número, solo dígitos.
  2. Edita los productos dentro de PRODUCTS.
  3. Guarda las imágenes en img/ y actualiza image / images.
     image es la foto principal; images contiene todas las fotos del carrusel.
*/
const WHATSAPP_NUMBER = "51933299897"; // Perú (+51)

const PRODUCTS = [
  {id:"CN-001",name:"Cartera de cuero",category:"Carteras",price:89.90,tag:"Favorito",description:"Una pieza artesanal.",image:"img/producto-01x1.png",images:["img/producto-01x1.png", "img/producto-01x2.png", "img/producto-01x3.png"]},
  {id:"CN-002",name:"Reloj de pulsera",category:"Relojes",price:149.00,tag:"Nuevo",description:"La hora XD.",image:"img/producto-02x1.png",images:["img/producto-02x1.png"]},
  {id:"CN-003",name:"Brazalete de acero",category:"Accesorios",price:75.00,tag:"Edición especial",description:"Brillo genial.",image:"img/producto-03x1.png",images:["img/producto-03x1.png"]}
];

const money=n=>new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format(n);
function whatsappLink(p){
  const msg=`¡Hola! Quiero realizar un pedido:\n\nProducto: ${p.name}\nID: ${p.id}\nPrecio: ${money(p.price)}\nCantidad: 1\n\n¿Me pueden ayudar con este pedido?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Página principal del catálogo
const grid=document.getElementById("productGrid");
if(grid){
  const search=document.getElementById("searchInput"), sort=document.getElementById("sortSelect");
  let activeCategory="Todos";
  function render(){
    const term=search.value.trim().toLocaleLowerCase("es");
    let items=PRODUCTS.filter(p=>(activeCategory==="Todos"||p.category===activeCategory)&&(`${p.name} ${p.id} ${p.category}`.toLocaleLowerCase("es").includes(term)));
    if(sort.value==="low")items.sort((a,b)=>a.price-b.price);
    if(sort.value==="high")items.sort((a,b)=>b.price-a.price);
    if(sort.value==="az")items.sort((a,b)=>a.name.localeCompare(b.name,"es"));
    const resultsCount=document.getElementById("resultsCount");
    if(resultsCount)resultsCount.textContent=`${items.length} producto${items.length===1?"":"s"} encontrado${items.length===1?"":"s"}`;
    document.getElementById("emptyState").hidden=items.length!==0;
    grid.innerHTML=items.map(p=>`
      <article class="product-card">
        <a class="product-image-link" href="producto.html?id=${encodeURIComponent(p.id)}" target="_blank" rel="noopener noreferrer" aria-label="Ver detalles de ${p.name}">
          <div class="product-image-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.style.display='none';" >${p.tag?`<span class="product-tag">${p.tag}</span>`:""}<span class="view-product-hint">Ver producto ↗</span></div>
        </a>
        <div class="product-info"><div class="product-meta"><span>${p.category.toUpperCase()}</span><span>${p.id}</span></div>
        <h3>${p.name}</h3><p class="product-description">${p.description}</p>
        <div class="product-bottom"><span class="price">${money(p.price)}</span><a class="order-btn" href="${whatsappLink(p)}" target="_blank" rel="noopener">◉ Pedir por WhatsApp <span>→</span></a></div></div>
      </article>`).join("");
  }
  search.addEventListener("input",render);sort.addEventListener("change",render);
  document.querySelectorAll(".filter-chip").forEach(btn=>btn.addEventListener("click",()=>{
    activeCategory=btn.dataset.category;
    document.querySelectorAll(".filter-chip").forEach(b=>b.classList.toggle("active",b===btn));render();
  }));
  document.querySelectorAll(".personality-chip").forEach(btn=>btn.addEventListener("click",()=>{
    activeCategory=btn.dataset.category;
    document.querySelectorAll(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.category===activeCategory));
    search.value="";
    render();
    document.getElementById("catalogo").scrollIntoView({behavior:"smooth"});
  }));
  document.getElementById("clearSearch").addEventListener("click",()=>{search.value="";activeCategory="Todos";document.querySelectorAll(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.category==="Todos"));render()});
  document.getElementById("generalWhatsapp").href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola! Quisiera más información sobre sus productos.")}`;
  document.querySelector(".menu-toggle").addEventListener("click",()=>document.querySelector(".site-header nav").classList.toggle("open"));
  document.querySelectorAll(".site-header nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".site-header nav").classList.remove("open")));
  document.addEventListener("keydown",e=>{if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();search.focus()}});
  render();
}

// Página individual del producto (se abre en otra pestaña)
const detailRoot=document.getElementById("productDetail");
if(detailRoot){
  const params=new URLSearchParams(location.search);
  const product=PRODUCTS.find(p=>p.id===params.get("id"));
  if(!product){
    detailRoot.innerHTML='<div class="product-not-found"><p class="eyebrow">CATÁLOGO XINYUAN IMPORT</p><h1>Producto no encontrado</h1><a class="primary-btn" href="index.html#catalogo">Volver al catálogo ↗</a></div>';
  }else{
    const photos=(product.images&&product.images.length?product.images:[product.image]).filter(Boolean);
    detailRoot.innerHTML=`
      <div class="detail-gallery">
        <div class="detail-main-image"><img id="detailImage" src="${photos[0]}" alt="${product.name}">
          ${photos.length>1?`<button class="gallery-arrow prev" id="prevPhoto" aria-label="Imagen anterior">‹</button><button class="gallery-arrow next" id="nextPhoto" aria-label="Imagen siguiente">›</button>`:""}
          <span class="gallery-counter" id="galleryCounter">1 / ${photos.length}</span>
        </div>
        <div class="gallery-thumbnails" id="galleryThumbs">${photos.map((src,i)=>`<button class="gallery-thumb ${i===0?"active":""}" data-index="${i}" aria-label="Ver imagen ${i+1}"><img src="${src}" alt=""></button>`).join("")}</div>
      </div>
      <section class="detail-info"><p class="eyebrow">${product.category.toUpperCase()} · ${product.id}</p>${product.tag?`<span class="detail-tag">${product.tag}</span>`:""}<h1>${product.name}</h1><p class="detail-price">${money(product.price)}</p><p class="detail-description">${product.description}</p><div class="detail-specs"><div><small>CÓDIGO</small><b>${product.id}</b></div><div><small>CATEGORÍA</small><b>${product.category}</b></div><div><small>DISPONIBILIDAD</small><b>Consulta por WhatsApp</b></div></div><a class="primary-btn detail-order" href="${whatsappLink(product)}" target="_blank" rel="noopener">Consultar / pedir por WhatsApp <span>↗</span></a><a class="back-catalog" href="index.html#catalogo">← Volver al catálogo</a></section>`;
    let current=0;
    const mainImage=document.getElementById("detailImage"), counter=document.getElementById("galleryCounter");
    function showPhoto(index){current=(index+photos.length)%photos.length;mainImage.src=photos[current];counter.textContent=`${current+1} / ${photos.length}`;document.querySelectorAll(".gallery-thumb").forEach((b,i)=>b.classList.toggle("active",i===current));}
    document.getElementById("prevPhoto")?.addEventListener("click",()=>showPhoto(current-1));
    document.getElementById("nextPhoto")?.addEventListener("click",()=>showPhoto(current+1));
    document.querySelectorAll(".gallery-thumb").forEach(b=>b.addEventListener("click",()=>showPhoto(Number(b.dataset.index))));
    document.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")showPhoto(current-1);if(e.key==="ArrowRight")showPhoto(current+1)});
  }
}
