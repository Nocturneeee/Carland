const fs = require('fs');
const files = ['src/app/page.tsx', 'src/app/catalog/page.tsx', 'src/app/contact/page.tsx'];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/<button([^>]*?)>\s*Admin Login\s*<\/button>/g, '<Link href="/admin"$1>Admin Login</Link>');
  fs.writeFileSync(f, content);
});
