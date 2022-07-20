import { Router } from "express";
import * as controllers from "../controllers/controllers.js"
const router = Router();


router.get("/", (req, res) => { 
  res.send("SORRY WRONG ENDPOINT ");
})
router.get("/all",controllers.getAllFacts)

router.post("/create", (req, res) => { 
  res.send("create fact ");
})
router.get("/:id", (req, res) => { 
  res.send("get by id ");
})
router.put("/:id", (req, res) => { 
  res.send("update by id ");
})
router.delete("/:id", (req, res) => { 
  res.send("delete by id ");
})


 
export default router;