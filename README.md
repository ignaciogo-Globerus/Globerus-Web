# Globerus — Web de Presentación y Soporte

Página web moderna, rápida y 100 % estática para la app Android **Globerus**: el plan de entrenamiento para ciclistas aficionados y cicloturistas que quieren disfrutar sin presiones de profesionales.

---

## 📁 Estructura del proyecto

```text
globerus-web/
├── index.html        # Página principal con el trío de móviles, filosofía globera, pantallas, FAQ y precios
├── styles.css        # Estilos modernos con paleta Globerus (modo oscuro asfalto + verde lima neón)
├── script.js         # Interacciones: menú móvil, pestañas de modos de entreno y visor de capturas (lightbox)
├── img/              # Capturas de pantalla reales optimizadas de la app
│   ├── hero-hoy.jpg
│   ├── hero-rodillo.jpg
│   ├── hero-puerto.jpg
│   ├── semanas-plan.jpg
│   ├── semanas-ajustar.jpg
│   ├── marcha-finisher.jpg
│   └── ...
└── README.md         # Esta guía de despliegue y personalización
```

---

## ⚡ Cómo subir a Cloudflare Pages (en 1 minuto)

Cloudflare Pages aloja sitios web estáticos de forma **gratuita**, ultra rápida y con certificado SSL (HTTPS) automático. Tienes dos formas muy sencillas de publicarlo:

### Opción 1: Subida Directa (Direct Upload por arrastrar archivo) — La más rápida 🚀

1. Entra en tu panel de control de [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. En el menú de la izquierda ve a **Compute (Workers & Pages)** → **Create application** → pestaña **Pages**.
3. Selecciona la opción **Upload assets** (Subida directa).
4. Dale un nombre a tu proyecto (por ejemplo: `globerus`).
5. Arrastra la carpeta `globerus-web` (o el archivo `globerus-web.zip` generado).
6. Haz clic en **Deploy site**.
7. ¡Listo! En 5 segundos tendrás tu URL pública del tipo `https://globerus.pages.dev` funcionando en todo el mundo.

---

### Opción 2: Conectar con GitHub o GitLab (Despliegues automáticos) 🔄

1. Sube este proyecto a un repositorio de GitHub (o GitLab).
2. En Cloudflare Dashboard ve a **Compute (Workers & Pages)** → **Create** → **Pages** → **Connect to Git**.
3. Selecciona tu repositorio.
4. En los ajustes de compilación (*Build settings*):
   - **Framework preset**: `None`
   - **Build command**: *(dejar vacío)*
   - **Build output directory**: `/` (o la carpeta donde está `index.html`)
5. Haz clic en **Save and Deploy**. Cada vez que hagas `git push`, Cloudflare actualizará la web automáticamente.

---

## 🎨 Características incluidas

1. **Portada con 3 móviles interactivos:**
   - Teléfono 1 (Izquierda): Rodillo en vivo con voz y avisos.
   - Teléfono 2 (Centro - Estrella): Pantalla "Hoy", frase motivadora del día y el puerto de tu marcha.
   - Teléfono 3 (Derecha): Progreso de la temporada dibujado como un puerto.
2. **Tono y Filosofía Globera:**
   - Pensada para ciclistas reales: trabajo, familia, ganas de disfrutar.
   - Cero presiones: botón "Plan B" (más corta −30 %, suave o descanso) si ayer no pudiste entrenar.
   - Cero jerga: explica los esfuerzos con lenguaje cercano.
3. **Pestañas para los 3 modos de entreno:**
   - Sensaciones (escala 1 a 10 sin cacharros caros).
   - Pulso (ppm y zonas cardíacas).
   - Vatios (potenciómetro y compatibilidad iGPSPORT).
4. **Capturas de pantalla reales con zoom:**
   - Al tocar cualquier captura de pantalla se abre un visor (lightbox) para ver todos los detalles.
5. **Sección de Soporte y Preguntas Frecuentes (FAQ):**
   - Acordeones interactivos con las dudas comunes (iCM, Strava, AEMET, copias de seguridad).
   - Contacto directo a `soporte.globerus@gmail.com`.
6. **Transparencia en el precio:**
   - 21 días de prueba gratuita.
   - 4,99 € pago único para toda tu preparación (sin cuotas mensuales recurrentes).

---

## 🛠️ Personalizaciones habituales

- **Cambiar el correo de soporte:**
  Busca `soporte.globerus@gmail.com` en `index.html` y reemplázalo por el buzón definitivo que utilices.
- **Cambiar el precio o días de prueba:**
  En `index.html`, busca `4,99` o `21 días` para actualizarlo cuando lo necesites.
- **Añadir el enlace de descarga de la APK / Google Play:**
  En la sección `#prueba`, reemplaza el enlace del botón principal por el enlace directo de descarga o a la ficha de Google Play Store.


## Cambios de la versión preparada para el lanzamiento

- Hero actualizado para explicar el beneficio principal: entrenar con un plan flexible que encaja en la vida real.
- CTA principal dirigido a las pantallas reales de la aplicación, no a una descarga que todavía no está publicada.
- Bloque de lanzamiento actualizado para no presentar Google Play como disponible antes de crear la ficha.
- CTA de contacto claro para consultas sobre el lanzamiento.
- Metadatos SEO y Open Graph básicos añadidos.
- Capturas habilitadas para abrirse también con teclado.
- Archivos del ZIP normalizados con carpetas `img/` para que las rutas de las imágenes funcionen al extraerlo.

**Antes de publicar:** revisa que el precio y la prueba gratuita siguen siendo los definitivos; añade la URL pública de Google Play cuando esté disponible y decide si el APK se distribuirá desde la web.
## Actualización de filosofía de marca

La página comunica ahora que Globerus ofrece un plan ciclista estándar y sencillo, estructurado a partir del objetivo, la disponibilidad y la forma de medir el esfuerzo del usuario. No se presenta como un plan individualizado de entrenador personal. El mensaje central es que la estructura ayuda a organizarse, pero la constancia semana a semana es la base para progresar como ciclista aficionado. Se han ajustado el titular principal, la sección de filosofía, el proceso de creación del plan y algunos textos que podían sugerir resultados garantizados o adaptación automática.

