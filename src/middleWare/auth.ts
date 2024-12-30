import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import catchAsync from '../utils/catchAsync';
import { IUserRole } from '../app/modules/user/user.interface';
import { User } from '../app/modules/user/user.model';


const auth = (...requiredRoles: IUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    // checking if the token is missing
    if (!token) {
      throw new Error( 'You are not authorized!');
    }
    
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as JwtPayload;

    console.log({decoded})

    const { role, email} = decoded;

    // checking if the user is exist
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('This user is not found !')
  }

  
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new Error(
        'You are not authorized',
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;