const db = require('../config/db');

const Partido = {
    getAll: (callback) => {
        db.query('SELECT * FROM partidos', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM partidos WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO partidos SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE partidos SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM partidos WHERE id = ?', [id], callback);
    }
};

module.exports = Partido;
