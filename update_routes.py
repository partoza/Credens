import os
import re

filepath = r'C:\Users\r3x\Credence\src\App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Update standalone paths condition
content = content.replace(
    "const isStandalonePage = ['/getstarted', '/signin', '/forgot-password', '/demo'].includes(location.pathname);",
    "const isStandalonePage = location.pathname.startsWith('/auth') || location.pathname === '/demo';"
)

# Update Route paths
content = content.replace('<Route path="/getstarted" element=', '<Route path="/auth/getstarted" element=')
content = content.replace('<Route path="/signin" element=', '<Route path="/auth/signin" element=')
content = content.replace('<Route path="/forgot-password" element=', '<Route path="/auth/forgotpassword" element=')

# Update Navigation Links
content = content.replace('to="/getstarted"', 'to="/auth/getstarted"')
content = content.replace('to="/signin"', 'to="/auth/signin"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

# Update SignIn.tsx
signin_path = r'C:\Users\r3x\Credence\src\pages\SignIn.tsx'
with open(signin_path, 'r', encoding='utf-8') as f:
    signin_content = f.read()

signin_content = signin_content.replace('to="/forgot-password"', 'to="/auth/forgotpassword"')
signin_content = signin_content.replace('to="/getstarted"', 'to="/auth/getstarted"')

with open(signin_path, 'w', encoding='utf-8') as f:
    f.write(signin_content)

# Update ForgotPassword.tsx
forgot_path = r'C:\Users\r3x\Credence\src\pages\ForgotPassword.tsx'
with open(forgot_path, 'r', encoding='utf-8') as f:
    forgot_content = f.read()

forgot_content = forgot_content.replace('to="/signin"', 'to="/auth/signin"')

with open(forgot_path, 'w', encoding='utf-8') as f:
    f.write(forgot_content)
