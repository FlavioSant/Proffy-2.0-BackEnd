import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import db from '../database/connection';

import authConfig from '../config/auth';

export default class SessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const [user] = await db('users').where('email', email).select('*');

      if (!user) {
        return response.status(401).json({
          error: 'Incorrect email / password combination.',
        });
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        return response.status(400).json({
          error: 'Incorrect email / password combination.',
        });
      }

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({}, secret, {
        subject: user.id,
        expiresIn: expiresIn,
      });

      delete user.password;

      return response.status(201).json({
        user,
        token,
      });
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        error: 'Unexpected error while creating new session',
      });
    }
  }
}
