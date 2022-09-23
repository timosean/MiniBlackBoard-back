import { Strategy as LocalStrategy } from 'passport-local';
import * as AuthService from '../services/auth';

export const localStrategy = new LocalStrategy(
  {
    usernameField: 'userId',
    passwordField: 'password',
  },
  async (userId, password, done) => {
    try {
      // Logic Here
      const result = await AuthService.AuthenticateUser(userId, password);
      if (result) {
        return done(null, result);
      }
    } catch (err) {
      return done(err);
    }
  }
);
