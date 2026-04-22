import express from "express";
import { createUrl, deleteUrl, getUrl, getUrlByid } from "../controller/urlController.js";

const router = express.Router();

router.post("/shortUrl",createUrl)
router.get("/shortUrl",getUrl)
router.delete("/shortUrl",deleteUrl)
router.get("/shortUrl/:id",getUrlByid)

export default router;