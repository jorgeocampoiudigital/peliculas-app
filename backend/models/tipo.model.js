const pool = require('../config/db');

const Tipo = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM tipo ORDER BY id');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM tipo WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async ({ nombre, descripcion }) => {
    const result = await pool.query(
      `INSERT INTO tipo (nombre, descripcion, fecha_creacion, fecha_actualizacion)
       VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *`,
      [nombre, descripcion]
    );
    return result.rows[0];
  },

  update: async (id, { nombre, descripcion }) => {
    const result = await pool.query(
      `UPDATE tipo
       SET nombre = $1, descripcion = $2, fecha_actualizacion = CURRENT_TIMESTAMP
       WHERE id = $3 RETURNING *`,
      [nombre, descripcion, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM tipo WHERE id = $1', [id]);
  },
};

module.exports = Tipo;
