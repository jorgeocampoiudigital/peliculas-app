const pool = require('../config/db');

const Media = {
  getAll: async () => {
    const result = await pool.query(`
      SELECT m.*, 
             g.nombre AS genero_nombre, 
             d.nombres AS director_nombre,
             p.nombre AS productora_nombre,
             t.nombre AS tipo_nombre
      FROM media m
      JOIN genero g ON m.genero_id = g.id
      JOIN director d ON m.director_id = d.id
      JOIN productora p ON m.productora_id = p.id
      JOIN tipo t ON m.tipo_id = t.id
      ORDER BY m.id
    `);
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM media WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async (data) => {
    const {
      serial, titulo, sinopsis, url, imagen, anio_estreno,
      genero_id, director_id, productora_id, tipo_id
    } = data;
    const result = await pool.query(`
      INSERT INTO media (
        serial, titulo, sinopsis, url, imagen, anio_estreno,
        fecha_creacion, fecha_actualizacion,
        genero_id, director_id, productora_id, tipo_id
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,
        $7, $8, $9, $10
      ) RETURNING *
    `, [serial, titulo, sinopsis, url, imagen, anio_estreno,
        genero_id, director_id, productora_id, tipo_id]);
    return result.rows[0];
  },

  update: async (id, data) => {
    const {
      serial, titulo, sinopsis, url, imagen, anio_estreno,
      genero_id, director_id, productora_id, tipo_id
    } = data;
    const result = await pool.query(`
      UPDATE media SET
        serial = $1,
        titulo = $2,
        sinopsis = $3,
        url = $4,
        imagen = $5,
        anio_estreno = $6,
        fecha_actualizacion = CURRENT_TIMESTAMP,
        genero_id = $7,
        director_id = $8,
        productora_id = $9,
        tipo_id = $10
      WHERE id = $11
      RETURNING *
    `, [serial, titulo, sinopsis, url, imagen, anio_estreno,
        genero_id, director_id, productora_id, tipo_id, id]);
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM media WHERE id = $1', [id]);
  }
};

module.exports = Media;
