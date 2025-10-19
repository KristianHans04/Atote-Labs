const prisma = require('../config/database');

const getAllVentures = async (req, res, next) => {
  try {
    const ventures = await prisma.venture.findMany({
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    res.json({
      success: true,
      data: ventures,
    });
  } catch (error) {
    next(error);
  }
};

const getFeaturedVentures = async (req, res, next) => {
  try {
    const ventures = await prisma.venture.findMany({
      where: { featured: true },
      orderBy: { createdAt: 'desc' },
      take: 4,
    });

    res.json({
      success: true,
      data: ventures,
    });
  } catch (error) {
    next(error);
  }
};

const getVentureById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const venture = await prisma.venture.findUnique({
      where: { id },
    });

    if (!venture) {
      return res.status(404).json({
        success: false,
        error: 'Venture not found',
      });
    }

    res.json({
      success: true,
      data: venture,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllVentures,
  getFeaturedVentures,
  getVentureById,
};
