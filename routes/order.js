const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // adjust path if needed

// GET all orders — latest first
router.get('/getorders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ date: -1 });
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET single order
router.get('/getorder/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST create order
router.post('/createorder', async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, products, total, subtotal, deliveryCharges, country, city, phone, address, imgUrl } = req.body;
        const order = new Order({ name, email, products, total, subtotal, deliveryCharges, country, city, phone, address,screenShot: imgUrl });
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// PUT edit order
router.put('/editorder/:id', async (req, res) => {
    try {
        const { name, email, products, total, subtotal, deliveryCharges, country, city, phone, address } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { name, email, products, total, subtotal, deliveryCharges, country, city, phone, address },
            { new: true }
        );
        if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
        res.json(updatedOrder);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE order — returns updated list
router.delete('/deleteorder/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        const remaining = await Order.find().sort({ date: -1 });
        res.json(remaining);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

// In your main server file (app.js / index.js) add:
// app.use('/api/orders', require('./routes/orderRoutes'))