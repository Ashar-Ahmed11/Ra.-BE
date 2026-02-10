const mongoose = require('mongoose')



const { Schema } = mongoose;

const InfoSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    whatsAppNumber: {
        type: 'String',

    },
    karachiDelivery: {
        type: 'Number',

    },
    otherDelivery: {
        type: 'Number',

    },


});

module.exports = mongoose.model('basicInfo', InfoSchema)