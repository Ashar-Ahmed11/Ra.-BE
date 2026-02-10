const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/', async (req, res) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'memonfoodsandspices@gmail.com',
      pass: 'ajikizflolrqazfw'
    }
  });

  const mailOption = {
    from: "memonfoodsandspices@gmail.com",
    to: req.body.email,
    subject: "Memon Foods & Spices Order Confirmation",
    html: `<div style="background-color:white; padding:30px; font-family:Arial, sans-serif;">
      <div style="text-align:center;">
        <img 
          src="https://memon-foods-spices.web.app/static/media/nukhbaLogo1.ae30d010a9995c47203f.png" 
          alt="Memon Foods & Spices Logo"
          style="width:120px; height:auto; margin-bottom:20px;"
        />
      </div>
      <h1 style="color:black; text-align:center;">Thanks For Shopping ${req.body.name}</h1>
      <h3 style="padding:10px; color:black; text-align:center;">
        ${req.body.name}, your order has been confirmed. For further queries, please contact us on WhatsApp.
      </h3>
      <h2 style="color:black; text-align:center; text-decoration:underline; margin-top:30px;">Order Summary</h2>
      <table style="border:1px solid black; border-collapse:collapse; width:100%; margin-top:10px;">
        <tr style="background-color:#f9f9f9;">
          <th style="border:1px solid black; padding:8px; text-align:left; color:black;">Products</th>
          <th style="border:1px solid black; padding:8px; text-align:right; color:black;">Total</th>
        </tr>
        <tr>
          <td style="border:1px solid black; border-top:none; padding:8px; text-align:left; color:black;">${req.body.products}</td>
          <td style="border:1px solid black; border-top:none; padding:8px; text-align:right; color:black;">PKR ${req.body.total}</td>
        </tr>
        <tr>
          <td style="border:1px solid black; padding:8px; text-align:left; color:black;">Delivery Charges</td>
          <td style="border:1px solid black; padding:8px; text-align:right; color:black;">PKR ${req.body.deliveryCharges}.00</td>
        </tr>
        <tr style="background-color:#f9f9f9;">
          <th style="border:1px solid black; padding:8px; text-align:left; color:black;">Subtotal incl. Delivery Charges</th>
          <th style="border:1px solid black; padding:8px; text-align:right; color:black;">${req.body.subtotal}</th>
        </tr>
      </table>
      <h2 style="color:black; text-align:center; text-decoration:underline; margin-top:30px;">Delivery Details</h2>

      <table style="border:1px solid black; border-collapse:collapse; width:100%; margin-top:10px;">
  <tr style="background-color:#f9f9f9;">
    <th style="border:1px solid black; padding:8px; text-align:left; color:black;">Information</th>
    <th style="border:1px solid black; padding:8px; text-align:right; color:black;">Details</th>
  </tr>

  <tr>
    <td style="border:1px solid black; border-top:none; padding:8px; text-align:left; color:black;">Name</td>
    <td style="border:1px solid black; border-top:none; padding:8px; text-align:right; color:black;">${req.body.name}</td>
  </tr>

  <tr>
    <td style="border:1px solid black; padding:8px; text-align:left; color:black;">Email</td>
    <td style="border:1px solid black; padding:8px; text-align:right; color:black;">${req.body.email}</td>
  </tr>

  <tr>
    <td style="border:1px solid black; padding:8px; text-align:left; color:black;">Phone</td>
    <td style="border:1px solid black; padding:8px; text-align:right; color:black;">${req.body.phone}</td>
  </tr>

  <tr>
    <td style="border:1px solid black; padding:8px; text-align:left; color:black;">Address</td>
    <td style="border:1px solid black; padding:8px; text-align:right; color:black;">${req.body.address}</td>
  </tr>

  <tr>
    <td style="border:1px solid black; padding:8px; text-align:left; color:black;">City</td>
    <td style="border:1px solid black; padding:8px; text-align:right; color:black;">${req.body.city}</td>
  </tr>
</table>

    </div>`
  };

  transport.sendMail(mailOption, function (err, info) {
    if (err) {
      console.log("Email error:", err);
      return res.status(500).json({ success: false, message: "Email failed", error: err });
    } else {
      console.log("Email Sent: " + info.response);
      return res.status(200).json({ success: true, message: "Email sent successfully", info: info.response });
    }
  });
});



module.exports = router