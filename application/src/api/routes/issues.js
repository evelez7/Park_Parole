const express = require('express');
const issueController = require('../controllers/Issues');

const router = express.Router();

router.get('/', issueController.getIssues);

// router.get('/', issueController.getIssues()); 

// router.get('/', issueController.getIssues());

// router.get('/', issueController.getIssues());

// router.get('/', issueController.getIssues());

// router.get('/', issueController.getIssues());

module.exports = router;