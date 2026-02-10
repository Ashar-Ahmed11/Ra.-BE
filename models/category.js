const mongoose = require('mongoose')



const { Schema } = mongoose;

const categorySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    mainCarousalImgDesktop: {
        type: 'String',

    },
    mainCarousalImgPhone: {
        type: 'String',

    },
    mainHeading: {
        type: 'String',

    },
    firstHeading: {
        type: 'String',
    },
    firstSmallPara: {
        type: 'String',
    },
    firstSmallParaTwo: {
        type: 'String',
    },
    firstSmallParaThree: {
        type: 'String',
    },
    secondHeading: {
        type: 'String',
    },
    secondSmallPara: {
        type: 'String',
    },
    secondSmallParaTwo: {
        type: 'String',
    },
    secondSmallParaThree: {
        type: 'String',
    },


});

module.exports = mongoose.model('category', categorySchema)