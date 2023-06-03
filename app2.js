const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const images = JSON.parse(fs.readFileSync("technical/info"));

function sendUnauthorized(res) {
  res.status(401).send('401: Куда ты полез? Сюда тебе не надо!');
}

app.get('/images', (req, res) => {
  const imageData = req.query.data;

  if (!imageData) {
    return sendUnauthorized(res);
  }

  const [imageIndex, key] = imageData.split(":");

  const image = images[imageIndex];

  if (image && image.key === key) {
    const imagePath = path.join(__dirname, "images", image.name);
    res.sendFile(imagePath);
  } else {
    res.status(401).send('401: Неверный ключ доступа!');
  }
});

app.use((req, res, next) => {
  sendUnauthorized(res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
