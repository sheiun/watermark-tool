const Jimp = require('jimp');
const fs = require('fs');

const srcFolder = './src/', dstFolder = './dst/';

fs.readdir(srcFolder, (err, files) => {
    files.forEach(file => {
        Jimp.read(srcFolder + file)
            .then(image => {
                const W = image.bitmap.width, H = image.bitmap.height;
                Jimp.read('watermark.png').then(img => {
                    const w = img.bitmap.width, h = img.bitmap.height;
                    image.composite(img, (W - w) / 2, (H - h) / 2).write(dstFolder + file);
                })
            })
    });
});