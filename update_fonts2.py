import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\ManageCredentials.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace font styles across the board to match the Vercel-like overview
content = re.sub(r'font-bold text-lg', 'text-sm font-semibold', content)
content = re.sub(r'text-\[12px\] font-medium text-gray-500', 'text-xs text-gray-500 dark:text-gray-400', content)
content = re.sub(r'font-bold text-\[14px\]', 'text-sm font-semibold', content)
content = re.sub(r'text-\[12px\] text-gray-500 dark:text-\[#8a8f98\] font-medium', 'text-xs text-gray-500 dark:text-gray-400', content)
content = re.sub(r'font-bold text-\[15px\]', 'text-sm font-semibold', content)
content = re.sub(r'text-\[13px\] font-medium text-gray-600 dark:text-gray-300', 'text-xs text-gray-500 dark:text-gray-400', content)
content = re.sub(r'font-bold text-\[13px\] text-gray-900', 'text-sm font-semibold text-gray-900', content)
content = re.sub(r'text-\[10px\] uppercase font-bold', 'text-[11px] font-bold uppercase', content)

# Remove the weird container styles if they don't want it on the sidebar? 
# Wait, "i want that the all the card the container card how it design" 
# This means they DO want the cards to look like the container card! 
# In Dashboard, the cards are rounded-xl border-black/10 etc.
# I'll ensure all cards (projects, experience, certs) have exactly:
# rounded-xl bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30
content = re.sub(
    r'rounded-2xl border transition-all duration-300.*?border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30\'}',
    r"rounded-xl bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30'}",
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
