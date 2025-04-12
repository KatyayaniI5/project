const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    filename: 'course1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    filename: 'course2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    filename: 'course3.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(path.join(__dirname, '../public/images', filename));
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  try {
    if (!fs.existsSync(path.join(__dirname, '../public/images'))) {
      fs.mkdirSync(path.join(__dirname, '../public/images'), { recursive: true });
    }
    
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages(); 