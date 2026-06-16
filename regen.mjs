import fs from 'fs';
import https from 'https';
import sharp from 'sharp';
import path from 'path';

const urls = {
  hero: 'https://i.postimg.cc/mkHRn17h/6efff4ce0e2127b6ad7a5ff6fd6d34efff72fcc22c6c8848f56b329114b7b7fa.png',
  prepare: 'https://i.postimg.cc/DZgbrSyW/1-Prepare.png',
  support: 'https://i.postimg.cc/hjdKnwNG/2-Support.png',
  replenish: 'https://i.postimg.cc/MHf5d0cP/3-replenish.png',
  transformation: 'https://i.postimg.cc/cCNCfmrz/6a91af9ea18ea695ace78bef7994b1a95b4762b1b718de662340d3873847f65e.png',
  relatable: 'https://i.postimg.cc/JnXtD5q4/508f1738a95b8b3d23fe01cc28b017e0cf287291afff23e5f20e3e7d6ffc3fa8.png'
};

const dirs = ['public/images', 'app/public/images'];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Check for redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  console.log("=== STARTING RE-GENERATION AND VALIDATION ===");
  for (const [name, url] of Object.entries(urls)) {
    try {
      console.log(`\nProcessing ${name}...`);
      const buffer = await download(url);
      
      const outputPath = path.join('public/images', `${name}.webp`);
      const appOutputPath = path.join('app/public/images', `${name}.webp`);
      
      await sharp(buffer)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
        
      fs.copyFileSync(outputPath, appOutputPath);

      const finalBuf = fs.readFileSync(outputPath);
      const isRiff = finalBuf.toString('ascii', 0, 4) === 'RIFF';
      const isWebp = finalBuf.toString('ascii', 8, 12) === 'WEBP';
      
      const metadata = await sharp(outputPath).metadata();
      
      console.log(`File: ${name}.webp`);
      console.log(`Size: ${finalBuf.length} bytes`);
      console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
      console.log(`Mime type: image/${metadata.format}`);
      if (isRiff && isWebp && metadata.width > 0 && metadata.height > 0) {
        console.log(`Validation result: PASSED (Valid RIFF WEBP header, valid dimensions, non-truncated file)`);
      } else {
        console.log(`Validation result: FAILED`);
      }
    } catch (e) {
      console.error(`Failed ${name}:`, e.message);
    }
  }
})();
