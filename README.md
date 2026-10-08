# Demo C · Atelier Pliegue
## Demo de Sitio Web a Medida — Lumux Studio

Aplicación estática independiente desarrollada con **Astro 4 + TypeScript + GSAP**. Sirve como demostración comercial navegable del servicio de **Sitios Web a Medida** de Lumux Studio para marcas de producto, diseño de mobiliario, iluminación de autor y cerámica.

---

## 1. Características Técnicas

- **Framework:** Astro 4 (Static Site Generation / SSG).
- **Tipografía y Tokens:** CSS modular mediante variables en `src/styles/tokens.css` y `src/styles/global.css`.
- **Selector de Paletas Interactivo:** Componente flotante `ThemeSwitcher.astro` con 3 atmósferas minerales (*Yeso & Oliva*, *Travertino & Cobre*, *Nogal & Lino*), persistidas en `localStorage`.
- **Catálogo y Fichas con Variantes de Acabado:**
  - Componente `VariantSelector.astro` con selector interactivo de materiales que actualiza en tiempo real la fotografía del producto, el nombre del acabado y la URL del botón de consulta.
  - Catálogo filtrable por categorías (*Iluminación*, *Mesas*, *Asientos*, *Objetos*) y colecciones (*Colección Luz*, *Colección Tierra*).
  - Estado vacío accesible si no hay coincidencias.
- **Embudo de Consulta Conectado:**
  - El botón "Consultar esta pieza" transfiere automáticamente la referencia del catálogo, el nombre del producto y el acabado seleccionado al formulario de `/contacto?ref=...&item=...&acabado=...`.
  - Respaldo ético de demostración en `EnquiryForm.astro`: simula la captura sin realizar cobros ni almacenar datos privados.

---

## 2. Comandos de Desarrollo y Compilación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local (http://localhost:4321)
npm run dev

# Compilar proyecto a archivos estáticos (dist/)
npm run build

# Previsualizar compilación
npm run preview
```

---

## 3. Mantenimiento y Edición de Contenido (JSON)

- **Datos de Marca & Showroom:** `src/data/site.json`
- **Paletas de Color:** `src/data/theme.json`
- **Colecciones:** Carpeta `src/content/collections/*.json`
- **Catálogo de Productos:** Cada pieza se define en `src/content/products/*.json` validada con Zod.
