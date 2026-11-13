# joel-claude-kit

Kit personal de skills para Claude Code: preparar proyectos con un solo comando y revisar entregas web (SEO, interfaz, textos, animaciones y Odoo 19).

## Instalación (una vez por computadora)

En cualquier sesión de Claude Code:

```
/plugin marketplace add joeferota14-stack/joel-claude-kit
/plugin install web-kit@joel-kit
/reload-plugins
```

Cambia `joeferota14-stack` por tu usuario de GitHub.

## Uso

| Comando | Qué hace |
|---|---|
| `/web-kit:iniciar-proyecto odoo` | Crea CLAUDE.md, permisos, hook de formateo, .gitignore y Git en un proyecto Odoo (también `web` o `nextjs`) |
| `/web-kit:revisar-entrega http://localhost:8069` | Revisión completa antes de entregar: responsive, accesibilidad, interfaz, SEO, rendimiento y textos |
| `/web-kit:seo-audit` | Auditoría SEO |
| `/web-kit:web-design-guidelines` | Revisión de la interfaz con las guías de Vercel |
| `/web-kit:humanizer` | Quita a los textos el tono de "escrito por IA" |
| `/web-kit:review-animations` | Revisión de animaciones |
| `odoo-19` | Se activa sola cuando trabajas con código de Odoo 19 |

`iniciar-proyecto` y `revisar-entrega` solo se ejecutan cuando tú las llamas.

## MCP incluido: 21st.dev

El plugin trae el servidor MCP de 21st.dev (componentes de UI). La API key **no** está en el repositorio: se lee de la variable de entorno `TWENTYFIRST_API_KEY`.

Una vez por computadora, antes de abrir Claude Code:

- Windows (PowerShell): `setx TWENTYFIRST_API_KEY "tu_key"` y luego cierra y abre VS Code.
- Mac/Linux: agrega `export TWENTYFIRST_API_KEY="tu_key"` a `~/.zshrc` o `~/.bashrc`.

Comprueba con `/mcp` que `21st` aparezca conectado.

## Actualizar

1. Edita las skills en este repositorio, haz commit y push.
2. En cada computadora: `/plugin marketplace update joel-kit`

## Agregar una skill nueva

1. Crea `skills/<nombre>/SKILL.md` con `name` y `description` en el frontmatter.
2. Agrega `"./skills/<nombre>"` a la lista `skills` de `.claude-plugin/marketplace.json`.
3. Commit, push y `/plugin marketplace update joel-kit`.

## Requisitos

- Claude Code
- Node.js (para el hook de formateo con Prettier)
- Git

## Licencias

Las skills propias (`iniciar-proyecto`, `revisar-entrega`) son MIT. Las de terceros conservan su licencia y aviso en su carpeta; el detalle está en [THIRD_PARTY.md](THIRD_PARTY.md).
