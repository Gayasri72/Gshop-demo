import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc fetch all products
//@route Get/api/products
//@access Public
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc fetch a product
//@route Get/api/products/:id
//@access Public
const getProductbyId = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});
export { getProduct, getProductbyId };
