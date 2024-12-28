import { Request, Response, NextFunction } from 'express';

// Custom Error Handler Middleware
function errorHandler(
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const errorDetails = err.details || null;
  const stack = process.env.NODE_ENV === 'production' ? null : err.stack;

  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error: {
      details: errorDetails,
    },
    stack,
  });
}

export default errorHandler;
