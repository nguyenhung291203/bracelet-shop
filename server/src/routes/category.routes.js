import express from 'express';
import connection from '../config/db.js';

const router = express.Router();

const fetchCategories = async (_, res, next) => {
  try {
    const categories = await new Promise((resolve, reject) => {
      connection.query(
        'SELECT id, name FROM categories WHERE is_deleted = 0',
        (error, results) => {
          if (error) return reject(error);
          resolve(results);
        }
      );
    });

    res.json({ success: true, data: categories });
  } catch (error) {
    next(error);
  }
};

router.get('/', fetchCategories);

export default router;