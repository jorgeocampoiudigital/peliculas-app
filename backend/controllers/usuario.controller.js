const Usuario = require('../models/usuario.model');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registrar = async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  if (!['administrador', 'docente'].includes(rol)) {
    return res.status(400).json({ error: 'Rol inválido' });
  }

  try {
    const user = await Usuario.create({ nombre, email, password, rol });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Error al registrar usuario', detalle: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Usuario.findByEmail(email);

  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

  const valido = await bcrypt.compare(password, user.password);
  if (!valido) return res.status(401).json({ error: 'Contraseña incorrecta' });

  const token = jwt.sign(
    { id: user.id, rol: user.rol, email: user.email },
    process.env.SECRET_KEY,
    { expiresIn: '8h' }
  );

  res.json({ token, usuario: { id: user.id, nombre: user.nombre, rol: user.rol } });
};

exports.listar = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.actualizarRol = async (req, res) => {
  const { id } = req.params;
  const { rol } = req.body;

  if (!['administrador', 'docente'].includes(rol)) {
    return res.status(400).json({ error: 'Rol inválido' });
  }

  try {
    const actualizado = await Usuario.updateRol(id, rol);
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo actualizar el rol', detalle: err.message });
  }
};


