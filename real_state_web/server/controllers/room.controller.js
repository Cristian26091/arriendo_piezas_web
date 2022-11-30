const room = require('../models/room');
const roomCtrl = {};

roomCtrl.getRooms = async (req, res) => {
    const rooms = await room.find();
    res.json(rooms);
}

roomCtrl.getRoom = function () {

}

roomCtrl.createRoom = (req, res) =>{
    
}

roomCtrl.editRoom = function () {

}

roomCtrl.deleteRoom = function () {

}


module.exports = roomCtrl;