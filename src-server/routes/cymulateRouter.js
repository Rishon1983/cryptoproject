import express from 'express';
import cymulateController from '../controllers/cymulateController.js';

const router = express.Router();

router.post('/api/v1/cymulateSettings', cymulateController.verifyToken, cymulateController.cymulateSettings);
router.post('/api/v1/cymulateLogin', cymulateController.login);

export default router;