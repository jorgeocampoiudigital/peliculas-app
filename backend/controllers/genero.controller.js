const Genero = require('../models/genero.model');

exports.getAll = async (req, res) => {
  const data = await Genero.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Genero.getById(req.params.id);
  data ? res.json(data) : res.status(404).json({ error: 'No encontrado' });
};

exports.create = async (req, res) => {
  const data = await Genero.create(req.body);
  res.status(201).json(data);
};

exports.update = async (req, res) => {
  const data = await Genero.update(req.params.id, req.body);
  res.json(data);
};

exports.delete = async (req, res) => {
  await Genero.delete(req.params.id);
  res.status(204).end();
};
