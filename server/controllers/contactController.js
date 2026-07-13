const Contact = require("../models/Contact");

const sendMessage = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: "Message Saved Successfully",
      data: contact
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  sendMessage
};