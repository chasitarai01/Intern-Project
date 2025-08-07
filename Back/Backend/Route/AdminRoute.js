import express from "express";
import { adminLogin} from "../Controller/AdminController.js";

const router = express.Router();

// Admin login route
router.post("/admin/login", adminLogin);


export default router;