const pool = require('../config/db');

const Director = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM director ORDER BY id');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM director WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async ({ nombres, estado }) => {
    const result = await pool.query(
      `INSERT INTO director (nombres, estado, fecha_creacion, fecha_actualizacion)
       VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *`,
      [nombres, estado]
    );
    return result.rows[0];
  },

  update: async (id, { nombres, estado }) => {
    const result = await pool.query(
      `UPDATE director
       SET nombres = $1, estado = $2, fecha_actualizacion = CURRENT_TIMESTAMP
       WHERE id = $3 RETURNING *`,
      [nombres, estado, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM director WHERE id = $1', [id]);
  },
};

module.exports = Director;
