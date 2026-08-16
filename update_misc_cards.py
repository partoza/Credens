import os
import re

directory = 'src/components/demo'
for filename in os.listdir(directory):
    if filename.endswith('.tsx'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Dashboard header card
        content = re.sub(
            r'bg-white dark:bg-\[#0a0a0a\] border border-gray-200 dark:border-white/10 rounded-xl p-8 mb-6 shadow-sm',
            r'bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-xl p-8 mb-6 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )
        # Dashboard stats wrapper card (which uses shadow-sm flex flex-col md:flex-row ...)
        content = re.sub(
            r'bg-white dark:bg-\[#0a0a0a\] border border-gray-200 dark:border-white/10 rounded-xl p-8 md:p-12 shadow-sm',
            r'bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-xl p-8 md:p-12 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )
        # Settings danger zone
        content = re.sub(
            r'bg-white dark:bg-\[#111111\] rounded-xl border border-red-200 dark:border-red-900/30 shadow-sm',
            r'bg-white dark:bg-[#111111] rounded-xl border border-red-200 dark:border-red-900/30 transition-all duration-200 hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-800/50',
            content
        )
        # Subscription active plan
        content = re.sub(
            r"'border-black/10 dark:border-white/10 shadow-sm'",
            r"'border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30'",
            content
        )
        # ManageCredentials preview container
        content = re.sub(
            r'bg-gray-50/50 dark:bg-\[#0a0a0a\] rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm',
            r'bg-white dark:bg-[#111111] rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )
        # ManageCredentials block cards
        content = re.sub(
            r'bg-white dark:bg-\[#161616\] border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm',
            r'bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30',
            content
        )

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
