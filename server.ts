import express from 'express';
import db from './services/database.service';
import cors from 'cors';
import { linksRouter } from './routes/links.router';
import { config } from 'dotenv';
config();
const app = express();

//Middleware para parsear json y urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cors
const corsConfig = {
  origin: [
    'http://localhost:8080',
    'https://localhost:8080',
    'http://localhost:3000',
    'https://localhost:3000',
  ],
  credentials: true,
};
app.use(cors(corsConfig));

// Endpoints de la aplicación
app.use('/links', linksRouter);

if (process.env.NODE_ENV !== 'test') {
  db.connect()
    .then(() => {
      app.listen(process.env.PORT || 4000, () =>
        console.log(`Port ${process.env.PORT} open. Server listening ✅ `)
      );
    })
    .catch((error: Error) => {
      console.error('Error al conectarse con la BDD', error);
      process.exit(1);
    });
}

module.exports = { app };
