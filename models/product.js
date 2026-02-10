const mongoose = require('mongoose')


const { Schema } = mongoose;

const productsSchema = new Schema({
    name: {
        type: 'String',
    },
    price: {
        type: 'Number',
    },
    priceAED: {
        type: 'Number',
    },
    variants:[
            {
                variant:{
                    type:"String"
                },
                price:{
                    type:"Number"
                }
            }
    ],

    description:{
        type:'String'
    },
    assets:[
            {url:{
                type:'String'
            }}
    ],
    youtubeLink:{
        type:'String'
    },
    homePreview:{
        type:'Boolean',
    },
    createdAt:{
        type:'Number'
    },
    theTitle:{
        type:'String'
    },
    category:{
        type:'String'
    }
    
});

module.exports = mongoose.model('products', productsSchema)