const express = require('express');
const router = express.Router();

const faq = require('../controllers/faq.controller');
const room = require('../controllers/room.controller');
const contact = require('../controllers/contact.controller');

//ROUTES
//----------FAQ ROUTES-----------
router.get('/faq', faq.getFaqs);
// router.get('/faq/:id', faq.getFaq);
// router.get('/faq', faq.createFaq);
// router.put('/faq/:id', faq.editFaqFaq);
// router.delete('faq/:id', faq.deleteFaq);

//----------FAQ ROUTES-----------
router.get('/room', room.getRooms);
// router.get('/room/:id', room.getFaq);
// router.get('/room', room.createFaq);
// router.put('/room/:id', room.editFaqFaq);
// router.delete('room/:id', room.deleteFaq);

//----------FAQ ROUTES-----------
router.get('/contact', contact.getContacts);
// router.get('/contact/:id', room.getContact);
// router.get('/contact', room.createContact);
// router.put('/contact/:id', room.editContact);
// router.delete('contact/:id', room.deleteContact);

module.exports = router;