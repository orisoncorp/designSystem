const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'index.html');
let content = fs.readFileSync(htmlPath, 'utf-8');

// 1. Extract CSS
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
    fs.mkdirSync(path.join(process.cwd(), 'src/styles'), { recursive: true });
    fs.writeFileSync(path.join(process.cwd(), 'src/styles/main.css'), styleMatch[1].trim());
    console.log('Extracted CSS');
}

// 2. Extract Body chunks
const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Find sections separated by <!-- ═* SECTION_NAME ═* -->
const sectionPattern = /<!--\s*═+([^═\n]+)═+\s*-->([\s\S]*?)(?=<!--\s*═+|$)/g;
let sections = [];
let match;
while ((match = sectionPattern.exec(bodyContent)) !== null) {
    sections.push({
        title: match[1].trim(),
        html: match[2].trim()
    });
}
console.log(`Found ${sections.length} sections`);

// Write sections
fs.mkdirSync(path.join(process.cwd(), 'src/sections'), { recursive: true });

let imports = '';
let appends = '';

sections.forEach((sec, idx) => {
    let safeName = sec.title.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase();
    let filename = `${String(idx).padStart(2, '0')}-${safeName}.html`;
    
    fs.writeFileSync(path.join(process.cwd(), 'src/sections', filename), sec.html);
    
    let varName = `section${idx}`;
    imports += `import ${varName} from './sections/${filename}?raw';\n`;
    appends += `app.innerHTML += ${varName};\n`;
});

// 3. Create main.js
let mainJs = `import './styles/main.css';\n\n${imports}\n\nconst app = document.getElementById('app');\n${appends}`;

fs.writeFileSync(path.join(process.cwd(), 'src/main.js'), mainJs.trim());
console.log('Created main.js and sections');

// 4. Overwrite index.html
let newHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orison — Brand Book 2.0</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@200;300;400;500&display=swap" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>`;

fs.writeFileSync(htmlPath, newHtml);
console.log('Overwrote index.html');
