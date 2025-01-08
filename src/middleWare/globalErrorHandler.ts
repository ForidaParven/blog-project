
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import AppError from '../app/errors/AppError';
import handleCastError from '../app/errors/handleCastError';
import handleDuplicateError from '../app/errors/handleDuplicateError';
import handleValidationError from '../app/errors/handleValidationError';
import handleZodError from '../app/errors/handleValidationError';
import { TErrorSources } from '../app/interface/error';
import config from '../app/config';
import { Request, Response, NextFunction } from 'express';


const globalErrorHandler: ErrorRequestHandler = (  error: any,
    req: Request,
    res: Response,
    next: NextFunction): void => {
  //setting default values
  let statusCode = 400;
  let message = 'Something went wrong!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error as any);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error?.code === 11000) {
    const simplifiedError = handleDuplicateError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }

  //ultimate return
   res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error,
    stack: config.NODE_ENV === 'development' ? error?.stack : null,
  });
};

export default globalErrorHandler;

