# {{NOMBRE_PROYECTO}}

Cliente/empresa: {{CLIENTE}}
Objetivo: {{OBJETIVO}}

## Stack
- Odoo {{VERSION_ODOO}} ({{EDICION: Community | Enterprise}}), local con Docker; producción: {{PRODUCCION: Odoo.sh | servidor propio}}
- Módulo de trabajo: `addons/{{NOMBRE_MODULO}}`
- Vistas en QWeb (XML), estilos en SCSS, JS con la sintaxis de Odoo {{VERSION_ODOO}}

## Comandos
- Levantar: `docker compose up -d`
- Logs: `docker compose logs -f odoo`
- Actualizar el módulo: `docker compose exec odoo odoo -u {{NOMBRE_MODULO}} -d {{BASE_DE_DATOS}} --stop-after-init`
- Sitio local: http://localhost:8069

## Reglas
- Todo cambio va dentro de `addons/{{NOMBRE_MODULO}}`. Nunca editar el core de Odoo ni módulos de terceros.
- Las páginas y los snippets se crean en código (módulo), no con el editor visual: lo que se hace en el editor queda solo en la base de datos local.
- Antes de escribir código de Odoo, consulta la skill `odoo-19` y verifica la sintaxis de la versión {{VERSION_ODOO}}.
- Mobile-first, accesibilidad AA y textos en español de Ecuador.
- Usa modo plan para cambios de más de un archivo.
- Después de cada sección terminada: actualizar el módulo, revisar en el navegador y proponer commit.

## Marca
- Colores: TODO
- Tipografía: TODO
- Tono de los textos: TODO
