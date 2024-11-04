const db = require('../config/db');

exports.getEquipos = (req, res) => {
    db.query('SELECT * FROM equipos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getEquipoById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM equipos WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.createEquipo = (req, res) => {
    const newEquipo = req.body;
    db.query('INSERT INTO equipos SET ?', newEquipo, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...newEquipo });
    });
};

exports.updateEquipo = (req, res) => {
    const { id } = req.params;
    const updatedEquipo = req.body;
    db.query('UPDATE equipos SET ? WHERE id = ?', [updatedEquipo, id], (err, results) => {
        if (err) throw err;
        res.json({ id, ...updatedEquipo });
    });
};

exports.deleteEquipo = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM equipos WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ msg: 'Equipo eliminado' });
    });
};
