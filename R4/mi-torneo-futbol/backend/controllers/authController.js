const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = (req, res) => {
    const { nombre, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        db.query('INSERT INTO usuarios SET ?', { nombre, email, password: hash, rol: 'usuario' }, (error, results) => {
            if (error) throw error;
            res.send({ msg: 'User registered' });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, results) => {
        if (error) throw error;
        if (results.length === 0) {
            return res.status(401).send({ msg: 'Email or password incorrect' });
        }
        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) {
                return res.status(401).send({ msg: 'Email or password incorrect' });
            }
            const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.send({ token });
        });
    });
};
