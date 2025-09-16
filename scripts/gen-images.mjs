import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const sources = [
  'public/banners/fastdogimg.jpeg',
  'public/banners/mordedores.png',
  'public/banners/petiscodeagrado.png',
  'public/banners/petiscosmastigaveis.png',
];

const widths = [640, 1280, 1920];

async function ensureDirExists(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function generateVariantsForSource(relativePath) {
  const absoluteSrc = path.resolve(projectRoot, relativePath);
  const parsed = path.parse(absoluteSrc);
  await ensureDirExists(parsed.dir);

  for (const width of widths) {
    const basePipeline = sharp(absoluteSrc).resize({ width, withoutEnlargement: true });

    const variants = [
      {
        format: 'avif',
        options: { quality: 60 },
      },
      {
        format: 'webp',
        options: { quality: 70 },
      },
    ];

    for (const variant of variants) {
      const outputFile = path.join(parsed.dir, `${parsed.name}-${width}.${variant.format}`);
      await basePipeline.clone().toFormat(variant.format, variant.options).toFile(outputFile);
      console.log(`Generated ${outputFile}`);
    }
  }
}

async function main() {
  for (const source of sources) {
    try {
      await generateVariantsForSource(source);
    } catch (error) {
      console.error(`Failed processing ${source}:`, error);
      process.exitCode = 1;
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
