// External dependencies
import * as mongodb from 'mongodb';

export const collections: { links?: mongodb.Collection } = {};

// Type declarations for the variables in .env
declare const process: {
  env: {
    DB_URI: string;
    MAIN_COLLECTION_NAME: string;
    DB_NAME: string;
  };
};

let connection: any;
// Initialize connection
const connect = async () => {
  const client: mongodb.MongoClient = new mongodb.MongoClient(
    process.env.DB_URI
  );

  connection = await client.connect();
  const db: mongodb.Db = client.db(process.env.DB_NAME);

  const linksCollection: mongodb.Collection = db.collection(
    process.env.MAIN_COLLECTION_NAME
  );

  collections.links = linksCollection;
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${linksCollection.collectionName}`
  );
  // await client.close();
};

const close = async () => {
  connection.close();
};

export default { connect, close };
