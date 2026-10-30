// Hook PostToolUse: formatea con Prettier el archivo que Claude acaba de escribir o editar.
// Solo toca archivos dentro del proyecto y con extensiones soportadas. Si algo falla, no bloquea a Claude.
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const EXTENSIONES = new Set([".scss", ".css", ".js", ".mjs", ".ts", ".tsx", ".jsx", ".json", ".md", ".html"]);

let entrada = "";
process.stdin.on("data", (c) => (entrada += c));
process.stdin.on("end", () => {
  try {
    const datos = JSON.parse(entrada || "{}");
    const archivo = (datos.tool_input && datos.tool_input.file_path) || "";
    if (!archivo) return;

    const proyecto = path.resolve(process.env.CLAUDE_PROJECT_DIR || datos.cwd || process.cwd());
    const destino = path.resolve(archivo);
    const relativo = path.relative(proyecto, destino);

    // Fuera del proyecto, dentro de .git o node_modules: no se toca.
    if (relativo.startsWith("..") || path.isAbsolute(relativo)) return;
    if (/(^|[\\/])(\.git|node_modules)([\\/]|$)/.test(relativo)) return;
    if (!EXTENSIONES.has(path.extname(destino).toLowerCase())) return;
    if (!fs.existsSync(destino)) return;

    spawnSync("npx", ["--yes", "prettier@3", "--write", destino], {
      stdio: "ignore",
      shell: process.platform === "win32",
      timeout: 60000,
    });
  } catch (_) {
    // Nunca bloquear el trabajo por un fallo de formato.
  }
  process.exit(0);
});
