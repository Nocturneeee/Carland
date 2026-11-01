const fs = require('fs');
const files = [
  'src/app/page.tsx',
  'src/app/catalog/page.tsx',
  'src/app/admin/page.tsx',
  'src/app/contact/page.tsx'
];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/ \/><\/path>/g, '></path>');
  content = content.replace(/ \/><\/circle>/g, '></circle>');
  content = content.replace(/style=\{\{ fontVariationSettings: ''FILL' 1' \}\}/g, 'style={{ fontVariationSettings: "\'FILL\' 1" }}');
  content = content.replace(/style=\{\{ fontVariationSettings: ''FILL' 0' \}\}/g, 'style={{ fontVariationSettings: "\'FILL\' 0" }}');
  content = content.replace(/viewbox=/g, 'viewBox=');
  fs.writeFileSync(f, content);
});
