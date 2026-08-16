import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\Dashboard.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
if 'import { Button }' not in content:
    content = content.replace('import {', 'import { Button } from "@/components/ui/button"\nimport { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"\nimport { Badge } from "@/components/ui/badge"\nimport {')

# 1. Update buttons in Welcome Banner
content = content.replace('<button className="bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">View Portfolio</button>', '<Button variant="default">View Portfolio</Button>')
content = content.replace('<button className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm">Manage Credentials</button>', '<Button variant="outline">Manage Credentials</Button>')

# 2. Unify Icon Colors to text-primary
# e.g., text-blue-500, text-emerald-500, text-purple-500 -> text-primary
content = re.sub(r'text-(blue|emerald|purple|amber|green|orange|pink|rose|indigo|cyan)-[456]00', 'text-primary', content)
# Ensure any remaining specific color classes for icons are replaced
content = re.sub(r'bg-(blue|emerald|purple|amber|green|orange|pink|rose|indigo|cyan)-100 dark:bg-\1-900\/20', 'bg-primary/10', content)

# 3. Update main Container Cards
# Before: <div className="bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-xl p-8 mb-6 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
# After: <Card className="p-8 mb-6 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
content = re.sub(
    r'<div className="bg-white dark:bg-\[\#111111\] border border-black/10 dark:border-white/10 rounded-xl p-8 mb-6 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">',
    r'<Card className="p-8 mb-6 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">',
    content
)
# Close tag for the first card
content = content.replace('      </div>\n\n      {/* Date Filter Bar */}', '      </Card>\n\n      {/* Date Filter Bar */}')

# 4. Storage Overview Card
content = re.sub(
    r'<div className="bg-white dark:bg-\[\#111111\] border border-black/10 dark:border-white/10 rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30">',
    r'<Card className="p-8 transition-all duration-200 hover:-translate-y-1">',
    content
)
content = content.replace('      </div>\n\n      {/* Recent Activity Grid */}', '      </Card>\n\n      {/* Recent Activity Grid */}')

# 5. Active Sessions Card
content = re.sub(
    r'<div className="bg-white dark:bg-\[\#111111\] border border-black/10 dark:border-white/10 rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 lg:col-span-1 flex flex-col">',
    r'<Card className="p-8 transition-all duration-200 hover:-translate-y-1 lg:col-span-1 flex flex-col">',
    content
)
# We need to replace the last closing div of the grid wrapper which closed Active Sessions
content = content.replace('        </div>\n      </div>\n    </div>\n  );\n}', '        </Card>\n      </div>\n    </div>\n  );\n}')

# 6. Small inner cards in Recent Activity Grid
content = re.sub(
    r'<div key=\{i\} className="bg-white dark:bg-\[\#111111\] p-5 rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 flex flex-col justify-between">',
    r'<Card key={i} className="p-5 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between shadow-sm">',
    content
)
# They close with </div> inside the map
content = re.sub(
    r'</span>\n              </div>\n            </div>\n',
    r'</span>\n              </div>\n            </Card>\n',
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
