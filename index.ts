import Express from 'express';
import cors from 'cors';
import { router as UserRoute } from './routes/User.route';
import { router as BlogRoute } from './routes/Blog.route';

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(UserRoute);
app.use(BlogRoute);

app.listen(3000, () => {
    console.log('Server up...');
});
