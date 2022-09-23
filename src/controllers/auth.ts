import { Request, Response, NextFunction } from 'express';
import * as CONSTS from '../utils/consts';
import passport from 'passport';
import HttpError from '../interfaces/error';

export const localLogin = [
  (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      throw new HttpError(403, 'Already Logged In');
    } else {
      next();
    }
  },
  passport.authenticate('local', { failureRedirect: CONSTS.LOGIN_FAILURE_REDIRECT }),
  (req: Request, res: Response, next: NextFunction) => {
    res.redirect(CONSTS.LOGIN_SUCCESS_REDIRECT);
  },
];
