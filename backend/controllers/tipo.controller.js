const Tipo = require('../models/tipo.model');

exports.getAll = async (req, res) => {
  const data = await Tipo.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Tipo.getById(req.params.id);
  data ? res.json(data) : res.status(404).json({ error: 'No encontrado' });
};

exports.create = async (req, res) => {
  const data = await Tipo.create(req.body);
  res.status(201).json(data);
};

exports.update = async (req, res) => {
  const data = await Tipo.update(req.params.id, req.body);
  res.json(data);
};

exports.delete = async (req, res) => {
  await Tipo.delete(req.params.id);
  res.status(204).end();
};
