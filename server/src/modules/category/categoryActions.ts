// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const categoriesBrowse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredPrograms = categories.filter((program) =>
      program.name.includes(req.query.q as string),
    );

    res.json(filteredPrograms);
  } else {
    res.json(categories);
  }
};

const categoriesRead: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const program = categories.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default {
  categoriesBrowse,
  categoriesRead,
};
