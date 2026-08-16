import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\EditProfile.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Header matching
content = content.replace(
    'text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight',
    'text-3xl md:text-4xl font-medium tracking-tighter text-gray-900 dark:text-white mb-3'
)
content = content.replace(
    'text-[15px] text-gray-500 dark:text-[#8a8f98]',
    'text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium'
)

# Button matching
# Save Changes button
content = content.replace(
    "flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all shadow-sm",
    "flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm"
)
content = content.replace(
    "'bg-black dark:bg-white text-white dark:text-black hover:opacity-90 hover:shadow'",
    "'bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 hover:shadow'"
)

# Upload New Photo button
content = content.replace(
    "bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-[13px] font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors mb-2 shadow-sm w-full sm:w-auto",
    "bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors mb-2 shadow-sm w-full sm:w-auto"
)

# Add Link button
content = content.replace(
    "flex items-center gap-2 text-[13px] font-bold text-blue-600",
    "flex items-center gap-2 text-sm font-semibold text-blue-600"
)

# Typography - Labels & Inputs
content = content.replace('text-[14px]', 'text-sm')
content = content.replace('text-[13px] font-semibold', 'text-sm font-semibold')
content = content.replace('text-[12px]', 'text-xs')
content = content.replace('text-[11px]', 'text-[11px]')

# Section Headers (Basic Info, Social Links, Contact Info)
content = content.replace(
    'text-[15px] font-bold text-gray-900 dark:text-white uppercase tracking-wider',
    'text-sm font-semibold text-gray-900 dark:text-white'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
