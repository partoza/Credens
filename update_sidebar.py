import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\Sidebar.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Update active item colors to use primary theme
content = content.replace("? 'bg-black text-white dark:bg-white dark:text-black shadow-md scale-[1.02]'", "? 'bg-primary text-primary-foreground shadow-md scale-[1.02]'")
content = content.replace("? 'bg-white/20 dark:bg-black/10 text-white dark:text-black'", "? 'bg-primary-foreground/20 text-primary-foreground'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
