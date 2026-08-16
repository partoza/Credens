import os
import re

files = [
    r'C:\Users\r3x\Credence\src\components\demo\Dashboard.tsx',
    r'C:\Users\r3x\Credence\src\components\demo\EditProfile.tsx',
    r'C:\Users\r3x\Credence\src\components\demo\ManageCredentials.tsx'
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove duplicate imports caused by my previous script
    # It might look like:
    # import { Button } from "@/components/ui/button"
    # import { Card, ... } from "@/components/ui/card"
    # import { Badge } from "@/components/ui/badge"
    # import { Button } from "@/components/ui/button"
    
    # We will just strip ALL of them and insert a clean block at the top
    content = re.sub(r'import \{ Button \} from "@/components/ui/button"\n', '', content)
    content = re.sub(r'import \{ Card, CardHeader, CardTitle, CardDescription, CardContent \} from "@/components/ui/card"\n', '', content)
    content = re.sub(r'import \{ Card \} from "@/components/ui/card"\n', '', content)
    content = re.sub(r'import \{ Input \} from "@/components/ui/input"\n', '', content)
    content = re.sub(r'import \{ Label \} from "@/components/ui/label"\n', '', content)
    content = re.sub(r'import \{ Badge \} from "@/components/ui/badge"\n', '', content)
    
    # Insert clean block after React import
    imports = '''import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
'''
    if 'import React' in content or 'import { useState' in content:
        # insert at the top
        content = imports + content

    # Fix remaining inputClasses variables
    content = content.replace('className={inputClasses}', 'className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

