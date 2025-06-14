const pool = require('../config/db');

const Productora = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM productora ORDER BY id');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM productora WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async ({ nombre, estado, slogan, descripcion }) => {
    const result = await pool.query(
      `INSERT INTO productora (nombre, estado, slogan, descripcion, fecha_creacion, fecha_actualizacion)
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *`,
      [nombre, estado, slogan, descripcion]
    );
    return result.rows[0];
  },

  update: async (id, { nombre, estado, slogan, descripcion }) => {
    const result = await pool.query(
      `UPDATE productora
       SET nombre = $1, estado = $2, slogan = $3, descripcion = $4,
           fecha_actualizacion = CURRENT_TIMESTAMP
       WHERE id = $5 RETURNING *`,
      [nombre, estado, slogan, descripcion, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM productora WHERE id = $1', [id]);
  },
};

module.exports = Productora;
