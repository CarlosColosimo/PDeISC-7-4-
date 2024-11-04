const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const equipoRoutes = require('./routes/equipoRoutes');
const jugadorRoutes = require('./routes/jugadorRoutes');
const partidoRoutes = require('./routes/partidoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/equipos', equipoRoutes);
app.use('/api/jugadores', jugadorRoutes);
app.use('/api/partidos', partidoRoutes);
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
