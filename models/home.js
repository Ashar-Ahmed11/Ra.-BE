const mongoose = require('mongoose')



const { Schema } = mongoose;

const homeSchema = new Schema({
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
    firstHeading: {
        type: 'String',

    },
    secondHeading: {
        type: 'String',
    },
    secondSmallPara: {
        type: 'String',

    },
    secondSmallHead: {
        type: 'String',

    },

    secondSmallParaTwo: {
        type: 'String',

    },
    secondSmallParaThree: {
        type: 'String',

    },
    bodyImg: {
        type: 'String'
    },
    thirdSmallPara: {
        type: 'String',

    },
    thirdSmallHead: {
        type: 'String',

    },
    thirdSmallParaTwo: {
        type: 'String',

    },

    fourSmallHead: {
        type: 'String',

    },
    fourSmallPara: {
        type: 'String',

    },
    fourSmallParaTwo: {
        type: 'String',

    },
    secondHeading: {
        type: 'String',

    },
    footerCarousalImgDesktop: {
        type: 'String',

    },
    footerCarousalImgPhone: {
        type: 'String',

    }

});

module.exports = mongoose.model('home', homeSchema)