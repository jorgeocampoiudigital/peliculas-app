const Director = require('../models/director.model');

exports.getAll = async (req, res) => {
  const data = await Director.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Director.getById(req.params.id);
  data ? res.json(data) : res.status(404).json({ error: 'No encontrado' });
};

exports.create = async (req, res) => {
  const data = await Director.create(req.body);
  res.status(201).json(data);
};

exports.update = async (req, res) => {
  const data = await Director.update(req.params.id, req.body);
  res.json(data);
};

exports.delete = async (req, res) => {
  await Director.delete(req.params.id);
  res.status(204).end();
};
