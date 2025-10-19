const prisma = require('../config/database');

const createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
      data: {
        id: contact.id,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContact,
};
