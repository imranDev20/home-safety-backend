module.exports.stripeWebhook = async (req, res) => {
  const payload = req.body;

  console.log("Got payload: " + payload);

  res.status(200).end();
};
