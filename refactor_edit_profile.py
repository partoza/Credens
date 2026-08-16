import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\EditProfile.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
if 'import { Button }' not in content:
    content = content.replace('import {', 'import { Button } from "@/components/ui/button"\nimport { Card } from "@/components/ui/card"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport {')

# 1. Update buttons
content = content.replace(
    'className={lex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm }',
    'className={lex items-center gap-2 }'
)
content = content.replace('<button\n          onClick={handleSave}', '<Button\n          onClick={handleSave}')
content = content.replace('          {isSaved ? (\n            <><Check className="w-4 h-4" /> Saved</>\n          ) : (\n            <><Save className="w-4 h-4" /> Save Changes</>\n          )}\n        </button>', '          {isSaved ? (\n            <><Check className="w-4 h-4" /> Saved</>\n          ) : (\n            <><Save className="w-4 h-4" /> Save Changes</>\n          )}\n        </Button>')

# Upload Photo button
content = content.replace(
    '<button className="flex items-center justify-center gap-2 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors mb-2 shadow-sm w-full sm:w-auto">\n                    <Camera className="w-4 h-4" />\n                    Upload New Photo\n                  </button>',
    '<Button variant="outline" className="w-full sm:w-auto mb-2"><Camera className="w-4 h-4 mr-2" /> Upload New Photo</Button>'
)
content = content.replace('<button className="text-[13px] font-bold text-gray-400 hover:text-red-500 transition-colors">Remove</button>', '<Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50">Remove</Button>')

# Add Link button
content = content.replace('<button\n                  className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-2 py-1 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"\n                >\n                  <Plus className="w-4 h-4" /> Add Link\n                </button>', '<Button variant="ghost" className="text-primary hover:text-primary"><Plus className="w-4 h-4 mr-2" /> Add Link</Button>')

# X button on links
content = content.replace('<button\n                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"\n                      >\n                        <X className="w-4 h-4" />\n                      </button>', '<Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 h-8 w-8"><X className="w-4 h-4" /></Button>')

# 2. Unify Icon Colors
content = re.sub(r'text-(blue|emerald|orange|purple|green|rose|amber)-500', 'text-primary', content)
# Neutral QR Code (was gradient before, let's just make it plain primary or neutral)
# Actually, the QR is simulated using grid. Let's just make sure it doesn't look out of place.

# 3. Update Inputs and Labels
# const inputClasses = "..." 
content = re.sub(r'const inputClasses = "[^"]+";\n  const labelClasses = "[^"]+";\n', '', content)

content = re.sub(r'<label className=\{labelClasses\}>(.*?)<\/label>', r'<Label className="mb-1.5 block">\1</Label>', content)
content = re.sub(r'<input\n(.*?)className=\{inputClasses\}\n(.*?)/>', r'<Input \1 \2/>', content, flags=re.DOTALL)

# 4. Main container card
content = re.sub(
    r'<div className="bg-white dark:bg-\[\#111111\] rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 overflow-hidden">',
    r'<Card className="transition-all duration-200 hover:-translate-y-1 overflow-hidden">',
    content
)
# We need to change the final closing </div> of that container to </Card>
# It's right before   return ( <div className="max-w-[1400px]...
# Wait, replacing the closing tag safely
lines = content.split('\n')
for i in range(len(lines)-1, -1, -1):
    if lines[i].strip() == '</div>' and '      </div>' in lines[i]:
        # This is risky, let's just use re.sub with care.
        pass

content = content.replace('      </div>\n    </div>\n  );\n}', '      </Card>\n    </div>\n  );\n}')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
