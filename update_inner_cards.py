import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\ManageCredentials.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Update page header to match Dashboard
content = content.replace('text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight', 'text-3xl md:text-4xl font-medium tracking-tighter text-gray-900 dark:text-white mb-3')
content = content.replace('text-[15px] text-gray-500 dark:text-[#8a8f98]', 'text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium')

# Update inner card borders
content = content.replace('border-gray-200 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30', 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30')

# Update inner card titles (Projects, Experience, Certs, etc)
# Most are text-[18px] font-bold or text-[16px] font-bold
content = re.sub(r'font-bold text-\[18px\] text-gray-900 dark:text-white leading-tight mb-2 tracking-tight', 'text-sm font-semibold text-gray-900 dark:text-white mb-1.5', content)
content = re.sub(r'text-\[16px\] font-bold text-gray-900 dark:text-white leading-tight mb-1', 'text-sm font-semibold text-gray-900 dark:text-white mb-1.5', content)
content = re.sub(r'text-\[15px\] font-bold text-gray-900 dark:text-white', 'text-sm font-semibold text-gray-900 dark:text-white', content)
content = re.sub(r'text-\[14px\] font-bold text-gray-900 dark:text-white mb-2', 'text-sm font-semibold text-gray-900 dark:text-white mb-1.5', content)

# Update inner card descriptions
# text-[13px] text-gray-500 dark:text-[#8a8f98]
content = re.sub(r'text-\[13px\] text-gray-500 dark:text-\[#8a8f98\]', 'text-xs text-gray-500 dark:text-gray-400', content)

# Update section headers (e.g. "Projects" header above the grid)
# text-[22px] font-bold text-gray-900 dark:text-white tracking-tight mb-1
content = re.sub(r'text-\[22px\] font-bold text-gray-900 dark:text-white tracking-tight mb-1', 'text-xl font-medium tracking-tighter text-gray-900 dark:text-white mb-1', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
