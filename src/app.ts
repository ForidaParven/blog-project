import express, { Request, Response } from 'express';
import cors from 'cors';
import { blogRouter } from './app/modules/blog/blog.route';
import { authRouter } from './app/modules/auth/auth.route';
import userRouter from './app/modules/user/user.route';

const app = express();

app.use(express.json());
app.use(cors());

// application route
app.use('/api/blogs',blogRouter);
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from blog-Project file');
});

export default app;
