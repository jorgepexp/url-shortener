import express, { Request, Response } from 'express';
// import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import Link from '../models/link';

// Global Config
export const linksRouter = express.Router();

// POST
linksRouter.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const newLink = req.body as Link;
    console.log('newLink', newLink);

    if (collections.links) {
      const result = await collections.links.insertOne(newLink);
      result
        ? res.status(201).send('Link añadido correctamente')
        : res.status(500).send('No se ha podido añadir el link');
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.status(400).send({ message });
  }
});
