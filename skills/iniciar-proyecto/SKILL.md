---
name: iniciar-proyecto
description: Prepara un proyecto nuevo o existente con la configuración estándar de Joel (CLAUDE.md, permisos seguros, hook de formateo, .gitignore y Git). Úsala solo cuando Joel la llame.
disable-model-invocation: true
argument-hint: "[odoo | web | nextjs]"
---

# Iniciar proyecto

Preparas la carpeta actual con la configuración estándar de Joel. Trabajas en español y le muestras a Joel cada archivo antes de crearlo o cambiarlo. Las plantillas están en la carpeta `plantillas/` junto a este archivo.

## 1. Detectar el tipo de proyecto

Si Joel pasó un argumento (`odoo`, `web` o `nextjs`), úsalo. Si no:

1. Revisa la carpeta: `__manifest__.py` o `docker-compose.yml` con una imagen `odoo` → **odoo**; `package.json` con `next` → **nextjs**; `index.html` o un `package.json` sin Next → **web**.
2. Si no puedes deducirlo, pregúntale a Joel con una sola pregunta y tres opciones.

Pregunta también, en el mismo mensaje y solo si no lo puedes deducir: nombre del proyecto, cliente o empresa, y versión de Odoo (si es Odoo).

## 2. Revisar lo que ya existe

Antes de crear nada, revisa si ya existen `CLAUDE.md`, `.claude/settings.json`, `.claude/hooks/formatear.js` y `.gitignore`.

- Si un archivo **no existe**, créalo desde su plantilla.
- Si **ya existe**, no lo sobrescribas. Muestra qué le agregarías de la plantilla y pide confirmación.

## 3. Crear los archivos

| Archivo destino | Plantilla |
|---|---|
| `CLAUDE.md` | `plantillas/CLAUDE-odoo.md`, `plantillas/CLAUDE-web.md` o `plantillas/CLAUDE-nextjs.md` según el tipo |
| `.claude/settings.json` | `plantillas/settings.json` |
| `.claude/hooks/formatear.js` | `plantillas/hooks/formatear.js` |
| `.gitignore` | `plantillas/gitignore-odoo.txt` o `plantillas/gitignore-web.txt` |

En el CLAUDE.md reemplaza cada `{{...}}` con lo que sepas. Lo que no sepas, déjalo como `TODO:` para que Joel lo complete; no inventes datos.

## 4. Git

1. Si la carpeta no es un repositorio, ejecuta `git init`.
2. Muestra `git status` y propón el commit `chore: configuración inicial de Claude Code`.
3. Haz el commit solo si Joel lo confirma. Nunca hagas push.

## 5. Resumen final

Termina con:

- La lista de archivos creados o modificados.
- Los `TODO:` que Joel debe completar en el CLAUDE.md.
- Las skills del kit que aplican a este tipo de proyecto (por ejemplo, `odoo-19` para Odoo; `seo-audit` y `revisar-entrega` antes de entregar).
- Un recordatorio: el hook de formateo usa Prettier mediante `npx`, así que necesita Node.js instalado.
