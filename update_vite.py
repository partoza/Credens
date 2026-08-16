import os

vite_path = r'C:\Users\r3x\Credence\vite.config.ts'
with open(vite_path, 'r', encoding='utf-8') as f:
    vite_content = f.read()

if 'resolve: {' not in vite_content:
    vite_content = vite_content.replace('import { defineConfig } from \'vite\'', 'import { defineConfig } from \'vite\'\nimport path from "path"')
    vite_content = vite_content.replace('plugins: [react()],', 'plugins: [react()],\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "./src"),\n    },\n  },')
    with open(vite_path, 'w', encoding='utf-8') as f:
        f.write(vite_content)
