const contact = require('../models/contact');
const contactCtrl = {};


contactCtrl.getContacts = async (req, res) => {
    const contacts = await contact.find();
    res.json(contacts);
}

contactCtrl.getContact = function () {


}

contactCtrl.createContact = (req, res) =>{

}

contactCtrl.editContact = function () {

}

contactCtrl.deleteContact = function () {

}

module.exports = contactCtrl;