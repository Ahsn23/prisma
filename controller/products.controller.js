const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany(
      { include: { category: true }, }
    );
    res.json(products);
  }
  catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: { category: true },
    });
    res.json(product);
  }
  catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, categoryId } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        price,
        categoryId
      }
    });
    res.json(product);
  }
  catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(product);
  }
  catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, categoryId } = req.body;
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        price,
        categoryId
      },
    });
    res.json(product);
  }
  catch (error) {
    res.status(500).send({ error: error.message });
  }
};