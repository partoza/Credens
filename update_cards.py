import os
import re

directory = 'src/components/demo'
for filename in os.listdir(directory):
    if filename.endswith('.tsx'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace variations of the card class
        # Pattern 1: bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl ... shadow-sm
        content = re.sub(
            r'bg-white dark:bg-\[#0a0a0a\] border border-gray-200 dark:border-white/10 rounded-xl (p-\d+ md:p-\d+ mb-\d+ )?shadow-sm',
            r'bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-xl \1transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )
        content = re.sub(
            r'bg-white dark:bg-\[#0a0a0a\] border border-gray-200 dark:border-white/10 rounded-xl shadow-sm',
            r'bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )
        content = re.sub(
            r'bg-white dark:bg-\[#0a0a0a\] p-5 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm',
            r'bg-white dark:bg-[#111111] p-5 rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )
        content = re.sub(
            r'bg-white dark:bg-\[#0a0a0a\] rounded-xl border border-gray-200 dark:border-white/10 shadow-sm',
            r'bg-white dark:bg-[#111111] rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )
        content = re.sub(
            r'bg-white dark:bg-\[#111111\] rounded-xl border border-black/10 dark:border-white/10 shadow-sm',
            r'bg-white dark:bg-[#111111] rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
