const db = require('../config/db');

exports.getUsuarios = (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getUsuarioById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.createUsuario = (req, res) => {
    const newUsuario = req.body;
    db.query('INSERT INTO usuarios SET ?', newUsuario, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...newUsuario });
    });
};

exports.updateUsuario = (req, res) => {
    const { id } = req.params;
    const updatedUsuario = req.body;
    db.query('UPDATE usuarios SET ? WHERE id = ?', [updatedUsuario, id], (err, results) => {
        if (err) throw err;
        res.json({ id, ...updatedUsuario });
    });
};

exports.deleteUsuario = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ msg: 'Usuario eliminado' });
    });
};
