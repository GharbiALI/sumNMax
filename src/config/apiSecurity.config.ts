import { rateLimit} from 'express-rate-limit';
import cors from 'cors';

export const limiterConfig = rateLimit({
    windowMs:  60 * 1000,
    limit: 2,
});


const corsOptions = {
  methods: ['POST'], 
};



export const corsConfig = cors(corsOptions);