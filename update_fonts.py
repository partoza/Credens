import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\ManageCredentials.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any remaining font styles
content = content.replace("text-[13px] font-bold", "text-sm font-semibold")
content = content.replace("text-[14px] font-bold", "text-sm font-semibold")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
