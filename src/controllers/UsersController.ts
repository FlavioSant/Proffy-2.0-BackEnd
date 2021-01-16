import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { hash } from 'bcryptjs';

import db from '../database/connection';

export default class UsersController {
  async create(request: Request, response: Response) {
    const {
      name,
      last_name,
      email,
      password,
      avatar,
      whatsapp,
      bio,
    } = request.body;

    try {
      const [user] = await db('users').where('email', email).select('*');

      if (user) {
        return response.status(400).json({
          error: 'This email alreary exists.',
        });
      }

      const hashedPassword = await hash(password, 8);

      await db('users').insert({
        id: uuid(),
        name,
        last_name,
        email,
        password: hashedPassword,
        avatar,
        whatsapp,
        bio,
      });

      return response.status(201).send();
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        error: 'Unexpected error while creating new user',
      });
    }
  }
}
