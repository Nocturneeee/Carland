const fs = require('fs');
const files = [
  'src/app/page.tsx',
  'src/app/catalog/page.tsx',
  'src/app/admin/page.tsx',
  'src/app/contact/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  if (!content.includes('import Link')) {
    if (content.startsWith('"use client";')) {
      content = content.replace('"use client";', '"use client";\nimport Link from "next/link";');
    } else {
      content = 'import Link from "next/link";\n' + content;
    }
  }

  // Fix main navigation links
  content = content.replace(/<a([^>]*?)href="#"([^>]*?)>Home<\/a>/g, '<Link$1href="/"$2>Home</Link>');
  content = content.replace(/<a([^>]*?)href="#"([^>]*?)>Catalog<\/a>/g, '<Link$1href="/catalog"$2>Catalog</Link>');
  content = content.replace(/<a([^>]*?)href="#"([^>]*?)>Contact<\/a>/g, '<Link$1href="/contact"$2>Contact</Link>');
  content = content.replace(/<a([^>]*?)href="#"([^>]*?)>UsedCar\.id<\/a>/g, '<Link$1href="/"$2>GarasiBoost</Link>');
  
  // Replace buttons acting as links on the homepage
  content = content.replace(/<button([^>]*?)>([\s\S]*?)Explore Catalog([\s\S]*?)<\/button>/g, '<Link href="/catalog"$1>$2Explore Catalog$3</Link>');

  fs.writeFileSync(f, content);
});
