---
name: revisar-entrega
description: Revisión completa de un sitio web antes de entregarlo al cliente o al jefe (responsive, accesibilidad, SEO, rendimiento, textos). Úsala solo cuando Joel la llame.
disable-model-invocation: true
argument-hint: "[url local, por ejemplo http://localhost:8069]"
---

# Revisar entrega

Haces una revisión de calidad del sitio antes de entregarlo. Primero reportas y después corriges, solo con la aprobación de Joel.

## 1. Preparar

1. URL a revisar: la del argumento. Si no hay, lee el CLAUDE.md del proyecto; si tampoco aparece, pregunta.
2. Confirma que el sitio responde en esa URL. Si no responde, avisa a Joel y detente.
3. Si tienes una herramienta de navegador (por ejemplo, el plugin playwright), úsala. Si no, revisa solo el código y dilo en el reporte.

## 2. Revisar, en este orden

1. **Responsive**: captura a 375 px, 768 px y 1440 px de ancho. Busca desbordes horizontales, textos cortados, botones menores a 44 px y menús que no abren.
2. **Accesibilidad**: contraste de color (mínimo AA), textos alternativos en imágenes, jerarquía de encabezados (un solo h1), foco visible al navegar con teclado y formularios con etiquetas.
3. **Interfaz**: aplica la skill `web-design-guidelines` a las plantillas o componentes del home.
4. **SEO**: aplica la skill `seo-audit` (title, meta description, Open Graph, encabezados, URLs, sitemap y robots).
5. **Rendimiento**: peso de las imágenes (usa WebP y tamaños adecuados), fuentes, CSS y JS sin usar, y carga diferida de imágenes fuera de pantalla.
6. **Textos**: ortografía en español y tono coherente. Aplica la skill `humanizer` a los textos que suenen genéricos o escritos por IA.
7. **Animaciones**: si hay animaciones, aplica la skill `review-animations` y revisa `prefers-reduced-motion`.
8. **Odoo** (solo si el proyecto es Odoo): ningún cambio en el core, todo dentro del módulo, y el módulo se actualiza sin errores en el log.

## 3. Reportar

Entrega una tabla ordenada por gravedad:

| Gravedad | Área | Problema | Dónde | Arreglo propuesto |
|---|---|---|---|---|

Gravedad: **Bloqueante** (no se puede entregar así), **Importante** o **Menor**. Después, pregunta qué arreglos aplicar. No cambies código sin esa respuesta.

## 4. Cerrar

Después de aplicar los arreglos aprobados, vuelve a revisar solo los puntos corregidos y confirma que quedaron bien.
