import os

filepath = r'C:\Users\r3x\Credence\src\components\demo\Dashboard.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 108: </div> instead of </Card> for the inner loop cards.
lines = content.split('\n')
lines[107] = '            </Card>' # Line 108 is index 107
# Fix 258: </Card> instead of </div> because the opening tag was missed.
lines[257] = '        </div>' # Line 258 is index 257

with open(filepath, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

# For EditProfile.tsx
filepath = r'C:\Users\r3x\Credence\src\components\demo\EditProfile.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
lines = content.split('\n')
lines[368] = '        </div>' # Line 369 is index 368
with open(filepath, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
