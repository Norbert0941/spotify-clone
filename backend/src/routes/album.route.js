import { Router } from "express";
import { allAlbums, getAlbumById } from "../controller/album.controller.js";

const router = Router();

router.get("/", allAlbums);
router.get("/:albumId", getAlbumById);

export default router;
