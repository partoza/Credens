import os

filepath = r'C:\Users\r3x\.gemini\antigravity\brain\6dd46332-a79a-46e0-98d4-6215e74545e7\task.md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('- [/] **Setup & Configuration**', '- [x] **Setup & Configuration**')
content = content.replace('- [ ] Initialize Shadcn UI (
px shadcn@latest init)', '- [x] Initialize Shadcn UI (
px shadcn@latest init)')
content = content.replace('- [ ] Configure 	ailwind.config.js and index.css for Shadcn theme', '- [x] Configure 	ailwind.config.js and index.css for Shadcn theme')
content = content.replace('- [ ] **Component Installation**', '- [x] **Component Installation**')
content = content.replace('- [ ] Install core components (utton, card, input, label, dialog, adge)', '- [x] Install core components (utton, card, input, label, dialog, adge)')
content = content.replace('- [ ] **UI Refactoring**', '- [/] **UI Refactoring**')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
