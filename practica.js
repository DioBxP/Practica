const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Servidor Estilo Minecraft</title>
      <style>
	body {
          background-color: #1e1e1e;
          color: #ffffff;
          font-family: 'Courier New', Courier, monospace;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-image: url('https://wallpapercave.com/wp/wp2757874.png');
          background-size: cover;
          margin: 0;
        }
	.mc-container {
          background-color: rgba(0, 0, 0, 0.85);
          border: 4px solid #ff0000;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 0 20px #ff0000;
          text-align: center;
          width: 90%;
          max-width: 500px;
        }
                .mc-container img {
          width: 100px;
          margin-bottom: 10px;
        }
	.title {
          font-size: 24px;
          color: #ff0000;
          text-shadow: 1px 1px 2px #000;
          margin-bottom: 15px;
        }
        .text {
          font-size: 16px;
          margin-bottom: 15px;
        }
	.heart {
          color: red;
          font-family: monospace;
          white-space: pre;
        }
      </style>
    </head>
    <body>
      <div class="mc-container">
        <img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/>
        <div class="title">Servidor - Grupo 2</div>
        <div class="text">
          <strong>Integrantes:</strong><br />
          Diocles Bacusoy<br />
          Adonis Mero<br />
          Hola tuvimos algunas complicasiones y error de SyntaxError<br /><br />
        </div>
        <div class="heart">
          <pre>
   ***     ***   
  *****   *****  
  *************  
   ***********   
    *********    
     *******     
      *****      
       ***       
        *        
          </pre>
        </div>
      </div>
    </body>
    </html>
  `);
  res.end();
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


        
