const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'index.html', route: 'src/app/page.tsx' },
  { name: 'catalog.html', route: 'src/app/catalog/page.tsx' },
  { name: 'admin.html', route: 'src/app/admin/page.tsx' },
  { name: 'contact.html', route: 'src/app/contact/page.tsx' }
];

function htmlToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/<input([^>]*?[^\/])>/g, '<input$1 />')
    .replace(/<img([^>]*?[^\/])>/g, '<img$1 />')
    .replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/autoplay/g, 'autoPlay')
    .replace(/<circle([^>]*?[^\/])>/g, '<circle$1 />')
    .replace(/<path([^>]*?[^\/])>/g, '<path$1 />')
    .replace(/style="([^"]+)"/g, (match, p1) => {
      // Very basic style converter, might break on complex styles
      const styles = p1.split(';').filter(Boolean).reduce((acc, curr) => {
        const parts = curr.split(':');
        const key = parts[0].trim();
        const value = parts.slice(1).join(':').trim();
        if (key && value) {
          const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
          acc.push(`${camelKey}: '${value.replace(/'/g, "\\'")}'`);
        }
        return acc;
      }, []);
      return `style={{ ${styles.join(', ')} }}`;
    });
}

function processFile({ name, route }) {
  const htmlContent = fs.readFileSync(path.join('_html', name), 'utf8');
  
  // Extract body
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return;
  
  let bodyContent = bodyMatch[1];
  
  // Extract inline scripts to remove them
  bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Convert HTML to JSX
  let jsxContent = htmlToJsx(bodyContent);
  
  const componentName = name === 'index.html' ? 'Home' : name.replace('.html', '').charAt(0).toUpperCase() + name.replace('.html', '').slice(1);
  
  const tsxCode = `
export default function ${componentName}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
  `.trim();
  
  const dir = path.dirname(route);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(route, tsxCode);
  console.log(`Generated ${route}`);
}

pages.forEach(processFile);
