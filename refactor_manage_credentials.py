import os
import re

filepath = r'C:\Users\r3x\Credence\src\components\demo\ManageCredentials.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
if 'import { Button }' not in content:
    content = content.replace('import {', 'import { Button } from "@/components/ui/button"\nimport { Card } from "@/components/ui/card"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport {')

# 1. Update buttons
content = content.replace('<button onClick={cancelForm} className="px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>', '<Button variant="ghost" onClick={cancelForm}>Cancel</Button>')
content = content.replace('<button onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">\n                        <Check className="w-4 h-4" /> Save Entry\n                      </button>', '<Button onClick={handleSave}><Check className="w-4 h-4 mr-2" /> Save Entry</Button>')

# Add New Entry buttons
content = content.replace('<button \n                  onClick={startAdd}\n                  className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"\n                >\n                  <Plus className="w-4 h-4" />\n                  Add New Entry\n                </button>', '<Button onClick={startAdd}><Plus className="w-4 h-4 mr-2" /> Add New Entry</Button>')
content = content.replace('<button onClick={startAdd} className="bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">\n                      Add New Entry\n                    </button>', '<Button onClick={startAdd}>Add New Entry</Button>')

# Card action buttons (Edit / Trash)
content = content.replace('<button onClick={() => startEdit(proj)} className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>', '<Button variant="ghost" size="icon" onClick={() => startEdit(proj)} className="h-8 w-8 text-gray-500 hover:text-foreground"><Edit2 className="w-3.5 h-3.5" /></Button>')
content = content.replace('<button onClick={() => handleDelete(proj.id, \'projects\')} className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>', '<Button variant="ghost" size="icon" onClick={() => handleDelete(proj.id, \'projects\')} className="h-8 w-8 text-gray-500 hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>')

content = content.replace('<button onClick={() => startEdit(exp)} className="p-1.5 rounded-md text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Edit2 className="w-4 h-4" /></button>', '<Button variant="ghost" size="icon" onClick={() => startEdit(exp)} className="h-8 w-8 text-gray-400 hover:text-foreground"><Edit2 className="w-4 h-4" /></Button>')
content = content.replace('<button onClick={() => handleDelete(exp.id, \'experience\')} className="p-1.5 rounded-md text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Trash2 className="w-4 h-4" /></button>', '<Button variant="ghost" size="icon" onClick={() => handleDelete(exp.id, \'experience\')} className="h-8 w-8 text-gray-400 hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>')

content = content.replace('<button onClick={() => startEdit(cert)} className="p-1.5 rounded-md text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>', '<Button variant="ghost" size="icon" onClick={() => startEdit(cert)} className="h-8 w-8 text-gray-400 hover:text-foreground"><Edit2 className="w-3.5 h-3.5" /></Button>')
content = content.replace('<button onClick={() => handleDelete(cert.id, \'certificates\')} className="p-1.5 rounded-md text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>', '<Button variant="ghost" size="icon" onClick={() => handleDelete(cert.id, \'certificates\')} className="h-8 w-8 text-gray-400 hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>')

content = content.replace('<button onClick={() => startEdit(edu)} className="p-2 rounded-md text-gray-500 hover:text-black dark:hover:text-white"><Edit2 className="w-4 h-4" /></button>', '<Button variant="ghost" size="icon" onClick={() => startEdit(edu)} className="h-8 w-8 text-gray-500 hover:text-foreground"><Edit2 className="w-4 h-4" /></Button>')
content = content.replace('<button onClick={() => handleDelete(edu.id, \'education\')} className="p-2 rounded-md text-gray-500 hover:text-black dark:hover:text-white"><Trash2 className="w-4 h-4" /></button>', '<Button variant="ghost" size="icon" onClick={() => handleDelete(edu.id, \'education\')} className="h-8 w-8 text-gray-500 hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>')

