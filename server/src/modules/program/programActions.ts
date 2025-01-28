import type { RequestHandler } from "express";

import programRepository from "./programRepository";

const browse: RequestHandler = async (req, res) => {
  const nursery = await programRepository.readAll();

  res.json(nursery);
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const categoryId = Number(req.params.id);
    const category = await programRepository.read(categoryId);

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const category = {
      id: Number(req.params.id),
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: Number(req.body.year),
      category_id: req.body.category_id,
    };

    const affectedRows = await programRepository.update(category);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCategory = {
      id: Number(req.params.id),
      title: String(req.body.title),
      synopsis: String(req.body.synopsis),
      poster: String(req.body.poster),
      country: String(req.body.country),
      year: Number(req.body.year),
      category_id: req.body.category_id,
    };

    const insertId = await programRepository.create(newCategory);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const validate: RequestHandler = (req, res, next) => {
  type ValidationError = {
    field: string;
    message: string;
  };

  const errors: ValidationError[] = [];
  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ validationErrors: errors });
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const categoryId = Number(req.params.id);

    await programRepository.delete(categoryId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, edit, add, destroy, read, validate };
