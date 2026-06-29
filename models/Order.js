const mongoose = require('mongoose')


const { Schema } = mongoose;

const orderSchema = new Schema({
    name: {
        type: 'String',
    },
    email: {
        type: 'String',
    },
    products: [{

        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        },
        quantity: {
            type: Number
        },
        variantId:{
            type: mongoose.Schema.Types.ObjectId
        }
    }],
//    products: [{
//   type: String,

// }],
    total: {
        type: 'String',
    },
    subtotal: {
        type: 'Number',
    },
    deliveryCharges: {
        type: 'Number',
    },
    country: {
        type: 'String',
    },
    city: {
        type: 'String',
    },
    phone: {
        type: 'String',
    },
    address: {
        type: 'String',
    },
    screenShot: {
        type: 'String',
    },
  
    date:{
        type: 'Date',
        default: Date.now,
    }
    
   
});

module.exports = mongoose.model('order', orderSchema)