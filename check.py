import re

# Check CSS for hardcoded colors
with open('C:/Users/leyva/MIMO-projects/Bioseguridad/css/style.css', encoding='utf-8') as f:
    css = f.read()

# Find all background and color declarations with hardcoded hex
issues = []
for i, line in enumerate(css.split('\n'), 1):
    if re.search(r'(background|color)\s*:\s*#[0-9a-fA-F]{3,6}', line) and 'var(' not in line:
        issues.append(f'CSS line {i}: {line.strip()[:80]}')

print(f'CSS hardcoded colors: {len(issues)}')
for issue in issues[:15]:
    print(f'  {issue}')

# Check JS
with open('C:/Users/leyva/MIMO-projects/Bioseguridad/js/main.js', encoding='utf-8') as f:
    js = f.read()
print(f'\ntoggleTheme in global scope: {"function toggleTheme" in js}')
print(f'initTheme in global scope: {"function initTheme" in js}')

# Check HTML for onclick
with open('C:/Users/leyva/MIMO-projects/Bioseguridad/index.html', encoding='utf-8') as f:
    html = f.read()
print(f'onclick in index.html: {"toggleTheme()" in html}')
print(f'themeToggle button: {"themeToggle" in html}')
