import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/input'; // Carpeta de entrada
const outputDir = 'public/blog'; // Carpeta de salida

const sizes = [
	{ name: 'thumbnail', width: 200 },
	{ name: 'medium', width: 800 },
	{ name: 'large', width: 1200 },
];

// Crea el directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
	if (err) throw err;

	files.forEach((file) => {
		const ext = path.extname(file).toLowerCase();
		if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
			const inputPath = path.join(inputDir, file);
			const baseName = path.basename(file, ext);

			// Copiar la imagen original al directorio de salida
			const originalOutputPath = path.join(outputDir, `${baseName}${ext}`);
			fs.copyFileSync(inputPath, originalOutputPath);
			console.log(`Copied original ${file} to ${originalOutputPath}.`);

			// Convertir y redimensionar imágenes
			sizes.forEach((size) => {
				const outputPath = path.join(
					outputDir,
					`${baseName}-${size.name}.webp`
				);

				sharp(inputPath)
					.resize(size.width)
					.toFormat('webp')
					.toFile(outputPath, (err) => {
						if (err) throw err;
						console.log(`Generated ${size.name} version for ${file}.`);
					});
			});
		}
	});
});
