// External dependencies
import mongodb from 'mongodb';
import { config } from 'dotenv';

// Global variables
export const collections: { links?: mongodb.Collection } = {};

// Type declarations for the variables in .env
declare const process: {
  env: {
    DB_CONN_STRING: string;
    MAIN_COLLECTION_NAME: string;
    DB_NAME: string;
  };
};

// Initialize connection
export async function connectToDatabase() {
  config();

  const client: mongodb.MongoClient = new mongodb.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongodb.Db = client.db(process.env.DB_NAME);

  const linksCollection: mongodb.Collection = db.collection(
    process.env.MAIN_COLLECTION_NAME
  );

  collections.links = linksCollection;
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${linksCollection.collectionName}`
  );
}
