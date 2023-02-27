import { Router } from "express";
import { createToDoNew, deleteToDoNew, getToDoNew,  updateToDoNew } from "../controllers/todosnew";


const router = Router();

router.post("/", createToDoNew);

router.get("/:id", getToDoNew);

// router.get("/:id", getToDoNewSingle);

router.patch("/:id", updateToDoNew);

router.delete("/:id", deleteToDoNew);

export default router;