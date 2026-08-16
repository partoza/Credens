import os

filepath = r'C:\Users\r3x\.gemini\antigravity\brain\6dd46332-a79a-46e0-98d4-6215e74545e7\task.md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('- [/] **UI Refactoring**', '- [x] **UI Refactoring**')
content = content.replace('- [ ] Refactor Dashboard.tsx to use Shadcn components and uniform icons', '- [x] Refactor Dashboard.tsx to use Shadcn components and uniform icons')
content = content.replace('- [ ] Refactor ManageCredentials.tsx to use Shadcn components and uniform icons', '- [x] Refactor ManageCredentials.tsx to use Shadcn components and uniform icons')
content = content.replace('- [ ] Refactor EditProfile.tsx (Inputs, Buttons, neutral QR code)', '- [x] Refactor EditProfile.tsx (Inputs, Buttons, neutral QR code)')
content = content.replace('- [ ] Refactor Sidebar.tsx and Demo.tsx layout colors', '- [x] Refactor Sidebar.tsx and Demo.tsx layout colors')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
