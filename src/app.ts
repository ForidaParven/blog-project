import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import { blogRouter } from './app/modules/blog/blog.route';
import { authRouter } from './app/modules/auth/auth.route';
import userRouter from './app/modules/user/user.route';
import { adminRouter } from './app/modules/admin/admin.route';
import errorHandler from './app/errors/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());

// application route
app.use('/api/blogs',blogRouter);
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from blog-Project file');
});

app.get('/error', (req: Request, res: Response, next: NextFunction) => {
  const error = new Error('This is a test error');
  (error as any).statusCode = 400; 
  next(error); 
});


app.use(errorHandler)

export default app;

