const express = require('express')
const router = express.Router()


router.post('/create-checkout', async (req, res) => {
  try {
    const {
      productId,
      price,
      email,
      quantity = 1,
    } = req.body;

    if (!productId || !email) {
      return res.status(400).json({
        error: "productId and email are required",
      });
    }

    const payload = {
      product_permalink: productId,
      email,
      quantity,
    };

    if (price) payload.price = price; // pay-what-you-want

    const response = await fetch(`https://api.gumroad.com/v2/sales`, {
      method: "POST",
      headers: {
        Authorization: `Bearer TnsVydiGqtoOy-QDyKhu0QnLonrP08wWgqSfrn-KM6Y`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gumroad API Error:", data);
      return res.status(response.status).json({
        error: "Gumroad API error",
        details: data,
      });
    }

    res.json({
      checkoutUrl: data.sale.short_url,
    });

  } catch (error) {
    console.error("Gumroad Checkout Error:", error.message);

    res.status(500).json({
      error: "Failed to create Gumroad checkout",
    });
  }
});



module.exports = router