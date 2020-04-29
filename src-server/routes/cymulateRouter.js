import express from 'express';
import cymulateController from '../controllers/cymulateController.js';

const router = express.Router();

router.post('/api/v1/getCymulateSettings', cymulateController.getCymulateSettings)
router.post('/api/v1/createCymulateSettings', cymulateController.createCymulateSettings)
router.post('/api/v1/updateCymulateSettings', cymulateController.updateCymulateSettings)
router.post('/api/v1/deleteCymulateSettings', cymulateController.deleteCymulateSettings)

export default router;