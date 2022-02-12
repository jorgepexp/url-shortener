// External Dependencies
import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import Link from '../models/link';

// Global Config
export const linksRouter = express.Router();
linksRouter.use(express.json());

// GET

// POST
linksRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newLink = req.body as Link;

    if (collections.links) {
      const result = await collections.links.insertOne(newLink);
      result
        ? res.status(201).send('Link añadido correctamente')
        : res.status(500).send('No se ha podido añadir el link');
    }
  } catch (error) {
    let message;
    console.error({ message });
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.status(400).send({ message });
  }
});
// PUT

// DELETE
