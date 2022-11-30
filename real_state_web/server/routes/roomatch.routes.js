const express = require('express');
const router = express.Router();

const faq = require('../controllers/faq.controller');
const room = require('../controllers/room.controller');

//ROUTES
//----------FAQ ROUTES-----------
router.get('/faq', faq.getFaqs);
// router.get('/faq/:id', faq.getFaq);
// router.get('/faq', faq.createFaq);
// router.put('/faq/:id', faq.editFaqFaq);
// router.delete('faq/:id', faq.deleteFaq);

//----------FAQ ROUTES-----------
router.get('/room', room.getRooms);
// router.get('/faq/:id', faq.getFaq);
// router.get('/faq', faq.createFaq);
// router.put('/faq/:id', faq.editFaqFaq);
// router.delete('faq/:id', faq.deleteFaq);

module.exports = router;