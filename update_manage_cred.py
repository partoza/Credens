import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\ManageCredentials.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace container backgrounds and cards
content = re.sub(
    r'bg-white dark:bg-\[#111111\] p-2 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm',
    r'bg-white dark:bg-[#111111] p-2 rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
    content
)
content = re.sub(
    r'bg-white dark:bg-\[#111111\] rounded-2xl p-6 shadow-sm relative overflow-hidden border border-gray-200 dark:border-white/10',
    r'bg-white dark:bg-[#111111] rounded-xl p-6 relative overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
    content
)
content = re.sub(
    r'rounded-2xl bg-white dark:bg-\[#111111\] border transition-all duration-300',
    r'rounded-xl bg-white dark:bg-[#111111] border transition-all duration-200 hover:-translate-y-1',
    content
)
content = re.sub(
    r"hover:border-black/30 dark:hover:border-white/30 hover:shadow-sm",
    r"hover:border-black/20 dark:hover:border-white/30",
    content
)
content = re.sub(
    r'border-gray-200 dark:border-white/10 p-6 rounded-2xl hover:border-black/30 dark:hover:border-white/30 hover:shadow-sm transition-all duration-300 relative',
    r'border-black/10 dark:border-white/10 p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 relative',
    content
)
content = re.sub(
    r'bg-white dark:bg-\[#111111\] border-gray-200 dark:border-white/10',
    r'bg-white dark:bg-[#111111] border-black/10 dark:border-white/10',
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
