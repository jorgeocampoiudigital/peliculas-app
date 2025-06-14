const pool = require('../config/db');
const bcrypt = require('bcrypt');

const Usuario = {
  create: async ({ nombre, email, password, rol }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO usuario (nombre, email, password, rol)
       VALUES ($1, $2, $3, $4) RETURNING id, nombre, email, rol`,
      [nombre, email, hashedPassword, rol]
    );
    return result.rows[0];
  },

  findByEmail: async (email) => {
    const result = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query('SELECT id, nombre, email, rol FROM usuario ORDER BY id');
    return result.rows;
  },

  updateRol: async (id, rol) => {
    const result = await pool.query(
      'UPDATE usuario SET rol = $1 WHERE id = $2 RETURNING id, nombre, email, rol',
      [rol, id]
    );
    return result.rows[0];
  }
};

module.exports = Usuario;
