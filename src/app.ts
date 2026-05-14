import express from 'express';
import indexRoutes from './routes/index.routes';
import {corsConfig,limiterConfig} from './config/apiSecurity.config'

const app = express();

app.use(express.json());


app.use(corsConfig);
app.use(limiterConfig);
app.use('/', indexRoutes);

export default app;
