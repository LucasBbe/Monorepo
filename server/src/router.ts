import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Declaration of a "Welcome" route

import sayActions from "./modules/say/sayActions";
router.get("/", sayActions.sayWelcome);

import programActions from "./modules/program/programActions";
router.get("/api/programs", programActions.browse);

/* ************************************************************************* */
import categoryActions from "./modules/category/categoryActions";

// router.get("/api/categories", categoryActions.browse);
// router.get("/api/categories/:id", categoryActions.read);

// router.put("/api/programs/:id", programActions.validate, programActions.edit);

// router.post("/api/programs", programActions.validate, programActions.add);
// router.delete("/api/programs/:id", programActions.destroy);

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
router.put("/api/programs/:id", programActions.validate, programActions.edit);
router.post("/api/programs", programActions.validate, programActions.add);
router.delete("/api/programs/:id", programActions.destroy);

export default router;
