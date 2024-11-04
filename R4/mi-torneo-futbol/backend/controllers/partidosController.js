const db = require('../config/db');

exports.getPartidos = (req, res) => {
    db.query('SELECT * FROM partidos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getPartidoById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM partidos WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.createPartido = (req, res) => {
    const newPartido = req.body;
    db.query('INSERT INTO partidos SET ?', newPartido, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...newPartido });
    });
};

exports.updatePartido = (req, res) => {
    const { id } = req.params;
    const updatedPartido = req.body;
    db.query('UPDATE partidos SET ? WHERE id = ?', [updatedPartido, id], (err, results) => {
        if (err) throw err;
        res.json({ id, ...updatedPartido });
    });
};

exports.deletePartido = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM partidos WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ msg: 'Partido eliminado' });
    });
};
