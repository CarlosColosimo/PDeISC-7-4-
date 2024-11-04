const db = require('../config/db');

exports.getJugadores = (req, res) => {
    db.query('SELECT * FROM jugadores', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getJugadorById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM jugadores WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.createJugador = (req, res) => {
    const newJugador = req.body;
    db.query('INSERT INTO jugadores SET ?', newJugador, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...newJugador });
    });
};

exports.updateJugador = (req, res) => {
    const { id } = req.params;
    const updatedJugador = req.body;
    db.query('UPDATE jugadores SET ? WHERE id = ?', [updatedJugador, id], (err, results) => {
        if (err) throw err;
        res.json({ id, ...updatedJugador });
    });
};

exports.deleteJugador = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM jugadores WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ msg: 'Jugador eliminado' });
    });
};
