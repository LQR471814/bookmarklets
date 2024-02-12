import { readdir, stat, rm } from "node:fs/promises"
import { join } from "node:path"

const entrypoints: string[] = []
for (const e of await readdir("src")) {
    const entry = join("src", e)
    const s = await stat(entry)
    if (s.isFile() && e.endsWith(".ts")) {
        entrypoints.push(entry)
        continue
    }
    if (s.isDirectory() && e !== "lib") {
        entrypoints.push(join(entry, "index.ts"))
    }
}

await rm("dist", { recursive: true, force: true })
await Bun.build({
    entrypoints: entrypoints,
    outdir: "dist",
    minify: true,
})
