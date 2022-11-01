//adminproducts
//npm init -y
//npm install express mongoose cors

//client
//npx create-react-app client
//npm install axios react-router-dom@5.3.0
 
const express = require("express");
const cors = require("cors");
const app = express();

//Para poder usar Json y obtener datos de la url
app.use( express.json(), express.urlencoded({extended: true}) );

//Permite accesar de un origen distinto
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

// Inicializar DB
require("./server/config/mongoose.config")

// Importar las rutas
const misRutas = require("./server/routes/producto.routes");
misRutas(app);



app.listen(8000, ()=>console.log("Servidor listo!"));
