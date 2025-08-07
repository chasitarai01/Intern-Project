import express from 'express';
import { addKhalti, verifyTransaction } from "../Controller/KhaltiController.js";

const router = express.Router();

// ✅ POST /api/khalti/initiate
router.post('/initiate', addKhalti);

// ✅ POST /api/khalti/verify
router.post('/verify', verifyTransaction);

export default router;
