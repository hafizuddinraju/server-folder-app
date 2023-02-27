import { Router } from "express";
import { createToDoNew, deleteToDoNew, getToDoNew,  updateToDoNew } from "../controllers/todosnew";

// all routes todosNew

const router = Router();

router.post("/", createToDoNew);

router.get("/:id", getToDoNew);



router.patch("/:id", updateToDoNew);

router.delete("/:id", deleteToDoNew);

export default router;