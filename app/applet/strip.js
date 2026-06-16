const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  const fullPath = path.resolve(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');

  // Remove motion and AnimatePresence imports completely
  content = content.replace(/import\s+\{\s*(?:motion|AnimatePresence)[^}]*\}\s+from\s+'motion\/react';?\n?/g, '');
  
  // Also any other import from 'motion/react'
  content = content.replace(/import\s+.*?\s+from\s+'motion\/react';?\n?/g, '');

  // Remove fadeIn definition
  content = content.replace(/\s*const fadeIn = \{[\s\S]*?\};\n/g, '\n');

  // Replace <motion.xyz ...> with <xyz ...>
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');

  // Remove <AnimatePresence> and </AnimatePresence>
  content = content.replace(/<AnimatePresence[^>]*>\n?/g, '');
  content = content.replace(/<\/AnimatePresence>\n?/g, '');

  // Remove animation props
  content = content.replace(/\s+\{\.\.\.fadeIn\}\n?/g, ' ');
  content = content.replace(/\s+transition=\{\{.*?\}\}\n?/g, ' ');
  content = content.replace(/\s+initial=\{\{.*?\}\}\n?/g, ' ');
  content = content.replace(/\s+animate=\{\{.*?\}\}\n?/g, ' ');
  content = content.replace(/\s+exit=\{\{.*?\}\}\n?/g, ' ');
  content = content.replace(/\s+whileInView=\{\{.*?\}\}\n?/g, ' ');
  content = content.replace(/\s+viewport=\{\{.*?\}\}\n?/g, ' ');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Cleaned ${filePath}`);
}

cleanFile('src/App.tsx');
cleanFile('src/components/LegalOverlay.tsx');
cleanFile('src/components/DetailedPrivacyPolicy.tsx');

console.log('Done!');
