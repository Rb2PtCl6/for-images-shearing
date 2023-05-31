const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const images = JSON.parse(fs.readFileSync("technical/info"))

function say(res){
    res.status(401).send('401: Куда ты полез? Сюда тебе не надо!');
}

app.get('/images', (req, res) =>{
    const imageData = req.query.data;
    if (imageData==undefined) return say(res)
    var parsed_imageData=imageData.split(":")
    if (images[parsed_imageData[0]]!=undefined){
        if (images[parsed_imageData[0]].key==parsed_imageData[1]){
            res.sendFile(path.join(__dirname,"images",images[parsed_imageData[0]].name))
        }else{
            res.status(401).send('401: Неверный ключ доступа!');
        }
    }else{
        res.status(404).send('404: Изображение не найдено!')
    }
})

app.get("/", (req, res) =>{
    say(res)
})

app.get("/images/:imageName", (req, res) =>{
    say(res)
})
app.get("/technical", (req, res) =>{
    say(res)
})
app.get("/technical/info", (req, res) =>{
    say(res)
})

/*app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });*/

// http://localhost:3000/images?data=0:111
