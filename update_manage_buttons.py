import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\ManageCredentials.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace primary buttons:
# From: bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl text-[13px] font-bold
# To:   bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md text-sm font-semibold
content = content.replace(
    "bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl text-[13px] font-bold",
    "bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md text-sm font-semibold"
)

# And if there's a variant: px-6 py-2.5 ...
content = content.replace(
    "px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-[14px] font-bold",
    "px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md text-sm font-semibold"
)

# Replace 'Add New' empty state button
content = content.replace(
    "bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl text-[13px] font-bold",
    "bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md text-sm font-semibold"
)

# Update inputs to standard rounded-md to match "Vercel overview" style
content = content.replace(
    "rounded-xl text-[14px]",
    "rounded-md text-sm"
)

# Also fix the inner edit/delete button tooltips or backgrounds if needed, but they are fine.

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
