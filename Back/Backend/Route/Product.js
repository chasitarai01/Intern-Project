import express from 'express';
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from '../Controller/productController.js';

const router = express.Router();

router.post('/', createProduct);         // Create a new product
router.get('/', getAllProducts);         // Get all products
router.get('/:id', getProductById);      // Get a single product by ID
router.put('/:id', updateProduct);       // Update a product by ID
router.delete('/:id', deleteProduct);    // Delete a product by ID

export default router;
