import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export const localStrategy = new LocalStrategy({
  usernameField: 'userId',
  passwordField: 'password',
}, async (userId, password, done) => {
    try {
        // Logic Here
    }
});
