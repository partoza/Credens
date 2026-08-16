import os
import re

filepath = r'C:\Users\r3x\Credence\tsconfig.app.json'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

if '"baseUrl"' not in content:
    content = content.replace('"compilerOptions": {', '"compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./src/*"]\n    },')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
