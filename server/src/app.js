import express from 'express';
import categoryRoutes from './routes/category.routes.js';

const app = express();

app.use('/api/categories', categoryRoutes);

export default app;