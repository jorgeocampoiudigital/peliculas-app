const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verificarToken = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Token requerido' });

  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

exports.soloAdmin = (req, res, next) => {
  if (req.user.rol !== 'administrador') {
    return res.status(403).json({ error: 'Solo administradores pueden realizar esta acción' });
  }
  next();
};
