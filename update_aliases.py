import os
import json

filepath = r'C:\Users\r3x\Credence\tsconfig.app.json'
with open(filepath, 'r', encoding='utf-8') as f:
    config = json.load(f)

config['compilerOptions']['baseUrl'] = '.'
config['compilerOptions']['paths'] = { '@/*': ['./src/*'] }

with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(config, f, indent=2)

vite_path = r'C:\Users\r3x\Credence\vite.config.ts'
with open(vite_path, 'r', encoding='utf-8') as f:
    vite_content = f.read()

if 'resolve: {' not in vite_content:
    vite_content = vite_content.replace('import { defineConfig } from \'vite\'', 'import { defineConfig } from \'vite\'\nimport path from "path"')
    vite_content = vite_content.replace('plugins: [react()],', 'plugins: [react()],\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "./src"),\n    },\n  },')
    with open(vite_path, 'w', encoding='utf-8') as f:
        f.write(vite_content)
