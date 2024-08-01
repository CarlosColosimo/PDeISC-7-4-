const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// CONFIGURA LA BASE DE DATOS
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'score'
});

connection.connect(error => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors()); // HABILITAR CORS

// ENDPOINT PARA GUARDAR EL PUNTAJE
app.post('/guardar-puntaje', (req, res) => {
    const { nombre, puntos, fecha } = req.body;

    if (!nombre || !puntos || !fecha) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    const query = 'INSERT INTO score (nombre, puntos, fecha) VALUES (?, ?, ?)';
    connection.query(query, [nombre, puntos, fecha], (error, results) => {
        if (error) {
            console.error('Error al guardar el puntaje:', error);
            return res.status(500).json({ error: 'Error al guardar el puntaje' });
        }
        res.status(200).json({ message: 'Puntaje guardado exitosamente' });
    });
});

// INICIAR EL SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

