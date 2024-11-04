const db = require('../config/db');

const Estadisticas = {
    getAll: (callback) => {
        db.query('SELECT * FROM estadisticas', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM estadisticas WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO estadisticas SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE estadisticas SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM estadisticas WHERE id = ?', [id], callback);
    }
};

module.exports = Estadisticas;
