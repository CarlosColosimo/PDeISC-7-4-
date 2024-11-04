const db = require('../config/db');

const Equipo = {
    getAll: (callback) => {
        db.query('SELECT * FROM equipos', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM equipos WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO equipos SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE equipos SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM equipos WHERE id = ?', [id], callback);
    }
};

module.exports = Equipo;
