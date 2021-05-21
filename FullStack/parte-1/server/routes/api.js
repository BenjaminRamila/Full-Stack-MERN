const { Router } = require("express");
const router = Router();

const {
  postProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
} = require("../controllers/product");

router.post("/product", postProduct);
router.get("/product/:id", getProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product", getAllProducts);

module.exports = router;
