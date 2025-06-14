const pool = require('../config/db');

const Genero = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM genero ORDER BY id');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM genero WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async (data) => {
    const { nombre, estado, descripcion } = data;
    const result = await pool.query(
      `INSERT INTO genero (nombre, estado, descripcion, fecha_creacion, fecha_actualizacion)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *`,
      [nombre, estado, descripcion]
    );
    return result.rows[0];
  },

  update: async (id, data) => {
    const { nombre, estado, descripcion } = data;
    const result = await pool.query(
      `UPDATE genero
       SET nombre = $1, estado = $2, descripcion = $3, fecha_actualizacion = CURRENT_TIMESTAMP
       WHERE id = $4 RETURNING *`,
      [nombre, estado, descripcion, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM genero WHERE id = $1', [id]);
  },
};

module.exports = Genero;
