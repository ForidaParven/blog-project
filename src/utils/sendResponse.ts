

import { Response } from 'express';

type TSuccessResponse<T> = {
  success?: boolean;
  statusCode: number;
  message: string;
  token?: string;
  data?: T | T[] | null;
};

const sendResponse = <T>(res: Response, { success = true, statusCode, message, token, data }: TSuccessResponse<T>) => {
  const response: any = { success, statusCode, message };
  if (token) response.token = token;
  if (data && Object.keys(data).length > 0) response.data = data;
  res.status(statusCode).json(response);
};

export default sendResponse;
