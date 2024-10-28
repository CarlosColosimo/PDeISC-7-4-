const express = require('express'); // Importa el framework Express para crear el servidor
const mysql = require('mysql'); // Importa el módulo MySQL para conectar y gestionar la base de datos
const bodyParser = require('body-parser'); // Importa el body-parser para manejar datos JSON en las solicitudes
const cors = require('cors'); // Importa CORS para permitir solicitudes desde distintos orígenes
const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto en el que se ejecutará el servidor

// CONFIGURA LA BASE DE DATOS
const connection = mysql.createConnection({
    host: 'localhost', // Dirección del servidor de base de datos
    user: 'root', // Nombre de usuario para la base de datos
    password: '', // Contraseña del usuario
    database: 'score' // Nombre de la base de datos
});

// Establece la conexión con la base de datos y maneja errores si no se puede conectar
connection.connect(error => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// MIDDLEWARE
app.use(bodyParser.json()); // Usa body-parser para convertir las solicitudes en JSON
app.use(cors()); // Habilita CORS para permitir solicitudes desde otros orígenes

// ENDPOINT PARA GUARDAR EL PUNTAJE
app.post('/guardar-puntaje', (req, res) => {
    const { nombre, puntos, fecha } = req.body; // Extrae los datos del cuerpo de la solicitud

    // Verifica que los datos requeridos estén presentes en la solicitud
    if (!nombre || !puntos || !fecha) {
        return res.status(400).json({ error: 'Faltan datos' }); // Envía error 400 si faltan datos
    }

    // Define la consulta para insertar el puntaje en la base de datos
    const query = 'INSERT INTO score (nombre, puntos, fecha) VALUES (?, ?, ?)';
    
    // Ejecuta la consulta y maneja errores si ocurren
    connection.query(query, [nombre, puntos, fecha], (error, results) => {
        if (error) {
            console.error('Error al guardar el puntaje:', error);
            return res.status(500).json({ error: 'Error al guardar el puntaje' }); // Envía error 500 si ocurre un problema en el servidor
        }
        res.status(200).json({ message: 'Puntaje guardado exitosamente' }); // Envía respuesta exitosa
    });
});

// INICIAR EL SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); // Inicia el servidor en el puerto especificado
});
