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

## MCP de 21st.dev (aparte del plugin)

El MCP de 21st.dev (componentes de UI) no va dentro del plugin: la API key es personal y no debe estar en el repositorio. Se instala una vez por computadora, a nivel de usuario, y queda disponible en todos los proyectos:

```
claude mcp add --transport http --scope user 21st https://21st.dev/api/mcp --header "x-api-key: TU_API_KEY"
```

Comprueba con `claude mcp list` que aparezca como Connected.

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
