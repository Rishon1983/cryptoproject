import express from 'express';
import cymulateController from '../controllers/cymulateController.js';

const router = express.Router();

router.post('/api/v1/cymulateSettings', cymulateController.cymulateSettings);

export default router;