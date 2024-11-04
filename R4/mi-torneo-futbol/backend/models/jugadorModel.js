const db = require('../config/db');

const Jugador = {
    getAll: (callback) => {
        db.query('SELECT * FROM jugadores', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM jugadores WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO jugadores SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE jugadores SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM jugadores WHERE id = ?', [id], callback);
    }
};

module.exports = Jugador;
