const express = require('express')
const laptops = require('./categories/1-laptops/laptops.json');

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

const cors = require('cors');
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "*",
                    credentials: true
                }
            ]
        }
    }
}

app.use(cors(
    config.application.cors.server
));

// Leemos archivos

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido al sevidor</h1>")
});

app.get("/categories/laptops", (req, res) => {
    res.json(laptops)
})

// Escuchamos el puerto

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});