CATÁLOGO VIRTUAL — XINYUAN IMPORT
================================

CÓMO ABRIR
1. Descomprime el ZIP.
2. Abre index.html en tu navegador.
3. No requiere instalación ni servidor. Para publicar, puedes subir la carpeta a GitHub Pages, Netlify o cualquier hosting estático.

EDITAR PRODUCTOS
Abre app.js y modifica el arreglo PRODUCTS. Cada producto usa:
- id: identificador único.
- name: nombre del producto.
- category: categoría.
- price: precio numérico.
- tag: etiqueta opcional.
- description: descripción completa/corta.
- image: imagen principal que aparece en el catálogo.
- images: arreglo con todas las imágenes que aparecerán en el carrusel de la ficha individual.

EJEMPLO PARA UN PRODUCTO CON 3 FOTOS
{
  id: "CN-007",
  name: "Producto de ejemplo",
  category: "Relojes",
  price: 120,
  tag: "Nuevo",
  description: "Descripción detallada del producto.",
  image: "img/producto-07.png",
  images: [
    "img/producto-07.png",
    "img/producto-07-2.png",
    "img/producto-07-3.png"
  ]
}

Copia todas las fotografías PNG dentro de la carpeta img y escribe sus rutas en images. La primera imagen del arreglo será la principal. Si un producto solo tiene una imagen, la ficha se mostrará igualmente y el carrusel omitirá las flechas porque no hay más fotografías.

DETALLE DEL PRODUCTO
- Al hacer clic en la fotografía de un producto se abre producto.html en una pestaña nueva.
- La ficha muestra nombre, precio, categoría, código, descripción y botón de pedido por WhatsApp.
- El carrusel tiene flechas anterior/siguiente, miniaturas y admite las flechas izquierda/derecha del teclado.
- Cada ficha se identifica mediante el parámetro id de la URL.

LOGOS DE REDES SOCIALES
Todos los recursos visuales editables se encuentran en la carpeta img. Para cambiar una imagen, reemplaza el archivo conservando el mismo nombre y formato, o actualiza su ruta en el HTML/CSS/app.js.

Los logotipos de redes sociales se encuentran en la carpeta img:
- img/social-instagram.svg
- img/social-tiktok.svg
- img/social-whatsapp.svg
Puedes reemplazarlos por tus propios archivos SVG o PNG. Si cambias el nombre o formato, actualiza el atributo src correspondiente en index.html. Se muestran en la sección Contacto.

OTRAS IMÁGENES
- img/logo.png: logo de la cabecera.
- img/sobre-nosotros.png: imagen/logo de la sección “Sobre nosotros”. Puedes reemplazar este archivo por cualquier imagen PNG o JPG manteniendo el mismo nombre, o cambiar la ruta en index.html.
- img/inicio.png: imagen referencial del inicio.
- img/producto-01.png a img/producto-06.png: imágenes demostrativas del catálogo.

WHATSAPP
En app.js cambia WHATSAPP_NUMBER por el código de país y número, solo dígitos. Actualmente está configurado como 51933299897 (Perú +51).

FUNCIONES
- Búsqueda por nombre o ID.
- Filtros por categoría y orden por precio/nombre.
- Ficha individual de producto en pestaña nueva.
- Carrusel de fotografías por producto.
- Enlaces a Instagram, TikTok y WhatsApp.
- Botón individual de pedido por WhatsApp.
- Diseño adaptable a móviles y escritorio.

NOTA
Los productos y fotografías incluidos son de demostración. Sustitúyelos por tu inventario y fotografías reales. El sitio es frontend-only: no incluye panel administrativo, base de datos ni pagos en línea.