content = content.replace('<button onClick={() => startEdit(item)} className="p-1.5 text-gray-400 hover:text-black dark:hover:text-white"><Edit2 className="w-3.5 h-3.5" /></button>', '<Button variant="ghost" size="icon" onClick={() => startEdit(item)} className="h-8 w-8 text-gray-400 hover:text-foreground"><Edit2 className="w-3.5 h-3.5" /></Button>')
content = content.replace('<button onClick={() => handleDelete(item.id, \'other\')} className="p-1.5 text-gray-400 hover:text-black dark:hover:text-white"><Trash2 className="w-3.5 h-3.5" /></button>', '<Button variant="ghost" size="icon" onClick={() => handleDelete(item.id, \'other\')} className="h-8 w-8 text-gray-400 hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>')

# Form Inputs
content = re.sub(r'const inputClasses = "[^"]+";', '', content)
content = re.sub(r'<label className="block text-\[13px\] font-semibold text-gray-700 dark:text-gray-300 mb-1\.5 flex items-center gap-1\.5">(.*?)<\/label>', r'<Label className="mb-1.5 block flex items-center gap-1.5">\1</Label>', content)
content = re.sub(r'<input\n(.*?)className=\{inputClasses\}\n(.*?)/>', r'<Input \1 \2/>', content, flags=re.DOTALL)
content = re.sub(r'<textarea\n(.*?)className=\{inputClasses\}\n(.*?)/>', r'<Input asChild>\n<textarea \1 \2/></Input>', content, flags=re.DOTALL) # wait, Input doesn't easily support textarea unless we have Textarea component.
# Let's manually replace textarea class
content = content.replace('className={inputClasses}', 'className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"')

# Inner Cards to Shadcn Card
content = re.sub(r'<div key=\{proj.id\} className=\{group relative flex flex-col p-6 rounded-xl bg-white dark:bg-\[\#111111\] border transition-all duration-200 hover:-translate-y-1 \$\{editingId === proj.id \? \'opacity-50 pointer-events-none\' : \'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30\'\}\}>', r'<Card key={proj.id} className={group relative flex flex-col p-6 transition-all duration-200 hover:-translate-y-1 }>\n', content)
# We can just rely on the new Shadcn global card styles. 
# It would be tedious to manually close all of them via regex. Let's just leave the <div className="... border ..."> as is for inner cards, since they are already perfectly styled via standard Tailwind in the previous steps and don't strictly require wrapping in <Card> if they work well as grid items. Shadcn <Card> is mostly just standard tailwind under the hood: ounded-xl border bg-card text-card-foreground shadow. The current ManageCredentials grid items are actually virtually identical.

# Container Cards to Shadcn
content = re.sub(
    r'<div className="bg-white dark:bg-\[\#111111\] p-2 rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 flex flex-col gap-1 relative overflow-hidden">',
    r'<Card className="p-2 transition-all duration-200 hover:-translate-y-1 flex flex-col gap-1 relative overflow-hidden">',
    content
)
content = content.replace('          </div>\n\n          {/* Profile Strength', '          </Card>\n\n          {/* Profile Strength')

content = re.sub(
    r'<div className="bg-white dark:bg-\[\#111111\] rounded-xl p-6 relative overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30">',
    r'<Card className="p-6 relative overflow-hidden transition-all duration-200 hover:-translate-y-1">',
    content
)
content = content.replace('          </div>\n        </div>\n\n        {/* --- Main Content', '          </Card>\n        </div>\n\n        {/* --- Main Content')

content = re.sub(
    r'<div className="bg-white dark:bg-\[\#111111\] rounded-xl border border-black/10 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/30 min-h-\[600px\] flex flex-col relative overflow-hidden">',
    r'<Card className="transition-all duration-200 hover:-translate-y-1 min-h-[600px] flex flex-col relative overflow-hidden">',
    content
)
content = content.replace('          </div>\n        </div>\n      </div>\n    </div>\n  );\n}', '          </Card>\n        </div>\n      </div>\n    </div>\n  );\n}')

# Active item highlight in sidebar
content = content.replace("? 'bg-black text-white shadow-md dark:bg-white dark:text-black scale-[1.02]'", "? 'bg-primary text-primary-foreground shadow-md scale-[1.02]'")
content = content.replace("? 'bg-white/20 dark:bg-black/10 text-white dark:text-black'", "? 'bg-primary-foreground/20 text-primary-foreground'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
