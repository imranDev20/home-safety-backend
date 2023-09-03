const Order = require("../model/Order");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.createCheckoutSession = async (req, res) => {
  try {
    const lineItems = req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.SITE_DOMAIN}/payment?success=true`,
      cancel_url: `${process.env.SITE_DOMAIN}/payment?success=false`,
    });

    return res.status(200).send({
      success: true,
      message: "Session created successfully.",
      sessionUrl: session.url,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};
